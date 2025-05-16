# app.py (Training Your Model)
import pandas as pd
from sklearn.preprocessing import LabelEncoder, StandardScaler
from sklearn.model_selection import train_test_split
from sklearn.linear_model import Lasso
from xgboost import XGBClassifier
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score, classification_report
import pickle

# Loading the Dataset
file_path = 'enhanced_health_insurance_claims.csv'  # Replace with your dataset path
insurance_data = pd.read_csv(file_path)
insurance_data['ClaimDate'] = pd.to_datetime(insurance_data['ClaimDate'])

# Handling Missing and Anomalous Values
median_age = insurance_data[insurance_data['PatientAge'] > 0]['PatientAge'].median()
insurance_data.loc[insurance_data['PatientAge'] == 0, 'PatientAge'] = median_age

# Ensuring ClaimStatus has only three values (Approved, Rejected, Pending)
insurance_data['ClaimStatus'] = insurance_data['ClaimStatus'].replace({
    'Approved': 'Approved',
    'Rejected': 'Rejected',
    'Pending': 'Pending'
})

# Encoding Claim Status for Classification (Target Variable)
label_encoder = LabelEncoder()
insurance_data['ClaimStatus'] = label_encoder.fit_transform(insurance_data['ClaimStatus'])

# One-Hot Encoding for Categorical Variables
insurance_data_encoded = pd.get_dummies(
    insurance_data, 
    columns=['PatientGender', 'ProviderSpecialty', 'ClaimType', 'ClaimSubmissionMethod'],
    drop_first=True
)

# Ensuring All Data is Numeric
insurance_data_encoded = insurance_data_encoded.apply(pd.to_numeric, errors='coerce').fillna(0)

# Step 2: Separating Data for Regression and Classification
X = insurance_data_encoded.drop(columns=[
    'ClaimID', 'PatientID', 'ProviderID', 'ClaimDate',
    'DiagnosisCode', 'ProcedureCode', 'ProviderLocation'
])
X_features = X.drop(columns=['ClaimAmount', 'ClaimStatus'])
y_regression = insurance_data_encoded['ClaimAmount']  # For ClaimAmount (Regression)
y_classification = insurance_data_encoded['ClaimStatus']  # For ClaimStatus (Classification)

# Saving the list of expected features (for consistent predictions)
expected_features = X_features.columns.tolist()

# Splitting Data for Both Models
X_train, X_test, y_train_reg, y_test_reg = train_test_split(X_features, y_regression, test_size=0.2, random_state=42)
_, _, y_train_clf, y_test_clf = train_test_split(X_features, y_classification, test_size=0.2, random_state=42)

# Standardizing Numerical Features
scaler = StandardScaler()
numerical_features = [col for col in ['PatientAge', 'PatientIncome'] if col in X_train.columns]
X_train[numerical_features] = scaler.fit_transform(X_train[numerical_features])
X_test[numerical_features] = scaler.transform(X_test[numerical_features])

# Step 3: Training Regression Model (Lasso)
lasso_model = Lasso(alpha=100, max_iter=1000, random_state=42)
lasso_model.fit(X_train, y_train_reg)
regression_predictions = lasso_model.predict(X_test)

# Evaluating Regression Model
lasso_mae = mean_absolute_error(y_test_reg, regression_predictions)
lasso_mse = mean_squared_error(y_test_reg, regression_predictions)
lasso_r2 = r2_score(y_test_reg, regression_predictions)

print("\n✅ Regression Model (Lasso) Performance:")
print(f"MAE: {lasso_mae:.2f}")
print(f"MSE: {lasso_mse:.2f}")
print(f"R²: {lasso_r2:.4f}")

# Step 4: Training Classification Model (XGBoost)
xgb_classifier = XGBClassifier(
    n_estimators=200, 
    learning_rate=0.1, 
    max_depth=6, 
    random_state=42,
    use_label_encoder=False,
    eval_metric="mlogloss"
)
xgb_classifier.fit(X_train, y_train_clf)
classification_predictions = xgb_classifier.predict(X_test)

# Evaluating Classification Model
classification_report_clf = classification_report(y_test_clf, classification_predictions, target_names=["Rejected", "Approved", "Pending"])
print("\n✅ Classification Model (XGBoost) Performance:")
print(classification_report_clf)

# Step 5: Saving the Trained Models (Complete Pipeline)
model_pipeline = {
    'scaler': scaler,
    'lasso': lasso_model,
    'xgboost': xgb_classifier,
    'numerical_features': numerical_features,
    'label_encoder': label_encoder,
    'expected_features': expected_features  # Saving the exact list of features
}

with open('model_pipeline.pkl', 'wb') as file:
    pickle.dump(model_pipeline, file)

print("\n✅ Model training complete and saved as model_pipeline.pkl")

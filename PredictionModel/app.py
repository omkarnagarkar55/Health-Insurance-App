# app.py (Flask API for Claim Prediction)
from flask import Flask, request, jsonify
import pickle
import pandas as pd

app = Flask(__name__)

# Loading the saved model pipeline
with open('model_pipeline.pkl', 'rb') as file:
    model_pipeline = pickle.load(file)

scaler = model_pipeline['scaler']
lasso = model_pipeline['lasso']
xgboost = model_pipeline['xgboost']
numerical_features = model_pipeline['numerical_features']
label_encoder = model_pipeline['label_encoder']
expected_features = model_pipeline['expected_features']  # The exact list of features used in training

@app.route('/')
def home():
    return """
    <h1>Claim Prediction API</h1>
    <p>Use the /predict endpoint to predict ClaimAmount and ClaimStatus.</p>
    <p>Send a POST request with JSON data: {"age": 30, "income": 50000, "year": 2025, "month": 5, "day": 15}</p>
    """

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        print("\n✅ Received Input Data:", data)

        # Validating input data
        if not data:
            return jsonify({"error": "No data provided"}), 400

        # Extracting user inputs with default values if missing
        user_data = {
            'PatientAge': float(data.get('age', 0)),
            'PatientIncome': float(data.get('income', 0)),
            'ClaimYear': int(data.get('year', 0)),
            'ClaimMonth': int(data.get('month', 0)),
            'ClaimDay': int(data.get('day', 0))
        }
        print("\n✅ User Data Parsed:", user_data)

        # Convert input to DataFrame
        user_df = pd.DataFrame([user_data])
        print("\n✅ User Data DataFrame:\n", user_df)

        # Ensuring all expected features exist in the DataFrame
        for feature in expected_features:
            if feature not in user_df.columns:
                user_df[feature] = 0  # Default to 0 if missing

        # Removing any extra features not in the expected set
        user_df = user_df[expected_features]
        print("\n✅ User Data (Aligned with Expected Features):\n", user_df)

        # Scaling numerical features (if present)
        if any(feature in user_df.columns for feature in numerical_features):
            user_df[numerical_features] = scaler.transform(user_df[numerical_features])
            print("\n✅ Scaled User Data:\n", user_df)

        # Predicting ClaimAmount (Regression)
        claim_amount_pred = lasso.predict(user_df)[0]
        
        # Predicting ClaimStatus (Classification)
        claim_status_pred = xgboost.predict(user_df)
        claim_status_label = label_encoder.inverse_transform(claim_status_pred)[0]

        # Flagging suspicious claims
        flagged = bool(claim_status_label == "Rejected" or claim_amount_pred > 10000)

        print("\n✅ Prediction Complete: Amount:", claim_amount_pred, "Status:", claim_status_label)
        return jsonify({
            'Predicted Claim Amount': f"${claim_amount_pred:.2f}",
            'Predicted Claim Status': claim_status_label,
            'Flagged': flagged
        })

    except ValueError as ve:
        print("\n❌ Value Error:", str(ve))
        return jsonify({"error": f"Value Error: {str(ve)}"}), 400

    except KeyError as ke:
        print("\n❌ Key Error (Missing Feature):", str(ke))
        return jsonify({"error": f"Missing Feature Error: {str(ke)}"}), 400

    except Exception as e:
        print("\n❌ Unexpected Error:", str(e))
        return jsonify({"error": f"Unexpected Error: {str(e)}"}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5003, debug=True)

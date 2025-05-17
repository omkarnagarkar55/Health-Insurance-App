
# Health Insurance Predictive Analytics Project

## 1. Introduction

This project is a comprehensive predictive analytics system designed to streamline health insurance claims management. 
It leverages machine learning to predict claim approvals and detect potential fraudulent claims, improving transparency 
and operational efficiency for insurance providers.

### Key Objectives:
- Enhance claims management through predictive analytics.
- Improve fraud detection using machine learning.
- Provide a user-friendly interface for both clients and administrators.

---

## 2. System Architecture

### Components:
- **Client Application:** React.js frontend for user interaction (policyholders).
- **Admin Dashboard:** React.js interface for administrators to review and manage claims.
- **Backend Server:** Node.js with Express.js handling API requests.
- **Machine Learning Microservice:** Python (Flask) serving ML models for claim prediction and fraud detection.

### Key Technologies:
- **Frontend:** React.js, Tailwind CSS for responsive design.
- **Backend:** Node.js, Express.js for RESTful API services.
- **Database:** MongoDB for data storage.
- **Machine Learning:** Python, Flask, Scikit-Learn, XGBoost, Logistic Regression.
- **Deployment:** Docker, Railway, Vercel.

---

## 3. Key Features

### Client Side (User Portal):
- Secure registration and login using JWT authentication.
- Submit health insurance claims with detailed information.
- Real-time claim approval predictions using ML.
- Track claim status directly from the dashboard.

### Admin Side (Admin Dashboard):
- View and manage all claims.
- Fraud detection with flags for "Likely Fraudulent" claims.
- Override claim statuses with manual review.
- Role-based access control for secure administration.

### Predictive Analytics:
- Claim Approval Prediction:
  - Model: Random Forest (85% accuracy, 0.91 ROC-AUC).
  - Key Features: Policy tenure, claim amount, diagnosis code.
- Fraud Detection:
  - Model: Logistic Regression (Precision: 88%, Recall: 84%, F1-Score: 0.86).
  - Data Handling: SMOTE for imbalance correction.

---

## 4. Installation Instructions

### Clone the Repository:
```bash
git clone https://github.com/omkarnagarkar55/Health-Insurance-App.git
cd Health-Insurance-App
```

### Setting Up the Server (Backend API):
```bash
cd ./server
npm install
npm start
```

### Setting Up the Client (User Portal):
```bash
cd ./client
npm install
npm start
```

### Setting Up the Admin Dashboard:
```bash
cd ./admin
npm install
npm start
```

### Setting Up the Machine Learning Microservice:
```bash
cd "./Prediction Model"
python3 -m venv env
source env/bin/activate  # Windows: env\Scripts\activate
pip install -r requirements.txt
python app.py
```

---

## 5. Usage Instructions

### Client Application (User Portal):
- Visit `http://localhost:3000`.
- Register/Login as a client.
- Submit claims and receive real-time prediction feedback.

### Admin Dashboard:
- Visit `http://localhost:4000`.
- Review claims, manage users, and monitor fraud detection results.

### API Endpoints (Server):
- Claim Submission: `POST /api/claims`
- Claim Prediction: `POST /api/predict`

### Prediction Microservice:
- Endpoint: `http://localhost:5001/predict`

Example API Request:
```bash
curl -X POST http://localhost:5001/predict -d '{"age": 45, "bmi": 26.5, "smoker": "yes"}'
```

---

## 6. Project Structure

```
Health-Insurance-App/
├── admin/                 # Admin Dashboard (React)
├── client/                # Client Application (React)
├── server/                # Backend API (Node.js, Express)
├── Prediction Model/      # Machine Learning Microservice (Python, Flask)
└── README.md              # Project Documentation
```

---

## 7. Methodology

### Data Collection:
- Health insurance claim data from publicly available datasets (~10,000 records).
- Features: age, gender, policy tenure, claim amount, diagnosis code.

### Machine Learning Models:
- Claim Approval Prediction: Random Forest (85% accuracy, ROC-AUC 0.91).
- Fraud Detection: Logistic Regression with class weighting (F1-Score 0.86).

### Model Training:
- Data Preprocessing: Label encoding, normalization, and feature engineering.
- Model Evaluation: Precision, Recall, F1-Score, ROC-AUC.

### Deployment:
- Frontend: Vercel (Client and Admin).
- Backend and ML API: Railway (Docker Containers).

---

## 8. Security and Compliance

- **Data Encryption:** TLS for data in transit, AES-256 for data at rest.
- **Authentication:** JWT (JSON Web Token) for secure user sessions.
- **Role-Based Access Control (RBAC):** Separate permissions for clients and admins.
- **HIPAA Compliance:** Security measures for handling health data.

---

## 9. Potential Future Improvements

- Extend model capabilities with deep learning for enhanced accuracy.
- Integrate advanced fraud detection using anomaly detection.
- Expand user interface with enhanced analytics and reporting.
- Implement CI/CD pipelines for automated deployment.

---

## 10. Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch`
3. Make your changes and commit: `git commit -m "Add new feature"`
4. Push to the branch: `git push origin feature-branch`
5. Create a pull request.

---

## 11. License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 12. Contact

For any questions, suggestions, or feedback, please open an issue in this repository or contact the author through GitHub.

---

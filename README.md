
# Health Insurance Claim Management

---

## 1. Introduction of the Project

The **Health Insurance Claim Management** is a comprehensive web application designed to streamline health insurance claim management. It consists of four modular components that together provide a complete solution for claim submission, management, and predictive analytics:

- **Admin Panel:** A dashboard for administrators to manage users, monitor claim processing, and oversee system performance.
- **Client Application:** The primary user interface for customers, where they can submit claims, view claim status, and access account information.
- **Server API:** A robust backend that provides secure RESTful APIs for the Client and Admin components, managing authentication, claim processing, and data storage.
- **Prediction Model Microservice:** A machine learning-powered service that predicts claim outcomes (approved or denied) using historical claim data, improving decision-making and efficiency.

---

## 2. Key Features

- **User Management:** Secure login and registration for clients and admins.
- **Claim Submission:** Clients can submit insurance claims through an intuitive interface.
- **Claim Status Tracking:** Clients can track the status of their claims in real-time.
- **Admin Dashboard:** Administrators can view, approve, or deny claims, and manage user roles.
- **Predictive Analytics:** Machine learning-based model that predicts claim outcomes, helping reduce denial rates.
- **Scalable Architecture:** Modular components (Client, Admin, Server, Prediction Model) can be independently deployed.
- **RESTful API:** Secure and scalable backend API for client-server communication.

---

## 4. Prerequisites

### System Requirements
- **Operating System:** Windows, macOS, or Linux
- **Node.js:** v14.x or above
- **Python:** v3.8 or above
- **npm:** v6.x or above
- **Git:** Latest version
- **Virtual Environment (Python):** `venv` module

---

## 5. Installation Instructions

### Clone the Repository
```bash
git clone https://github.com/omkarnagarkar55/Health-Insurance-App.git
cd Health-Insurance-App
```

### Setting Up Components (Server, Client, Admin, Prediction Model)
Refer to the README for detailed setup of each component.

---

## 6. Usage Instructions
- Visit Client at `http://localhost:3000`
- Visit Admin at `http://localhost:4000`
- Access API at `http://localhost:5000`
- Prediction Model at `http://localhost:5001`

---

## 7. Project Structure

```
Health-Insurance-App/
├── admin/                 # Admin Dashboard (React)
├── client/                # Client Application (React)
├── server/                # Server API (Node.js, Express)
├── Prediction Model/      # Machine Learning Model (Python, Flask)
└── README.md              # Project Documentation
```

---

## 8. Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch.
3. Make your changes and commit.
4. Push to the branch.
5. Create a pull request.

---

## 9. License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 10. Contact

For any questions, suggestions, or feedback, please open an issue in this repository or contact the author through GitHub.

---

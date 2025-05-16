import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AdminNavbar from "./components/Navbar/AdminNavbar";
import Dashboard from "./components/Dashboard/Dashboard";
import ManagePlans from "./components/ManagePlans/ManagePlans";
import ManageClaims from "./components/ManageClaims/ManageClaims";
import Transactions from "./components/Transactions/Transactions";
import UsersList from "./components/UsersList/UsersList";
import SignIn from "./components/Auth/SignIn";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Navbar/Profile";
import Settings from "./components/Navbar/Settings";
import Notifications from "./components/Navbar/Notifications";
import Messages from "./components/Navbar/Messages";
import RegisterAdmin from "./components/Auth/RegisterAdmin";

const PrivateRoute = ({ authenticated, path, element }) => {
  return authenticated ? element : <Navigate to="/signin" replace />;
};

const AdminApp = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setAuthenticated(!!token);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Router>
      <div className="flex h-screen overflow-hidden">
        {/* Only show Sidebar if authenticated */}
        {authenticated && <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />}
        <div
          className={`flex-1 overflow-x-hidden overflow-y-auto ${
            authenticated && sidebarOpen ? "ml-64" : ""
          }`}
        >
          {/* Only show AdminNavbar if authenticated */}
          {authenticated && <AdminNavbar toggleSidebar={toggleSidebar} setAuthenticated={setAuthenticated} />}
          <div className="container mx-auto p-4">
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" />} />
              <Route
                path="/signin"
                element={
                  authenticated
                    ? <Navigate to="/dashboard" replace />
                    : <SignIn setAuthenticated={setAuthenticated} />
                }
              />
              <Route
                path="/register-admin"
                element={<RegisterAdmin />}
              />
              <Route
                path="/dashboard"
                element={
                  <PrivateRoute
                    authenticated={authenticated}
                    element={<Dashboard />}
                  />
                }
              />
              <Route
                path="/manage-plans"
                element={
                  <PrivateRoute
                    authenticated={authenticated}
                    element={<ManagePlans />}
                  />
                }
              />
              <Route
                path="/manage-claims"
                element={
                  <PrivateRoute
                    authenticated={authenticated}
                    element={<ManageClaims />}
                  />
                }
              />
              <Route
                path="/transactions"
                element={
                  <PrivateRoute
                    authenticated={authenticated}
                    element={<Transactions />}
                  />
                }
              />
              <Route
                path="/user-list"
                element={
                  <PrivateRoute
                    authenticated={authenticated}
                    element={<UsersList />}
                  />
                }
              />
              <Route
                path="/profile"
                element={
                  <PrivateRoute
                    authenticated={authenticated}
                    element={<Profile />}
                  />
                }
              />
              <Route
                path="/settings"
                element={
                  <PrivateRoute
                    authenticated={authenticated}
                    element={<Settings />}
                  />
                }
              />
              <Route
                path="/notifications"
                element={
                  <PrivateRoute
                    authenticated={authenticated}
                    element={<Notifications />}
                  />
                }
              />
              <Route
                path="/messages"
                element={
                  <PrivateRoute
                    authenticated={authenticated}
                    element={<Messages />}
                  />
                }
              />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default AdminApp;

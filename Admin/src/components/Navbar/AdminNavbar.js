import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiBell, FiChevronDown, FiUser, FiSettings, FiLogOut } from "react-icons/fi";

const AdminNavbar = ({ toggleSidebar, setAuthenticated }) => {
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isNotificationDropdownOpen, setIsNotificationDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setAuthenticated(false); // Update parent state
    navigate("/signin");
  };

  return (
    <nav className="bg-blue-800 p-4 shadow sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between relative">
        <button
          onClick={toggleSidebar}
          className="text-white mr-4 focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <Link to="/" className="flex items-center space-x-2 text-white text-xl font-semibold">
          <img src="https://flowbite.com/docs/images/logo.svg" alt="Logo" className="h-8" />
          <span>Caresure Admin</span>
        </Link>
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <div className="relative">
            <button
              onClick={() => setIsNotificationDropdownOpen(!isNotificationDropdownOpen)}
              className="text-white"
              aria-label="Notifications"
            >
              <FiBell className="h-6 w-6" />
            </button>
            {isNotificationDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg py-1 z-20">
                <Link to="/notifications" className="block px-4 py-2 hover:bg-gray-100">Notifications</Link>
                <Link to="/messages" className="block px-4 py-2 hover:bg-gray-100">Messages</Link>
              </div>
            )}
          </div>
          {/* User Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
              className="flex items-center text-white focus:outline-none"
            >
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Admin"
                className="h-8 w-8 rounded-full object-cover border-2 border-white"
              />
              <span className="ml-2">Admin</span>
              <FiChevronDown className={`ml-1 h-5 w-5 transition-transform ${isUserDropdownOpen ? "rotate-180" : ""}`} />
            </button>
            {isUserDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg py-1 z-20">
                <Link to="/profile" className="flex items-center px-4 py-2 hover:bg-gray-100">
                  <FiUser className="mr-2" /> Profile
                </Link>
                <Link to="/settings" className="flex items-center px-4 py-2 hover:bg-gray-100">
                  <FiSettings className="mr-2" /> Settings
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center px-4 py-2 w-full text-left hover:bg-gray-100"
                >
                  <FiLogOut className="mr-2" /> Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;

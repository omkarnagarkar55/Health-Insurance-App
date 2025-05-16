import React from "react";
import { RiCustomerService2Line } from "react-icons/ri";
import logo from "../../image/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Plans/Auth/auth";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="shadow-md sticky top-0 z-50 bg-white">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} className="h-14 mr-3 rounded-lg shadow" alt="Logo" />
          <span className="text-2xl font-extrabold text-blue-700 tracking-tight hidden sm:block">
          </span>
        </Link>
        {/* Nav Links */}
        <ul className="hidden lg:flex items-center space-x-6">
          <li>
            <Link className="text-base text-blue-700 font-semibold hover:text-blue-900 transition" to="/plans">
              Plans
            </Link>
          </li>
          <li>
            <span className="text-gray-300">|</span>
          </li>
          <li>
            <Link className="text-base text-blue-700 font-semibold hover:text-blue-900 transition" to="/renew">
              Renew
            </Link>
          </li>
          <li>
            <span className="text-gray-300">|</span>
          </li>
          <li>
            <Link className="text-base text-blue-700 font-semibold hover:text-blue-900 transition" to="/claims">
              Claims
            </Link>
          </li>
          <li>
            <span className="text-gray-300">|</span>
          </li>
          <li>
            <Link className="text-base text-blue-700 font-semibold hover:text-blue-900 transition" to="/about">
              About Us
            </Link>
          </li>
        </ul>
        {/* Actions */}
        <div className="flex items-center space-x-4">
          <a
            href="tel:+1 (851)141-1930"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 flex items-center shadow transition"
          >
            <RiCustomerService2Line className="mr-1 text-lg" />
            <span>Call Us</span>
          </a>
          {user ? (
            <button
              className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 flex items-center shadow transition"
              onClick={handleLogout}
            >
              Log Out
            </button>
          ) : (
            <Link
              className="text-blue-700 border border-blue-700 hover:bg-blue-50 font-semibold rounded-lg text-sm px-4 py-2 transition"
              to="/login"
            >
              Login
            </Link>
          )}
        </div>
      </nav>
      {/* Mobile Nav */}
      <nav className="lg:hidden px-4 pb-2">
        <ul className="flex justify-center items-center space-x-4">
          <li>
            <Link className="text-base text-blue-700 font-semibold hover:text-blue-900 transition" to="/plans">
              Plans
            </Link>
          </li>
          <li>
            <Link className="text-base text-blue-700 font-semibold hover:text-blue-900 transition" to="/renew">
              Renew
            </Link>
          </li>
          <li>
            <Link className="text-base text-blue-700 font-semibold hover:text-blue-900 transition" to="/claims">
              Claims
            </Link>
          </li>
          <li>
            <Link className="text-base text-blue-700 font-semibold hover:text-blue-900 transition" to="/about">
              About Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "./auth";
import { useNavigate, Link } from "react-router-dom";

const RegisterForm = () => {
  const { register } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    address: "",
    city: "",
    country: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users/create", formData);
      window.alert("User registered successfully!");
      const { email, password, username } = formData;
      register(email, password, username);
      navigate("/login");
    } catch (error) {
      setError("Registration failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-blue-200">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">Register for Caresure</h2>
        <form onSubmit={handleRegister} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Age</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Country</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition"
          >
            Register
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;

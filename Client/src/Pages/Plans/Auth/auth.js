import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Restore user from localStorage on app load
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // Optionally, you can decode the token or fetch user info here
      setUser({ token }); // Or setUser({ username, token }) if you store username
    }
  }, []);

  const login = async (username, password) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/auth/user/login",
        {
          username,
          password,
        }
      );

      if (response.data.token) {
        // Set the user and token in state
        setUser({
          username,
          token: response.data.token,
        });
        // Store the token in localStorage for persistence
        localStorage.setItem("token", response.data.token);
      } else {
        throw new Error("Invalid username or password");
      }
    } catch (error) {
      console.error("Error during login:", error);
      throw error;
    }
  };

  const logout = () => {
    // Remove user and token from state
    setUser(null);
    // Remove the token from localStorage
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

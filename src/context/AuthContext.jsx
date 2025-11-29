import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  // Load user from localStorage on refresh
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
  }, []);

  // Register user (POST)
  async function signup(name, email, password) {
    const res = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });
    return res.json();
  }

  // Login user (GET)
  async function login(email, password) {
    const res = await fetch(
      `http://localhost:3000/users?email=${email}&password=${password}`
    );
    const data = await res.json();

    if (data.length === 0) throw new Error("Invalid credentials");

    const user = data[0];
    setCurrentUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  }

  // Logout
  function logout() {
    setCurrentUser(null);
    localStorage.removeItem("user");
  }

  return (
    <AuthContext.Provider value={{ currentUser, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

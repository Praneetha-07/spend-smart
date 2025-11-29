import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import Authpages from "../assets/Authpages.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await login(email, password);
      navigate("/dashboard");
    } catch (err) {
      console.error("Login failed:", err);
      setError("Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="bg-gray-800 rounded-2xl shadow-2xl flex w-full max-w-4xl overflow-hidden">
        {/* LEFT SIDE — IMAGE */}
        <div className="hidden md:flex w-1/2 items-center justify-center p-0">
          <img
            src={Authpages}
            alt="Illustration"
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT SIDE — FORM */}
        <div className="w-full md:w-1/2 p-10 space-y-5">
          <h2 className="text-3xl font-extrabold text-center text-teal-400">
            Log In to SPEND-SMART
          </h2>

          {error && (
            <div className="bg-red-900 border border-red-700 text-red-300 p-3 rounded-md text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-left text-base font-medium text-gray-300">
                Email:
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 mt-1 text-white bg-gray-700 border border-gray-600 rounded-lg"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-left text-base font-medium text-gray-300">
                Password:
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 mt-1 text-white bg-gray-700 border border-gray-600 rounded-lg"
                placeholder="Minimum 6 characters"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-2 px-4 rounded-lg shadow-sm text-sm font-medium text-white ${
                loading
                  ? "bg-teal-700"
                  : "bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700"
              }`}
            >
              {loading ? "Logging In..." : "Log In"}
            </button>
          </form>

          <div className="text-center text-sm">
            <Link
              to="/register"
              className="font-medium text-teal-400 hover:text-teal-300 text-hint"
            >
              Need an account? Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

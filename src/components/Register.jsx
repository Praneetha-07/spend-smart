import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import Authpages from "../assets/Authpages.png";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== passwordConfirm) {
      setError("Passwords do not match");
      return;
    }

    try {
      setLoading(true);
      await signup(name, email, password);
      navigate("/login");
    } catch (err) {
      setError("Failed to create account");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="bg-gray-800 rounded-2xl shadow-2xl flex  max-w-4xl overflow-hidden ">
        {/* LEFT SIDE - IMAGE */}
        <div className="hidden md:flex w-1/2 items-center justify-center p-0">
          <img
            src={Authpages}
            alt="Illustration"
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="w-full md:w-1/2 p-5 space-y-5">
          <h2 className="text-3xl font-extrabold text-center text-teal-400">
            Sign Up for SPEND-SMART
          </h2>

          {error && (
            <div className="bg-red-900 border border-red-700 text-red-300 p-3 rounded-md text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label className="text-left block text-l font-medium text-gray-300">
                Full Name:
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 mt-1 text-white bg-gray-700 border border-gray-600 rounded-lg"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="text-left block text-l font-medium text-gray-300">
                Email:
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 mt-1 text-white bg-gray-700 border border-gray-600 rounded-lg focus:ring-teal-500 focus:border-teal-500"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="text-left block text-l font-medium text-gray-300">
                Password:
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 mt-1 text-white bg-gray-700 border border-gray-600 rounded-lg focus:ring-teal-500 focus:border-teal-500"
                placeholder="Minimum 6 characters"
              />
            </div>
            <div>
              <label className="text-left block text-l font-medium text-gray-300">
                Password Confirmation:
              </label>
              <input
                type="password"
                required
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
                className="w-full px-4 py-2 mt-1 text-white bg-gray-700 border border-gray-600 rounded-lg focus:ring-teal-500 focus:border-teal-500"
                placeholder="Confirm password"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white ${
                loading
                  ? "bg-teal-700"
                  : "bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700"
              } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition duration-150 ease-in-out`}
            >
              {loading ? "Creating Account..." : "Sign Up"}
            </button>
          </form>

          <div className="text-sm text-center">
            <Link
              to="/login"
              className="font-medium text-teal-400 hover:text-teal-300 text-hint"
            >
              Already have an account? Log In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

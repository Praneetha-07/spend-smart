import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col justify-center items-center  text-white px-6 relative ">
      {/* Glow background */}
      <div className="absolute w-[500px] h-[500px] bg-teal-400/20 rounded-full blur-[150px] -top-24 -left-24"></div>
      <div className="absolute w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[140px] bottom-10 right-10"></div>

      {/* Animated Logo */}
      <div className="relative z-10 flex flex-col items-center animate-fadeInSlow">
        {/* Logo Circle */}
        <div
          className="w-25 h-25 bg-gradient-to-br from-teal-400 to-blue-500 rounded-2xl shadow-xl 
                        flex items-center justify-center logo-spin"
        >
          <span className="text-5xl font-bold text-white drop-shadow-md">
            💸
          </span>
        </div>

        <h1
          className="text-4xl sm:text-5xl font-extrabold mt-6 tracking-wide 
                       bg-gradient-to-r from-teal-300 to-blue-400 bg-clip-text text-transparent"
        >
          Spend-Smart
        </h1>

        <p className="text-gray-300 text-lg mt-4 max-w-md text-center leading-relaxed">
          Your smart companion for tracking income and expenses effortlessly.
        </p>

        <Link
          to="/login"
          className="mt-10 px-8 py-3 rounded-full bg-teal-500 text-lg font-semibold shadow-lg 
                     hover:bg-teal-600 hover:scale-105 transition transform text-white"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}

export default Home;

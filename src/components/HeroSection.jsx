// src/components/HeroSection.jsx
import React from 'react';

const HeroSection = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
      <div className="text-center max-w-2xl">
        <div className="text-6xl font-extrabold mb-4">
          <span className="text-blue-300">Aurobindo patra</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Welcome to Your Future with Innovation
        </h1>
        <p className="text-lg md:text-xl mb-8">
          We bring the best solutions to help you grow and thrive in the modern digital world.
        </p>
        <a
          href="#get-started"
          className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-lg font-semibold"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default HeroSection;

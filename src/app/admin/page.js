"use client";

import { useState } from "react";

export default function PortfolioForm() {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    github:"",
    imageUrl: "",   
    buttonUrl: "",
  });

  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const correctPassword = "1234";

  const handleAuth = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      setAuthenticated(true);
      setError("");
    } else {
      setError("Incorrect password. Please try again.");
    }
  };

  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting Data:", formData);
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-sm">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Enter Password</h2>
          <form onSubmit={handleAuth} className="space-y-4">
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {error && <p className="text-red-600 text-sm">{error}</p>}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-3xl shadow-2xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Submit Your Project
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
              Title
            </label>
            <input
              id="title"
              type="text"
              placeholder="Personal Portfolio Website"
              value={formData.title}
              onChange={(e) => handleChange("title", e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Category */}
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <select
              id="category"
              value={formData.category}
              onChange={(e) => handleChange("category", e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select a category</option>
              <option value="Personal & Portfolio">Personal & Portfolio</option>
              <option value="Business & Services">Business & Services</option>
              <option value="E-commerce & Product">E-commerce & Product</option>
              <option value="Content & Community">Content & Community</option>
            </select>
          </div>

          {/* Gitgub URL */}
          <div>
            <label htmlFor="github" className="block text-sm font-medium text-gray-700 mb-1">
              Github URL
            </label>
            <input
              id="github"
              type="text"
              placeholder="https://cdn.tailgrids.com/...github"
              value={formData.github}
              onChange={(e) => handleChange("github", e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Image URL */}
          <div>
            <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 mb-1">
              Image URL
            </label>
            <input
              id="imageUrl"
              type="text"
              placeholder="https://cdn.tailgrids.com/...jpg"
              value={formData.imageUrl}
              onChange={(e) => handleChange("imageUrl", e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

  

          {/* Button URL */}
          <div>
            <label htmlFor="buttonUrl" className="block text-sm font-medium text-gray-700 mb-1">
              Button URL
            </label>
            <input
              id="buttonUrl"
              type="text"
              placeholder="https://yourproject.com"
              value={formData.buttonUrl}
              onChange={(e) => handleChange("buttonUrl", e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-300"
            >
              Submit Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

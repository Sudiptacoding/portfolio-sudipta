"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function PortfolioForm() {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    github: "",
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

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post('https://demo-sarver.vercel.app/project', formData);

    console.log("✅ Project submitted successfully:", response.data);

    // Reset the form
    setFormData({
      title: "",
      category: "",
      github: "",
      imageUrl: "",
      buttonUrl: "",
    });
  } catch (error) {
    console.error("❌ Failed to submit project:", error);
  }
};



    const [projects, setProjects] = useState([]);

  // Fetch projects on load
  useEffect(() => {
    axios.get("https://demo-sarver.vercel.app/project")
      .then((res) => {
        console.log(res.data)
        setProjects(res.data);
      })
      .catch((err) => {
        console.error("Error fetching projects:", err);
      });
  }, []);

  // Handle delete
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this project?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`https://demo-sarver.vercel.app/project/${id}`);
      setProjects((prevProjects) => prevProjects.filter((p) => p._id !== id));
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };







  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-sm">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
            Enter Password
          </h2>
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
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
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
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
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
            <label
              htmlFor="github"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
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
            <label
              htmlFor="imageUrl"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
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
            <label
              htmlFor="buttonUrl"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
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


      <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project._id} className="border rounded-lg p-4 shadow">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-56 object-cover rounded"
            />
            <h3 className="text-xl font-bold mt-2">{project.title}</h3>
            <p>{project.github}</p>
            <p>{project.buttonUrl}</p>
            <p className="text-sm text-gray-500">{project.category}</p>
            <button
              onClick={() => handleDelete(project._id)}
              className="mt-2 bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>




    </div>
  );
}

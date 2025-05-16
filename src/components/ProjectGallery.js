import React, { useEffect, useState } from "react";
import axios from "axios";
import { GrGithub } from "react-icons/gr";

const ProjectGallery = () => {
  const [projects, setProjects] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");

  const data = [
    {
      id: 1,
      title: "Creative Agency Branding",
      category: "branding",
      imageUrl:
        "https://i.postimg.cc/1RHQNQQW/summer-sale-project-netlify-app.png",
      buttonText: "View Details",
      buttonUrl: "#",
    },
    {
      id: 2,
      title: "Marketing Campaign Design",
      category: "marketing",
      imageUrl:
        "https://cdn.tailgrids.com/assets/images/marketing/portfolio/portfolio-01/image-02.jpg",
      buttonText: "View Details",
      buttonUrl: "#",
    },
    {
      id: 3,
      title: "Modern App UI Design",
      category: "design",
      imageUrl:
        "https://cdn.tailgrids.com/assets/images/marketing/portfolio/portfolio-01/image-04.jpg",
      buttonText: "View Details",
      buttonUrl: "#",
    },
    {
      id: 4,
      title: "SaaS Development Platform",
      category: "development",
      imageUrl: "https://ibb.co/MyYGWZ8w",
      buttonText: "View Details",
      buttonUrl: "#",
    },
    {
      id: 5,
      title: "SEO & Content Strategy",
      category: "E-commerce & Product",
      imageUrl:
        "https://cdn.tailgrids.com/assets/images/marketing/portfolio/portfolio-01/image-05.jpg",
      buttonText: "View Details",
      buttonUrl: "#",
      frontendRepo: "https://github.com/username/frontend-repo", // Optional
      github: "sdasd", // Optional
    },
    {
      id: 6,
      title: "My Project",
      category: "Business",
      imageUrl: "https://example.com/image.jpg",
      link: "https://liveproject.com",
      frontendRepo: "https://github.com/username/frontend-repo", // Optional
      github: "https://github.com/username/backend-repo", // Optional
    },
    {
      id: 7,
      title: "My Project",
      category: "Business",
      imageUrl: "https://example.com/image.jpg",
      link: "https://liveproject.com",
      frontendRepo: "https://github.com/username/frontend-repo", // Optional
      github: "https://github.com/username/backend-repo", // Optional
    },
    {
      id: 8,
      title: "My Project",
      category: "Business",
      imageUrl: "https://example.com/image.jpg",
      link: "https://liveproject.com",
      frontendRepo: "https://github.com/username/frontend-repo", // Optional
      github: "https://github.com/username/backend-repo", // Optional
    },
    {
      id: 9,
      title: "My Project",
      category: "Business",
      imageUrl: "https://example.com/image.jpg",
      link: "https://liveproject.com",
      frontendRepo: "https://github.com/username/frontend-repo", // Optional
      github: "https://github.com/username/backend-repo", // Optional
    },
    {
      id: 10,
      title: "My Project",
      category: "Business",
      imageUrl: "https://example.com/image.jpg",
      link: "https://liveproject.com",
      frontendRepo: "https://github.com/username/frontend-repo", // Optional
      github: "https://github.com/username/backend-repo", // Optional
    },
    {
      id: 11,
      title: "My Project",
      category: "Business",
      imageUrl: "https://example.com/image.jpg",
      link: "https://liveproject.com",
      frontendRepo: "https://github.com/username/frontend-repo", // Optional
      github: "https://github.com/username/backend-repo", // Optional
    },
    {
      id: 12,
      title: "My Project",
      category: "Business",
      imageUrl: "https://example.com/image.jpg",
      link: "https://liveproject.com",
      frontendRepo: "https://github.com/username/frontend-repo", // Optional
      github: "https://github.com/username/backend-repo", // Optional
    },
    {
      id: 13,
      title: "My Project",
      category: "Business",
      imageUrl: "https://example.com/image.jpg",
      link: "https://liveproject.com",
      frontendRepo: "https://github.com/username/frontend-repo", // Optional
      github: "https://github.com/username/backend-repo", // Optional
    },
  ];

  useEffect(() => {
    // Replace with your real API endpoint
    // axios.get("/api/projects").then((res) => {
    //   setProjects(res.data);
    // });

    setProjects(data);
  }, []);

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter(
          (project) => project.category.toLowerCase() === activeCategory
        );

  const categories = [
    "all",
    ...new Set(projects.map((p) => p.category.toLowerCase())),
  ];

  return (
    <section className="w-full bg-dark py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-2">My Projects</h2>
          <p className="text-gray-400">Explore some of my recent works</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full border transition-all duration-300 text-sm font-medium
                ${
                  activeCategory === cat
                    ? "bg-primary text-white border-primary"
                    : "text-gray-400 border-gray-700 hover:bg-primary hover:text-white hover:border-primary"
                }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects?.slice(0, 6)?.map((project, index) => (
            <div
              key={index}
              className="bg-[#1f1f1f] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group relative"
            >
              <div className="relative overflow-hidden rounded-t-2xl">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Conditional rendering of GitHub icon */}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-3 right-3 transition-transform duration-300 group-hover:-translate-y-3"
                    aria-label="GitHub Link"
                  >
                    <div className="text-white bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 p-1 rounded-full">
                      <GrGithub size={15} />
                    </div>
                  </a>
                )}
              </div>

              <div className="p-5">
                <span className=" text-xs uppercase tracking-widest">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold mt-2 mb-4">
                  {project.title}
                </h3>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center mt-auto text-sm font-medium px-5 py-2.5 cursor-pointer rounded-full text-white bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 shadow-lg transition-all duration-300 hover:from-purple-700 hover:via-pink-600 hover:to-red-600 hover:shadow-2xl"
                >
                  View Project
                  <svg
                    className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center text-gray-400 mt-12">
            No projects found in this category.
          </div>
        )}
      </div>

      <div className="w-full flex justify-center mt-8">
        <button
          onClick={() => document.getElementById("my_modal_3").showModal()}
          className="group inline-flex items-center justify-center text-sm font-medium px-5 py-2.5 cursor-pointer rounded-full text-white bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 shadow-lg transition-all duration-300 hover:from-purple-700 hover:via-pink-600 hover:to-red-600 hover:shadow-2xl"
        >
          View All Project
          <svg
            className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      <dialog
        id="my_modal_3"
        className="modal bg-[#0d0d0d]/90 backdrop-blur-sm"
      >
        <div className="modal-box w-11/12 max-w-[92rem] max-h-[90vh] no-scrollbar bg-[#1a1a1a] text-white rounded-xl">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-white border border-white rounded-full p-2">
              ✕
            </button>
          </form>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full border transition-all duration-300 text-sm font-medium
                ${
                  activeCategory === cat
                    ? "bg-primary text-white border-primary"
                    : "text-gray-400 border-gray-700 hover:bg-primary hover:text-white hover:border-primary"
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>

          {/* Grid container */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-[#1f1f1f] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group relative"
              >
                <div className="relative overflow-hidden rounded-t-2xl">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute bottom-3 right-3 transition-transform duration-300 group-hover:-translate-y-3"
                      aria-label="GitHub Link"
                    >
                      <div className="text-white bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 p-1 rounded-full">
                        <GrGithub size={15} />
                      </div>
                    </a>
                  )}
                </div>

                <div className="p-5">
                  <span className="text-xs uppercase tracking-widest text-gray-400">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-semibold mt-2 mb-4">
                    {project.title}
                  </h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center mt-auto text-sm font-medium px-5 py-2.5 cursor-pointer rounded-full text-white bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 shadow-lg transition-all duration-300 hover:from-purple-700 hover:via-pink-600 hover:to-red-600 hover:shadow-2xl"
                  >
                    View Project
                    <svg
                      className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </dialog>
    </section>
  );
};

export default ProjectGallery;

"use client";
import AboutMe from "@/components/AboutMe";
import Certificate from "@/components/Certificate";
import ContactForm from "@/components/ContactForm";
import EducationSection from "@/components/EducationSection";
import Footer from "@/components/Footer";
import MySkills from "@/components/MySkills";
import ProjectGallery from "@/components/ProjectGallery";
import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { FaDownload } from "react-icons/fa6";
import { saveAs } from "file-saver";

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleDownload = () => {
    saveAs(
      "/image/mern-stack-resume.pdf",
      "MERN-STACK developer  resume of Sudipta Biswas.pdf"
    );
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Global style for smooth scroll */}
      <style>
        {`
          html {
            scroll-behavior: smooth;
          }
        `}
      </style>

      <div className="w-full min-h-screen bg-black text-white font-sans">
        {/* Navbar */}
        <header
          className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
      ${
        isScrolled
          ? "py-0 backdrop-blur-md bg-black/50 shadow-md"
          : "py-4 bg-black/30 backdrop-blur-sm"
      } 
      lg:px-16 px-4 flex flex-wrap items-center justify-between`}
        >
          <img
            className="md:w-[8rem] w-[7rem]"
            src="./image/flamingtext_com-3754455155.png"
            alt="Logo"
          />

          <button
            className="md:hidden text-gray-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 20 20"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>

          <nav
            className={`${
              isMenuOpen ? "block" : "hidden"
            } md:flex md:items-center w-full md:w-auto  md:mt-0 absolute md:static top-full left-0 bg-black md:bg-transparent z-10 px-4 py-2 md:p-0 rounded-md`}
          >
            <ul className="md:flex md:space-x-6 space-y-3 md:space-y-0 text-base xl:text-lg text-gray-100">
              {[
                { name: "Home", href: "#home" },
                { name: "About Me", href: "#about" },
                { name: "Education", href: "#education" },
                { name: "Experience", href: "#experience" },
                { name: "Projects", href: "#projects" },
                { name: "Certificate", href: "#certificate" },
                { name: "Contact", href: "#contact" },
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href={item.href}
                    className="block py-2 px-1 hover:text-rose-500 transition-all duration-200"
                    onClick={() => setIsMenuOpen(false)} // close menu on click
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        {/* Hero Section */}
        <section
          id="home"
          className="lg:px-16 px-4 h-full flex flex-col sm:flex-row sm:items-center relative z-10 pt-20 lg:pt-0"
        >
          {/* Text Info */}
          <div className="w-full sm:w-1/2 z-10 space-y-4">
            <h4 className="text-lg xl:text-2xl">Hey There</h4>
            <h1 className="text-4xl sm:text-5xl md:text-6xl 2xl:text-7xl font-serif font-bold">
              I'm <span className="text-rose-500">Sudipta</span>
            </h1>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold">
              Biswas
            </h1>
            <h4 className="text-rose-500 text-xl lg:text-2xl">
              -- MERN Stack Developer
            </h4>
            <p className="lg:w-[80%] text-md md:text-lg 2xl:text-xl text-gray-300">
              Experienced Full-Stack Developer with 5+ years of expertise in
              HTML5, CSS3, Tailwind CSS, React, Next.js, Express.js, MongoDB,
              and MERN stack.
            </p>

            <div className="mt-7 flex gap-3 w-48">
              <a
                className="py-3 px-4 inline-flex justify-center cursor-pointer items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                onClick={handleDownload}
              >
                Download Resume
                <FaDownload />
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="w-full sm:w-1/2 mt-10 sm:mt-0 flex justify-center">
            <img
              className="2xl:h-[760px] xl:h-[600px] md:h-[450px] sm:h-[400px] h-[300px] object-cover"
              src="./image/Untitled design (3).png"
              alt="Hero"
            />
          </div>
        </section>

        {/* Stats Section */}
        <div className="flex flex-wrap justify-center items-center gap-6 px-4 py-10 bg-gradient-to-t from-gray-800/40 to-transparent">
          {[
            { number: "5", label: "Years of Experience" },
            { number: "150", label: "GitHub Projects Completed" },
            { number: "21024", label: "Hours Coding Experience" },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center items-end gap-1">
                <h2 className="text-4xl md:text-6xl font-bold">
                  <CountUp end={item.number} />
                </h2>

                <span className="text-rose-500 text-3xl md:text-5xl font-extrabold">
                  +
                </span>
              </div>
              <p className="mt-2 text-sm md:text-lg text-gray-300">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Other Sections with IDs for smooth scroll */}
        <section id="about">
          <AboutMe />
        </section>
        <section id="education">
          <EducationSection />
        </section>
        {/* Assuming "Experience" is part of MySkills or you can create a new section */}
        <section id="experience">
          <MySkills />
        </section>
        <section id="projects">
          <ProjectGallery />
        </section>
        <section id="certificate">
          <Certificate />
        </section>
        <section id="contact">
          <ContactForm />
        </section>

        <Footer />
      </div>
    </>
  );
}

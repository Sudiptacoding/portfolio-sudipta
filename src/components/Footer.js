"use client";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-dark text-white py-10 mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left Side: Profile Info */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-serif font-semibold mb-2">
            Sudipta Biswas
          </h3>
          <p className="text-gray-400 max-w-sm">
            Passionate full-stack developer trained at Programming Hero. Expert
            in React, Next.js, Tailwind CSS, and scalable web apps.
          </p>
        </div>

        {/* Middle: Contact Info */}
        <div className="text-center md:text-left">
          <h4 className="font-semibold mb-2">Contact</h4>
          <p className="text-gray-400">Email: sudiptabiswas506@gmail.com</p>
          <p className="text-gray-400">Phone: +880 1748-272867</p>
        </div>

        {/* Right Side: Social Links */}
        <div className="flex gap-6 text-2xl text-rose-500">
          <a
            href="https://github.com/Sudiptacoding"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="hover:text-rose-400 transition" />
          </a>
          <a
            href="https://www.linkedin.com/in/sudipta-biswas123/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="hover:text-rose-400 transition" />
          </a>
          <a
            href="https://twitter.com/SudiptaBis15628"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter className="hover:text-rose-400 transition" />
          </a>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-10 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Sudipta Biswas All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

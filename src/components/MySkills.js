"use";
import React, { useState } from "react";
import {
  SiAxios,
  SiExpress,
  SiMaterialdesign,
  SiNetlify,
  SiPostman,
  SiPreact,
  SiReactquery,
  SiTailwindcss,
  SiVite,
} from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { SiMongoose } from "react-icons/si";
import {
  IoLogoCss3,
  IoLogoFirebase,
  IoLogoJavascript,
  IoLogoVercel,
} from "react-icons/io5";
import { RiNextjsFill, RiNpmjsFill, RiTailwindCssFill } from "react-icons/ri";
import {
  FaBootstrap,
  FaChrome,
  FaFigma,
  FaGithub,
  FaHtml5,
  FaNode,
  FaReact,
} from "react-icons/fa6";
import { BsFiletypeJson } from "react-icons/bs";
import { VscVscode } from "react-icons/vsc";
import { FaGitSquare } from "react-icons/fa";

function MySkills() {
  // স্টেট তৈরি করা
  const [showSkills, setShowSkills] = useState(true);

  // বাটন ক্লিক করার সময় স্টেট পরিবর্তন করার ফাংশন
  const handleSkillsClick = () => {
    setShowSkills(true); // Skills বাটন ক্লিক হলে Skills কনটেন্ট দেখাবে
  };

  const handleToolsClick = () => {
    setShowSkills(false); // Tools বাটন ক্লিক হলে Tools কনটেন্ট দেখাবে
  };

  return (
    <section className="md:w-[80%] mx-auto w-full py-14 text-white flex items-center">
      <div className="flex container flex-col md:flex-row items-center md:items-start gap-16 w-full">
        <div className="w-full md:w-1/2 relative p-6 sm:px-28 md:p-0">
          <div className="text-white p-6 pl-10 pr-20 sm:pl-10 lg:pr-20">
            <div className="absolute -left-4  sm:left-16 top-20 sm:top-24 md:-left-12 xl:-left-16 md:top-16 xl:top-24 rotate-[-90deg] text-sm tracking-widest flex flex-row justify-start gap-2">
              <div className="xl:w-16 md:w-10 sm:w-8 w-8 h-[2px] bg-white mt-2 mx-auto"></div>
              <p>All Skills</p>
            </div>
            <h2 className="text-3xl md:text-4xl xl:text-6xl font-bold leading-tight">
              Explore My Expertise & Tech Stack
            </h2>
          </div>

          <p className="p-3 text-gray-400 text-sm leading-relaxed">
            These are the tools and technologies I work with regularly to build
            responsive and high-quality web applications. With a solid
            foundation in frontend development, I strive to write clean,
            maintainable code while creating seamless and user-friendly
            experiences.
          </p>

          <span className="py-4 px-2 space-x-2 rounded-lg  shadow-lg">
            {/* Skills এবং Tools বাটন */}
            <button
              onClick={handleSkillsClick}
              className={`rounded-lg px-4 py-2 ${
                showSkills ? "bg-blue-500" : "bg-transparent"
              } text-white transition-all duration-300`}
            >
              Skills
            </button>
            <button
              onClick={handleToolsClick}
              className={`rounded-lg px-4 py-2 ${
                !showSkills ? "bg-blue-500" : "bg-transparent"
              } text-gray-300 transition-all duration-300`}
            >
              Tools
            </button>
          </span>
        </div>

        {/* Skills কনটেন্ট */}
        <div
          className={`w-full md:w-1/2 flex justify-center items-center ${
            showSkills ? "block" : "hidden"
          }`}
        >
          <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="p-4  rounded-lg shadow-lg flex flex-col justify-center items-center">
                <span className="text-4xl">
                  {/* Express.js Icon using React Icons */}
                  <IoLogoJavascript color="white" size={32} />
                </span>
                <p className="text-xs mt-2">JavaScript</p>
              </div>
            </div>
            <div className="text-center">
              <div className="p-4  rounded-lg shadow-lg flex flex-col justify-center items-center">
                <span className="text-4xl">
                  {/* Express.js Icon using React Icons */}
                  <FaReact color="white" size={32} />
                </span>
                <p className="text-xs mt-2">React.js</p>
              </div>
            </div>
            <div className="text-center">
              <div className="p-4  rounded-lg shadow-lg flex flex-col justify-center items-center">
                <span className="text-4xl">
                  {/* Express.js Icon using React Icons */}
                  <RiNextjsFill color="white" size={32} />
                </span>
                <p className="text-xs mt-2">Next.js</p>
              </div>
            </div>

            <div className="text-center">
              <div className="p-4  rounded-lg shadow-lg flex flex-col justify-center items-center">
                <span className="text-4xl">
                  {/* Express.js Icon using React Icons */}
                  <FaHtml5 color="white" size={32} />
                </span>
                <p className="text-xs mt-2">HTML5</p>
              </div>
            </div>
            <div className="text-center">
              <div className="p-4  rounded-lg shadow-lg flex flex-col justify-center items-center">
                <span className="text-4xl">
                  {/* Express.js Icon using React Icons */}
                  <IoLogoCss3 color="white" size={32} />
                </span>
                <p className="text-xs mt-2">CSS3</p>
              </div>
            </div>
            <div className="text-center">
              <div className="p-4  rounded-lg shadow-lg flex flex-col justify-center items-center">
                <span className="text-4xl">
                  {/* Express.js Icon using React Icons */}
                  <RiTailwindCssFill color="white" size={32} />
                </span>
                <p className="text-xs mt-2">Tailwind CSS</p>
              </div>
            </div>
            <div className="text-center">
              <div className="p-4  rounded-lg shadow-lg flex flex-col justify-center items-center">
                <span className="text-4xl">
                  {/* Express.js Icon using React Icons */}
                  <FaBootstrap color="white" size={32} />
                </span>
                <p className="text-xs mt-2">Bootstrap 5</p>
              </div>
            </div>

            <div className="text-center">
              <div className="p-4  rounded-lg shadow-lg flex flex-col justify-center items-center">
                <span className="text-4xl">
                  {/* Express.js Icon using React Icons */}
                  <SiMaterialdesign color="white" size={32} />
                </span>
                <p className="text-xs mt-2">Material UI</p>
              </div>
            </div>
            <div className="text-center">
              <div className="p-4  rounded-lg shadow-lg flex flex-col justify-center items-center">
                <span className="text-4xl">
                  {/* Express.js Icon using React Icons */}
                  <SiPreact color="white" size={32} />
                </span>
                <p className="text-xs mt-2">ContextAPI</p>
              </div>
            </div>
            <div className="text-center">
              <div className="p-4  rounded-lg shadow-lg flex flex-col justify-center items-center">
                <span className="text-4xl">
                  {/* Express.js Icon using React Icons */}
                  <FaNode color="white" size={32} />
                </span>
                <p className="text-xs mt-2">Node.js</p>
              </div>
            </div>

            <div className="text-center">
              <div className="p-4  rounded-lg shadow-lg flex flex-col justify-center items-center">
                <span className="text-4xl">
                  {/* Express.js Icon using React Icons */}
                  <SiExpress color="white" size={32} />
                </span>
                <p className="text-xs mt-2">Express.js</p>
              </div>
            </div>

            <div className="text-center">
              <div className="p-4  rounded-lg shadow-lg flex flex-col justify-center items-center">
                <span className="text-4xl">
                  {/* Express.js Icon using React Icons */}
                  <BiLogoMongodb color="white" size={32} />
                </span>
                <p className="text-xs mt-2">MongoDB</p>
              </div>
            </div>

            <div className="text-center">
              <div className="p-4  rounded-lg shadow-lg flex flex-col justify-center items-center">
                <span className="text-4xl">
                  {/* Express.js Icon using React Icons */}
                  <SiMongoose color="white" size={32} />
                </span>
                <p className="text-xs mt-2">Mongoose</p>
              </div>
            </div>

            <div className="text-center">
              <div className="p-4  rounded-lg shadow-lg flex flex-col justify-center items-center">
                <span className="text-4xl">
                  {/* Express.js Icon using React Icons */}
                  <IoLogoFirebase color="white" size={32} />
                </span>
                <p className="text-xs mt-2">Firebase</p>
              </div>
            </div>
            <div className="text-center">
              <div className="p-4  rounded-lg shadow-lg flex flex-col justify-center items-center">
                <span className="text-4xl">
                  {/* Express.js Icon using React Icons */}
                  <SiReactquery color="white" size={32} />
                </span>
                <p className="text-xs mt-2">TanStack Query</p>
              </div>
            </div>

            <div className="text-center">
              <div className="p-4  rounded-lg shadow-lg flex flex-col justify-center items-center">
                <span className="text-4xl">
                  {/* Express.js Icon using React Icons */}
                  <BsFiletypeJson color="white" size={32} />
                </span>
                <p className="text-xs mt-2">JSON</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tools কনটেন্ট */}
        <div
          className={`w-full md:w-1/2 flex justify-center items-center ${
            !showSkills ? "block" : "hidden"
          }`}
        >
          <div className="grid grid-cols-3 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="p-4  rounded-lg shadow-lg flex flex-col justify-center items-center">
                <span className="text-4xl">
                  {/* Express.js Icon using React Icons */}
                  <VscVscode color="white" size={32} />
                </span>
                <p className="text-xs mt-2">VS Code</p>
              </div>
            </div>
            <div className="text-center">
              <div className="p-4  rounded-lg shadow-lg flex flex-col justify-center items-center">
                <span className="text-4xl">
                  {/* Express.js Icon using React Icons */}
                  <FaGitSquare color="white" size={32} />
                </span>
                <p className="text-xs mt-2">Git</p>
              </div>
            </div>

            <div className="text-center">
              <div className="p-4  rounded-lg shadow-lg flex flex-col justify-center items-center">
                <span className="text-4xl">
                  {/* Express.js Icon using React Icons */}
                  <FaGithub color="white" size={32} />
                </span>
                <p className="text-xs mt-2">GitHub</p>
              </div>
            </div>
            <div className="text-center">
              <div className="p-4  rounded-lg shadow-lg flex flex-col justify-center items-center">
                <span className="text-4xl">
                  {/* Express.js Icon using React Icons */}
                  <RiNpmjsFill color="white" size={32} />
                </span>
                <p className="text-xs mt-2">NPM</p>
              </div>
            </div>
            <div className="text-center">
              <div className="p-4  rounded-lg shadow-lg flex flex-col justify-center items-center">
                <span className="text-4xl">
                  {/* Express.js Icon using React Icons */}
                  <SiVite color="white" size={32} />
                </span>
                <p className="text-xs mt-2">Vite</p>
              </div>
            </div>
            <div className="text-center">
              <div className="p-4  rounded-lg shadow-lg flex flex-col justify-center items-center">
                <span className="text-4xl">
                  {/* Express.js Icon using React Icons */}
                  <SiAxios color="white" size={32} />
                </span>
                <p className="text-xs mt-2">Axios</p>
              </div>
            </div>
            <div className="text-center">
              <div className="p-4  rounded-lg shadow-lg flex flex-col justify-center items-center">
                <span className="text-4xl">
                  {/* Express.js Icon using React Icons */}
                  <FaChrome color="white" size={32} />
                </span>
                <p className="text-xs mt-2">DevTools</p>
              </div>
            </div>

            <div className="text-center">
              <div className="p-4  rounded-lg shadow-lg flex flex-col justify-center items-center">
                <span className="text-4xl">
                  {/* Express.js Icon using React Icons */}
                  <SiNetlify color="white" size={32} />
                </span>
                <p className="text-xs mt-2">Netlify</p>
              </div>
            </div>
            <div className="text-center">
              <div className="p-4  rounded-lg shadow-lg flex flex-col justify-center items-center">
                <span className="text-4xl">
                  {/* Express.js Icon using React Icons */}
                  <IoLogoVercel color="white" size={32} />
                </span>
                <p className="text-xs mt-2">Vercel</p>
              </div>
            </div>
            <div className="text-center">
              <div className="p-4  rounded-lg shadow-lg flex flex-col justify-center items-center">
                <span className="text-4xl">
                  {/* Express.js Icon using React Icons */}
                  <SiPostman color="white" size={32} />
                </span>
                <p className="text-xs mt-2">Postman</p>
              </div>
            </div>
            <div className="text-center">
              <div className="p-4  rounded-lg shadow-lg flex flex-col justify-center items-center">
                <span className="text-4xl">
                  {/* Express.js Icon using React Icons */}
                  <FaFigma color="white" size={32} />
                </span>
                <p className="text-xs mt-2">Figma </p>
              </div>
            </div>
            <div className="text-center">
              <div className="p-4  rounded-lg shadow-lg flex flex-col justify-center items-center">
                <span className="text-4xl">
                  {/* Express.js Icon using React Icons */}
                  <SiTailwindcss color="white" size={32} />
                </span>
                <p className="text-xs mt-2">Tailwind UI </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MySkills;

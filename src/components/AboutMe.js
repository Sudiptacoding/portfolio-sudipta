import React from "react";

function AboutMe() {
  return (
    <div className="w-full py-5 flex items-center bg-[#0d0d0d] text-white">
      <div className="w-full lg:w-[80%] mx-auto px-4 sm:px-10 lg:px-0 flex flex-col gap-6 pt-12 pb-24">
        <div className="flex flex-col gap-2 mb-4">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-white">
            About Me
          </h2>
          <div className="flex flex-col gap-1">
            <span className="w-16 h-[4px] bg-rose-500 rounded-full"></span>
            <span className="w-8 h-[4px] bg-rose-500 rounded-full"></span>
          </div>
        </div>

        <h4 className="capitalize text-xl md:text-2xl font-semibold text-gray-300">
          I&apos;m Sudipta Biswas and I&apos;m{" "}
          <span className="text-rose-500">web developer</span>
        </h4>
        <p className="text-gray-400 leading-relaxed">
          I am a dedicated and innovative FullStack Developer passionate about
          creating impactful digital experiences. With a keen eye for detail and
          a commitment to excellence, I specialize in designing and developing
          solutions that combine creativity with functionality.
        </p>

        <div className="w-full flex flex-col lg:flex-row gap-8">
          <div className="w-full flex flex-col items-stretch gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm md:text-base">
              <ul className="space-y-2">
                <li className="border-b border-gray-600 py-2">
                  <span className="font-bold text-gray-300">Birthday:</span> 19
                  Nov 1999
                </li>
                <li className="border-b border-gray-600 py-2">
                  <span className="font-bold text-gray-300">Github:</span>{" "}
                  <a className="" href="https://github.com/Sudiptacoding">
                    {" "}
                    github.com/Sudiptacoding
                  </a>
                </li>
                <li className="border-b border-gray-600 py-2">
                  <span className="font-bold text-gray-300">Degree:</span> BSc.
                  Honours Mathematics
                </li>
                <li className="border-b border-gray-600 py-2">
                  <span className="font-bold text-gray-300">Location:</span>{" "}
                  Satkhira, Khulna, Dhaka
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="border-b border-gray-600 py-2">
                  <span className="font-bold text-gray-300">Email:</span>{" "}
                  <span className="text-sm">sudiptabiswas506@gmail.com</span>
                </li>
                <li className="border-b border-gray-600 py-2">
                  <span className="font-bold text-gray-300">Phone No:</span>{" "}
                  +880 1748 272867
                </li>
                <li className="border-b border-gray-600 py-2">
                  <span className="font-bold text-gray-300">Employment:</span>{" "}
                  Remote
                </li>
                <li className="border-b border-gray-600 py-2">
                  <span className="font-bold text-gray-300">Freelance:</span>{" "}
                  Available
                </li>
              </ul>
            </div>

            <div className="flex gap-4 flex-wrap">
              <button className="px-6 py-2 bg-rose-600 hover:bg-rose-700 transition rounded-full font-semibold shadow-lg">
                Download CV
              </button>
              <button
                onClick={() => {
                  document
                    .getElementById("contact")
                    .scrollIntoView({ behavior: "smooth" });
                }}
                className="px-6 py-2 bg-rose-600 hover:bg-rose-700 transition rounded-full font-semibold shadow-lg"
              >
                Hire Me
              </button>
            </div>
          </div>

          <div className="w-full space-y-4">
            <div className="space-y-1">
              <div className="flex justify-between font-semibold text-sm">
                <span>HTML5 & CSS3</span>
                <span>98%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full">
                <div className="h-2 w-[98%] bg-rose-500 rounded-full"></div>
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between font-semibold text-sm">
                <span>JavaScript</span>
                <span>95%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full">
                <div className="h-2 w-[95%] bg-rose-500 rounded-full"></div>
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between font-semibold text-sm">
                <span>Tailwind CSS & Bootstrap</span>
                <span>96%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full">
                <div className="h-2 w-[96%] bg-rose-500 rounded-full"></div>
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between font-semibold text-sm">
                <span>React.js & Next.js</span>
                <span>93%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full">
                <div className="h-2 w-[93%] bg-rose-500 rounded-full"></div>
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between font-semibold text-sm">
                <span>Node.js, Express.js & MongoDB</span>
                <span>90%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full">
                <div className="h-2 w-[90%] bg-rose-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;

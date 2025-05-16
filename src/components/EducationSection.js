import React from "react";

const educationData = [
  {
    level: "JSC (2014)",
    institution: "GOBINDAKATI HIGH SCHOOL",
    gpa: 4.50,
    outOf: 5.00,
    description: "In JSC, I built my early academic fundamentals through consistency, discipline, and a growing curiosity about science. Though my GPA was 4.50, the journey taught me how to learn with purpose.",
  },
  {
    level: "SSC (2016 - Science)",
    institution: "GOBINDAKATI HIGH SCHOOL",
    gpa: 5.00,
    outOf: 5.00,
    description: "I graduated from SSC in the Science group with a perfect GPA of 5.00. My interest in mathematics, physics, and logic began to flourish here, alongside co-curricular activities like debate and science fairs.",
  },
  {
    level: "HSC (2018 - Science)",
    institution: "KAZI ALAUDDIN COLLEGE",
    gpa: 3.83,
    outOf: 5.00,
    description: "In HSC, I pursued science with passion. Though the GPA was 3.83, I remained actively involved in solving math Olympiad problems and leading group study sessions. It was a time of growth and challenge.",
  },
  {
    level: "B.Sc. Honours in Mathematics (2022)",
    institution: "SATKHIRA GOVERNMENT COLLEGE",
    gpa: 3.13,
    outOf: 4.00,
    description: "Graduated with a B.Sc. Honours in Mathematics. I explored higher-level abstract thinking, calculus, and real analysis, which greatly enhanced my problem-solving ability. It laid the foundation for analytical thinking in programming and data science.",
  },
  {
    level: "Complete Web Development Course (2023)",
    institution: "Programming Hero by Jhankar Mahbub",
    gpa: 100,
    outOf: 100,
    description: "This life-changing online course by Jhankar Mahbub introduced me to the world of full-stack development. I completed all 12 modules with full marks (100/100). It included projects with React.js, Node.js, MongoDB, and real-world applications. The course emphasized practical knowledge, job readiness, and team collaboration.",
  },
];

function Education() {
  return (
    <section className="w-full bg-[#0d0d0d] py-20 text-white">
      <div className="md:w-[80%] w-full mx-auto px-6 lg:px-0 flex flex-col gap-16">
        {/* Title */}
        <div className="flex flex-col gap-2 ">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-white">Education</h2>
          <div className="flex flex-col  gap-[3px]">
            <span className="w-24 h-[4px] bg-rose-500 rounded-full"></span>
            <span className="w-12 h-[4px] bg-rose-500 rounded-full"></span>
          </div>
        </div>

        {/* Items */}
        {educationData.map((edu, index) => {
          const percentage = (edu.gpa / edu.outOf) * 100;
          return (
            <div
              key={index}
              className="flex flex-col md:flex-row md:justify-between md:items-center bg-[#1a1a1a] hover:bg-[#222] transition-all duration-300 p-8 md:p-10 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-rose-500/30 gap-6 md:gap-10"
            >
              {/* Left */}
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl text-rose-400 font-bold mb-1">{edu.level}</h3>
                <p className="text-gray-300 mb-3 italic">{edu.institution}</p>
                <p className="text-sm md:text-base text-gray-400 leading-relaxed text-justify">
                  {edu.description}
                </p>
              </div>

              {/* Right: GPA */}
              <div className="flex flex-col items-end w-full md:w-[40%] gap-1">
                <p className="text-right text-sm text-gray-400">
                  GPA: <span className="text-white font-semibold">{edu.gpa}</span> / {edu.outOf}
                </p>
                <p className="text-right text-xs text-rose-400">{Math.round(percentage)}%</p>
                <div className="w-full bg-[#333] h-3 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-rose-500 to-pink-500 transition-all duration-700"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Education;

import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

function Certificate() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "./image/certificate (2) (1)_page-0001.jpg";
    link.download = "Sudipta_Biswas_Certificate.jpg";
    link.click();
  };

  return (
    <div className="w-full py-10 bg-[#0d0d0d] text-white">
      <div className="w-full lg:w-[80%] mx-auto px-4 sm:px-10 lg:px-0 flex flex-col gap-6">
        {/* Title */}
        <div className="flex flex-col gap-2 mb-4">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-white">
            Certificate
          </h2>
          <div className="flex flex-col gap-1">
            <span className="w-16 h-[4px] bg-rose-500 rounded-full"></span>
            <span className="w-8 h-[4px] bg-rose-500 rounded-full"></span>
          </div>
        </div>

        {/* Certificate Section */}
        <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-stretch">
          {/* Left Side: Certificate Image */}
          <div className="w-full lg:w-1/2 h-[450px] rounded-lg overflow-hidden shadow-xl border border-gray-700">
            <img
              src="./image/certificate (2) (1)_page-0001.jpg"
              alt="Certificate"
              className="w-full h-full object-fill transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Right Side: Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-between gap-6 lg:py-4">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-rose-500">
                Complete Web Development Course
              </h3>
              <p className="text-gray-400 leading-relaxed">
                This certificate is proudly awarded to{" "}
                <span className="text-white font-semibold">Sudipta Biswas</span>{" "}
                (Batch 08 - WEB8-3622) for successfully completing the Complete
                Web Development Course. Covered technologies include JavaScript,
                HTML, CSS, and React. Several real-life projects were developed
                during this course.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Through consistent learning and practice, Sudipta has
                demonstrated a solid understanding of core web development
                concepts and applied them effectively in multiple project
                scenarios. His commitment and effort have been commendable
                throughout the program.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Sudipta’s dedication to hands-on coding and his problem-solving
                mindset were evident in every task. He consistently delivered
                high-quality solutions and actively participated in team-based
                assignments.
              </p>

              <p className="text-sm text-gray-500 italic">
                Certified by Programming Hero | Jhankar Mahbub (CEO)
              </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 flex-wrap mt-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-6 py-2 bg-rose-600 hover:bg-rose-700 transition-all rounded-full font-semibold shadow-md hover:shadow-lg"
              >
                View Certificate
              </button>
              <button
                onClick={handleDownload}
                className="px-6 py-2 bg-gray-700 hover:bg-gray-800 transition-all rounded-full font-semibold shadow-md hover:shadow-lg"
              >
                Download Certificate
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 "
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white p-4 rounded-lg shadow-xl max-w-4xl w-[80%] md:w-[40%] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src="./image/certificate (2) (1)_page-0001.jpg"
              alt="Certificate Full View"
              className="w-full rounded-lg"
            />
            <button
              className="mt-4 text-black text-xl p-2  rounded-full font-semibold block mx-auto absolute -top-4 -right-1"
              onClick={() => setIsModalOpen(false)}
            >
            <RxCross2 />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Certificate;

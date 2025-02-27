"use client";
import React from "react";

const Education = () => {
  return (
    <div id="Education">
      <div className="w-full min-h-screen bg-[url('/edu.jpg')] bg-cover bg-no-repeat flex flex-col justify-center items-center relative">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>

        {/* Heading */}
        <div className="relative w-full flex justify-center items-center mt-10">
          <h2 className="text-3xl text-white uppercase tracking-tighter font-bold">
            Education
          </h2>
        </div>

        {/* Cards Section */}
        <div className="relative flex flex-wrap justify-center gap-6 px-6 mt-10 mb-5 max-w-6xl">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="relative p-8 bg-black bg-opacity-80 text-white rounded-lg shadow-lg overflow-hidden border-2 border-blue-400 hover:scale-105 hover:text-blue-500 transition-transform duration-300 ease-in-out w-full sm:w-[45%] lg:w-[30%]"
            >
              <div className="absolute inset-0 border-2 border-transparent animate-border-move"></div>
              <h3 className="text-2xl font-semibold">{edu.degree}</h3>
              <p className="text-lg">{edu.university}</p>
              <p className="text-sm">{edu.location}</p>
              <p className="text-sm mt-2">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes border-move {
          0% {
            border-color: transparent transparent blue transparent;
          }
          25% {
            border-color: transparent blue transparent transparent;
          }
          50% {
            border-color: blue transparent transparent transparent;
          }
          75% {
            border-color: transparent transparent transparent blue;
          }
          100% {
            border-color: transparent transparent green transparent;
          }
        }
        .animate-border-move {
          animation: border-move 2s infinite alternate;
        }
      `}</style>
    </div>
  );
};

const educationData = [
  {
    degree: "Matriculation Master's Degree",
    university: "Govt Model High School",
    location: "Bhakkar Panjab, PAKISTAN",
    description:
      "Advanced studies in computer science and software development.",
  },
  {
    degree: "Intermediate F.Sc",
    university: "Govt. Post Graduate College",
    location: "Bhakkar Panjab, PAKISTAN",
    description:
      "Foundation in programming, algorithms, and software engineering.",
  },
  {
    degree: "Bachelor of Creative Design",
    university: "University of Thal",
    location: "Bhakkar Panjab, PAKISTAN",
    description: "Specialization in UI/UX design and creative digital media.",
  },
];

export default Education;

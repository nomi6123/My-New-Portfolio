"use client";
import React from "react";

const Education = () => {
  return (
    <div id="Education">
      <div className="w-full min-h-screen bg-[url('/edu.jpg')] bg-cover bg-no-repeat bg-center relative">
        {/* Dynamic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-blue-900/30 to-black/90" />
        
        {/* Floating Particles Animation */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 flex flex-col justify-center items-center min-h-screen py-16 px-6">
          {/* Header Section */}
          <div className="text-center mb-16">
           
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-blue-400">
                My Education
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Building expertise through continuous learning and professional development
            </p>
          </div>

          {/* Education Cards */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto w-full">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className="group relative"
              >
                {/* Card Container */}
                <div className="relative bg-black/30 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-blue-500/20 h-full">
                  
                  {/* Animated Border Effect */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-blue-500/20 animate-pulse"></div>
                  </div>

                  {/* Content */}
                  <div className="relative p-8 h-full flex flex-col">
                    {/* Institution Badge */}
                    <div className="inline-flex items-center space-x-2 mb-6">
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse"></div>
                      <span className="text-blue-400 text-sm font-semibold tracking-wide uppercase">
                        {index === 0 ? "Professional Training" : index === 1 ? "Higher Education" : "Certification"}
                      </span>
                    </div>

                    {/* Degree/Title */}
                    <h3 className="text-2xl font-bold text-white mb-4 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-300">
                      {edu.degree}
                    </h3>

                    {/* University */}
                    <div className="flex items-start space-x-3 mb-3">
                      <div className="w-5 h-5 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center mt-0.5">
                        <div className="w-2 h-2 bg-blue-400 rounded-sm"></div>
                      </div>
                      <p className="text-lg font-semibold text-gray-200">
                        {edu.university}
                      </p>
                    </div>

                    {/* Location */}
                    <div className="flex items-start space-x-3 mb-4">
                      <div className="w-5 h-5 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center mt-0.5">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      </div>
                      <p className="text-gray-400 text-sm">
                        {edu.location}
                      </p>
                    </div>

                    {/* Description */}
                    <div className="flex-grow">
                      <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 backdrop-blur-sm p-4 rounded-2xl border border-blue-500/10">
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {edu.description}
                        </p>
                      </div>
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                  </div>

                  {/* Card Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/5 to-cyan-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl" />
                </div>

                {/* External Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-cyan-500/0 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 rounded-3xl transform scale-105" />
              </div>
            ))}
          </div>

          {/* Bottom Decoration */}
          <div className="flex justify-center mt-16">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

const educationData = [
  {
    degree: "Training in Website Development",
    university: "Athena Sols",
    location: "Bhakkar Punjab, Pakistan",
    description:
      "Advanced studies in Website development, Graphic Designing, Video & Audio Editing.",
  },
  {
    degree: "Intermediate F.Sc",
    university: "Govt. Post Graduate College",
    location: "Bhakkar Punjab, Pakistan",
    description:
      "Foundation in Physics, Chemistry & Biology.",
  },
  {
    degree: "Certified In Computer Operator",
    university: "Vocational Training Institute",
    location: "Bhakkar Punjab, Pakistan",
    description: "Specialization in UI/UX design, Ms Office, Inpage & Typing Skills.",
  },
];

export default Education; 
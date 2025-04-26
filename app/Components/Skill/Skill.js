"use client"
import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML & CSS", level: 95 },
  { name: "React Js", level: 87 },
  { name: "Next Js", level: 89 },
  { name: "Node Js", level: 24 },
  { name: "PhotoEditer", level: 95 },

];

const additionalSkills = [
  { name: "Graphic Designer", level: 95 },
  { name: "Video Editor", level: 90 },
  { name: "Audio Editor", level: 97 },
  { name: "MS Office Expert", level: 95 },
];

const Skill = () => {
  return (
    <div id="Skills" className="w-full min-h-screen flex flex-col items-center bg-[url('/si.jpg')] bg-cover bg-no-repeat px-4 sm:px-8 relative">
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>

      <div className="relative w-fit h-fit flex justify-center items-center mt-10">
        <h2 className="text-3xl md:text-4xl text-white uppercase tracking-tighter font-bold">
          Skills
        </h2>
      </div>

      {/* Skill Bars Section */}
      <div className="relative space-y-4 bg-black bg-opacity-90 rounded-lg p-6 sm:p-10 text-white w-full max-w-4xl mt-5">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col sm:flex-row gap-3 items-center">
            <label className="w-full sm:w-2/12 font-semibold text-center sm:text-left">
              {skill.name}
            </label>
            <div className="w-full sm:grow rounded-full h-2.5 bg-gray-700 overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1, ease: "easeInOut" }}
                viewport={{ once: false }}
                className="bg-gradient-to-r from-fuchsia-400 to-cyan-300 h-2.5 rounded-full"
              />
            </div>
            <h2 className="text-lg sm:text-2xl font-semibold">{skill.level}%</h2>
          </div>
        ))}
      </div>

      {/* Additional Skills */}
      <div className="relative space-y-4 p-6 sm:p-10 bg-black bg-opacity-90 rounded-lg mb-3 text-white w-full max-w-4xl mt-5">
        {additionalSkills.map((skill, index) => (
          <div key={index} className="flex flex-col sm:flex-row gap-3 items-center">
            <label className="w-full sm:w-2/12 font-semibold text-center sm:text-left">
              {skill.name}
            </label>
            <div className="w-full sm:grow rounded-full h-2.5 bg-gray-700 overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1, ease: "easeInOut" }}
                viewport={{ once: false }}
                className="bg-gradient-to-r from-fuchsia-400 to-cyan-300 h-2.5 rounded-full"
              />
            </div>
            <h2 className="text-lg sm:text-2xl font-semibold">{skill.level}%</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;

"use client";
import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML & CSS", level: 95 },
  { name: "React Js", level: 87 },
  { name: "Next Js", level: 89 },
  { name: "Node Js", level: 24 },
  { name: "Photo Editing", level: 95 },
];

const additionalSkills = [
  { name: "Graphic Designer", level: 95 },
  { name: "Video Editing", level: 90 },
  { name: "Audio Editing", level: 97 },
  { name: "MS Office Expert", level: 95 },
  { name: "Typing Skill", level: 90 },
];

const SkillCard = ({ skill, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    viewport={{ once: false }}
    whileHover={{ y: -5, scale: 1.02 }}
    className="group relative bg-gradient-to-br from-black/80 via-gray-900/80 to-black/80 backdrop-blur-md rounded-2xl p-6 border border-gray-700/50 hover:border-fuchsia-400/50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-fuchsia-400/20"
  >
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-fuchsia-400/10 to-cyan-300/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <div className="relative z-10">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-fuchsia-400 group-hover:to-cyan-300 group-hover:bg-clip-text transition-all duration-300">
          {skill.name}
        </h3>
        <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-fuchsia-400 to-cyan-300 bg-clip-text">
          {skill.level}%
        </div>
      </div>

      {/* Progress Bar */}
      <div className="relative">
        <div className="w-full h-3 bg-gray-700/50 rounded-full overflow-hidden backdrop-blur-sm">
          <motion.div
            initial={{ width: "0%" }}
            whileInView={{ width: `${skill.level}%` }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: index * 0.1 }}
            viewport={{ once: false }}
            className="h-full bg-gradient-to-r from-fuchsia-400 via-purple-500 to-cyan-300 rounded-full relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
          </motion.div>
        </div>
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
          viewport={{ once: false }}
          className="absolute top-0 bg-gradient-to-r from-fuchsia-400 to-cyan-300 text-white text-xs px-2 py-1 rounded-full font-bold shadow-lg"
          style={{ left: `${Math.max(skill.level - 10, 0)}%` }}
        >
          {skill.level}%
        </motion.div>
      </div>
    </div>
  </motion.div>
);

const Skill = () => (
  <div
    id="Skills"
    className="w-full min-h-screen flex justify-center items-center bg-[url('/si.jpg')] bg-cover bg-no-repeat px-4 sm:px-8 relative"
  >
    <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-gradient-to-r from-fuchsia-400 to-cyan-300 rounded-full opacity-20"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 10 + i,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>

    <div className="relative z-10 w-full max-w-[1400px] mx-auto py-16">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
        className="text-center mb-16"
      >
        <motion.h2
          className="text-5xl md:text-7xl font-black text-transparent bg-gradient-to-r from-fuchsia-400 via-purple-500 to-cyan-300 bg-clip-text mb-4 tracking-tight"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          MY SKILLS
        </motion.h2>
        <motion.div
          className="h-1 w-32 bg-gradient-to-r from-fuchsia-400 to-cyan-300 mx-auto rounded-full"
          animate={{ width: [128, 200, 128] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Technical Skills */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
        className="mb-16"
      >
        <h3 className="text-3xl font-bold text-white mb-8 text-center">
          <span className="text-transparent bg-gradient-to-r from-fuchsia-400 to-cyan-300 bg-clip-text">
            Technical Skills
          </span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} index={index} />
          ))}
        </div>
      </motion.div>

      {/* Creative & Professional Skills */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: false }}
      >
        <h3 className="text-3xl font-bold text-white mb-8 text-center">
          <span className="text-transparent bg-gradient-to-r from-cyan-300 to-fuchsia-400 bg-clip-text">
            Creative & Professional Skills
          </span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {additionalSkills.map((skill, index) => (
            <SkillCard key={index} skill={skill} index={index + skills.length} />
          ))}
        </div>
      </motion.div>

      {/* Stats Summary */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: false }}
        className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
      >
        {[
          { label: "Total Skills", value: "10+" },
          { label: "Average Level", value: "85%" },
          { label: "Highest Level", value: "97%" },
          { label: "Expert Level", value: "1+" },
        ].map((stat, i) => (
          <div key={i} className="bg-black/60 backdrop-blur-md rounded-2xl p-6 border border-gray-700/50">
            <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-fuchsia-400 to-cyan-300 bg-clip-text">
              {stat.value}
            </div>
            <div className="text-white/80 text-sm">{stat.label}</div>
          </div>
        ))}
      </motion.div>
    </div>
  </div>
);

export default Skill;

"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    name: "My Hostit",
    technologies: "Explore the world by clicking on the image.",
    image: "/hostit.png",
    link: "https://my-hostit.vercel.app",
    category: "Web Hosting",
    description: "Modern hosting platform with seamless user experience",
  },
  
  {
    id: 2,
    name: "Finexo",
    technologies: "Explore the world by clicking on the image.",
    image: "/finexo.png",
    link: "https://finexo-pearl.vercel.app",
    category: "Finance",
    description: "Comprehensive financial management solution",
  },
  {
    id: 3,
    name: "Web Agency",
    technologies: "Explore the world by clicking on the image.",
    image: "/webing.png",
    link: "https://web-agency-brown.vercel.app",
    category: "Agency",
    description: "Professional web development agency showcase",
  },
  {
    id: 4,
    name: "Carint",
    technologies: "Explore the world by clicking on the image.",
    image: "/carint.png",
    link: "https://carint-transportservices.vercel.app",
    category: "Transport",
    description: "Complete transport and logistics platform",
  },
  {
    id: 5,
    name: "Healet",
    technologies: "Explore the world by clicking on the image.",
    image: "/healet.png",
    link: "https://healet-for-jewellry.vercel.app",
    category: "E-commerce",
    description: "Luxury jewelry store with elegant design",
  },
  {
    id: 6,
    name: "Car Industry",
    technologies: "Explore the world by clicking on the image.",
    image: "/car.png",
    link: "https://my-car-industry.vercel.app",
    category: "Automotive",
    description: "Comprehensive automotive industry platform",
  },
  {
    id: 7,
    name: "Matter js",
    technologies: "Explore the world by clicking on the image.",
    image: "/matter js.png",
    link: "https://matter-js-portfolio.vercel.app",
    category: "Interactive",
    description: "Physics-based interactive portfolio experience",
  },
  {
    id: 8,
    name: "Finter For Welder",
    technologies: "Explore the world by clicking on the image.",
    image: "/finter.png",
    link: "https://finter-nextjs.vercel.app",
    category: "Industrial",
    description: "Professional welding services platform",
  },
  {
    id: 9,
    name: "Guards",
    technologies: "Explore the world by clicking on the image.",
    image: "/guards.png",
    link: "https://my-guard.vercel.app",
    category: "Security",
    description: "Advanced security services management",
  },
];

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 100, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 80,
        damping: 20
      }}
      className="group perspective-1000"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        whileHover={{ 
          scale: 1.05,
          rotateY: 8,
          rotateX: 5,
          z: 50
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative transform-gpu preserve-3d"
      >
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900/95 via-black/95 to-purple-900/95 backdrop-blur-xl border border-gray-700/30 shadow-2xl">
          {/* Animated border */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500  to-cyan-400 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-lg"></div>
          <div className="absolute inset-[1px] bg-gradient-to-br from-gray-900/95 via-black/95 to-purple-900/95 rounded-3xl"></div>
          
          {/* Floating orbs */}
          <div className="absolute inset-0 overflow-hidden rounded-3xl">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-20 h-20 rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-500/20 blur-xl"
                animate={{
                  x: [0, 100, 0],
                  y: [0, -50, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  left: `${20 + i * 30}%`,
                  top: `${10 + i * 20}%`,
                }}
              />
            ))}
          </div>

          {/* Main content */}
          <div className="relative z-10 p-8">
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
                className="flex items-center gap-3"
              >
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-green-400 to-blue-500 animate-pulse"></div>
                <span className="text-sm font-medium text-gray-400 uppercase tracking-wider">
                  {project.category}
                </span>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + 0.4 }}
                className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center"
              >
                <span className="text-white text-sm font-bold">{String(index + 1).padStart(2, '0')}</span>
              </motion.div>
            </div>

            {/* Project Image */}
            <motion.div
              className="relative mb-6 rounded-2xl overflow-hidden group-hover:shadow-2xl transition-shadow duration-500"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  priority={index < 3}
                />
                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Hover icon */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Project Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-300">
                {project.name}
              </h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              <p className="text-gray-500 text-xs">
                {project.technologies}
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.5 }}
              className="mt-6"
            >
              <Link href={project.link} target="_blank" rel="noopener noreferrer">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-cyan-400 to-purple-500 text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>View Project</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <div
      className="relative bg-[url('/sk.jpg')] bg-cover bg-fixed bg-center text-white py-20 min-h-screen"
      id="Experience"
    >
      {/* Dynamic overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-purple-900/20 to-black/90"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30"
            animate={{
              y: [0, -100, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative container mx-auto px-6 md:px-12 lg:px-24 max-w-7xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mx-auto"></div>
          </motion.div>
          
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-black text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text mb-8 leading-tight"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            MY EXPERIENCE
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light"
          >
            Crafting digital experiences that push boundaries and create lasting impressions. 
            Each project represents a journey of innovation and excellence.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: false }}
          className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "9+", label: "Projects Delivered" },
            { number: "100%", label: "Success Rate" },
            { number: "24/7", label: "Support" },
            { number: "∞", label: "Possibilities" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-purple-900/30 backdrop-blur-xl border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300">
                <motion.div
                  className="text-4xl md:text-5xl font-black text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text mb-2"
                  whileHover={{ scale: 1.1 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
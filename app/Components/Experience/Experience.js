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
    github: "https://github.com/nomi6123/my-hostit", // Add your actual GitHub links
    category: "Web Hosting",
    description: "Modern hosting platform with seamless user experience",
  },
  
  {
    id: 2,
    name: "Finexo",
    technologies: "Explore the world by clicking on the image.",
    image: "/finexo.png",
    link: "https://finexo-pearl.vercel.app",
    github: "https://github.com/nomi6123/finexo", // Add your actual GitHub links
    category: "Finance",
    description: "Comprehensive financial management solution",
  },
  {
    id: 3,
    name: "Web Agency",
    technologies: "Explore the world by clicking on the image.",
    image: "/webing.png",
    link: "https://web-agency-brown.vercel.app",
    github: "https://github.com/nomi6123/web-agency", // Add your actual GitHub links
    category: "Agency",
    description: "Professional web development agency showcase",
  },
  {
    id: 4,
    name: "Carint",
    technologies: "Explore the world by clicking on the image.",
    image: "/carint.png",
    link: "https://carint-transportservices.vercel.app",
    github: "https://github.com/nomi6123/carint", // Add your actual GitHub links
    category: "Transport",
    description: "Complete transport and logistics platform",
  },
  {
    id: 5,
    name: "Healet",
    technologies: "Explore the world by clicking on the image.",
    image: "/healet.png",
    link: "https://healet-for-jewellry.vercel.app",
    github: "https://github.com/nomi6123/healet", // Add your actual GitHub links
    category: "E-commerce",
    description: "Luxury jewelry store with elegant design",
  },
  {
    id: 6,
    name: "Car Industry",
    technologies: "Explore the world by clicking on the image.",
    image: "/car.png",
    link: "https://my-car-industry.vercel.app",
    github: "https://github.com/nomi6123/My-Car-Industry.git", // Add your actual GitHub links
    category: "Automotive",
    description: "Comprehensive automotive industry platform",
  },
  {
    id: 7,
    name: "Matter js",
    technologies: "Explore the world by clicking on the image.",
    image: "/matter js.png",
    link: "https://matter-js-portfolio.vercel.app",
    github: "https://github.com/nomi6123/matter-js-portfolio", // Add your actual GitHub links
    category: "Interactive",
    description: "Physics-based interactive portfolio experience",
  },
  {
    id: 8,
    name: "Finter For Welder",
    technologies: "Explore the world by clicking on the image.",
    image: "/finter.png",
    link: "https://finter-nextjs.vercel.app",
    github: "https://github.com/nomi6123/Finter-in-Next-js", // Add your actual GitHub links
    category: "Industrial",
    description: "Professional welding services platform",
  },
  {
    id: 9,
    name: "Guards",
    technologies: "Explore the world by clicking on the image.",
    image: "/guards.png",
    link: "https://my-guard.vercel.app",
    github: "https://github.com/nomi6123/My-Guard", // Add your actual GitHub links
    category: "Security",
    description: "Advanced security services management",
  },
];

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900/95 via-black/95 to-purple-900/95 backdrop-blur-xl border border-gray-700/30 shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:scale-[1.02]">
        {/* Simplified animated border */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-lg"></div>
        <div className="absolute inset-[1px] bg-gradient-to-br from-gray-900/95 via-black/95 to-purple-900/95 rounded-3xl"></div>
        
        {/* Single floating orb - reduced from 3 */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl">
          <div className="absolute w-20 h-20 rounded-full bg-gradient-to-r from-cyan-400/10 to-purple-500/10 blur-xl top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>

        {/* Main content */}
        <div className="relative z-10 p-8">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-green-400 to-blue-500"></div>
              <span className="text-sm font-medium text-gray-400 uppercase tracking-wider">
                {project.category}
              </span>
            </div>
            
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center">
              <span className="text-white text-sm font-bold">{String(index + 1).padStart(2, '0')}</span>
            </div>
          </div>

          {/* Project Image */}
          <div className="relative mb-6 rounded-2xl overflow-hidden group-hover:shadow-2xl transition-shadow duration-300">
            <div className="relative h-48 w-full">
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority={index < 3}
              />
              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Hover icon */}
              <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Project Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-300">
              {project.name}
            </h3>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              {project.description}
            </p>
            <p className="text-gray-500 text-xs">
              {project.technologies}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="mt-6 flex gap-3">
            {/* View Project Button */}
            <Link href={project.link} target="_blank" rel="noopener noreferrer" className="flex-1">
              <button className="w-full bg-gradient-to-r from-cyan-400 to-purple-500 text-white py-3 px-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.02]">
                <span>Live Demo</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </Link>

            {/* GitHub Button */}
            <Link href={project.github} target="_blank" rel="noopener noreferrer">
              <button className="bg-gray-800/60 hover:bg-gray-700/80 border border-gray-600/50 hover:border-gray-500/70 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.02] backdrop-blur-sm">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span className="hidden sm:inline">Code</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <div
      className="relative bg-[url('/sk.jpg')] bg-cover bg-fixed bg-center text-white py-20 min-h-screen"
      id="Experience"
    >
      {/* Simplified overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-purple-900/20 to-black/90"></div>
      
      {/* Reduced background elements - from 50 to 20 */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative container mx-auto px-6 md:px-12 lg:px-24 max-w-7xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-6">
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mx-auto"></div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text mb-8 leading-tight">
            MY EXPERIENCE
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            Crafting digital experiences that push boundaries and create lasting impressions. 
            Each project represents a journey of innovation and excellence.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "9+", label: "Projects Delivered" },
            { number: "100%", label: "Success Rate" },
            { number: "24/7", label: "Support" },
            { number: "∞", label: "Possibilities" }
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-purple-900/30 backdrop-blur-xl border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300 hover:scale-[1.05]">
                <div className="text-3xl md:text-4xl font-black text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
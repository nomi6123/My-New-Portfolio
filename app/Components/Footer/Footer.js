"use client"
import React from "react";
import { FaLinkedin, FaGithub, FaGlobe, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/muhammad-noman-37b1a7327",
      icon: FaLinkedin,
      label: "LinkedIn",
      color: "hover:text-blue-400"
    },
    {
      href: "https://github.com/nomi6123",
      icon: FaGithub,
      label: "GitHub",
      color: "hover:text-gray-300"
    },
    {
      href: "https://finexo-pearl.vercel.app/",
      icon: FaGlobe,
      label: "My Work",
      color: "hover:text-green-400"
    }
  ];

  const skills = [
    "Web Developer",
    "Graphic Designer",
    "Audio & Video Editor",
    "MS Office Expert",
    "Inpage Pro"
  ];

  return (
    <footer className="relative bg-[url('/skill.jpg')] bg-cover bg-no-repeat bg-center text-white overflow-hidden">
      {/* Enhanced overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-purple-900/40 to-black/90"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20"
            animate={{
              y: [0, -50, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
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

      <div className="relative z-10 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
            
            {/* Profile Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false }}
              className="lg:col-span-2"
            >
              <div className="relative p-8 rounded-3xl bg-gradient-to-br from-gray-900/60 via-black/50 to-purple-900/60 backdrop-blur-xl border border-gray-700/30">
                {/* Animated border */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-fuchsia-400 rounded-3xl opacity-20 blur-xl"></div>
                
                <div className="relative z-10">
                  <motion.h2
                    className="text-4xl md:text-5xl font-black text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-fuchsia-400 bg-clip-text mb-6 uppercase tracking-wider"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    Muhammad Noman
                  </motion.h2>
                  
                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-3 mb-6">
                    {skills.map((skill, index) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="px-4 py-2 bg-gradient-to-r from-fuchsia-500/20 to-cyan-500/20 backdrop-blur-sm border border-fuchsia-400/30 rounded-full text-sm font-medium text-fuchsia-300 hover:from-fuchsia-500/30 hover:to-cyan-500/30 transition-all duration-300"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>

                  <p className="text-gray-300 text-lg leading-relaxed">
                    Passionate about creating digital experiences that blend creativity with functionality. 
                    Transforming ideas into reality through code, design, and innovation.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: false }}
              className="space-y-6"
            >
              <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-purple-900/30 backdrop-blur-xl border border-gray-700/30">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-400 to-blue-500 animate-pulse"></div>
                  Let's Connect
                </h3>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-300">
                    <FaEnvelope className="text-fuchsia-400" />
                    <span className="text-sm">Available for projects</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <FaPhone className="text-fuchsia-400" />
                    <span className="text-sm">Quick response guaranteed</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <FaMapMarkerAlt className="text-fuchsia-400" />
                    <span className="text-sm">Remote & Local work</span>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: "50+", label: "Projects" },
                  { number: "100%", label: "Satisfaction" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="p-4 rounded-xl bg-gradient-to-br from-fuchsia-500/10 to-cyan-500/10 backdrop-blur-sm border border-fuchsia-400/20 text-center"
                  >
                    <div className="text-2xl font-black text-transparent bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text">
                      {stat.number}
                    </div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: false }}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            {socialLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative"
                >
                  <div className="relative p-4 rounded-2xl bg-gradient-to-br from-gray-900/60 to-purple-900/40 backdrop-blur-xl border border-gray-700/30 hover:border-fuchsia-400/50 transition-all duration-300">
                    {/* Hover glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-400/20 to-cyan-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                    
                    <div className="relative z-10 flex items-center gap-3">
                      <IconComponent className={`text-2xl text-fuchsia-400 ${link.color} transition-colors duration-300`} />
                      <span className="text-white font-medium group-hover:text-fuchsia-300 transition-colors duration-300">
                        {link.label}
                      </span>
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: false }}
            className="border-t border-gray-700/30 pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-400">
                &copy; {new Date().getFullYear()} Muhammad Noman. All rights reserved.
              </p>
              
              <div className="flex items-center gap-6 cursor-pointer">
                <Link href="/Privacy" legacyBehavior>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    className="text-sm font-semibold text-white hover:text-fuchsia-400 transition-colors duration-300 relative group"
                  >
                    Privacy Policy
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-fuchsia-400 to-cyan-400 group-hover:w-full transition-all duration-300"></div>
                  </motion.a>
                </Link>
                
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-8 h-8 rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-400 flex items-center justify-center"
                >
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
    </footer>
  );
};

export default Footer;
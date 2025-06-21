"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const blogPosts = [
  {
    title: "Mastering React.js for Modern Web Development",
    description:
      "A comprehensive guide to becoming proficient in React.js, covering components, state management, and best practices.",
    image: "/blog1.jpg",
    details:
      "React.js is a powerful JavaScript library used for building interactive user interfaces. In this guide, you'll learn about React components, hooks, state management, and best practices to create scalable applications.",
    date: "March 28, 2025",
    author: "Muhammad Noman",
  },
  {
    title: "How to Create Stunning UI/UX Designs for Your Website",
    description:
      "Learn the principles of UI/UX design and how to apply them to build visually appealing and user-friendly interfaces.",
    image: "/blog2.jpg",
    details:
      "Good UI/UX design enhances user experience and engagement. This blog explores the fundamentals of color theory, typography, wireframing, and usability testing to create stunning interfaces.",
    date: "March 20, 2025",
    author: "Muhammad Noman",
  },
  {
    title: "AI-Powered Web Apps: The Future of Development",
    description:
      "An in-depth look at how AI is transforming web applications, with examples of AI-driven features you can implement today.",
    image: "/blog3.jpg",
    details:
      "Artificial Intelligence is revolutionizing web development. Learn how AI-powered chatbots, recommendation systems, and image recognition are shaping the future of digital experiences.",
    date: "March 10, 2025",
    author: "Muhammad Noman",
  },
];

export default function BlogPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative min-h-screen bg-[url('/blog.jpg')] bg-cover bg-no-repeat bg-center">
      {/* Dynamic Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-purple-900/30 to-black/90" />
      
      {/* Floating Particles Animation */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/20 rounded-full"
            animate={{
              x: [0, Math.random() * 100, 0],
              y: [0, Math.random() * 100, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
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

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block p-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 mb-6">
            <div className="bg-black/80 backdrop-blur-sm px-6 py-2 rounded-full">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-semibold text-sm tracking-wide uppercase">
                Latest Insights
              </span>
            </div>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-purple-400">
              Blog
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Dive into the world of modern web development, design principles, and cutting-edge technologies
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Card Container */}
              <div className="relative bg-black/30 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-purple-500/20">
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={500}
                      height={300}
                      className="w-full h-56 object-cover"
                    />
                  </motion.div>
                  {/* Gradient Overlay on Image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Floating Date Badge */}
                  <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-purple-400 text-xs font-semibold">{post.date}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  {/* Author Info */}
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>By {post.author}</span>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-bold text-white leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300 cursor-pointer">
                    {post.title}
                  </h2>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                    {post.description}
                  </p>

                  {/* Read More Button */}
                  <button
                    className="group/btn relative inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 hover:from-purple-600/40 hover:to-pink-600/40 border border-purple-500/30 hover:border-purple-400/60 px-4 py-2 rounded-full transition-all duration-300 overflow-hidden"
                    onClick={() => toggleDropdown(index)}
                  >
                    <span className="text-purple-400 group-hover/btn:text-white transition-colors duration-300 text-sm font-medium">
                      {openIndex === index ? "Show Less" : "Read More"}
                    </span>
                    <span 
                      className={`text-purple-400 group-hover/btn:text-white transition-all duration-300 ${openIndex === index ? 'rotate-180' : 'rotate-0'}`}
                    >
                      ▼
                    </span>
                    
                    {/* Button Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/20 to-purple-600/0 transform translate-x-[-100%] group-hover/btn:animate-pulse" />
                  </button>

                  {/* Expandable Details */}
                  {openIndex === index && (
                    <div className="pt-4 mt-4 border-t border-purple-500/20 animate-in slide-in-from-top duration-300">
                      <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm p-4 rounded-2xl border border-purple-500/10">
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {post.details}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/5 to-pink-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl" />
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom Decoration */}
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
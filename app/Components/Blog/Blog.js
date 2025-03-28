"use client";
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';

const blogPosts = [
  {
    title: "Mastering React.js for Modern Web Development",
    description: "A comprehensive guide to becoming proficient in React.js, covering components, state management, and best practices.",
    image: "/blog-1.jpg",
    details: "React.js is a powerful JavaScript library used for building interactive user interfaces. In this guide, you'll learn about React components, hooks, state management, and best practices to create scalable applications.",
    date: "March 28, 2025",
    author: "Muhammad Noman",
  },
  {
    title: "How to Create Stunning UI/UX Designs for Your Website",
    description: "Learn the principles of UI/UX design and how to apply them to build visually appealing and user-friendly interfaces.",
    image: "/blog-2.jpg",
    details: "Good UI/UX design enhances user experience and engagement. This blog explores the fundamentals of color theory, typography, wireframing, and usability testing to create stunning interfaces.",
    date: "March 20, 2025",
    author: "Muhammad Noman",
  },
  {
    title: "AI-Powered Web Apps: The Future of Development",
    description: "An in-depth look at how AI is transforming web applications, with examples of AI-driven features you can implement today.",
    image: "/blog-3.jpg",
    details: "Artificial Intelligence is revolutionizing web development. Learn how AI-powered chatbots, recommendation systems, and image recognition are shaping the future of digital experiences.",
    date: "March 10, 2025",
    author: "Muhammad Noman",
  }
];

export default function BlogPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-full min-h-screen flex justify-center items-center flex-col mx-auto mb-1 p-6 bg-black text-white">
      <h1 className="text-4xl font-bold text-center mb-8">Blog - Insights & Tutorials</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <motion.div 
            key={index} 
            className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          >
            <Image src={post.image} alt={post.title} width={500} height={300} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold hover:text-purple-400 cursor-pointer">{post.title}</h2>
              <p className="text-gray-400 text-sm mt-2">{post.description}</p>
              <p className="text-white font-bold text-xs mt-3">By {post.author} | {post.date}</p>
              <button 
                className="mt-4 text-purple-500 hover:underline focus:outline-none"
                onClick={() => toggleDropdown(index)}
              >
                Read More {openIndex === index ? "▲" : "▼"}
              </button>
              {openIndex === index && (
                <motion.div 
                  className="mt-3 p-3 bg-gray-800 rounded text-gray-300"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {post.details}
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
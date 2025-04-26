"use client";
import React from "react";
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
  },
  {
    id: 2,
    name: "Finexo",
    technologies: "Explore the world by clicking on the image.",
    image: "/finexo.png",
    link: "https://finexo-pearl.vercel.app",
  },
  {
    id: 3,
    name: "Web Agency",
    technologies: "Explore the world by clicking on the image.",
    image: "/webing.png",
    link: "https://web-agency-brown.vercel.app",
  },
  {
    id: 4,
    name: "Carint",
    technologies: "Explore the world by clicking on the image.",
    image: "/carint.png",
    link: "https://carint-transportservices.vercel.app",
  },
  {
    id: 5,
    name: "Healet",
    technologies: "Explore the world by clicking on the image.",
    image: "/healet.png",
    link: "https://healet-for-jewellry.vercel.app",
  },
  {
    id: 6,
    name: "Car Industry",
    technologies: "Explore the world by clicking on the image.",
    image: "/car.png",
    link: "https://my-car-industry.vercel.app",
  },
  {
    id: 7,
    name: "Matter js",
    technologies: "Explore the world by clicking on the image.",
    image: "/matter js.png",
    link: "https://matter-js-portfolio.vercel.app",
  },
  {
    id: 8,
    name: "Finter For Welder",
    technologies: "Explore the world by clicking on the image.",
    image: "/finter.png",
    link: "https://finter-nextjs.vercel.app",
  },
  {
    id: 9,
    name: "Guards",
    technologies: "Explore the world by clicking on the image.",
    image: "/guards.png",
    link: "https://my-guard.vercel.app",
  },
];

const Experience = () => {
  return (
    <div
      className="relative bg-[url('/sk.jpg')] bg-cover bg-no-repeat text-white py-20"
      id="Experience"
    >
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>

      <div className="relative container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -100 }} // Start from left
              whileInView={{ opacity: 1, x: 0 }} // Animate to center
              viewport={{ once: true }} // Run animation only once
              transition={{ duration: 0.6, delay: index * 0.2 }} // Staggered effect
            >
              <Link href={item.link} target="_blank" rel="noopener noreferrer">
                <div className="bg-black bg-opacity-90 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer">
                  {item.image && (
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={600}
                      height={300}
                      className="rounded-lg mb-4 w-full h-48  object-contain"
                    />
                  )}
                  <h3 className="font-bold text-2xl mb-2">{item.name}</h3>
                  <p className="text-white  mb-4">{item.technologies}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;

"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const clients = [
  { name: "Google", logo: "/c1.png" },
  { name: "Amazon", logo: "/c2.png" },
  { name: "Facebook", logo: "/c3.png" },
  { name: "Microsoft", logo: "/c4.png" },
  { name: "Netflix", logo: "/c5.png" },
];

const Clients = () => {
  return (
    <div id="Clients" className="relative py-24 bg-[url('/about.jpeg')] bg-cover bg-no-repeat text-center">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Content Wrapper with Max Width */}
      <div className="relative max-w-6xl mx-auto px-4">
        {/* Heading */}
        <motion.h2
          className="text-4xl font-bold mb-8 text-white z-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Trusted Clients
        </motion.h2>

        {/* Client Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 px-6 z-10">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              className="bg-black bg-opacity-70 p-4 shadow-lg rounded-xl flex justify-center items-center h-24"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <Image 
                src={client.logo} 
                alt={client.name} 
                width={96} 
                height={96} 
                className="h-auto"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;

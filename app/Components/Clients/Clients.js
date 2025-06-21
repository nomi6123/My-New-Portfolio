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
    <div id="Clients" className="relative py-32 bg-[url('/about.jpeg')] bg-cover bg-center bg-fixed text-center overflow-hidden">
      {/* Dynamic Background Overlay with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-purple-900/40 to-black/90"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Content Wrapper */}
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Enhanced Heading Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wide">
              Trusted Partnerships
            </span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            <span className="bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent">
              Industry Leaders
            </span>
            <br />
            <span className="text-3xl md:text-4xl font-light text-gray-300">
              Choose Us
            </span>
          </h2>
          
          <motion.p
            className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Trusted by Fortune 500 companies worldwide to deliver exceptional results and innovative solutions.
          </motion.p>
        </motion.div>

        {/* Enhanced Client Logos Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {clients.map((client, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.8 + index * 0.1,
                ease: "easeOut"
              }}
              whileHover={{ y: -10 }}
            >
              {/* Glassmorphism Card */}
              <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 h-32 flex items-center justify-center transition-all duration-500 group-hover:bg-white/20 group-hover:border-cyan-400/50 group-hover:shadow-2xl group-hover:shadow-cyan-500/25">
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/20 group-hover:to-purple-500/20 transition-all duration-500"></div>
                
                {/* Logo Container */}
                <div className="relative z-10 transition-transform duration-500 group-hover:scale-110">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={80}
                    height={80}
                    className="h-auto max-h-16 w-auto filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-500"
                  />
                </div>

                {/* Client Name on Hover */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-white text-sm font-medium bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
                    {client.name}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>


      </div>
    </div>
  );
};

export default Clients;
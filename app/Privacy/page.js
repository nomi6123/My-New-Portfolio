"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

const page = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    cssEase: "cubic-bezier(0.87, 0, 0.13, 1)",
    dotsClass: "slick-dots custom-dots",
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[url('/home-1.jpg')] bg-cover bg-center bg-fixed relative overflow-hidden">
      {/* Enhanced Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-blue-900/50 to-black/90"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/6 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 max-w-4xl w-full"
      >
        {/* Header Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
         
          
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">
              Privacy Policy
            </span>
          </h1>
          
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Your privacy matters to us. Learn how we protect and handle your personal information.
          </p>
        </motion.div>

        {/* Main Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl p-8 md:p-12 relative overflow-hidden"
        >
          {/* Card Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-3xl"></div>
          
          <div className="relative z-10">
            <Slider {...settings}>
              <div className="px-4">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">
                      Information We Collect
                    </h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-6"></div>
                  </div>
                </div>
                <p className="text-gray-200 text-lg leading-relaxed">
                  We collect personal information only when you provide it to us voluntarily. This may include 
                  your name, email address, and other contact details. We ensure all data collection is 
                  transparent and necessary for providing our services.
                </p>
              </div>

              <div className="px-4">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">
                      How We Use Your Information
                    </h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6"></div>
                  </div>
                </div>
                <p className="text-gray-200 text-lg leading-relaxed">
                  The information we collect is used to provide and improve our services. We do not share or 
                  sell your personal information to third parties. Your data is protected with industry-standard 
                  security measures and used solely for legitimate business purposes.
                </p>
              </div>

              <div className="px-4">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">
                      Cookies & Tracking
                    </h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-full mb-6"></div>
                  </div>
                </div>
                <p className="text-gray-200 text-lg leading-relaxed">
                  We may use cookies to enhance your browsing experience and provide personalized content. 
                  You can choose to disable cookies in your browser settings if you prefer. We respect your 
                  choices and provide clear options for managing your preferences.
                </p>
              </div>

              <div className="px-4">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">
                      Contact Us
                    </h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mb-6"></div>
                  </div>
                </div>
                <p className="text-gray-200 text-lg leading-relaxed">
                  If you have any questions about our privacy policy or how we handle your data, 
                  feel free to reach out to us. We're committed to transparency and will address any concerns promptly.
                </p>
                <div className="mt-6 p-3 bg-black/50 rounded-xl border border-white/10">
                  <p className="text-cyan-400 break-words font-semibold">
                    📧 noman1137chaya4048@gmail.com
                  </p>
                </div>
              </div>
            </Slider>
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-gray-400 text-sm">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </motion.div>
      </motion.div>

      <style jsx global>{`
        .custom-dots {
          bottom: -50px !important;
        }
        .custom-dots li button:before {
          color: rgba(255, 255, 255, 0.5) !important;
          font-size: 12px !important;
        }
        .custom-dots li.slick-active button:before {
          color: #06b6d4 !important;
        }
        .slick-prev, .slick-next {
          display: none !important;
        }
      `}</style>
    </div>
  );
};

export default page;
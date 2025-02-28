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
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-[url('/home-1.jpg')] bg-cover bg-no-repeat">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-r to-gray-400 from-black bg-opacity-90 shadow-xl rounded-2xl p-8 max-w-3xl w-full"
      >
        <h1 className="text-4xl font-extrabold text-white mb-6 text-center">
          Privacy Policy
        </h1>

        <Slider {...settings}>
          <div>
            <h2 className="text-xl font-semibold text-white mt-6">
              Information We Collect
            </h2>
            <p className="text-white mb-4">
              We collect personal information only when you provide it to us voluntarily. This may include
              your name, email address, and other contact details.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white mt-6">
              How We Use Your Information
            </h2>
            <p className="text-white mb-4">
              The information we collect is used to provide and improve our services. We do not share or
              sell your personal information to third parties.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white mt-6">
              Cookies
            </h2>
            <p className="text-white mb-4">
              We may use cookies to enhance your browsing experience. You can choose to disable cookies
              in your browser settings if you prefer.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white mt-6">
              Contact Us
            </h2>
            <p className="text-white mb-4">
              If you have any questions about our privacy policy, feel free to contact us at
              <span className="text-blue-500"> noman1137chaya4048@gmail.com</span>.
            </p>
          </div>
        </Slider>
      </motion.div>
    </div>
  );
};

export default page;

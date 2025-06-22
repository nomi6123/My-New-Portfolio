"use client"
import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaRegAddressCard, FaPaperPlane, FaUser, FaComment } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name && formData.email && formData.message) {
      if (!validateEmail(formData.email)) {
        setError("Please enter a valid email address.");
        return;
      }

      const serviceID = "service_g19u2fx";
      const templateID = "template_npm5hif";
      const publicKey = "YYKxrDH-ip98y3LFc";

      if (!serviceID || !templateID || !publicKey) {
        setError("Email service is not properly configured.");
        return;
      }

      setIsSending(true);

      emailjs.send(serviceID, templateID, formData, publicKey)
        .then(() => {
          setFormData({ name: "", email: "", message: "" });
          setSubmitted(true);
          setError("");
          setIsSending(false);
          setTimeout(() => setSubmitted(false), 3000);
        })
        .catch(() => {
          setError("Failed to send the message. Please try again later.");
          setIsSending(false);
        });
    } else {
      setError("Please fill in all fields before submitting.");
    }
  };

  return (
    <section className="relative min-h-screen flex justify-center items-center py-20 bg-cover bg-center bg-no-repeat bg-[url('/c-1.jpg')]" id="Contact">
      {/* Animated background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-purple-900/30 to-black/90"></div>
      
      {/* Animated particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-2 h-2 bg-fuchsia-400 rounded-full animate-ping opacity-70" style={{top: '20%', left: '10%', animationDelay: '0s'}}></div>
        <div className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-ping opacity-70" style={{top: '60%', left: '80%', animationDelay: '1s'}}></div>
        <div className="absolute w-3 h-3 bg-purple-400 rounded-full animate-ping opacity-50" style={{top: '80%', left: '20%', animationDelay: '2s'}}></div>
        <div className="absolute w-1 h-1 bg-pink-400 rounded-full animate-ping opacity-60" style={{top: '40%', left: '70%', animationDelay: '3s'}}></div>
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 text-white">
        {/* Header with animated text */}
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-fuchsia-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-fuchsia-400 to-cyan-400 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-4 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Ready to bring your ideas to life? Let&apos;s create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start max-w-7xl mx-auto">
          {/* Left side - Contact info */}
          <div className="space-y-6 lg:space-y-8">
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-lg rounded-2xl lg:rounded-3xl p-6 lg:p-8 border border-gray-700/50 shadow-2xl">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-6 bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                Let&apos;s Connect
              </h2>
              <p className="text-gray-300 text-base lg:text-lg leading-relaxed mb-6 lg:mb-8">
                I am available to discuss web development projects and potential partnership opportunities. Let&apos;s turn your vision into reality.
              </p>
              
              <div className="space-y-4 lg:space-y-6">
                <div className="flex items-center space-x-4 group hover:transform hover:scale-105 transition-all duration-300 cursor-pointer">
                  <div className="bg-gradient-to-r from-fuchsia-500 to-purple-600 p-3 lg:p-4 rounded-full flex-shrink-0">
                    <FaEnvelope className="text-white text-lg lg:text-xl" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-white font-semibold text-sm lg:text-base">Email</h3>
                    <a 
                      href="mailto:noman1137chaya4048@gmail.com" 
                      className="text-gray-300 hover:text-fuchsia-400 transition-colors duration-300 text-sm lg:text-base break-all"
                      aria-label="Send email to noman1137chaya4048@gmail.com"
                    >
                      noman1137chaya4048@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-3 lg:p-4 rounded-full flex-shrink-0">
                    <FaPhone className="text-white text-lg lg:text-xl" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-white font-semibold text-sm lg:text-base">Phone</h3>
                    <a 
                      href="tel:+923328664048" 
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm lg:text-base"
                      aria-label="Call +923328664048"
                    >
                      +923328664048
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-3 lg:p-4 rounded-full flex-shrink-0">
                    <FaRegAddressCard className="text-white text-lg lg:text-xl" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-white font-semibold text-sm lg:text-base">Location</h3>
                    <span className="text-gray-300 text-sm lg:text-base">Post Office Sial, Wadhy Wali District Bhakkar</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional info card */}
            <div className="bg-gradient-to-br from-fuchsia-900/30 to-purple-900/30 backdrop-blur-lg rounded-2xl lg:rounded-3xl p-4 lg:p-6 border border-fuchsia-500/30">
              <h3 className="text-lg lg:text-xl font-semibold text-fuchsia-400 mb-2 lg:mb-3">Quick Response</h3>
              <p className="text-gray-300 text-sm lg:text-base">I typically respond within 24 hours. For urgent matters, feel free to call directly.</p>
            </div>
          </div>

          {/* Right side - Contact form */}
          <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/70 backdrop-blur-lg rounded-2xl lg:rounded-3xl p-6 lg:p-8 border border-gray-700/50 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
              <div className="relative">
                <label htmlFor="name" className="block mb-2 text-gray-300 font-medium text-sm lg:text-base">
                  Your Name
                </label>
                <div className="relative">
                  <FaUser className="absolute left-3 lg:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm lg:text-base" />
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    className="w-full pl-10 lg:pl-12 pr-4 py-3 lg:py-4 rounded-xl lg:rounded-2xl bg-gray-800/80 border border-gray-600/50 focus:outline-none focus:border-fuchsia-400 focus:ring-2 focus:ring-fuchsia-400/20 transition-all duration-300 text-white placeholder-gray-400 text-sm lg:text-base" 
                    placeholder="Enter your full name" 
                    required 
                    aria-describedby="name-error"
                  />
                </div>
              </div>

              <div className="relative">
                <label htmlFor="email" className="block mb-2 text-gray-300 font-medium text-sm lg:text-base">
                  Email Address
                </label>
                <div className="relative">
                  <FaEnvelope className="absolute left-3 lg:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm lg:text-base" />
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    className="w-full pl-10 lg:pl-12 pr-4 py-3 lg:py-4 rounded-xl lg:rounded-2xl bg-gray-800/80 border border-gray-600/50 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 text-white placeholder-gray-400 text-sm lg:text-base" 
                    placeholder="your.email@example.com" 
                    required 
                    aria-describedby="email-error"
                  />
                </div>
              </div>

              <div className="relative">
                <label htmlFor="message" className="block mb-2 text-gray-300 font-medium text-sm lg:text-base">
                  Your Message
                </label>
                <div className="relative">
                  <FaComment className="absolute left-3 lg:left-4 top-4 lg:top-6 text-gray-400 text-sm lg:text-base" />
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    className="w-full pl-10 lg:pl-12 pr-4 py-3 lg:py-4 rounded-xl lg:rounded-2xl bg-gray-800/80 border border-gray-600/50 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 text-white placeholder-gray-400 resize-none text-sm lg:text-base" 
                    rows="5" 
                    placeholder="Tell me about your project or how I can help you..." 
                    required 
                    aria-describedby="message-error"
                  />
                </div>
              </div>

              <button 
                type="submit"
                disabled={isSending} 
                className={`w-full bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-500 text-white font-semibold py-3 lg:py-4 px-6 lg:px-8 rounded-xl lg:rounded-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-fuchsia-500/25 flex items-center justify-center space-x-2 lg:space-x-3 text-sm lg:text-base ${isSending ? "opacity-50 cursor-not-allowed" : "hover:from-fuchsia-600 hover:via-purple-600 hover:to-cyan-600"}`}
                aria-describedby="submit-status"
              >
                {isSending ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 lg:h-5 lg:w-5 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="text-sm lg:text-lg" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>

            {/* Status messages */}
            {submitted && (
              <div className="mt-4 lg:mt-6 p-3 lg:p-4 bg-green-900/50 border border-green-500/50 rounded-xl lg:rounded-2xl backdrop-blur-sm" role="alert">
                <p className="text-green-400 font-medium text-center text-sm lg:text-base" aria-live="polite">
                  ✨ Your message has been sent successfully! I&apos;ll get back to you soon.
                </p>
              </div>
            )}
            
            {error && (
              <div className="mt-4 lg:mt-6 p-3 lg:p-4 bg-red-900/50 border border-red-500/50 rounded-xl lg:rounded-2xl backdrop-blur-sm" role="alert">
                <p className="text-red-400 font-medium text-center text-sm lg:text-base" aria-live="polite">{error}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
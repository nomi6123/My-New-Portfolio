"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "I provide Frontend Development using React.js and Next.js, AI-powered web applications, video editing, photo editing, graphic design, and UI/UX design."
  },
  {
    question: "How can AI improve my website or application?",
    answer:
      "AI can enhance your project with smart automation, chatbots, recommendation systems, and data-driven insights, improving user engagement and efficiency."
  },
  {
    question: "Do you provide custom web development services?",
    answer:
      "Yes, I create custom websites and web applications tailored to your specific needs using React.js, Next.js, and modern technologies."
  },
  {
    question: "What is your experience with React.js and Next.js?",
    answer:
      "I have extensive experience building high-performance, dynamic web applications with React.js and Next.js."
  },
  {
    question: "Do you offer UI/UX design services?",
    answer:
      "Yes, I specialize in crafting visually appealing and user-friendly UI/UX designs that improve engagement."
  },
  {
    question: "Can you assist with video and photo editing?",
    answer:
      "Absolutely! I offer professional video editing, photo enhancement, and motion graphics for various platforms."
  },
  {
    question: "What graphic design services do you provide?",
    answer:
      "I design logos, branding materials, social media graphics, and marketing visuals to make your brand stand out."
  },
  {
    question: "How do you start a new project?",
    answer:
      "I begin by understanding your requirements, followed by planning, designing, developing, and testing to ensure the best results."
  },
  {
    question: "How can I contact you?",
    answer:
      "You can reach me via email or through the contact form on my website to discuss your project needs."
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative mx-auto flex justify-center items-center p-6 bg-[url('/faqs-1.jpg')] bg-cover bg-fixed bg-center min-h-screen overflow-hidden">
      {/* Enhanced gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f0c29]/90 via-[#302b63]/30 to-[#24243e]/90 z-0" />

      {/* Simplified background particles - reduced from 40 to 15 */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-10 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 1}s`
            }}
          />
        ))}
      </div>

      {/* FAQ Content */}
      <div className="relative z-10 max-w-5xl mx-auto py-20">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-6">
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto"></div>
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text mb-6 leading-tight">
            Frequently Asked Questions
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about my services and how we can work together
          </p>
        </motion.div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
                ease: "easeOut"
              }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/95 via-gray-50/95 to-white/90 backdrop-blur-xl border border-gray-200/50 shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-[1.01]">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-lg"></div>
                <div className="absolute inset-[1px] bg-gradient-to-br from-white/95 via-gray-50/95 to-white/90 rounded-2xl"></div>

                <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10 p-6">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left flex justify-between items-start gap-4 group/button hover:scale-[1.01] transition-transform duration-200"
                  >
                    <div className="flex items-start gap-4 flex-1">
                      <div className="flex-1">
                        <h3 className="text-lg md:text-xl font-bold text-gray-800 group-hover/button:text-transparent group-hover/button:bg-gradient-to-r group-hover/button:from-cyan-600 group-hover/button:to-blue-600 group-hover/button:bg-clip-text transition-all duration-300 leading-relaxed">
                          {faq.question}
                        </h3>
                      </div>
                    </div>

                    <div
                      className={`flex-shrink-0 w-10 h-10 bg-gradient-to-r from-gray-100 to-gray-200 group-hover/button:from-cyan-100 group-hover/button:to-blue-100 rounded-lg flex items-center justify-center shadow-sm transition-all duration-300 ${
                        openIndex === index ? 'rotate-45' : 'rotate-0'
                      }`}
                    >
                      <span className="text-2xl font-light text-gray-600 group-hover/button:text-cyan-600 transition-colors duration-300">
                        +
                      </span>
                    </div>
                  </button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pt-6 pl-6">
                          <div className="relative">
                            <div className="absolute -left-4 top-2 w-4 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full"></div>
                            <p className="text-gray-700 text-base md:text-lg leading-relaxed font-medium">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="inline-block p-8 rounded-3xl bg-gradient-to-br from-white/10 via-gray-100/10 to-white/5 backdrop-blur-xl border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-300 mb-6">
              Don't hesitate to reach out! I'm here to help with any inquiries.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-700 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105 hover:-translate-y-1">
              Get In Touch
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
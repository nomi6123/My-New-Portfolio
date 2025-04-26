"use client";
import { useState } from "react";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "I provide Frontend Development using React.js and Next.js, AI-powered web applications, video editing, photo editing, graphic design, and UI/UX design.",
  },
  {
    question: "How can AI improve my website or application?",
    answer:
      "AI can enhance your project with smart automation, chatbots, recommendation systems, and data-driven insights, improving user engagement and efficiency.",
  },
  {
    question: "Do you provide custom web development services?",
    answer:
      "Yes, I create custom websites and web applications tailored to your specific needs using React.js, Next.js, and modern technologies.",
  },
  {
    question: "What is your experience with React.js and Next.js?",
    answer:
      "I have extensive experience building high-performance, dynamic web applications with React.js and Next.js.",
  },
  {
    question: "Do you offer UI/UX design services?",
    answer:
      "Yes, I specialize in crafting visually appealing and user-friendly UI/UX designs that improve engagement.",
  },
  {
    question: "Can you assist with video and photo editing?",
    answer:
      "Absolutely! I offer professional video editing, photo enhancement, and motion graphics for various platforms.",
  },
  {
    question: "What graphic design services do you provide?",
    answer:
      "I design logos, branding materials, social media graphics, and marketing visuals to make your brand stand out.",
  },
  {
    question: "How do you start a new project?",
    answer:
      "I begin by understanding your requirements, followed by planning, designing, developing, and testing to ensure the best results.",
  },
  {
    question: "How can I contact you?",
    answer:
      "You can reach me via email or through the contact form on my website to discuss your project needs.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative mx-auto p-6 bg-[url('/faqs-1.jpg')] bg-cover bg-no-repeat text-black shadow-lg">
      {/* Blackish Overlay */}
      <div className="absolute inset-0 bg-black/70 z-0" />

      {/* FAQ Content */}
      <div className="relative z-10">
        <h2 className="text-3xl text-white font-bold text-center mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4 flex justify-center items-center flex-col">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="w-[90%] border border-transparent bg-white text-black
               rounded-lg p-2 transition-all duration-300
                hover:border-fuchsia-500 hover:bg-opacity-70 hover:bg-black group"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left flex justify-between text-black
                 items-center text-lg font-semibold py-2
                 transition-all duration-300 group-hover:text-purple-400"
              >
                {faq.question}
                <span className="text-xl text-black group-hover:text-white transition-all duration-300">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <p className="mt-2 group-hover:text-white transition-all duration-300">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client"
import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaRegAddressCard } from "react-icons/fa";
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
    <div className="relative py-20 bg-cover bg-no-repeat bg-[url('/c-1.jpg')]" id="Contact">
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>
      <div className="container relative mx-auto px-8 md:px-16 lg:px-24 text-white">
        <h2 className="text-4xl font-bold text-center mb-12">Contact With Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-fuchsia-400 mb-4">
            Let's Connect
            </h3>
            <p>I am available to discuss web development projects and potential partnership opportunities.</p>
            <div className="mb-4 mt-8">
              <FaEnvelope className="inline-block mr-2 text-fuchsia-400" />
              <a href="mailto:noman1137chaya4048@gmail.com" className="hover:underline">Mail me</a>
            </div>
            <div className="mb-4">
              <FaPhone className="inline-block mr-2 text-fuchsia-400" />
              <span>+923328664048</span>
            </div>
            <div className="mb-4">
              <FaRegAddressCard className="inline-block mr-2 text-fuchsia-400" />
              <span>Post Office Sial, Wadhy Wali District Bhakkar</span>
            </div>
          </div>
          <div className="flex-1 w-full">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2">Your Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full p-3 rounded-lg bg-black bg-opacity-90 border border-gray-600 focus:outline-none focus:border-green-400" placeholder="Write your Name" required />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-3 rounded-lg bg-black bg-opacity-90 border border-gray-600 focus:outline-none focus:border-green-400" placeholder="Write your Email" required />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} className="w-full p-3 rounded-lg bg-black bg-opacity-90 border border-gray-600 focus:outline-none focus:border-green-400" rows="5" placeholder="Write your Message" required />
              </div>
              <button type="submit" disabled={isSending} className={`bg-gradient-to-r from-fuchsia-500 to-blue-500 text-white px-8 py-2 rounded-full transform transition-transform duration-300 hover:scale-105 ${isSending ? "opacity-50 cursor-not-allowed" : ""}`}>
                {isSending ? "Sending..." : "Send"}
              </button>
            </form>
            {submitted && <p className="text-fuchsia-400 mt-4" aria-live="polite">Your message has been sent successfully!</p>}
            {error && <p className="text-red-500 mt-4" aria-live="polite">{error}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

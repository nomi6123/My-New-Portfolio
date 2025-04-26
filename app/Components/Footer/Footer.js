import React from "react";
import { FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[url('/skill.jpg')] bg-cover bg-no-repeat text-white py-8 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-white uppercase">Muhammad Noman</h2>
        <p className="text-sm mb-2">
          Web Developer | Graphic Designer | Audio & Video Editor | MS Office Expert | Inpage Pro
        </p>

        <div className="flex justify-center space-x-4 mb-4">
          <a
            href="https://www.linkedin.com/in/muhammad-noman-37b1a7327"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 text-fuchsia-400 flex items-center space-x-2"
          >
            <FaLinkedin /> <span>LinkedIn</span>
          </a>

          <a
            href="https://github.com/nomi6123"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 text-fuchsia-400 flex items-center space-x-2"
          >
            <FaGithub /> <span>GitHub</span>
          </a>

          <a
            href="https://finexo-pearl.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 text-fuchsia-400 flex items-center space-x-2"
          >
            <FaGlobe /> <span>My Work</span>
          </a>
        </div>

        <p className="text-xs text-gray-400">
          &copy; {new Date().getFullYear()} M Noman. All rights reserved.
        </p>
        
        <div className="mt-4">
          <Link href="/Privacy" legacyBehavior>
            <a className="text-[17px] font-semibold text-white hover:text-fuchsia-400">Privacy Policy</a>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

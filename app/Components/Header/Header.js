"use client";
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white shadow-md sticky top-0 z-50 shadow-gray-600 w-full">
      <div className="max-w-7xl mx-auto p-6 flex justify-between items-center">
        {/* Logo */}
        <a href="">
          <h2 className="text-[#D92CF9] font-extrabold text-2xl hover:text-black transition duration-300 transform ease-in-out">
            NOMAN
          </h2>
        </a>

        {/* Hamburger Icon */}
        <div className="lg:hidden cursor-pointer text-fuchsia-800" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>

        {/* Navigation Menu */}
        <nav className={`lg:flex text-gray-500 gap-10 p-1 ${isOpen ? 'block' : 'hidden'} absolute lg:static top-16 left-0 w-full lg:w-auto bg-white lg:bg-transparent shadow-md lg:shadow-none p-5 lg:p-0 z-50`}>
          {['Home', 'Education', 'Experience', 'About', 'Skills', 'Clients', 'Contact'].map((item) => (
            <a key={item} href={`#${item}`} className="block lg:inline-block text-[16px] tracking-tighter uppercase transition duration-300 transform ease-in-out hover:text-[#D92CF9] p-2 lg:p-0">
              {item}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Header;

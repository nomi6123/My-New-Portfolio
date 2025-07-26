"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');

  // Handle scroll effect for header background
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle active section highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['Home', 'Education', 'Experience', 'About', 'Skills', 'Clients', 'Contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle smooth scrolling
  const handleNavClick = (section) => {
    const element = document.getElementById(section);
    if (element) {
      const headerHeight = 80; // Adjust based on your header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    
    // Close mobile menu after clicking
    setIsOpen(false);
  };

  // Close mobile menu when clicking outside
  const handleOverlayClick = () => {
    setIsOpen(false);
  };

  const navigationItems = ['Home', 'Education', 'Experience', 'About', 'Skills', 'Clients', 'Contact'];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-gray-200/50' 
            : 'bg-white shadow-md shadow-gray-600/20'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <button
                onClick={() => handleNavClick('Home')}
                className="group relative overflow-hidden"
              >
                <h1 className="text-[#D92CF9] font-extrabold text-xl sm:text-2xl hover:text-black transition-all duration-300 transform hover:scale-105 relative z-10">
                  NOMAN
                </h1>
                {/* Animated underline */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#D92CF9] to-purple-600 group-hover:w-full transition-all duration-300"></div>
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  className={`relative px-3 py-2 text-sm font-medium tracking-wide uppercase transition-all duration-300 transform hover:scale-105 group ${
                    activeSection === item 
                      ? 'text-[#D92CF9]' 
                      : 'text-gray-600 hover:text-[#D92CF9]'
                  }`}
                >
                  {item}
                  {/* Active indicator */}
                  <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#D92CF9] to-purple-600 transition-all duration-300 ${
                    activeSection === item ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></div>
                </button>
              ))}
            </nav>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative p-2 rounded-md text-[#D92CF9] hover:text-purple-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#D92CF9] transition-all duration-200"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <div className="relative w-6 h-6">
                  <Menu 
                    size={24} 
                    className={`absolute inset-0 transition-all duration-300 transform ${
                      isOpen ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'
                    }`} 
                  />
                  <X 
                    size={24} 
                    className={`absolute inset-0 transition-all duration-300 transform ${
                      isOpen ? 'rotate-0 opacity-100' : '-rotate-180 opacity-0'
                    }`} 
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`lg:hidden absolute top-full left-0 right-0 transition-all duration-300 ease-in-out ${
            isOpen 
              ? 'opacity-100 translate-y-0 visible' 
              : 'opacity-0 -translate-y-4 invisible'
          }`}
        >
          <div className="bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-200/50">
            <div className="px-4 py-6 space-y-1">
              {navigationItems.map((item, index) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  className={`group relative w-full text-left px-4 py-3 rounded-lg text-base font-medium tracking-wide uppercase transition-all duration-300 hover:bg-gradient-to-r hover:from-[#D92CF9]/10 hover:to-purple-600/10 ${
                    activeSection === item 
                      ? 'text-[#D92CF9] bg-gradient-to-r from-[#D92CF9]/10 to-purple-600/10' 
                      : 'text-gray-600 hover:text-[#D92CF9]'
                  }`}
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span>{item}</span>
                    {activeSection === item && (
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#D92CF9] to-purple-600"></div>
                    )}
                  </div>
                  {/* Animated border */}
                  <div className={`absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-[#D92CF9] to-purple-600 transition-all duration-300 ${
                    activeSection === item ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'
                  }`}></div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
          onClick={handleOverlayClick}
        />
      )}

      {/* Spacer to prevent content jump */}
      <div className="h-16 sm:h-20"></div>
    </>
  );
};

export default Header;
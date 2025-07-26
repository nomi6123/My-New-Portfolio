"use client";
import React, { useState, useEffect } from 'react';

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    
    const slides = [
        "As a dedicated frontend developer, I create smooth and responsive web experiences.",
        "Transforming ideas into engaging, user-friendly interfaces.",
        "Passionate about crafting seamless digital experiences."
    ];

    useEffect(() => {
        setIsVisible(true);
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div id='Home' className="relative w-full min-h-screen flex flex-col justify-center items-center bg-[url('/home-1.jpg')] bg-cover bg-no-repeat bg-center overflow-hidden">
            {/* Simple Dark Overlay */}
            <div className='absolute inset-0 bg-black/50'></div>
            
            {/* Minimal Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-10 w-16 h-16 border border-white/10 rotate-45"></div>
                <div className="absolute top-40 right-16 w-12 h-12 bg-white/5 rounded-full"></div>
                <div className="absolute bottom-32 left-20 w-14 h-14 border border-white/10 rounded-full"></div>
                <div className="absolute bottom-20 right-20 w-8 h-8 bg-white/5 rotate-12"></div>
            </div>

            {/* Main Content Container - Centered and Compact */}
            <div className={`relative z-10 w-full max-w-2xl mx-auto px-4 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                
                {/* Hero Title Section */}
                <div className="text-center mb-8">
                    <div className="space-y-2">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                            Hi, I am
                        </h1>
                        
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                            Muhammad Noman
                        </h1>
                    </div>

                    {/* Simple Underline */}
                    <div className="flex justify-center mt-4">
                        <div className="w-16 h-0.5 bg-white/30 rounded-full"></div>
                    </div>
                </div>

                {/* Clean Description Slider */}
                <div className="w-full mx-auto mb-8">
                    <div className="bg-black/20 backdrop-blur-sm rounded-xl border border-white/10 p-6">
                        {/* Text Content */}
                        <div className="relative min-h-[60px] flex items-center justify-center">
                            {slides.map((slide, index) => (
                                <div
                                    key={index}
                                    className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
                                        index === currentSlide ? 'opacity-100' : 'opacity-0'
                                    }`}
                                >
                                    <p className='text-gray-200 text-base sm:text-lg leading-relaxed text-center'>
                                        {slide}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Simple Slide Indicators */}
                        <div className='flex justify-center space-x-2 mt-4'>
                            {slides.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                        index === currentSlide 
                                            ? 'bg-white' 
                                            : 'bg-white/40 hover:bg-white/60'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Simple Download Button */}
                <div className="flex justify-center mb-6">
                    <a 
                        href="/resume.pdf" 
                        download 
                        className="inline-flex items-center space-x-2 bg-white text-black px-6 py-3 rounded-lg font-medium text-base transition-all duration-300 hover:bg-gray-100 hover:scale-105"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span>Download Resume</span>
                    </a>
                </div>

                {/* Clean Professional Tags */}
                <div className="flex flex-wrap justify-center gap-2">
                    {['Frontend Developer', 'React Expert', 'Next Expert', 'UI/UX Designer', 'Web Developer'].map((tag, index) => (
                        <div 
                            key={tag}
                            className="bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1.5 rounded-full text-gray-200 text-xs font-medium hover:bg-white/20 transition-colors duration-300"
                        >
                            {tag}
                        </div>
                    ))}
                </div>
            </div>

            {/* Simple Bottom Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
        </div>
    );
};

export default Home;
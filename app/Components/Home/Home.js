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
        }, 3000);
        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div id='Home' className="relative w-full min-h-screen flex flex-col justify-center items-center bg-[url('/home-1.jpg')] bg-cover bg-no-repeat bg-center overflow-hidden">
            {/* Black Overlay */}
            <div className='absolute inset-0 bg-black/40'></div>
            
            {/* Animated Particles */}
            <div className="absolute inset-0">
                {[...Array(25)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-fuchsia-400/30 rounded-full animate-pulse"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 4}s`,
                            animationDuration: `${2 + Math.random() * 4}s`,
                        }}
                    />
                ))}
            </div>

            {/* Floating Geometric Shapes */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-10 w-20 h-20 border border-fuchsia-500/20 rotate-45 animate-pulse"></div>
                <div className="absolute top-40 right-16 w-12 h-12 bg-fuchsia-500/10 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
                <div className="absolute bottom-32 left-20 w-16 h-16 border-2 border-purple-500/20 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
                <div className="absolute bottom-20 right-10 w-8 h-8 bg-gradient-to-r from-fuchsia-500/20 to-purple-500/20 rotate-12 animate-pulse" style={{animationDelay: '0.5s'}}></div>
            </div>

            {/* Main Content Container - Centered */}
            <div className={`relative z-10 w-full max-w-3xl mx-auto px-4 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                
                {/* Hero Title Section */}
                <div className="text-center mb-8">
                    {/* Main Title with Smaller Text */}
                    <div className="space-y-1">
                        <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
                            <span className="text-white">Hi</span>
                            <span className="text-fuchsia-500 animate-pulse">'</span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-fuchsia-200 to-fuchsia-400"> I am</span>
                        </h1>
                        
                        <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-purple-400 to-pink-400 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`} style={{animationDelay: '0.2s'}}>
                            Muhammad
                        </h1>
                        
                        <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`} style={{animationDelay: '0.4s'}}>
                            Noman
                        </h1>
                    </div>

                    {/* Animated Underline */}
                    <div className="flex justify-center mt-4">
                        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent rounded-full animate-pulse"></div>
                    </div>
                </div>

                {/* Enhanced Description Slider */}
                <div className="w-full max-w-2xl mx-auto mb-8">
                    <div className="relative bg-black/20 backdrop-blur-xl rounded-2xl border border-white/10 p-6 shadow-2xl">
                        {/* Text Content */}
                        <div className="relative min-h-[60px] flex items-center justify-center">
                            {slides.map((slide, index) => (
                                <div
                                    key={index}
                                    className={`absolute inset-0 flex items-center justify-center transition-all duration-500 transform ${
                                        index === currentSlide 
                                            ? 'opacity-100 translate-y-0' 
                                            : 'opacity-0 translate-y-3'
                                    }`}
                                >
                                    <p className='text-gray-300 text-base sm:text-lg leading-relaxed text-center font-light'>
                                        {slide}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Slide Indicators */}
                        <div className='flex justify-center space-x-3 mt-4'>
                            {slides.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-125 ${
                                        index === currentSlide 
                                            ? 'bg-gradient-to-r from-fuchsia-500 to-purple-500 scale-110 shadow-lg shadow-fuchsia-500/50' 
                                            : 'bg-gray-600 hover:bg-gray-500'
                                    }`}
                                />
                            ))}
                        </div>

                        {/* Card Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600/0 via-fuchsia-600/5 to-purple-600/0 rounded-2xl pointer-events-none"></div>
                    </div>
                </div>

                {/* Enhanced Download Button */}
                <div className="flex justify-center">
                    <a 
                        href="/resume.pdf" 
                        download 
                        className="group relative inline-flex items-center space-x-3 bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-500 hover:to-purple-500 text-white px-6 py-3 rounded-2xl font-semibold text-base transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-2xl hover:shadow-fuchsia-500/25 overflow-hidden"
                    >
                        {/* Button Content */}
                        <span className="relative z-10 flex items-center space-x-2">
                            <svg className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <span>Download Resume</span>
                        </span>

                        {/* Animated Background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600/0 via-white/20 to-fuchsia-600/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                        
                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500 to-purple-500 opacity-0 group-hover:opacity-75 blur-xl transition-opacity duration-300 -z-10"></div>
                    </a>
                </div>

                {/* Professional Tags */}
                <div className="flex flex-wrap justify-center gap-2 mt-8">
                    {['Frontend Developer', 'React Expert', 'Next Expert', 'UI/UX Designer', 'Web Developer'].map((tag, index) => (
                        <div 
                            key={tag}
                            className="bg-white/5 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-gray-300 text-xs font-medium hover:border-fuchsia-500/30 hover:text-fuchsia-400 transition-all duration-300 transform hover:scale-105"
                            style={{animationDelay: `${index * 0.1}s`}}
                        >
                            {tag}
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
        </div>
    );
};

export default Home;
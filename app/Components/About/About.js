"use client";
import React from 'react';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const About = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const slides = [
        "Hi, I'm M Noman, a passionate website developer specializing in converting Figma designs to HTML, React, Tailwind CSS, and Webflow.",
        "I have experience building fully responsive and interactive web applications using modern technologies like Next.js.",
        "My goal is to create stunning, user-friendly websites that offer great performance and seamless user experiences."
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div id='About' className='relative w-full min-h-screen flex items-center justify-center p-4 sm:p-8 bg-[url("/about.png")] bg-cover bg-no-repeat bg-center'>
            {/* Dynamic Gradient Overlay */}
            <div className='absolute inset-0 bg-gradient-to-br from-black/85 via-purple-900/30 to-black/90'></div>
            
            {/* Floating Particles Animation */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-purple-400/20 rounded-full animate-pulse"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${2 + Math.random() * 3}s`,
                        }}
                    />
                ))}
            </div>

            <div className='relative z-10 max-w-4xl w-full'>
                {/* Main Container */}
                <div className='relative bg-black/30 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 shadow-2xl'>
                    {/* Header Section */}
                    <div className='text-center pt-12 pb-8 px-8'>
                        <div className="inline-block p-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 mb-6">
                            <div className="bg-black/80 backdrop-blur-sm px-6 py-2 rounded-full">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-semibold text-sm tracking-wide uppercase">
                                    Get To Know Me
                                </span>
                            </div>
                        </div>
                        
                        <h1 className='text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-purple-400 mb-8'>
                            About Me
                        </h1>
                    </div>

                    {/* Profile Section */}
                    <div className='flex flex-col lg:flex-row items-center gap-8 px-8 pb-8'>
                        {/* Profile Image Container */}
                        <div className='relative group'>
                            <div className='absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-75 transition-opacity duration-500'></div>
                            <div className='relative bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-1 rounded-2xl border border-purple-500/30'>
                                <Image
                                    src="/hero.png"
                                    alt="M Noman"
                                    width={200}
                                    height={200}
                                    className='rounded-xl w-48 h-48 object-cover'
                                />
                            </div>
                            {/* Floating Elements */}
                            <div className='absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse'></div>
                            <div className='absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse'></div>
                        </div>

                        {/* Content Section */}
                        <div className='flex-1 text-center lg:text-left'>
                            {/* Text Slider */}
                            <div className='relative min-h-[120px] flex items-center justify-center lg:justify-start mb-4'>
                                <div className='relative w-full'>
                                    {slides.map((slide, index) => (
                                        <div
                                            key={index}
                                            className={`transition-all duration-500 ease-in-out ${
                                                index === currentSlide 
                                                    ? 'opacity-100 block' 
                                                    : 'opacity-0 hidden'
                                            }`}
                                        >
                                            <p className='text-gray-300 text-base sm:text-lg leading-relaxed'>
                                                {slide}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Slide Indicators */}
                            <div className='flex justify-center lg:justify-start space-x-2 mt-6 mb-8'>
                                {slides.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentSlide(index)}
                                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                            index === currentSlide 
                                                ? 'bg-gradient-to-r from-purple-500 to-pink-500 scale-110' 
                                                : 'bg-gray-600 hover:bg-gray-500'
                                        }`}
                                    />
                                ))}
                            </div>

                            {/* CTA Button */}
                            <div className='flex justify-center lg:justify-start'>
                                <a
                                    href="https://mynomanweb.vercel.app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='group relative inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 hover:from-purple-600/40 hover:to-pink-600/40 border border-purple-500/30 hover:border-purple-400/60 px-6 py-3 rounded-full transition-all duration-300 overflow-hidden'
                                >
                                    <span className='text-purple-400 group-hover:text-white transition-colors duration-300 font-semibold'>
                                        Visit My Other Website
                                    </span>
                                    <span className='text-purple-400 group-hover:text-white transition-all duration-300 group-hover:translate-x-1'>
                                        →
                                    </span>
                                    
                                    {/* Button Glow Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/20 to-purple-600/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Decoration */}
                    <div className='flex justify-center pb-8'>
                        <div className='w-24 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full' />
                    </div>

                    {/* Card Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/5 to-pink-600/0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl" />
                </div>

                {/* External Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-pink-500/0 blur-xl opacity-0 hover:opacity-100 transition-opacity duration-500 -z-10 rounded-3xl transform scale-105" />
            </div>
        </div>
    );
}

export default About;
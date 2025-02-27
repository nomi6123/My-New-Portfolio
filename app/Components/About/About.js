"use client";
import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

const About = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div id='About' className='relative w-full min-h-screen flex items-center justify-center p-4 sm:p-8 bg-[url("/about.png")] bg-cover bg-no-repeat'>
            {/* Blackish Overlay */}
            <div className='absolute inset-0 bg-black bg-opacity-70'></div>

            <div className='relative bg-black bg-opacity-90 p-6 sm:p-8 rounded-xl shadow-lg max-w-3xl w-full text-center'>
                <Image 
                    src="/hero.png" 
                    alt="M Noman" 
                    width={170} 
                    height={100} 
                    className='rounded-lg mx-auto mb-4' 
                />
                <h1 className='text-3xl sm:text-4xl font-bold text-white'>About Me</h1>
                <Slider {...settings} className='mt-4'>
                    <div>
                        <p className='text-white text-sm sm:text-base'>
                            Hi, I'm M Noman, a passionate website developer specializing in converting Figma designs to HTML, React, Tailwind CSS, and Webflow.
                        </p>
                    </div>
                    <div>
                        <p className='text-white text-sm sm:text-base'>
                            I have experience building fully responsive and interactive web applications using modern technologies like Next.js.
                        </p>
                    </div>
                    <div>
                        <p className='text-white text-sm sm:text-base'>
                            My goal is to create stunning, user-friendly websites that offer great performance and seamless user experiences.
                        </p>
                    </div>
                </Slider>
                <a 
                    href="https://mynomanweb.vercel.app" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className='mt-6 inline-block px-6 py-3 text-white font-bold text-sm sm:text-base rounded-lg relative overflow-hidden border-2 border-blue-500 hover:text-blue-500 transition duration-300'
                >
                    <span className='absolute inset-0 border-2 border-transparent animate-border-move'></span>
                    Visit My Other Website
                </a>
                <style jsx>{`
                    @keyframes border-move {
                        0% { border-color: transparent transparent blue transparent; }
                        25% { border-color: transparent blue transparent transparent; }
                        50% { border-color: blue transparent transparent transparent; }
                        75% { border-color: transparent transparent transparent blue; }
                        100% { border-color: transparent transparent green transparent; }
                    }
                    .animate-border-move {
                        animation: border-move 2s linear infinite;
                    }
                `}</style>
            </div>
        </div>
    );
}

export default About;

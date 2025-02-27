"use client"
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
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
        <div id='Home' className="w-full min-h-screen flex flex-col justify-center items-center bg-[url('/home-1.jpg')] bg-cover bg-no-repeat">
            {/* Intro Section */}
            <div className="text-center text-white font-bold uppercase flex flex-col gap-3 px-5 sm:px-10 md:px-16 lg:px-20">
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl">Hi
                    <span className="text-fuchsia-500"> '</span> I am</h2>
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl">Muhammad</h2>
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl">Noman</h2>
            </div>

            {/* Description with Slick Slider */}
            <div className="w-[90%] sm:w-[75%]  md:w-[60%] lg:w-[50%] text-center text-white text-lg sm:text-xl md:text-xl leading-tight p-4">
                <Slider {...settings}>
                    <div>
                        <p>As a dedicated frontend developer, I create smooth and responsive web experiences.</p>
                    </div>
                    <div>
                        <p>Transforming ideas into engaging, user-friendly interfaces.</p>
                    </div>
                    <div>
                        <p>Passionate about crafting seamless digital experiences.</p>
                    </div>
                </Slider>
            </div>

            {/* Glowing Button */}
            <a href="/resume.pdf" download className="relative bg-fuchsia-600 hover:bg-fuchsia-800 text-white cursor-pointer px-6 sm:px-8 py-3 sm:py-4 rounded transition-transform duration-300 ease-in-out text-lg sm:text-xl font-semibold mt-4 text-center shadow-lg animate-glow">
                Download Resume
                <span className="absolute inset-0 bg-fuchsia-600 opacity-50 blur-md rounded-lg animate-pulse"></span>
            </a>
            
            <style jsx>{`
                @keyframes glow {
                    0% { box-shadow: 0 0 5px #d946ef, 0 0 10px #d946ef; }
                    50% { box-shadow: 0 0 15px #d946ef, 0 0 25px #d946ef; }
                    100% { box-shadow: 0 0 5px #d946ef, 0 0 10px #d946ef; }
                }
                .animate-glow {
                    animation: glow 1.5s infinite alternate;
                }
            `}</style>
        </div>
    );
};

export default Home;

"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowDown } from "react-icons/fa";

const Section1 = () => {
    function scrollToSection() {
        const section = document.getElementById("section2");
        section.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <div className="relative z-[100]">
            {/* The container div is where the background image will be applied */}
            <div className="relative h-screen bg-cover bg-center z-[10]">
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover z-[-10]"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src="/development/video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="flex flex-col items-center xs:pt-[40%] lg:pt-[10%] z-20 h-full">
                    <h1 className="xs:text-[32px] lg:text-[48px] xl:text-[62px] font-sans font-bold text-white">
                        Development Services Options
                    </h1>
                    <p className="xs:w-[100%] lg:w-[50%] xl:w-[40%] xs:text-sm lg:text-lg xl:text-xl p-2 mt-2 text-center text-white font-sans font-light">
                    We specialize in building powerful, scalable, and efficient digital solutions tailored to your business needs. From custom web applications to robust mobile apps, we ensure your technology stands out.
                    </p>
                    <div className="flex space-x-4 p-4 items-center cursor-pointer">
                        <div className="text-white text-xl" onClick={scrollToSection}>
                            SCROLL DOWN
                        </div>

                        <div className='shadow__btn p-4' onClick={scrollToSection}>
                            <FaArrowDown size={20} color='white' />
                        </div>

                        {/* <div className="text-white">|</div>
            <div className="text-white">ABOUT</div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section1;

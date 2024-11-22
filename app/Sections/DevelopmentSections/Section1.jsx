"use client"
import React from 'react'
import { FaArrowDown } from "react-icons/fa";

const Section1 = () => {
    function scrollToSection() {
        const section = document.getElementById("section2");
        section.scrollIntoView({ behavior: "smooth" });
    }
    return (
        <div className="relative z-[1]">
            {/* The container div is where the background image will be applied */}
            <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/development/developmentBK.png')" }}>

                <div className="flex flex-col items-center xs:pt-[40%] lg:pt-[10%] z-20 h-full">
                    <h1 className="xs:text-[32px] lg:text-[48px] xl:text-[62px] font-sans font-bold text-white">
                        Development Services Options
                    </h1>
                    <p className="xs:w-[100%] lg:w-[60%] xl:w-[55%] xs:text-sm lg:text-lg xl:text-xl p-2 mt-2 text-center text-white font-sans font-extralight">
                        At Miloady Designs, we are passionate about creating exceptional design solutions that bring your vision to life. Our team of talented designers is dedicated to providing you with innovative and customized designs that not only captivate your target audience but also elevate your brand to new heights. Whether you're a startup, a small business, or a large enterprise, we have the expertise and creativity to meet your design needs.
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

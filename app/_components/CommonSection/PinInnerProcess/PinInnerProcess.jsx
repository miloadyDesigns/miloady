"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useHeaderVisibility } from "@/context/HeaderVisibilityProvider ";
import LoremIpsum from "react-lorem-ipsum";
gsap.registerPlugin(ScrollTrigger);

const PinInnerProcess = ({ items }) => {
    const { setIsVisible } = useHeaderVisibility()
    const rightRef = useRef(null); // Reference for the right section
    const galleryRef = useRef(null); // Reference for the gallery section

    useEffect(() => {

        const mm = gsap.matchMedia();

        mm.add("(min-width: 600px)", () => {
            ScrollTrigger.create({
                trigger: galleryRef.current,
                start: "top top",
                end: "bottom 30%",
                pin: rightRef.current,
                onEnter: () => setIsVisible(true),
                onLeave: () => setIsVisible(false),
                onEnterBack: () => setIsVisible(true),
                onLeaveBack: () => setIsVisible(false),
            });



            return () => { };
        });

        // Cleanup GSAP instances on unmount
        return () => {
            mm.revert();
            ScrollTrigger.clearMatchMedia();
        };
    }, []);

    return (
        <>
            <div className="flex justify-center xs:flex-col lg:flex-row lg:mb-[10%] " ref={galleryRef}>
                <div className="xs:w-[100%] lg:w-[50%]" ref={rightRef}>
                    <div className="xs:lg-2 lg:mt-32">
                        <h3 className="text-white font-bold text-center xs:text-[36px] lg:text-[52px]">Our Approach.</h3>
                    </div>
                </div>
                <div className="left-section xs:w-[100%] lg:w-[50%]">
                    <div className=" text-white">
                        {items.map((item, index) => (
                            <div key={index} className="mt-12 mb-12 p-2 rounded-2xl xs:w-[100%] lg:w-[80%] pl-6" style={{ background: 'radial-gradient(circle at 10% 20%, rgb(0, 0, 0) 0%, rgb(64, 64, 64) 90.2%)' }}>
                                <h3 className="lg:text-[36px] xs:text-[36px] text-gray-500">{item.num}</h3>
                                <div className="lg:text-[32px] xs:text-[24px] xs:leading-tight font-bold">
                                    {item.name}
                                </div>
                                <p className="font-normal xs:text-[18px] lg:text-[18px] font-sans mb-4 xs:mt-4 lg:mt-0">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default PinInnerProcess;

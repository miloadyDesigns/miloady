"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useHeaderVisibility } from "@/context/HeaderVisibilityProvider ";
import LoremIpsum from "react-lorem-ipsum";
gsap.registerPlugin(ScrollTrigger);
const items = [
    {
        name: "Planning & Research",
        bio: <LoremIpsum />,
        image: "https://i.pravatar.cc/150?u=a",
        topRated: true,
        num: "01",
        description: "We gather requirements, define goals, and conduct market analysis to ensure the app meets user needs and attunes to your business objectives."
    },
    {
        name: "UI/UX Design",
        bio: <LoremIpsum />,
        image: "https://i.pravatar.cc/150?u=b",
        topRated: false,
        num: "02",
        description: "Our proficient UI/UX developers prepare interfaces and user experiences that are easy to navigate and optimized for iPhone devices."
    },
    {
        name: "App Development",
        bio: <LoremIpsum />,
        image: "https://i.pravatar.cc/150?u=c",
        topRated: false,
        num: "03",
        description: "We then initiate our development process, creating and testing builds simultaneously to ensure exceptional performance, security, and scalability."
    },
    {
        name: "QA & Testing",
        bio: <LoremIpsum />,
        image: "https://i.pravatar.cc/150?u=c",
        topRated: false,
        num: "04",
        description: "Our team thoroughly tests the final build for functionality, usability, performance, and compatibility across iPhone devices to identify and resolve any issues."
    },
    {
        name: "App Refinement",
        bio: <LoremIpsum />,
        image: "https://i.pravatar.cc/150?u=b",
        topRated: false,
        num: "05",
        description: "We refine the final build based on feedback from testing, fixing features, UI elements, and the overall user experience to enhance app usability and quality."
    },
    {
        name: "Final Deployment",
        bio: <LoremIpsum />,
        image: "https://i.pravatar.cc/150?u=b",
        topRated: false,
        num: "06",
        description: "Next, our focus is to ensure a secure launch of your iPhone app, adhering to Apple’s strict guidelines and ensuring all necessary documentation and assets are in place."
    },
    {
        name: "Post-launch Support",
        bio: <LoremIpsum />,
        image: "https://i.pravatar.cc/150?u=b",
        topRated: false,
        num: "07",
        description: "After the final deployment, we provide ongoing support, monitor app performance, collect user feedback, and release updates if required."
    },
]
const PinInnerProcess = () => {
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
            <div className="flex justify-center lg:mb-[10%]" ref={galleryRef}>
                <div className=" w-[50%]" ref={rightRef}>
                    <div className="mt-32">
                        <h1 className="text-white font-bold text-center text-[52px]">Our Approach.</h1>
                    </div>
                </div>
                <div className="left-section w-[50%]">
                    <div className=" text-white">
                        {items.map((item, index) => (
                            <div key={index} className="mt-12 mb-12 p-2 rounded-2xl w-[80%] pl-6" style={{ background: 'radial-gradient(circle at 10% 20%, rgb(0, 0, 0) 0%, rgb(64, 64, 64) 90.2%)' }}>
                                <h1 className="lg:text-[36px] xs:text-[30px] text-gray-500">{item.num}</h1>
                                <div className="lg:text-[32px] xs:text-[18px] xs:hidden lg:block">
                                    <span className="lg:text-[34px] xs:text-[32px] m-0">{item.name}</span>
                                </div>
                                <p className="font-normal xs:text-[14px] lg:text-[18px] font-sans mb-4">
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

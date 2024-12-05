"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useHeaderVisibility } from "@/context/HeaderVisibilityProvider ";
import LoremIpsum from "react-lorem-ipsum";
gsap.registerPlugin(ScrollTrigger);
const items = [
    {
        name: "Business Strategy",
        bio: <LoremIpsum />,
        image: "https://i.pravatar.cc/150?u=a",
        topRated: true,
        num: "01/05",
        description: "We dive deep into your brand’s identity, carefully analyzing your goals, target audience, and market trends. With this insight, we craft a strategic plan that aligns perfectly with your vision, ensuring a roadmap for lasting success."
    },
    {
        name: "Brand Deployment",
        bio: <LoremIpsum />,
        image: "https://i.pravatar.cc/150?u=b",
        topRated: false,
        num: "02/05",
        description: "From concept to execution, we transform your vision into reality with cutting-edge design and seamless development. We launch your product or service with precision, ensuring it stands out and shines in a competitive market."
    },
    {
        name: "Market & Grow",
        bio: <LoremIpsum />,
        image: "https://i.pravatar.cc/150?u=c",
        topRated: false,
        num: "03/05",
        description: "With your brand in hand, we design and implement powerful marketing campaigns that capture attention and drive engagement. We ensure your brand grows steadily, unlocking its full potential and positioning it for continued success."
    },
    {
        name: "Maintanence & Support",
        bio: <LoremIpsum />,
        image: "https://i.pravatar.cc/150?u=c",
        topRated: false,
        num: "04/05",
        description: "Our Maintenance and Support services ensure your systems remain up-to-date, secure, and running smoothly long after the initial project is complete. We provide proactive monitoring, troubleshooting, and timely updates to prevent issues before they arise. Whether it's routine maintenance, performance optimization, or addressing urgent concerns, our dedicated support team is always ready to assist, ensuring your operations stay efficient and uninterrupted."
    },
    {
        name: "Brand Deployment",
        bio: <LoremIpsum />,
        image: "https://i.pravatar.cc/150?u=b",
        topRated: false,
        num: "05/05",
        description: "From concept to execution, we transform your vision into reality with cutting-edge design and seamless development. We launch your product or service with precision, ensuring it stands out and shines in a competitive market."
    },
]
const PinSection = () => {
    const { setIsVisible } = useHeaderVisibility()
    const rightRef = useRef(null); // Reference for the right section
    const galleryRef = useRef(null); // Reference for the gallery section

    useEffect(() => {
        const details = gsap.utils.toArray(".desktopContentSection:not(:first-child)");
        const photos = gsap.utils.toArray(".desktopPhoto:not(:first-child)");
        const allPhotos = gsap.utils.toArray(".desktopPhoto");
        console.log(allPhotos);

        // Set the initial state for photos
        gsap.set(photos, { yPercent: 101 });

        // Match media for responsive behavior
        const mm = gsap.matchMedia();

        mm.add("(min-width: 600px)", () => {
            ScrollTrigger.create({
                trigger: galleryRef.current,
                start: "top top",
                end: "bottom bottom",
                pin: rightRef.current,
                onEnter: () => setIsVisible(true),
                onLeave: () => setIsVisible(false),
                onEnterBack: () => setIsVisible(true),
                onLeaveBack: () => setIsVisible(false),
            });

            details.forEach((detail, index) => {
                const headline = detail.querySelector("h1");
                const animation = gsap.timeline()
                    .to(photos[index], { yPercent: 0 })
                    .set(allPhotos[index], { autoAlpha: 0 });

                ScrollTrigger.create({
                    trigger: headline,
                    start: "top 80%",
                    end: "top 50%",
                    animation: animation,
                    scrub: true,
                });
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
            {/* <div className="spacer"></div> */}
            <div className="process_head xl:w-[50%] xs:w-[90%] lg:w-[80%] text-white ml-[7%]">
                <p className="text-[#999696] font-text pl-2 xs:text-[14px] lg:text-lg mt-2">Our Seamless Process</p>
                <h1 className="text-while font-pp lg:text-[60px] xl:text-[60px] xs:text-[38px] leading-none">From Vision to Success</h1>
                {/* <p className="text-white p-1 font-text xs:text-[14px] lg:text-[18px]">Transforming your ideas into reality with strategic planning, innovative solutions, and relentless execution. We take your concept and turn it into a tangible success, every step driven by creativity, precision, and a deep understanding of your goals.</p> */}
            </div>
            <div className="gallery" ref={galleryRef}>
                <div className="left">
                    <div className="desktopContent text-white">
                        {items.map((item, index) => (
                            <div key={index} className="desktopContentSection">
                                <h1 className='lg:text-[36px] xs:text-[30px] text-gray-500 font-pp'>{item.num}</h1>
                                <div className="lg:text-[32px] xs:text-[18px]  xs:hidden lg:block">
                                    <span className="xl:text-[54px] lg:text-[42px] xs:text-[32px] m-0">{item.name}</span>
                                </div>
                                <p className="font-normal xs:text-[14px] lg:text-[18px] xl:text-[23px] font-sans">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="right" ref={rightRef}>
                    <div className="desktopPhotos">
                        <img src="/process/process1.webp" alt="" className="desktopPhoto" />
                        <img src="/process/process2.webp" alt="" className="desktopPhoto" />
                        <img src="/process/process3.webp" alt="" className="desktopPhoto" />
                        <img src="/process/process4.webp" alt="" className="desktopPhoto" />
                        <img src="/process/process5.webp" alt="" className="desktopPhoto" />
                    </div>
                </div>

            </div>
            <div className="lg:hidden xs:flex gap-12 flex-nowrap mt-4 mb-[10%] overflow-x-auto w-screen custom-scrollbar">
                <div style={{ minWidth: "100vw" }}>
                    <div className=" p-3 flex flex-col justify-center items-center ">
                        <img src="/process/process1.webp" alt="" className="mobilePhoto" />

                        <div className="pl-2 text-white w-full xs:text-[32px] md:text-[38px] mt-4">
                            Business Strategy
                        </div>
                        <p className="pl-2 text-white font-sans xs:text-[14px] md:text-[18px] text-left">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, consectetur odit. Tempora totam eligendi ad sapiente fugit et officiis repellat ipsa nihil amet? Id quas odit itaque corrupti earum saepe alias illum labore ratione, odio non minus? Qui, sapiente architecto.
                        </p>
                    </div>
                </div>
                <div style={{ minWidth: "100vw" }}>
                    <div className=" p-3 flex flex-col justify-center items-center ">
                        <img src="/process/process2.webp" alt="" className="mobilePhoto" />

                        <div className="pl-2 text-white w-full xs:text-[32px] md:text-[38px] mt-4">
                            Business Strategy
                        </div>
                        <p className="pl-2 text-white font-sans xs:text-[14px] md:text-[18px] text-left">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, consectetur odit. Tempora totam eligendi ad sapiente fugit et officiis repellat ipsa nihil amet? Id quas odit itaque corrupti earum saepe alias illum labore ratione, odio non minus? Qui, sapiente architecto.
                        </p>
                    </div>
                </div>
                <div style={{ minWidth: "100vw" }}>
                    <div className=" p-3 flex flex-col justify-center items-center ">
                        <img src="/process/process3.webp" alt="" className="mobilePhoto" />

                        <div className="pl-2 text-white w-full xs:text-[32px] md:text-[38px] mt-4">
                            Business Strategy
                        </div>
                        <p className="pl-2 text-white font-sans xs:text-[14px] md:text-[18px] text-left">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, consectetur odit. Tempora totam eligendi ad sapiente fugit et officiis repellat ipsa nihil amet? Id quas odit itaque corrupti earum saepe alias illum labore ratione, odio non minus? Qui, sapiente architecto.
                        </p>
                    </div>
                </div>
                <div style={{ minWidth: "100vw" }}>
                    <div className=" p-3 flex flex-col justify-center items-center ">
                        <img src="/process/process4.webp" alt="" className="mobilePhoto" />

                        <div className="pl-2 text-white w-full xs:text-[32px] md:text-[38px] mt-4">
                            Business Strategy
                        </div>
                        <p className="pl-2 text-white font-sans xs:text-[14px] md:text-[18px] text-left">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, consectetur odit. Tempora totam eligendi ad sapiente fugit et officiis repellat ipsa nihil amet? Id quas odit itaque corrupti earum saepe alias illum labore ratione, odio non minus? Qui, sapiente architecto.
                        </p>
                    </div>
                </div>
                <div style={{ minWidth: "100vw" }}>
                    <div className=" p-3 flex flex-col justify-center items-center ">
                        <img src="/process/process5.webp" alt="" className="mobilePhoto" />

                        <div className="pl-2 text-white w-full xs:text-[32px] md:text-[38px] mt-4">
                            Business Strategy
                        </div>
                        <p className="pl-2 text-white font-sans xs:text-[14px] md:text-[18px] text-left">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, consectetur odit. Tempora totam eligendi ad sapiente fugit et officiis repellat ipsa nihil amet? Id quas odit itaque corrupti earum saepe alias illum labore ratione, odio non minus? Qui, sapiente architecto.
                        </p>
                    </div>
                </div>
            </div>

        </>
    );
};

export default PinSection;

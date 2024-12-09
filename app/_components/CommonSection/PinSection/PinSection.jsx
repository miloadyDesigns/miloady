"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useHeaderVisibility } from "@/context/HeaderVisibilityProvider ";
import LoremIpsum from "react-lorem-ipsum";
gsap.registerPlugin(ScrollTrigger);
const items = [
    {
        name: "Ideate",
        bio: <LoremIpsum />,
        image: "https://i.pravatar.cc/150?u=a",
        topRated: true,
        num: "01/05",
        description: "Create detailed system architectures, prototypes, and workflows to define the projects structure. Collaborate with designers and developers to ensure the systems scalability and usability. Develop database schemas and technical specifications as blueprints for development. Validate the design with stakeholders to ensure alignment with goals. A strong design phase reduces future rework."
    },
    {
        name: "Project Planning",
        bio: <LoremIpsum />,
        image: "https://i.pravatar.cc/150?u=b",
        topRated: false,
        num: "02/05",
        description: "Develop a detailed project plan, including timelines, milestones, and resource allocation. Assign tasks to team members based on their expertise and availability. Create a communication strategy to ensure transparency among stakeholders. Identify potential risks and create mitigation strategies. This step lays the foundation for efficient execution."
    },
    {
        name: "Development",
        bio: <LoremIpsum />,
        image: "https://i.pravatar.cc/150?u=c",
        topRated: false,
        num: "03/05",
        description: "Translate designs into functional code while following best practices and coding standards. Integrate various system components to build a cohesive product. Conduct iterative testing during development to identify and resolve issues early. Maintain clear documentation for code and processes. Collaboration and regular reviews ensure quality and progress."
    },
    {
        name: "Quality Testing",
        bio: <LoremIpsum />,
        image: "https://i.pravatar.cc/150?u=c",
        topRated: false,
        num: "04/05",
        description: "Perform rigorous testing, including unit, integration, system, and user acceptance tests. Validate functionality, performance, and security to meet project requirements. Use automated and manual testing tools to ensure comprehensive coverage. Document identified bugs and resolve them systematically. This step ensures the product is reliable and user-ready."
    },
    {
        name: "Deployment Support",
        bio: <LoremIpsum />,
        image: "https://i.pravatar.cc/150?u=b",
        topRated: false,
        num: "05/05",
        description: "Launch the system in the production environment, ensuring smooth implementation. Monitor system performance to address potential issues promptly. Provide post-launch support, including troubleshooting and user training. Implement updates and enhancements based on feedback. Ongoing support ensures the system’s success and longevity."
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
                const headline = detail.querySelector("h3");
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
                <h3 className="text-while font-pp lg:text-[60px] xl:text-[60px] xs:text-[38px] leading-none">From Vision to Success</h3>
                {/* <p className="text-white p-1 font-text xs:text-[14px] lg:text-[18px]">Transforming your ideas into reality with strategic planning, innovative solutions, and relentless execution. We take your concept and turn it into a tangible success, every step driven by creativity, precision, and a deep understanding of your goals.</p> */}
            </div>
            <div className="gallery" ref={galleryRef}>
                <div className="left">
                    <div className="desktopContent text-white">
                        {items.map((item, index) => (
                            <div key={index} className="desktopContentSection">
                                <h3 className='lg:text-[36px] xs:text-[30px] text-gray-500 font-pp'>{item.num}</h3>
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
                            Ideate
                        </div>
                        <p className="pl-2 text-white font-sans xs:text-[14px] md:text-[18px] text-left">
                            Create detailed system architectures, prototypes, and workflows to define the projects structure. Collaborate with designers and developers to ensure the systems scalability and usability. Develop database schemas and technical specifications as blueprints for development. Validate the design with stakeholders to ensure alignment with goals. A strong design phase reduces future rework.
                        </p>
                    </div>
                </div>
                <div style={{ minWidth: "100vw" }}>
                    <div className=" p-3 flex flex-col justify-center items-center ">
                        <img src="/process/process2.webp" alt="" className="mobilePhoto" />

                        <div className="pl-2 text-white w-full xs:text-[32px] md:text-[38px] mt-4">
                            Project Planning
                        </div>
                        <p className="pl-2 text-white font-sans xs:text-[14px] md:text-[18px] text-left">
                            Develop a detailed project plan, including timelines, milestones, and resource allocation. Assign tasks to team members based on their expertise and availability. Create a communication strategy to ensure transparency among stakeholders. Identify potential risks and create mitigation strategies. This step lays the foundation for efficient execution.
                        </p>
                    </div>
                </div>
                <div style={{ minWidth: "100vw" }}>
                    <div className=" p-3 flex flex-col justify-center items-center ">
                        <img src="/process/process3.webp" alt="" className="mobilePhoto" />

                        <div className="pl-2 text-white w-full xs:text-[32px] md:text-[38px] mt-4">
                            Development
                        </div>
                        <p className="pl-2 text-white font-sans xs:text-[14px] md:text-[18px] text-left">
                            Translate designs into functional code while following best practices and coding standards. Integrate various system components to build a cohesive product. Conduct iterative testing during development to identify and resolve issues early. Maintain clear documentation for code and processes. Collaboration and regular reviews ensure quality and progress.
                        </p>
                    </div>
                </div>
                <div style={{ minWidth: "100vw" }}>
                    <div className=" p-3 flex flex-col justify-center items-center ">
                        <img src="/process/process4.webp" alt="" className="mobilePhoto" />

                        <div className="pl-2 text-white w-full xs:text-[32px] md:text-[38px] mt-4">
                            Quality Testing
                        </div>
                        <p className="pl-2 text-white font-sans xs:text-[14px] md:text-[18px] text-left">
                            Perform rigorous testing, including unit, integration, system, and user acceptance tests. Validate functionality, performance, and security to meet project requirements. Use automated and manual testing tools to ensure comprehensive coverage. Document identified bugs and resolve them systematically. This step ensures the product is reliable and user-ready.
                        </p>
                    </div>
                </div>
                <div style={{ minWidth: "100vw" }}>
                    <div className=" p-3 flex flex-col justify-center items-center ">
                        <img src="/process/process5.webp" alt="" className="mobilePhoto" />

                        <div className="pl-2 text-white w-full xs:text-[32px] md:text-[38px] mt-4">
                            Deployment Support
                        </div>
                        <p className="pl-2 text-white font-sans xs:text-[14px] md:text-[18px] text-left">
                            Launch the system in the production environment, ensuring smooth implementation. Monitor system performance to address potential issues promptly. Provide post-launch support, including troubleshooting and user training. Implement updates and enhancements based on feedback. Ongoing support ensures the system’s success and longevity.
                        </p>
                    </div>
                </div>
            </div>

        </>
    );
};

export default PinSection;

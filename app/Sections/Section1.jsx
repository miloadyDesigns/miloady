import React from 'react'
import EnvoirnmentComp from '../_components/Envoirnment'
import { Canvas } from '@react-three/fiber'
import SideButton from '../_components/SideButton.jsx'
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from 'next/image';
const Section1 = () => {
    useGSAP(() => {
        // GSAP animations
        const tl = gsap.timeline();

        tl.from(".headref", {
            x: -600,
            opacity: 0,
            duration: 1,
            ease: "power1.inOut",
        });

        tl.from(".para-2", {
            x: -400,
            opacity: 0,
            duration: 1,
            ease: "power1.inOut",
        });
        tl.from(".head_btn", {
            x: -400,
            opacity: 0,
            duration: 1,
            ease: "power1.inOut",
        });
    });
    return (
        <div className="relative  section_one bg-black section">
            <section className="lg:w-[80%]  absolute top-0 flex flex-col h-full xs:w-[100%] lg:left-[8%] xs:left-0 z-10 ">
                <div className="h-full flex flex-col justify-center ">
                    <h1 className="headref text-white xs:text-[30px] md:text-[42px] lg:text-[52px] 1366:text-[60px] 2xl:text-[86px] xs:ml-2 font-extrabold xl:text-[70px] font-pp">
                        UNLEASHING
                        <span className="font-back xl:text-[94px] xs:text-[34px] xls:text-[40px] lg:text-[74px] text-[#70000E] 1366:text-[104px] 2xl:text-[124px] ml-3">Creativity</span>
                        <br />
                        <span className="font-pp">
                            IN EVERY DETAIL
                            <span className="w-6 h-6 rounded-full bg-[#70000E] inline-block ml-2"></span>
                        </span>
                    </h1>
                    <div className="xs:[300px] lg:w-[600px] text-white para-2 p-2 font-text xs:text-[14px] lg:text-xl">
                        <p>We’re your one-stop marketing partner, combining creativity and strategy across every service, from design and digital to social and beyond. Together, we’ll make your brand unforgettable. </p>
                        <SideButton title={"G&nbsp;&nbsp;E&nbsp;&nbsp;T&nbsp;&nbsp;&nbsp;I&nbsp;&nbsp;N&nbsp;&nbsp;&nbsp;T&nbsp;&nbsp;O&nbsp;&nbsp;U&nbsp;&nbsp;C&nbsp;&nbsp;H"} />
                    </div>
                </div>
            </section>
            {/* Overlay */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.65)",
                    zIndex: 0,
                }}
            >
                <Image
                    src="/envoirnment/Galaxy-BK.png"
                    alt="Galaxy Background"
                    layout="fill" // Makes the image cover the entire container
                    objectFit="cover" // Ensures the image maintains its aspect ratio while covering the area
                />
            </div>

            <div className="overlay" style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.65)",
                zIndex: 4,
            }}></div>
            {/* Canvas */}
            <Canvas gl={{ alpha: true }} style={{
                width: "100vw",
                height: "100vh",
                zIndex: 1,
            }}>
                <EnvoirnmentComp />

            </Canvas>
        </div>
    )
}

export default Section1

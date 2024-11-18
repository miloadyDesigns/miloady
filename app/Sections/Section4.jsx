import React from 'react'
import ProcessSection from '../_components/Process'
import { Canvas } from '@react-three/fiber'
import StarsComp from '../_components/Stars'

const Section4 = () => {
    return (
        <div className="relative  section_process bg-black section">
            <Canvas gl={{ alpha: true }} style={{
                width: "100vw",
                height: "100vh",
                zIndex: 0,
            }}>

                <StarsComp />

            </Canvas>
            <div className="overlay" style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.45)",
                zIndex: 1,
            }}></div>
            <section className="absolute w-full lg:top-0 xs:top-[4%] flex flex-col left-0 h-full z-10">
                <div className="flex lg:flex-row xs:flex-col lg:justify-around h-full items-center">
                    <div className="process_head xl:w-[30%] xs:w-[90%] lg:w-[40%] text-white">
                        <p className="text-[#999696] font-text pl-2 xs:text-[14px] lg:text-lg mt-2">Our Seamless Process</p>
                        <h1 className="text-while font-pp lg:text-[60px] xl:text-[60px] xs:text-[38px] leading-none">From Vision to Success</h1>
                        <p className="text-white p-1 font-text xs:text-[14px] lg:text-[18px]">Transforming your ideas into reality with strategic planning, innovative solutions, and relentless execution. We take your concept and turn it into a tangible success, every step driven by creativity, precision, and a deep understanding of your goals.</p>
                    </div>
                    <div className="lg:w-[50%] xs:w-[100%] process_main xs:mt-8 lg:mt-0">
                        <ProcessSection />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Section4

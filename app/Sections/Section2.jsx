import React from 'react'
import Services from '../_components/services'
import { Canvas } from '@react-three/fiber'
import StarsComp from '../_components/Stars'

const Section2 = () => {
    return (
        <div className="relative  section_two bg-black section ">
            <div className="overlay" style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.45)",
                zIndex: 1,
            }}></div>
            <Canvas gl={{ alpha: true }} style={{
                width: "100vw",
                height: "100vh",
                zIndex: 0,
            }}>

                <StarsComp />

            </Canvas>
            <section className="absolute w-full xs:top-[15%] xl:top-[12%] 2xl:top-[15%] left-0 flex flex-col lg:h-[85%] xs:h-[90%] z-10">
                <div  className="upperSection text-white  xs:ml-[8%] lg:ml-[7%] 2xl:ml-[8%] xl:ml-[7%]  lg:w-[50%] 2xl:w-[30%] xs:w-[90%]">
                    <p className="text-[#999696] font-text pl-2 xs:text-[14px] xl:text-lg mt-2">Solutions Designed to Elevate Your Vision</p>
                    <h1 className="text-while font-pp xl:text-[66px] lg:text-[60px] xs:text-[38px] -mt-2">Our Services</h1>
                </div>
                <div className="h-full service-swiper xs:mt-12 lg:mt-0">
                    <Services />
                </div>
            </section>
        </div>
    )
}

export default Section2

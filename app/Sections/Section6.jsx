import React from 'react'
import ContactForm from '../_components/ContactForm/ContactForm'
import StarsComp from '../_components/Stars'
import { Canvas } from '@react-three/fiber'
import Footer from '../_components/Footer'

const Section6 = () => {
    return (
        <div className="relative section_five bg-black section">
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
            <div className="flex flex-col w-full h-screen absolute left-0 z-10 top-0">
                <div className="contact-head h-[90%] w-full flex xs:flex-col lg:flex-row lg:items-center  lg:space-x-12 ">
                    <div className="testimonialHead text-white  xs:mt-[5%] lg:mt-0 xs:ml-[5%] lg:ml-[8%]   lg:w-[25%] xs:w-[90%]">
                        <p className="text-[#999696] font-text pl-2 xs:text-[14px] lg:text-lg  mt-2">Empowering the world through our technlogies</p>
                        <h1 className="text-while font-pp lg:text-[66px] xs:text-[38px] -mt-2">Contact Us</h1>
                    </div>
                    <div className="xs:w-[100%] lg:w-[60%]   form-section xs:mr-0 lg:mr-4">
                        <ContactForm />
                    </div>
                </div>

            </div>
            <div className="relative section_six">
                <div className='absolute top-0 w-full bg-[#181818]'>
                    <div className='z-[10] '>
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section6

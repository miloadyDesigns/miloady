import React from 'react'
import LightStars from '../_components/LightStars/Stars'
import Section1 from '../Sections/ContactSections/Section1'
import "./style.css"
import Section2 from '../Sections/ContactSections/Section2'
import Marquee from 'react-fast-marquee'
import Footer from '../_components/Footer'
import Section3 from '../Sections/ContactSections/Section3'
const page = () => {
    return (
        <section className='relative w-screen bg-black'>
            <LightStars />
            <div className='relative z-[1]'>
                <Section1 />
                <section className="w-[90vw] h-[20vh] absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[100] ">
                    <img src="/contactHelper.jpg" alt="" className='w-full h-full rounded-xl object-cover' />
                    <div className="w-full h-full absolute top-0 bg-black bg-opacity-35 rounded-xl flex">
                        <div className='w-[100%]  flex items-center justify-center '>
                            <h1 className="xs:text-[18px] p-2 lg:text-[42px] text-white font-sans ">Let us help your busniess to liftoff!</h1>
                        </div>

                    </div>
                </section>
                <Section2 />
                <Section3 />
                <div className='bg-[#0A0A0A]'>
                    <Footer />
                </div>
            </div>
        </section>
    )
}

export default page
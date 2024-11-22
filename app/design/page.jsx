import React from 'react'
import LightStars from '../_components/LightStars/Stars'
import Section1 from '../Sections/DesignSections/Section1'
import ScrollContext from '@/context/ScrollContext'
import Section2 from '../Sections/DesignSections/Section2'
import Section3 from '../Sections/DesignSections/Section3'
import "./style.css"
import Section4 from '../Sections/DesignSections/Section4'
import Footer from '../_components/Footer'
const page = () => {
    return (
        <section className='relative w-screen bg-black'>
            <LightStars />
            <div className='relative z-[1]'>
                <ScrollContext>
                    <Section1 />
                    <Section2 />
                    <Section3 />
                    <Section4 />
                    <div className='bg-[#0A0A0A]'>
                        <Footer />
                    </div>
                </ScrollContext>

            </div>

        </section>
    )
}

export default page
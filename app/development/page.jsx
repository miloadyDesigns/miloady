import React from 'react'
import LightStars from '../_components/LightStars/Stars'
import Section1 from '../Sections/DevelopmentSections/Section1'
import Section2 from '../Sections/DevelopmentSections/Section2'
import "./style.css"
import Section3 from '../Sections/DevelopmentSections/Section3'
import Section4 from '../Sections/DevelopmentSections/Section4'
import Footer from '../_components/Footer'
const page = () => {
    return (
        <section className='relative w-screen bg-black'>
            <LightStars />
            <div className='relative z-[1]'>
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
                <div className='bg-[#0A0A0A]'>
                    <Footer />
                </div>
            </div>

        </section>
    )
}

export default page
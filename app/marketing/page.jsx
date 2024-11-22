import ScrollContext from "@/context/ScrollContext"
import LightStars from "../_components/LightStars/Stars"
import Section1 from "../Sections/MarketingSections/Section1"
import Section2 from "../Sections/MarketingSections/Section2"
import Section3 from "../Sections/MarketingSections/Section3"
import "./style.css"
import React from 'react'
import Section4 from "../Sections/MarketingSections/Section4"
import Footer from "../_components/Footer"
import CommonSections from "../Sections/CommonSections/CommonSections"
export const metadata = {
    title: "Development"
}
const page = () => {
    return (
        <section className="relative bg-black w-screen">
            <LightStars />
            <div className="relative z-[1]">
                <ScrollContext>
                    <Section1 />
                    <Section2 />
                    <Section3 />
                    <Section4 />
                    <CommonSections/>
                    <div className='bg-[#0A0A0A]'>
                        <Footer />
                    </div>
                </ScrollContext>
            </div>
        </section>
    )
}

export default page
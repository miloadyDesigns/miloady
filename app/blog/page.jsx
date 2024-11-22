'use client'
import React, { useState } from 'react'
import LightStars from '../_components/LightStars/Stars'
import ScrollContext from '@/context/ScrollContext'
import Section1 from '../Sections/BlogSections/Section1'
import Section2 from '../Sections/BlogSections/Section2'
import "./style.css"
import { HStack } from "@chakra-ui/react"
import { SegmentedControl } from "@/components/ui/segmented-control"
import { LuGrid, LuList, LuTable } from "react-icons/lu"
import Footer from '../_components/Footer'
import CommonSections from '../Sections/CommonSections/CommonSections'

const items = [
    { value: "mobile_apps_dev", label: "Apps" },
    { value: "web_apps_dev", label: "Website" },
    { value: "graphics", label: "Graphics" },
    { value: "seo", label: "SEO" },
    { value: "ppc", label: "PPC" },
    { value: "deployment", label: "Deployemnt" },
    { value: "maintainance", label: "Maintainance" },
];



const page = () => {
    const [selectedValue, setSelectedValue] = useState("mobile_apps_dev");

    return (
        <div className='relative bg-black w-screen overflow-x-hidden'>
            {/* Add pointer-events:none to LightStars */}
            <div className="pointer-events-none">
                <LightStars />
            </div>
            <div className='relative z-[1]'>
                <ScrollContext>
                    <Section1 />
                    <section className="xs:w-[100vw] lg:w-[90vw] absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[100]">
                        <div className="w-full rounded-xl flex justify-center">
                            <div className='xs:w-[90%] lg:w-[40%] flex items-center justify-center p-6 rounded-lg z-[200]'>
                                <div className="segmented-control   ">
                                    {items.map((item) => (
                                        <button
                                            key={item.value}
                                            className={`segmented-control-btn ${selectedValue === item.value ? "active" : ""}`}
                                            onClick={() => setSelectedValue(item.value)}
                                        >
                                            <HStack>
                                                <span className="font-bold">{item.label}</span>
                                            </HStack>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                    <Section2 />
                    <CommonSections />
                    <div className='bg-[#0A0A0A]'>
                        <Footer />
                    </div>
                </ScrollContext>
            </div>
        </div>
    )
}

export default page

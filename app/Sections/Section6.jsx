'use client'
import React from 'react'
import ContactForm from '../_components/ContactForm/ContactForm'
import Footer from '../_components/Footer'

const Section6 = () => {
    return (
        <div className="relative section_five  w-screen  xs:mb-[10%] lg:mb-[10%]">
            <div className="flex flex-col w-full h-full  z-10 ">
                <div className="contact-head h-[90%] w-full flex xs:flex-col lg:flex-row lg:items-center  lg:space-x-12 ">
                    <div className="testimonialHead text-white  xs:mt-[5%] lg:mt-0 xs:ml-[5%] lg:ml-[8%]   lg:w-[25%] xs:w-[90%]">
                        <p className="text-[#999696] font-text pl-2 xs:text-[14px] lg:text-lg  mt-2">Empowering the world through our technlogies</p>
                        <h3 className="text-while font-pp lg:text-[66px] xs:text-[38px] -mt-2">Contact Us</h3>
                    </div>
                    <div className="xs:w-[100%] lg:w-[60%]   form-section xs:mt-[6%] xl:mt-0 xs:mr-0 lg:mr-4 ">
                        <ContactForm />
                    </div>
                </div>

            </div>
            {/* <div className="relative section_six">
                <div className='absolute top-0 w-full bg-[#0A0A0A]'>
                    <div className='z-[10] '>
                        <Footer />
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Section6

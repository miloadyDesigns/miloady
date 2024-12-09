import React from 'react'
import Services from '../_components/services'

const Section2 = () => {
    return (
        <div className="relative  section_two  xs:mt-[20%] lg:mt-[10%]  xs:mb-[10%] lg:mb-[10%] ">

            <section className="w-full flex flex-col lg:h-[85%] xs:h-[90%] z-10">
                <div className="upperSection text-white  lg:ml-[7%]   lg:w-[50%] 2xl:w-[30%] xs:w-[100%] mt-6">
                    <p className="text-[#999696] font-text pl-2 xs:text-[14px] md:text-[18px] xl:text-lg mt-2 xs:text-center lg:text-left">Solutions Designed to Elevate Your Vision</p>
                    <h3 className="text-while font-pp xl:text-[66px] lg:text-[55px] md:text-[48px] xs:text-[38px] -mt-2 xs:text-center lg:text-left">Our Services</h3>
                </div>
                <div className="h-full service-swiper xs:mt-12 lg:mt-0">
                    <Services />
                </div>
            </section>

        </div>
    )
}

export default Section2

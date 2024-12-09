import React from 'react'
import ProcessSection from '../_components/Process'
const Section4 = () => {
    return (
        <div className="relative  section_process xs:mt-[30%] lg:mt-0 xs:mb-[10%] lg:mb-[10%]">

            <section className=" w-full  flex flex-col left-0 h-full z-10">
                <div className="flex lg:flex-row xs:flex-col lg:justify-around h-full items-center">
                    <div className="process_head xl:w-[30%] xs:w-[90%] lg:w-[40%] text-white">
                        <p className="text-[#999696] font-text pl-2 xs:text-[14px] lg:text-lg mt-2">Our Seamless Process</p>
                        <h3 className="text-while font-pp lg:text-[60px] xl:text-[60px] xs:text-[38px] leading-none">From Vision to Success</h3>
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

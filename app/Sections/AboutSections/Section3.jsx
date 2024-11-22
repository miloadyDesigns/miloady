import Image from 'next/image'
import React from 'react'
const Section3 = () => {
    return (
        <div className="relative z-[10]">

            <div className="w-full pt-[5%]">
                <div className="xs:w-[90%] lg:w-[80%] m-auto h-full overflow-hidden">
                    <div className="flex xs:flex-col lg:flex-row justify-around items-center">
                        <div className='xs:w-[100%] lg:w-[50%] p-2'>
                            <h2 className='font-pp text-white mb-4 xs:text-sm lg:text-sm xl:text-xl'>E M P O W E R I N G &nbsp; B R A N D S</h2>
                            <h1 className='text-white xs:text-[32px] lg:text-[42px] xl:text-[52px] leading-none font-roboto'>
                                Innovating with Purpose, Delivering Results
                            </h1>
                            <p className='pt-4 xs:text-sm lg:text-[18px] xl:text-lg text-white'>
                                We don’t just design for the present; we craft forward-thinking solutions that propel your brand into a successful future. At Miloady Designs, we are committed to developing strategies that empower businesses to grow and thrive in an ever-evolving digital marketplace. Every project we undertake is driven by a focus on measurable results, ensuring that your brand is not only visually appealing but also strategically positioned for success.
                            </p>
                        </div>
                        <div className='xs:w-[100%] lg:w-[40%] xl:w-[30%] xs:mt-8 lg:mt-0'>
                            <Image className='m-auto rounded-lg' src={"/about/about-second.png"} width={500} height={600} />
                        </div>
                    </div>
                </div>
                <div className='moving_text_wrap mt-14'>
                    <div className='moving_text_in'>
                        <div className='moving_text'>CRAFTING EXPERIENCES THAT MATTER.</div>
                        <div className='moving_text'>CRAFTING EXPERIENCES THAT MATTER.</div>
                    </div>
                </div>
                <div className='moving_text_wrap'>
                    <div className='moving_text_in'>
                        <div className='moving_text2'>CRAFTING EXPERIENCES THAT MATTER.</div>
                        <div className='moving_text2'>CRAFTING EXPERIENCES THAT MATTER.</div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Section3
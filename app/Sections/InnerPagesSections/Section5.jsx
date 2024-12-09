import React from 'react'
import { FaCheck } from 'react-icons/fa'

const Section5 = ({ title, description, item1, item2, item3, item4, item5, item6, serviceImages }) => {
    return (
        <div className="w-full relative">
            <div className="xs:w-[100%] lg:w-[85%] m-auto p-4">
                <h3 className="xs:text-[36px] lg:text-[52px] xl:text-[62px] text-white font-bold xs:w-[100%] lg:w-[90%] xl:w-[70%] leading-none">{title}</h3>
                <p className="xs:w-[100%] lg:w-[85%] xl:w-[75%] text-white mt-8 xs:text-[18px] lg:text-[24px]">{description}</p>
                <div className="mt-6 w-full flex xs:flex-col lg:flex-row justify-between ">
                    <div className=''>
                        <div className="flex gap-3 text-white items-center">
                            <div className="p-2  rounded-full bg-[#70000E]">
                                <FaCheck size={15} color="white" />
                            </div>
                            <h3 className="xs:text-[18px] lg:text-xl font-semibold">{item1}</h3>
                        </div>
                        <div className="flex gap-3 text-white items-center mt-4">
                            <div className="p-2  rounded-full bg-[#70000E]">
                                <FaCheck size={15} color="white" />
                            </div>
                            <h3 className="xs:text-[18px] lg:text-xl font-semibold">{item2}</h3>
                        </div>
                        <div className="flex gap-3 text-white items-center mt-4">
                            <div className="p-2  rounded-full bg-[#70000E]">
                                <FaCheck size={15} color="white" />
                            </div>
                            <h3 className="xs:text-[18px] lg:text-xl font-semibold">{item3}</h3>
                        </div>
                        <div className="flex gap-3 text-white items-center mt-4">
                            <div className="p-2  rounded-full bg-[#70000E]">
                                <FaCheck size={15} color="white" />
                            </div>
                            <h3 className="xs:text-[18px] lg:text-xl font-semibold">{item4}</h3>
                        </div>
                        <div className="flex gap-3 text-white items-center mt-4">
                            <div className="p-2  rounded-full bg-[#70000E]">
                                <FaCheck size={15} color="white" />
                            </div>
                            <h3 className="xs:text-[18px] lg:text-xl font-semibold">{item5}</h3>
                        </div>
                        <div className="flex gap-3 text-white items-center mt-4">
                            <div className="p-2  rounded-full bg-[#70000E]">
                                <FaCheck size={15} color="white" />
                            </div>
                            <h3 className="xs:text-[18px] lg:text-xl font-semibold">{item6}</h3>
                        </div>
                        <div className="w-[100%] mt-8 rounded-3xl p-3 bg-[#70000E] cursor-pointer xs:block lg:hidden">
                            <h3 className="text-center text-white">Let&apos;s Discuss</h3>
                        </div>
                    </div>
                    <div className="xs:w-[100%] lg:w-[50%] xl:w-[40%]   xs:mt-12 lg:mt-0 ">
                        <div className="w-full flex flex-wrap gap-4 justify-center">
                            {serviceImages.map((src, index) => (
                                <div key={index} style={{ background: 'radial-gradient(circle , rgb(0, 0, 0) 0%, rgb(64, 64, 64) 90.2%)' }} className={"p-2 rounded-xl  "}>
                                    <img src={src} alt={`Service ${index + 1}`} className="xs:w-[50px] xs:h-[50px] lg:w-[100px] lg:h-[100px]" />
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
                <div className="xs:w-[10%] md:w-[10%] lg:w-[20%] xl:w-[10%] mt-8 rounded-3xl p-3 bg-[#70000E] cursor-pointer xs:hidden lg:block">
                    <h3 className="text-center text-white">Let&apos;s Discuss</h3>
                </div>
            </div>
        </div>
    )
}

export default Section5
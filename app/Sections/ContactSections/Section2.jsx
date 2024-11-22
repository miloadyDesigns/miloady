import Cards from '@/app/_components/DesignCards/Cards'
import React from 'react'
import { IoLocationSharp, IoCall } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { FaRegUser, FaPencilAlt } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdHomeRepairService } from "react-icons/md";

const Section2 = () => {
    return (
        <div className='relative z-10 w-screen  pb-12'>
            <div className='z-10 h-full'>
                <div id='section2' className="xs:w-[90%] lg:w-[90%] m-auto overflow-hidden z-10 h-full">
                    <div className='p-2 h-full flex xs:flex-col lg:flex-row justify-around  mt-[8%]'>
                        <div className='xs:w-[100%] lg:w-[40%]  h-full p-4'>
                            <h2 className='font-pp text-[#fff] mb-4 xs:text-sm lg:text-sm xl:text-xl'>C O N T A C T&nbsp; U S</h2>
                            <h1 className='text-white xs:text-[32px] lg:text-[42px] xl:text-[52px] leading-none font-roboto'>
                                Have a question?
                                <br />
                                Get in touch!
                            </h1>
                            <p className='text-white mt-4 ml-2 w-[70%]'>
                                Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
                            </p>
                            <div className='mt-8 ml-2'>
                                <div className='flex gap-4 items-center mt-4'>
                                    <div>
                                        <IoLocationSharp color='#FA1B17' size={32} />
                                    </div>
                                    <div className='text-gray-300 text-lg'>
                                        <p>5900 Balcones Dr #7462, Austin, TX 78731, USA</p>
                                    </div>
                                </div>
                                <div className='flex gap-4 items-center mt-4'>
                                    <div>
                                        <IoCall color='#FA1B17' size={32} />
                                    </div>
                                    <div className='text-gray-300 text-lg'>
                                        <p>+1 512 240 95 22</p>
                                    </div>
                                </div>
                                <div className='flex gap-4 items-center mt-4'>
                                    <div>
                                        <IoIosMail color='#FA1B17' size={32} />
                                    </div>
                                    <div className='text-gray-300 text-lg'>
                                        <p>info@miloadydesigns.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='xs:w-[100%] lg:w-[50%]  h-full'>
                            <form action="" className='mt-16'>
                                <div className='w-full flex xs:flex-col lg:flex-row justify-around '>
                                    <div className='flex xs:w-[100%] lg:w-[40%] xs:mt-4 lg:mt-0'>
                                        <FaRegUser color='white' size={25} className='absolute ' />
                                        <input type="text" className="bg-transparent border border-b-2 border-t-0 border-r-0 border-l-0 border-gray-600 w-full text-white focus:outline-none focus:border-white  pl-12 pb-4 xs:text-sm lg:text-xl placeholder-gray-300 " placeholder='Name' />
                                    </div>
                                    <div className='flex xs:w-[100%] lg:w-[40%] xs:mt-4 lg:mt-0 '>
                                        <IoIosMail color='white' size={25} className='absolute ' />
                                        <input
                                            type="text"
                                            className="bg-transparent border border-b-2 border-t-0 border-r-0 border-l-0 border-gray-600 w-full text-white focus:outline-none focus:border-white pl-12 pb-4 xs:text-sm lg:text-xl placeholder-gray-300"
                                            placeholder="Email"
                                        />

                                    </div>
                                </div>
                                <div className='w-full flex xs:flex-col lg:flex-row justify-around xs:mt-0 lg:mt-14'>
                                    <div className='flex xs:w-[100%] lg:w-[40%] xs:mt-4 lg:mt-0'>
                                        <FaPhoneVolume color='white' size={25} className='absolute ' />
                                        <input type="text" className="bg-transparent border border-b-2 border-t-0 border-r-0 border-l-0 border-gray-600 w-full text-white focus:outline-none focus:border-white pl-12 pb-4 xs:text-sm lg:text-xl placeholder-gray-300 " placeholder='Phone' />
                                    </div>
                                    <div className='flex xs:w-[100%] lg:w-[40%] xs:mt-4 lg:mt-0'>
                                        <MdHomeRepairService color='white' size={25} className='absolute' />
                                        <input type="text" className="bg-transparent border border-b-2 border-t-0 border-r-0 border-l-0 border-gray-600 w-full text-white focus:outline-none focus:border-white pl-12 pb-4 xs:text-sm lg:text-xl placeholder-gray-300 " placeholder='Subject' />
                                    </div>
                                </div>
                                <div className='xs:w-[100%] lg:w-[90%] m-auto xs:mt-8 lg:mt-14'>
                                    <FaPencilAlt color='white' size={25} className='absolute ' />
                                    <input type="text" className="bg-transparent border border-b-2 border-t-0 border-r-0 border-l-0 border-gray-600 w-full text-white focus:outline-none focus:border-white pl-12 pb-6 xs:text-sm lg:text-xl placeholder-gray-300 " placeholder='How can we help you? Feel free to get in touch!' />
                                </div>
                                <div className='w-[50%] mt-10 xs:ml-4 lg:ml-12'>
                                    <button class="cssbuttons-io-button">
                                        Get in touch
                                        <div class="icon">
                                            <svg
                                                height="24"
                                                width="24"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M0 0h24v24H0z" fill="none"></path>
                                                <path
                                                    d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                                                    fill="currentColor"
                                                ></path>
                                            </svg>
                                        </div>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>



        </div >
    )
}

export default Section2
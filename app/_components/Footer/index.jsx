import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <section className='w-full h-full pt-6'>
            <div className='flex xs:flex-col lg:flex-row  justify-center'>
                <div className="xs:w-[100%] lg:w-[28%] xs:p-4 lg:p-0 flex flex-col ">
                    <Image src={"/imp/mldLogo.png"} width={150} height={120} className=' text-white xs:hidden  xl:block mt-4' />
                    <Image src={"/imp/mldLogo.png"} width={60} height={70} className=' text-white lg:hidden xs:block' />
                    <Image src={"/imp/mldLogo.png"} width={80} height={80} className=' text-white lg:block  xs:hidden xl:hidden' />
                    <p className='p-2 text-white font-text xs:text-[14px] lg:text-lg w-[90%]'>Bringing ideas to life with creativity and precision, crafting designs that inspire and connect.

                    </p>
                </div>

                <div className='lg:w-[25%] mb-2 '>
                    <div className='xs:w-full lg:w-full flex flex-col '>
                        <ul className='mt-4 text-left list-none text-gray-300 xs:ml-6 lg:ml-0'>
                            <li className='text-white flex flex-col font-bold xs:text-lg lg:text-2xl 2xl:text-3xl font-text '>Contact</li>
                            <li className='mt-8 xs:text-[12px] lg:text-[16px] '>Phone: (512) 240-9522</li>
                            <li className='mt-2 xs:text-[12px] lg:text-[16px]'>Email: info@miloadydesigns.com</li>
                            <li className='mt-2 xs:text-[12px] lg:text-[16px]'>Address: 5900 Balcones Dr #7462,<br /> Austin, TX 78731, USA</li>

                        </ul>
                    </div>
                </div>
                <div className='lg:w-[30%] mb-2 '>
                    <div className='xs:w-full lg:w-full'>
                        <ul className='mt-4 text-left list-none text-gray-300 xs:ml-6 lg:ml-0 '>
                            <li className='text-white font-bold xs:text-lg lg:text-2xl 2xl:text-3xl font-text'>Subscribe Now</li>
                            <div className="m-auto">
                                <li className='mt-4 xs:text-[12px] lg:text-[16px] w-full '>
                                    <input type="text" className='p-4 bg-gray-700 w-[90%] rounded-full text-white'
                                        placeholder="Enter Email" />
                                </li>
                                <li className='mt-6 xs:text-[12px] lg:text-[16px] text-center cursor-pointer'>
                                    <div className='rounded-full w-[90%] p-3 bg-gray-400 text-bold text-black duration-100 transition-all hover:bg-[#70000E]  text-lg hover:text-white hover:shadow-custom-glow-light'>
                                        Subscribe
                                    </div>
                                </li>
                                <div className='text-white space-x-9 flex ml-2 mt-12 w-[90%] justify-end'>
                                    <div className='xs:text-[12px] lg:text-[16px] text-gray-600 hover:text-white'>
                                        <Link href={"/privacy-policy"}>
                                            Privacy Policy
                                        </Link>
                                    </div>
                                    <div className='xs:text-[12px] lg:text-[16px] text-gray-600 hover:text-white'>
                                        <Link href={"/terms-and-condition"}>
                                            Terms and Condition
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>
                <div className="w-[80%] xs:hidden h-[65%]  flex space-x-20">
                    <div className='w-[20%] flex flex-col  items-center'>
                        <ul className='mt-4 text-left list-none text-gray-300'>
                            <li className='text-white flex flex-col font-bold text-2xl font-text'>Quick Links</li>
                            <li className='mt-4 '>Home</li>
                            <li className='mt-2'>About</li>
                            {/* <li className='mt-2'>Services</li> */}
                            <li className='mt-2'>Testimonials</li>
                            <li className='mt-2'>Blogs</li>
                        </ul>
                    </div>
                    <div className='w-[20%]  flex flex-col  items-center'>
                        <ul className='mt-4 text-left list-none text-gray-300'>
                            <li className='text-white flex flex-col font-bold text-2xl font-text'>Departments</li>
                            <li className='mt-4'>Development</li>
                            <li className='mt-2'>Marketing</li>
                            <li className='mt-2'>Design</li>
                            <li className='mt-2'>Social Media Management</li>
                        </ul>
                    </div>
                    <div className='w-[20%]  flex flex-col  items-center'>
                        <ul className='mt-4 text-left list-none text-gray-300'>
                            <li className='text-white flex flex-col font-bold text-2xl font-text'>Portfolio</li>
                            <li className='mt-4'>Website Portfolio</li>
                            <li className='mt-2'>Design Portfolio</li>
                            <li className='mt-2'>Marketing Case Studies</li>
                            <li className='mt-2'>Social Media Portfolio</li>
                        </ul>
                    </div>
                    <div className='w-[25%]  flex flex-col  items-center'>
                        <ul className='mt-4 text-left list-none text-gray-300'>
                            <li className='text-white flex flex-col font-bold text-2xl font-text'>Contact</li>
                            <li className='mt-4'>dummy@email.com</li>
                            <li className='mt-2'>Sales: (813) 565-9024</li>
                            <li className='mt-2'>Support: (813) 295-2190</li>
                            <li className='mt-2'>10901 Danka Circle North,<br /> Suite B
                                St.Petersburg FL 33716</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='p-2 lg:-mt-10'>
                <h3 className='text-gray-600 text-center'>Copyright © 2024 MLD. All right reserved.</h3>
            </div>
            {/* <div className="border h-[10vh]">

            </div> */}
        </section>
    )
}

export default Footer

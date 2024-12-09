'use client'
import React, { useEffect, useState } from 'react';
import { AiOutlineMenu, AiOutlineClose, AiOutlineDown, AiOutlineUp } from 'react-icons/ai';
import './style.css';
import Image from 'next/image';
import { FaArrowRightLong } from "react-icons/fa6";
import Link from 'next/link';
import { useHeaderVisibility } from '@/context/HeaderVisibilityProvider ';
import { IoIosCall } from 'react-icons/io';

const MegaMenu = () => {
    // State to track if the Products menu is active or not
    const { isVisible } = useHeaderVisibility()
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const phoneNumber = "(512) 240-9522";
    useEffect(() => {
        console.log(isVisible);

    })
    const handleCallClick = () => {
        window.location.href = `tel:${phoneNumber}`;
    };
    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 30);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isSticky]);
    // Toggle the dropdown state
    const handleDropdownToggle = () => {
        setIsDropdownOpen(prevState => !prevState);
    };
    const mouseEnterHandler = () => {
        if (window.scrollY < 30) {
            setIsSticky(true)
        }
    }
    const mouseLeaveHandler = () => {
        if (window.scrollY < 30) {
            setIsSticky(false)
        }
    }

    return (
        <header style={{ display: isVisible ? "none" : "block" }} className={` ${isSticky ? 'sticky ' : 'primaryHeader'}`} onMouseEnter={() => mouseEnterHandler()} onMouseLeave={() => mouseLeaveHandler()}>
            <div className="container">
                <nav className="navigation">
                    <Link href="/" className="logo">
                        {/* <img src="/header/logo.svg" alt="Logo" className="logo-img" /> */}
                        <Image
                            className=''
                            src="https://res.cloudinary.com/dz8sirg5s/image/upload/v1730978818/images/xcer12xbqw9slqnp7v7r.png"
                            width={100}
                            height={100}
                            alt="Logo"
                        />
                    </Link>
                    <ul className="nav_menu ">
                        <li className="nav_list font-myfont  [word-spacing:2px]">
                            <Link href="/about" className="nav_link">
                                <span>A B O U T</span>
                            </Link>
                        </li>
                        <li className="nav_list text-white nav_list_menu font-myfont [word-spacing:2px]">
                            <a href="#!" className="nav_link" onClick={handleDropdownToggle}>
                                <span>S E R V I C E S</span>
                                <span className='mt-1 ml-0'>
                                    {isDropdownOpen ? <AiOutlineUp /> : <AiOutlineDown />}
                                </span>
                            </a>
                            {/* Apply 'active' class based on the dropdown state */}
                            <div className={`dropdown ${isDropdownOpen ? 'active' : ''}`}>
                                <div className="dropdown-inner">
                                    <div className="dropdown-item w-full relative">
                                        <div className='m-6 absolute right-0 w-[50%]'>
                                            <div className='flex justify-between items-center'>
                                                <h3 className='text-white text-4xl'>Services</h3>
                                                <div className='right-icon'>
                                                    <FaArrowRightLong size={26} color='#A3001A' />
                                                </div>
                                            </div>
                                            <div>
                                                {/* <p className='text-sm mt-2 ml-1 text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, expedita aliquid impedit possimus at, suscipit culpa rerum fugiat, enim eos mollitia? Aspernatur, optio hic, veniam placeat corporis repellat velit reprehenderit ab rerum tempora, nostrum dolore quibusdam nam vitae saepe.</p> */}
                                            </div>
                                        </div>
                                        <div className='m-6 flex flex-col   absolute bottom-0 right-0 w-[50%]'>
                                            <h3 className='text-white text-2xl'>Technologies</h3>
                                            <div className='right-icon'>
                                                <div className='flex gap-4 flex-wrap  mt-2'>
                                                    <img src="/tech/tech1.svg" alt="" className="w-[50px] h-[50px] techImg" />
                                                    <img src="/tech/tech2.svg" alt="" className="w-[50px] h-[50px] techImg" />
                                                    <img src="/tech/tech3.svg" alt="" className="w-[50px] h-[50px] techImg" />
                                                    <img src="/tech/tech4.svg" alt="" className="w-[50px] h-[50px] techImg" />
                                                    <img src="/tech/tech5.svg" alt="" className="w-[50px] h-[50px] techImg" />
                                                    <img src="/tech/tech6.svg" alt="" className="w-[50px] h-[50px] techImg" />
                                                    <img src="/tech/tech7.svg" alt="" className="w-[50px] h-[50px] techImg" />
                                                    <img src="/tech/tech8.svg" alt="" className="w-[50px] h-[50px] techImg" />
                                                    <img src="/tech/tech9.svg" alt="" className="w-[50px] h-[50px] techImg" />
                                                    <img src="/tech/tech10.svg" alt="" className="w-[50px] h-[50px] techImg" />
                                                    <img src="/tech/tech11.svg" alt="" className="w-[50px] h-[50px] techImg" />
                                                    <img src="/tech/tech12.svg" alt="" className="w-[50px] h-[50px] techImg" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="dropdown-item flex gap-12 flex-wrap ">
                                        <div className=''>
                                            <h3 className="item-heading font-bold m-2 text-xl">Website Development</h3>
                                            <ul className='ml-2'>
                                                <li className='mt-2'> <span class="headerDot"></span> Full-Stack Development</li>
                                                <li className='mt-2'> <span class="headerDot"></span> Frontend Development</li>
                                                <li className='mt-2'> <span class="headerDot"></span> Backend Development</li>
                                                <li className='mt-2'> <span class="headerDot"></span> Ecommerce Development</li>
                                                <li className='mt-2'> <span class="headerDot"></span> WordPress Development</li>
                                                <li className='mt-2'> <span class="headerDot"></span> CMS Development</li>
                                            </ul>
                                        </div>
                                        <div className=''>
                                            <h3 className="item-heading font-bold m-2 text-xl">Mobile App Development</h3>
                                            <ul className='ml-2'>
                                                <li className='mt-2'> <span class="headerDot"></span> iOS App Development</li>
                                                <li className='mt-2'> <span class="headerDot"></span> Android App Development</li>
                                                <li className='mt-2'> <span class="headerDot"></span> Ecommerce App Development</li>
                                                <li className='mt-2'> <span class="headerDot"></span> Enterprise App Development</li>
                                                <li className='mt-2'> <span class="headerDot"></span> Hybrid App Development</li>
                                            </ul>
                                        </div>
                                        <div className=''>
                                            <h3 className="item-heading font-bold m-2 text-xl">Design</h3>
                                            <ul className='ml-2'>
                                                <li className='mt-2'> <span class="headerDot"></span> Logo Design</li>
                                                <li className='mt-2'> <span class="headerDot"></span> UI/UX</li>
                                                <li className='mt-2'> <span class="headerDot"></span> Graphic Design</li>
                                                <li className='mt-2'> <span class="headerDot"></span> Merchandise Design</li>

                                            </ul>
                                        </div>
                                        <div className=''>
                                            <h3 className="item-heading font-bold m-2 text-xl">MVP and SharePoint</h3>
                                            <ul className='ml-2'>
                                                <li className='mt-2'> <span class="headerDot"></span> SharePoint Development</li>
                                                <li className='mt-2'> <span class="headerDot"></span> MVP Development</li>
                                            </ul>
                                        </div>
                                        <div className=''>
                                            <h3 className="item-heading font-bold m-2 text-xl">Digital Marketing</h3>
                                            <ul className='ml-2'>
                                                <li className='mt-2'> <span class="headerDot"></span> Social Media Marketing</li>
                                                <li className='mt-2'> <span class="headerDot"></span> Search Engine Optimization</li>
                                                <li className='mt-2'> <span class="headerDot"></span> Pay-Per Click</li>
                                                <li className='mt-2'> <span class="headerDot"></span> Email Marketing</li>
                                            </ul>
                                        </div>
                                        <div className=''>
                                            <h3 className="item-heading font-bold m-2 text-xl">Video Animation</h3>
                                            <ul className='ml-2'>
                                                <li className='mt-2'> <span class="headerDot"></span> Whiteboard Animation</li>
                                                <li className='mt-2'> <span class="headerDot"></span> 2D Animation</li>
                                                <li className='mt-2'> <span class="headerDot"></span> 3D Animation</li>
                                            </ul>
                                        </div>

                                        <div className=''>
                                            <h3 className="item-heading font-bold m-2 text-xl">MVP and SharePoint</h3>
                                            <ul className='ml-2'>
                                                <li className='mt-2'> <span class="headerDot"></span> SharePoint Development</li>
                                                <li className='mt-2'> <span class="headerDot"></span> MVP Development</li>
                                            </ul>
                                        </div>

                                        <div className=''>
                                            <h3 className="item-heading font-bold m-2 text-xl">Blockchain Development</h3>
                                            <ul className='ml-2'>
                                                <li className='mt-2'> <span class="headerDot"></span> Web3 Development</li>
                                            </ul>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="nav_list font-myfont uppercase [word-spacing:2px]">
                            <a href="#!" className="nav_link">
                                <span>P O R T F O L I O</span>
                            </a>
                        </li>
                        <li className="nav_list font-myfont uppercase [word-spacing:2px]">
                            <a href="#!" className="nav_link">
                                <span>B L O G S</span>
                            </a>
                        </li>
                        <li className="nav_list font-myfont uppercase [word-spacing:2px]">
                            <a href="#!" className="nav_link">
                                <span>C O N T A C T S</span>
                            </a>
                        </li>
                    </ul>
                    <div className="nav_action">
                        <li> <div className='shadow__btn p-4 bg-black cursor-pointer' >
                            <IoIosCall color='white' size={20} />
                        </div></li>
                        <li> <div className='shadow__btn p-4 bg-black cursor-pointer' >
                            <AiOutlineMenu color='white' size={20} />
                        </div></li>
                    </div>
                </nav>
            </div >
        </header >
    );
};

export default MegaMenu;

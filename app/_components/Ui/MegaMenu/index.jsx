'use client'
import React, { useEffect, useState } from 'react';
import { AiOutlineMenu, AiOutlineClose, AiOutlineDown, AiOutlineUp } from 'react-icons/ai';
import './style.css';
import Image from 'next/image';
import { FaArrowRightLong } from "react-icons/fa6";
import Link from 'next/link';
import { useHeaderVisibility } from '@/context/HeaderVisibilityProvider ';

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
                    <Link href="/" className="logo ">
                        {/* <img src="/header/logo.svg" alt="Logo" className="logo-img" /> */}
                        <Image
                            className=''
                            src="https://res.cloudinary.com/dz8sirg5s/image/upload/v1730978818/images/xcer12xbqw9slqnp7v7r.png"
                            width={100}
                            height={100}
                            alt="Logo"
                        />
                    </Link>
                    <ul className="nav_menu  ">
                        <li className="nav_list font-myfont  [word-spacing:2px]">
                            <a href="#!" className="nav_link">
                                <span>A B O U T</span>
                            </a>
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
                                                <h1 className='text-white text-4xl'>Services</h1>
                                                <div className='right-icon'>
                                                    <FaArrowRightLong size={26} color='#A3001A' />
                                                </div>
                                            </div>
                                            <div>
                                                {/* <p className='text-sm mt-2 ml-1 text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, expedita aliquid impedit possimus at, suscipit culpa rerum fugiat, enim eos mollitia? Aspernatur, optio hic, veniam placeat corporis repellat velit reprehenderit ab rerum tempora, nostrum dolore quibusdam nam vitae saepe.</p> */}
                                            </div>
                                        </div>
                                        <div className='m-6 flex flex-col   absolute bottom-0 right-0 w-[50%]'>
                                            <h1 className='text-white text-2xl'>Technologies</h1>
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
                                            <h3 className="item-heading font-bold m-2 text-xl">Mobile App Development</h3>
                                            <ul className='ml-2'>
                                                <li className='mt-2'> <span class="headerDot"></span> iOS App Development</li>
                                                <li className='mt-2'> <span class="headerDot"></span> Android App Development</li>
                                                <li className='mt-2'> <span class="headerDot"></span> Ecommerce App Development</li>
                                                <li className='mt-2'> <span class="headerDot"></span> visionOS Development</li>
                                                <li className='mt-2'> <span class="headerDot"></span> Enterprise App Development</li>
                                            </ul>
                                        </div>
                                        <div className=''>
                                            <h3 className="item-heading font-bold m-2 text-xl">Mobile App Development</h3>
                                            <ul className='ml-2'>
                                                <li className='mt-2'> <span class="headerDot"></span> iOS App Development</li>
                                                <li className='mt-2'> <span class="headerDot"></span> Android App Development</li>
                                                <li className='mt-2'> <span class="headerDot"></span> Ecommerce App Development</li>
                                                <li className='mt-2'> <span class="headerDot"></span> visionOS Development</li>
                                            </ul>
                                        </div>
                                        <div className=''>
                                            <h3 className="item-heading font-bold m-2 text-xl">Mobile App Development</h3>
                                            <ul className='ml-2'>
                                                <li className='mt-2'> <span class="headerDot"></span> iOS App Development</li>
                                                <li className='mt-2'> <span class="headerDot"></span> Android App Development</li>
                                                <li className='mt-2'> <span class="headerDot"></span> Ecommerce App Development</li>

                                            </ul>
                                        </div>
                                        <div className=''>
                                            <h3 className="item-heading font-bold m-2 text-xl">Mobile App Development</h3>
                                            <ul className='ml-2'>
                                                <li className='mt-2'> <span class="headerDot"></span> iOS App Development</li>
                                                <li className='mt-2'> <span class="headerDot"></span> Android App Development</li>
                                            </ul>
                                        </div>
                                        <div className=''>
                                            <h3 className="item-heading font-bold m-2 text-xl">Mobile App Development</h3>
                                            <ul className='ml-2'>
                                                <li className='mt-2'> <span class="headerDot"></span> iOS App Development</li>
                                                <li className='mt-2'> <span class="headerDot"></span> Android App Development</li>
                                                <li className='mt-2'> <span class="headerDot"></span> Ecommerce App Development</li>
                                                <li className='mt-2'> <span class="headerDot"></span> visionOS Development</li>
                                                <li className='mt-2'> <span class="headerDot"></span> Enterprise App Development</li>

                                            </ul>
                                        </div>
                                        <div className=''>
                                            <h3 className="item-heading font-bold m-2 text-xl">Mobile App Development</h3>
                                            <ul className='ml-2'>
                                                <li className='mt-2'> <span class="headerDot"></span> iOS App Development</li>
                                                <li className='mt-2'> <span class="headerDot"></span> Android App Development</li>
                                                <li className='mt-2'> <span class="headerDot"></span> Ecommerce App Development</li>
                                                <li className='mt-2'> <span class="headerDot"></span> visionOS Development</li>
                                            </ul>
                                        </div>
                                        <div className=''>
                                            <h3 className="item-heading font-bold m-2 text-xl">Mobile App Development</h3>
                                            <ul className='ml-2'>
                                                <li className='mt-2'> <span class="headerDot"></span> iOS App Development</li>
                                                <li className='mt-2'> <span class="headerDot"></span> Android App Development</li>
                                                <li className='mt-2'> <span class="headerDot"></span> Ecommerce App Development</li>
                                            </ul>
                                        </div>


                                    </div>

                                    {/* <div className="dropdown-item border">
                                        <h3 className="item-heading">Resources</h3>
                                        <div className="item-list">
                                            <div className="item-img">
                                                <img src="/header/icon-9.svg" alt="Icon" />
                                            </div>
                                            <div className="item-list-info">
                                                <h4>Blog</h4>
                                                <p>The latest industry news.</p>
                                            </div>
                                        </div>
                                        <div className="item-list">
                                            <div className="item-img">
                                                <img src="/header/icon-10.svg" alt="Icon" />
                                            </div>
                                            <div className="item-list-info">
                                                <h4>Customer stories</h4>
                                                <p>Learn how our customers.</p>
                                            </div>
                                        </div>
                                        <div className="item-list">
                                            <div className="item-img">
                                                <img src="/header/icon-11.svg" alt="Icon" />
                                            </div>
                                            <div className="item-list-info">
                                                <h4>Video tutorials</h4>
                                                <p>New features and techniques.</p>
                                            </div>
                                        </div>
                                        <div className="item-list">
                                            <div className="item-img">
                                                <img src="/header/icon-12.svg" alt="Icon" />
                                            </div>
                                            <div className="item-list-info">
                                                <h4>Documentation</h4>
                                                <p>All the boring stuff.</p>
                                            </div>
                                        </div>
                                    </div> */}

                                    {/* <div className="dropdown-item">
                                        <h3 className="item-heading">Company</h3>
                                        <div className="item-list">
                                            <div className="item-img">
                                                <img src="/header/icon-13.svg" alt="Icon" />
                                            </div>
                                            <div className="item-list-info">
                                                <h4>About us</h4>
                                                <p>Learn about our story.</p>
                                            </div>
                                        </div>
                                        <div className="item-list">
                                            <div className="item-img">
                                                <img src="/header/icon-14.svg" alt="Icon" />
                                            </div>
                                            <div className="item-list-info">
                                                <h4>Press</h4>
                                                <p>News and press resources.</p>
                                            </div>
                                        </div>
                                        <div className="item-list">
                                            <div className="item-img">
                                                <img src="/header/icon-15.svg" alt="Icon" />
                                            </div>
                                            <div className="item-list-info">
                                                <span className="info-badge">We’re hiring!</span>
                                                <h4>Careers</h4>
                                                <p>Join our team!</p>
                                            </div>
                                        </div>
                                        <div className="item-list">
                                            <div className="item-img">
                                                <img src="/header/icon-16.svg" alt="Icon" />
                                            </div>
                                            <div className="item-list-info">
                                                <h4>Legal</h4>
                                                <p>All the boring stuff.</p>
                                            </div>
                                        </div>
                                    </div> */}
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
                    <div className="nav_action ">
                        <a href="#!" className="btn">Log in</a>
                        <a href="#!" className="btn-primary">Sign up</a>
                        <div className="nav_toggle">
                            {/* Replace the ion-icon with AiOutlineMenu */}
                            <AiOutlineMenu size={24} />
                        </div>
                    </div>
                </nav>
            </div >
        </header >
    );
};

export default MegaMenu;

'use client';
import React from 'react'
import { GrFormNextLink } from 'react-icons/gr'
import Link from 'next/link';
import DropDown from './DropDown';
import "./header.scss"
import Image from 'next/image';
import "../../globals.css";
import { useEffect, useState } from 'react';
import { useHeaderVisibility } from '@/context/HeaderVisibilityProvider ';
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import Dialog from '../Dialog/Dialog';
import SideDrawer from '../SideDrawer/SideDrawer';

const designData = [
    {
        id: 1,
        name: "Graphic Designing",
        description: "The most import thing in business online is your website presence."

    },
    {
        id: 2,
        name: "Video Designing",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe libero, expedita dicta sint beatae adipisci!"

    },
    {
        id: 3,
        name: "Graphic Designing",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe libero, expedita dicta sint beatae adipisci!"

    }
]
const Header = ({ variant }) => {
    const { isVisible } = useHeaderVisibility()
    const [isSticky, setIsSticky] = useState(false);
    const phoneNumber = "(512) 240-9522";
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
    }, []);

    return (
        <>
            <header className={`h-[10vh] cs-sticky_header ${isSticky ? 'cs-sticky_header_active' : ''}`} style={{ display: isVisible ? 'none' : 'block' }}>
                <div className='flex xs:hidden xl:flex flex-row h-full space-x-12 p-4 ml-[7%]'>
                    <div className='lg:w-[10%] xs:w-[90%] h-full flex items-center'>
                        <Link href={"/"}>
                            <Image
                                className='w-full h-auto mt-6'
                                src="https://res.cloudinary.com/dz8sirg5s/image/upload/v1730978818/images/xcer12xbqw9slqnp7v7r.png"
                                width={100}
                                height={100}
                                alt="Logo"
                            />
                        </Link>
                    </div>
                    <div className=''>
                        <ul className='flex flex-row space-x-8 pt-2 h-full text-md text-white items-center'>
                            <li><Link href="/about" className='font-myfont uppercase [word-spacing:2px] hidden'>A b o u t</Link></li>
                            <li><DropDown service={"D e s i g n"} nestedServcies={designData} /></li>
                            <li><DropDown service={"D e v e l o p m e n t"} nestedServcies={designData} /></li>
                            <li><DropDown service={"M a r k e t i n g"} nestedServcies={designData} /></li>
                            <li><DropDown service={"A n i m a t i o n"} nestedServcies={designData} /></li>
                            <li><DropDown service={"A I"} nestedServcies={designData} /></li>
                            <li><Link href="/about" className='font-myfont uppercase [word-spacing:2px] '>B l o g</Link></li>
                            <li><Link href="/about" className='font-myfont uppercase [word-spacing:2px] '>C o n t a c t</Link></li>

                        </ul>
                    </div>
                    <div className='flex space-x-8  justify-end h-full w-[15%]'>
                        <div className='shadow__btn bg-black cursor-pointer rounded-full' onClick={handleCallClick}>
                            <IoIosCall color='white' size={26} />
                        </div>
                        <div className='shadow__btn bg-black cursor-pointer rounded-full'>
                            <Dialog />
                        </div>

                    </div>
                </div>
            </header>
            <div className='lg:hidden xs:block cs-sticky_header m-4' style={{ display: isVisible ? 'none' : 'block' }}>
                <Image
                    className='lg:hidden xs:block'
                    src="https://res.cloudinary.com/dz8sirg5s/image/upload/v1730978818/images/xcer12xbqw9slqnp7v7r.png"
                    width={80}
                    height={80}
                    alt="Logo"
                />
                <div className='lg:hidden xs:block absolute top-0 right-4'>
                    <ul className='flex flex-row space-x-5  h-full text-md text-white items-center'>
                        {/* <li><Link href="/about" className='font-myfont uppercase [word-spacing:2px] hidden'>A b o u t</Link></li>
                            <li><DropDown service={"D e s i g n"} nestedServcies={designData} /></li>
                            <li><DropDown service={"D e v e l o p m e n t"} nestedServcies={designData} /></li>
                            <li><DropDown service={"M a r k e t i n g"} nestedServcies={designData} /></li>
                            <li><DropDown service={"A n i m a t i o n"} nestedServcies={designData} /></li>
                            <li><DropDown service={"A I"} nestedServcies={designData} /></li>
                            <li><Link href="/about" className='font-myfont uppercase [word-spacing:2px] hidden'>C o n t a c t</Link></li> */}
                        {/* 

                            */}
                        <li> <div className='shadow__btn p-3 bg-black cursor-pointer' onClick={handleCallClick}>
                            <IoIosCall color='white' size={25} />
                        </div></li>
                        {/* <li> <div className='shadow__btn p-2 bg-black cursor-pointer'>
                            <Dialog />
                        </div></li> */}
                        <li> <div className='shadow__btn p-2 bg-black cursor-pointer'>
                            <SideDrawer />
                        </div></li>
                    </ul>
                </div>
            </div>
            <div className='lg:block xl:hidden xs:hidden cs-sticky_header m-4' style={{ display: isVisible ? 'none' : 'block' }}>
                <Image
                    className='lg:block xl:hidden xs:hidden ml-[6%]'
                    src="https://res.cloudinary.com/dz8sirg5s/image/upload/v1730978818/images/xcer12xbqw9slqnp7v7r.png"
                    width={80}
                    height={80}
                    alt="Logo"
                />
                <div className='lg:block xl:hidden xs:hidden absolute top-0 right-[10%]'>
                    <ul className='flex flex-row space-x-5  h-full text-md text-white items-center'>
                        {/* <li><Link href="/about" className='font-myfont uppercase [word-spacing:2px] hidden'>A b o u t</Link></li>
                            <li><DropDown service={"D e s i g n"} nestedServcies={designData} /></li>
                            <li><DropDown service={"D e v e l o p m e n t"} nestedServcies={designData} /></li>
                            <li><DropDown service={"M a r k e t i n g"} nestedServcies={designData} /></li>
                            <li><DropDown service={"A n i m a t i o n"} nestedServcies={designData} /></li>
                            <li><DropDown service={"A I"} nestedServcies={designData} /></li>
                            <li><Link href="/about" className='font-myfont uppercase [word-spacing:2px] hidden'>C o n t a c t</Link></li> */}
                        <li> <div className='shadow__btn p-1 bg-black cursor-pointer' onClick={handleCallClick}>
                            <IoIosCall color='white' size={20} />
                        </div></li>
                        <li> <div className='shadow__btn p-1 bg-black cursor-pointer'>
                            <Dialog size={true} />
                        </div></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header

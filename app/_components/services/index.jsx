'use client'
import Image from 'next/image';
import React, { useRef, useEffect } from 'react';
import { GrFormNextLink } from "react-icons/gr";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

const servicesData = [
    {
        title: "Graphic Design",
        subheading: "Designs that speak your brand’s language",
        description: "From logos that tell your brand's story to striking visuals that captivate, our graphic design services blend creativity with strategic insight. Each design is crafted to resonate, leaving an unforgettable impression that truly sets you apart.",
        image: "https://res.cloudinary.com/dz8sirg5s/image/upload/v1730924120/images/efhruwgvapummtbd8qdg.png",
    },
    {
        title: "Web Development",
        subheading: "Building seamless, responsive websites",
        description: "Our website development goes beyond aesthetics—we create immersive digital experiences designed to captivate and engage. We build dynamic, responsive websites that not only look stunning but deliver flawless functionality across any device.",
        image: "https://res.cloudinary.com/dz8sirg5s/image/upload/v1730924116/images/xlifqpnq3argrukmq19u.png"
    },
    {
        title: "Mobile Software Development",
        subheading: "Apps that connect businesses and customers",
        description: "With mobile apps leading the way in user engagement, we develop powerful, user-centric apps that bring your business closer to customers. From concept to launch, our team ensures a smooth, intuitive, and reliable experience.",
        image: "https://res.cloudinary.com/dz8sirg5s/image/upload/v1730924115/images/zlkgducy3rilgpwkpzzm.png"
    },
    {
        title: "Social Media Marketing",
        subheading: "Growing your brand's digital presence",
        description: "In the vast world of social media, we make your brand stand out with targeted strategies that foster engagement and build lasting connections. Our approach turns likes into loyalty, positioning your brand as a trusted digital voice.",
        image: "https://res.cloudinary.com/dz8sirg5s/image/upload/v1730924117/images/fa7tlf01aljzwysjghdm.png"
    },
    {
        title: "Search Engine Optimization",
        subheading: "Maximizing your online visibility",
        description: "We elevate your online presence with expert SEO techniques. From in-depth keyword research to on-page optimization, our team helps you rank higher, attract organic traffic, and connect with the audience actively searching for what you offer.",
        image: "https://res.cloudinary.com/dz8sirg5s/image/upload/v1730924116/images/pkgh4phqtqjiuquz1sls.png"
    },
    {
        title: "Video Animations",
        subheading: "Transforming ideas into captivating visuals",
        description: "Our video animation services turn complex concepts into captivating visuals, delivering your message in a way that’s both entertaining and informative. Through creativity and technical expertise, we bring movement to your ideas, making them unforgettable.",
        image: "https://res.cloudinary.com/dz8sirg5s/image/upload/v1730924117/images/wlbap59dtngii7s9nwsu.png"
    },
    {
        title: "Pay Per Click",
        subheading: "Maximizing Clicks, Minimizing Costs",
        description: "Our PPC campaigns make every dollar count by reaching the right audience at the right time. Our data-driven approach ensures that you not only get more clicks but also maximize ROI, effectively boosting your brand’s visibility.",
        image: "https://res.cloudinary.com/dz8sirg5s/image/upload/v1730924117/images/ohrfbvhehg3x3c74tr5p.png"
    }
];


const ServiceCard = ({ title, description, image, subheading }) => (
    <div className='h-full flex xs:flex-col lg:flex-row xs:space-y-2 lg:space-x-12  xs:items-center'>
        <div className='lg:w-[50%] xs:w-[100%] md:w-[90%] '>
            <div className='flex flex-col justify-center h-full'>
                <h1 className='text-white ml-4 xs:text-[30px] md:text-[38px] lg:text-[33px] font-bold xl:text-[50px]   leading-none'>{title}</h1>
                <p className='text-white ml-4 font-text xs:text-[17px] md:text-[22px] lg:text-[17px] xl:text-xl lg:w-[80%] mt-4'>{description}</p>

            </div>
        </div>
        <div className='w-[90%] xs:block lg:hidden flex-col items-center justify-center'>

            <div className='flex ml-4 mt-4 space-x-2 items-center xs:flex lg:hidden'>
                <h1 className='font-text text-white cursor-pointer hidden'>L E A R N &nbsp; M O R E</h1>
                <div className='bg-[#1B1D21] p-2 rounded-full cursor-pointer hidden'>
                    <GrFormNextLink color='white' />
                </div>
            </div>
            <Image
                className='mx-auto xs:mt-5 lg:mt-0'
                src={image}
                width={300}
                height={300}
                alt={title}
            />
        </div>

        <div className='w-[50%] xs:hidden  xl:hidden 2xl:block flex justify-center items-center'>
            <Image
                className=''
                src={image}
                width={550}
                height={550}
                alt={title}
            />
        </div>
        <div className='w-[50%] xs:hidden lg:hidden xl:block 2xl:hidden flex justify-center items-center'>
            <Image

                src={image}
                width={400}
                height={400}
                alt={title}
            />
        </div>
        <div className='w-[50%] xs:hidden lg:block xl:hidden 2xl:hidden flex justify-center items-center'>
            <Image
                className=''
                src={image}
                width={350}
                height={350}
                alt={title}
            />
        </div>
    </div>
);

const Services = () => {

    return (
        <Swiper
            className="h-full"
            spaceBetween={30} // Space between slides
            loop={true} // Infinite loop
            speed={500}
            autoplay={true} // Auto-play slides
            breakpoints={{
                // On small screens (320px)
                320: {
                    slidesPerView: 1, // Show 1 slide
                },
                // On medium screens (768px)
                768: {
                    slidesPerView: 1.6,
                    centeredSlides: true 
                },
                // On larger screens (1024px)
                1024: {
                    slidesPerView: 1.4, // Show 1.3 slides for larger screens
                    centeredSlides: true, // Center the slides
                },
                1440: {
                    slidesPerView: 1.3, // Show 1.3 slides for larger screens
                    centeredSlides: true,
                }
            }}
        >
            {servicesData.map((service, index) => (
                <SwiperSlide key={index}>
                    <ServiceCard
                        title={service.title}
                        description={service.description}
                        image={service.image}
                        subheading={service.subheading}
                    />
                </SwiperSlide>
            ))}
        </Swiper>

    );
};

export default Services;

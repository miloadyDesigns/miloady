import Image from 'next/image';
import React, { useRef } from 'react';
import { GrFormNextLink, GrFormPreviousLink } from 'react-icons/gr';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Portfolio = ({ data }) => {
    const sliderRef = useRef(null);

    const NextArrow = ({ onClick }) => (
        <div
            className="xs:hidden lg:flex flex justify-center items-center absolute border border-gray-500 w-[80px] -top-16 right-6 z-10 cursor-pointer bg-opacity-80 p-2 rounded-lg"
            onClick={onClick}
        >
            <GrFormNextLink size={24} className="text-white" />
        </div>
    );

    const PrevArrow = ({ onClick }) => (
        <div
            className="xs:hidden lg:flex flex justify-center items-center absolute border border-gray-500 w-[80px] -top-16 right-[120px] z-10 cursor-pointer  bg-opacity-80 p-2 rounded-lg"
            onClick={onClick}
        >
            <GrFormPreviousLink size={24} className="text-white" />
        </div>
    );

    const settings = {
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
        cssEase: "linear",
        swipeToSlide: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="p-2 relative">
            <Slider ref={sliderRef} {...settings}>
                {data.map((iteme, index) => (
                    <div key={index} className="lg:px-4 xs:px-2 rounded-lg">
                        <div className="relative xs:w-[100%] lg:w-[100%] rounded-lg border border-gray-500 xs:h-[30vh] md:h-[40vh]  xl:h-[50vh]">
                            <div className="relative w-full h-full rounded-lg">
                                <div className="absolute inset-0">
                                    <Image
                                        src={iteme.image}
                                        layout="fill"
                                        className="object-contain rounded-lg"
                                        alt="Portfolio Image"
                                    />
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-2 bg-black bg-opacity-60 rounded-b-lg">
                                    <h3 className="text-white xs:text-2xl lg:text-3xl font-poppins font-bold text-center">
                                        {iteme.title}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Portfolio;

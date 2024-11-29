"use client";
import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import InnerCards from "../_components/InnerCards/InnerCards";
import LightStars from "../_components/LightStars/Stars";
import ScrollContext from "@/context/ScrollContext";
import PinInnerProcess from "../_components/CommonSection/PinInnerProcess/PinInnerProcess";
import { FaCheck } from "react-icons/fa";
const serviceImages = [
    "/development/innerPages/ios/iphoneService1.svg",
    "/development/innerPages/ios/iphoneService2.svg",
    "/development/innerPages/ios/iphoneService3.svg",
    "/development/innerPages/ios/iphoneService4.svg",
    "/development/innerPages/ios/iphoneService5.svg",
    "/development/innerPages/ios/iphoneService6.svg",
    "/development/innerPages/ios/iphoneService7.svg",
    "/development/innerPages/ios/iphoneService9.svg"
];
const Page = () => {
    let settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div className="w-screen  relative">
                <LightStars />
                <ScrollContext>
                    <div className="relative z-[10]">


                        <div className="w-[85%] m-auto  mt-[8%]">
                            <h1 className="text-[62px] text-white font-bold w-[50%] leading-none">iPhone App Development Services.</h1>
                            <p className="w-[45%] text-white mt-8 text-[24px]">
                                We build custom iPhone app solutions that boost engagement, brand value, and revenue while delivering experiences that ensure users keep coming back.
                            </p>
                        </div>
                        <div className="relative z-[1]">
                            <img src="/development/innerPages/ios/iosMain.webp" alt="" className="w-full h-full mt-8 " />
                        </div>
                    </div>
                    <div className="w-[85%] m-auto  mt-16">
                        <h1 className="text-[62px] text-white w-[60%]  font-poppins leading-none">Globally trusted iPhone app development company.</h1>
                        <div className=" mt-12 flex gap-12 p-4">
                            <div className="">
                                <h1 className="text-[72px] text-white font-bold p-0 m-0">200+</h1>
                                <p className="text-white text-[42px] p-0 -mt-4">Projects Delivered</p>
                            </div>
                            <div className="">
                                <h1 className="text-[72px] text-white font-bold p-0 m-0">110+</h1>
                                <p className="text-white text-[42px] p-0 -mt-4">Developers & Designers</p>
                            </div>
                            <div className="">
                                <h1 className="text-[72px] text-white font-bold p-0 m-0">15+</h1>
                                <p className="text-white text-[42px] p-0 -mt-4">Years of Experience</p>
                            </div>
                        </div>
                        <div className="mt-16">
                            <h1 className="text-[62px] text-white w-[80%] font-semibold font-sans leading-none">Our full-cycle iPhone app development services.</h1>
                            <div className=" mt-12 flex gap-12 flex-wrap p-4 ">
                                <div className="w-[30%]">
                                    <h1 className="text-[36px] text-white font-roboto p-0 m-0 leading-tight">Mobile Strategy & Consulting</h1>
                                    <p className="text-gray-300 text-[22px] p-0 mt-4 ">Our experts consult you on all aspects of app development, from staying current with market trends to defining your target audience to creating a roadmap for success.</p>
                                </div>
                                <div className="w-[30%]">
                                    <h1 className="text-[36px] text-white font-roboto p-0 m-0 leading-tight">UI/UX Design for iPhone</h1>
                                    <p className="text-gray-300 text-[22px] p-0 mt-4 ">Following Apple’s Human Interface Guidelines is our core priority. This enables us to deliver beautiful, functional designs that are compliant with iPhone’s usability standards.</p>
                                </div>
                                <div className="w-[30%]">
                                    <h1 className="text-[36px] text-white font-roboto p-0 m-0 leading-tight">Custom iPhone Development</h1>
                                    <p className="text-gray-300 text-[22px] p-0 mt-4 ">With a strong focus on the latest technologies. Cubix offers customized iPhone app solutions that enhance your brand values and perfectly align with your business needs.</p>
                                </div>
                                <div className="w-[30%]">
                                    <h1 className="text-[36px] text-white font-roboto p-0 m-0 leading-tight">Platform Migration</h1>
                                    <p className="text-gray-300 text-[22px] p-0 mt-4 ">We transition your app from other platforms to iPhone and ensure it retains its core functionalities while taking advantage of iPhone-specific features.</p>
                                </div>
                                <div className="w-[30%]">
                                    <h1 className="text-[36px] text-white font-roboto p-0 m-0 leading-tight">iPhone Software Testing</h1>
                                    <p className="text-gray-300 text-[22px] p-0 mt-4 ">Our team of QA engineers and testers helps you release bug-free apps with exceptional functionality, usability, and performance testing for a flawless user experience across devices.</p>
                                </div>
                                <div className="w-[30%]">
                                    <h1 className="text-[36px] text-white font-roboto p-0 m-0 leading-tight">Cross-Platform Development</h1>
                                    <p className="text-gray-300 text-[22px] p-0 mt-4 ">We use frameworks like Flutter and React Native to develop quality iPhone apps that provide exceptional UX across different devices, which can reduce development time and costs.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-16 ">
                        <div className="w-[85%] m-auto p-4 ">
                            <h1 className="text-white text-[42px] font-semibold font-poppins">Our iPhone Development Capabilities</h1>
                            <p className="text-white mt-4 text-xl w-[60%]">Developing exceptional experiences for your iPhone users, wherever they are. We specialize in building innovative and engaging applications for diverse iPhone devices and use cases.</p>
                        </div>
                        <div className="mt-4 bg-black ">
                            <div className="">
                                <LightStars />
                            </div>
                            <InnerCards />
                        </div>
                    </div>
                    <div className="relative mt-16">
                        <div className="w-[85%] m-auto p-4 ">
                            <PinInnerProcess />
                        </div>
                    </div>
                    <div className="h-[100vh] w-full ">
                        <div className="w-[85%] m-auto p-4 ">
                            <h1 className="text-[62px] text-white font-bold w-[70%] leading-none">Why Miloady Designs for iPhone Application Development?</h1>
                            <p className="w-[45%] text-white mt-8 text-[24px]">Gain the competitive edge required to meet changing global technology trends and overcome challenges while consistently exceeding customer expectations with our custom iPhone app solutions.</p>
                            <div className="mt-6 w-full flex justify-between">
                                <div>
                                    <div className="flex gap-3 text-white items-center">
                                        <div className="p-2  rounded-full bg-[#70000E]">
                                            <FaCheck size={15} color="white" />
                                        </div>
                                        <h1 className="text-xl font-semibold">15+ Years of industry experience</h1>
                                    </div>
                                    <div className="flex gap-3 text-white items-center mt-4">
                                        <div className="p-2  rounded-full bg-[#70000E]">
                                            <FaCheck size={15} color="white" />
                                        </div>
                                        <h1 className="text-xl font-semibold">300+ Mobile projects for clients worldwide</h1>
                                    </div>
                                    <div className="flex gap-3 text-white items-center mt-4">
                                        <div className="p-2  rounded-full bg-[#70000E]">
                                            <FaCheck size={15} color="white" />
                                        </div>
                                        <h1 className="text-xl font-semibold">Award-winning iphone app expertise</h1>
                                    </div>
                                    <div className="flex gap-3 text-white items-center mt-4">
                                        <div className="p-2  rounded-full bg-[#70000E]">
                                            <FaCheck size={15} color="white" />
                                        </div>
                                        <h1 className="text-xl font-semibold">Agile development methodology</h1>
                                    </div>
                                    <div className="flex gap-3 text-white items-center mt-4">
                                        <div className="p-2  rounded-full bg-[#70000E]">
                                            <FaCheck size={15} color="white" />
                                        </div>
                                        <h1 className="text-xl font-semibold">Compliance and security</h1>
                                    </div>
                                    <div className="flex gap-3 text-white items-center mt-4">
                                        <div className="p-2  rounded-full bg-[#70000E]">
                                            <FaCheck size={15} color="white" />
                                        </div>
                                        <h1 className="text-xl font-semibold">Flexible engagement models</h1>
                                    </div>
                                </div>
                                <div className="w-[40%]  mr-[10%]">
                                    <div className="w-full flex flex-wrap gap-4 justify-center">
                                        {serviceImages.map((src, index) => (
                                            <div key={index} style={{ background: 'radial-gradient(circle , rgb(0, 0, 0) 0%, rgb(64, 64, 64) 90.2%)' }} className={"p-2 rounded-xl  "}>
                                                <img src={src} alt={`Service ${index + 1}`} className="w-[100px] h-[100px]" />
                                            </div>
                                        ))}
                                    </div>

                                </div>
                            </div>
                            <div className="w-[10%] mt-8 rounded-3xl p-3 bg-[#70000E] cursor-pointer">
                                <h1 className="text-center text-white">Let's Discuss</h1>
                            </div>
                        </div>
                    </div>
                </ScrollContext>

            </div >

        </>
    );
};

export default Page;

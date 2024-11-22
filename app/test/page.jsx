import React from 'react';
import './style.css';
import Marquee from 'react-fast-marquee';
import LightStars from '../_components/LightStars/Stars';
import Section1 from '../Sections/Section1';
import Section2 from '../Sections/Section2';
import Section3 from '../Sections/Section3';
import Section4 from '../Sections/Section4';
import Section5 from '../Sections/Section5';
import Footer from '../_components/Footer';
import ScrollContext from '@/context/ScrollContext';
import Section6 from '../Sections/Section6';

const Page = () => {
    return (
        <div className="relative bg-black w-screen">
            <LightStars />
            <div className="relative z-[1]">
                <ScrollContext>

                    <Section1 />
                    <section className="w-[90vw] absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[100]">
                        <div className="w-full bg-black bg-opacity-95 rounded-xl flex">
                            <div className='w-[40%]  flex items-center justify-center'>
                                <h1 className="xs:text-[18px] p-2 lg:text-[42px] text-white font-poppins text-center font-bold uppercase">Our Trusted <br /> <span className=''>Partners</span> </h1>
                            </div>
                            <Marquee gradient={false} speed={100} pauseOnHover={true} className="p-12">
                                <img src={"/partners/icone-1.png"} className="xs:w-[80px] xs:h-[60px] lg:w-[120px] lg:h-[70px] ml-20" />
                                <img src={"/partners/icone-2.png"} className="xs:w-[80px] xs:h-[60px] lg:w-[120px] lg:h-[70px] ml-20" />
                                <img src={"/partners/icone-3.png"} className="xs:w-[80px] xs:h-[60px] lg:w-[120px] lg:h-[70px] ml-20" />
                                <img src={"/partners/icone-4.png"} className="xs:w-[80px] xs:h-[60px] lg:w-[120px] lg:h-[70px] ml-20" />
                                <img src={"/partners/icone-5.png"} className="xs:w-[80px] xs:h-[60px] lg:w-[120px] lg:h-[70px] ml-20" />
                                <img src={"/partners/icone-6.png"} className="xs:w-[80px] xs:h-[60px] lg:w-[120px] lg:h-[70px] ml-20" />
                                <img src={"/partners/icone-7.png"} className="xs:w-[80px] xs:h-[60px] lg:w-[120px] lg:h-[70px] ml-20" />
                                <img src={"/partners/4.png"} className="xs:w-[80px] xs:h-[60px] lg:w-[120px] lg:h-[70px] ml-20 " />
                            </Marquee>
                        </div>
                    </section>
                    <Section2 />
                    <Section3 />
                    <Section4 />
                    <Section5 />
                    <Section6 />
                    <div className='bg-[#0A0A0A]'>
                        <Footer />
                    </div>
                </ScrollContext>
            </div>
        </div>
    );
};

export default Page;

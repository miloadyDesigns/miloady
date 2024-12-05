import React from 'react'
import SideButton from '../SideButton.jsx'
import Testimonials from './index.jsx'
import Slider from 'react-slick';
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import { useGSAP } from "@gsap/react"
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./style.css"
gsap.registerPlugin(gsap, ScrollTrigger)
const TestimonailSection = () => {


    const SampleNextArrow = (props) => {
        const { onClick } = props;
        return (
            <div
                onClick={onClick} className='flex items-center justify-center w-12 h-12 text-white text-2xl absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer z-10 bg-white rounded-full xs:hidden lg:flex'
            >
                <FaAngleRight color='black' />
            </div>
        );
    };

    const SamplePrevArrow = (props) => {
        const { onClick } = props;
        return (
            <div
                onClick={onClick} className='flex items-center justify-center w-12 h-12 text-white text-2xl absolute top-1/2 left-2 transform -translate-y-1/2 cursor-pointer z-10 bg-white rounded-full xs:hidden lg:flex'

            >
                <FaAngleLeft color='black' />
            </div>
        );
    };
    const settings = {
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        initialSlide: 0,
        responsive: [

            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1.06,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '20px', // Adjust for smaller screens
                },
            },
        ],
    };

    return (


        <section className='w-[100vw]  z-[100]' >
            <div className='moving_text_wrap '>
                <div className='moving_text_in'>
                    <div className='moving_text'>CRAFTING EXPERIENCES THAT MATTER.</div>
                    <div className='moving_text'>CRAFTING EXPERIENCES THAT MATTER.</div>
                </div>
            </div>
            <div className=' flex xs:flex-col left-0  z-10 items-center justify-around testimonialSection'>
                <div className="testimonialHead text-white  ml-[8%]  xs:w-[100%] lg:w-[40%] xl:w-[40%]  ">
                    <p className="text-[#999696] font-text pl-2 xs:text-[14px] lg:text-lg mt-2">What Our Clients Say</p>
                    <h1 className="text-while font-pp lg:text-[50px] xl:text-[66px] xs:text-[38px] -mt-2">Our Testimonials</h1>
                    <p className="text-white p-1 lg:hidden font-text xs:text-[14px] lg:text-lg">Discover how our innovations have helped clients across various industries achieve success.
                        Read their stories and see the impact of our work in their own words.</p>
                    {/* <SideButton title={"L&nbsp;&nbsp;E&nbsp;&nbsp;A&nbsp;&nbsp;R&nbsp;&nbsp;N&nbsp;&nbsp;&nbsp;&nbsp;M&nbsp;O&nbsp;R&nbsp;&nbsp;E"} margin={"ml-2"} /> */}
                </div>
                <div className="xs:w-[100%] lg:w-[100%] testimonialSwiper xs:mt-12 lg:mt-6">
                    <Slider {...settings} className='lg:px-12 '>
                        <Testimonials gradient1={"rgba(211, 211, 211, 0)"} gradient2={"rgba(16, 55, 92, 0.8)"} description={"Partnering with Miloady Designs was a fantastic choice for our business. The team understood our goals and provided insights that truly elevated our project. Their work beautifully combined creativity with functionality, which was exactly what we needed. We couldn’t be happier with the results!"} name={"Davia Clements"} designation={"CEO of Kodak Movement"} image={"https://res.cloudinary.com/dz8sirg5s/image/upload/v1730924090/images/ki1w2teuhrvd9hwnmq8x.png"} star={5} />
                        <Testimonials gradient1={"rgba(211, 211, 211, 0)"} gradient2={"rgba(106, 156, 137, 1)"} description={"MLD turned our vision into a reality that exceeded all expectations. Their team has an incredible eye for detail and a deep understanding of design. Every step of the process felt seamless, and they were always there to answer our questions. I’d recommend them to anyone looking for top-notch service and creativity!"} name={"Roy Vollmer"} designation={"CEO of Vollmer Design Studio"} image={"https://res.cloudinary.com/dz8sirg5s/image/upload/v1730924088/images/d0op8byumvnrk47lq12t.png"} star={5} />
                        <Testimonials gradient1={"rgba(211, 211, 211, 0)"} gradient2={"rgba(85, 124, 86, 1)"} description={"The team at Miloady Designs brought so much passion and skill to our project. They didn’t just meet our expectations, they raised the bar. Their responsiveness and dedication were evident from start to finish. We’re beyond pleased with the outcome and can’t wait to work with them again."} name={"Sarah Page"} designation={"CEO of Estero Club"} image={"https://res.cloudinary.com/dz8sirg5s/image/upload/v1730924088/images/woymjb67e6orpa6inze6.png"} star={5} />
                        <Testimonials gradient1={"rgba(211, 211, 211, 0)"} gradient2={"rgba(133, 159, 61, 1)"} description={"Choosing MLD was the best decision we made for our brand's growth. Their designs perfectly captured our style and message, making an immediate impact on our audience. The team's expertise and professionalism shone through in every interaction. We’re excited to see what they’ll create for us next!"} name={"Joseph Kline"} designation={"CEO of Goofy Gaming"} image={"https://res.cloudinary.com/dz8sirg5s/image/upload/v1730924089/images/edwg0ags9781fuoxzoho.png"} star={5} />
                        <Testimonials gradient1={"rgba(211, 211, 211, 0)"} gradient2={"rgba(0, 105, 137, 1)"} description={"Miloady Designs has been instrumental in transforming our business's online presence. Their team took the time to understand our vision and turned it into something even better than we imagined. Their level of detail and commitment is unmatched, and working with them has been a pleasure. Highly recommended!"} name={"Steven McGilloway"} designation={"CEO of Expert Valet"} image={"https://res.cloudinary.com/dz8sirg5s/image/upload/v1730924086/images/gnkyqrij12ihks4tjzax.png"} star={5} />
                        <Testimonials gradient1={"rgba(211, 211, 211, 0)"} gradient2={"rgba(121, 134, 69, 1)"} description={"Partnering with Miloady Designs was a fantastic choice for our business. The team understood our goals and provided insights that truly elevated our project. Their work beautifully combined creativity with functionality, which was exactly what we needed. We couldn’t be happier with the results!"} name={"Davia Clements"} designation={"CEO of Kodak Movement"} image={"https://res.cloudinary.com/dz8sirg5s/image/upload/v1730924088/images/tdxhpikbudtteujduak4.png"} star={5} />
                        <Testimonials gradient1={"rgba(211, 211, 211, 0)"} gradient2={"rgba(106, 156, 137, 1)"} description={"The team at Miloady Designs brought so much passion and skill to our project. They didn’t just meet our expectations, they raised the bar. Their responsiveness and dedication were evident from start to finish. We’re beyond pleased with the outcome and can’t wait to work with them again."} name={"Sarah Page"} designation={"CEO of Estero Club"} image={"https://res.cloudinary.com/dz8sirg5s/image/upload/v1730924088/images/g8zpmxbpxi654jmnwdoj.png"} star={5} />
                    </Slider>
                </div>
            </div>
            {/* <div className='moving_text_wrap '>
                <div className='moving_text_in'>
                    <div className='moving_text'>CRAFTING EXPERIENCES THAT MATTER.</div>
                    <div className='moving_text'>CRAFTING EXPERIENCES THAT MATTER.</div>
                </div>
            </div> */}
        </section>

    )
}

export default TestimonailSection

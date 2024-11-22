'use client'
import React from 'react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer';
import { LoremIpsum } from "react-lorem-ipsum"
const items = [
    { value: "a", title: "First Item", text: <LoremIpsum p={1} /> },
    { value: "b", title: "Second Item", text: <LoremIpsum p={1} /> },
    { value: "c", title: "Third Item", text: <LoremIpsum p={1} /> },
    { value: "d", title: "Fourth Item", text: <LoremIpsum p={1} /> },
    // { value: "e", title: "fifth Item", text: <LoremIpsum p={1} /> },
]
const Section4 = () => {
    const { ref, inView } = useInView({
        threshold: 0.25,
    });

    return (
        <div className='relative z-10 w-screen mt-[5%] pb-[5%] ' ref={ref}>

            <div className="xs:w-[90%] lg:w-[80%] m-auto  overflow-hidden z-10 ">
                <div className='bg-black w-[90%] border border-gray-500 p-4 m-auto rounded-xl'>
                    <div className='text-white'>
                        <h1 className='text-3xl'>Impressive MileStone</h1>
                        <p className='text-[14px] pt-4 text-gray-400'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat alias harum quod ab exercitationem. Praesentium, est mollitia! Nisi, unde magnam eveniet iste, natus voluptas, corrupti illo ullam sequi excepturi velit. Ex quam dolo ribus error soluta beatae enim, accusantium dolores rem placeat corrupti asperiores, sapiente ratione reprehenderit aliquam nihil eum, dolor obcaecati. Cupiditate odit, magnam reiciendis veritatis ratione unde distinctio enim tenetur, omnis nisi eum accusantium iusto, perferendis natus! Quaerat, ullam.
                        </p>
                        <div className='mt-6 flex justify-around flex-wrap pb-4'>
                            <div>
                                <h1 className='text-white xs:text-[42px] lg:text-[52px] font-bold'>
                                    {inView && (
                                        <CountUp
                                            start={0}
                                            end={5}
                                            duration={3}
                                            suffix="K"
                                        />
                                    )} <span className='text-xl text-[#70000E]'>+</span>
                                </h1>
                                <div>
                                    <h2 className='text-lg'>Global clients</h2>
                                </div>
                            </div>
                            <div>
                                <h1 className='text-white xs:text-[42px] lg:text-[52px] font-bold'>
                                    {inView && (
                                        <CountUp
                                            start={0}
                                            end={10}
                                            duration={3}
                                            suffix="K"
                                        />
                                    )} <span className='text-xl text-[#70000E]'>+</span>
                                </h1>
                                <div>
                                    <h2 className='text-lg'>Cooperative Work</h2>
                                </div>
                            </div>
                            <div>
                                <h1 className='text-white xs:text-[42px] lg:text-[52px] font-bold'>
                                    {inView && (
                                        <CountUp
                                            start={0}
                                            end={15}
                                            duration={3}
                                            suffix="K"
                                        />
                                    )} <span className='text-xl text-[#70000E]'>+</span>
                                </h1>
                                <div>
                                    <h2 className='text-lg'>Code Crafted</h2>
                                </div>
                            </div>
                            <div className=''>
                                <h1 className='text-white xs:text-[42px] lg:text-[52px] font-bold'>
                                    {inView && (
                                        <CountUp
                                            start={0}
                                            end={20}
                                            duration={3}
                                            suffix="K"
                                        />
                                    )}<span className='text-xl text-[#70000E]'>&nbsp; +</span>
                                </h1>
                                <div>
                                    <h2 className='text-lg'>Projects Complete</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-[10%] w-full z-10 relative ">

                    <div className='flex xs:flex-col lg:flex-row justify-around'>

                        <div className='xs:w-[100%] lg:w-[45%] '>
                            <div className='ml-3'>
                                <h2 className='font-pp text-[#FBC38E] mb-4 xs:text-sm lg:text-sm xl:text-xl'>G R A P H I C &nbsp; D E S I G N</h2>
                                <h1 className='text-white xs:text-[32px] lg:text-[42px] xl:text-[52px] leading-none font-roboto'>
                                    Our Design Guarantee
                                </h1>
                            </div>
                            <div className='mt-4 ml-3'>
                                <p className='text-white text-lg'>We take pride in delivering exceptional design solutions that exceed your expectations. We are committed to your satisfaction, and our design guarantee reflects our dedication to providing you with high-quality work:</p>
                                <p className='text-white text-lg mt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit corrupti ullam magni, iusto quos quam odio necessitatibus ratione culpa quisquam odit maiores rerum, rem excepturi aliquid modi sequi praesentium enim exercitationem animi amet. Aspernatur quia suscipit voluptatem rem, commodi distinctio eius non cupiditate, aut sit debitis, nisi vero. Dicta, deleniti?</p>
                                {/* <p className='text-white text-lg mt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit corrupti ullam magni, iusto quos quam odio necessitatibus ratione culpa quisquam odit maiores rerum, rem excepturi aliquid modi sequi praesentium enim exercitationem animi amet. Aspernatur quia suscipit voluptatem rem, commodi distinctio eius non cupiditate, aut sit debitis, nisi vero. Dicta, deleniti?</p> */}
                            </div>
                        </div>
                        <div className='xs:w-[100%] lg:w-[45%] h-full  rounded-xl xs:mt-12 lg:mt-0'>
                            <img
                                src="/designPage/our-design.png"
                                alt="Why Choose Us"
                                className="rounded-lg bg-no-repeat m-auto w-full h-full"
                            />
                        </div>
                    </div>


                </div>

            </div>



        </div>
    )
}

export default Section4
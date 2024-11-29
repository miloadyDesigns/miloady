'use client'
import React from 'react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer';
import { LoremIpsum } from "react-lorem-ipsum"
const Section4 = () => {
    const { ref, inView } = useInView({
        threshold: 0.25,
    });

    return (
        <div className='relative z-10 w-screen mt-[5%] pb-[10%] ' ref={ref}>

            <div className="xs:w-[90%] lg:w-[80%] m-auto  overflow-hidden z-10 ">
                <div className='bg-black w-[90%] border border-gray-500 p-4 m-auto rounded-xl'>
                    <div className='text-white'>
                        <h1 className='text-3xl'>Impressive MileStone</h1>
                        <p className='text-[14px] pt-4 text-gray-400'>
                            At Milaody Design, we pride ourselves on achieving key milestones that demonstrate our commitment to excellence. From delivering custom solutions to driving measurable business growth for our clients, each milestone reflects our dedication to quality and innovation. Whether it's launching a successful website, achieving top rankings through SEO, or running high-performing marketing campaigns, we continuously strive to exceed expectations. Our journey is defined by the success stories of our clients, and we are excited to continue reaching new heights together.
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
                                <h2 className='font-pp text-[#bb6d01] mb-4 xs:text-sm lg:text-sm xl:text-xl'>M A R K E T I N G</h2>
                                <h1 className='text-white xs:text-[32px] lg:text-[42px] xl:text-[52px] leading-none font-roboto'>
                                    Transforming Your Marketing Game
                                </h1>
                            </div>
                            <div className='mt-4 ml-3'>
                                <h2 className='text-white font-bold text-2xl'>Transparent Reporting for Measurable Success</h2>
                                <p className='text-white text-lg'>Our commitment to transparency ensures that you are always in the loop. We provide clear and actionable reports that help you understand how your marketing campaigns are performing. By tracking key metrics and analyzing performance data, we offer valuable insights into what’s working and what can be improved. This empowers you to make informed decisions and drive better results with every campaign.</p>
                                <h2 className='text-white font-bold text-2xl mt-4'>Long-Term Strategies for Sustainable Growth</h2>
                                <p className='text-white text-lg'>We don’t believe in quick fixes. Our goal is to build long-term, sustainable growth for your business. By focusing on creating engaging, consistent, and impactful marketing strategies, we help your brand stay top of mind and foster lasting customer relationships. We continuously refine our approach based on feedback, trends, and data to ensure that your business evolves and thrives in an ever-changing digital landscape.</p>
                                {/* <h2 className='text-white font-bold text-2xl mt-4'>Amplifying Your Brand and Fostering Loyalty</h2>
                                <p className='text-white text-lg'>Partner with us to amplify your brand’s presence and establish meaningful connections with your audience. Our marketing strategies are designed to build trust and foster customer loyalty, creating a strong foundation for your brand to grow. By leveraging innovative techniques and personalized campaigns, we ensure that your business stands out and becomes a trusted name in your industry.</p> */}
                                {/* <p className='text-white text-lg mt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit corrupti ullam magni, iusto quos quam odio necessitatibus ratione culpa quisquam odit maiores rerum, rem excepturi aliquid modi sequi praesentium enim exercitationem animi amet. Aspernatur quia suscipit voluptatem rem, commodi distinctio eius non cupiditate, aut sit debitis, nisi vero. Dicta, deleniti?</p> */}
                            </div>
                        </div>
                        <div className='xs:w-[100%] lg:w-[45%] h-full  rounded-xl xs:mt-12 lg:mt-0'>
                            <img
                                src="/marketing/Marketing-f.png"
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
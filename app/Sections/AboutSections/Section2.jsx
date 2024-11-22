import Image from 'next/image'
import React from 'react'

const Section2 = () => {
    return (
        <div className="relative z-[10] w-screen">
            <div className="z-10 pt-[10%]">
                <div className="xs:w-[90%] lg:w-[80%] m-auto h-full overflow-hidden z-10">
                    <div className="flex xs:flex-col-reverse lg:flex-row justify-around h-full items-center xs:mt-12 lg:mt-0">
                        <div className='xs:w-[100%] lg:w-[40%] xl:w-[30%] xs:mt-8 lg:mt-0'>
                            <Image className='m-auto rounded-lg' src={"/about/about-first.jpg"} width={500} height={600} />
                        </div>
                        <div className='xs:w-[100%] lg:w-[50%] xl:w-[50%] p-2'>
                            <h2 className='font-pp text-white mb-4 xs:text-sm lg:text-sm xl:text-xl'>C R E A T I V E &nbsp; I M P A C T</h2>
                            <h1 className='text-white xs:text-[32px] lg:text-[42px] xl:text-[52px] leading-none font-roboto'>
                                Crafting Every Detail with Purpose
                            </h1>
                            <p className='pt-4 xs:text-sm lg:text-[18px] xl:text-lg text-white'>
                                At Miloady Designs, we take your innovative concepts and transform them into vibrant, immersive digital experiences that captivate audiences. Our unique approach combines cutting-edge design, advanced technology, and strategic insight to deliver customized solutions that not only elevate your brand but also foster meaningful connections with your target audience. By paying meticulous attention to every detail, we ensure that each element aligns with your brand’s vision and goals, resulting in impactful narratives that resonate in today’s competitive landscape.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>


    )
}

export default Section2
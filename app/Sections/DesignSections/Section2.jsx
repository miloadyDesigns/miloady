import Cards from '@/app/_components/DesignCards/Cards'
import React from 'react'
const cardData = [
    {
        title: 'Logo Design',
        image: '/designPage/icon/1.png', 
        description: 'We design unique and timeless logos that reflect your brand’s identity and resonate with your audience. Each logo is crafted to be versatile, scalable, and impactful across all platforms. Let us help you create a strong visual foundation for your brand.'
    },
    {
        title: 'Product Design',
        image: '/designPage/icon/2.png',
        description: 'We provide end-to-end product design services that combine innovation with functionality. Our approach ensures every detail aligns with your brand and enhances usability. From concept to completion, we deliver solutions that meet user needs.'
    },
    {
        title: 'UI/UX Design',
        image: '/designPage/icon/3.png',
        description: 'We design intuitive and visually appealing interfaces that enhance user satisfaction and engagement. By focusing on usability and user behavior, we create seamless experiences across web and mobile platforms. Our designs ensure accessibility and functionality at every touchpoint.'
    },
    {
        title: 'Graphic Design',
        image: '/designPage/icon/4.png',
        description: 'Our custom graphics effectively communicate your message through eye-catching visuals. From banners to brochures and social media posts, we create designs that resonate with your audience. Let us bring your ideas to life with creativity and precision.'
    },
    {
        title: 'Brand Identity Design',
        image: '/designPage/icon/5.png',
        description: 'We craft distinctive logos, color palettes, and brand materials that reflect your vision and connect with your audience. Our designs build trust and recognition, setting you apart in a competitive market. From startups to established businesses, we ensure your brand leaves a lasting impression.'
    },
    {
        title: 'Web Design',
        image: '/designPage/icon/6.png',
        description: "We develop responsive and visually stunning websites that capture your brand's essence. Our designs prioritize user experience, mobile compatibility, and performance optimization. Whether it's an e-commerce site or a portfolio, we tailor it to meet your goals."
    }
];
const Section2 = () => {
    return (
        <div className='relative z-10 w-screen mb-12'>
            <div className='z-10 '>
                <div id='section2' className="xs:w-[90%] lg:w-[80%] m-auto  overflow-hidden z-10 ">
                    <div className='p-2'>
                        <h2 className='font-pp text-[#109eeb] mb-4 xs:text-sm lg:text-sm xl:text-xl'>G R A P H I C &nbsp; D E S I G N</h2>
                        <h1 className='text-white xs:text-[32px] lg:text-[42px] xl:text-[52px] leading-none font-roboto'>
                            Our Design Services
                        </h1>
                    </div>
                    <div className='p-2 flex gap-y-12 flex-wrap  justify-around mt-12'>
                        {cardData.map((card, index) => (
                            <Cards key={index} title={card.title} image={card.image} description={card.description} />
                        ))}
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Section2
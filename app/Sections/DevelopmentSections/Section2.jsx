import Cards from '@/app/_components/DesignCards/Cards'
import React from 'react'
const cardData = [
    {
        title: 'Web Development',
        image: '/development/icon/1.png', // Make sure the image path is correct
        description: 'We specialize in creating bespoke websites that are not only visually appealing but also secure, fast, and optimized for performance. Our custom solutions are built with your business objectives in mind, ensuring your website drives results and enhances user engagement. Whether you need a dynamic business site or a complex web application, we deliver tailored, high-quality solutions.'
    },
    {
        title: 'CMS Development',
        image: '/development/icon/2.png',
        description: 'We offer tailored CMS solutions like WordPress, Drupal, and Joomla, simplifying content management and enabling you to update and maintain your site with ease. Our team customizes the CMS to match your specific needs, ensuring it’s intuitive and scalable as your content grows. From blogs to enterprise-level sites, we create flexible and powerful content management systems.'
    },
    {
        title: 'E-commerce Solutions',
        image: '/development/icon/3.png',
        description: 'We build secure, scalable, and easy-to-navigate e-commerce platforms that enhance the online shopping experience. From personalized product recommendations to integrated secure payment gateways, we ensure every aspect of your online store is optimized for conversion and user satisfaction. Our solutions help you build a strong online presence and boost sales growth.'
    },
    {
        title: 'API Integration',
        image: '/development/icon/4.png',
        description: 'Our API integration services streamline your operations by connecting disparate software systems, enabling seamless data flow and enhanced functionality. Whether you need to integrate third-party services or connect internal systems, we ensure smooth, efficient communication between all platforms. This improves efficiency and reduces manual processes, giving your business a competitive edge.'
    },
    {
        title: 'Cloud Solutions',
        image: '/development/icon/5.png',
        description: 'We provide scalable and reliable cloud-based infrastructure that ensures your business remains flexible and efficient, no matter the demand. With our cloud solutions, you get the benefits of seamless data access, enhanced security, and reduced operational costs. We ensure that your business is equipped with the tools to thrive in the cloud, with minimal downtime and maximum performance.'
    },
    {
        title: 'Mobile App Development',
        image: '/development/icon/6.png',
        description: 'We develop feature-rich and responsive mobile applications for both Android and iOS platforms that offer seamless performance and a user-friendly experience. Our team focuses on crafting apps that not only meet your business goals but also deliver exceptional value to your users. With a commitment to innovation, we ensure your app stands out in a competitive market.'
    }
];
const Section2 = () => {
    return (
        <div className='relative z-10 w-screen mb-12'>
            <div className='z-10 '>
                <div className="xs:w-[90%] lg:w-[80%] m-auto  overflow-hidden z-10 ">
                    <div id='section2' className='p-2'>
                        <h2 className='font-pp text-[#ea3133] mb-4 xs:text-sm lg:text-sm xl:text-xl'>D E V E L O P M E N T</h2>
                        <h1 className='text-white xs:text-[32px] lg:text-[42px] xl:text-[52px] leading-none font-roboto'>
                            Our Development Services
                        </h1>
                    </div>
                    <div className='p-2 flex gap-y-12 flex-wrap  justify-around mt-12'>
                        {cardData.map((card, index) => (
                            <Cards title={card.title} image={card.image} description={card.description} />
                        ))}
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Section2
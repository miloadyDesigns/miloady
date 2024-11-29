import Cards from '@/app/_components/DesignCards/Cards'
import React from 'react'
const cardData = [
    {
        title: 'Reputation Management',
        image: '/marketing/icon/1.png', // Make sure the image path is correct
        description: 'We monitor and manage your brand’s online reputation, ensuring that positive feedback is amplified and any negative perceptions are addressed proactively. Our strategies include monitoring reviews, managing customer feedback, and maintaining a positive brand image across social media and review platforms.'
    },
    {
        title: 'Conversion Rate Optimization',
        image: '/marketing/icon/2.png',
        description: 'We help increase the effectiveness of your website by optimizing key elements that drive conversions. Through A/B testing, data analysis, and user feedback, we identify areas for improvement and implement strategies that turn visitors into customers, enhancing the overall user experience and increasing revenue.'
    },
    {
        title: 'Content Marketing',
        image: '/marketing/icon/3.png',
        description: 'We develop high-quality, relevant content that builds brand authority and trust with your audience. From informative blogs to engaging videos and infographics, our content marketing strategy drives user engagement, educates your audience, and nurtures long-term customer relationships, all while aligning with your business goals.'
    },
    {
        title: 'Social Media Marketing',
        image: '/marketing/icon/4.png',
        description: 'We craft personalized strategies to help you build a strong online presence, engage with your target audience, and drive consistent traffic through popular platforms like Facebook, Instagram, LinkedIn, and Twitter. By creating content that resonates with your audience, we ensure your brand stays top of mind and fosters long-lasting relationships.'
    },
    {
        title: 'SEO Services',
        image: '/marketing/icon/5.png',
        description: "Our SEO services are designed to improve your website's visibility, attract organic traffic, and boost search engine rankings. We use the latest SEO techniques, including keyword research, on-page optimization, and backlink building, to enhance your site's searchability and ensure you stay ahead of competitors in search results."
    },
    {
        title: 'Pay-Per-Click',
        image: '/marketing/icon/6.png',
        description: 'We design effective PPC campaigns that target the right audience, maximize visibility, and drive high ROI. By analyzing data and optimizing keywords, we create campaigns that convert, ensuring you get the most out of your advertising budget and generate qualified leads quickly.'
    }
];
const Section2 = () => {
    return (
        <div className='relative z-10 w-screen mb-12'>
            <div className='z-10 '>
                <div className="xs:w-[90%] lg:w-[80%] m-auto  overflow-hidden z-10 ">
                    <div id='section2' className='p-2'>
                        <h2 className='font-pp text-[#bb6d01] mb-4 xs:text-sm lg:text-sm xl:text-xl'>M A R K E T I N G</h2>
                        <h1 className='text-white xs:text-[32px] lg:text-[42px] xl:text-[52px] leading-none font-roboto'>
                            Our Marketing Services
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
import Footer from '@/app/_components/Footer'
import LightStars from '@/app/_components/LightStars/Stars'
import Section1 from '@/app/Sections/InnerPagesSections/Section1'
import Section2 from '@/app/Sections/InnerPagesSections/Section2'
import Section3 from '@/app/Sections/InnerPagesSections/Section3'
import Section4 from '@/app/Sections/InnerPagesSections/Section4'
import Section5 from '@/app/Sections/InnerPagesSections/Section5'
import Section6 from '@/app/Sections/InnerPagesSections/Section6'
import Section7 from '@/app/Sections/InnerPagesSections/Section7'
import ScrollContext from '@/context/ScrollContext'
import React from 'react'
import "./style.css"
const cartData = [
    {
        title: "Pay Per Click (PPC) Management ",
        description:
            "Our experienced PPC team is here to maximize your ad spend to drive targeted traffic. We handle everything from keyword research to bid management to ad design and campaign optimization. Whether you’re running Google ads, Bing ads, or social media campaigns, we make sure you get the most out of every click with strategic PPC services.",
    },
    {
        title: "Keyword Research & Strategy",
        description:
            "Effective campaigns start with the right keywords. Our team conducts comprehensive keyword research to identify the highest converting terms relevant to your specific industry. We focus on high-traffic and long-tail keywords to ensure your ads are reaching the right audience and delivering measurable results.",
    },
    {
        title: "Ad Copy Creation & Optimization",
        description:
            "We create compelling ad copy that resonates with your target audience while driving conversions. Using A/B testing, we optimize and optimize your ads for maximum click-through rate (CTR) and ensure graphics align with your overall brand and messaging goals.",
    },
    {
        title: "Campaign Management & Monitoring",
        description:
            "Our team closely monitors your PPC campaigns, analyzing key metrics like CTR, cost-per-click (CPC), and conversion rates. We adjust bidding, targeting, and budget allocation to ensure your campaigns remain optimized and deliver consistent, measurable results.",
    },
    {
        title: "Remarketing & Retargeting Ads",
        description:
            "Reconnect with potential customers who have previously interacted with your website. Our remarketing strategies target individuals who have expressed an interest in your products or services, encouraging them to complete a repeat purchase or take a desired action.",
    },
    {
        title: "Local PPC Services ",
        description:
            "Increase your local visibility and attract nearby customers with our local PPC services. We optimize ads to show up for geo-targeted search, and make sure you’ve connected with potential customers in your geographic area. Whether you’re targeting a specific city, location, or neighborhood, we increase your presence in local search results.",
    },
    {
        title: "Display Advertising ",
        description:
            "Our display ad campaigns use attractive banners, images and videos to grab your audience’s attention across the web. We strategically place ads on websites that appeal to your target demographic, increase brand awareness and drive higher traffic to your site.",
    },
    {
        title: "Social Media Advertising",
        description:
            "Leverage social platforms like Facebook, Instagram, LinkedIn, and Twitter with our social media PPC services. We create engaging ads tailored to the specific platform, ensuring your message reaches the right audience and encourages interaction, engagement, and conversions.",
    },
    {
        title: "PPC Analytics & Reporting",
        description:
            "Gain clear insight into how your PPC campaign works. We provide consistent reporting that breaks down key metrics, including impressions, clicks, conversions and ROI. Our analytics help you understand how your ads are performing and where they can be improved for better results.",
    },

];
const items = [
    {
        name: "Strategic Planning & Consultation ",
        image: "https://i.pravatar.cc/150?u=a",
        topRated: true,
        num: "01",
        description: "We start by understanding your business objectives, target audience, and current advertising performance. Our experts analyze your market, match your goals, and define a clear campaign that will maximize your return on investment (ROI)."
    },
    {
        name: "Keyword Research & Audience Targeting ",
        image: "https://i.pravatar.cc/150?u=b",
        topRated: false,
        num: "02",
        description: "Our team conducts comprehensive keyword research to identify the most profitable keywords with the least competition. We focus on the right keywords that drive the right traffic, ensuring your ads reach the right audience at the right time."
    },
    {
        name: "Ad Copy Creation & Optimization ",
        image: "https://i.pravatar.cc/150?u=c",
        topRated: false,
        num: "03",
        description: "Our team conducts comprehensive keyword research to identify the most profitable keywords with the least competition. We focus on the right keywords that drive the right traffic, ensuring your ads reach the right audience at the right time."
    },
    {
        name: "Landing Page Optimization ",
        image: "https://i.pravatar.cc/150?u=c",
        topRated: false,
        num: "04",
        description: "We make sure your landing pages are optimized for PPC traffic. With well-designed, fast-navigating, mobile-friendly pages, we improve user experience and increase conversion rates, making every click count."
    },
    {
        name: "Bid Management & Budget Allocation ",
        image: "https://i.pravatar.cc/150?u=b",
        topRated: false,
        num: "05",
        description: "Our team will fine-tune your bid process to ensure you get the best results while staying within your budget. We monitor cost-per-click (CPC) and adjust pricing to focus on high-converting keywords and high-performing campaigns."
    },
    {
        name: "A/B Testing & Campaign Refinement ",
        image: "https://i.pravatar.cc/150?u=b",
        topRated: false,
        num: "06",
        description: "We constantly test advertising variations to find the best performing combinations. A/B testing helps us optimize your campaigns, optimize ad performance, and reduce cost per acquisition (CPA) for better overall results."
    },
    {
        name: "Performance Tracking & Reporting ",
        image: "https://i.pravatar.cc/150?u=b",
        topRated: false,
        num: "07",
        description: "We provide detailed reports on the performance of your PPC campaigns. Our data-driven approach helps us analyze key metrics such as CTR, conversion and ROI, and allows for data-backed decision making to improve campaign effectiveness."
    },
    {
        name: "Continuous Campaign Optimization ",
        image: "https://i.pravatar.cc/150?u=b",
        topRated: false,
        num: "08",
        description: "Our services go beyond planning. We offer continuous flexibility to adapt to changing market trends and changes in consumer behavior. Regular updates and adjustments ensure that your PPC campaigns perform well and deliver long-term returns."
    },
]
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
const teamSlider = [
    {
        img: "/development/innerPages/ios/member_1.jpeg"
    },
    {
        img: "/development/innerPages/ios/member_2.jpeg"
    },
    {
        img: "/development/innerPages/ios/member_3.jpeg"
    },
    {
        img: "/development/innerPages/ios/member_4.jpeg"
    },
    {
        img: "/development/innerPages/ios/member_2.jpeg"
    },
    {
        img: "/development/innerPages/ios/member_1.jpeg"
    },
    {
        img: "/development/innerPages/ios/member_3.jpeg"
    },
    {
        img: "/development/innerPages/ios/member_4.jpeg"
    }

]
const faqsData = [
    {
        name: "What is PPC advertising and how does it work? ",
        image: "https://i.pravatar.cc/150?u=a",
        topRated: true,
        num: "01",
        description: "PPC (Pay Per Click) advertising is a method in which advertisers pay per ad run. Ads appear in search engines, social media platforms, and other areas of the Internet. It’s an effective way to drive targeted traffic to your website, increase sales, and increase brand awareness."
    },
    {
        name: "How do you create a successful PPC campaign? ",
        image: "https://i.pravatar.cc/150?u=b",
        topRated: false,
        num: "02",
        description: "Our team thoroughly analyzes keywords, audience segments, and ads to create PPC campaigns that align with your business objectives. We constantly monitor campaign performance, optimize ad copy, create shopping strategies, and landing pages for optimal results."
    },
    {
        name: "How much should I spend on PPC advertising? ",
        image: "https://i.pravatar.cc/150?u=c",
        topRated: false,
        num: "03",
        description: "Your PPC budget depends on factors such as your industry, target audience, competition, and goals. We help you set the best budget considering your goals and create cost-effective campaigns that maximize your ROI."
    },
    {
        name: "How do you choose the right keywords for PPC campaigns? ",
        image: "https://i.pravatar.cc/150?u=c",
        topRated: false,
        num: "04",
        description: "We use a combination of keyword research tools and industry insights to identify high-performing keywords that balance high search volume with low competition This process ensures that your ads reach audiences if they deserve alongside when it is providing cost-effectiveness."
    },
]
export const metadata = {
    title: "PPC Services for Effective Digital Marketing",
    description:"Boost your brand with Miloady Designs, a full-service design agency offering expert PPC campaigns, web design, & branding solutions!",
    keywords:"affordable PPC services, PPC campaign optimization, pay-per-click management, Google Ads experts, cost-effective PPC solutions, PPC for small businesses"
}   

const Page = () => {
  return (
    <div className='w-screen'>
        <LightStars/>
        <ScrollContext>
            <div>
                <Section1 title={"Pay Per Click (PPC) Advertising Services by Miloady Designs"} description={"At Miloady Designs, we specialize in highly effective Pay Per Click (PPC) campaigns that generate instant traffic and quality leads. Our PPC strategies are tailored to meet the unique needs of your business, and we focus on targeted keywords with low competition in high search volumes to make your advertising budget greater than."} img={"/development/innerPages/ios/iosMain.webp"} />
                <Section2 title={"Globally recognized PPC management company."} subTitle={"Our Comprehensive Digital Marketing Services "} cartData={cartData}/>
                <Section3 title={"Our Expertise in PPC Management"} description={"With Miloady Designs, you will see your ROI increase. Our team uses the latest tools and techniques to effectively target your audience, ensuring your PPC campaigns remain competitive. Whether you are a local business or a global brand, we offer personalized PPC solutions to meet your business objectives."}/>
                <Section4 items={items}/>
                <Section5 title={"Why Miloady Designs for Pay Per Click (PPC) Advertising Services?"} description={"Unlock your business’s growth with Miloady Designs’ expertly crafted PPC advertising services. Our tailored campaigns help you achieve targeted visibility, drive quality traffic, and convert clicks into loyal customers. With precision targeting and data-driven strategies, we ensure that every dollar you invest in PPC maximizes your ROI."} item1={"15+ Years of PPC Advertising Experience"} item2={"500+ Successful Campaigns Across Various Industries "} item3={"Certified PPC Experts with Proven Track Records "} item4={"Advanced Targeting & Keyword Optimization Techniques"} item5={"Continuous Campaign Monitoring & Refinement for Optimal Results"} item6={"Flexible Ad Budget Plans Designed for Your Business Needs"} serviceImages={serviceImages}/>
                <Section6 title={"Elevate Your Brand with Our Comprehensive Digital Marketing Services"} teamSlider={teamSlider}/>
                <Section7 title={"Frequently asked questions"} faqsData={faqsData}/>
                <div className='relative'>
                    <Footer/>
                </div>
            </div>
        </ScrollContext>
    </div>
  )
}

export default Page
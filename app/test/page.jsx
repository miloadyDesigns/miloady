import React from "react";
import LightStars from "../_components/LightStars/Stars";
import ScrollContext from "@/context/ScrollContext";
import "./style.css"
import { Observer } from "gsap/Observer";
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Section1 from "../Sections/InnerPagesSections/Section1";
import Section2 from "../Sections/InnerPagesSections/Section2";
import Section4 from "../Sections/InnerPagesSections/Section4";
import Section3 from "../Sections/InnerPagesSections/Section3";
import Section5 from "../Sections/InnerPagesSections/Section5";
import Section6 from "../Sections/InnerPagesSections/Section6";
import Section7 from "../Sections/InnerPagesSections/Section7";
import Footer from "../_components/Footer";
gsap.registerPlugin(useGSAP, ScrollTrigger, Observer)
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
const slides = [
    {
        price: "$20",
        name: "Special Pizza",
        img: "/development/innerPages/ios/blog1.webp",
        title: "Delicious Pizza",
        description: "A special pizza with a unique blend of flavors. Freshly baked and topped with the finest ingredients for a delightful experience."
    },
    {
        price: "$20",
        name: "Meat Ball",
        img: "/development/innerPages/ios/blog2.webp",
        title: "Tasty Meat Balls",
        description: "Savory meatballs made from premium beef, seasoned to perfection, and served with a rich tomato sauce for a mouth-watering dish."
    },
    {
        price: "$40",
        name: "Burger",
        img: "/development/innerPages/ios/blog3.webp",
        title: "Gourmet Burger",
        description: "A juicy, gourmet burger with the perfect blend of flavors, served with crispy fries on the side. A true indulgence for burger lovers."
    },
    {
        price: "$15",
        name: "Frish Curry",
        img: "/development/innerPages/ios/blog4.webp",
        title: "Fragrant Curry",
        description: "A deliciously spiced curry that’s packed with flavor. Made with fresh ingredients for a rich, aromatic experience."
    },
    {
        price: "$15",
        name: "Pane Cake",
        img: "/development/innerPages/ios/blog5.webp",
        title: "Fluffy Pancakes",
        description: "Light, fluffy pancakes drizzled with syrup and served with fresh fruits on top. A perfect breakfast treat for everyone."
    },
    {
        price: "$20",
        name: "Vanilla Cake",
        img: "/development/innerPages/ios/blog6.webp",
        title: "Creamy Vanilla Cake",
        description: "A rich and creamy vanilla cake with a smooth frosting. The perfect balance of sweetness and texture for every occasion."
    },
    {
        price: "$8",
        name: "Straw Cake",
        img: "/development/innerPages/ios/blog1.webp",
        title: "Strawberry Cake",
        description: "A sweet and tangy strawberry cake topped with fresh berries. Perfect for those who love fruity desserts with a soft and moist texture."
    },
];
const items = [
    {
        name: "Initial Planning & Analysis",
        image: "https://i.pravatar.cc/150?u=a",
        topRated: true,
        num: "01",
        description: "First, we define your objectives, define your audience, and analyze your SEO position. It also enables us to identify opportunities for increasing visibility and consequently align with your goals and aspirations."
    },
    {
        name: "Keyword Research & Competitor Analysis",
        image: "https://i.pravatar.cc/150?u=b",
        topRated: false,
        num: "02",
        description: "Our experts study keyword niches and use mostly low competition keywords with high search volume. We also evaluate our competitors in order to notice their shortcomings and opportunities that will help you to outcompete them."
    },
    {
        name: "On-Page Optimization",
        image: "https://i.pravatar.cc/150?u=c",
        topRated: false,
        num: "03",
        description: "We enhance the layout of your website, meta tags, title tags, and actual content. If properly utilized, it helps search engines index your site correctly as well as enhances their rankings to appropriate keywords."
    },
    {
        name: "Technical SEO Enhancements",
        image: "https://i.pravatar.cc/150?u=c",
        topRated: false,
        num: "04",
        description: "Our team deals with such things as website speed optimization, mobile compatibility, and crawl errors handling. Such optimisations make for a smooth user interaction, and helps to improve your site’s rating in a search engine."
    },
    {
        name: "Content Strategy Development",
        image: "https://i.pravatar.cc/150?u=b",
        topRated: false,
        num: "05",
        description: "We develop and deliver compelling and search engine optimized content for your targeted niche and consumer behavior. In order to perform well in terms of SEO, your content includes blog posts, landing pages, and product descriptions, to name a few."
    },
    {
        name: "Link Building & Outreach",
        image: "https://i.pravatar.cc/150?u=b",
        topRated: false,
        num: "06",
        description: "To increase domain authority we focus on an effective link building, which means that backlinks come from reputable sites in your industry. This improves the trust and also the company’s search engine ranks."
    },
    {
        name: "Performance Monitoring & Reporting",
        image: "https://i.pravatar.cc/150?u=b",
        topRated: false,
        num: "07",
        description: "The position tracking is done using the advanced tools of analytic setting of your web site. We have granular reports that can show ranking, traffic and conversion data so as to make informed changes."
    },
    {
        name: "Post-Optimization Support",
        image: "https://i.pravatar.cc/150?u=b",
        topRated: false,
        num: "08",
        description: "In reality, our services do not end at implementation. It is also stated that we offer constant SEO assistance to our customers which means modifying, being updated and meaning strategies and algorithms forty-eight hours, weeks, and months before searching engines frequently alter their algorithms and methods."
    },
]
const faqsData = [
    {
        name: "What is SEO and why is it important for my business?",
        image: "https://i.pravatar.cc/150?u=a",
        topRated: true,
        num: "01",
        description: "SEO (Search Engine Optimization) is the technique of enhancing the position of your website in search engines. It is important because the higher search rankings boost the quantity and quality of organic traffic through the website, and thus increases the number of leads, sales and brand awareness."
    },
    {
        name: "How long does it take to see results from SEO efforts?",
        image: "https://i.pravatar.cc/150?u=b",
        topRated: false,
        num: "02",
        description: "It is an organic method of marketing so it can take anything from 3-6 months or more depending on your market position. Though they can be marked after 6 to 12 months, sometimes two or three years depending on competition and scale of your website’s optimization."
    },
    {
        name: "Do you offer SEO services for all types of businesses?",
        image: "https://i.pravatar.cc/150?u=c",
        topRated: false,
        num: "03",
        description: "Yes! Our SEO services can be customized to a variety of industries such as e-commerce, local businesses, health niches, real estate, and so on. They are flexible depending on the condition of your business and organization."
    },
    {
        name: "How do you choose keywords for SEO?",
        image: "https://i.pravatar.cc/150?u=c",
        topRated: false,
        num: "04",
        description: "To gather effective keywords, we work with both keyword research tools and complete analysis for your business. We get involved with the basic and competitive keywords but ensure all the content you post ranks high attracting high quality traffic."
    },
]
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
const cartData = [
    {
        title: "Mobile Strategy & Consulting",
        description:
            "Our experts consult you on all aspects of app development, from staying current with market trends to defining your target audience to creating a roadmap for success.",
    },
    {
        title: "UI/UX Design for iPhone",
        description:
            "Following Apple’s Human Interface Guidelines is our core priority. This enables us to deliver beautiful, functional designs that are compliant with iPhone’s usability standards.",
    },
    {
        title: "Custom iPhone Development",
        description:
            "With a strong focus on the latest technologies. Cubix offers customized iPhone app solutions that enhance your brand values and perfectly align with your business needs.",
    },
    {
        title: "Platform Migration",
        description:
            "We transition your app from other platforms to iPhone and ensure it retains its core functionalities while taking advantage of iPhone-specific features.",
    },
    {
        title: "iPhone Software Testing",
        description:
            "Our team of QA engineers and testers helps you release bug-free apps with exceptional functionality, usability, and performance testing for a flawless user experience across devices.",
    },
    {
        title: "Cross-Platform Development",
        description:
            "We use frameworks like Flutter and React Native to develop quality iPhone apps that provide exceptional UX across different devices, which can reduce development time and costs.",
    },
];
export const metadata = {
    title: "IOS App Development"
}
const Page = () => {
   
    return (
        <>
            <div className="w-screen ">
                <LightStars />
                <ScrollContext>
                    <div className="">
                        <Section1 title={"iPhone App Development Services."} description={"We build custom iPhone app solutions that boost engagement, brand value, and revenue while delivering experiences that ensure users keep coming back."} img={"/development/innerPages/ios/iosMain.webp"} />

                        <Section2 title={'Globally trusted iPhone app development company.'} subTitle={'Our full-cycle iPhone app development services.'} cartData={cartData} />
                        <Section3 />
                        <Section4 items={items} />
                        <Section5 title={'Why Miloady Designs for iPhone Application Development?'} description={'Gain the competitive edge required to meet changing global technology trends and overcome challenges while consistently exceeding customer expectations with our custom iPhone app solutions.'} item1={'15+ Years of industry experience'} item2={'300+ Mobile projects for clients worldwide'} item3={'Award-winning iphone app expertise'} item4={'Agile development methodology'} item5={'Compliance and security'} item6={'Flexible engagement models'} serviceImages={serviceImages} />
                        <Section6 title={' Transform your Business with our valuable iPhone Solutions.'} teamSlider={teamSlider} />
                        <Section7 title={'Frequently asked questions'} faqsData={faqsData} />

                        <div className="relative">
                            <Footer />
                        </div>
                    </div>
                </ScrollContext>

            </div >

        </>
    );
};

export default Page;

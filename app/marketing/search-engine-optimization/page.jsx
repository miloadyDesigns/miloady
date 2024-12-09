import LightStars from '@/app/_components/LightStars/Stars'
import Section1 from '@/app/Sections/InnerPagesSections/Section1'
import Section2 from '@/app/Sections/InnerPagesSections/Section2'
import Section3 from '@/app/Sections/InnerPagesSections/Section3'
import Section4 from '@/app/Sections/InnerPagesSections/Section4'
import Section5 from '@/app/Sections/InnerPagesSections/Section5'
import Section6 from '@/app/Sections/InnerPagesSections/Section6'
import ScrollContext from '@/context/ScrollContext'
import React from 'react'
import "./style.css"
import Footer from '@/app/_components/Footer'
import Section7 from '@/app/Sections/InnerPagesSections/Section7'
const cartData = [
    {
        title: "SEO Strategy & Consulting",
        description:
            "Our team supports you from finding relevant keywords for your business to creating effective strategies based on keywords that you have.",
    },
    {
        title: "On-Page Optimization",
        description:
            "We analyse and modify the content and meta tags, headers and internal links for relevance with relation to the search engine algorithms.",
    },
    {
        title: "Off-Page SEO & Link Building",
        description:
            "Improve your website standing with legitimate link building techniques which aim more at getting high quality links either from different relevant websites, or from the same website on different pages.",
    },
    {
        title: "Local SEO Services",
        description:
            "Increase your online prominence or ranking by working on Google My Business, handling your reviews and focusing on localized terms.",
    },
    {
        title: "Technical SEO Audits",
        description:
            "In doing fixations, we have complicated special studies to address problems like page speed, crawl errors, and mobile-responsiveness for your site.",
    },
    {
        title: "E-Commerce SEO",
        description:
            "All neighbor strategies to improve your online store rank on product keywords, improve user experience where online stores are used and increase conversion rates.",
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
        description: "Our team deals with such things as website speed optimization, mobile compatibility, and crawl errors handling. Such optimizations make for a smooth user interaction, and helps to improve your site’s rating in a search engine."
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
        description: "The timeline depends on the complexity and length of the animation. Typically, a 1-2 minute whiteboard animation can take 2-3 weeks from scripting to final delivery. We ensure timely updates and adjustments during the process."
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
export const metadata = {
    title: "Search Engine Optimization Services",
    description:"Miloady Designs offers expert SEO services to boost your online presence and drive more traffic to your website. Get started today!",
    keywords:"affordable SEO services, local SEO experts, SEO for small businesses, beginner SEO tips, on-page SEO strategies, SEO for websites, SEO marketing solutions, SEO optimization for beginners, effective SEO techniques, SEO content writing"
}
const Page = () => {
    return (
        <div className='w-screen'>
            <LightStars />
            <ScrollContext>
                <div>
                    <Section1 title={"Search Engine Optimization (SEO) Services by Miloady Designs"} description={"We then recommend specific SEO solutions that will help to increase visitation, rankings, and visibility organically to ensure an increased market with measurable results for your business."} img={"/development/innerPages/ios/iosMain.webp"} />
                    <Section2 title={"Globally recognized SEO services company."} subTitle={"Our Comprehensive SEO Services"} cartData={cartData} />
                    <Section3 title={"Partner with Miloady Designs for SEO services that deliver exceptional results."} description={"Begin your path to rank enhancements and page views with Miloady Designs. Just get in touch with us and find out how we can meet your business objectives with a set of uniquely tailored SEO solutions."} />
                    <Section4 items={items} />
                    <Section5 title={"Why Miloady Designs for Search Engine Optimization (SEO) Services?"} description={"Unlock your organization’s success in the modern world with Miloady Designs’ bespoke SEO solutions that yield tangible outcomes. Our knowledge helps to position your website on the various search engines, drive quality traffic and ultimately the traffic will turn into your business clientele."} item1={"15+ Years of SEO Industry Experience"} item2={"500+ Successful Campaigns Across Diverse Industries"} item3={"Certified SEO Specialists with Award-Winning Expertise"} item4={"Proven White-Hat Techniques for Long-Term Success"} item5={"Comprehensive Keyword Research & Analysis"} item6={"Flexible Engagement Models Tailored to Your Business Needs"} serviceImages={serviceImages} />
                    <Section6 title={"Transform your Business with our Powerful SEO Solutions"} teamSlider={teamSlider} />
                    <Section7 title={"Frequently asked questions"} faqsData={faqsData} />
                    <div className='relative'>
                        <Footer />
                    </div>
                </div>
            </ScrollContext>
        </div>
    )
}

export default Page
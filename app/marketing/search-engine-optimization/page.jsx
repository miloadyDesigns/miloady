import React from "react";
// import InnerCards from "../_components/InnerCards/InnerCards";
import InnerCards from "@/app/_components/InnerCards/InnerCards";
import LightStars from "@/app/_components/LightStars/Stars";
import ScrollContext from "@/context/ScrollContext";
import PinInnerProcess from "@/app/_components/CommonSection/PinInnerProcess/PinInnerProcess";
import { FaCheck } from "react-icons/fa";
import "./style.css"
// import ProcessSection from "../_components/Process";
// import Footer from "../_components/Footer";
import ProcessSection from "@/app/_components/Process";
import Footer from "@/app/_components/Footer";
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
export const metadata = {
    title: "Search Engine Optimization"
}
const page = () => {
    return (
        <div className="w-screen ">
            <LightStars />
            <ScrollContext>
                <div className="">
                    <div className="relative z-[10] ">
                        <div className="w-[85%] m-auto  mt-[8%] ">
                            <h1 className="text-[62px] text-white font-bold w-[70%] leading-none">Search Engine Optimization (SEO) Services by Miloady Designs</h1>
                            <p className="w-[45%] text-white mt-8 text-[24px]">
                                We then recommend specific SEO solutions that will help to increase visitation, rankings, and visibility organically to ensure an increased market with measurable results for your business.
                            </p>
                        </div>
                        <div className="relative z-[1]">
                            <img src="/development/innerPages/ios/iosMain.webp" alt="" className="w-full h-full mt-8 " />
                        </div>
                    </div>
                    <div className="w-[85%] m-auto  mt-16 relative">
                        <h1 className="text-[62px] text-white w-[60%]  font-poppins leading-none">Globally recognized SEO services company.</h1>
                        <div className=" mt-12 flex gap-12 p-4">
                            <div className="">
                                <h1 className="text-[72px] text-white font-bold p-0 m-0">200+</h1>
                                <p className="text-white text-[42px] p-0 -mt-4">Projects Delivered</p>
                            </div>
                            <div className="">
                                <h1 className="text-[72px] text-white font-bold p-0 m-0">110+</h1>
                                <p className="text-white text-[42px] p-0 -mt-4">Developers & Designers</p>
                            </div>
                            <div className="">
                                <h1 className="text-[72px] text-white font-bold p-0 m-0">15+</h1>
                                <p className="text-white text-[42px] p-0 -mt-4">Years of Experience</p>
                            </div>
                        </div>
                        <div className="mt-16 z-[10]">
                            <h1 className="text-[62px] text-white w-[80%] font-semibold font-sans leading-none">Our Comprehensive SEO Services</h1>
                            <div className=" mt-12 flex gap-12 flex-wrap p-4 ">
                                <div className="w-[30%]">
                                    <h1 className="text-[36px] text-white font-roboto p-0 m-0 leading-tight">SEO Strategy & Consulting</h1>
                                    <p className="text-gray-300 text-[22px] p-0 mt-4 ">Our team supports you from finding relevant keywords for your business to creating effective strategies based on keywords that you have.</p>
                                </div>
                                <div className="w-[30%]">
                                    <h1 className="text-[36px] text-white font-roboto p-0 m-0 leading-tight">On-Page Optimization</h1>
                                    <p className="text-gray-300 text-[22px] p-0 mt-4 ">We analyze and modify the content and meta tags, headers and internal links for relevance with relation to the search engine algorithms.</p>
                                </div>
                                <div className="w-[30%]">
                                    <h1 className="text-[36px] text-white font-roboto p-0 m-0 leading-tight">Off-Page SEO & Link Building</h1>
                                    <p className="text-gray-300 text-[22px] p-0 mt-4 ">Improve your website standing with legitimate link building techniques which aim more at getting high quality links either from different relevant websites, or from the same website on different pages.</p>
                                </div>
                                <div className="w-[30%]">
                                    <h1 className="text-[36px] text-white font-roboto p-0 m-0 leading-tight">Local SEO Services</h1>
                                    <p className="text-gray-300 text-[22px] p-0 mt-4 ">Increase your online prominence or ranking by working on Google My Business, handling your reviews and focusing on localized terms.</p>
                                </div>
                                <div className="w-[30%]">
                                    <h1 className="text-[36px] text-white font-roboto p-0 m-0 leading-tight">Technical SEO Audits</h1>
                                    <p className="text-gray-300 text-[22px] p-0 mt-4 ">In doing fixations, we have complicated special studies to address problems like page speed, crawl errors, and mobile-responsiveness for your site.</p>
                                </div>
                                <div className="w-[30%]">
                                    <h1 className="text-[36px] text-white font-roboto p-0 m-0 leading-tight">Content Marketing & SEO</h1>
                                    <p className="text-gray-300 text-[22px] p-0 mt-4 ">Power your brand today and start creating useful, relevant content that will attract people’s attention and increase website traffic, while at the same time increasing your search engine rankings.</p>
                                </div>
                                <div className="w-[30%]">
                                    <h1 className="text-[36px] text-white font-roboto p-0 m-0 leading-tight">E-Commerce SEO</h1>
                                    <p className="text-gray-300 text-[22px] p-0 mt-4 ">All neighbor strategies to improve your online store rank on product keywords, improve user experience where online stores are used and increase conversion rates.</p>
                                </div>
                                <div className="w-[30%]">
                                    <h1 className="text-[36px] text-white font-roboto p-0 m-0 leading-tight">SEO Analytics & Reporting</h1>
                                    <p className="text-gray-300 text-[22px] p-0 mt-4 ">The audience can get daily, weekly or monthly updates showing traffic increase and decrease, the performance of the keywords used and any other parameters that gauges the success of Search engine optimization campaigns.</p>
                                </div>
                                <div className="w-[30%]">
                                    <h1 className="text-[36px] text-white font-roboto p-0 m-0 leading-tight">Our SEO Expertise</h1>
                                    <p className="text-gray-300 text-[22px] p-0 mt-4 ">Make your online profile look better with Miloady Designs. The new tools and techniques are used to target your audience whether it is national or international. Our team helps you to rank on top of the search results.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-16 relative">
                        <div className="w-[85%] m-auto p-4 ">
                            <h1 className="text-white text-[42px] font-semibold font-poppins w-[80%]">Partner with Miloady Designs for SEO services that deliver exceptional results.</h1>
                            <p className="text-white mt-4 text-xl w-[60%]">Begin your path to rank enhancements and page views with Miloady Designs. Just get in touch with us and find out how we can meet your business objectives with a set of uniquely tailored SEO solutions.</p>
                        </div>
                        <div className="mt-16">
                            <InnerCards />
                        </div>
                    </div>
                    <div className="relative mt-16">
                        <div className="w-[85%] m-auto p-4 ">
                            <PinInnerProcess items={items} />
                        </div>
                    </div>
                    <div className="w-full relative ">
                        <div className="w-[85%] m-auto p-4">
                            <h1 className="text-[62px] text-white font-bold w-[70%] leading-none">Why Miloady Designs for Search Engine Optimization (SEO) Services?</h1>
                            <p className="w-[60%] text-white mt-8 text-[24px]">Unlock your organization’s success in the modern world with Miloady Designs’ bespoke SEO solutions that yield tangible outcomes. Our knowledge helps to position your website on the various search engines, drive quality traffic and ultimately the traffic will turn into your business clientele.</p>
                            <div className="mt-6 w-full flex justify-between">
                                <div>
                                    <div className="flex gap-3 text-white items-center">
                                        <div className="p-2  rounded-full bg-[#70000E]">
                                            <FaCheck size={15} color="white" />
                                        </div>
                                        <h1 className="text-xl font-semibold">15+ Years of SEO Industry Experience</h1>
                                    </div>
                                    <div className="flex gap-3 text-white items-center mt-4">
                                        <div className="p-2  rounded-full bg-[#70000E]">
                                            <FaCheck size={15} color="white" />
                                        </div>
                                        <h1 className="text-xl font-semibold">500+ Successful Campaigns Across Diverse Industries</h1>
                                    </div>
                                    <div className="flex gap-3 text-white items-center mt-4">
                                        <div className="p-2  rounded-full bg-[#70000E]">
                                            <FaCheck size={15} color="white" />
                                        </div>
                                        <h1 className="text-xl font-semibold">Certified SEO Specialists with Award-Winning Expertise</h1>
                                    </div>
                                    <div className="flex gap-3 text-white items-center mt-4">
                                        <div className="p-2  rounded-full bg-[#70000E]">
                                            <FaCheck size={15} color="white" />
                                        </div>
                                        <h1 className="text-xl font-semibold">Proven White-Hat Techniques for Long-Term Success</h1>
                                    </div>
                                    <div className="flex gap-3 text-white items-center mt-4">
                                        <div className="p-2  rounded-full bg-[#70000E]">
                                            <FaCheck size={15} color="white" />
                                        </div>
                                        <h1 className="text-xl font-semibold">Comprehensive Keyword Research & Analysis</h1>
                                    </div>
                                    <div className="flex gap-3 text-white items-center mt-4">
                                        <div className="p-2  rounded-full bg-[#70000E]">
                                            <FaCheck size={15} color="white" />
                                        </div>
                                        <h1 className="text-xl font-semibold">Flexible Engagement Models Tailored to Your Business Needs</h1>
                                    </div>
                                </div>
                                <div className="w-[40%]  mr-[10%]">
                                    <div className="w-full flex flex-wrap gap-4 justify-center">
                                        {serviceImages.map((src, index) => (
                                            <div key={index} style={{ background: 'radial-gradient(circle , rgb(0, 0, 0) 0%, rgb(64, 64, 64) 90.2%)' }} className={"p-2 rounded-xl  "}>
                                                <img src={src} alt={`Service ${index + 1}`} className="w-[100px] h-[100px]" />
                                            </div>
                                        ))}
                                    </div>

                                </div>
                            </div>
                            <div className="w-[10%] mt-8 rounded-3xl p-3 bg-[#70000E] cursor-pointer">
                                <h1 className="text-center text-white">Let's Discuss</h1>
                            </div>
                        </div>
                    </div>
                    <div className="w-screen relative">
                        <div className="w-[80%]  m-auto mt-16 h-full flex justify-center items-center">
                            {/* Left Content */}
                            <div className="w-[60%]">
                                <h1 className="text-white text-[42px] font-poppins font-bold w-[80%]">
                                    Transform your Business with our Powerful SEO Solutions.
                                </h1>
                                <button class="consultationButton type1 mt-4">
                                    <span class="btn-txt">Request Consultation</span>
                                </button>

                            </div>

                            {/* Right Image */}
                            <div >
                                <img
                                    src="/development/innerPages/ios/Dark_Guy.webp"
                                    alt="iPhone Solutions"
                                    className="w-[500px] h-auto"  // Changed to h-auto to keep the image aspect ratio
                                />
                            </div>
                        </div>
                    </div>
                    <div className="m-auto  w-[80%] mb-[5%] relative">
                        <div className="mt-16">
                            <h1 className="text-[42px] text-white text-center font-bold">Frequently asked questions</h1>
                            <div className="mt-4">
                                <ProcessSection faqsData={faqsData} />
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <Footer />
                    </div>
                </div>
            </ScrollContext>

        </div >
    )
}

export default page
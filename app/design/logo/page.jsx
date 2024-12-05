'use client'
import React from "react";
import InnerCards from "@/app/_components/InnerCards/InnerCards";
import LightStars from "@/app/_components/LightStars/Stars";
import ScrollContext from "@/context/ScrollContext";
import PinInnerProcess from "@/app/_components/CommonSection/PinInnerProcess/PinInnerProcess";
import { FaCheck } from "react-icons/fa";
import "./style.css"
import ProcessSection from "@/app/_components/Process";
import Footer from "@/app/_components/Footer";
import gsap  from  "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP,ScrollTrigger)
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
        name: "Discovery & Conceptualization",
        image: "https://i.pravatar.cc/150?u=a",
        topRated: true,
        num: "01",
        description: "Our process starts with the analysis of information about your brand, its values, and the audience you address. The competitive analysis and intense market research provide the necessary input for developing the best brand’s logo."
    },
    {
        name: "Creative Brainstorming",
        image: "https://i.pravatar.cc/150?u=b",
        topRated: false,
        num: "02",
        description: "With our design team, we all brainstorm, draw concepts and produce mood boards that best suit your idea. To achieve this, we guarantee that the logo design is trendy but not representative of the current generation’s temporary preferences."
    },
    {
        name: "Initial Drafts",
        image: "https://i.pravatar.cc/150?u=c",
        topRated: false,
        num: "03",
        description: "Several logo sketches are created because various design styles are employed on each conceptual mock-up. These concepts are provided to you, giving several possibilities corresponding with the options oriented on your branding and choice."
    },
    {
        name: "Feedback & Refinement",
        image: "https://i.pravatar.cc/150?u=c",
        topRated: false,
        num: "04",
        description: "Afterwards, from your input we fine tune the selected logo concept as we make minor adjustments to some areas such as even the typography, color and layout to make it as close to your vision as possible."
    },
    {
        name: "Design Finalization",
        image: "https://i.pravatar.cc/150?u=b",
        topRated: false,
        num: "05",
        description: "Once we arrive at the final stage of the layout, we refine the work right down to the last pixel, optimizing its functionality for scalability, across both print and digital mediums."
    },
    {
        name: "File Delivery",
        image: "https://i.pravatar.cc/150?u=b",
        topRated: false,
        num: "06",
        description: "We provide the logo files in the last format necessary such as PNG, SVG, EPS or PDF for direct use on all touch points such as website, flyers, business cards among others."
    },
    {
        name: "Post-Design Support",
        image: "https://i.pravatar.cc/150?u=b",
        topRated: false,
        num: "07",
        description: "It doesn’t start and end with the shipment of products either. We advise on the acceptable use of logos, revise your logo where necessary and help in the insertion of logos into other related branding products."
    },

]
const faqsData = [
    {
        name: "Does your team create logos for all business types?",
        image: "https://i.pravatar.cc/150?u=a",
        topRated: true,
        num: "01",
        description: "Indeed, our company focuses mainly on the creation of logos that fit organizations across technology, fashion, retail, and other industries. Each logo design that we bring to the table is customized to the specifications that you set for your brand."
    },
    {
        name: "What are the benefits of hiring a professional logo design agency?",
        image: "https://i.pravatar.cc/150?u=b",
        topRated: false,
        num: "02",
        description: "It is for this reason that when one hires the services of an agency or a company, one gets to have a good, distinctive, and unique logo that reflects one’s company’s values. It is cheap and increases the stumbling visibility of your brand, helping to build trust and leave your audience with a defining image of your brand."
    },
    {
        name: "How much does logo design typically cost?",
        image: "https://i.pravatar.cc/150?u=c",
        topRated: false,
        num: "03",
        description: "Logo design costs are not fixed since each logo design project may be complex or require a large scope. We have a provision of packages to cater for the client’s budget and needs. We offer customized quotes depending on the needs of your business venture. Please do get in touch with us for the most appropriate quote for you."
    },
    {
        name: "Do you provide revisions and ongoing support after logo delivery?",
        image: "https://i.pravatar.cc/150?u=c",
        topRated: false,
        num: "04",
        description: "Absolutely! Number of revisions is unlimited within the first design phase and we guarantee the entire satisfaction of our clients. In addition to services provided during the delivery of logos, we remain available to service any future changes or branding."
    },
]
// export const metadata = {
//     title: "Search Engine Optimization"
// }
const page = () => {
    return (
        <div className="w-screen ">
            <LightStars />
            <ScrollContext>
                <div className="">
                    <div className="relative z-[10] ">
                        <div className="w-[85%] m-auto  mt-[8%] ">
                            <h1 className="text-[62px] text-white font-bold w-[70%] leading-none">Logo Design Services</h1>
                            <p className="w-[45%] text-white mt-8 text-[24px]">
                                Our logo design services result in the improvement of brand image while offering brand credibility and capturing the attention of your customers to ensure your business stands out.
                            </p>
                        </div>
                        <div className="relative z-[1]">
                            <img src="/development/innerPages/ios/iosMain.webp" alt="" className="w-full h-full mt-8 " />
                        </div>
                    </div>
                    <div className="w-[85%] m-auto  mt-16 relative">
                        <h1 className="text-[62px] text-white w-[60%]  font-poppins leading-none">Globally Trusted Logo Design Company</h1>
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
                            <h1 className="text-[62px] text-white w-[80%] font-semibold font-sans leading-none">Our Comprehensive Logo Design Services</h1>
                            <div className=" mt-12 flex gap-12 flex-wrap p-4 ">
                                <div className="w-[30%]">
                                    <h1 className="text-[36px] text-white font-roboto p-0 m-0 leading-tight">Logo Strategy & Brand Consultation</h1>
                                    <p className="text-gray-300 text-[22px] p-0 mt-4 ">Our specialists take time to study your brand, target market, and what it is you wish to achieve. We help plan a course of action for developing a logo that will align to your vision and create a unique brand recall.</p>
                                </div>
                                <div className="w-[30%]">
                                    <h1 className="text-[36px] text-white font-roboto p-0 m-0 leading-tight">Custom Logo Design</h1>
                                    <p className="text-gray-300 text-[22px] p-0 mt-4 ">On logo designs, we provide customized logos that answer the individuality of your business or company. Our designers combine innovation with designing skills and logo production to increase brand appeal to your target demographic population.</p>
                                </div>
                                <div className="w-[30%]">
                                    <h1 className="text-[36px] text-white font-roboto p-0 m-0 leading-tight">Iconography & Typography Development</h1>
                                    <p className="text-gray-300 text-[22px] p-0 mt-4 ">Choosing the correct typeface, designing little icons, are just the tip of the iceberg; our team makes certain each aspect of your logos reflects your core values.</p>
                                </div>
                                <div className="w-[30%]">
                                    <h1 className="text-[36px] text-white font-roboto p-0 m-0 leading-tight">Logo Redesign & Modernization</h1>
                                    <p className="text-gray-300 text-[22px] p-0 mt-4 ">Breathe new life into your brand identity with a logo redesign. We preserve the essence of your existing logo while introducing modern aesthetics to keep it relevant and impactful.</p>
                                </div>
                                <div className="w-[30%]">
                                    <h1 className="text-[36px] text-white font-roboto p-0 m-0 leading-tight">Versatile Logo Formats</h1>
                                    <p className="text-gray-300 text-[22px] p-0 mt-4 ">Our logos are designed to work just as well in print, web, and merchandise applications. As such, we don’t compromise on formats when delivering a project; we maintain high-quality, scalable formats to sustain the applications’ quality anywhere.</p>
                                </div>
                                <div className="w-[30%]">
                                    <h1 className="text-[36px] text-white font-roboto p-0 m-0 leading-tight">Brand Style Guide Creation</h1>
                                    <p className="text-gray-300 text-[22px] p-0 mt-4 ">We do not only offer you a logo, but rather complete brand guidelines that explain how to apply your logo, colors, and typography correctly in your brand identity.</p>
                                </div>
                                <div className="w-[30%]">
                                    <h1 className="text-[36px] text-white font-roboto p-0 m-0 leading-tight">Logo Animation</h1>
                                    <p className="text-gray-300 text-[22px] p-0 mt-4 ">Let’s take your branding game to the next level with animated logos. We make creative and compelling animations that transform your work into a modern and professional presentation.</p>
                                </div>
                                <div className="w-[30%]">
                                    <h1 className="text-[36px] text-white font-roboto p-0 m-0 leading-tight">Our Logo Design Expertise</h1>
                                    <p className="text-gray-300 text-[22px] p-0 mt-4 ">We pride ourselves in being specialists in branding and logo design to give your brand a commanding image. If you want a simple chic style or large and loud style or somewhere in the middle then we assure you we have the best that you can get.</p>
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
                            <h1 className="text-white text-[42px] font-semibold font-poppins w-[80%]">Logo Design Services</h1>
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
                            <h1 className="text-[62px] text-white font-bold w-[70%] leading-none">Why Miloady Designs for Logo Design Services?</h1>
                            <p className="w-[60%] text-white mt-8 text-[24px]">Design an outstanding brand image accompanied by professional logos for your business and specific target markets. Our professional staff guarantees your logo represents your business vision, is unique within the industry, and creates enduring and memorable memories.</p>
                            <div className="mt-6 w-full flex justify-between">
                                <div>
                                    <div className="flex gap-3 text-white items-center">
                                        <div className="p-2  rounded-full bg-[#70000E]">
                                            <FaCheck size={15} color="white" />
                                        </div>
                                        <h1 className="text-xl font-semibold">15+ Years of Industry Experience</h1>
                                    </div>
                                    <div className="flex gap-3 text-white items-center mt-4">
                                        <div className="p-2  rounded-full bg-[#70000E]">
                                            <FaCheck size={15} color="white" />
                                        </div>
                                        <h1 className="text-xl font-semibold">500+ Logos Designed for Clients Worldwide</h1>
                                    </div>
                                    <div className="flex gap-3 text-white items-center mt-4">
                                        <div className="p-2  rounded-full bg-[#70000E]">
                                            <FaCheck size={15} color="white" />
                                        </div>
                                        <h1 className="text-xl font-semibold">Award-Winning Graphic Design Team</h1>
                                    </div>
                                    <div className="flex gap-3 text-white items-center mt-4">
                                        <div className="p-2  rounded-full bg-[#70000E]">
                                            <FaCheck size={15} color="white" />
                                        </div>
                                        <h1 className="text-xl font-semibold">Creative and Strategic Design Approach</h1>
                                    </div>
                                    <div className="flex gap-3 text-white items-center mt-4">
                                        <div className="p-2  rounded-full bg-[#70000E]">
                                            <FaCheck size={15} color="white" />
                                        </div>
                                        <h1 className="text-xl font-semibold">	Brand Consistency and Versatility</h1>
                                    </div>
                                    <div className="flex gap-3 text-white items-center mt-4">
                                        <div className="p-2  rounded-full bg-[#70000E]">
                                            <FaCheck size={15} color="white" />
                                        </div>
                                        <h1 className="text-xl font-semibold">Flexible Engagement Models</h1>
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
                                <h1 className="text-center text-white">Lets Discuss</h1>
                            </div>
                        </div>
                    </div>
                    <div className="w-screen relative">
                        <div className="w-[80%]  m-auto mt-16 h-full flex justify-center items-center">
                            {/* Left Content */}
                            <div className="w-[60%]">
                                <h1 className="text-white text-[42px] font-poppins font-bold w-[80%]">
                                    Transform Your Brand with Our Expert Logo Design Services
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
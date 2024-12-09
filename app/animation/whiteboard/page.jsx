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
        title: "Custom Whiteboard Animation Design",
        description:
            "Communicate complicated concepts effectively and convincingly using our specific whiteboard animations services. Our concepts are as captivating as they are comprehensive to fit in and grab the attention of your intended audience.",
    },
    {
        title: "Storyboarding & Scriptwriting",
        description:
            "Set the fundamentals of conveying significant whiteboard presentations by making good storyboarding and scripting. Our skilled creative department comes up with appropriate scripts and visual designs based on the brand’s voice.",
    },
    {
        title: "Interactive Whiteboard Videos",
        description:
            "Enhance the interest raised by viewers to interactive whiteboard videos. Incorporating interactive elements from links to the tracks’ webs, we make elements that help the spectators become active performers rather than observers.",
    },
    {
        title: "Corporate Training & E-Learning Modules",
        description:
            "Educate employees, partners and customers through effective whiteboard animations for corporate and e-learning. We design and develop content in modules that would help a person to understand what is happening much easier, using graphics that are easy to comprehend",
    },
    {
        title: "Marketing & Explainer Videos",
        description:
            "Increase your brand awareness and marketing solutions with outstanding explainer videos. The whiteboard animations that we create demystify complex ideas to demonstrate its applicability while still appealing to your audience.",
    },
    {
        title: "Customization for Branding",
        description:
            "Make sure that the whiteboard animations you are using are in tune with your brand. We also ensure that your branding colors, logos and/ or any other message that you want passed across are integrated into all the projects carried out.",
    },
];
const items = [
    {
        name: "Concept Development & Storyboarding",
        image: "https://i.pravatar.cc/150?u=a",
        topRated: true,
        num: "01",
        description: "Firstly, let’s grasp the overall strategic and tactical objectives, target audiences and key messages of your brand. At Reliance, we work closely with you to come up with a conceptualization and a shoot script that meets your goals and vision for each shot."
    },
    {
        name: "Custom Scriptwriting",
        image: "https://i.pravatar.cc/150?u=b",
        topRated: false,
        num: "02",
        description: "The preparation of a good animation is the foundation of every successful moving picture. In our custom scripts the expertise of our copywriters is evident, and it is guaranteed that the writing will be precise, unambiguous and persuasive so that your message is communicated appropriately and you achieve your desired impact on your audience."
    },
    {
        name: "Visual Design & Character Creation",
        image: "https://i.pravatar.cc/150?u=c",
        topRated: false,
        num: "03",
        description: "Our designs produce great looking illustrations, characters and graphics that you and your brand embody. Every aspect of the animation is unique, and this guarantees your animation services will be unique and closely modeled to your brand."
    },
    {
        name: "Animation & Motion Graphics",
        image: "https://i.pravatar.cc/150?u=c",
        topRated: false,
        num: "04",
        description: "To finalize your storyboard, the provided animation tools and technologies are used by our team. We use smart and slick animated transitions, interesting graphical designs and pleasing effects that help to maintain the audience's attention."
    },
    {
        name: "Voiceover & Sound Integration",
        image: "https://i.pravatar.cc/150?u=b",
        topRated: false,
        num: "05",
        description: "On the speaking side, we collaborate with talented and experienced voiceovers to offer clean, precise voice-overs to the films. Alongside the correct use of sound effects accompanying and background music, your viewers shall be impressed."
    },
    {
        name: "A/B Testing for Engagement Optimization",
        image: "https://i.pravatar.cc/150?u=b",
        topRated: false,
        num: "06",
        description: "Our A/B testing includes assessment of various styles of animation, tones, and call to actions we intend to incorporate. This brings out what works well with the targeted audience in order to elicit a high level of engagement and conversion."
    },
    {
        name: "Publishing & Distribution Support",
        image: "https://i.pravatar.cc/150?u=b",
        topRated: false,
        num: "07",
        description: "We help you to properly post your animation on social media, immediately, on your website or powerpoint presentation to gain as much attention as possible."
    },
    {
        name: "Performance Analysis & Refinement",
        image: "https://i.pravatar.cc/150?u=b",
        topRated: false,
        num: "08",
        description: "This thought process doesn’t end when a product is delivered. To optimize your animations, we offer a detailed analysis which will give you the measurement of its efficiency. We apply the integral analytics based on the frequencies of engagement, the demographics of the viewers, and other main insights to adapt the content for further interaction."
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
        name: "What is whiteboard animation, and why is it effective?",
        image: "https://i.pravatar.cc/150?u=a",
        topRated: true,
        num: "01",
        description: "Whiteboard animation is a visual storytelling technique where hand-drawn illustrations are animated to explain concepts in a simple and engaging way. It’s effective because it combines visual appeal with clear communication, making it easier for audiences to understand and remember your message."
    },
    {
        name: "How long does it take to create a whiteboard animation?",
        image: "https://i.pravatar.cc/150?u=b",
        topRated: false,
        num: "02",
        description: "The timeline depends on the complexity and length of the animation. Typically, a 1-2 minute whiteboard animation can take 2-3 weeks from scripting to final delivery. We ensure timely updates and adjustments during the process."
    },
    {
        name: "Can whiteboard animation work for my industry?",
        image: "https://i.pravatar.cc/150?u=c",
        topRated: false,
        num: "03",
        description: "Absolutely! Whiteboard animations are easily customizable and can be used across sectors such as education, healthcare, marketing and technology start-ups. Whether it is presenting a product, conducting training of employees or selling your idea, we always get our animations tailored to your needs."
    },
    {
        name: "What makes your whiteboard animations stand out?",
        image: "https://i.pravatar.cc/150?u=c",
        topRated: false,
        num: "04",
        description: "That is why we pay special attention to individual approach to your brand, selection of voice over to match your target audience, as well as tight and engaging animation. We adopt a strategic approach to our animations which means your animation will lead to that desired action."
    },
]
export const metadata = {
    title: "Whiteboard Animation Services Get Yours Now!",
    description:"Miloady Designs offers professional whiteboard animation services to bring your ideas to life with engaging, creative visuals."
}
const Page = () => {
    return (
        <>
            <div className='w-screen'>
                <LightStars />
                <ScrollContext>
                    <div>
                        <Section1 title={"Whiteboard Animation Services by Miloady Design"} description={"Welcome to Miloady Design – where we visualize your stories, and specialize in whiteboard animation. My team focuses on crafting great storytelling animated videos that would effectively explain complicated information to the viewers. Our whiteboard videos can be used to describe a product, present an idea, or deliver a training session and will be easily comprehended and retained."} img={"/development/innerPages/ios/iosMain.webp"} />
                        <Section2 title={"Globally Recognized Whiteboard Animation Services Company"} subTitle={"Our Comprehensive Whiteboard Services"} cartData={cartData} />
                        <Section3 title={"Partner with Miiloady for Impactful Whiteboard Animations."} description={"What if you could turn your ideas into stimulating whiteboard animations that command your viewer’s attention and convey your message? Contact us today to learn how we can assist you in the design of animations that enhance your business’s visibility."} />
                        <Section4 items={items} />
                        <Section5 title={"Why Choose miloady for Whiteboard Animation Services"} description={"Discover how with miloady professional whiteboard animation services, your ideas are unique, entice your audience, make your concepts easily understandable and enhance the spirit of your target audience. Our bespoke animations are primarily meant to help you get your point across whether you are a businessman, an educator, a marketer among others."} item1={"10+ Years of Whiteboard Animation Expertise"} item2={"300+ Engaging Animations Delivered Across Diverse Industries"} item3={"Award-Winning Creative Designers & Animators"} item4={"Custom Storyboarding for Targeted Messaging"} item5={"High-Quality Visuals with Professional Voiceovers"} item6={"Affordable Pricing for Premium-Quality Animations"} serviceImages={serviceImages} />
                        <Section6 title={' Transform Your Vision with Our Whiteboard Animation Services'} teamSlider={teamSlider} />
                        <Section7 title={"Frequently asked questions"} faqsData={faqsData} />
                        <div className="relative">
                            <Footer />
                        </div>
                    </div>
                </ScrollContext>
            </div>
        </>
    )
}

export default Page
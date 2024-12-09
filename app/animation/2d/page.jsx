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
    title: "Concept Development & Strategy",
    description:
      "Our voyage starts with the understanding of the organizational objectives and the communication intended. We work together with you to create a concept for your animation project that conforms to your ideas. In every scene, we make sure to translate all the elements, always remembering that the target is to develop something attractive to the audience but also is lined up with the brand guidelines.",
  },
  {
    title: "Scriptwriting & Storyboarding",
    description:
      "Our gifted script writers collaborate with you to epic, engaging stories. After the script has been written and approved, we can provide you with well developed illustrations that describe the flow and scenes of your animation. This is important so as to make sure your message gets through and that every scene created is in tune with what you want to achieve.",
  },
  {
    title: "Custom Design & Animation",
    description:
      "Our experienced designers produce illustrations, characters and scenes of your choice in accordance with your company’s style. Our animations have no jitters; they are fluid to make the audience focus and maintain their attention on the video until the end.",
  },
  {
    title: "Voiceover & Sound Design",
    description:
      "For boosting the emotionality of your animation we provide voice over and sound design services. To ensure that text is not only read clearly and fairly, but also with the desired tone variable, we make sure that the roles of both audio and visuals are taken into account.",
  },
  {
    title: "High-Quality Motion Graphics",
    description:
      "Originally, we focused on adding movement to your 2D animation to make it even more appealing. We make sure that your animation is eye-grabbing and that it smoothly moves from one phase to another so that people get hooked into your animation and get your message across to them fully.",
  },
  {
    title: "Optimization for Multiple Platforms",
    description:
      "Regardless if you are posting the animation on social networks, your site, or via paid advertisements, we adjust the final video for the array of channels and gadgets. We guarantee that your animation looks as good as possible regardless of the size of the screen or the format that is used.",
  },
];
const items = [
  {
    name: "Initial Concept Development & Storyboarding",
    image: "https://i.pravatar.cc/150?u=a",
    topRated: true,
    num: "01",
    description: "We base our process on identifying your and your audience’s goals and requirements. They work with you to create a unique idea and turn it into a script to give you an idea of how the animation will look. This helps all frames fit within the content of your brand message and be appealing to your viewers."
  },
  {
    name: "Customized Animation Design",
    image: "https://i.pravatar.cc/150?u=b",
    topRated: false,
    num: "02",
    description: "Animated design services are provided based on your company’s unique identity by our animation specialists. The animation is therefore made very unique by use of healthy and attractive colors, movements, and different transitions that make sure that your targeted animation is not only attractive but also passes your intended message to the fans."
  },
  {
    name: "Scripting & Voiceover Integration",
    image: "https://i.pravatar.cc/150?u=c",
    topRated: false,
    num: "03",
    description: "We provide your audience with catchy scripts that create interest and leave the message as simple yet profound as possible. We also offer a professional service to source voice overs that fit the voice and personality of your brand and make it as professional as possible."
  },
  {
    name: "Animation Production & Rendering",
    image: "https://i.pravatar.cc/150?u=c",
    topRated: false,
    num: "04",
    description: "We employ the best animation software on the market and create flawless, smoothly animated video. When it comes to animation, we pay attention to time and space, so the animation looks good and captures the viewer’s eye."
  },
  {
    name: "Optimization for Multiple Platforms",
    image: "https://i.pravatar.cc/150?u=b",
    topRated: false,
    num: "05",
    description: "To boost our 2D animations for your business, we guarantee you adaptability to social media platforms, websites, and email marketing. When it comes to Instagram stories and changing size, or when our videos should download quickly on the website, we pay close attention to the animation performance."
  },
  {
    name: "A/B Testing & Optimization",
    image: "https://i.pravatar.cc/150?u=b",
    topRated: false,
    num: "06",
    description: "This way we compare different versions of animations so that you can know the one that is most relevant to your target group of users. Since we are able to disassemble the animation into its components we get better control over color, timing and message in order to ensure that the viewer is captured, interested and then persuaded to buy the product."
  },
  {
    name: "Analytics & Performance Tracking",
    image: "https://i.pravatar.cc/150?u=b",
    topRated: false,
    num: "07",
    description: "This way we compare different versions of animations so that you can know the one that is most relevant to your target group of users. Since we are able to disassemble the animation into its components we get better control over color, timing and message in order to ensure that the viewer is captured, interested and then persuaded to buy the product."
  },
  {
    name: "Ongoing Support & Creative Updates",
    image: "https://i.pravatar.cc/150?u=b",
    topRated: false,
    num: "08",
    description: "Animation tendencies and technologies cannot stay still and should not be your content too. We give you help and always update your animations from time to time to make your work continue to capture the audience. Our team is always prepared to tweak and maximize your animations to fit the demands and insights of clients or viewers."
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
    name: "What are 2D Video Animations and why are they important for my business?",
    image: "https://i.pravatar.cc/150?u=a",
    topRated: true,
    num: "01",
    description: "2D video animations are animated videos that are made using two-dimensional images commonly employing motion graphics characters, and illustrations. Business organisations benefit from this tool because they are an efficient way of passing a complicated message in a simpler, more catchy manner due to the ability of 2D animations to capture the audience’s attention, improve on the storytelling aspect of brands, and engage the audiences on social media platforms, as well as on websites. Whether you are describing your product, showing everyone your service, or simply sharing your brand story, 2D animations can be useful in making everything clearer and more memorable."
  },
  {
    name: "How long does it take to see results from 2D video animation campaigns?",
    image: "https://i.pravatar.cc/150?u=b",
    topRated: false,
    num: "02",
    description: "Depending on some factors like, the aim of the 2D video animation campaigns and how it is shared, the time of expectation may slightly vary. In general, you can count on an instant response, particularly on popular social networks where videos receive a higher share rating. However, it may take a few weeks, a few months to achieve long-term goals, for instance, brand awareness, conversions and so on depending on the way the marketing strategy is used with the help of the video. Frequency of performance and update of contents can also be effective in the long run."
  },
  {
    name: "Do you offer 2D video animation services for all types of businesses?",
    image: "https://i.pravatar.cc/150?u=c",
    topRated: false,
    num: "03",
    description: "Yes, our 2D video animation services are available for any business type and in any industry. Whether you have a small start up or you are a big company, or a non-profit organization, we develop tailored animations that are informative and in line with your products and goals. Whether for high-tech businesses or schools, our designers create images that convey your ideas and grab the attention of your audience."
  },
  {
    name: "How do you create effective 2D video animations?",
    image: "https://i.pravatar.cc/150?u=c",
    topRated: false,
    num: "04",
    description: "When it comes to producing a 2D video animation, the first step is always to determine why and for whom you are producing it. After understanding your branding voice and standards we undertake research to establish the ideal idea for the game. Our team is concentrated on the elements of interesting designs, elaborate deep lines, friendly and cute characters, and, finally, smooth changes. In this one we address issues to do with color schemes, typography, and music that correspond with your brand personality. Moreover, we align the animation in a way that it is compatible with mobile devices since most people watch content on their mobile screens. Once a video is made, we employ A/B testing and performance reports to optimize the subsequent animations."
  },
]
export const metadata = {
  title: "2D Animation",
  description:"Miloady Designs offers expert 2D animation services to bring your ideas to life with creativity, precision, and engaging visuals."
}
const Page = () => {
  return (
    <div className='w-screen'>
      <LightStars />
      <ScrollContext>
        <div>
          <Section1 title={"2D Animation Services by Miloady Designs"} description={"Create your visualization at Miloady Designs, where we successfully translate your ideas and designs into brilliant 2D animation. Through using aesthetical and narrative techniques, and technical expertise as a team, we provide in our animations value-added general enhancements that place your brand above others."} img={"/development/innerPages/ios/iosMain.webp"} />
          <Section2 title={"Globally Recognized 2D Animation Services Company"} subTitle={"Partner with Miloady Designs for Stunning 2D Video Animations."} cartData={cartData} />
          <Section3 title={"Choose Miloady design to take Your Business to Another Level through Captivating 2D Animations."} description={"Allow us to enhance the understanding of your audiences through high impact animations that act as a call to action. Get in touch with us now to know how our 2D video animations will improve the effectiveness of your marketing strategies and increase brand appeal."} />
          <Section4 items={items} />
          <Section5 title={"Why Miloady Designs for 2D Video Animation Services?"} description={"Step up the game and engage your viewers with Miloady Designs’ business 2D video animation. Whether your business requires a funny explainer video, a striking commercial, or product demonstration, we provide excellent animation with an appeal catering to all. Our company has years of experience in animation, therefore we make sure your message gets the visibility it deserves by grabbing the attention of the intended audience."} item1={"15+ Years of 2D Animation Expertise"} item2={"500+ Successful Animation Projects Across Diverse Industries"} item3={"Certified Animation Professionals with Proven Success"} item4={"Custom Animations Crafted for Maximum Audience Impact"} item5={"Engaging and Story-Driven Content for Greater Viewer Retention"} item6={"Full Transparency with Detailed Reporting on Animation Performance"} serviceImages={serviceImages} />
          <Section6 title={"Transform Your Business with Strategic Email Marketing Services"} teamSlider={teamSlider} />
          <Section7 title={"Frequently asked questions"} faqsData={faqsData} />
          <div className="relative">
            <Footer />
          </div>
        </div>
      </ScrollContext>
    </div>
  )
}

export default Page
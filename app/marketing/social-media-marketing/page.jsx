import Footer from '@/app/_components/Footer';
import LightStars from '@/app/_components/LightStars/Stars'
import Section1 from '@/app/Sections/InnerPagesSections/Section1'
import Section2 from '@/app/Sections/InnerPagesSections/Section2'
import Section3 from '@/app/Sections/InnerPagesSections/Section3';
import Section4 from '@/app/Sections/InnerPagesSections/Section4';
import Section5 from '@/app/Sections/InnerPagesSections/Section5';
import Section6 from '@/app/Sections/InnerPagesSections/Section6';
import Section7 from '@/app/Sections/InnerPagesSections/Section7';
import React from 'react'
import "./style.css"
const cartData = [
  {
    title: "Social Media Strategy & Consulting",
    description:
      "Our expert team guides you through everything from choosing the best social media platforms for your business to developing reporting strategies that align with your target audience. We focus on increasing your brand visibility and engagement, while optimizing measurable results.",
  },
  {
    title: "Social Media Management",
    description:
      "We manage your social media profiles on a daily basis, including scheduling posts, communicating with your followers, ensuring consistent branding across all platforms Our team transforms your content calendar to keep it relevant and enhance user interaction.",
  },
  {
    title: "Content Creation & Design",
    description:
      "Use high-quality content that isn’t used in your audience. From eye-catching graphics to engaging videos, our creative team crafts content that engages your followers and drives traffic. We make sure your content matches the voice of your brand and engages your audience.",
  },
  {
    title: "Paid Social Advertising",
    description:
      "Increase your reach with well-planned paid social media campaigns. Whether you’re targeting brand awareness, lead generation, or conversion, we help create custom ads that reach the right people at the right time, all while staying within your budget.",
  },
  {
    title: "Community Management",
    description:
      "Foster a loyal community around your brand. Our team actively engages with your followers, answers questions and builds meaningful relationships with your audience. By understanding their needs, we help increase brand loyalty and satisfaction.",
  },
  {
    title: "Influencer Marketing",
    description:
      "Grow your brand by harnessing the power of influencers. We help identify and partner with influencers that align with your brand values to increase exposure, credibility and trust within your target market.",
  },
  {
    title: "Social Media Analytics & Reporting",
    description:
      "Provide in-depth analysis and performance reporting. We track key metrics like engagement, growth and conversion rates to give you actionable insights. Our reporting helps you adjust your schedule and ensure your campaigns are always running.",
  },
  {
    title: "Our Social Media Marketing Expertise",
    description:
      "Enhance your brand presence with Miloady Designs. Our team is committed to growing your social media profile and building a strong online community that delivers results. From organic engagement to paid campaigns, we use creative strategies to make your social media strategy a success.",
  },
  {
    title: "Social Media Reputation Management",
    description:
      "Protect and enhance your brand’s online reputation with our comprehensive social media reputation management services. We monitor your social media channels for comments, respond to customer inquiries, and proactively address any inaccuracies or reviews. Our goal is to maintain a quality and credible online service that builds customer loyalty and attracts new customers.",
  },
];
const items = [
  {
    name: "Social Media Strategy & Planning",
    image: "https://i.pravatar.cc/150?u=a",
    topRated: true,
    num: "01",
    description: "Our team begins by understanding your business goals and target audience. We craft a tailored social media strategy that aligns with your brand values, ensuring a strategic approach that resonates with your audience. We also analyze your current social media presence to identify growth opportunities and refine your overall social media strategy."
  },
  {
    name: "Audience Research & Competitor Analysis",
    image: "https://i.pravatar.cc/150?u=b",
    topRated: false,
    num: "02",
    description: "We conduct in-depth analysis of your audience demographics, behaviors and preferences. By analyzing your competitors’ social media channels, we identify differences and opportunities to differentiate your brand. This helps us create a unique position of engagement and converts followers into loyal customers."
  },
  {
    name: "Content Creation & Optimization",
    image: "https://i.pravatar.cc/150?u=c",
    topRated: false,
    num: "03",
    description: "Our experts create engaging, high-quality content optimized for any social media platform. Whether it’s catchy graphics, animations, or video, we make sure the content resonates with your audience and drives traffic to your website. We use SEO-friendly hashtags and keywords to increase discoverability and engagement."
  },
  {
    name: "Social Media Ads Campaigns",
    image: "https://i.pravatar.cc/150?u=c",
    topRated: false,
    num: "04",
    description: "We design and manage high-performing paid advertising campaigns on platforms such as Facebook, Instagram and LinkedIn. Using carefully selected low-competition keywords, we ensure your ads reach the right audience, driving higher engagement and conversions. Regular A/B testing helps us optimize campaigns for maximum ROI."
  },
  {
    name: "Community Engagement & Management",
    image: "https://i.pravatar.cc/150?u=b",
    topRated: false,
    num: "05",
    description: "Connecting with your audience is essential to having a strong social media presence. Our team actively monitors comments, messaging and promotions to foster a loyal community around your brand. We respond to customer inquiries quickly and logically, and create a pleasant environment that reinforces your online reputation."
  },
  {
    name: "Influencer Marketing & Outreach",
    image: "https://i.pravatar.cc/150?u=b",
    topRated: false,
    num: "06",
    description: "We help you partner with the right influencers who align with your brand’s ethos. Our influencer marketing strategy includes finding influencers with high engagement rates and genuine connections with your target audience. This increases your brand’s credibility, expands reach, and drives conversions."
  },
  {
    name: "Analytics & Performance Reporting",
    image: "https://i.pravatar.cc/150?u=b",
    topRated: false,
    num: "07",
    description: "We monitor and analyze your social media performance with advanced analytics tools. Regular reporting helps us track key metrics like engagement rates, follower growth, and ROI. We use these insights to fine-tune strategies and continuously improve your social media presence for the best results."
  },
  {
    name: "Ongoing Campaign Optimization",
    image: "https://i.pravatar.cc/150?u=b",
    topRated: false,
    num: "08",
    description: "Social media changes, and so do we. Our team provides continuous optimization to accommodate platform algorithm changes, audience behavior changes and emerging features. We regularly update and optimize your social media campaigns to keep them fresh, relevant and effective."
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
    name: "What is Social Media Marketing, and why is it important for my business?",
    image: "https://i.pravatar.cc/150?u=a",
    topRated: true,
    num: "01",
    description: "Social Media Marketing (SMM) is using social media platforms to promote and grow your business. By using these platforms, companies can connect with their target audience, increase brand awareness and drive traffic to their website. This is important as it helps build brand loyalty, increase engagement and monitor real-time feedback."
  },
  {
    name: "How long does it take to see results from Social Media Marketing efforts?",
    image: "https://i.pravatar.cc/150?u=b",
    topRated: false,
    num: "02",
    description: "The timeline for seeing results from social media advertising and marketing varies depending on factors consisting of your enterprise, target market, and the platforms you use. Generally, you could start seeing significant engagement and increase inside 3 to six months. However, the process of building a loyal following and optimizing campaigns for conversions takes non-stop attempts."
  },
  {
    name: "Do you offer Social Media Marketing services for all types of businesses?",
    image: "https://i.pravatar.cc/150?u=c",
    topRated: false,
    num: "03",
    description: "Yeah! Whether you are a small local business, a growing startup, or an established company, we offer customized social media marketing services tailored to your business needs. We specialize in developing strategies for ecommerce, service-based businesses and personal brands to ensure every client gets the best ROI from their social media presence."
  },
  {
    name: "How do you choose which social media platforms to focus on for my business?",
    image: "https://i.pravatar.cc/150?u=c",
    topRated: false,
    num: "04",
    description: "Our team conducts in-depth analysis of your target audience, business objectives and industry trends. Based on this, we choose the most effective platforms for your brand. Whether it's Facebook for community engagement, Instagram for visual storytelling, B2B networking or LinkedIn, we ensure your business is where your potential customers are most active."
  },
]
export const metadata = {
  title: "Social Media Marketing",
  description: "Miloady Designs offers expert social media marketing services to help your brand grow and engage with your audience effectively.",
  keywords: "social media marketing, social media services, digital marketing, social media strategy, online brand management, social media campaigns, content marketing, social media growth, brand engagement, social media advertising"

}
const Page = () => {
  return (
    <div className='w-screen'>
      <LightStars />
      <div>
        <Section1 title={"Social Media Marketing Services by Miloady Designs"} description={"At Miloady Designs, we develop customized Social Media Marketing strategies to increase your brand’s presence across all platforms. Our approach focuses on creating engaging content, building strong community relationships, and driving targeted traffic to your website. Using advanced techniques in audience targeting, analytics and content optimization, we help you connect with your audience and turn engagement into tangible results."} img={"/development/innerPages/ios/iosMain.webp"} />
        <Section2 title={"Top-Rated Social Media Marketing Services for Business Growth"} subTitle={"Our Comprehensive Social Media Marketing Services"} cartData={cartData} />
        <Section3 title={"Partner with Miloady Designs for Social Media Marketing that Delivers Results"} description={"Ready to take your social media game to the next level? Contact us to find out how we can help you grow your brand and achieve your business goals with customized social media marketing solutions."} />
        <Section4 items={items} />
        <Section5 title={"Why Miloady Designs for Social Media Marketing Services?"} description={"Elevate your brand presence with Social Media Marketing (SMM) strategies tailored to Miloady Designs and engage with your audience in real time. We specialize in impactful campaigns that drive results, increase brand awareness and build lasting relationships with your target audience."} item1={"15+ Years of Social Media Expertise"} item2={"500+ Successful Campaigns for Brands Across Various Niches"} item3={"Certified Social Media Marketing Experts with Proven Success"} item4={"Data-Driven Approach for Targeted Social Media Growth"} item5={"Custom Social Media Strategies to Align with Your Goals"} item6={"Analytics-Driven Solutions for Continuous Optimization"} serviceImages={serviceImages} />
        <Section6 title={"Boost Your Brand's Growth with Our Impactful Social Media Strategies."} teamSlider={teamSlider} />
        <Section7 title={"Frequently asked questions"} faqsData={faqsData} />
        <div className="relative">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Page
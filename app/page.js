"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import Marquee from "react-fast-marquee";
import { useHeaderVisibility } from "@/context/HeaderVisibilityProvider ";
import ScrollContext from "@/context/ScrollContext";
import Section1 from "./Sections/Section1";
import Section2 from "./Sections/Section2";
import Section3 from "./Sections/Section3";
import Section4 from "./Sections/Section4";
import Section5 from "./Sections/Section5";
import Section6 from "./Sections/Section6";
import LightStars from "./_components/LightStars/Stars";
import Footer from "./_components/Footer";
import CommonSections from "./Sections/CommonSections/CommonSections";
import PinSection from "./_components/CommonSection/PinSection/PinSection";
gsap.registerPlugin(ScrollTrigger, useGSAP);

const techData = [
  { imgSrc: "/development/innerPages/ios/tech1.svg", name: "Swift", tech: "Mobile Apps", niche: "iOS" },
  { imgSrc: "/development/innerPages/ios/tech2.svg", name: "RxSwift", tech: "Mobile Apps", niche: "iOS" },
  { imgSrc: "/development/innerPages/ios/tech3.svg", name: "Combine", tech: "Mobile Apps", niche: "iOS" },
  { imgSrc: "/development/innerPages/ios/tech4.svg", name: "MVVM", tech: "Mobile Apps", niche: "iOS" },
  { imgSrc: "/development/innerPages/ios/tech5.svg", name: "Alomofire", tech: "Mobile Apps", niche: "iOS" },
  { imgSrc: "/development/innerPages/ios/tech6.svg", name: "Kotlin", tech: "Mobile Apps", niche: "Android" },
  { imgSrc: "/development/innerPages/ios/tech7.svg", name: "Java", tech: "Mobile Apps", niche: "Android" },
  { imgSrc: "/development/innerPages/ios/tech8.svg", name: "Retrofit", tech: "Mobile Apps", niche: "Android" },
  { imgSrc: "/development/innerPages/ios/tech9.svg", name: "Jetpack", tech: "Mobile Apps", niche: "Android" },
  { imgSrc: "/development/innerPages/ios/tech4.svg", name: "MVVM", tech: "Mobile Apps", niche: "Android" },
  { imgSrc: "/development/innerPages/ios/tech11.svg", name: "Native", tech: "Mobile Apps", niche: "Hybird" },
  { imgSrc: "/development/innerPages/ios/tech12.svg", name: "Flutter", tech: "Mobile Apps", niche: "Hybird" },
  { imgSrc: "/development/innerPages/ios/tech13.svg", name: "React Js", tech: "Web Apps", niche: "Frontend" },
  { imgSrc: "/development/innerPages/ios/tech14.svg", name: "Next js", tech: "Web Apps", niche: "Frontend" },
  { imgSrc: "/development/innerPages/ios/tech15.svg", name: "Angular", tech: "Web Apps", niche: "Frontend" },
  { imgSrc: "/development/innerPages/ios/tech16.svg", name: "Vue", tech: "Web Apps", niche: "Frontend" },
  { imgSrc: "/development/innerPages/ios/tech18.svg", name: "Typescript", tech: "Web Apps", niche: "Frontend" },
  { imgSrc: "/development/innerPages/ios/tech19.svg", name: "Html5", tech: "Web Apps", niche: "Frontend" },
  { imgSrc: "/development/innerPages/ios/tech20.svg", name: "CSS", tech: "Web Apps", niche: "Frontend" },
  { imgSrc: "/development/innerPages/ios/tech21.svg", name: "Javascript", tech: "Web Apps", niche: "Frontend" },
  { imgSrc: "/development/innerPages/ios/tech23.svg", name: "GraphQL", tech: "Web Apps", niche: "Frontend" },
  { imgSrc: "/development/innerPages/ios/tech24.svg", name: "Apolio", tech: "Web Apps", niche: "Frontend" },
  { imgSrc: "/development/innerPages/ios/tech25.svg", name: "MaterialUI", tech: "Web Apps", niche: "Frontend" },
  { imgSrc: "/development/innerPages/ios/tech26.svg", name: "Rest API", tech: "Web Apps", niche: "Frontend" },
  { imgSrc: "/development/innerPages/ios/tech27.svg", name: "Node Js", tech: "Web Apps", niche: "Backend" },
  { imgSrc: "/development/innerPages/ios/tech28.svg", name: "Python", tech: "Web Apps", niche: "Backend" },
  { imgSrc: "/development/innerPages/ios/tech29.svg", name: "Scala", tech: "Web Apps", niche: "Backend" },
  { imgSrc: "/development/innerPages/ios/tech30.svg", name: "Java", tech: "Web Apps", niche: "Backend" },
  { imgSrc: "/development/innerPages/ios/tech31.svg", name: "Spring", tech: "Web Apps", niche: "Backend" },
  { imgSrc: "/development/innerPages/ios/tech32.svg", name: "Wordpress", tech: "Web Apps", niche: "CMS" },
  { imgSrc: "/development/innerPages/ios/tech33.svg", name: "Magento", tech: "Web Apps", niche: "CMS" },
  { imgSrc: "/development/innerPages/ios/tech34.svg", name: "Shopify", tech: "Web Apps", niche: "CMS" },
  { imgSrc: "/development/innerPages/ios/tech35.svg", name: "Contentful", tech: "Web Apps", niche: "CMS" },
  { imgSrc: "/development/innerPages/ios/tech36.svg", name: "MongoDB", tech: "Web Apps", niche: "Databse" },
  { imgSrc: "/development/innerPages/ios/tech37.svg", name: "MySQL", tech: "Databse", niche: "Databse" },
  { imgSrc: "/development/innerPages/ios/tech38.svg", name: "MsSQL", tech: "Databse", niche: "Databse" },
  { imgSrc: "/development/innerPages/ios/tech39.svg", name: "Dynamodb", tech: "Databse", niche: "Databse" },
  { imgSrc: "/development/innerPages/ios/tech40.svg", name: "PostgreSQL", tech: "Databse", niche: "Databse" },
  { imgSrc: "/development/innerPages/ios/tech42.svg", name: "IBM", tech: "Databse", niche: "Databse" },
  { imgSrc: "/development/innerPages/ios/tech43.svg", name: "Redis", tech: "Databse", niche: "Databse" },
  { imgSrc: "/development/innerPages/ios/tech44.svg", name: "ElasticSearch", tech: "Databse", niche: "Databse" },
  { imgSrc: "/development/innerPages/ios/tech45.svg", name: "Nginx", tech: "Devops", niche: "Devops" },
  { imgSrc: "/development/innerPages/ios/tech46.svg", name: "Docker", tech: "Devops", niche: "Devops" },
  { imgSrc: "/development/innerPages/ios/tech47.svg", name: "Kubernetes", tech: "Devops", niche: "Devops" },
  { imgSrc: "/development/innerPages/ios/tech48.svg", name: "Gradle", tech: "Devops", niche: "Devops" },
  { imgSrc: "/development/innerPages/ios/tech49.svg", name: "Jenkins", tech: "Devops", niche: "Devops" },
  { imgSrc: "/development/innerPages/ios/tech50.svg", name: "AWS", tech: "Cloud", niche: "Cloud" },
  { imgSrc: "/development/innerPages/ios/tech51.svg", name: "Appium", tech: "Cloud", niche: "Cloud" },
  { imgSrc: "/development/innerPages/ios/tech52.svg", name: "Azure", tech: "Cloud", niche: "Cloud" },
  { imgSrc: "/development/innerPages/ios/tech53.svg", name: "Rackspace", tech: "Cloud", niche: "Cloud" },
  { imgSrc: "/development/innerPages/ios/tech54.svg", name: "Linode", tech: "Cloud", niche: "Cloud" },
  { imgSrc: "/development/innerPages/ios/tech55.svg", name: "Firebase", tech: "Cloud", niche: "Cloud" },
  { imgSrc: "/development/innerPages/ios/tech56.svg", name: "Oracle Cloud", tech: "Cloud", niche: "Cloud" },
  { imgSrc: "/development/innerPages/ios/tech57.svg", name: "Heroku", tech: "Cloud", niche: "Cloud" },
];
const DevopsCloud = () => {
  return (
    <>
      <div className="p-4">
        <h3 className="text-4xl ml-4 text-white">DevOps</h3>
        <div className="flex flex-row gap-4 mt-4 flex-wrap">
          {techData.filter((item) => item.niche == "Devops").map((tech, index) => (
            <div key={index} className="flex flex-row items-center space-x-4 border border-gray-600 xs:w-[180px] md:w-[200px] rounded-full p-3">
              <img src={tech.imgSrc} alt="" className="w-[30px] h-[30px] techImg invert brightness-100" style={{ filter: 'invert(1) brightness(100%)' }} />
              <h3 className="text-xl text-white">{tech.name}</h3>
            </div>
          ))}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-4xl ml-4 text-white">Cloud</h3>
        <div className="flex flex-row gap-4 mt-4 flex-wrap">
          {techData.filter((item) => item.niche == "Cloud").map((tech, index) => (
            <div key={index} className="flex flex-row items-center space-x-4 border border-gray-600 xs:w-[180px] md:w-[200px] rounded-full p-3">
              <img src={tech.imgSrc} alt="" className="w-[30px] h-[30px] techImg invert brightness-100" style={{ filter: 'invert(1) brightness(100%)' }} />
              <h3 className="text-xl text-white">{tech.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
const Database = () => {
  return (
    <>
      <div className="p-4">
        <h3 className="text-4xl ml-4 text-white">Database</h3>
        <div className="flex flex-row gap-4 mt-4 flex-wrap">
          {techData.filter((item) => item.niche == "Databse").map((tech, index) => (
            <div key={index} className="flex flex-row items-center space-x-4 border border-gray-600 xs:w-[180px] md:w-[200px] rounded-full p-3">
              <img src={tech.imgSrc} alt="" className="w-[30px] h-[30px] techImg invert brightness-100" style={{ filter: 'invert(1) brightness(100%)' }} />
              <h3 className="text-xl text-white">{tech.name}</h3>
            </div>
          ))}
        </div>
      </div>

    </>
  )
}
const WebApps = () => {
  return (
    <>
      <div className="p-4">
        <h3 className="text-4xl ml-4 text-white">Frontend</h3>
        <div className="flex flex-row gap-4 mt-4 flex-wrap">
          {techData.filter((item) => item.niche == "Frontend").map((tech, index) => (
            <div key={index} className="flex flex-row items-center space-x-4 border border-gray-600 xs:w-[180px] md:w-[200px] rounded-full p-3">
              <img src={tech.imgSrc} alt="" className="w-[30px] h-[30px] techImg invert brightness-100" style={{ filter: 'invert(1) brightness(100%)' }} />
              <h3 className="text-xl text-white">{tech.name}</h3>
            </div>
          ))}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-4xl ml-4 text-white">Backend</h3>
        <div className="flex flex-row gap-4 mt-4 flex-wrap">
          {techData.filter((item) => item.niche == "Backend").map((tech, index) => (
            <div key={index} className="flex flex-row items-center space-x-4 border border-gray-600 xs:w-[180px] md:w-[200px] rounded-full p-3">
              <img src={tech.imgSrc} alt="" className="w-[30px] h-[30px] techImg invert brightness-100" style={{ filter: 'invert(1) brightness(100%)' }} />
              <h3 className="text-xl text-white">{tech.name}</h3>
            </div>
          ))}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-4xl ml-4 text-white">CMS</h3>
        <div className="flex flex-row gap-4 mt-4 flex-wrap">
          {techData.filter((item) => item.niche == "CMS").map((tech, index) => (
            <div key={index} className="flex flex-row items-center space-x-4 border border-gray-600 xs:w-[180px] md:w-[200px] rounded-full p-3">
              <img src={tech.imgSrc} alt="" className="w-[30px] h-[30px] techImg invert brightness-100" style={{ filter: 'invert(1) brightness(100%)' }} />
              <h3 className="text-xl text-white">{tech.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
const MobileApps = () => {
  return (
    <>
      <div className="p-4">
        <h3 className="text-4xl ml-4 text-white">iOS</h3>
        <div className="flex flex-row gap-4 mt-4 flex-wrap">
          {techData.filter((item) => item.niche == "iOS").map((tech, index) => (
            <div key={index} className="flex flex-row items-center space-x-4 border border-gray-600 xs:w-[180px] md:w-[200px] rounded-full p-3">
              <img src={tech.imgSrc} alt="" className="w-[30px] h-[30px] techImg invert brightness-100" style={{ filter: 'invert(1) brightness(100%)' }} />
              <h3 className="text-xl text-white">{tech.name}</h3>
            </div>
          ))}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-4xl ml-4 text-white">Android</h3>
        <div className="flex flex-row gap-4 mt-4  flex-wrap">
          {techData.filter((item) => item.niche == 'Android').map((tech, index) => (
            <div key={index} className="flex flex-row items-center space-x-4 border border-gray-600 xs:w-[180px] md:w-[200px] rounded-full p-3">
              <img src={tech.imgSrc} alt="" className="w-[30px] h-[30px] techImg invert brightness-100" style={{ filter: 'invert(1) brightness(100%)' }} />
              <h3 className="text-xl text-white">{tech.name}</h3>
            </div>
          ))}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-4xl ml-4 text-white">Cross Platforms</h3>
        <div className="flex flex-row gap-4 mt-4  flex-wrap">
          {techData.filter((item) => item.niche == 'Hybird').map((tech, index) => (
            <div key={index} className="flex flex-row items-center space-x-4 border border-gray-600 xs:w-[180px] md:w-[200px] rounded-full p-3">
              <img src={tech.imgSrc} alt="" className="w-[30px] h-[30px] techImg invert brightness-100" style={{ filter: 'invert(1) brightness(100%)' }} />
              <h3 className="text-xl text-white">{tech.name}</h3>
            </div>
          ))}

        </div>
      </div>
    </>
  )
}
export default function Home() {
  const { setIsVisible } = useHeaderVisibility();
  const textRef = useRef(null);
  const serviceSection = useRef()
  const serviceHeadSection = useRef()
  const scrollRef = useRef()
  const [loading, setLoading] = useState(true)
  const sliderRef = useRef(null)
  const [selectedCategory, setSelectedCategory] = useState('WebApps');

  // Function to handle category selection
  const handleCategorySelect = (category) => {
    setSelectedCategory(category); // Update selected category
  };


  return (
    <>

      <div className="relative bg-black w-screen overflow-x-hidden">
        <LightStars />
        <div className="relative z-[1]">
          <ScrollContext>

            <Section1 />
            <section className="w-[90vw] absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[100]">
              <div className="w-full bg-black bg-opacity-95 rounded-xl flex">
                <div className='w-[40%]  flex items-center justify-center'>
                  <h3 className="xs:text-[18px] p-2 lg:text-[42px] text-white font-poppins text-center font-bold uppercase">Our Trusted <br /> <span className=''>Partners</span> </h3>
                </div>
                <Marquee gradient={false} speed={100} pauseOnHover={true} className="p-12">
                  <img src={"/partners/icone-1.png"} className="xs:w-[80px] xs:h-[60px] lg:w-[120px] lg:h-[70px] ml-20" />
                  <img src={"/partners/icone-2.png"} className="xs:w-[80px] xs:h-[60px] lg:w-[120px] lg:h-[70px] ml-20" />
                  <img src={"/partners/icone-3.png"} className="xs:w-[80px] xs:h-[60px] lg:w-[120px] lg:h-[70px] ml-20" />
                  <img src={"/partners/icone-4.png"} className="xs:w-[80px] xs:h-[60px] lg:w-[120px] lg:h-[70px] ml-20" />
                  <img src={"/partners/icone-5.png"} className="xs:w-[80px] xs:h-[60px] lg:w-[120px] lg:h-[70px] ml-20" />
                  <img src={"/partners/icone-6.png"} className="xs:w-[80px] xs:h-[60px] lg:w-[120px] lg:h-[70px] ml-20" />
                  <img src={"/partners/icone-7.png"} className="xs:w-[80px] xs:h-[60px] lg:w-[120px] lg:h-[70px] ml-20" />
                  <img src={"/partners/4.png"} className="xs:w-[80px] xs:h-[60px] lg:w-[120px] lg:h-[70px] ml-20 " />
                </Marquee>
              </div>
            </section>
            <Section2 />
            <Section3 />
            {/* <Section4 /> */}
            <PinSection />
            <Section5 />
            <div className='w-screen mb-[10%]'>
              <div className="w-[80%] m-auto">
                <h3 className="text-white xs:text-[24px] md:text-[32px] lg:text-[52px] font-bold font-pp  xs:text-center lg:text-left">Technologies we use.</h3>
                <p className="text-white mt-4 xs:text-[16px] lg:text-2xl xs:w-[100%] xl:w-[50%] xs:text-center lg:text-left">Hire from our pool of 350+ specialized experts in web, mobile, and software engineering, specializing in the latest technologies and frameworks, ready to scale your development teams effortlessly.</p>
                <div className="border h-[80vh] border-l-0 border-b-0 border-r-0 border-t-2 border-gray-600 mt-8 flex flex-row xs:hidden xl:flex">
                  <div className="w-[25%] p-2 flex xs:flex-row lg:flex-col  items-center mt-4 xs:hidden xl:flex">
                    <div onClick={() => handleCategorySelect('WebApps')} className={`${selectedCategory == "WebApps" ? "bg-white text-black font-bold" : "text-white"} p-4 text-[20px] w-[250px] border border-gray-600 text-center rounded-full cursor-pointer transition-all duration-500 hover:bg-white hover:text-black`}>
                      Web Platforms
                    </div>
                    <div onClick={() => handleCategorySelect('MobileApps')} className={`${selectedCategory == "MobileApps" ? "bg-white text-black font-bold" : "text-white"} p-4 text-[20px]  w-[250px] border border-gray-600 text-center rounded-full cursor-pointer mt-4 transition-all duration-500 hover:bg-white hover:text-black`}>
                      Mobile Apps
                    </div>
                    <div onClick={() => handleCategorySelect('Database')} className={`${selectedCategory == "Database" ? "bg-white text-black font-bold" : "text-white"} p-4 text-[20px]  w-[250px] border border-gray-600 text-center rounded-full cursor-pointer mt-4 transition-all duration-500 hover:bg-white hover:text-black`}>
                      Database
                    </div>
                    <div onClick={() => handleCategorySelect('DevopsCloud')} className={`${selectedCategory == "DevopsCloud" ? "bg-white text-black font-bold" : "text-white"} p-4 text-[20px]  w-[250px] border border-gray-600 text-center rounded-full mt-4 cursor-pointer transition-all duration-500 hover:bg-white hover:text-black`}>
                      Cloud & DevOps
                    </div>
                    <div onClick={() => handleCategorySelect('Graphic Design')} className={`${selectedCategory == "Graphic Design" ? "bg-white text-black font-bold" : "text-white"} p-4 text-[20px]  w-[250px] border border-gray-600 text-center rounded-full mt-4 cursor-pointer transition-all duration-500 hover:bg-white hover:text-black`}>
                      Graphic Design
                    </div>
                    <div onClick={() => handleCategorySelect('Marketing')} className={`${selectedCategory == "Marketing" ? "bg-white text-black font-bold" : "text-white"} p-4 text-[20px]  w-[250px] border border-gray-600 text-center rounded-full mt-4 cursor-pointer transition-all duration-500 hover:bg-white hover:text-black`}>
                      Marketing
                    </div>
                    <div onClick={() => handleCategorySelect('Animation')} className={`${selectedCategory == "Animation" ? "bg-white text-black font-bold" : "text-white"} p-4 text-[20px]  w-[250px] border border-gray-600 text-center rounded-full mt-4 cursor-pointer transition-all duration-500 hover:bg-white hover:text-black`}>
                      Animation
                    </div>
                  </div>

                  <div className="w-[70%] border pl-2 border-t-0 border-l-1 border-b-0 border-r-0 border-gray-600 xs:hidden xl:block">
                    {selectedCategory === 'MobileApps' && <MobileApps />}
                    {selectedCategory === 'WebApps' && <WebApps />}
                    {selectedCategory === 'Database' && <Database />}
                    {selectedCategory === 'DevopsCloud' && <DevopsCloud />}
                  </div>
                </div>
              </div>
              <div className="w-screen">
                <div className="w-[100%] p-2 flex flex-row gap-2 justify-start items-center mt-4 xl:hidden xs:flex  overflow-x-auto " style={{ minHeight: "100px" }}>
                  <div onClick={() => handleCategorySelect('WebApps')} className={`${selectedCategory == "WebApps" ? "bg-white text-black font-bold" : "text-white"} p-4 text-[16px] w-[250px] border border-gray-600 text-center whitespace-nowrap rounded-full  cursor-pointer transition-all duration-500 hover:bg-white hover:text-black`}>
                    Web Platforms
                  </div>
                  <div onClick={() => handleCategorySelect('MobileApps')} className={`${selectedCategory == "MobileApps" ? "bg-white text-black font-bold" : "text-white"} p-4 text-[16px]  w-[250px] border border-gray-600 text-center whitespace-nowrap rounded-full cursor-pointer  transition-all duration-500 hover:bg-white hover:text-black`}>
                    Mobile Apps
                  </div>
                  <div onClick={() => handleCategorySelect('Database')} className={`${selectedCategory == "Database" ? "bg-white text-black font-bold" : "text-white"} p-4 text-[16px]  w-[250px] border border-gray-600 text-center rounded-full whitespace-nowrap cursor-pointer  transition-all duration-500 hover:bg-white hover:text-black`}>
                    Database
                  </div>
                  <div onClick={() => handleCategorySelect('DevopsCloud')} className={`${selectedCategory == "DevopsCloud" ? "bg-white text-black font-bold" : "text-white"} p-4 text-[16px]  w-[250px] border border-gray-600 text-center whitespace-nowrap rounded-full  cursor-pointer transition-all duration-500 hover:bg-white hover:text-black`}>
                    Cloud & DevOps
                  </div>
                  <div onClick={() => handleCategorySelect('Graphic Design')} className={`${selectedCategory == "Graphic Design" ? "bg-white text-black font-bold" : "text-white"} p-4 text-[16px]  w-[250px] border border-gray-600 text-center whitespace-nowrap rounded-full cursor-pointer transition-all duration-500 hover:bg-white hover:text-black`}>
                    Graphic Design
                  </div>
                  <div onClick={() => handleCategorySelect('Marketing')} className={`${selectedCategory == "Marketing" ? "bg-white text-black font-bold" : "text-white"} p-4 text-[16px]  w-[250px] border border-gray-600 text-center whitespace-nowrap rounded-full  cursor-pointer transition-all duration-500 hover:bg-white hover:text-black`}>
                    Marketing
                  </div>
                  <div onClick={() => handleCategorySelect('Animation')} className={`${selectedCategory == "Animation" ? "bg-white text-black font-bold" : "text-white"} p-4 text-[16px]  w-[250px] border border-gray-600 text-center whitespace-nowrap rounded-full cursor-pointer transition-all duration-500 hover:bg-white hover:text-black`}>
                    Animation
                  </div>
                </div>
                <div className="xs:w-[100%] md:w-[100%] border border-l-0 border-b-0 border-r-0 border-t-2 pl-2  border-gray-600 xs:block xl:hidden">
                  {selectedCategory === 'MobileApps' && <MobileApps />}
                  {selectedCategory === 'WebApps' && <WebApps />}
                  {selectedCategory === 'Database' && <Database />}
                  {selectedCategory === 'DevopsCloud' && <DevopsCloud />}
                </div>
              </div>
            </div>
            <Section6 />
            {/* <CommonSections /> */}
            <div className='bg-[#0A0A0A]'>
              <Footer />
            </div>
          </ScrollContext>
        </div>
      </div>

    </>

  );
}

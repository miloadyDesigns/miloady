"use client";
import { Canvas } from "@react-three/fiber";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Suspense, useEffect, useRef, useState } from "react";
import EnvoirnmentComp from "./_components/Envoirnment";
import { Html, Loader } from "@react-three/drei";
import { Clouds } from "./_components/Clouds";
import { useGSAP } from "@gsap/react";
import Services from "./_components/services";
import Portfolio from "./portfolio";
import Points from "./_components/Points";
import { GrFormNextLink } from "react-icons/gr";
import HorizontalScrollSections from "./_components/HorizontalScrollSections";
import TestimonailSection from "./_components/Testimonials/TestimonailSection";
import SideButton from "./_components/SideButton.jsx";
import Footer from "./_components/Footer";
import { useHeaderVisibility } from "@/context/HeaderVisibilityProvider ";
import ContactForm from "./_components/ContactForm/ContactForm";
import ProcessSection from "./_components/Process";
import { Tabs } from "@chakra-ui/react"
import { RingLoader } from "react-spinners";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger, useGSAP);
const websites = [
  {
    id: 1,
    title: "Air-Pro Systems",
    description: "Our mobile app designs are user-centered, focusing on great user experiences and beautiful, intuitive interfaces that engage users from the start",
    image: "https://res.cloudinary.com/dz8sirg5s/image/upload/v1730924145/images/tw4br9whpm5u7s3rfznl.png",
    link: "/portfolio/website-design" // Add this if you want the "Learn More" to link to another page
  },
  {
    id: 2,
    title: "Art-e-Gallery",
    description: "Our mobile app designs are user-centered, focusing on great user experiences and beautiful, intuitive interfaces that engage users from the start.",
    image: "https://res.cloudinary.com/dz8sirg5s/image/upload/v1730924146/images/wo8fwzyarbanrd4khwdw.png",
    link: "/portfolio/mobile-app-design"
  },
  // {
  //   id: 3,
  //   title: "Catseyepest",
  //   description: "We specialize in creating seamless user interfaces and great user experiences. Our design is focused on usability, aesthetics, and functionality.",
  //   image: "https://res.cloudinary.com/dz8sirg5s/image/upload/v1730924146/images/yo1dkz4v7hzdj95sncsy.png",
  //   link: "/portfolio/ui-ux-design"
  // },
  // {
  //   id: 4,
  //   title: "Closet Candy",
  //   description: "We specialize in creating seamless user interfaces and great user experiences. Our design is focused on usability, aesthetics, and functionality.",
  //   image: "https://res.cloudinary.com/dz8sirg5s/image/upload/v1730924147/images/fiqpugv8jhrq3hyzvdv6.png ",
  //   link: "/portfolio/ui-ux-design"
  // },
  {
    id: 5,
    title: "New Songs Of Praise",
    description: "We specialize in creating seamless user interfaces and great user experiences. Our design is focused on usability, aesthetics, and functionality.",
    image: "https://res.cloudinary.com/dz8sirg5s/image/upload/v1730924150/images/tqjaftzw3ggzajasz2wq.png",
    link: "/portfolio/ui-ux-design"
  },
  {
    id: 6,
    title: "Ora Juice Skincare",
    description: "We specialize in creating seamless user interfaces and great user experiences. Our design is focused on usability, aesthetics, and functionality.",
    image: "https://res.cloudinary.com/dz8sirg5s/image/upload/v1730924150/images/iig4cv50lltupqxrejh5.png",
    link: "/portfolio/ui-ux-design"
  },
  {
    id: 7,
    title: "Diva Dolls Boutique",
    description: "We specialize in creating seamless user interfaces and great user experiences. Our design is focused on usability, aesthetics, and functionality.",
    image: "https://res.cloudinary.com/dz8sirg5s/image/upload/v1730924153/images/psborcdgeup3f4qdnzvb.png",
    link: "/portfolio/ui-ux-design"
  },
  {
    id: 8,
    title: "Denterprises",
    description: "We specialize in creating seamless user interfaces and great user experiences. Our design is focused on usability, aesthetics, and functionality.",
    image: "https://res.cloudinary.com/dz8sirg5s/image/upload/v1730924153/images/qmbiyqgxfsz2e8fzcy2i.png",
    link: "/portfolio/ui-ux-design"
  },
  {
    id: 9,
    title: "Page Production",
    description: "We specialize in creating seamless user interfaces and great user experiences. Our design is focused on usability, aesthetics, and functionality.",
    image: "/portfolio/PAGE-PROD.png",
    link: "/portfolio/ui-ux-design"
  }
];
const logos = [
  {
    id: 1,
    title: "Kodak Movement LLC",
    description: "Our mobile app designs are user-centered, focusing on great user experiences and beautiful, intuitive interfaces that engage users from the start",
    image: "/portfolio/1.png",
    link: "/portfolio/website-design" // Add this if you want the "Learn More" to link to another page
  },
  {
    id: 2,
    title: "Six Figure Club",
    description: "Our mobile app designs are user-centered, focusing on great user experiences and beautiful, intuitive interfaces that engage users from the start.",
    image: "/portfolio/3.png",
    link: "/portfolio/mobile-app-design"
  },
  {
    id: 3,
    title: "Yes I'm a Pot Head",
    description: "We specialize in creating seamless user interfaces and great user experiences. Our design is focused on usability, aesthetics, and functionality.",
    image: "/portfolio/4.png",
    link: "/portfolio/ui-ux-design"
  },
  {
    id: 4,
    title: "Vollmer Design Studio",
    description: "We specialize in creating seamless user interfaces and great user experiences. Our design is focused on usability, aesthetics, and functionality.",
    image: "/portfolio/6.png",
    link: "/portfolio/ui-ux-design"
  },
  {
    id: 5,
    title: "Pixel Brain Designs",
    description: "We specialize in creating seamless user interfaces and great user experiences. Our design is focused on usability, aesthetics, and functionality.",
    image: "/portfolio/5.png",
    link: "/portfolio/ui-ux-design"
  },
  {
    id: 6,
    title: "KRW Electric",
    description: "We specialize in creating seamless user interfaces and great user experiences. Our design is focused on usability, aesthetics, and functionality.",
    image: "/portfolio/11.png",
    link: "/portfolio/ui-ux-design"
  },
  {
    id: 7,
    title: "Diva Dolls Boutique",
    description: "We specialize in creating seamless user interfaces and great user experiences. Our design is focused on usability, aesthetics, and functionality.",
    image: "/portfolio/14.png",
    link: "/portfolio/ui-ux-design"
  },
  // {
  //   id: 8,
  //   title: "Weslers threads",
  //   description: "We specialize in creating seamless user interfaces and great user experiences. Our design is focused on usability, aesthetics, and functionality.",
  //   image: "https://res.cloudinary.com/dz8sirg5s/image/upload/v1730987929/portfolio/hrjbtn7yyrypmhr1omsf.png",
  //   link: "/portfolio/ui-ux-design"
  // },
  {
    id: 9,
    title: "Big Manny",
    description: "We specialize in creating seamless user interfaces and great user experiences. Our design is focused on usability, aesthetics, and functionality.",
    image: "/portfolio/15.png",
    link: "/portfolio/ui-ux-design"
  },

  {
    id: 11,
    title: "Original Manny Lager",
    description: "We specialize in creating seamless user interfaces and great user experiences. Our design is focused on usability, aesthetics, and functionality.",
    image: "/portfolio/8.png",
    link: "/portfolio/ui-ux-design"
  },
  {
    id: 12,
    title: "Mantastic",
    description: "We specialize in creating seamless user interfaces and great user experiences. Our design is focused on usability, aesthetics, and functionality.",
    image: "/portfolio/9.png",
    link: "/portfolio/ui-ux-design"
  },
  // {
  //   id: 13,
  //   title: "Estero",
  //   description: "We specialize in creating seamless user interfaces and great user experiences. Our design is focused on usability, aesthetics, and functionality.",
  //   image: "https://res.cloudinary.com/dz8sirg5s/image/upload/v1730987928/portfolio/encp9zl6wowdzbaxfbfa.png",
  //   link: "/portfolio/ui-ux-design"
  // },
  // {
  //   id: 14,
  //   title: "Icon Sportz",
  //   description: "We specialize in creating seamless user interfaces and great user experiences. Our design is focused on usability, aesthetics, and functionality.",
  //   image: "https://res.cloudinary.com/dz8sirg5s/image/upload/v1730987928/portfolio/wbdbbj0wey98x39k5qce.png",
  //   link: "/portfolio/ui-ux-design"
  // },
  // {
  //   id: 15,
  //   title: "PROSEPERITY TRADING",
  //   description: "We specialize in creating seamless user interfaces and great user experiences. Our design is focused on usability, aesthetics, and functionality.",
  //   image: "https://res.cloudinary.com/dz8sirg5s/image/upload/v1730987929/portfolio/rynarhb7d1lnrvbruoac.png",
  //   link: "/portfolio/ui-ux-design"
  // },
  // {
  //   id: 16,
  //   title: "KRW",
  //   description: "We specialize in creating seamless user interfaces and great user experiences. Our design is focused on usability, aesthetics, and functionality.",
  //   image: "https://res.cloudinary.com/dz8sirg5s/image/upload/v1730987927/portfolio/qd9etbo8cq7att1vmtle.png",
  //   link: "/portfolio/ui-ux-design"
  // }
];
const mobileApps = [
  {
    id: 1,
    title: "Fresha",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam officia porro alias autem nemo ipsam tenetur excepturi omnis, inventore, consequuntur!",
    image: "https://res.cloudinary.com/dz8sirg5s/image/upload/v1730924149/images/kkxac88yaqc25ykpzvrv.png",
    link: "/portfolio/website-design" // Add this if you want the "Learn More" to link to another page
  },
  {
    id: 2,
    title: "Bunzers",
    description: "Our mobile app designs are user-centered, focusing on great user experiences and beautiful, intuitive interfaces that engage users from the start.",
    image: "https://res.cloudinary.com/dz8sirg5s/image/upload/v1730924149/images/dgorzlnuzbxp5whandey.png",
    link: "/portfolio/mobile-app-design"
  },
  {
    id: 3,
    title: "Plano Salon",
    description: "We specialize in creating seamless user interfaces and great user experiences. Our design is focused on usability, aesthetics, and functionality.",
    image: "https://res.cloudinary.com/dz8sirg5s/image/upload/v1730924151/images/m12pvcpztczjfmugpr6u.png",
    link: "/portfolio/ui-ux-design"
  },
  {
    id: 4,
    title: "Brake Time",
    description: "We specialize in creating seamless user interfaces and great user experiences. Our design is focused on usability, aesthetics, and functionality.",
    image: "https://res.cloudinary.com/dz8sirg5s/image/upload/v1730924146/images/effuhfdvk5dlybkqlpgf.png",
    link: "/portfolio/ui-ux-design"
  }
];
const socialMedia = [
  {
    id: 1,
    title: "Diva Dolls",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam officia porro alias autem nemo ipsam tenetur excepturi omnis, inventore, consequuntur!",
    image: "/portfolio/Div-Dolls.png",
    link: "/portfolio/website-design" // Add this if you want the "Learn More" to link to another page
  },
  {
    id: 2,
    title: "Cedar Cove RV Resort",
    description: "Our mobile app designs are user-centered, focusing on great user experiences and beautiful, intuitive interfaces that engage users from the start.",
    image: "/portfolio/Cedar.png",
    link: "/portfolio/mobile-app-design"
  },
  {
    id: 3,
    title: "Pretty XO",
    description: "We specialize in creating seamless user interfaces and great user experiences. Our design is focused on usability, aesthetics, and functionality.",
    image: "/portfolio/Pretty-XO.png",
    link: "/portfolio/ui-ux-design"
  },
  {
    id: 4,
    title: "Denterprises",
    description: "We specialize in creating seamless user interfaces and great user experiences. Our design is focused on usability, aesthetics, and functionality.",
    image: "/portfolio/Denterprices.png",
    link: "/portfolio/ui-ux-design"
  },
  {
    id: 5,
    title: "Ora Juice Skincare",
    description: "We specialize in creating seamless user interfaces and great user experiences. Our design is focused on usability, aesthetics, and functionality.",
    image: "/portfolio/Orajuice.png",
    link: "/portfolio/ui-ux-design"
  },
  {
    id: 6,
    title: "Prosperity Trading",
    description: "We specialize in creating seamless user interfaces and great user experiences. Our design is focused on usability, aesthetics, and functionality.",
    image: "/portfolio/Trading.png",
    link: "/portfolio/ui-ux-design"
  },

];
const branding = [
  {
    id: 1,
    title: "Shift Juices and Food",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam officia porro alias autem nemo ipsam tenetur excepturi omnis, inventore, consequuntur!",
    image: "/portfolio/branding/branding1.png",
    link: "/portfolio/website-design" // Add this if you want the "Learn More" to link to another page
  },
  // {
  //   id: 2,
  //   title: "Quality1 Enterprises",
  //   description: "Our mobile app designs are user-centered, focusing on great user experiences and beautiful, intuitive interfaces that engage users from the start.",
  //   image: "/portfolio/branding/branding2.png",
  //   link: "/portfolio/mobile-app-design"
  // },
  {
    id: 3,
    title: "Icon One Sportz Management",
    description: "We specialize in creating seamless user interfaces and great user experiences. Our design is focused on usability, aesthetics, and functionality.",
    image: "/portfolio/branding/branding3.png",
    link: "/portfolio/ui-ux-design"
  },
  {
    id: 4,
    title: "Expert Valet",
    description: "We specialize in creating seamless user interfaces and great user experiences. Our design is focused on usability, aesthetics, and functionality.",
    image: "/portfolio/branding/branding4.png",
    link: "/portfolio/ui-ux-design"
  },
  {
    id: 5,
    title: "Dugans Pet Shop",
    description: "We specialize in creating seamless user interfaces and great user experiences. Our design is focused on usability, aesthetics, and functionality.",
    image: "/portfolio/branding/branding5.png",
    link: "/portfolio/ui-ux-design"
  },
  {
    id: 6,
    title: "Lotus Psychotherapy Services",
    description: "We specialize in creating seamless user interfaces and great user experiences. Our design is focused on usability, aesthetics, and functionality.",
    image: "/portfolio/branding/branding6.png",
    link: "/portfolio/ui-ux-design"
  },
  {
    id: 7,
    title: "Pezzano Law Group, LLC",
    description: "We specialize in creating seamless user interfaces and great user experiences. Our design is focused on usability, aesthetics, and functionality.",
    image: "/portfolio/branding/branding7.png",
    link: "/portfolio/ui-ux-design"
  },
];


export default function Home() {
  const { setIsVisible } = useHeaderVisibility();
  const textRef = useRef(null);
  const serviceSection = useRef()
  const serviceHeadSection = useRef()
  const scrollRef = useRef()
  const [loading, setLoading] = useState(true)
  const sliderRef = useRef(null)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 6000);
  })
  useGSAP(() => {
    // GSAP animations
    const tl = gsap.timeline();

    tl.from(".headref", {
      x: -600,
      opacity: 0,
      duration: 1,
      ease: "power1.inOut",
    });

    tl.from(".para-2", {
      x: -400,
      opacity: 0,
      duration: 1,
      ease: "power1.inOut",
    });
    tl.from(".head_btn", {
      x: -400,
      opacity: 0,
      duration: 1,
      ease: "power1.inOut",
    });

    // ScrollTrigger for the upper section
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section_two",
        start: "top center",
        end: "bottom bottom",
        scrub: 3,
        scroller: ".wrapper",
        toggleActions: "restart pause resume pause",
      },
    });

    t1.from(".upperSection", {
      x: -600,
      opacity: 0,
      duration: 2,
      ease: "power1.inOut",
    })
      .from(".service-swiper", {
        y: -600,
        opacity: 0,
        duration: 2,
        ease: "power1.inOut",
      }, "<");

    // Portfolio section animations
    const t2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section_three",
        start: "top center",
        end: "bottom bottom",
        scrub: 3,
        scroller: ".wrapper",
        toggleActions: "restart pause resume pause",
      },
    });

    t2.from(".portfolioSection", {
      x: -600,
      opacity: 0,
      duration: 2,
      ease: "power1.inOut",
    }).from(".portfolio-swiper", {
      y: -600,
      opacity: 0,
      duration: 2,
      ease: "power1.inOut",
    }, "<");
    const t3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section_five",
        start: "top center",
        end: "bottom bottom",
        scrub: 3,
        scroller: ".wrapper",
        toggleActions: "restart pause resume pause",
      },
    })
    gsap.set(".form-section", { opacity: 0.95 })
    t3.from(".contact-head", {
      x: -800,
      opacity: 0,
      duration: 2,
      ease: "power1.inOut",
    }).from(".form-section", {
      x: 1800,
      opacity: 0,
      duration: 2,
      ease: "power1.inOut",
    }, "<");
    const t4 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section_process",
        start: "top center",
        end: "bottom bottom",
        scrub: 3,
        scroller: ".wrapper",
        toggleActions: "restart pause resume pause",
      },
    })
    gsap.set(".process_main", { opacity: 0.95 })
    t4.from(".process_head", {
      x: -800,
      opacity: 0,
      duration: 2,
      ease: "power1.inOut",
    }).from(".process_main", {
      x: 1800,
      opacity: 0,
      duration: 2,
      ease: "power1.inOut",
    }, "<");
    ScrollTrigger.create({
      trigger: ".section_five",
      start: "top 20%",
      end: "bottom top",
      onEnter: () => setIsVisible(true),
      onLeaveBack: () => setIsVisible(false),
      scroller: ".wrapper"
    });

  });
  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();  // Call slickNext() on the Slider component
    }
    console.log(sliderRef.current);

  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();  // Call slickPrev() on the Slider component
    }
  };
  return (
    <>
      {loading && <div className="w-screen h-screen absolute z-50 flex justify-center items-center" style={{
        background: "url('/image.png')",
        backgroundSize: "cover",  // Make sure the image covers the entire screen
        backgroundPosition: "center",  // Center the image in the container
        animation: "pulse 3s infinite"
      }}>
        {/* Loader, ensure it's centered */}
        <RingLoader color="white" size={200} />
      </div>
      }
      <div className="wrapper" ref={scrollRef}>
        <Suspense fallback={
          <div className="w-screen h-screen bg-black absolute z-50 flex justify-center items-center">
            {/* Loader, ensure it's centered */}
            <RingLoader color="white" size={100} />
          </div>
        }>

          <div className="relative overflow-x-hidden section_one bg-black section">
            <section className="lg:w-[80%]  absolute top-0 flex flex-col h-full xs:w-[100%] lg:left-[8%] xs:left-0 z-10 ">
              <div className="h-full flex flex-col justify-center ">
                <h1 ref={textRef} className="headref text-white xs:text-[30px] md:text-[42px] lg:text-[52px] 1366:text-[60px] 2xl:text-[86px] xs:ml-2 font-extrabold xl:text-[70px] font-pp">
                  UNLEASHING
                  <span className="font-back xl:text-[94px] xs:text-[34px] xls:text-[40px] lg:text-[74px] text-[#70000E] 1366:text-[104px] 2xl:text-[124px] ml-3">Creativity</span>
                  <br />
                  <span className="font-pp">
                    IN EVERY DETAIL
                    <span className="w-6 h-6 rounded-full bg-[#70000E] inline-block ml-2"></span>
                  </span>
                </h1>
                <div className="xs:[300px] lg:w-[600px] text-white para-2 p-2 font-text xs:text-[14px] lg:text-xl">
                  <p>We’re your one-stop marketing partner, combining creativity and strategy across every service, from design and digital to social and beyond. Together, we’ll make your brand unforgettable. </p>
                  <SideButton title={"G&nbsp;&nbsp;E&nbsp;&nbsp;T&nbsp;&nbsp;&nbsp;I&nbsp;&nbsp;N&nbsp;&nbsp;&nbsp;T&nbsp;&nbsp;O&nbsp;&nbsp;U&nbsp;&nbsp;C&nbsp;&nbsp;H"} />
                </div>
              </div>
            </section>
            {/* Overlay */}
            <div className="overlay" style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.65)",
              zIndex: 1,
            }}></div>
            {/* Canvas */}
            <Canvas gl={{ alpha: true }} style={{
              width: "100vw",
              height: "100vh",
              zIndex: 0,
            }}>
              <Suspense fallback={
                <Html>
                  <div className="w-screen h-screen bg-black absolute z-50 flex justify-center items-center">
                    {/* Loader, ensure it's centered */}
                    <RingLoader color="white" size={100} />
                  </div>
                </Html>
              }>
                <EnvoirnmentComp />
              </Suspense>
            </Canvas>
          </div>
        </Suspense>




        <div className="relative overflow-hidden section_two bg-black section ">
          <video
            autoPlay
            loop
            muted
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src="https://res.cloudinary.com/dz8sirg5s/video/upload/v1730922373/Servicesectionvideo_pgamid.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>


          <section className="absolute w-full xs:top-[13%] xl:top-[12%] 2xl:top-[15%] left-0 flex flex-col lg:h-[85%] xs:h-[90%] z-10">
            <div ref={serviceHeadSection} className="upperSection text-white  xs:ml-[8%] lg:ml-[7%] 2xl:ml-[8%] xl:ml-[7%]  lg:w-[50%] 2xl:w-[30%] xs:w-[90%]">
              <p className="text-[#999696] font-text pl-2 xs:text-[14px] xl:text-lg mt-2">Solutions Designed to Elevate Your Vision</p>
              <h1 className="text-while font-pp xl:text-[66px] lg:text-[60px] xs:text-[38px] -mt-2">Our Services</h1>
            </div>
            <div className="h-full service-swiper">
              <Services />
            </div>
          </section>
        </div>




        <div className="relative overflow-x-hidden section_three bg-black section">
          <video
            autoPlay
            loop
            muted
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src="https://res.cloudinary.com/dz8sirg5s/video/upload/v1730922373/Processsection1_eu17gf.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="overlay" style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.45)",
            zIndex: 1,
          }}></div>
          <section className="absolute w-full xs:top-[13%] xl:top-[12%] 2xl:top-[15%] left-0 flex flex-col lg:h-[85%] xs:h-[90%] z-10">
            <div ref={serviceHeadSection} className="portfolioSection text-white xs:ml-[8%] lg:ml-[7%] 2xl:ml-[8%] xl:ml-[7%]  lg:w-[50%] 2xl:w-[30%] xs:w-[90%]">
              <p className="text-[#999696] font-text pl-2 xs:text-[14px] lg:text-lg mt-2">Empowering the world through our technlogies</p>
              <h1 className="text-while font-pp lg:text-[66px] xs:text-[38px] -mt-2">Our Portfolio</h1>
              <p className="text-white lg:hidden p-1 font-text xs:text-[14px] lg:text-lg">Explore our diverse portfolio showcasing innovative projects and successful collaborations across various industries. See how we bring creative ideas to life with precision and excellence.</p>
              {/* <SideButton title={"L&nbsp;&nbsp;E&nbsp;&nbsp;A&nbsp;&nbsp;R&nbsp;&nbsp;N&nbsp;&nbsp;&nbsp;&nbsp;M&nbsp;O&nbsp;R&nbsp;&nbsp;E"} margin={'ml-2'} /> */}
            </div>
            <div className="portfolio-swiper ">
              <div className="mt-2">
                <Tabs.Root defaultValue="Websites" variant="line" className="bg-transparent text-white  relative" style={{ "--tab-line-color": "#FF5733" }}>
                  <div className="flex ">
                    <Tabs.List className="flex xs:space-x-4 w-full lg:space-x-0 lg:ml-[7%] xl:ml-[8%] relative">
                      {/* Logo Tab */}
                      <Tabs.Trigger
                        value="Logo"
                        className="flex items-center  p-2 rounded-lg cursor-pointer hover:bg-gray-700 transition-all ease-in-out duration-300"
                      >

                        Graphics
                      </Tabs.Trigger>
                      <Tabs.Trigger
                        value="Branding"
                        className="flex items-center  p-2 rounded-lg cursor-pointer hover:bg-gray-700 transition-all ease-in-out duration-300"
                      >

                        Branding
                      </Tabs.Trigger>
                      {/* Websites Tab */}
                      <Tabs.Trigger
                        value="Websites"
                        className="flex items-center  p-2 rounded-lg cursor-pointer hover:bg-gray-700 transition-all ease-in-out duration-300"
                      >

                        Websites
                      </Tabs.Trigger>
                      <Tabs.Trigger
                        value="Social Media"
                        className="flex items-center  p-2 rounded-lg cursor-pointer hover:bg-gray-700 transition-all ease-in-out duration-300"
                      >

                        Social Media
                      </Tabs.Trigger>
                      {/* Mobile Apps Tab */}
                      <Tabs.Trigger
                        value="Mobile Apps"
                        className="flex items-center p-2 rounded-lg cursor-pointer hover:bg-gray-700 transition-all ease-in-out duration-300"
                      >

                        Mobile Apps
                      </Tabs.Trigger>
                    </Tabs.List>
                    {/* <div className=" w-full xs:hidden xl:flex flex flex-row justify-end pr-12">
                      <div className="border mx-2 w-20 h-full flex justify-center items-center rounded-md cursor-pointer hover:bg-black" onClick={handlePrev}>
                        <FaChevronLeft size={20} color="white" />
                      </div>
                      <div className="border mx-2 w-20 h-full flex justify-center items-center rounded-md cursor-pointer hover:bg-black" onClick={handleNext}>
                        <FaChevronRight size={20} color="white" />
                      </div>
                    </div> */}
                  </div>

                  {/* Tabs Content */}
                  <Tabs.Content value="Websites">
                    <Suspense fallback={<h1>Loading..</h1>}>
                      <Portfolio data={websites} ref={sliderRef} />
                    </Suspense>
                  </Tabs.Content>
                  <Tabs.Content value="Branding">
                    <Suspense fallback={<h1>Loading..</h1>}>
                      <Portfolio data={branding} ref={sliderRef} />
                    </Suspense>
                  </Tabs.Content>
                  <Tabs.Content value="Mobile Apps">
                    <Suspense fallback={<h1>Loading..</h1>}>
                      <Portfolio data={mobileApps} ref={sliderRef} />
                    </Suspense>
                  </Tabs.Content>
                  <Tabs.Content value="Social Media">
                    <Suspense fallback={<h1>Loading..</h1>}>
                      <Portfolio data={socialMedia} ref={sliderRef} />
                    </Suspense>
                  </Tabs.Content>
                  <Tabs.Content value="Logo">
                    <Suspense fallback={<h1>Loading..</h1>}>
                      <Portfolio data={logos} ref={sliderRef} />
                    </Suspense>
                  </Tabs.Content>
                </Tabs.Root>
              </div>
            </div>
          </section>
        </div>




        <div className="relative overflow-hidden section_process bg-black section">

          <Canvas gl={{ alpha: true }} style={{
            width: "100vw",
            height: "100vh",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
          }}>

            <Points />
          </Canvas>
          <section className="absolute w-full lg:top-0 xs:top-[8%] flex flex-col left-0 h-full z-10">
            <div className="flex lg:flex-row xs:flex-col lg:justify-around h-full items-center">
              <div className="process_head xl:w-[30%] xs:w-[90%] lg:w-[40%] text-white">
                <p className="text-[#999696] font-text pl-2 xs:text-[14px] lg:text-lg mt-2">Our Seamless Process</p>
                <h1 className="text-while font-pp lg:text-[60px] xl:text-[60px] xs:text-[38px] leading-none">From Vision to Success</h1>
                <p className="text-white p-1 font-text xs:text-[14px] lg:text-[18px]">Transforming your ideas into reality with strategic planning, innovative solutions, and relentless execution. We take your concept and turn it into a tangible success, every step driven by creativity, precision, and a deep understanding of your goals.</p>
              </div>
              <div className="lg:w-[50%] xs:w-[100%] process_main">
                <ProcessSection />
              </div>
            </div>
          </section>
        </div>




        <div className="relative overflow-x-hidden section_four bg-black section">
          <video
            autoPlay
            loop
            muted
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src="https://res.cloudinary.com/dz8sirg5s/video/upload/v1730922372/Check_fz4qay.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="overlay" style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.25)",
            zIndex: 1,
          }}></div>
          <div >
            <TestimonailSection />
          </div>
        </div>




        <div className="relative overflow-x-hidden section_five bg-black section">
          <Canvas gl={{ alpha: true }} style={{
            width: "100vw",
            height: "100vh",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
          }}>

            <Points />
          </Canvas>
          <div className="flex flex-col w-full h-screen absolute left-0 z-10">
            <div className="contact-head h-[70%] w-full flex xs:flex-col lg:flex-row lg:items-center lg:space-x-12">
              <div className="testimonialHead text-white  xs:mt-[5%] lg:mt-0 xs:ml-[5%] lg:ml-[8%]  lg:w-[30%] xs:w-[90%]">
                <p className="text-[#999696] font-text pl-2 xs:text-[14px] lg:text-lg  mt-2">Empowering the world through our technlogies</p>
                <h1 className="text-while font-pp lg:text-[66px] xs:text-[38px] -mt-2">Contact Us</h1>
                {/* <p className="text-white p-1 font-text xs:text-[14px] lg:text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae sit facere necessitatibus ab neque consequuntur culpa repellendus, accusantium delectus minus quisquam, sed odit dicta cum numquam sunt illo ratione aliquam.</p> */}
                {/* <SideButton title={"L&nbsp;&nbsp;E&nbsp;&nbsp;A&nbsp;&nbsp;R&nbsp;&nbsp;N&nbsp;&nbsp;&nbsp;&nbsp;M&nbsp;O&nbsp;R&nbsp;&nbsp;E"} margin={"ml-2"} /> */}
              </div>
              <div className="xs:w-[100%] lg:w-[60%]  form-section xs:mr-0 lg:mr-4">
                <ContactForm />
              </div>
            </div>
            <div className="h-[40%] xs:hidden xl:block">
              <Footer />
            </div>
            <div className="h-[30%] xs:hidden lg:block xl:hidden">
              <Footer />
            </div>
          </div>
        </div>


      </div >
    </>

  );
}

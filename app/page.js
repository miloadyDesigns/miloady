"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Suspense, useEffect, useRef, useState } from "react";
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
import Loader from "./_components/Loader/Loader";
gsap.registerPlugin(ScrollTrigger, useGSAP);


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
  // useGSAP(() => {
  //   // GSAP animations
  //   const tl = gsap.timeline();

  //   tl.from(".headref", {
  //     x: -600,
  //     opacity: 0,
  //     duration: 1,
  //     ease: "power1.inOut",
  //   });

  //   tl.from(".para-2", {
  //     x: -400,
  //     opacity: 0,
  //     duration: 1,
  //     ease: "power1.inOut",
  //   });
  //   tl.from(".head_btn", {
  //     x: -400,
  //     opacity: 0,
  //     duration: 1,
  //     ease: "power1.inOut",
  //   });

  //   // ScrollTrigger for the upper section
  //   const t1 = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".section_two",
  //       start: "top center",
  //       end: "bottom bottom",
  //       scrub: 3,
  //       scroller: ".wrapper",
  //       toggleActions: "restart pause resume pause",
  //     },
  //   });

  //   t1.from(".upperSection", {
  //     x: -600,
  //     opacity: 0,
  //     duration: 2,
  //     ease: "power1.inOut",
  //   })
  //     .from(".service-swiper", {
  //       y: -600,
  //       opacity: 0,
  //       duration: 2,
  //       ease: "power1.inOut",
  //     }, "<");

  //   // Portfolio section animations
  //   const t2 = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".section_three",
  //       start: "top center",
  //       end: "bottom bottom",
  //       scrub: 3,
  //       scroller: ".wrapper",
  //       toggleActions: "restart pause resume pause",
  //     },
  //   });

  //   t2.from(".portfolioSection", {
  //     x: -600,
  //     opacity: 0,
  //     duration: 2,
  //     ease: "power1.inOut",
  //   }).from(".portfolio-swiper", {
  //     y: -600,
  //     opacity: 0,
  //     duration: 2,
  //     ease: "power1.inOut",
  //   }, "<");
  //   const t3 = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".section_five",
  //       start: "top center",
  //       end: "bottom bottom",
  //       scrub: 3,
  //       scroller: ".wrapper",
  //       toggleActions: "restart pause resume pause",
  //     },
  //   })
  //   gsap.set(".form-section", { opacity: 0.95 })
  //   t3.from(".contact-head", {
  //     x: -800,
  //     opacity: 0,
  //     duration: 2,
  //     ease: "power1.inOut",
  //   }).from(".form-section", {
  //     x: 1800,
  //     opacity: 0,
  //     duration: 2,
  //     ease: "power1.inOut",
  //   }, "<");
  //   const t4 = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".section_process",
  //       start: "top center",
  //       end: "bottom bottom",
  //       scrub: 3,
  //       scroller: ".wrapper",
  //       toggleActions: "restart pause resume pause",
  //     },
  //   })
  //   gsap.set(".process_main", { opacity: 0.95 })
  //   t4.from(".process_head", {
  //     x: -800,
  //     opacity: 0,
  //     duration: 2,
  //     ease: "power1.inOut",
  //   }).from(".process_main", {
  //     x: 1800,
  //     opacity: 0,
  //     duration: 2,
  //     ease: "power1.inOut",
  //   }, "<");
  //   ScrollTrigger.create({
  //     trigger: ".section_five",
  //     start: "top 20%",
  //     end: "bottom top",
  //     onEnter: () => setIsVisible(true),
  //     onLeaveBack: () => setIsVisible(false),
  //     scroller: ".wrapper"
  //   });

  // });

  return (
    <>

      {/* {loading && <Loader />} */}


      <ScrollContext>

        <Section1 />
        {/* Marquee Section with Gradient */}
        <section className="w-[90vw] absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[100]">
          <div className="w-full bg-black bg-opacity-75 rounded-xl flex">
            <div className='w-[40%]  flex items-center justify-center'>
              <h1 className="xs:text-[18px] p-2 lg:text-[42px] text-white font-poppins text-center font-bold uppercase">Our Trusted <br /> <span className=''>Partners</span> </h1>
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
        <Section4 />
        <Section5 />
        <Section6 />

      </ScrollContext>

    </>

  );
}

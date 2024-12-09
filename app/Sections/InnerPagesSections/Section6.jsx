'use client'
import { Observer } from "gsap/Observer";
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import React, { useEffect, useRef } from 'react'
gsap.registerPlugin(useGSAP, ScrollTrigger, Observer)
const Section6 = ({ title, teamSlider }) => {
    const carouselRef = useRef(null);
    const imagesRef = useRef([]);
    const radius = 242;
    const progress = { value: 0 };

    useEffect(() => {
        const carousel = carouselRef.current;
        const images = imagesRef.current;
        Observer.create({
            target: carousel,
            type: 'wheel,pointer',
            onPress: () => {
                carousel.style.cursor = 'grabbing';

            },
            onRelease: () => {
                carousel.style.cursor = 'grab';
            },
            onChange: (self) => {
                gsap.killTweensOf(progress);
                const delta =
                    self.event.type === 'wheel' ? self.deltaY * -0.0005 : self.deltaX * 0.05;
                gsap.to(progress, {
                    duration: 2,
                    ease: 'power4.out',
                    value: `+=${delta}`,
                });
            },
        });

        // Animation function
        const animate = () => {
            images.forEach((image, index) => {
                const theta = index / images.length - progress.value;
                const x = -Math.sin(theta * Math.PI * 2) * radius;
                const y = Math.cos(theta * Math.PI * 2) * radius;
                image.style.transform = `translate3d(${x}px, 0px, ${y}px) rotateY(${360 * -theta
                    }deg)`;
                const color = Math.floor((index / images.length) * 360);
                image.style.background = `hsla(${color}, 90%, 50%, .5)`;
            });
        };

        gsap.ticker.add(animate);

        // Cleanup
        return () => {
            gsap.ticker.remove(animate);
        };
    }, []);
    return (
        <div className="w-screen relative xs:mt-16 lg:mt-0">
            <div className="xs:w-[100%] lg:w-[80%] m-auto h-full flex xs:flex-col lg:flex-row justify-center items-center">
                <div className="xs:w-[100%] lg:w-[60%]">
                    <h3 className="text-white xs:text-[28px] md:text-[36px] lg:text-[32px] xl:text-[42px] font-poppins font-bold xs:w-[100%] lg:w-[80%] xs:p-2 lg:p-0 xs:text-center md:text-center lg:text-left">
                        Transform your Business with our valuable iPhone Solutions.
                    </h3>
                    <div className="flex flex-row xs:justify-center xs:items-center lg:justify-start lg:items-start">
                        <button class="consultationButton type1 mt-4 ">
                            <span class="btn-txt">Request Consultation</span>
                        </button>
                    </div>

                </div>
                <div className="xs:w-[100%] md:w-[60%] lg:w-[40%]">
                    <div className="carousel" ref={carouselRef}>
                        {teamSlider.map((item, i) => (
                            <div
                                key={i}
                                className="carousel-image"
                                ref={(el) => (imagesRef.current[i] = el)}
                            >
                                <img src={item.img} alt="" className="w-full h-full" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section6
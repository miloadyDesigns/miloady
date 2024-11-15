'use client';
import { useGSAP } from '@gsap/react';
import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Loader = () => {
    const [counter, setCounter] = useState(0);

    // Function to animate the counter smoothly
    function animateCounter(newValue) {
        gsap.to('.counter', {
            duration: 1, // Duration of the animation
            textContent: newValue,
            roundProps: 'textContent', // Ensures the value is an integer
            ease: 'power1.out'
        });
    }

    function startLoader() {
        let currentValue = 0;
        function updateCounter() {
            if (currentValue === 100) {
                return;
            }
            currentValue += Math.floor(Math.random() * 10) + 1;
            if (currentValue > 100) {
                currentValue = 100;
            }

            // Animate the counter using GSAP
            animateCounter(currentValue);

            let delay = Math.floor(Math.random() * 200) + 50;
            setTimeout(updateCounter, delay);
        }
        updateCounter();
    }

    useEffect(() => {
        startLoader();
    }, []); // Empty dependency array to start the loader only once

    useGSAP(() => {
        gsap.to('.counter', 0.25, {
            delay: 3.5,
            opacity: 0
        });
        gsap.to('.bar', 1.5, {
            delay: 3.5,
            height: 0,
            stagger: {
                amount: 0.5
            },
            ease: 'power1.inOut'
        });
    });

    return (
        <>
            <h1 className="counter fixed w-full h-full flex justify-end items-end text-[#bcbcc4] z-[100000] p-5 text-[20vw]">
                {counter}
            </h1>
            <div className="w-screen h-screen absolute  flex z-[10000]">
                {/* Render bars */}
                {[...Array(22)].map((_, index) => (
                    <div key={index} className="bar w-[10vh] bg-black h-[100vh]"></div>
                ))}
            </div>
        </>
    );
};

export default Loader;

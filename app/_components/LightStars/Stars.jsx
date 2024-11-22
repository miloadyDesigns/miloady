'use client';
import React, { useRef, useEffect } from 'react';


const LightStars = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        // Resize the canvas initially and on window resize
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        const stars = Array.from({ length: 600 }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 1.5, // Smaller stars
            twinkleSpeed: 0.06 + Math.random() * 0.1, // Twinkle speed
            opacity: Math.random(), 
        }));

        const drawStars = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            stars.forEach((star) => {
                star.opacity += star.twinkleSpeed * (Math.random() > 0.5 ? 1 : -1);

                // Clamp opacity between 0.3 and 1
                if (star.opacity < 0.3) star.opacity = 0.3;
                if (star.opacity > 1) star.opacity = 1;

                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
                ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
                ctx.fill();
            });

            requestAnimationFrame(drawStars);
        };

        drawStars();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    return (
        <div>
            <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-[1]"></canvas>
        </div>
    );
};

export default LightStars;

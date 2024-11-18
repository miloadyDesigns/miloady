import { Canvas } from '@react-three/fiber'
import React from 'react'
import StarsComp from '../_components/Stars'
import TestimonailSection from '../_components/Testimonials/TestimonailSection'

const Section5 = () => {
    return (
        <div className="relative  section_four bg-black section">
            <Canvas gl={{ alpha: true }} style={{
                width: "100vw",
                height: "100vh",
                zIndex: 0,
            }}>

                <StarsComp />

            </Canvas>

            <div className="overlay" style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.45)",
                zIndex: 1,
            }}></div>
            <div >
                <TestimonailSection />
            </div>
        </div>
    )
}

export default Section5

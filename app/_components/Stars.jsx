import React from 'react'
import { useLoader } from "@react-three/fiber";

import { Stars } from "@react-three/drei";  // Import Stars component from drei
import * as THREE from "three";
const StarsComp = () => {
    return (
        <>
            {/* Stars component from @react-three/drei */}
            <Stars
                radius={100}           // Size of the star field (distance of the stars from the center)
                depth={50}             // How "thick" the star field is
                count={5000}           // Number of stars
                factor={4}             // Density factor (adjusts the number of stars)
                saturation={1}       // Saturation of the star color
                speed={2}           // Rotation speed of the star field
                color="#ffffff"       // Color of the stars
            />
        </>
    )
}

export default StarsComp

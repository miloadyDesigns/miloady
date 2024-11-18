import React from 'react'
import { useLoader } from "@react-three/fiber";

import { Stars } from "@react-three/drei";  // Import Stars component from drei
import * as THREE from "three";
const StarsComp = () => {
    return (
        <>
            {/* Stars component from @react-three/drei */}
            <ambientLight intensity={1} />
            <pointLight color={"#f6f3ea"} position={[2, 0, 2]} intensity={1.2} />
            <Stars
                radius={300}           // Size of the star field (distance of the stars from the center)
                depth={60}             // How "thick" the star field is
                count={20000}           // Number of stars
                factor={7}             // Density factor (adjusts the number of stars)
                saturation={0}       // Saturation of the star color
                fade={true}       // Rotation speed of the star field
                speed={7}
            />
        </>
    )
}

export default StarsComp

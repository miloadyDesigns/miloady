import './styles.css';
import * as THREE from 'three';
import { useMemo } from 'react';
import { OrbitControls } from '@react-three/drei/core/OrbitControls';
import { Stats } from '@react-three/drei/core/Stats';
import { Canvas, useFrame } from '@react-three/fiber';
import { vertexShader, fragmentShader } from './shader.js';


const Particles = () => {
    const planePositions = useMemo(() => {
        const planeGeometry = new THREE.PlaneGeometry(6, 6, 128, 128);
        const positions = planeGeometry.attributes.position.array;

        return positions;
    }, []);

    const shaderArgs = useMemo(
        () => ({
            uniforms: {
                uTime: { value: 0 }
            },
            vertexShader,
            fragmentShader
        }),
        []
    );

    useFrame(() => {
        shaderArgs.uniforms.uTime.value++;
    }, []);

    return (
        <points rotation={[-Math.PI / 2, 0, 0]}>
            <bufferGeometry attach="geometry">
                <bufferAttribute
                    attach="attributes-position"
                    array={planePositions}
                    itemSize={3}
                    count={planePositions.length / 3}
                />
            </bufferGeometry>
            <shaderMaterial
                args={[shaderArgs]}
                transparent
                depthTest={false}
                depthWrite={false}
            />
        </points>
    );
};

const StatsScene = () => {
    return (
        <Canvas dpr={2} style={{
            width: "100vw",
            height: "100vh",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 0,
        }}>
            {/* <color attach="background" args={[0x000000]} /> Set background to black */}
            <OrbitControls makeDefault />
            <Stats />
            <Particles />
        </Canvas>

    );
};

export default StatsScene;

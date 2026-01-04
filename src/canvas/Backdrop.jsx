import React, { useRef } from 'react'
import { easing } from 'maath'
import { useFrame } from '@react-three/fiber'
import { AccumulativeShadows, RandomizedLight, ContactShadows, Environment } from '@react-three/drei';


const Backdrop = () => {
    const shadows = useRef();

    return (
        <AccumulativeShadows
            ref={shadows}
            temporal
            frames={60}
            alphaTest={0.85}
            scale={10}
            rotation={[Math.PI / 2, 0, 0]}
            position={[0, 0, -0.14]}
        >
            <ambientLight intensity={0.2} />

            <RandomizedLight
                amount={4}
                radius={9}
                intensity={0.92}
                ambient={0.85}
                position={[5, 5, -10]}
            />

            <RandomizedLight
                amount={4}
                radius={9}
                intensity={0.85}
                ambient={0.92}
                position={[-5, 5, -9]}
            />

            <ContactShadows
                position={[-5, -5, -9]}
                opacity={1}
                blur={0.5}
                far={2}
            />

            <Environment preset="city" />



        </AccumulativeShadows>
    )
}

export default Backdrop
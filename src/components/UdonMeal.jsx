import { OrbitControls, Stage } from '@react-three/drei'
import React from 'react'
import { Canvas } from 'react-three-fiber'
import Udon from './Udon'

const UdonMeal = () => {
    return (
        <Canvas >
            <ambientLight intensity={1} />
            <Stage environment={'city'} >
                <group >
                    <Udon
                    />
                </group>

                <OrbitControls enableZoom={false} />
                <camera position={[0, 0, 0]} rotation={[0, Math.PI / 2, 0]} />
            </Stage>
        </Canvas>

    )
}

export default UdonMeal
import { OrbitControls, Stage } from '@react-three/drei'
import React from 'react'
import { Canvas } from 'react-three-fiber'
import DrumModel from './DrumModel'

const Drum3d = () => {
    return (
        <Canvas >
            <ambientLight intensity={1} />
            <Stage environment={'city'} >
                <DrumModel rotation={[0, 0, 0]} />




                <OrbitControls enableZoom={false} />
                <camera position={[0, 0, 0]} rotation={[ 0,Math.PI / 2, 0]} />
            </Stage>
        </Canvas>

    )
}

export default Drum3d
import { OrbitControls, Stage } from '@react-three/drei'
import React, { Suspense, useRef } from 'react'
import { Canvas } from 'react-three-fiber'
import Car from './Car'
import Tesla6 from './Tesla6'
import Udon from './Udon'
import DrumModel from './DrumModel'
import CanvasLoader from './Loader'

const Project3dModel = ({ modalContent }) => {
    const cameraRef = useRef()

    return (
        <Canvas >
            <Suspense fallback={<CanvasLoader />}>
                <ambientLight intensity={1} />
                <Stage environment={'city'} >
                    <group rotation={[2 * Math.PI, 0, 6.25]}>
                        {modalContent.title === 'Park Smart' && <Car />}
                        {modalContent.title === 'Gericht Restaurant' && <Udon />}
                        {modalContent.title === 'Drum Kit' && <DrumModel />}
                    </group>




                </Stage>
                <OrbitControls enableZoom={false} enableRotate={true} />
            </Suspense>

        </Canvas>





    )
}

export default Project3dModel

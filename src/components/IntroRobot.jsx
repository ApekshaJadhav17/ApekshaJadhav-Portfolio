import { OrbitControls } from '@react-three/drei'
import React from 'react'
import { Canvas } from 'react-three-fiber'
import Robot from './Robot'
import { Suspense } from 'react'
import CanvasLoader from './Loader'
import { Preload } from '@react-three/drei'

const IntroRobot = () => {
  return (
    // <Canvas>
    //     <ambientLight intensity={2}/>
    //     <Robot />

   
    //   <OrbitControls enableZoom={false} autoRotate={true}  autoRotateSpeed={2.5} />
    // </Canvas>





    <Canvas>
      <Suspense fallback={<CanvasLoader />}>
      <ambientLight intensity={2}/>
        <OrbitControls enableZoom={false} autoRotate={true}  autoRotateSpeed={2.5} />
        <Robot />
      </Suspense>

   
    </Canvas>
    
  )
}

export default IntroRobot
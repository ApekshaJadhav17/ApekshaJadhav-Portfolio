import { OrbitControls, Stage } from '@react-three/drei'
import React from 'react'
import Pc from './Pc'
import { Canvas } from '@react-three/fiber'
import { me2 } from '../../assets/index'

const ComputersCanvas = () => {
  return (
    // <Canvas>

    //   <OrbitControls enableZoom={false} />

    //   <Stage environment='city' intensity={1}>
    //     <Pc />
    //   </Stage>

    // </Canvas>

    <>
      <img src={me2} />
    </>
  )
}

export default ComputersCanvas
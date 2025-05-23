import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {



  // const generateRandomPositions = (count, radius) => {
  //   const positions = [];

  //   for (let i = 0; i < count; i++) {
  //     const theta = Math.random() * Math.PI * 2;
  //     const phi = Math.acos(2 * Math.random() - 1);
  //     const x = radius * Math.sin(phi) * Math.cos(theta);
  //     const y = radius * Math.sin(phi) * Math.sin(theta);
  //     const z = radius * Math.cos(phi); 

  //     positions.push(x, y, z);
  //   }

  //   return new Float32Array(positions);
  // };




  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(5001), { radius: 1.2 }));
  // const sphere = generateRandomPositions(5000, 1.5);

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#f272c8'
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
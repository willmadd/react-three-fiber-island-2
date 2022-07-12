import * as THREE from 'three'

import { Environment, PerspectiveCamera } from '@react-three/drei'
import { Suspense, useRef, useMemo } from 'react'
import { extend, useThree, useLoader, useFrame } from '@react-three/fiber'
import { Sky, Float } from '@react-three/drei'
import { Water } from 'three-stdlib'
import waterNormalsSrc from '../../../public/img/waternormal2.jpeg'
import islandSrc from '../../../public/img/islandheightmap.jpg'
import rocksSrc from '../../../public/img/rocks.jpeg'
import BoatModel from './Boat'
import Ocean from './Ocean'
import Island from './Island'
import BoatModel from './BoatModel'

extend({ Water })

const Shader = (props) => {
  const meshRef = useRef(null)
  return (
    <>
      <PerspectiveCamera makeDefault position={[200, 50, 850]} />
      <pointLight position={[60, 160, 1230]} />
      <ambientLight intensity={0.1} />
      <mesh ref={meshRef} position={[0, 4, 1]}>
        <boxBufferGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={'red'} />
      </mesh>
      <Sky
        distance={450000}
        sunPosition={[0, 1, 0]}
        inclination={0}
        azimuth={0.25}
      />
      <Island />
      <Float
        floatingRange={[-0.5, -0.3]}
        speed={3} // Animation speed, defaults to 1
        rotationIntensity={0.07} // XYZ rotation intensity, defaults to 1
        floatIntensity={0.9} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
        // floatingRange={[0, 0.01]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
      >
        <Ocean />
        {/* <Boat /> */}
        <BoatModel />
      </Float>
      <Environment
        ground={{ height: 10, radius: 70, scale: 650 }}
        preset={'night'}
      />
    </>
  )
}

export default Shader

import * as THREE from 'three'

import { Environment, PerspectiveCamera } from '@react-three/drei'
import { Suspense, useRef, useMemo } from 'react'
import { extend } from '@react-three/fiber'
import { Sky, Float } from '@react-three/drei'
import { Water } from 'three-stdlib'
import Ocean from './Ocean'
import Island from './Island'
import BoatModel from './BoatModel'

extend({ Water })

const Scene = (props) => {
  const meshRef = useRef(null)
  const cameraRef = useRef(null)
  const boat1Ref = useRef(null)
  const boat2Ref = useRef(null)

  // console.log(boat1Ref)

  const clickOnBoat = (boatRef) => {
    console.log('boat click', boatRef)
    console.log(boat1Ref.current.position)
    cameraRef.current.lookAt(boatRef.point)
  }
  return (
    <>
      <PerspectiveCamera
        ref={cameraRef}
        makeDefault
        position={[200, 50, 850]}
        args={[75, 800 / 600, 1, 4000]}
      />
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
        speed={3}
        rotationIntensity={0.07}
        floatIntensity={0.9}
      >
        <Ocean />
        <BoatModel
          boat1Ref={boat1Ref}
          boat2Ref={boat2Ref}
          clickOnBoat={clickOnBoat}
        />
      </Float>
      <Environment
        ground={{ height: 10, radius: 70, scale: 750 }}
        preset={'night'}
      />
    </>
  )
}

export default Scene

import * as THREE from 'three'
import React, {
  useState,
  Suspense,
  forwardRef,
  useRef,
  useEffect,
  useMemo,
} from 'react'

import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
  Sparkles,
} from '@react-three/drei'
// import { Suspense, useRef, useMemo, useEffect } from 'react'
import { extend } from '@react-three/fiber'
import { Sky, Float } from '@react-three/drei'
import { Water } from 'three-stdlib'
import Ocean from './Ocean'
import Island from './Island'
import BoatModel from './BoatModel'
import FishingBoat from './FishingBoat'

extend({ Water })

const Scene = (props) => {
  const meshRef = useRef(null)
  const cameraRef = useRef(null)

  const boat1Ref = useRef(null)
  const boat2Ref = useRef(null)

  const fishingBoatRef = useRef(null)

  const [boatPosition, setBoatPosition] = useState([380, -3, 750])

  const [boatRotation, setBoatRotation] = useState([0, 1, 0])

  const cameraPosition = useMemo(() => {
    return [boatRotation[0], boatRotation[1] - 200, boatRotation[2]]
  }, [cameraPosition])

  // console.log(boat1Ref)

  console.log('boat one click', boat1Ref)
  const clickOnBoat = (boatRef) => {
    // console.log(boat1Ref.current.position)
    // cameraRef.current.lookAt(boatRef.point)
  }

  useEffect(() => {
    cameraRef.current.lookAt(fishingBoatRef?.current?.position)
    return () => {}
  }, [])

  return (
    <>
      {/* </PerspectiveCamera> */}
      {/* <OrbitControls /> */}
      <pointLight position={[60, 360, 1230]} />
      <ambientLight intensity={0.1} />
      <Sky
        distance={450000}
        sunPosition={[0, 1, 0]}
        inclination={0}
        azimuth={0.25}
      />
      <Island />
      <group>
        <PerspectiveCamera
          ref={cameraRef}
          makeDefault
          position={cameraPosition}
          // filmOffset={[100, 100, 100]}
          // position={[200, 50, 950]}
          args={[75, 800 / 600, 1, 14000]}
          // lookAt={fishingBoatRef?.current?.position}
        />
        <Float
          floatingRange={[-0.4, -0.5]}
          speed={2}
          rotationIntensity={0.07}
          floatIntensity={0.9}
        >
          <FishingBoat
            ref={fishingBoatRef}
            boatPosition={boatPosition}
            boatRotation={boatRotation}
          />
          <Ocean />
          <Sparkles />
          <BoatModel
            boat1Ref={boat1Ref}
            boat2Ref={boat2Ref}
            clickOnBoat={clickOnBoat}
          />
        </Float>
      </group>
      <Environment
        ground={{ height: 10, radius: 70, scale: 1750 }}
        preset={'night'}
        // files={['./img/nightsky.jpeg']}
        // background={true}
      />
    </>
  )
}

export default Scene

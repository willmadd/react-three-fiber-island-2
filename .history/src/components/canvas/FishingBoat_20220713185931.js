/* eslint-disable react/display-name */
import FishingBoatModel from './FishingBoatModel'
import React, { useState, forwardRef, useRef } from 'react'
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
  Sparkles,
} from '@react-three/drei'

const FishingBoat = forwardRef((_props, ref) => {
  const [boatPosition, setBoatPosition] = useState([280, -3, 750])

  const [boatRotation, setBoatRotation] = useState([0, 1, 0])

  const cameraRef = useRef(null)
  const fishingBoatRef = useRef(null)

  console.log('MR', ref)

  const handleClick = () => {
    console.log('ref', ref)
  }

  useEffect(() => {
    cameraRef.current.lookAt(fishingBoatRef?.current?.position)
    return () => {}
  }, [])

  return (
    <group
      onClick={() => handleClick()}
      position={boatPosition}
      rotation={boatRotation}
      ref={ref}
    >
      <PerspectiveCamera
        ref={cameraRef}
        makeDefault
        position={[10, 300, 100]}
        // position={[200, 50, 950]}
        args={[75, 800 / 600, 1, 14000]}
        // lookAt={fishingBoatRef?.current?.position}
      />
      <mesh ref={fishingBoatRef}>
        <FishingBoatModel />
      </mesh>
    </group>
  )
})

export default FishingBoat

/* eslint-disable react/display-name */
import FishingBoatModel from './FishingBoatModel'
import React, { useState, forwardRef, useRef, useEffect } from 'react'
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
  Sparkles,
} from '@react-three/drei'

const FishingBoat = forwardRef((_props, ref) => {
  // const cameraRef = useRef(null)
  // const fishingBoatRef = useRef(null)

  // console.log('MR', ref)

  const handleClick = () => {
    // console.log('ref', ref)
  }

  return (
    <group
      onClick={() => handleClick()}
      position={_props.boatPosition}
      rotation={_props.boatRotation}
      ref={ref}
    >
      <FishingBoatModel />
    </group>
  )
})

export default FishingBoat

/* eslint-disable react/display-name */
import FishingBoatModel from './FishingBoatModel'
import React, { useState, forwardRef, useRef, useEffect } from 'react'
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
  Sparkles,
} from '@react-three/drei'
import { useRaycastVehicle } from '@react-three/cannon'
import { useKeyboardControls } from '../hooks/useKeyboardControls'

const FishingBoat = forwardRef((_props, ref) => {
  // const cameraRef = useRef(null)
  // const fishingBoatRef = useRef(null)

  // console.log('MR', ref)

  const handleClick = () => {
    // console.log('ref', ref)
  }

  const { moveBackward, moveForward, moveLeft, moveRight } =
    useKeyboardControls()

  const [vehicle, api] = useRaycastVehicle(() => ({
    chassisBody: chassis,
    wheels: [wheel1, wheel2, wheel3, wheel4],
    wheelInfos: [wheelInfo1, wheelInfo2, wheelInfo3, wheelInfo4],
    indexForwardAxis: 2,
    indexRightAxis: 0,
    indexUpAxis: 1,
  }))

  return (
    <group
      onClick={() => handleClick()}
      position={_props.boatPosition}
      rotation={_props.boatRotation}
      ref={vehicle}
    >
      <FishingBoatModel />
    </group>
  )
})

export default FishingBoat

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

  useFrame(() => {
    // const { forward, backward, left, right, brake, reset } = controls.current
    for (let e = 2; e < 4; e++)
      api.applyEngineForce(
        moveForward || moveBackward
          ? force * (moveForward && !moveBackward ? -1 : 1)
          : 0,
        2
      )
    for (let s = 0; s < 2; s++)
      api.setSteeringValue(
        moveLeft || moveRight ? steer * (moveLeft && !moveRight ? 1 : -1) : 0,
        s
      )
    for (let b = 2; b < 4; b++) api.setBrake(brake ? maxBrake : 0, b)
    if (reset) {
      chassis.current.api.position.set(0, 0.5, 0)
      chassis.current.api.velocity.set(0, 0, 0)
      chassis.current.api.angularVelocity.set(0, 0.5, 0)
      chassis.current.api.rotation.set(0, -Math.PI / 4, 0)
    }
  })

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

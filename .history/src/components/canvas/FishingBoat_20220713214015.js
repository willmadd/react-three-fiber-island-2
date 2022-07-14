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
import { useFrame } from '@react-three/fiber'

const FishingBoat = forwardRef((_props, ref) => {
  // const cameraRef = useRef(null)
  // const fishingBoatRef = useRef(null)

  // console.log('MR', ref)
  const chassis = useRef()
  const handleClick = () => {
    // console.log('ref', ref)
  }

  const { moveBackward, moveForward, moveLeft, moveRight } =
    useKeyboardControls()

  const [vehicle, api] = useRaycastVehicle(() => ({
    chassisBody: chassis,
    wheels: [null, null, null, null],
    wheelInfos: [null, null, null, null],
    indexForwardAxis: 2,
    indexRightAxis: 0,
    indexUpAxis: 1,
  }))

  // useFrame

  useFrame(() => {
    // const { forward, backward, left, right, brake, reset } = controls.current
    // for (let e = 2; e < 4; e++)
    //   api.applyEngineForce(
    //     moveForward || moveBackward
    //       ? 1 * (moveForward && !moveBackward ? -1 : 1)
    //       : 0,
    //     2
    //   )
    // for (let s = 0; s < 2; s++)
    //   api.setSteeringValue(
    //     moveLeft || moveRight ? steer * (moveLeft && !moveRight ? 1 : -1) : 0,
    //     s
    //   )
    // for (let b = 2; b < 4; b++) api.setBrake(brake ? maxBrake : 0, b)
    // if (reset) {
    //   chassis.current.api.position.set(0, 0.5, 0)
    //   chassis.current.api.velocity.set(0, 0, 0)
    //   chassis.current.api.angularVelocity.set(0, 0.5, 0)
    // }
  })

  return (
    <group
      onClick={() => handleClick()}
      position={_props.boatPosition}
      rotation={_props.boatRotation}
      ref={vehicle}
    >
      <mesh ref={chassis}>
        <FishingBoatModel />
      </mesh>
    </group>
  )
})

export default FishingBoat

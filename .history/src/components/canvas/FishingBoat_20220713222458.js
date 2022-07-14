/* eslint-disable react/display-name */
import FishingBoatModel from './FishingBoatModel'
import React, { useState, forwardRef, useRef, useEffect } from 'react'
import { Physics, useBox } from '@react-three/cannon'
const FishingBoat = forwardRef((_props, ref) => {
  const [boatRef, api] = useBox(() => ({ mass: 0 }))
  return (
    <group
      onClick={() => handleClick()}
      position={_props.boatPosition}
      rotation={_props.boatRotation}
      ref={ref}
      speed={{
        vel: 0,
        rot: 0,
      }}
    >
      <mesh ref={boatRef}>
        <FishingBoatModel />
      </mesh>
    </group>
  )
})

export default FishingBoat

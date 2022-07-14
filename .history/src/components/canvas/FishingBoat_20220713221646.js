/* eslint-disable react/display-name */
import FishingBoatModel from './FishingBoatModel'
import React, { useState, forwardRef, useRef, useEffect } from 'react'

const FishingBoat = forwardRef((_props, ref) => {
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
      <FishingBoatModel />
    </group>
  )
})

export default FishingBoat

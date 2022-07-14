/* eslint-disable react/display-name */
import FishingBoatModel from './FishingBoatModel'
import React, { useState, forwardRef } from 'react'

const FishingBoat = forwardRef((_props, ref) => {
  const [boatPosition, setBoatPosition] = useState([280, -3, 750])

  const [boatRotation, setBoatRotation] = useState([0, 1, 0])

  console.log('MR', ref)

  handleClick = () => {
    console.log('ref', ref)
  }
  return (
    <group
      onClick={() => handleClick()}
      position={boatPosition}
      rotation={boatRotation}
      ref={ref}
    >
      <FishingBoatModel />
    </group>
  )
})

export default FishingBoat

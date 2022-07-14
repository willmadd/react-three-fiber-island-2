import FishingBoatModel from './FishingBoatModel'
import React, { useState, forwardRef } from 'react'

const FishingBoat = forwardRef((ref, props) => {
  const [boatPosition, setBoatPosition] = useState([280, -3, 750])

  const [boatRotation, setBoatRotation] = useState([0, 1, 0])

  console.log('MR', modelRef)
  return (
    <group position={boatPosition} rotation={boatRotation} ref={ref}>
      <FishingBoatModel />
    </group>
  )
})

export default FishingBoat

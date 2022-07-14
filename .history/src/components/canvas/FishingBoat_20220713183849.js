import FishingBoatModel from './FishingBoatModel'
import React, { useState } from 'react'

const FishingBoat = forwardRef({ modelRef }) => {
  const [boatPosition, setBoatPosition] = useState([280, -3, 750])

  const [boatRotation, setBoatRotation] = useState([0, 1, 0])

  console.log('MR', modelRef)
  return (
    <group position={boatPosition} rotation={boatRotation} ref={modelRef}>
      <FishingBoatModel />
    </group>
  )
}

export default FishingBoat

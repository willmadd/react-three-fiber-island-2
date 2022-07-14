import FishingBoatModel from './FishingBoatModel'
import React, { useState } from 'react'

const FishingBoat = () => {
  const [boatPosition, setBoatPosition] = useState([280, -3, 750])

  const [boatRotation, setBoatRotation] = useState([0, 1, 0])
  return (
    <group position={boatPosition} rotation={boatRotation}>
      <FishingBoatModel />
    </group>
  )
}

export default FishingBoat

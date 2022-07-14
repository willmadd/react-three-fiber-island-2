import React from 'react'
import FishingBoatModel from './FishingBoatModel'
import React, { useState } from 'react'

const [boatPosition, setBoatPosition] = useState([280, -3, 750])

const [boatRotation, setBoatRotation] = useState([280, -3, 750])

const FishingBoat = () => {
  return (
    <group position={boatPosition}>
      <FishingBoatModel />
    </group>
  )
}

export default FishingBoat

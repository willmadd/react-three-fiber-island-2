import Boat from './Boat'
import React, { Suspense } from 'react'

const BoatModel = () => {
  // const gltf = useLoader(GLTFLoader, './models/boatsm.gltf')

  return (
    <Suspense fallback={null}>
      <Boat position={[120, -3, 750]} />
      <Boat position={[170, -3, 710]} rotation={[0, 1.3, 0.02]} />
    </Suspense>
  )
}

export default BoatModel

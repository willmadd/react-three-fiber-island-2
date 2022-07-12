import Boat from './Boat'
import { Suspense } from 'react'

const BoatModel = ({ boat1Ref, boat2Ref, clickOnBoat }) => {
  return (
    <Suspense fallback={null}>
      <mesh ref={boat1Ref}>
        <Boat position={[120, -3, 750]} onClick={clickOnBoat} />
      </mesh>
      <Boat
        position={[170, -3, 710]}
        rotation={[0, 1.3, 0.02]}
        ref={boat2Ref}
        onClick={clickOnBoat}
      />
    </Suspense>
  )
}

export default BoatModel

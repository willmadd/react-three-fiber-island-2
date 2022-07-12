import Boat from './Boat'
import { Suspense } from 'react'

const BoatModel = ({ boat1Ref, boat2Ref, clickOnBoat }) => {
  return (
    <Suspense fallback={null}>
      <group ref={boat1Ref}>
        <Boat position={[120, -3, 750]} onClick={clickOnBoat} />
      </group>
      <group ref={boat2Ref}>
        <Boat
          position={[170, -3, 710]}
          rotation={[0, 1.3, 0.02]}
          onClick={clickOnBoat}
        />
      </group>
    </Suspense>
  )
}

export default BoatModel

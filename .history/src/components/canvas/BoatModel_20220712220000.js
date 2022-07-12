import Boat from './Boat'
import { Suspense } from 'react'

const BoatModel = ({ boat1Ref, boat2Ref }) => {
  return (
    <Suspense fallback={null}>
      <Boat position={[120, -3, 750]} ref={boat1Ref} />
      <Boat
        position={[170, -3, 710]}
        rotation={[0, 1.3, 0.02]}
        ref={boat2Ref}
      />
    </Suspense>
  )
}

export default BoatModel

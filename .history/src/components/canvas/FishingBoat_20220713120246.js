/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/models/fishingBoat.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Boat.geometry}
        material={materials.boat}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.17}
      />
    </group>
  )
}

useGLTF.preload('/models/fishingBoat.gltf')

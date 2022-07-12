import * as THREE from 'three'
import { useFrame, extend } from '@react-three/fiber'
import { useRef, useState } from 'react'
import useStore from '@/helpers/store'
import { shaderMaterial } from '@react-three/drei'

const Shader = (props) => {
  const meshRef = useRef(null)

  return (
    <mesh ref={meshRef}>
      <boxBufferGeometry args={[1, 1, 1]} />
      {/* @ts-ignore */}
      <meshBasicMaterial color={'red'} />
    </mesh>
  )
}

export default Shader
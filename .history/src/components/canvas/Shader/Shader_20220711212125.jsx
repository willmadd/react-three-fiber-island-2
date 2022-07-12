import * as THREE from 'three'
import { useFrame, extend } from '@react-three/fiber'
import { useRef, useState } from 'react'
import useStore from '@/helpers/store'
import { shaderMaterial } from '@react-three/drei'

const Shader = (props) => {
  const meshRef = useRef(null)

  return (
    <>
      <pointLight position={[-3, 3, 3]} />
      <ambientLight intensity={0.3} />
      <mesh ref={meshRef}>
        <boxBufferGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color={'red'} />
      </mesh>
    </>
  )
}

export default Shader

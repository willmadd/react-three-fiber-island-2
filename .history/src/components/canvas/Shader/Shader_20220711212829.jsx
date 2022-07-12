import * as THREE from 'three'
import useStore from '@/helpers/store'
import { shaderMaterial } from '@react-three/drei'
import React, { Suspense, useRef, useMemo } from 'react'
import {
  Canvas,
  extend,
  useThree,
  useLoader,
  useFrame,
} from '@react-three/fiber'
import { OrbitControls, Sky } from '@react-three/drei'
import { Water } from 'three-stdlib'
import waterNormals from '../../../../public/img/waternormal.jpeg'

extend({ Water })

const Shader = (props) => {
  const meshRef = useRef(null)

  return (
    <>
      <pointLight position={[3, 3, 3]} />
      <ambientLight intensity={0.3} />
      <mesh ref={meshRef}>
        <boxBufferGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={'red'} />
      </mesh>
      <Ocean />
    </>
  )
}

export default Shader

function Ocean() {
  const ref = useRef()
  const gl = useThree((state) => state.gl)
  const waterNormals = useLoader(THREE.TextureLoader, '../../../')
  waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping
  const geom = useMemo(() => new THREE.PlaneGeometry(10000, 10000), [])
  const config = useMemo(
    () => ({
      textureWidth: 512,
      textureHeight: 512,
      waterNormals,
      sunDirection: new THREE.Vector3(),
      sunColor: 0xffffff,
      waterColor: 0x001e0f,
      distortionScale: 3.7,
      fog: true,
      format: gl.encoding,
    }),
    [waterNormals]
  )
  useFrame(
    (state, delta) => (ref.current.material.uniforms.time.value += delta)
  )
  return <water ref={ref} args={[geom, config]} rotation-x={-Math.PI / 2} />
}

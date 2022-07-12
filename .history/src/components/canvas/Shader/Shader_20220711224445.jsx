import * as THREE from 'three'
import useStore from '@/helpers/store'
import { PerspectiveCamera, shaderMaterial } from '@react-three/drei'
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
import waterNormalsSrc from '../../../../public/img/waternormal.jpeg'
import islandSrc from '../../../../public/img/islandheightmap.png'

import rocksSrc from '../../../../public/img/rocks.jpeg'

extend({ Water })

const Shader = (props) => {
  const meshRef = useRef(null)

  return (
    <>
      <pointLight position={[3, 3, 3]} />
      <ambientLight intensity={0.3} />
      <mesh ref={meshRef} position={[0, 4, 1]}>
        <boxBufferGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={'red'} />
      </mesh>
      <Sky
        distance={450000}
        sunPosition={[0, 1, 0]}
        inclination={0}
        azimuth={0.25}
      />
      <Island />
      <Ocean />
    </>
  )
}

export default Shader

const Island = () => {
  const islandHeightMap = useLoader(THREE.TextureLoader, islandSrc.src)
  const islandTextureMap = useLoader(THREE.TextureLoader, rocksSrc.src)
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.05, 0]}>
      <PerspectiveCamera makeDefault args={[75, 1.2, 1, 100]} />
      <planeBufferGeometry args={[160, 160, 32, 32]} />
      <meshStandardMaterial
        // wireframe
        displacementMap={islandHeightMap}
        displacementScale={40}
        map={islandTextureMap}
      />
    </mesh>
  )
}

function Ocean() {
  const ref = useRef()
  const gl = useThree((state) => state.gl)
  const waterNormals = useLoader(THREE.TextureLoader, waterNormalsSrc.src)
  waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping
  const geom = useMemo(() => new THREE.PlaneGeometry(10000, 10000), [])
  const config = useMemo(
    () => ({
      textureWidth: 256,
      textureHeight: 256,
      waterNormals,
      sunDirection: new THREE.Vector3(),
      sunColor: 'yellow',
      waterColor: 0x064273,
      distortionScale: 2,
      fog: false,
      format: gl.encoding,
    }),
    [waterNormals]
  )
  useFrame(
    (state, delta) => (ref.current.material.uniforms.time.value += delta)
  )
  return <water ref={ref} args={[geom, config]} rotation-x={-Math.PI / 2} />
}

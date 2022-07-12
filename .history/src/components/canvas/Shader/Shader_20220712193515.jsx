import * as THREE from 'three'
import useStore from '@/helpers/store'
import { useGraph } from '@react-three/fiber'
import { PerspectiveCamera, shaderMaterial } from '@react-three/drei'
import React, { Suspense, useRef, useMemo } from 'react'
import {
  Canvas,
  extend,
  useThree,
  useLoader,
  useFrame,
} from '@react-three/fiber'
import { OrbitControls, Sky, useGLTF } from '@react-three/drei'
import { Water } from 'three-stdlib'
import waterNormalsSrc from '../../../../public/img/waternormal2.jpeg'
import islandSrc from '../../../../public/img/islandheightmap.png'
import { SkeletonUtils } from 'three/examples/jsm/utils/SkeletonUtils'
import rocksSrc from '../../../../public/img/rocks.jpeg'

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

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
      <Boat />
    </>
  )
}

export default Shader

const Boat = () => {
  const gltf = useLoader(GLTFLoader, './models/boatsm.gltf')

  return (
    <Suspense fallback={null}>
      <primitive object={gltf.scene} />
      {/* <primitive
        object={nodes}
        position={[25, 1, -17]}
        scale={0.05}
        rotation={props.rotation}
      /> */}
    </Suspense>
  )
}

const Island = () => {
  const islandHeightMap = useLoader(THREE.TextureLoader, islandSrc.src)
  const islandTextureMap = useLoader(THREE.TextureLoader, rocksSrc.src)
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.05, 0]}>
      {/* <PerspectiveCamera
        makeDefault
        args={[75, 1.2, 100, 10000]}
        position={[85, 75, 70]}
      /> */}
      <planeBufferGeometry args={[160, 160, 32, 32]} />
      <meshStandardMaterial
        // wireframe
        displacementMap={islandHeightMap}
        displacementScale={40}
        map={islandTextureMap}
        polygonOffset={true}
        polygonOffsetFactor={-0.1}
      />
    </mesh>
  )
}

function Ocean() {
  const ref = useRef()
  const gl = useThree((state) => state.gl)
  const waterNormals = useLoader(THREE.TextureLoader, waterNormalsSrc.src)
  waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping
  const geom = useMemo(() => new THREE.PlaneGeometry(1000, 1000), [])
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

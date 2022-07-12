import * as THREE from 'three'
import useStore from '@/helpers/store'
import { useGraph } from '@react-three/fiber'
import {
  Environment,
  PerspectiveCamera,
  shaderMaterial,
} from '@react-three/drei'
import React, { Suspense, useRef, useMemo } from 'react'
import {
  Canvas,
  extend,
  useThree,
  useLoader,
  useFrame,
} from '@react-three/fiber'
import { OrbitControls, Sky, useGLTF, Float } from '@react-three/drei'
import { Water } from 'three-stdlib'
import waterNormalsSrc from '../../../../public/img/waternormal2.jpeg'
import islandSrc from '../../../../public/img/islandheightmap.jpg'
import { SkeletonUtils } from 'three/examples/jsm/utils/SkeletonUtils'
import rocksSrc from '../../../../public/img/rocks.jpeg'
import BoatModel from './Boat'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

extend({ Water })

const Shader = (props) => {
  const meshRef = useRef(null)

  return (
    <>
      <PerspectiveCamera makeDefault position={[200, 50, 1000]} />
      <pointLight position={[60, 60, 230]} />
      <ambientLight intensity={0.1} />
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
      <Float
        floatingRange={[-0.5, -0.3]}
        speed={11} // Animation speed, defaults to 1
        rotationIntensity={0.07} // XYZ rotation intensity, defaults to 1
        floatIntensity={0.9} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
        // floatingRange={[0, 0.01]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
      >
        <Ocean />
        <Boat />
      </Float>
      <Environment
        background={true}
        files={['./img/sky.webp']}
        path={'/'}
        preset={'night'}
      />
    </>
  )
}

export default Shader

const Boat = () => {
  // const gltf = useLoader(GLTFLoader, './models/boatsm.gltf')

  return (
    <Suspense fallback={null}>
      {/* <Float
        floatingRange={[-3.0, -3.2]}
        speed={10} // Animation speed, defaults to 1
        rotationIntensity={0.05} // XYZ rotation intensity, defaults to 1
        floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
        // floatingRange={[0, 0.01]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
      > */}
      <BoatModel position={[130, -3, 800]} />
      {/* </Float> */}
      {/* <Float
        floatingRange={[-3.6, -3.7]}
        speed={11} // Animation speed, defaults to 1
        rotationIntensity={0.07} // XYZ rotation intensity, defaults to 1
        floatIntensity={0.9} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
        // floatingRange={[0, 0.01]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
      > */}
      <BoatModel position={[170, -3, 810]} rotation={[0, 1.3, 0.02]} />
      {/* </Float> */}
    </Suspense>
  )
}

const Island = () => {
  const islandHeightMap = useLoader(THREE.TextureLoader, islandSrc.src)
  const islandTextureMap = useLoader(THREE.TextureLoader, rocksSrc.src)
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -8, 0]}>
      {/* <PerspectiveCamera
        makeDefault
        args={[75, 1.2, 100, 10000]}
        position={[85, 75, 70]}
      /> */}
      <planeBufferGeometry args={[1640, 1640, 132, 123]} />
      <meshStandardMaterial
        // wireframe
        displacementMap={islandHeightMap}
        displacementScale={320}
        map={islandTextureMap}
        polygonOffset={true}
        polygonOffsetFactor={-0.1}
      />
    </mesh>
    // </Float>
  )
}

function Ocean() {
  const ref = useRef()
  const gl = useThree((state) => state.gl)
  const waterNormals = useLoader(THREE.TextureLoader, waterNormalsSrc.src)
  waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping
  const geom = useMemo(() => new THREE.PlaneGeometry(5000, 5000), [])
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
  return (
    // <Float
    //   floatingRange={[-0.5, -0.3]}
    //   speed={11} // Animation speed, defaults to 1
    //   rotationIntensity={0.07} // XYZ rotation intensity, defaults to 1
    //   floatIntensity={0.9} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
    //   // floatingRange={[0, 0.01]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
    // >
    <water ref={ref} args={[geom, config]} rotation-x={-Math.PI / 2} />
    // </Float>
  )
}

import { extend, useThree, useLoader, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

import islandSrc from '../../../public/img/islandheightmap.jpg'
import outterIslandSrc from '../../../public/img/outHeightMap.jpeg'
import rocksSrc from '../../../public/img/rocks.jpeg'
const Island = () => {
  const islandHeightMap = useLoader(THREE.TextureLoader, islandSrc.src)
  const outterIslandHeightMap = useLoader(
    THREE.TextureLoader,
    outterIslandSrc.src
  )
  const islandTextureMap = useLoader(THREE.TextureLoader, rocksSrc.src)
  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -80, 0]}>
        <planeBufferGeometry args={[4000, 4000, 132, 123]} />
        <meshStandardMaterial
          // wireframe
          displacementMap={outterIslandHeightMap}
          displacementScale={1320}
          map={islandTextureMap}
          polygonOffset={true}
          polygonOffsetFactor={-0.1}
        />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -8, 0]}>
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
    </group>
    // </Float>
  )
}

export default Island

const Island = () => {
  const islandHeightMap = useLoader(THREE.TextureLoader, islandSrc.src)
  const islandTextureMap = useLoader(THREE.TextureLoader, rocksSrc.src)
  return (
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
    // </Float>
  )
}

export default Island

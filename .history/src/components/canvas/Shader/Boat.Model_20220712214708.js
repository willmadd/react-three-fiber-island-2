const Boat = () => {
  // const gltf = useLoader(GLTFLoader, './models/boatsm.gltf')

  return (
    <Suspense fallback={null}>
      <BoatModel position={[120, -3, 750]} />
      <BoatModel position={[170, -3, 710]} rotation={[0, 1.3, 0.02]} />
    </Suspense>
  )
}

export default BoatModel

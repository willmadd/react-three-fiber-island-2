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

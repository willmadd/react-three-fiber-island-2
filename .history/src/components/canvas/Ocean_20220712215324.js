import React, { useRef } from 'react'
import { extend, useThree, useLoader, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import waterNormalsSrc from '../../../public/img/waternormal2.jpeg'

const Ocean = () => {
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
  return <water ref={ref} args={[geom, config]} rotation-x={-Math.PI / 2} />
}

export default Ocean

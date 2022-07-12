/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/boatsm.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[2.22, 2.11, 1.15]} rotation={[-Math.PI / 2, 0, 0]} scale={0.04}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.Cube001_low001_Material_0.geometry} material={nodes.Cube001_low001_Material_0.material} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.Cube002_low001_Material_0.geometry} material={nodes.Cube002_low001_Material_0.material} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.Cube003_low001_Material_0.geometry} material={nodes.Cube003_low001_Material_0.material} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.Cube004_low001_Material_0.geometry} material={nodes.Cube004_low001_Material_0.material} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.Cube005_low001_Material_0.geometry} material={nodes.Cube005_low001_Material_0.material} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.Cube006_low001_Material_0.geometry} material={nodes.Cube006_low001_Material_0.material} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.Cube007_low001_Material_0.geometry} material={nodes.Cube007_low001_Material_0.material} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.Cube008_low001_Material_0.geometry} material={nodes.Cube008_low001_Material_0.material} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.Cube009_low001_Material_0.geometry} material={nodes.Cube009_low001_Material_0.material} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.Cube010_low001_Material_0.geometry} material={nodes.Cube010_low001_Material_0.material} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.Cube013_low001_Material_0.geometry} material={nodes.Cube013_low001_Material_0.material} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.Cube014_low001_Material_0.geometry} material={nodes.Cube014_low001_Material_0.material} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.Cube018_low001_Material_0.geometry} material={nodes.Cube018_low001_Material_0.material} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.Cube019_low001_Material_0.geometry} material={nodes.Cube019_low001_Material_0.material} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.Cube025_low001_Material_0.geometry} material={nodes.Cube025_low001_Material_0.material} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.Cube027_low001_Material_0.geometry} material={nodes.Cube027_low001_Material_0.material} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.Cube030_low001_Material_0.geometry} material={nodes.Cube030_low001_Material_0.material} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.Cylinder_low001_Material_0.geometry} material={nodes.Cylinder_low001_Material_0.material} />
          </group>
        </group>
      </group>
      <mesh geometry={nodes.Cube.geometry} material={materials.Material} position={[2.22, 2.11, 1.15]} scale={0.22} />
    </group>
  )
}

useGLTF.preload('/boatsm.gltf')
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/models/Room.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, 2.64, 0]} scale={2.64}>
        <mesh geometry={nodes.Cube.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cube_1.geometry} material={materials['Material.003']} />
        <mesh geometry={nodes.Cube_2.geometry} material={materials['Material.042']} />
      </group>
      <group position={[-2.03, 1.25, -0.99]} rotation={[0, 1.57, 0]} scale={[1.65, 0.11, 0.57]}>
        <mesh geometry={nodes.Cube001.geometry} material={materials['Material.004']} />
        <mesh geometry={nodes.Cube001_1.geometry} material={materials['Material.005']} />
        <mesh geometry={nodes.Cube001_2.geometry} material={materials['Material.006']} />
      </group>
      <group position={[-2.05, 1.94, 0.12]} rotation={[3, 0.97, -3.02]} scale={[0.77, 0.38, 0.02]}>
        <mesh geometry={nodes.Cube002.geometry} material={nodes.Cube002.material} />
        <mesh geometry={nodes.Cube002_1.geometry} material={nodes.Cube002_1.material} />
      </group>
      <group position={[-2.05, 1.94, -1.2]} rotation={[0.15, 0.97, -0.12]} scale={[0.77, 0.38, 0.02]}>
        <mesh geometry={nodes.Cube004.geometry} material={nodes.Cube004.material} />
        <mesh geometry={nodes.Cube004_1.geometry} material={nodes.Cube004_1.material} />
      </group>
      <group position={[-2.52, 1.66, 1.79]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.34, 0.34, 0.42]}>
        <mesh geometry={nodes.Plane001_1.geometry} material={materials['Material.011']} />
        <mesh geometry={nodes.Plane001_2.geometry} material={materials['Material.012']} />
        <mesh geometry={nodes.Plane001_3.geometry} material={materials['Material.013']} />
        <mesh geometry={nodes.Plane001_4.geometry} material={materials['Material.014']} />
        <mesh geometry={nodes.Plane001_5.geometry} material={materials['Material.015']} />
        <mesh geometry={nodes.Plane001_6.geometry} material={materials['Material.016']} />
        <mesh geometry={nodes.Plane001_7.geometry} material={materials['Material.009']} />
        <mesh geometry={nodes.Plane001_8.geometry} material={materials['Material.017']} />
        <mesh geometry={nodes.Plane001_9.geometry} material={materials['Material.018']} />
        <mesh geometry={nodes.Plane001_10.geometry} material={materials['Material.019']} />
        <mesh geometry={nodes.Plane001_11.geometry} material={materials['Material.020']} />
        <mesh geometry={nodes.Plane001_12.geometry} material={materials['Material.021']} />
        <mesh geometry={nodes.Plane001_13.geometry} material={materials['Material.022']} />
        <mesh geometry={nodes.Plane001_14.geometry} material={materials['Material.023']} />
        <mesh geometry={nodes.Plane001_15.geometry} material={materials['Material.024']} />
        <mesh geometry={nodes.Plane001_16.geometry} material={materials['Material.025']} />
        <mesh geometry={nodes.Plane001_17.geometry} material={materials['Material.026']} />
        <mesh geometry={nodes.Plane001_18.geometry} material={materials['Material.027']} />
        <mesh geometry={nodes.Plane001_19.geometry} material={materials['Material.028']} />
      </group>
      <group position={[-0.84, 1.37, -2.11]} rotation={[0, 0.22, 0]} scale={[0.42, 0.01, 0.28]}>
        <mesh geometry={nodes.Cube003.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Cube003_1.geometry} material={materials['Material.029']} />
        <mesh geometry={nodes.Cube003_2.geometry} material={materials['Material.030']} />
        <mesh geometry={nodes.Cube003_3.geometry} material={materials['Material.031']} />
        <mesh geometry={nodes.Cube003_4.geometry} material={materials['Material.032']} />
        <mesh geometry={nodes.Cube003_5.geometry} material={materials['Material.033']} />
      </group>
      <group position={[-1.83, 1.37, -0.75]} rotation={[0, 1.18, 0]} scale={[0.47, 0.02, 0.24]}>
        <mesh geometry={nodes.Cube109.geometry} material={materials['Material.035']} />
        <mesh geometry={nodes.Cube109_1.geometry} material={materials['Material.036']} />
        <mesh geometry={nodes.Cube109_2.geometry} material={materials['Material.037']} />
        <mesh geometry={nodes.Cube109_3.geometry} material={materials['Material.038']} />
        <mesh geometry={nodes.Cube109_4.geometry} material={materials['Material.039']} />
        <mesh geometry={nodes.Cube109_5.geometry} material={materials['Material.034']} />
      </group>
      <group position={[1, 1.71, -1.5]} rotation={[-0.21, -0.56, -0.11]} scale={[0.42, 0.96, 0.1]}>
        <mesh geometry={nodes.Cube215.geometry} material={materials['Material.040']} />
        <mesh geometry={nodes.Cube215_1.geometry} material={materials['Material.041']} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/Room.glb')

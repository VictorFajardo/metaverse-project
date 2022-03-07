import { useTexture } from '@react-three/drei'
import YourName from './../img/YourName.jpg'

export default function Model({ ...props }) {
  const texture = useTexture(YourName)
  return (
    <group >
      <group position={[-0.4, 4.05, -2.639]} scale={1.28} rotation={[0, 0, 0]}>
      <mesh>
        <planeBufferGeometry attach="geometry" args={[1, 1.5]} />
        <meshBasicMaterial attach="material" map={texture} opacity={0.0} reflectivity={0} />
      </mesh>
      </group>
    </group>
  )
}

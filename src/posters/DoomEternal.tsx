import { useTexture } from '@react-three/drei'
import DoomEternal from './../img/DoomEternal.jpg'

export default function Model({ ...props }) {
  const texture = useTexture(DoomEternal)
  return (
    <group >
      <group position={[-2.919, 4, 1.8]} scale={2} rotation={[0, Math.PI / 2, 0]}>
      <mesh>
        <planeBufferGeometry attach="geometry" args={[0.683, 1.024]} />
        <meshBasicMaterial attach="material" map={texture} opacity="0" />
      </mesh>
      </group>
    </group>
  )
}

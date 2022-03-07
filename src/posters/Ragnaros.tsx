import { useTexture } from '@react-three/drei'
import Ragnaros from './../img/Ragnaros.jpg'

export default function Model({ ...props }) {
  const texture = useTexture(Ragnaros)
  return (
    <group >
      <group position={[-2.919, 4, 0]} scale={2} rotation={[0, Math.PI / 2, 0]}>
      <mesh>
        <planeBufferGeometry attach="geometry" args={[0.683, 1.024]} />
        <meshBasicMaterial attach="material" map={texture} />
      </mesh>
      </group>
    </group>
  )
}

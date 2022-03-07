import { useTexture } from '@react-three/drei'
import Lina from './../img/Lina.jpg'

export default function Model({ ...props }) {
  const texture = useTexture(Lina)
  return (
    <group >
      <group position={[-2.919, 3.8, -1.8]} scale={3.5} rotation={[0, Math.PI / 2, 0]}>
      <mesh>
        <planeBufferGeometry attach="geometry" args={[0.39, 0.693]} />
        <meshBasicMaterial attach="material" map={texture} />
      </mesh>
      </group>
    </group>
  )
}

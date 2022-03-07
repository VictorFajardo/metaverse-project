import { useTexture } from '@react-three/drei'
import Tracer from './../img/Tracer.jpg'

export default function Model({ ...props }) {
  const texture = useTexture(Tracer)
  return (
    <group >
      <group position={[-2, 4.05, -2.639]} scale={3.2} rotation={[0, 0, 0]}>
      <mesh>
        <planeBufferGeometry attach="geometry" args={[0.4, 0.6]} />
        <meshBasicMaterial attach="material" map={texture} />
      </mesh>
      </group>
    </group>
  )
}

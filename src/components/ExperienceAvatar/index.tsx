import { ContactShadows, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Avatar from '../Models/Avatar'
import { useControls } from 'leva'

const ExperienceAvatar = () => {
  const { animation } = useControls({
    animation: {
      value: "Standing",
      options: ["Typing", "Falling", "Standing", "Waving"],
    }
  })

  return (
    <Canvas
      shadows
      camera={{ position: [0, 2, 6], fov: 30 }}
    >
      <OrbitControls
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
      />
      <group position-y={-1} >
        <ambientLight intensity={1} />
        <ContactShadows
          opacity={0.42}
          scale={10}
          blur={1}
          far={10}
          resolution={256}
          color={"#000000"}
        />
        <Avatar animation={animation} />
        {animation === "Typing" && (
          <mesh scale={[0.8, 0.5, 0.8]} position-y={0.25} >
            <boxGeometry />
            <meshStandardMaterial color="#ececec" />
          </mesh>
        )}

        <mesh scale={2} position-y={-0.001} rotation-x={-Math.PI * 0.5}>
          <circleGeometry args={[.5, 16]} />
          <meshStandardMaterial color="#ececec" />
        </mesh>
      </group>
    </Canvas>
  )
}

export default ExperienceAvatar

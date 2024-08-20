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
    <>
      <Canvas
        shadows
        camera={{ position: [0, 2, 5], fov: 30 }}
        gl={{ alpha: true }}  // Permite a transparência no canvas
        style={{ background: 'transparent' }}  // Define o fundo como transparente
      >
        {/* <color attach="background" args={["#ececec"]} /> */}
        <OrbitControls
          // enableZoom={false} // Desativa o zoom (opcional)
          // minPolarAngle={Math.PI / 2} // Limita o ângulo mínimo
          // maxPolarAngle={Math.PI / 2} // Limita o ângulo máximo
        />
        <ambientLight intensity={2} />
        <group  >
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
            <mesh scale={[0.8, 0.5, 0.8]} position-y={0.35} >
              <boxGeometry />
              <meshStandardMaterial color="#ececec" />
            </mesh>
          )}
          <mesh scale={5} position-y={-0.001}>
            <planeGeometry />
            <meshStandardMaterial color="#ececec" />
          </mesh>
        </group>
        {/* <mesh>
          <meshNormalMaterial />
          <boxGeometry />
        </mesh> */}
      </Canvas>
    </>
  )
}

export default ExperienceAvatar

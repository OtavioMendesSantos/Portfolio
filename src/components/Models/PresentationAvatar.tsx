import { Canvas } from '@react-three/fiber'
import { OrbitControls, ContactShadows, Html, useProgress } from '@react-three/drei'
import Avatar from './Avatar'
import { useControls } from 'leva'

// Componente de Loading
const Loader = () => {
  const { progress } = useProgress() // Pega o progresso do carregamento
  if (progress === 100) return null
  return (
    <Html center>
      <div style={{
        background: 'rgba(255, 255, 255, 0.75)',
        borderRadius: '8px',
        padding: '10px 20px',
        textAlign: 'center',
        fontSize: '16px',
        color: '#333',
      }}>
        {Math.floor(progress)}% loading...
      </div>
    </Html>
  )
}

const PresentationAvatar = () => {
  const { animation } = useControls({
    animation: {
      value: "Standing",
      options: ["Typing", "Standing", "Waving"],
    }
  })

  return (
    <Canvas
      shadows
      camera={{ position: [0, 1, 5], fov: 45, near: 1, far: 1000 }}
    >
      <Loader />
      <OrbitControls
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
        enablePan={false}
        
        enableZoom={false}
      />
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} castShadow />
      <group position-y={-1} scale={[1, 1, 1]}>
        <Avatar animation={animation} />
        <ContactShadows
          opacity={0.42}
          scale={10}
          blur={1}
          far={10}
          resolution={256}
          color={"#000000"}
        />
        {animation === "Typing" && (
          <mesh scale={[0.8, 0.4, 0.8]} position={[0, 0.25, -0.2]}>
            <boxGeometry />
            <meshStandardMaterial color="#ececec" />
          </mesh>
        )}
      </group>
    </Canvas>
  )
}

export default PresentationAvatar

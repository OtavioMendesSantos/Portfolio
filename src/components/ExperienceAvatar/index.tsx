import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Avatar from '../Models/Avatar'

const ExperienceAvatar = () => {
  return (
    <>
      <Canvas shadows camera={{ position: [3, 3, 3], fov: 30 }}>
        <color attach="background" args={["#ececec"]} />
        <OrbitControls />
        <Avatar />
        <mesh>
          <meshNormalMaterial />
          <boxGeometry />
        </mesh>
      </Canvas >
    </>
  )
}

export default ExperienceAvatar
// @ts-nocheck
import React, { useEffect, useRef } from 'react'
import { useAnimations, useFBX, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useControls } from 'leva'
import * as THREE from 'three'

const Avatar: React.FC<{ animation?: string }> = ({ animation, ...props }) => {
  const { headFollow, cursorFollow, wireframe } = useControls({
    headFollow: false,
    cursorFollow: false,
    wireframe: false
  })
  const group = useRef()
  const { nodes, materials } = useGLTF('models/avatarreadyplayer.glb')

  const { animations: typingAnimation } = useFBX('animations/Typing.fbx')
  const { animations: fallingIdle } = useFBX('animations/Falling_Idle.fbx')
  const { animations: standingIdle } = useFBX('animations/Standing_Idle.fbx')
  const { animations: waving } = useFBX('animations/Waving.fbx')

  typingAnimation[0].name = "Typing"
  fallingIdle[0].name = "Falling"
  standingIdle[0].name = "Standing"
  waving[0].name = "Waving"

  const { actions } = useAnimations(
    [typingAnimation[0], fallingIdle[0], standingIdle[0], waving[0]],
    group
  )

  useFrame((state) => {
    if (headFollow) {
      group.current.getObjectByName("Head").lookAt(state.camera.position)
    }
    if (cursorFollow) {
      const target = new THREE.Vector3(state.mouse.x, state.mouse.y, 1)
      group.current.getObjectByName("Spine2").lookAt(target)
    }
  })

  useEffect(() => {
    actions[animation]?.reset().fadeIn(0.5).play()
    return () => {
      actions[animation]?.reset().fadeOut()
    }
  }, [animation])

  useEffect(() => {
    Object.values(materials).forEach((material) => {
      material.wireframe = wireframe
    })
  }, [wireframe])

  return (
    <group {...props} dispose={null} ref={group} >
      <group>
        <primitive object={nodes.Hips} />
        <skinnedMesh
          name="EyeLeft"
          geometry={nodes.EyeLeft.geometry}
          material={materials.Wolf3D_Eye}
          skeleton={nodes.EyeLeft.skeleton}
          morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
        />
        <skinnedMesh
          name="EyeRight"
          geometry={nodes.EyeRight.geometry}
          material={materials.Wolf3D_Eye}
          skeleton={nodes.EyeRight.skeleton}
          morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
        />
        <skinnedMesh
          name="Wolf3D_Head"
          geometry={nodes.Wolf3D_Head.geometry}
          material={materials.Wolf3D_Skin}
          skeleton={nodes.Wolf3D_Head.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
        />
        <skinnedMesh
          name="Wolf3D_Teeth"
          geometry={nodes.Wolf3D_Teeth.geometry}
          material={materials.Wolf3D_Teeth}
          skeleton={nodes.Wolf3D_Teeth.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Hair.geometry}
          material={materials.Wolf3D_Hair}
          skeleton={nodes.Wolf3D_Hair.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Top.geometry}
          material={materials.Wolf3D_Outfit_Top}
          skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
          material={materials.Wolf3D_Outfit_Bottom}
          skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
          material={materials.Wolf3D_Outfit_Footwear}
          skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Body.geometry}
          material={materials.Wolf3D_Body}
          skeleton={nodes.Wolf3D_Body.skeleton}
        />
      </group>
    </group>
  )
}

export default Avatar

useGLTF.preload('/models/avatarreadyplayer.glb')

import { useGLTF } from '@react-three/drei'

  return (
    <primitive
      object={scene}
      scale={1.5}
      position={[0, 0, 0]}
      rotation={[0, 0, 0]}
      {...props}
    />
  )
}
import React, { useRef, useEffect } from 'react'
import { useLoader, useFrame } from '@react-three/fiber'
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader'

export default function EarthModel({ url }) {
  const geometry = useLoader(STLLoader, url)
  const meshRef = useRef()

  useEffect(() => {
    geometry.center()
  }, [geometry])

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005
    }
  })

  return (
    <mesh
      ref={meshRef}
      geometry={geometry}
      scale={[0.1, 0.1, 0.1]}
      castShadow
      receiveShadow
    >
      <meshStandardMaterial color="#aaaaaa" />
    </mesh>
  )
}

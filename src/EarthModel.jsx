// EarthModel.jsx
import React, { useRef, useEffect } from 'react'
import { useLoader, useFrame } from '@react-three/fiber'
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader'
import * as THREE from 'three'

export default function EarthModel() {
  // Charge le fichier STL dans public/terre.stl (adapte le chemin si besoin)
  const geometry = useLoader(STLLoader, '/terre.stl')
  const meshRef = useRef()

  // Centre la géométrie une fois chargée
  useEffect(() => {
    geometry.center()
  }, [geometry])

  // Rotation continue autour de l’axe Y
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005
    }
  })

  return (
    <mesh
      ref={meshRef}
      geometry={geometry}
      scale={[0.05, 0.05, 0.05]}
      castShadow
      receiveShadow
    >
      <meshStandardMaterial color="#2e8b57" /> {/* couleur vert Terre */}
    </mesh>
  )
}

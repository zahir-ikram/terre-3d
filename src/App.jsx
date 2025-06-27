import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import EarthModel from './EarthModel'

export default function App() {
  return (
    <Canvas
      camera={{ position: [0, 0, 30], fov: 60 }}
      gl={{ alpha: true }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <EarthModel url="terre.stl" />
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  )
}

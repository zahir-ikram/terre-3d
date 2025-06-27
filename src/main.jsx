import React from 'react'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import { Suspense } from 'react'
import EarthModel from './EarthModel'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div style={{ height: '100vh' }}>
    <Canvas camera={{ position: [0, 0, 2] }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Environment preset="sunset" />
        <OrbitControls />
        <EarthModel />
      </Suspense>
    </Canvas>
  </div>
)
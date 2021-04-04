import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'


function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()

  // Rotate mesh every frame
  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01
  })
  return (
    <mesh
      {...props}
      ref={mesh}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#ff91fa" />
    </mesh>
  )
}

export default function Rendering() {
    let array = [
        ["Mirth", "Discontentment", "Pleasure", "Sadness", "Love"],
        ["Approval", "Happiness", "Confidence", "Giddy", "Joy"],
        ["Embarressed", "Bored", "Content", "Celebration", "Hopeless"]
        ];
    for (let i = 0; i < array.length; i++) {
        if (i == 0) {
            return (
                <Canvas>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <pointLight position={[-10, -10, -10]} />
                <Box position={[1.2, 0, 0]} />
                <Box position={[-1.2, 0, 0]} />
                </Canvas>
             )
        } else if (i ==0) {
            return (
                <Canvas>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <pointLight position={[-10, -10, -10]} />
                <Box position={[1.2, 0, 0]} />
                </Canvas>
             )
        }
        
    }
  
}
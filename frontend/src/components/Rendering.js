import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

let array = [
    ["Mirth", "Discontentment", "Pleasure", "Sadness", "Love"],
    ["Approval", "Happiness", "Confidence", "Giddy", "Joy"],
    ["Embarressed", "Bored", "Content", "Celebration", "Hopeless"]
    ];

let renderedObjects = [];

function MirthSphere(props) {
    const mesh = useRef()

    useFrame(() => {
        mesh.current.rotation.x = mesh.current.rotation.y += 0.01
    })
      
    return (
        <mesh
            {...props}
            ref={mesh}>
            <sphereBufferGeometry args={[5, 5, 5]} />
            <meshStandardMaterial color="#ff91fa" />
        </mesh>
    )

}

function ApprovalBox(props) {
    const mesh = useRef()

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
    for (let i = 0; i < array.length; i++) {
        if (array[i][0] == "Mirth") {
            renderedObjects.push( <MirthSphere position={[1.2, 0, 0]} />);
        } else if (array[i][0] == "Approval") {
            renderedObjects.push( <ApprovalBox position={[-1.2, 0, 0]} />);
        } 
    }
    return (
        <Canvas>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />
            {renderedObjects}
        </Canvas>
     )
  
}
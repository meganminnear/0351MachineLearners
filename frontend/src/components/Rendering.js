import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

let array = [
    ["Mirth", "Discontentment", "Pleasure", "Sadness", "Love"],
    ["Approval", "Happiness", "Confidence", "Giddy", "Joy"],
    ["Embarressed", "Bored", "Content", "Celebration", "Hopeless"],
    ["Discontentment"],
    ["Pleasure"],
    ["Sadness"]
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
            <sphereBufferGeometry args={[1, 32, 32]} />
            <meshStandardMaterial color="#f5f542" />
        </mesh>
    )

}

function DiscontentmentTriangle(props) {
    const mesh = useRef()

    useFrame(() => {
        mesh.current.rotation.x = mesh.current.rotation.y += 0.01
    })
      
    return (
        <mesh
            {...props}
            ref={mesh}>
            <tetrahedronBufferGeometry args={[1]} />
            <meshStandardMaterial color="#141e85" />
        </mesh>
    )

}

function PleasureSphere(props) {
    const mesh = useRef()

    useFrame(() => {
        mesh.current.rotation.x = mesh.current.rotation.y += 0.01
    })
      
    return (
        <mesh
            {...props}
            ref={mesh}>
            <sphereBufferGeometry args={[1, 32, 32]} />
            <meshStandardMaterial color="#fec7ff" />
        </mesh>
    )

}

function SadnessSphere(props) {
    const mesh = useRef()

    useFrame(() => {
        mesh.current.rotation.x = mesh.current.rotation.y += 0.01
    })
      
    return (
        <mesh
            {...props}
            ref={mesh}>
            <sphereBufferGeometry args={[1, 32, 32]} />
            <meshStandardMaterial color="#3124a3" />
        </mesh>
    )

}

function LoveSphere(props) {
    const mesh = useRef()

    useFrame(() => {
        mesh.current.rotation.x = mesh.current.rotation.y += 0.01
    })
      
    return (
        <mesh
            {...props}
            ref={mesh}>
            <sphereBufferGeometry args={[1, 32, 32]} />
            <meshStandardMaterial color="#ff0000" />
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
        <meshStandardMaterial color="#f5ef38" />
        </mesh>
    )
}

function HappinessSphere(props) {
    const mesh = useRef()

    useFrame(() => {
        mesh.current.rotation.x = mesh.current.rotation.y += 0.01
    })
      
    return (
        <mesh
            {...props}
            ref={mesh}>
            <sphereBufferGeometry args={[1, 32, 32]} />
            <meshStandardMaterial color="#fff700" />
        </mesh>
    )

}

function ConfidenceCube(props) {
    const mesh = useRef()

    useFrame(() => {
        mesh.current.rotation.x = mesh.current.rotation.y += 0.01
    })
      
    return (
        <mesh
            {...props}
            ref={mesh}>
            <cubeBufferGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="#33c5ff" />
        </mesh>
    )

}

function GiddySphere(props) {
    const mesh = useRef()

    useFrame(() => {
        mesh.current.rotation.x = mesh.current.rotation.y += 0.01
    })
      
    return (
        <mesh
            {...props}
            ref={mesh}>
            <sphereBufferGeometry args={[1, 32, 32]} />
            <meshStandardMaterial color="#f7f728" />
        </mesh>
    )

}

function JoySphere(props) {
    const mesh = useRef()

    useFrame(() => {
        mesh.current.rotation.x = mesh.current.rotation.y += 0.01
    })
      
    return (
        <mesh
            {...props}
            ref={mesh}>
            <sphereBufferGeometry args={[1, 32, 32]} />
            <meshStandardMaterial color="#ffff0a" />
        </mesh>
    )

}

function EmbarressedSphere(props) {
    const mesh = useRef()

    useFrame(() => {
        mesh.current.rotation.x = mesh.current.rotation.y += 0.01
    })
      
    return (
        <mesh
            {...props}
            ref={mesh}>
            <sphereBufferGeometry args={[1, 32, 32]} />
            <meshStandardMaterial color="#ff80fd" />
        </mesh>
    )

}

function BoredCube(props) {
    const mesh = useRef()

    useFrame(() => {
        mesh.current.rotation.x = mesh.current.rotation.y += 0.01
    })
      
    return (
        <mesh
            {...props}
            ref={mesh}>
            <boxBufferGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="#a2a6a8" />
        </mesh>
    )

}

function ContentCube(props) {
    const mesh = useRef()

    useFrame(() => {
        mesh.current.rotation.x = mesh.current.rotation.y += 0.01
    })
      
    return (
        <mesh
            {...props}
            ref={mesh}>
            <sphereBufferGeometry args={[1, 32, 32]} />
            <meshStandardMaterial color="#fffc96" />
        </mesh>
    )

}

function CelebrationCube(props) {
    const mesh = useRef()

    useFrame(() => {
        mesh.current.rotation.x = mesh.current.rotation.y += 0.01
    })
      
    return (
        <mesh
            {...props}
            ref={mesh}>
            <cubeBufferGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="#ffd700" />
        </mesh>
    )

}

function HopelessSphere(props) {
    const mesh = useRef()

    useFrame(() => {
        mesh.current.rotation.x = mesh.current.rotation.y += 0.01
    })
      
    return (
        <mesh
            {...props}
            ref={mesh}>
            <sphereBufferGeometry args={[1, 32, 32]} />
            <meshStandardMaterial color="#00008b" />
        </mesh>
    )

}

function NervousCone(props) {
    const mesh = useRef()

    useFrame(() => {
        mesh.current.rotation.x = mesh.current.rotation.y += 0.01
    })
      
    return (
        <mesh
            {...props}
            ref={mesh}>
            <coneBufferGeometry args={[0.5, 2, 20, 32]} />
            <meshStandardMaterial color="#f03232" />
        </mesh>
    )

}

function HopeSphere(props) {
    const mesh = useRef()

    useFrame(() => {
        mesh.current.rotation.x = mesh.current.rotation.y += 0.01
    })
      
    return (
        <mesh
            {...props}
            ref={mesh}>
            <sphereBufferGeometry args={[1, 32, 32]} />
            <meshStandardMaterial color="#ffb8b8" />
        </mesh>
    )

}

function ConfusedCube(props) {
    const mesh = useRef()

    useFrame(() => {
        mesh.current.rotation.x = mesh.current.rotation.y += 0.01
    })
      
    return (
        <mesh
            {...props}
            ref={mesh}>
            <cubeBufferGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="#f7ae48" />
        </mesh>
    )

}

function AffectionateSphere(props) {
    const mesh = useRef()

    useFrame(() => {
        mesh.current.rotation.x = mesh.current.rotation.y += 0.01
    })
      
    return (
        <mesh
            {...props}
            ref={mesh}>
            <sphereBufferGeometry args={[1, 32, 32]} />
            <meshStandardMaterial color="#fa8787" />
        </mesh>
    )

}

function DisappointedTriangle(props) {
    const mesh = useRef()

    useFrame(() => {
        mesh.current.rotation.x = mesh.current.rotation.y += 0.01
    })
      
    return (
        <mesh
            {...props}
            ref={mesh}>
            <tetrahedronBufferGeometry args={[1]} />
            <meshStandardMaterial color="#d79eff" />
        </mesh>
    )

}

function ShySphere(props) {
    const mesh = useRef()

    useFrame(() => {
        mesh.current.rotation.x = mesh.current.rotation.y += 0.01
    })
      
    return (
        <mesh
            {...props}
            ref={mesh}>
            <sphereBufferGeometry args={[1, 32, 32]} />
            <meshStandardMaterial color="#ffbfbf" />
        </mesh>
    )

}

function FrustratedTriangle(props) {
    const mesh = useRef()

    useFrame(() => {
        mesh.current.rotation.x = mesh.current.rotation.y += 0.01
    })
      
    return (
        <mesh
            {...props}
            ref={mesh}>
            <tetrahedronBufferGeometry args={[1]} />
            <meshStandardMaterial color="#c90c0c" />
        </mesh>
    )

}

function AngerTriangle(props) {
    const mesh = useRef()

    useFrame(() => {
        mesh.current.rotation.x = mesh.current.rotation.y += 0.01
    })
      
    return (
        <mesh
            {...props}
            ref={mesh}>
            <tetrahedronBufferGeometry args={[1]} />
            <meshStandardMaterial color="#8B0000" />
        </mesh>
    )

}

function PlayfulSphere(props) {
    const mesh = useRef()

    useFrame(() => {
        mesh.current.rotation.x = mesh.current.rotation.y += 0.01
    })
      
    return (
        <mesh
            {...props}
            ref={mesh}>
            <sphereBufferGeometry args={[1, 32, 32]} />
            <meshStandardMaterial color="#ffb52b" />
        </mesh>
    )

}

function IrritatedCone(props) {
    const mesh = useRef()

    useFrame(() => {
        mesh.current.rotation.x = mesh.current.rotation.y += 0.01
    })
      
    return (
        <mesh
            {...props}
            ref={mesh}>
            <coneBufferGeometry args={[0.5, 2, 20, 32]} />
            <meshStandardMaterial color="#d16a60" />
        </mesh>
    )

}

function SickCone(props) {
    const mesh = useRef()

    useFrame(() => {
        mesh.current.rotation.x = mesh.current.rotation.y += 0.01
    })
      
    return (
        <mesh
            {...props}
            ref={mesh}>
            <coneBufferGeometry args={[0.5, 2, 20, 32]} />
            <meshStandardMaterial color="#33913f" />
        </mesh>
    )

}

function CuriosityCylinder(props) {
    const mesh = useRef()

    useFrame(() => {
        mesh.current.rotation.x = mesh.current.rotation.y += 0.01
    })
      
    return (
        <mesh
            {...props}
            ref={mesh}>
            <cylinderBufferGeometry args={[.5, .5, 1, 20, 32]} />
            <meshStandardMaterial color="#c9fac5" />
        </mesh>
    )

}

function ViolentCone(props) {
    const mesh = useRef()

    useFrame(() => {
        mesh.current.rotation.x = mesh.current.rotation.y += 0.01
    })
      
    return (
        <mesh
            {...props}
            ref={mesh}>
            <coneBufferGeometry args={[0.5, 2, 20, 32]} />
            <meshStandardMaterial color="#ff3814" />
        </mesh>
    )

}

function EvilTriangle(props) {
    const mesh = useRef()

    useFrame(() => {
        mesh.current.rotation.x = mesh.current.rotation.y += 0.01
    })
      
    return (
        <mesh
            {...props}
            ref={mesh}>
            <tetrahedronBufferGeometry args={[1]} />
            <meshStandardMaterial color="#880808" />
        </mesh>
    )

}

function StressedCube(props) {
    const mesh = useRef()

    useFrame(() => {
        mesh.current.rotation.x = mesh.current.rotation.y += 0.01
    })
      
    return (
        <mesh
            {...props}
            ref={mesh}>
            <boxBufferGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="#d16a60" />
        </mesh>
    )

}

function HeartbrokenSphere(props) {
    const mesh = useRef()

    useFrame(() => {
        mesh.current.rotation.x = mesh.current.rotation.y += 0.01
    })
      
    return (
        <mesh
            {...props}
            ref={mesh}>
            <sphereBufferGeometry args={[1, 32, 32]} />
            <meshStandardMaterial color="#133585" />
        </mesh>
    )

}

function SurprisedCube(props) {
    const mesh = useRef()

    useFrame(() => {
        mesh.current.rotation.x = mesh.current.rotation.y += 0.01
    })
      
    return (
        <mesh
            {...props}
            ref={mesh}>
            <boxBufferGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="#ffc2fc" />
        </mesh>
    )

}

function GuardedCube(props) {
    const mesh = useRef()

    useFrame(() => {
        mesh.current.rotation.x = mesh.current.rotation.y += 0.01
    })
      
    return (
        <mesh
            {...props}
            ref={mesh}>
            <boxBufferGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="#e3e3d8" />
        </mesh>
    )

}

function StrongCone(props) {
    const mesh = useRef()

    useFrame(() => {
        mesh.current.rotation.x = mesh.current.rotation.y += 0.01
    })
      
    return (
        <mesh
            {...props}
            ref={mesh}>
            <coneBufferGeometry args={[0.5, 2, 20, 32]} />
            <meshStandardMaterial color="#145717" />
        </mesh>
    )

}

function ScaredCone(props) {
    const mesh = useRef()

    useFrame(() => {
        mesh.current.rotation.x = mesh.current.rotation.y += 0.01
    })
      
    return (
        <mesh
            {...props}
            ref={mesh}>
            <coneBufferGeometry args={[0.2, 3, 20, 32]} />
            <meshStandardMaterial color="#761bd1" />
        </mesh>
    )

}

function ExcitedSphere(props) {
    const mesh = useRef()

    useFrame(() => {
        mesh.current.rotation.x = mesh.current.rotation.y += 0.01
    })
      
    return (
        <mesh
            {...props}
            ref={mesh}>
            <sphereBufferGeometry args={[1, 32, 32]} />
            <meshStandardMaterial color="#ffff24" />
        </mesh>
    )

}


export default function Rendering() {
    let index = 0;
    let positiveX = 0;
    let positiveY = Math.floor((Math.random() * 10) - 10);
    let negativeX = 0;
    let negativeY = Math.floor((Math.random() * 10) - 10);
    for (let i = 0; i < array.length; i++) {
        if (array[i][0] == "Mirth") {
            renderedObjects.push( <MirthSphere position={[positiveX, positiveY, 0]} />);
            index++;
        } else if (array[i][0] == "Approval") {
            renderedObjects.push( <ApprovalBox position={[-1.2, 0, 0]} />);
        } 
    }
    return (
        <Canvas style={{height: 500}}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />
            <perspectiveCamera position={45, window.innerWidth / window.innerHeight, 1, 1000} />
            {renderedObjects}
        </Canvas>
     )
  
}
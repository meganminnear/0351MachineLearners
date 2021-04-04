import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

let array = [
    ["Mirth", "Discontentment", "Pleasure", "Sadness", "Love"],
    ["Approval", "Happiness", "Confidence", "Giddy", "Joy"],
    ["Embarressed", "Bored", "Content", "Celebration", "Hopeless"],
    ["Discontentment"],
    ["Pleasure"],
    ["Sadness"],
    ["Love"],
    ["Happiness"],
    ["Confidence"],
    ["Giddy"],
    ["Joy"],
    ["Embarrassed"]
    ];

function MirthSphere(props) {
    const mesh = useRef()

    useFrame(() => {
        mesh.current.rotation.x = mesh.current.rotation.y += 0.01
    })
      
    return (
        <mesh
            {...props}
            ref={mesh}>
            <sphereBufferGeometry args={[.5, 32, 32]} />
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
            <sphereBufferGeometry args={[.5, 32, 32]} />
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
            <sphereBufferGeometry args={[.5, 32, 32]} />
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
            <sphereBufferGeometry args={[.5, 32, 32]} />
            <meshStandardMaterial color="#ff0000" />
        </mesh>
    )

}

function ApprovalCube(props) {
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
            <sphereBufferGeometry args={[.5, 32, 32]} />
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
            <boxBufferGeometry args={[1, 1, 1]} />
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
            <sphereBufferGeometry args={[.5, 32, 32]} />
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
            <sphereBufferGeometry args={[.5, 32, 32]} />
            <meshStandardMaterial color="#ffff0a" />
        </mesh>
    )

}

function EmbarrassedSphere(props) {
    const mesh = useRef()

    useFrame(() => {
        mesh.current.rotation.x = mesh.current.rotation.y += 0.01
    })
      
    return (
        <mesh
            {...props}
            ref={mesh}>
            <sphereBufferGeometry args={[.5, 32, 32]} />
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
            <sphereBufferGeometry args={[.5, 32, 32]} />
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
            <sphereBufferGeometry args={[.5, 32, 32]} />
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
            <sphereBufferGeometry args={[.5, 32, 32]} />
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
            <sphereBufferGeometry args={[.5, 32, 32]} />
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
            <sphereBufferGeometry args={[.5, 32, 32]} />
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
            <sphereBufferGeometry args={[.5, 32, 32]} />
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
            <sphereBufferGeometry args={[.5, 32, 32]} />
            <meshStandardMaterial color="#ffff24" />
        </mesh>
    )

}


export default function Rendering() {
    let renderedObjects = [];
    let positiveIndex = 0;
    let negativeIndex = 0;
    let spherePositiveIndex = 0;
    let sphereNegativeIndex = 0;
    let positiveY = 0;
    let negativeY = -1;
    let positiveYSphere = 2;
    let negativeYSphere = -3;
    for (let i = 0; i < array.length; i++) {
        if (array[i][0] == "Mirth") {
            renderedObjects.push( <MirthSphere position={[Math.random() * 10 - 5, positiveYSphere, 0]} />);
            spherePositiveIndex++;
            if (spherePositiveIndex == 5) {
                positiveYSphere += 2;
            }
        } else if (array[i][0] == "Discontentment") {
            renderedObjects.push( <DiscontentmentTriangle position={[Math.random() * 10 - 5, negativeY, 0]} />);
            negativeIndex++;
            if (negativeIndex == 10) {
                negativeY -= 2;
            }
        } else if (array[i][0] == "Pleasure") {
            renderedObjects.push( <PleasureSphere position={[Math.random() * 10 - 5, positiveYSphere, 0]} />);
            spherePositiveIndex++;
            if (spherePositiveIndex == 5) {
                positiveYSphere += 2;
            }
        } else if (array[i][0] == "Sadness") {
            renderedObjects.push( <SadnessSphere position={[Math.random() * 10 - 5, negativeYSphere, 0]} />);
            sphereNegativeIndex++;
            if (sphereNegativeIndex == 5) {
                negativeYSphere += 2;
            }
        } else if (array[i][0] == "Love") {
            renderedObjects.push( <LoveSphere position={[Math.random() * 10 - 5, positiveYSphere, 0]} />);
            spherePositiveIndex++;
            if (spherePositiveIndex == 5) {
                positiveYSphere += 2;
            }
        } else if (array[i][0] == "Approval") {
            renderedObjects.push( <ApprovalCube position={[Math.random() * 10 - 5, positiveY, 0]} />);
            positiveIndex++;
            if (positiveIndex == 10) {
                positiveY += 2;
            }
        } else if (array[i][0] == "Happiness") {
            renderedObjects.push( <HappinessSphere position={[Math.random() * 10 - 5, positiveYSphere, 0]} />);
            spherePositiveIndex++;
            if (spherePositiveIndex == 5) {
                positiveYSphere += 2;
            }
        } else if (array[i][0] == "Confidence") {
            renderedObjects.push( <ConfidenceCube position={[Math.random() * 10 - 5, positiveY, 0]} />);
            positiveIndex++;
            if (positiveIndex == 10) {
                positiveY += 2;
            }
        } else if (array[i][0] == "Giddy") {
            renderedObjects.push( <GiddySphere position={[Math.random() * 10 - 5, positiveYSphere, 0]} />);
            spherePositiveIndex++;
            if (spherePositiveIndex == 5) {
                positiveYSphere += 2;
            }
        } else if (array[i][0] == "Joy") {
            renderedObjects.push( <JoySphere position={[Math.random() * 10 - 5, positiveYSphere, 0]} />);
            spherePositiveIndex++;
            if (spherePositiveIndex == 5) {
                positiveYSphere += 2;
            }
        } else if (array[i][0] == "Embarrassed") {
            renderedObjects.push( <EmbarrassedSphere position={[Math.random() * 10 - 5, negativeYSphere, 0]} />);
            sphereNegativeIndex++;
            if (sphereNegativeIndex == 5) {
                negativeYSphere += 2;
            }
        } else if (array[i][0] == "Bored") {
            renderedObjects.push( <BoredCube position={[Math.random() * 10 - 5, negativeY, 0]} />);
            negativeIndex++;
            if (negativeIndex == 10) {
                negativeY -= 2;
            }
        } else if (array[i][0] == "Content") {
            renderedObjects.push( <ContentCube position={[Math.random() * 10 - 5, positiveY, 0]} />);
            positiveIndex++;
            if (positiveIndex == 10) {
                positiveY += 2;
            }
        } else if (array[i][0] == "Celebration") {
            renderedObjects.push( <CelebrationCube position={[Math.random() * 10 - 5, positiveY, 0]} />);
            positiveIndex++;
            if (positiveIndex == 10) {
                positiveY += 2;
            }
        } else if (array[i][0] == "Hopeless") {
            renderedObjects.push( <HopelessSphere position={[Math.random() * 10 - 5, negativeYSphere, 0]} />);
            sphereNegativeIndex++;
            if (sphereNegativeIndex == 5) {
                negativeYSphere += 2;
            }
        } else if (array[i][0] == "Nervous") {
            renderedObjects.push( <NervousCone position={[Math.random() * 10 - 5, negativeY, 0]} />);
            negativeIndex++;
            if (negativeIndex == 10) {
                negativeY -= 2;
            }
        } else if (array[i][0] == "Hope") {
            renderedObjects.push( <HopeSphere position={[Math.random() * 10 - 5, positiveYSphere, 0]} />);
            spherePositiveIndex++;
            if (spherePositiveIndex == 5) {
                positiveYSphere += 2;
            }
        } else if (array[i][0] == "Confused") {
            renderedObjects.push( <ConfusedCube position={[Math.random() * 10 - 5, negativeY, 0]} />);
            negativeIndex++;
            if (negativeIndex == 10) {
                negativeY -= 2;
            }
        } else if (array[i][0] == "Affectionate") {
            renderedObjects.push( <AffectionateSphere position={[Math.random() * 10 - 5, positiveYSphere, 0]} />);
            spherePositiveIndex++;
            if (spherePositiveIndex == 5) {
                positiveYSphere += 2;
            }
        } else if (array[i][0] == "Disappointed") {
            renderedObjects.push( <DisappointedTriangle position={[Math.random() * 10 - 5, negativeY, 0]} />);
            negativeIndex++;
            if (negativeIndex == 10) {
                negativeY -= 2;
            }
        } else if (array[i][0] == "Shy") {
            renderedObjects.push( <ShySphere position={[Math.random() * 10 - 5, negativeYSphere, 0]} />);
            sphereNegativeIndex++;
            if (sphereNegativeIndex == 5) {
                negativeYSphere += 2;
            }
        } else if (array[i][0] == "Frustrated") {
            renderedObjects.push( <FrustratedTriangle position={[Math.random() * 10 - 5, negativeY, 0]} />);
            negativeIndex++;
            if (negativeIndex == 10) {
                negativeY -= 2;
            }
        } else if (array[i][0] == "Anger") {
            renderedObjects.push( <AngerTriangle position={[Math.random() * 10 - 5, negativeY, 0]} />);
            negativeIndex++;
            if (negativeIndex == 10) {
                negativeY -= 2;
            }
        } else if (array[i][0] == "Playful") {
            renderedObjects.push( <PlayfulSphere position={[Math.random() * 10 - 5, positiveYSphere, 0]} />);
            spherePositiveIndex++;
            if (spherePositiveIndex == 5) {
                positiveYSphere += 2;
            }
        } else if (array[i][0] == "Irritated") {
            renderedObjects.push( <IrritatedCone position={[Math.random() * 10 - 5, negativeY, 0]} />);
            negativeIndex++;
            if (negativeIndex == 10) {
                negativeY -= 2;
            }
        } else if (array[i][0] == "Sick") {
            renderedObjects.push( <SickCone position={[Math.random() * 10 - 5, negativeY, 0]} />);
            negativeIndex++;
            if (negativeIndex == 10) {
                negativeY -= 2;
            }
        } else if (array[i][0] == "Curiosity") {
            renderedObjects.push( <CuriosityCylinder position={[Math.random() * 10 - 5, positiveY, 0]} />);
            positiveIndex++;
            if (positiveIndex == 10) {
                positiveY += 2;
            }
        } else if (array[i][0] == "Violent") {
            renderedObjects.push( <ViolentCone position={[Math.random() * 10 - 5, negativeY, 0]} />);
            negativeIndex++;
            if (negativeIndex == 10) {
                negativeY -= 2;
            }
        } else if (array[i][0] == "Evil") {
            renderedObjects.push( <EvilTriangle position={[Math.random() * 10 - 5, negativeY, 0]} />);
            negativeIndex++;
            if (negativeIndex == 10) {
                negativeY -= 2;
            }
        } else if (array[i][0] == "Stressed") {
            renderedObjects.push( <StressedCube position={[Math.random() * 10 - 5, negativeY, 0]} />);
            negativeIndex++;
            if (negativeIndex == 10) {
                negativeY -= 2;
            }
        } else if (array[i][0] == "Heartbroken") {
            renderedObjects.push( <HeartbrokenSphere position={[Math.random() * 10 - 5, negativeYSphere, 0]} />);
            sphereNegativeIndex++;
            if (sphereNegativeIndex == 5) {
                negativeYSphere += 2;
            }
        } else if (array[i][0] == "Surprised") {
            renderedObjects.push( <SurprisedCube position={[Math.random() * 10 - 5, positiveY, 0]} />);
            positiveIndex++;
            if (positiveIndex == 10) {
                positiveY += 2;
            }
        } else if (array[i][0] == "Guarded") {
            renderedObjects.push( <GuardedCube position={[Math.random() * 10 - 5, negativeY, 0]} />);
            negativeIndex++;
            if (negativeIndex == 10) {
                negativeY -= 2;
            }
        } else if (array[i][0] == "Strong") {
            renderedObjects.push( <StrongCone position={[Math.random() * 10 - 5, positiveY, 0]} />);
            positiveIndex++;
            if (positiveIndex == 10) {
                positiveY += 2;
            }
        } else if (array[i][0] == "Scared") {
            renderedObjects.push( <ScaredCone position={[Math.random() * 10 - 5, negativeY, 0]} />);
            negativeIndex++;
            if (negativeIndex == 10) {
                negativeY -= 2;
            }
        } else if (array[i][0] == "Excited") {
            renderedObjects.push( <ExcitedSphere position={[Math.random() * 10 - 5, positiveYSphere, 0]} />);
            spherePositiveIndex++;
            if (spherePositiveIndex == 5) {
                positiveYSphere += 2;
            }
        }
    }
    return (
        <Canvas style={{height: 300}}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />
            
            {renderedObjects}
        </Canvas>
     )
  
}
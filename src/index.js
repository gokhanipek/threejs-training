import ReactDOM from 'react-dom'
import React, { useRef, useMemo } from 'react'
import { Canvas, createPortal, useFrame } from '@react-three/fiber'
import { PerspectiveCamera, OrbitControls, TorusKnot, Box, Text, Icosahedron, Html } from '@react-three/drei'
import Cube from './App'

function TextShadowScene() {
  
  return (
      <React.Suspense fallback={null}>
          <Text
          color={'#EC2D2D'}
          fontSize={12}
          maxWidth={200}
          lineHeight={1}
          letterSpacing={0.02}
          textAlign={'left'}
          font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
          anchorX="center"
          anchorY="middle"
          outlineOffsetX={'10%'}
          outlineOffsetY={'10%'}
          outlineBlur={'30%'}
          outlineOpacity={0.3}
          outlineColor="#EC2D2D"
          >
          LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE
          MAGNA ALIQUA. UT ENIM AD MINIM VENIAM, QUIS NOSTRUD EXERCITATION ULLAMCO LABORIS NISI UT ALIQUIP EX EA COMMODO
          CONSEQUAT. DUIS AUTE IRURE DOLOR IN REPREHENDERIT IN VOLUPTATE VELIT ESSE CILLUM DOLORE EU FUGIAT NULLA
          PARIATUR. EXCEPTEUR SINT OCCAECAT CUPIDATAT NON PROIDENT, SUNT IN CULPA QUI OFFICIA DESERUNT MOLLIT ANIM ID EST
          LABORUM.
          </Text>
      </React.Suspense>
  )
  }

const NUM = 3;
function PerspectiveCameraScene() {
  const positions = React.useMemo(() => {
    const pos = []
    const half = (NUM - 1) / 2

    for (let x = 0; x < NUM; x++) {
      for (let y = 0; y < NUM; y++) {
        pos.push({
          id: `${x}-${y}`,
          position: [(x - half) * 4, (y - half) * 4, 0],
        })
      }
    }

    return pos
  }, [])

  const items = [
    "Hi my name is gokhan and I am the real msaaadadsdsfc",
    "Hi my name is gokhan and I am the realsdfsfsfsdfsd mc",
    "Hi my name is gokhan and I am the real hghhfhffmc",
    "Hi my name is gokhan and I am saddasdasdthe real mc",
  ]

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 10]} />
      <group position={[0, 0, -10]}>
        {positions.map(({ id, position }) => (
          <Icosahedron key={id} position={position} args={[1, 1]}>
            <meshBasicMaterial attach="material" color="white" />
            <Html position={[0, 0, -6]} className="html-story-label">
            {items[id]}
            {id}
          </Html>
          </Icosahedron>
        ))}
      </group>
      <OrbitControls />
    </>
  )
}

export const PerspectiveCameraSceneSt = () => <PerspectiveCameraScene />



ReactDOM.render(
  <Canvas colorManagement>
    <ambientLight />
    <spotLight position={[10, 10, 10]} />
    <pointLight position={[-10, -10, 0]} color="black" />
    <PerspectiveCameraScene />
    <OrbitControls />
  </Canvas>,
  document.getElementById('root')
)

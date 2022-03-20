import * as THREE from 'three'

import React, { useRef, useMemo, useState, Suspense } from 'react'
import { Canvas, createPortal, useFrame, useThree } from '@react-three/fiber'
import { PerspectiveCamera, OrbitControls, TorusKnot, Box, Text, Html } from '@react-three/drei'

import './App.css';

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


function Cube() {
  const cam = useRef();
  const myMesh = useRef();
  const boxRef = useRef();
  const [cubeRot, setCubeRot] = useState(Math.PI * 0)

  useFrame(() => {
    boxRef.current.rotation.y += Math.PI * 0.0;
  });


  const [scene, target] = useMemo(() => {
    const scene = new THREE.Scene()
    scene.background = new THREE.Color('orange')
    const target = new THREE.WebGLMultisampleRenderTarget(1024, 1024, {
      format: THREE.RGBFormat,
      stencilBuffer: false
    })
    target.samples = 8
    return [scene, target]
  }, [])

  useFrame((state) => {
    cam.current.position.z = 5 + Math.sin(state.clock.getElapsedTime() * 1.5) * 2
    state.gl.setRenderTarget(target)
    state.gl.render(scene, cam.current)
    state.gl.setRenderTarget(null)
  })

  const onClickHandler = () => {
    console.warn(myMesh.current);
  }


  return (
    <>
      <PerspectiveCamera ref={cam} position={[1, 1, 1]} />
      <Box ref={boxRef} rotation-y={0} args={[2, 2, 2]} onClick={onClickHandler} >
        <meshStandardMaterial attach="material" map={target.texture} />
        <TextShadowScene />
      </Box>
    </>
  )
}


export default Cube;

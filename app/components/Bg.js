"use client";

import React, { Suspense, useRef } from "react";
import { extend} from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";


const CustomParticles = (props) => {
  const { count } = props;
  const points = useRef();

  const posArray = new Float32Array(count * 3);

  for (let i = 0; i < count * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 50;
  }

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={posArray.length * 3}
          array={posArray}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#5786F5"
        sizeAttenuation
        depthWrite={false}
      />
      <OrbitControls enableZoom={false} autoRotate={false} />
    </points>
  );
};

const Bg = () => {
  return (
    <>
        <ambientLight intensity={0.5} />
        <CustomParticles count={5000}></CustomParticles>
    </>
  );
};

export default Bg;

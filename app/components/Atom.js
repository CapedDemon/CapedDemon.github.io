"use client";

import React, { useRef } from "react";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import { OrbitControls, Effects } from "@react-three/drei";
import * as THREE from "three";

const SphereMakers = (props) => {
  const { xPos, yPos, zPos, color, wireFrame, radius, electron } = props;

  let vector = new THREE.Vector3(xPos, yPos, zPos);
  if (!electron) {
    return (
      <mesh position={vector}>
        <sphereGeometry args={[radius, 32, 32]} />
        <meshBasicMaterial color={color} wireframe={wireFrame} />
      </mesh>
    );
  } else {
    return (
      <>
        <mesh position={vector}>
          <sphereGeometry args={[radius, 32, 32]} />
          <meshBasicMaterial
            color={[0.5, 1, 4]}
            toneMapped={false}
            wireframe={wireFrame}
          />
        </mesh>
      </>
    );
  }
};

const RotatingAtom = (props) => {
  const nucleus = useRef();
  const nucleusData = [
    {
      color: "red",
      radius: 0.5,
      xPos: 0,
      yPos: 0,
      zPos: 0,
      wireFrame: false,
    },
    {
      color: "red",
      radius: 0.5,
      xPos: 0,
      yPos: 0.7,
      zPos: 0,
      wireFrame: true,
    },
    {
      color: "red",
      radius: 0.5,
      xPos: -0.7,
      yPos: -0.6,
      zPos: 0,
      wireFrame: true,
    },
    {
      color: "red",
      radius: 0.5,
      xPos: 0.7,
      yPos: -0.6,
      zPos: 0,
      wireFrame: true,
    },
    {
      color: "blue",
      radius: 0.5,
      xPos: 0.5,
      yPos: 0,
      zPos: 0,
      wireFrame: true,
    },
    {
      color: "blue",
      radius: 0.5,
      xPos: -0.5,
      yPos: 0,
      zPos: 0,
      wireFrame: true,
    },
    {
      color: "blue",
      radius: 0.5,
      xPos: 0,
      yPos: 0,
      zPos: 0.5,
      wireFrame: true,
    },
    {
      color: "blue",
      radius: 0.5,
      xPos: 0,
      yPos: 0,
      zPos: -0.5,
      wireFrame: true,
    },
    {
      color: "blue",
      radius: 0.5,
      xPos: 0,
      yPos: -0.8,
      zPos: 0,
      wireFrame: true,
    },
  ];

  const electronData = [
    {
      electron: true,
      radius: 0.08,
      xPos: 1.2,
      yPos: 1.2,
      zPos: 1.2,
      wireFrame: false,
    },
    {
      electron: true,
      radius: 0.08,
      xPos: 1.2,
      yPos: -1.2,
      zPos: -1.2,
      wireFrame: false,
    },
    {
      electron: true,
      radius: 0.08,
      xPos: -1.2,
      yPos: 1.2,
      zPos: 0,
      wireFrame: false,
    },
  ];

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    nucleus.current.rotation.y = elapsedTime / 2.5;
  });
  return (
    <>
      {/* nucleus */}
      <mesh ref={nucleus}>
        {nucleusData.map((item) => {
          return (
            <SphereMakers
            key={1}
              color={item.color}
              radius={item.radius}
              xPos={item.xPos}
              yPos={item.yPos}
              zPos={item.zPos}
              wireFrame={item.wireFrame}
            />
          );
        })}

        {/* electrons */}
        {electronData.map((electrons) => {
          return (
            <SphereMakers
            key={2}
              electron={electrons.electron}
              radius={electrons.radius}
              xPos={electrons.xPos}
              yPos={electrons.yPos}
              zPos={electrons.zPos}
              wireFrame={electrons.wireFrame}
            />
          );
        })}
      </mesh>
    </>
  );
};

const Header = () => {
  return (
    <>
      <mesh>
        <ambientLight intensity={0.5} />
        {/* the atom */}
        <RotatingAtom />
        <OrbitControls enableZoom={false} />
        {/* the electron of the atom */}

        {/* <CustomParticles count={5000}></CustomParticles> */}
      </mesh>
    </>
  );
};

export default Header;

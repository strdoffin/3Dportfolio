'use client'
import { Canvas } from "@react-three/fiber";
import React, { ReactNode } from "react";
import clsx from "clsx";
import { Environment } from "@react-three/drei";
// OrbitControls
// import { OrbitControls } from "@react-three/drei";

interface RenderModelProps {
  children: ReactNode;
  className?: string;
}

export default function RenderModel({ children, className }: RenderModelProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 50 }}
      className={clsx("w-full h-screen", className)}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} />
      {children}
      {/* if you want to control camera manually */}
      {/* <OrbitControls 
        enableZoom={false} 
        makeDefault
        minPolarAngle={Math.PI / 2} 
        maxPolarAngle={Math.PI / 2} /> */}
      <Environment preset='warehouse' />
    </Canvas>
  );
}

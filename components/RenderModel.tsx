"use client";
import { Canvas } from "@react-three/fiber";
import React, { ReactNode } from "react";
import clsx from "clsx";
import { Environment, OrbitControls } from "@react-three/drei";
// OrbitControls

interface RenderModelProps {
    children: ReactNode;
    className?: string;
}

export default function RenderModel({ children, className }: RenderModelProps) {
    return (
        <Canvas
            camera={{ position: [0, 0, 8], fov: 45 }}
            className={clsx("w-full h-full relative top-5", className)}
        >
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1.5} />
            {children}
            <OrbitControls
                enableZoom={false}
                autoRotate
                rotateSpeed={1}
                makeDefault
                minPolarAngle={Math.PI / 2}
                maxPolarAngle={Math.PI / 2}
            />
            <Environment preset="dawn" />
        </Canvas>
    );
}

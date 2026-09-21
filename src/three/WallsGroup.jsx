import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function WallsGroup({ progress }) {
  const groundWallsRef = useRef();
  const upperWallsRef = useRef();

  // Progress ranges:
  // Ground floor walls: 0.34 to 0.48
  const gWallFactor = Math.min(1, Math.max(0, (progress - 0.34) / 0.14));

  // Upper floor walls: 0.58 to 0.70
  const uWallFactor = Math.min(1, Math.max(0, (progress - 0.58) / 0.12));

  // BIM Exploded offset
  let explodeY = 0;
  let explodeX = 0;
  if (progress >= 0.60 && progress <= 0.74) {
    const t = (progress - 0.60) / 0.14;
    explodeY = Math.sin(t * Math.PI) * 0.7;
    explodeX = Math.sin(t * Math.PI) * 0.35; // Walls push outwards slightly in exploded view
  }

  useFrame(() => {
    if (groundWallsRef.current) {
      groundWallsRef.current.visible = gWallFactor > 0.01;
      groundWallsRef.current.scale.y = Math.max(0.001, gWallFactor);
      groundWallsRef.current.position.y = 0.45;
    }

    if (upperWallsRef.current) {
      upperWallsRef.current.visible = uWallFactor > 0.01;
      upperWallsRef.current.scale.y = Math.max(0.001, uWallFactor);
      upperWallsRef.current.position.y = 3.75 + explodeY * 0.5;
      upperWallsRef.current.position.x = explodeX * 0.3;
    }
  });

  return (
    <group name="WallsGroup">
      {/* 1. GROUND FLOOR ARCHITECTURAL WALLS */}
      <group ref={groundWallsRef} position={[0, 0.45, 0]}>
        {/* Rear North Wall (Solid thermal block envelope) */}
        <mesh position={[0, 1.5, -2.95]} castShadow receiveShadow>
          <boxGeometry args={[8.2, 3.0, 0.22]} />
          <meshStandardMaterial color="#68686D" roughness={0.88} />
        </mesh>

        {/* West Side Wall (with slit architectural windows) */}
        <mesh position={[-3.95, 1.5, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.22, 3.0, 6.0]} />
          <meshStandardMaterial color="#68686D" roughness={0.88} />
        </mesh>

        {/* East Wall (Solid feature stone/concrete) */}
        <mesh position={[3.95, 1.5, -1]} castShadow receiveShadow>
          <boxGeometry args={[0.22, 3.0, 4.0]} />
          <meshStandardMaterial color="#68686D" roughness={0.88} />
        </mesh>

        {/* Central Core (Stair shaft & service duct) */}
        <mesh position={[-1.2, 1.5, -0.8]} castShadow receiveShadow>
          <boxGeometry args={[1.8, 3.0, 2.2]} />
          <meshStandardMaterial color="#5E5E63" roughness={0.85} />
        </mesh>

        {/* Front Entrance Wing Wall */}
        <mesh position={[1.8, 1.5, 2.8]} castShadow receiveShadow>
          <boxGeometry args={[2.8, 3.0, 0.22]} />
          <meshStandardMaterial color="#68686D" roughness={0.88} />
        </mesh>
      </group>

      {/* 2. UPPER / FIRST FLOOR ARCHITECTURAL WALLS */}
      <group ref={upperWallsRef} position={[0, 3.75, 0]}>
        {/* Upper Master Suite Rear Wall */}
        <mesh position={[0, 1.5, -2.95]} castShadow receiveShadow>
          <boxGeometry args={[8.2, 3.0, 0.22]} />
          <meshStandardMaterial color="#707076" roughness={0.85} />
        </mesh>

        {/* Upper West Wall */}
        <mesh position={[-3.95, 1.5, -0.5]} castShadow receiveShadow>
          <boxGeometry args={[0.22, 3.0, 5.0]} />
          <meshStandardMaterial color="#707076" roughness={0.85} />
        </mesh>

        {/* Upper East Wing Wall (Cantilevered mass) */}
        <mesh position={[3.95, 1.5, 0.8]} castShadow receiveShadow>
          <boxGeometry args={[0.22, 3.0, 4.5]} />
          <meshStandardMaterial color="#707076" roughness={0.85} />
        </mesh>

        {/* Upper Internal Partition Suite */}
        <mesh position={[-1.2, 1.5, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.15, 3.0, 4.0]} />
          <meshStandardMaterial color="#646469" roughness={0.9} />
        </mesh>
      </group>
    </group>
  );
}

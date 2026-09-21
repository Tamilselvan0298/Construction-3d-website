import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function StructuralFrame({ progress }) {
  const groundColumnsRef = useRef();
  const groundSlabRef = useRef();
  const firstSlabRef = useRef();
  const firstColumnsRef = useRef();

  // Column coordinates (3 x 3 grid)
  const columns = [
    [-4, -3], [0, -3], [4, -3],
    [-4,  0], [0,  0], [4,  0],
    [-4,  3], [0,  3], [4,  3],
  ];

  // Stage progress mappings:
  // Ground columns & slab: 0.20 to 0.35
  const gColFactor = Math.min(1, Math.max(0, (progress - 0.20) / 0.12));
  const gSlabFactor = Math.min(1, Math.max(0, (progress - 0.26) / 0.10));

  // First floor slab & beams: 0.44 to 0.58
  const fSlabFactor = Math.min(1, Math.max(0, (progress - 0.44) / 0.12));

  // First floor columns & upper frame: 0.54 to 0.66
  const fColFactor = Math.min(1, Math.max(0, (progress - 0.54) / 0.12));

  // BIM Exploded view offset (peaks around 0.65 - 0.72)
  let explodeY = 0;
  if (progress >= 0.60 && progress <= 0.74) {
    // Smooth bell curve for exploded displacement
    const t = (progress - 0.60) / 0.14;
    explodeY = Math.sin(t * Math.PI) * 0.7; // 0.7m vertical structural separation
  }

  useFrame(() => {
    // 1. Ground columns: rise vertically from Y = 0.45, scale.y grows 0 -> 1
    if (groundColumnsRef.current) {
      groundColumnsRef.current.visible = gColFactor > 0.01;
      groundColumnsRef.current.scale.y = Math.max(0.001, gColFactor);
    }

    // 2. Ground plinth slab
    if (groundSlabRef.current) {
      groundSlabRef.current.visible = gSlabFactor > 0.01;
      const s = Math.max(0.001, gSlabFactor);
      groundSlabRef.current.scale.set(s, 1, s);
    }

    // 3. First floor suspended slab & tie beams
    if (firstSlabRef.current) {
      firstSlabRef.current.visible = fSlabFactor > 0.01;
      const s = Math.max(0.001, fSlabFactor);
      firstSlabRef.current.scale.set(s, 1, s);
      // Apply exploded view vertical offset
      firstSlabRef.current.position.y = 3.6 + explodeY * 0.5;
    }

    // 4. First floor columns
    if (firstColumnsRef.current) {
      firstColumnsRef.current.visible = fColFactor > 0.01;
      firstColumnsRef.current.scale.y = Math.max(0.001, fColFactor);
      firstColumnsRef.current.position.y = 3.75 + explodeY * 0.6;
    }
  });

  return (
    <group name="StructuralFrameGroup">
      {/* 1. GROUND FLOOR PLINTH CONCRETE SLAB */}
      <mesh
        ref={groundSlabRef}
        position={[0, 0.42, 0]}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[9.4, 0.25, 7.4]} />
        <meshStandardMaterial
          color="#5A5A5E"
          roughness={0.82}
          metalness={0.08}
        />
      </mesh>

      {/* 2. GROUND FLOOR RCC COLUMNS (Rise vertically) */}
      <group ref={groundColumnsRef} position={[0, 0.45, 0]}>
        {columns.map(([x, z], i) => (
          <mesh
            key={`gc-${i}`}
            position={[x, 1.55, z]} // Centered at half height (3.1m / 2)
            castShadow
            receiveShadow
          >
            <boxGeometry args={[0.42, 3.1, 0.42]} />
            <meshStandardMaterial
              color="#545458"
              roughness={0.8}
              metalness={0.12}
            />
          </mesh>
        ))}

        {/* Ground tie beams at Y = 3.3 connecting column heads */}
        {[-3, 0, 3].map((z, idx) => (
          <mesh key={`gtb-x-${idx}`} position={[0, 3.1, z]} castShadow>
            <boxGeometry args={[8.8, 0.35, 0.35]} />
            <meshStandardMaterial color="#505054" roughness={0.8} />
          </mesh>
        ))}
        {[-4, 0, 4].map((x, idx) => (
          <mesh key={`gtb-z-${idx}`} position={[x, 3.1, 0]} castShadow>
            <boxGeometry args={[0.35, 0.35, 6.8]} />
            <meshStandardMaterial color="#505054" roughness={0.8} />
          </mesh>
        ))}
      </group>

      {/* 3. FIRST FLOOR SUSPENDED POST-TENSIONED SLAB */}
      <group ref={firstSlabRef} position={[0, 3.6, 0]}>
        {/* Main Floor Plate with Cantilevered Balcony (Z extends to +4.6) */}
        <mesh position={[0, 0, 0.5]} castShadow receiveShadow>
          <boxGeometry args={[10.4, 0.28, 8.8]} />
          <meshStandardMaterial
            color="#606065"
            roughness={0.78}
            metalness={0.1}
          />
        </mesh>
        {/* Cantilever balcony edge steel trim */}
        <mesh position={[0, -0.05, 4.85]}>
          <boxGeometry args={[10.45, 0.15, 0.1]} />
          <meshStandardMaterial color="#B88A44" roughness={0.4} metalness={0.8} />
        </mesh>
      </group>

      {/* 4. FIRST FLOOR RCC COLUMNS (Rise vertically) */}
      <group ref={firstColumnsRef} position={[0, 3.75, 0]}>
        {columns.map(([x, z], i) => (
          <mesh
            key={`fc-${i}`}
            position={[x, 1.55, z]}
            castShadow
            receiveShadow
          >
            <boxGeometry args={[0.38, 3.1, 0.38]} />
            <meshStandardMaterial
              color="#545458"
              roughness={0.8}
              metalness={0.12}
            />
          </mesh>
        ))}

        {/* First floor upper tie beams */}
        {[-3, 0, 3].map((z, idx) => (
          <mesh key={`ftb-x-${idx}`} position={[0, 3.1, z]} castShadow>
            <boxGeometry args={[8.8, 0.35, 0.35]} />
            <meshStandardMaterial color="#505054" roughness={0.8} />
          </mesh>
        ))}
        {[-4, 0, 4].map((x, idx) => (
          <mesh key={`ftb-z-${idx}`} position={[x, 3.1, 0]} castShadow>
            <boxGeometry args={[0.35, 0.35, 6.8]} />
            <meshStandardMaterial color="#505054" roughness={0.8} />
          </mesh>
        ))}
      </group>
    </group>
  );
}

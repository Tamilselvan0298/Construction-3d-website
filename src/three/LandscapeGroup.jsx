import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function LandscapeGroup({ progress }) {
  const groupRef = useRef();

  // Progress range: Stage 08 (0.88 to 1.00)
  const landFactor = Math.min(1, Math.max(0, (progress - 0.88) / 0.12));

  useFrame(() => {
    if (!groupRef.current) return;
    groupRef.current.visible = landFactor > 0.01;
    // Scale and rise slightly
    const s = THREE.MathUtils.lerp(0.01, 1.0, landFactor);
    groupRef.current.scale.set(s, s, s);
  });

  return (
    <group ref={groupRef} name="LandscapeGroup">
      {/* 1. BASALT STONE PAVED DRIVEWAY & WALKWAY */}
      <mesh
        position={[0.8, 0.02, 6.2]}
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow
      >
        <planeGeometry args={[3.2, 5.5]} />
        <meshStandardMaterial
          color="#202024"
          roughness={0.7}
          metalness={0.1}
        />
      </mesh>

      {/* Concrete Entry Steps to Ground Plinth */}
      {[0.12, 0.24, 0.36].map((sy, i) => (
        <mesh key={`step-${i}`} position={[0.7, sy, 3.4 - i * 0.3]} receiveShadow>
          <boxGeometry args={[2.2, 0.12, 0.35]} />
          <meshStandardMaterial color="#4A4A50" roughness={0.8} />
        </mesh>
      ))}

      {/* 2. SURROUNDING GREEN LAWN PATCHES */}
      <mesh
        position={[-3.8, 0.01, 5.8]}
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow
      >
        <planeGeometry args={[5.2, 4.8]} />
        <meshStandardMaterial
          color="#162214" // Deep architectural muted dark moss green
          roughness={0.9}
        />
      </mesh>

      <mesh
        position={[4.2, 0.01, 5.8]}
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow
      >
        <planeGeometry args={[3.5, 4.8]} />
        <meshStandardMaterial
          color="#162214"
          roughness={0.9}
        />
      </mesh>

      {/* 3. MINIMALIST ARCHITECTURAL TREES (Cylindrical slender trunks + faceted geometric canopy) */}
      {[
        [-5.2, 5.5],
        [-4.5, 7.2],
        [4.8, 6.8],
        [5.2, -4.8],
        [-5.8, -4.5]
      ].map(([tx, tz], idx) => (
        <group key={`tree-${idx}`} position={[tx, 0, tz]}>
          {/* Slender dark trunk */}
          <mesh position={[0, 1.2, 0]} castShadow>
            <cylinderGeometry args={[0.06, 0.08, 2.4, 8]} />
            <meshStandardMaterial color="#2B2620" roughness={0.9} />
          </mesh>
          {/* Minimalist geometric foliage canopy */}
          <mesh position={[0, 2.7, 0]} castShadow>
            <dodecahedronGeometry args={[0.9, 1]} />
            <meshStandardMaterial
              color="#22361E"
              roughness={0.8}
              flatShading
            />
          </mesh>
        </group>
      ))}

      {/* 4. PERIMETER BOUNDARY WALL WITH BRONZE COPING */}
      <group position={[0, 0, 0]}>
        {/* Left boundary wall */}
        <mesh position={[-7.2, 0.6, 1]} castShadow receiveShadow>
          <boxGeometry args={[0.25, 1.2, 13.0]} />
          <meshStandardMaterial color="#2E2E32" roughness={0.85} />
        </mesh>
        {/* Right boundary wall */}
        <mesh position={[7.2, 0.6, 1]} castShadow receiveShadow>
          <boxGeometry args={[0.25, 1.2, 13.0]} />
          <meshStandardMaterial color="#2E2E32" roughness={0.85} />
        </mesh>
        {/* Rear boundary wall */}
        <mesh position={[0, 0.6, -6.5]} castShadow receiveShadow>
          <boxGeometry args={[14.65, 1.2, 0.25]} />
          <meshStandardMaterial color="#2E2E32" roughness={0.85} />
        </mesh>
      </group>

      {/* 5. WARM ARCHITECTURAL EXTERIOR UP-LIGHTS (3000K warm glow) */}
      <group position={[0, 0.1, 0]}>
        {[-3.5, 0.8, 3.8].map((lx, idx) => (
          <group key={`light-${idx}`} position={[lx, 0, 3.2]}>
            {/* Fixture fitting */}
            <mesh position={[0, 0.05, 0]}>
              <cylinderGeometry args={[0.08, 0.08, 0.1, 8]} />
              <meshStandardMaterial color="#B88A44" metalness={0.8} />
            </mesh>
            {/* Point light providing warm building wash */}
            <pointLight
              color="#F0B44C"
              intensity={2.8}
              distance={6.5}
              decay={2}
            />
          </group>
        ))}
      </group>
    </group>
  );
}

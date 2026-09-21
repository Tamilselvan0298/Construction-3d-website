import React, { useMemo } from 'react';
import * as THREE from 'three';

export default function SiteTerrain({ progress }) {
  // Terrain animation: unrolls and stabilizes in stage 0 (0.00 to 0.12)
  const terrainFactor = Math.min(1, Math.max(0, progress / 0.10));
  const gridOpacity = Math.min(0.6, terrainFactor * 0.7);

  // Survey grid lines
  const gridHelper = useMemo(() => {
    return new THREE.GridHelper(24, 24, '#B88A44', '#27272A');
  }, []);

  return (
    <group name="TerrainGroup">
      {/* EXCAVATED GROUND BASE PLOT */}
      <mesh
        position={[0, -0.05, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow
      >
        <planeGeometry args={[26, 26]} />
        <meshStandardMaterial
          color="#151518"
          roughness={0.9}
          metalness={0.1}
        />
      </mesh>

      {/* PLOT EXCAVATION TRENCH PIT (Slightly sunken foundation footprint) */}
      <mesh
        position={[0, -0.15, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow
      >
        <planeGeometry args={[13, 11]} />
        <meshStandardMaterial
          color="#0E0E10"
          roughness={0.95}
        />
      </mesh>

      {/* TECHNICAL SURVEY GRID */}
      <primitive
        object={gridHelper}
        position={[0, 0.01, 0]}
      />

      {/* SITE BOUNDARY PEGS & STRING LINES */}
      <group position={[0, 0, 0]}>
        {[
          [-6.5, -5.5],
          [6.5, -5.5],
          [6.5, 5.5],
          [-6.5, 5.5],
        ].map(([x, z], idx) => (
          <group key={idx} position={[x, 0, z]}>
            {/* Wooden survey stake */}
            <mesh position={[0, 0.35, 0]}>
              <cylinderGeometry args={[0.04, 0.04, 0.7, 8]} />
              <meshStandardMaterial color="#B88A44" roughness={0.6} />
            </mesh>
            {/* Red top survey flag */}
            <mesh position={[0, 0.65, 0]}>
              <boxGeometry args={[0.1, 0.08, 0.02]} />
              <meshStandardMaterial color="#EF4444" />
            </mesh>
          </group>
        ))}

        {/* Boundary boundary wire line */}
        <lineLoop>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={4}
              array={new Float32Array([
                -6.5, 0.35, -5.5,
                 6.5, 0.35, -5.5,
                 6.5, 0.35,  5.5,
                -6.5, 0.35,  5.5,
              ])}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#B88A44" transparent opacity={gridOpacity} linewidth={1} />
        </lineLoop>
      </group>
    </group>
  );
}

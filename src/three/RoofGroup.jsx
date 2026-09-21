import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function RoofGroup({ progress }) {
  const roofRef = useRef();

  // Progress range: Stage 06 (0.70 to 0.82)
  const roofFactor = Math.min(1, Math.max(0, (progress - 0.70) / 0.12));

  useFrame(() => {
    if (!roofRef.current) return;
    roofRef.current.visible = roofFactor > 0.01;
    // Descends from Y = 11.5m down to structural roof height Y = 6.9m
    const targetY = THREE.MathUtils.lerp(11.5, 6.9, roofFactor);
    roofRef.current.position.y = targetY;
    // Scales to full footprint as it lands
    const s = Math.max(0.01, roofFactor);
    roofRef.current.scale.set(s, 1, s);
  });

  return (
    <group ref={roofRef} position={[0, 6.9, 0]} name="RoofGroup">
      {/* MONOLITHIC OVERHANGING FLAT ROOF SLAB */}
      <mesh position={[0, 0.15, 0.4]} castShadow receiveShadow>
        <boxGeometry args={[11.2, 0.3, 9.6]} />
        <meshStandardMaterial
          color="#4C4C50"
          roughness={0.75}
          metalness={0.15}
        />
      </mesh>

      {/* ROOFTOP PARAPET COPING PERIMETER */}
      <group position={[0, 0.65, 0.4]}>
        {/* Front parapet */}
        <mesh position={[0, 0, 4.65]} castShadow>
          <boxGeometry args={[11.2, 0.7, 0.2]} />
          <meshStandardMaterial color="#3E3E42" roughness={0.8} />
        </mesh>
        {/* Back parapet */}
        <mesh position={[0, 0, -4.65]} castShadow>
          <boxGeometry args={[11.2, 0.7, 0.2]} />
          <meshStandardMaterial color="#3E3E42" roughness={0.8} />
        </mesh>
        {/* Left parapet */}
        <mesh position={[-5.5, 0, 0]} castShadow>
          <boxGeometry args={[0.2, 0.7, 9.5]} />
          <meshStandardMaterial color="#3E3E42" roughness={0.8} />
        </mesh>
        {/* Right parapet */}
        <mesh position={[5.5, 0, 0]} castShadow>
          <boxGeometry args={[0.2, 0.7, 9.5]} />
          <meshStandardMaterial color="#3E3E42" roughness={0.8} />
        </mesh>
      </group>

      {/* ARCHITECTURAL ROOF PERGOLA (Bronze Steel Blades) */}
      <group position={[2.2, 1.2, 1.2]}>
        {/* Pergola support posts */}
        {[-1.8, 1.8].map((px, i) =>
          [-1.5, 1.5].map((pz, j) => (
            <mesh key={`pp-${i}-${j}`} position={[px, 0.5, pz]}>
              <boxGeometry args={[0.12, 1.6, 0.12]} />
              <meshStandardMaterial color="#B88A44" metalness={0.8} roughness={0.3} />
            </mesh>
          ))
        )}
        {/* Horizontal pergola louver blades */}
        {[-1.4, -0.9, -0.4, 0.1, 0.6, 1.1].map((pz, idx) => (
          <mesh key={`pl-${idx}`} position={[0, 1.35, pz]}>
            <boxGeometry args={[3.8, 0.08, 0.25]} />
            <meshStandardMaterial color="#B88A44" metalness={0.8} roughness={0.3} />
          </mesh>
        ))}
      </group>
    </group>
  );
}

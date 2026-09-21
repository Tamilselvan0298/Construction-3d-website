import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function FoundationGroup({ progress }) {
  const groupRef = useRef();

  // Progress mapping: Stage 01 (0.10 to 0.22)
  const start = 0.08;
  const end = 0.22;
  const factor = Math.min(1, Math.max(0, (progress - start) / (end - start)));

  // Grid coordinates for 9 primary column footings
  const footingCoords = [
    [-4, -3], [0, -3], [4, -3],
    [-4,  0], [0,  0], [4,  0],
    [-4,  3], [0,  3], [4,  3],
  ];

  useFrame(() => {
    if (!groupRef.current) return;
    // Physical lift: footings rise from -2.5m below to ground level (0)
    const currentY = THREE.MathUtils.lerp(-2.5, 0, factor);
    groupRef.current.position.y = currentY;
    // Scale up as they rise
    const currentScale = THREE.MathUtils.lerp(0.01, 1, Math.min(1, factor * 1.2));
    groupRef.current.scale.set(currentScale, currentScale, currentScale);
    groupRef.current.visible = factor > 0.01;
  });

  return (
    <group ref={groupRef} name="FoundationGroup">
      {footingCoords.map(([x, z], index) => (
        <group key={index} position={[x, 0, z]}>
          {/* ISOLATED REINFORCED CONCRETE PAD FOOTING */}
          <mesh position={[0, -0.2, 0]} castShadow receiveShadow>
            <boxGeometry args={[1.4, 0.4, 1.4]} />
            <meshStandardMaterial
              color="#424246"
              roughness={0.88}
              metalness={0.08}
            />
          </mesh>

          {/* STUB PEDESTAL RAISING TO PLINTH LEVEL */}
          <mesh position={[0, 0.15, 0]} castShadow receiveShadow>
            <boxGeometry args={[0.55, 0.5, 0.55]} />
            <meshStandardMaterial
              color="#4E4E52"
              roughness={0.85}
              metalness={0.1}
            />
          </mesh>

          {/* REBAR STARTER BARS EXTENDING UPWARDS */}
          {[-0.15, 0.15].map((rx, i) =>
            [-0.15, 0.15].map((rz, j) => (
              <mesh key={`${i}-${j}`} position={[rx, 0.5, rz]}>
                <cylinderGeometry args={[0.012, 0.012, 0.4, 6]} />
                <meshStandardMaterial color="#B88A44" metalness={0.7} roughness={0.3} />
              </mesh>
            ))
          )}
        </group>
      ))}

      {/* CONTINUOUS PLINTH TIE BEAMS CONNECTING FOOTINGS */}
      <group position={[0, 0.25, 0]}>
        {/* Longitudinal X-beams */}
        {[-3, 0, 3].map((z, idx) => (
          <mesh key={`xb-${idx}`} position={[0, 0, z]} castShadow receiveShadow>
            <boxGeometry args={[8.8, 0.35, 0.35]} />
            <meshStandardMaterial color="#4A4A4E" roughness={0.85} />
          </mesh>
        ))}
        {/* Transverse Z-beams */}
        {[-4, 0, 4].map((x, idx) => (
          <mesh key={`zb-${idx}`} position={[x, 0, 0]} castShadow receiveShadow>
            <boxGeometry args={[0.35, 0.35, 6.8]} />
            <meshStandardMaterial color="#4A4A4E" roughness={0.85} />
          </mesh>
        ))}
      </group>
    </group>
  );
}

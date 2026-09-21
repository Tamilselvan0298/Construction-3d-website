import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function FacadeGroup({ progress }) {
  const groupRef = useRef();

  // Progress range: Stage 07 (0.80 to 0.92)
  const facadeFactor = Math.min(1, Math.max(0, (progress - 0.80) / 0.12));

  useFrame(() => {
    if (!groupRef.current) return;
    groupRef.current.visible = facadeFactor > 0.01;
    // Scale from 0.85 to 1.0 and slide slightly into place
    const s = THREE.MathUtils.lerp(0.85, 1.0, facadeFactor);
    groupRef.current.scale.set(s, s, s);
    // Smooth opacity fade on glass and trim
    groupRef.current.traverse((child) => {
      if (child.isMesh && child.material) {
        if (child.material.transparent) {
          child.material.opacity = facadeFactor * (child.userData.isGlass ? 0.65 : 1.0);
        }
      }
    });
  });

  return (
    <group ref={groupRef} name="FacadeGroup">
      {/* ==============================================================
          GROUND FLOOR FENESTRATION & GLAZING
          ============================================================== */}
      <group position={[0, 0.45, 0]}>
        {/* Large Living Room Floor-to-Ceiling Glass Wall (Front-facing Z = 2.95) */}
        <mesh
          position={[-1.8, 1.5, 2.95]}
          userData={{ isGlass: true }}
          castShadow
        >
          <planeGeometry args={[4.2, 2.9]} />
          <meshPhysicalMaterial
            color="#1C2833"
            roughness={0.08}
            metalness={0.2}
            transmission={0.82}
            thickness={0.5}
            transparent
            opacity={0.65}
          />
        </mesh>

        {/* Bronze Window Mullions for Living Room */}
        {[-3.9, -1.8, 0.3].map((mx, idx) => (
          <mesh key={`gm-${idx}`} position={[mx, 1.5, 2.96]}>
            <boxGeometry args={[0.08, 2.95, 0.08]} />
            <meshStandardMaterial color="#B88A44" metalness={0.8} roughness={0.3} />
          </mesh>
        ))}

        {/* Horizontal transom bar */}
        <mesh position={[-1.8, 2.6, 2.96]}>
          <boxGeometry args={[4.2, 0.08, 0.08]} />
          <meshStandardMaterial color="#B88A44" metalness={0.8} roughness={0.3} />
        </mesh>

        {/* Grand Entrance Pivot Door (Solid Dark Oak & Bronze Inlay) */}
        <mesh position={[0.7, 1.5, 2.95]} castShadow>
          <boxGeometry args={[1.4, 2.9, 0.12]} />
          <meshStandardMaterial color="#1E1E22" roughness={0.7} metalness={0.2} />
        </mesh>
        {/* Bronze Door Pull Handle */}
        <mesh position={[1.25, 1.4, 3.03]}>
          <boxGeometry args={[0.04, 1.2, 0.05]} />
          <meshStandardMaterial color="#B88A44" metalness={0.9} roughness={0.2} />
        </mesh>
      </group>

      {/* ==============================================================
          FIRST FLOOR FENESTRATION & BALCONY
          ============================================================== */}
      <group position={[0, 3.75, 0]}>
        {/* Upper Master Suite Glass Sliding Doors (Front-facing Z = 2.95) */}
        <mesh
          position={[0.2, 1.5, 2.95]}
          userData={{ isGlass: true }}
          castShadow
        >
          <planeGeometry args={[7.2, 2.9]} />
          <meshPhysicalMaterial
            color="#1C2833"
            roughness={0.08}
            metalness={0.2}
            transmission={0.82}
            thickness={0.5}
            transparent
            opacity={0.65}
          />
        </mesh>

        {/* Upper Bronze Window Mullions */}
        {[-3.3, -1.1, 1.1, 3.3].map((mx, idx) => (
          <mesh key={`ufm-${idx}`} position={[mx, 1.5, 2.96]}>
            <boxGeometry args={[0.08, 2.95, 0.08]} />
            <meshStandardMaterial color="#B88A44" metalness={0.8} roughness={0.3} />
          </mesh>
        ))}

        {/* Cantilevered Balcony Glass Balustrade (Z = 4.85) */}
        <mesh position={[0, 0.55, 4.85]} userData={{ isGlass: true }}>
          <planeGeometry args={[10.2, 1.1]} />
          <meshPhysicalMaterial
            color="#2A3B4C"
            roughness={0.05}
            metalness={0.1}
            transmission={0.85}
            transparent
            opacity={0.6}
          />
        </mesh>
        {/* Balcony Bronze Handrail */}
        <mesh position={[0, 1.1, 4.85]}>
          <boxGeometry args={[10.3, 0.06, 0.08]} />
          <meshStandardMaterial color="#B88A44" metalness={0.85} roughness={0.25} />
        </mesh>

        {/* Architectural Shading Louver Screen (Vertical timber/bronze slats on East Wing) */}
        <group position={[4.05, 1.5, 0.5]}>
          {[-1.2, -0.6, 0, 0.6, 1.2, 1.8].map((lz, idx) => (
            <mesh key={`louver-${idx}`} position={[0, 0, lz]}>
              <boxGeometry args={[0.04, 2.9, 0.18]} />
              <meshStandardMaterial color="#B88A44" metalness={0.7} roughness={0.4} />
            </mesh>
          ))}
        </group>
      </group>
    </group>
  );
}

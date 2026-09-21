import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import ProceduralBuilding from './ProceduralBuilding';
import CameraController from './CameraController';

export default function BuildingScene({ progress = 0 }) {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none', // Allow scroll gestures to pass through
      }}
    >
      <Canvas
        shadows
        dpr={isMobile ? [1, 1.25] : [1, 1.75]}
        camera={{
          position: [11.5, 5.5, 13.5],
          fov: isMobile ? 50 : 40,
          near: 0.1,
          far: 120,
        }}
        gl={{
          antialias: true,
          powerPreference: 'high-performance',
          alpha: true,
        }}
        style={{
          width: '100%',
          height: '100%',
          background: 'transparent',
        }}
      >
        {/* CINEMATIC ARCHITECTURAL LIGHTING */}
        <ambientLight intensity={0.55} color="#FAF8F5" />
        <hemisphereLight
          skyColor="#D4E4FC"
          groundColor="#1A1918"
          intensity={0.45}
        />

        {/* PRIMARY ARCHITECTURAL SUNLIGHT (Cast shadows) */}
        <directionalLight
          position={[14, 22, 12]}
          intensity={1.9}
          color="#FFF8EE"
          castShadow
          shadow-mapSize-width={isMobile ? 1024 : 2048}
          shadow-mapSize-height={isMobile ? 1024 : 2048}
          shadow-camera-near={0.5}
          shadow-camera-far={60}
          shadow-camera-left={-14}
          shadow-camera-right={14}
          shadow-camera-top={14}
          shadow-camera-bottom={-14}
          shadow-bias={-0.0004}
        />

        {/* SOFT ARCHITECTURAL FILL LIGHT */}
        <directionalLight
          position={[-12, 10, -10]}
          intensity={0.65}
          color="#A6B8D4"
        />

        {/* 3D CAMERA CONTROLLER */}
        <CameraController progress={progress} />

        {/* PROCEDURAL 3D ARCHITECTURAL VILLA */}
        <Suspense fallback={null}>
          <ProceduralBuilding progress={progress} />
        </Suspense>
      </Canvas>
    </div>
  );
}

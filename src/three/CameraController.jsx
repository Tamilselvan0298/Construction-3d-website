import { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

export default function CameraController({ progress = 0 }) {
  const { camera } = useThree();
  const currentPos = useRef(new THREE.Vector3(12, 6, 14));
  const currentTarget = useRef(new THREE.Vector3(0, 1, 0));

  // Keyframes for camera position and lookAt target along scroll progress (0.0 to 1.0)
  const keyframes = [
    { p: 0.00, pos: [11.5, 5.5, 13.5], target: [0, 0.5, 0] },     // Stage 00: Land Survey
    { p: 0.18, pos: [9.0, 4.2, 11.0],  target: [0, 0.6, 0] },     // Stage 01: Foundation
    { p: 0.35, pos: [9.5, 6.2, 11.5],  target: [0, 2.0, 0] },     // Stage 02-03: Ground Structure
    { p: 0.65, pos: [10.5, 9.2, 12.0], target: [0, 4.0, 0] },     // Stage 04-05: Upper Floors & BIM Exploded
    { p: 0.82, pos: [12.0, 7.8, 13.5], target: [0, 3.8, 0] },     // Stage 06-07: Roof & Facade
    { p: 1.00, pos: [14.0, 7.0, 15.5], target: [0, 3.5, 0] },     // Stage 08: Completed Hero Shot
  ];

  // Helper to interpolate between keyframes
  const getInterpolatedState = (prog) => {
    const clamped = Math.min(1, Math.max(0, prog));
    let i = 0;
    while (i < keyframes.length - 1 && keyframes[i + 1].p < clamped) {
      i++;
    }
    const k1 = keyframes[i];
    const k2 = keyframes[Math.min(i + 1, keyframes.length - 1)];

    if (k1 === k2 || k2.p === k1.p) {
      return { pos: k1.pos, target: k1.target };
    }

    const t = (clamped - k1.p) / (k2.p - k1.p);
    // Smooth cosine interpolation for architectural fluidity
    const smoothT = 0.5 * (1 - Math.cos(t * Math.PI));

    const isMobile = window.innerWidth < 768;
    const mobileDistFactor = isMobile ? 1.4 : 1.0;

    const pos = [
      (k1.pos[0] + (k2.pos[0] - k1.pos[0]) * smoothT) * mobileDistFactor,
      (k1.pos[1] + (k2.pos[1] - k1.pos[1]) * smoothT) * (isMobile ? 1.15 : 1.0),
      (k1.pos[2] + (k2.pos[2] - k1.pos[2]) * smoothT) * mobileDistFactor,
    ];

    const target = [
      k1.target[0] + (k2.target[0] - k1.target[0]) * smoothT,
      k1.target[1] + (k2.target[1] - k1.target[1]) * smoothT,
      k1.target[2] + (k2.target[2] - k1.target[2]) * smoothT,
    ];

    return { pos, target };
  };

  useFrame(() => {
    // Respect prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      camera.position.set(13, 7, 15);
      camera.lookAt(0, 3, 0);
      return;
    }

    const { pos, target } = getInterpolatedState(progress);

    const targetPosVec = new THREE.Vector3(...pos);
    const targetLookVec = new THREE.Vector3(...target);

    // Smooth lerping to eliminate jitter
    currentPos.current.lerp(targetPosVec, 0.07);
    currentTarget.current.lerp(targetLookVec, 0.07);

    camera.position.copy(currentPos.current);
    camera.lookAt(currentTarget.current);
  });

  return null;
}

'use client';

import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function AnimatedWireSphere() {
  const meshRef = useRef<THREE.LineSegments>(null);
  const [geometry, setGeometry] = useState<THREE.BufferGeometry>();

  // 애니메이션 진행 상태
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const baseGeo = new THREE.IcosahedronGeometry(1, 5); // 128면 만들기 위해 세부 subdivision
    const wireGeo = new THREE.WireframeGeometry(baseGeo);

    setGeometry(wireGeo);
  }, []);

  useFrame((state, delta) => {
    if (!geometry || !meshRef.current) return;

    const totalSegments = geometry.attributes.position.count / 2;
    const currentSegments = Math.floor(progress * totalSegments);

    // 부분 지오메트리 생성
    const partialPositions = geometry.attributes.position.array.slice(
      0,
      currentSegments * 6
    );

    const partialGeo = new THREE.BufferGeometry();
    partialGeo.setAttribute(
      'position',
      new THREE.BufferAttribute(new Float32Array(partialPositions), 3)
    );

    meshRef.current.geometry.dispose();
    meshRef.current.geometry = partialGeo;

    // 점점 증가 (속도 조정 가능)
    if (progress < 1) {
      setProgress((prev) => Math.min(prev + delta * 0.2, 1));
    }

    // 회전
    meshRef.current.rotation.x += delta * 0.1;
    meshRef.current.rotation.y += delta * 0.1;
  });

  return (
    <lineSegments ref={meshRef}>
      <bufferGeometry />
      <lineBasicMaterial color="white" />
    </lineSegments>
  );
}

export default function WireSphereCanvas() {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-[-1]">
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ambientLight />
        <AnimatedWireSphere />
      </Canvas>
    </div>
  );
}

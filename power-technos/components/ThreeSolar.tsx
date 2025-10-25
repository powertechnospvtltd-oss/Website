"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import type { ThreeElements } from "@react-three/fiber";
import { Environment, Float, OrbitControls, Html } from "@react-three/drei";
import * as THREE from "three";
import { useEffect, useMemo, useRef } from "react";

function SolarTiles(props: ThreeElements["group"]) {
  // A simple 4x4 grid of blue tiles
  const tiles = useMemo(() => {
    const mesh = new THREE.InstancedMesh(
      new THREE.BoxGeometry(1, 0.05, 1.4),
      new THREE.MeshStandardMaterial({
        color: "#0D47A1",
        metalness: 0.1,
        roughness: 0.35,
      }),
      16
    );
    let i = 0;
    for (let x = 0; x < 4; x++) {
      for (let y = 0; y < 4; y++) {
        const m = new THREE.Matrix4();
        m.makeTranslation((x - 1.5) * 1.05, 0, (y - 1.5) * 1.55);
        mesh.setMatrixAt(i++, m);
      }
    }
    mesh.instanceMatrix.needsUpdate = true;
    return mesh;
  }, []);

  // Clean up GPU resources on unmount
  useEffect(() => () => tiles.dispose(), [tiles]);

  return <primitive object={tiles} {...props} />;
}

function SolarPanel() {
  const group = useRef<THREE.Group>(null);
  useFrame((_, d) => {
    if (!group.current) return;
    group.current.rotation.y += d * 0.2; // slow auto-rotate
  });

  return (
    <group ref={group} rotation={[-0.2, 0.2, 0]}>
      {/* Panel frame */}
      <mesh position={[0, -0.06, 0]}>
        <boxGeometry args={[5, 0.06, 7]} />
        <meshStandardMaterial color="#111827" metalness={0.2} roughness={0.6} />
      </mesh>

      {/* Tiles */}
      <SolarTiles position={[0, 0.02, 0]} />

      {/* Plug/swoosh—lightweight hint (curved tube) */}
      <mesh position={[3.2, -0.1, 1]}>
        <torusGeometry args={[1.2, 0.05, 16, 100, Math.PI * 1.2]} />
        <meshStandardMaterial color="black" metalness={0.2} roughness={0.6} />
      </mesh>
      <mesh position={[4.1, -0.1, 1.7]} rotation={[0, 0, 0]}>
        <boxGeometry args={[0.35, 0.55, 0.1]} />
        <meshStandardMaterial color="black" />
      </mesh>
      <mesh position={[4.1, 0.25, 1.7]}>
        <boxGeometry args={[0.06, 0.25, 0.06]} />
        <meshStandardMaterial color="black" />
      </mesh>
      <mesh position={[4.1, 0.0, 1.7]}>
        <boxGeometry args={[0.06, 0.25, 0.06]} />
        <meshStandardMaterial color="black" />
      </mesh>
    </group>
  );
}

export default function ThreeSolar() {
  return (
    <Canvas camera={{ position: [7, 4, 10], fov: 42 }} dpr={[1, 2]}>
      <color attach="background" args={["#ffffff"]} />
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 8, 4]} intensity={1} />
      <Float floatIntensity={0.5} rotationIntensity={0.2}>
        <SolarPanel />
      </Float>
      <Environment preset="city" />
      <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      {/* Helpful hint for devices that can't render WebGL */}
      <Html center className="text-zinc-500 text-xs">loading 3D…</Html>
    </Canvas>
  );
}
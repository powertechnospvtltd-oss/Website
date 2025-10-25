"use client";
import { Canvas } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";

export default function ThreeBubbles() {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 10], fov: 45 }} className="pointer-events-none">
      <ambientLight intensity={0.6} />
      <directionalLight position={[4, 6, 8]} intensity={1} />

      <Float floatIntensity={1} rotationIntensity={0.5} speed={1.2}>
        <mesh position={[-6, 1.5, -2]}>
          <sphereGeometry args={[2.2, 32, 32]} />
          <meshStandardMaterial color="#269440" transparent opacity={0.12} roughness={0.3} />
        </mesh>
      </Float>

      <Float floatIntensity={0.8} rotationIntensity={0.4} speed={1}>
        <mesh position={[5, -0.8, -3]}>
          <sphereGeometry args={[2.8, 32, 32]} />
          <meshStandardMaterial color="#2f6be6" transparent opacity={0.09} roughness={0.35} />
        </mesh>
      </Float>

      <Float floatIntensity={0.6} rotationIntensity={0.25} speed={0.8}>
        <mesh position={[0, 2.2, -4]}>
          <sphereGeometry args={[1.6, 32, 32]} />
          <meshStandardMaterial color="#ffffff" transparent opacity={0.08} roughness={0.5} />
        </mesh>
      </Float>

      <Environment preset="city" />
    </Canvas>
  );
}

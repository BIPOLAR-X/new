"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Float } from "@react-three/drei";
import { motion } from "framer-motion";

function NeonScene() {
  return (
    <Canvas camera={{ position: [0, 1, 6], fov: 50 }}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 10, 7]} intensity={1.2} />
      {/* Neon arch */}
      <mesh position={[0, 0, 0]} rotation={[0, 0, 0]}>
        <torusGeometry args={[2, 0.12, 16, 100]} />
        <meshStandardMaterial color="#00D4AA" emissive="#00D4AA" emissiveIntensity={1.5} />
      </mesh>
      {/* Floating neon sphere */}
      <Float speed={2} floatIntensity={1.2}>
        <mesh position={[0, 1.2, 0]}>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial color="#3FE0FF" emissive="#3FE0FF" emissiveIntensity={1.2} />
        </mesh>
      </Float>
      {/* Water plane */}
      <mesh position={[0, -0.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[10, 10, 32, 32]} />
        <meshStandardMaterial color="#0A0C12" transparent opacity={0.7} />
      </mesh>
      {/* Environment for soft lighting */}
      <Environment preset="city" />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-[#0A0C12] overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={null}>
          <NeonScene />
        </Suspense>
      </div>
      {/* Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        <motion.h1
          className="text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00D4AA] via-[#3FE0FF] to-[#A259FF] drop-shadow-lg mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          SmokeLess Token
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-[#3FE0FF] mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          The Neon Community for a Healthier Future
        </motion.p>
        <div className="flex gap-6">
          <a
            href="https://twitter.com/SmokelessToken"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#00D4AA] hover:bg-[#3FE0FF] text-black px-8 py-3 rounded-full font-semibold text-lg shadow-lg transition"
          >
            Twitter
          </a>
          <a
            href="https://t.me/SmokelessToken"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#A259FF] hover:bg-[#3FE0FF] text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg transition"
          >
            Telegram
          </a>
        </div>
      </div>
      {/* Subtle animated particles */}
      <div className="pointer-events-none absolute inset-0 z-20">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: 8 + Math.random() * 12,
              height: 8 + Math.random() * 12,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: "linear-gradient(135deg, #00D4AA 0%, #A259FF 100%)",
              opacity: 0.15 + Math.random() * 0.2,
              filter: "blur(2px)",
            }}
            animate={{
              y: [0, -40 - Math.random() * 60, 0],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </main>
  );
}
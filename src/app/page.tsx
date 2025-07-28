"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      setMouse({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Parallax for text and logo
  const parallax = (factor: number) => ({
    transform: `translate3d(${(mouse.x - 0.5) * factor}px, ${(mouse.y - 0.5) * factor}px, 0)`,
  });

  // Logo rotation
  const logoStyle = {
    ...parallax(60),
    transform: `${parallax(60).transform} rotate(${(mouse.x - 0.5) * 10}deg)`,
    filter: "drop-shadow(0 0 80px #00D4AA88) drop-shadow(0 0 40px #A259FF88)",
    opacity: 0.18,
    transition: "transform 0.3s cubic-bezier(.4,2,.6,1), filter 0.3s",
  };

  return (
    <main
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center bg-[#0A0C12] overflow-hidden"
      style={{
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Neon Logo Background */}
      <motion.img
        src="/token-logo.svg"
        alt="SmokeLess Token Logo"
        className="absolute z-0"
        style={{
          ...logoStyle,
          left: "50%",
          top: "50%",
          width: "60vw",
          minWidth: 400,
          maxWidth: 700,
          height: "auto",
          transform: `${parallax(60).transform} translate(-50%, -50%) rotate(${(mouse.x - 0.5) * 10}deg)`,
          pointerEvents: "none",
          userSelect: "none",
        }}
        draggable={false}
      />
      {/* Grain overlay */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "url('https://grainy-gradients.vercel.app/noise.svg') repeat",
        opacity: 0.13,
        mixBlendMode: "screen",
        zIndex: 1,
      }} />
      {/* Navigation */}
      <nav className="absolute top-8 right-12 z-20 flex gap-8 text-lg font-semibold text-white bg-[#181c2f99] backdrop-blur rounded-full px-6 py-2 shadow border border-[#3FE0FF33]">
        <a href="#" className="hover:text-[#00D4AA]">Index</a>
        <a href="#" className="hover:text-[#00D4AA]">Projects</a>
        <a href="#" className="hover:text-[#00D4AA]">Contact</a>
      </nav>
      {/* Hero Text */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-2"
          style={{
            ...parallax(30),
            fontFamily: "'Playfair Display', serif",
            background: "linear-gradient(90deg, #00D4AA 0%, #3FE0FF 50%, #A259FF 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: "-0.04em",
            textShadow: "0 4px 32px #00D4AA44, 0 1px 0 #fff"
          }}
          transition={{ type: "spring", stiffness: 80 }}
        >
          SmokeLess Token
        </motion.h1>
        <motion.div
          className="text-4xl md:text-6xl font-bold"
          style={{
            ...parallax(-20),
            fontFamily: "'Playfair Display', serif",
            color: "#3FE0FF",
            letterSpacing: "-0.04em",
            textShadow: "0 4px 32px #00D4AA44, 0 1px 0 #fff"
          }}
          transition={{ type: "spring", stiffness: 80 }}
        >
          Creating the unexpected
        </motion.div>
        <motion.button
          className="mt-12 px-8 py-4 rounded-full bg-[#00D4AA] text-white font-bold text-xl shadow-lg hover:bg-[#A259FF] hover:text-white transition"
          style={parallax(10)}
          whileHover={{ scale: 1.05 }}
        >
          View our work
        </motion.button>
      </div>
      {/* Footer */}
      <footer className="absolute bottom-8 left-12 text-[#3FE0FF] text-sm bg-[#181c2f99] px-4 py-2 rounded-full shadow border border-[#3FE0FF33]">
        ©2025 SmokeLess Token
      </footer>
    </main>
  );
}
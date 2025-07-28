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

  // Parallax effect for text
  const parallax = (factor: number) => ({
    transform: `translate3d(${(mouse.x - 0.5) * factor}px, ${(mouse.y - 0.5) * factor}px, 0)`,
  });

  return (
    <main
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center bg-[#f5e9e2] overflow-hidden"
      style={{
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Pastel 3D background imitation */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: "absolute", top: 0, left: 0 }}>
          <ellipse cx="720" cy="700" rx="900" ry="200" fill="#e3d1c6" />
          <ellipse cx="400" cy="400" rx="200" ry="80" fill="#e3d1c6" />
          <ellipse cx="1100" cy="500" rx="180" ry="60" fill="#e3d1c6" />
          <ellipse cx="900" cy="200" rx="120" ry="40" fill="#d1f7f2" />
        </svg>
        {/* Grain overlay */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: "url('https://grainy-gradients.vercel.app/noise.svg') repeat",
          opacity: 0.15,
          mixBlendMode: "multiply"
        }} />
      </div>
      {/* Navigation */}
      <nav className="absolute top-8 right-12 z-20 flex gap-8 text-lg font-semibold text-[#222] bg-white/60 backdrop-blur rounded-full px-6 py-2 shadow">
        <a href="#" className="hover:text-[#00D4AA]">Index</a>
        <a href="#" className="hover:text-[#00D4AA]">Projects</a>
        <a href="#" className="hover:text-[#00D4AA]">Contact</a>
      </nav>
      {/* Hero Text */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        <motion.div
          className="text-xl mb-4 tracking-widest"
          style={parallax(10)}
          transition={{ type: "spring", stiffness: 100 }}
        >
          A COMMUNITY & TOKEN FOR HEALTHIER LIVING
        </motion.div>
        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-2 hero-serif"
          style={{
            ...parallax(30),
            fontFamily: "'Playfair Display', serif",
            color: "#222",
            letterSpacing: "-0.04em",
            textShadow: "0 4px 32px #00D4AA44, 0 1px 0 #fff"
          }}
          transition={{ type: "spring", stiffness: 80 }}
        >
          SmokeLess Token
        </motion.h1>
        <motion.div
          className="text-5xl md:text-7xl font-bold"
          style={{
            ...parallax(-20),
            fontFamily: "'Playfair Display', serif",
            color: "#00D4AA",
            letterSpacing: "-0.04em",
            textShadow: "0 4px 32px #00D4AA44, 0 1px 0 #fff"
          }}
          transition={{ type: "spring", stiffness: 80 }}
        >
          Creating the unexpected
        </motion.div>
        <motion.button
          className="mt-12 px-8 py-4 rounded-full bg-white/80 text-[#00D4AA] font-bold text-xl shadow-lg hover:bg-[#00D4AA] hover:text-white transition"
          style={parallax(10)}
          whileHover={{ scale: 1.05 }}
        >
          View our work
        </motion.button>
      </div>
      {/* Footer */}
      <footer className="absolute bottom-8 left-12 text-[#222] text-sm bg-white/60 px-4 py-2 rounded-full shadow">
        ©2025 SmokeLess Token
      </footer>
    </main>
  );
}
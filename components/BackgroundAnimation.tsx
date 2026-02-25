"use client";

import { motion } from "framer-motion";

export const BackgroundAnimation = () => {
  return (
    <div className="fixed inset-0 overflow-hidden -z-10 bg-slate-950">
      {/* Glowing background gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/20 rounded-full blur-[120px] animate-glow-pulse" />
      <div
        className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-800/20 rounded-full blur-[150px] animate-glow-pulse"
        style={{ animationDelay: "2s" }}
      />

      {/* Rotating glowing lines pattern */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <div className="relative w-[300vh] h-[300vh] animate-spin-slow">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"
              style={{
                transform: `translate(-50%, -50%) rotate(${i * 30}deg)`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Another layer of lines rotating in reverse */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <div className="relative w-[200vh] h-[200vh] animate-spin-slow-reverse">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400/40 to-transparent"
              style={{
                transform: `translate(-50%, -50%) rotate(${i * 45}deg)`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
    </div>
  );
};

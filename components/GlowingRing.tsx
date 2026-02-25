"use client";

import { motion } from "framer-motion";

export const GlowingRing = () => {
  return (
    <div className="relative flex items-center justify-center w-64 h-64 md:w-80 md:h-80">
      {/* Outer spinning glow */}
      <motion.div
        className="absolute inset-0 rounded-full border border-blue-500/30 blur-sm"
        animate={{ rotate: 360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Inner pulsing ring */}
      <motion.div
        className="absolute inset-4 rounded-full border-2 border-blue-400/50"
        animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Particle container inside the ring */}
      <div className="absolute inset-8 rounded-full overflow-hidden flex items-center justify-center bg-blue-900/10 backdrop-blur-sm border border-blue-400/20">
        <motion.div 
            className="flex space-x-2 p-2 rounded-lg bg-slate-900/80 border border-slate-700/50"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
        >
            <div className="w-10 h-10 rounded-full bg-blue-500 overflow-hidden flex items-center justify-center shadow-lg shadow-blue-500/50 ring-2 ring-blue-300">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="avatar" className="w-full h-full object-cover" />
            </div>
            <div className="w-10 h-10 rounded-lg bg-slate-200 overflow-hidden flex items-center justify-center shadow-md">
                <img src="https://api.dicebear.com/7.x/shapes/svg?seed=Dashboard" alt="doc" className="w-full h-full object-cover" />
            </div>
        </motion.div>
      </div>

      {/* Extra flare effects */}
      <div className="absolute -inset-10 bg-blue-500/5 rounded-full blur-3xl animate-glow-pulse" />
    </div>
  );
};

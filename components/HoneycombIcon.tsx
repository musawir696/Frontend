"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { useState } from "react";

interface HoneycombIconProps {
  Icon: LucideIcon;
  label?: string;
  initialX: number;
  initialY: number;
  isSelected?: boolean;
  className?: string;
}

export const HoneycombIcon = ({ Icon, label, initialX, initialY, isSelected: initialSelected, className }: HoneycombIconProps) => {
  const [isSelected, setIsSelected] = useState(initialSelected || false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`absolute cursor-pointer group ${className || ""}`}
      style={{ left: `${initialX}%`, top: `${initialY}%` }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setIsSelected(!isSelected)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        {/* Hexagon Shape using CSS Clip Path */}
        <div 
          className={`w-14 h-16 flex items-center justify-center transition-all duration-300 ${
            isSelected 
              ? "bg-gradient-to-br from-blue-400 to-blue-600 shadow-xl shadow-blue-500/40" 
              : "bg-slate-800/80 border border-slate-700 hover:border-blue-400/50"
          }`}
          style={{
            clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
          }}
        >
          <Icon className={`w-6 h-6 ${isSelected ? "text-white" : "text-slate-400 group-hover:text-blue-300"}`} />
        </div>

        {/* Hover/Selected Glow */}
        {(isSelected || isHovered) && (
          <div className="absolute inset-0 bg-blue-500/20 blur-xl -z-10 animate-pulse" />
        )}

        {/* Hover Subtitle */}
        {label && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 20 : 10 }}
            className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-semibold text-blue-300 pointer-events-none"
          >
            {label}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

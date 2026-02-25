"use client";

import { BackgroundAnimation } from "@/components/BackgroundAnimation";
import { GlowingRing } from "@/components/GlowingRing";
import { HoneycombIcon } from "@/components/HoneycombIcon";
import { 
  Sparkles, 
  Layout, 
  Users, 
  Network, 
  Target, 
  UserPlus 
} from "lucide-react";
import { motion } from "framer-motion";

import { DashboardContainer } from "@/components/dashboard/DashboardContainer";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-start bg-slate-950 text-white overflow-y-auto scrollbar-hide">
      <div className="relative w-full min-h-screen flex flex-col items-center justify-center shrink-0 p-4 pt-20">
        <BackgroundAnimation />
        
        {/* Honeycomb Icons floating around */}
        <HoneycombIcon Icon={Sparkles} label="Sparkle" initialX={20} initialY={15} className="scale-75 md:scale-100" />
        <HoneycombIcon Icon={Layout} label="Layout" initialX={10} initialY={30} className="hidden md:block" />
        <HoneycombIcon Icon={Users} label="Team" initialX={22} initialY={40} className="scale-75 md:scale-100" />
        
        <HoneycombIcon Icon={UserPlus} label="Invite" initialX={85} initialY={10} className="scale-75 md:scale-100" />
        <HoneycombIcon Icon={Network} label="Flow" initialX={75} initialY={25} className="hidden md:block" />
        <HoneycombIcon Icon={Target} label="Goal" initialX={88} initialY={42} className="scale-75 md:scale-100" />

        {/* Central Content */}
        <div className="flex flex-col items-center justify-center z-10 space-y-6">
          <GlowingRing />
          
          <div className="text-center space-y-4 max-w-lg mb-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-3xl md:text-5xl font-bold tracking-tight bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent px-4"
            >
              Extracting Information...
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-slate-400 text-sm md:text-base font-medium px-6"
            >
              We are extracting information from the above honey combs to your system
            </motion.p>
          </div>

          {/* Integrated Dashboard UI */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="w-full max-w-[1240px] shadow-2xl rounded-t-2xl overflow-hidden border-t border-x border-white/10"
          >
            <DashboardContainer isPreview />
          </motion.div>
        </div>
      </div>
    </main>
  );
}

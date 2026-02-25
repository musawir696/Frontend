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

import Image from "next/image";

import { DashboardContainer } from "@/components/dashboard/DashboardContainer";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-start bg-slate-950 text-white overflow-y-auto scrollbar-hide">
      <div className="relative w-full min-h-screen flex flex-col items-center justify-center shrink-0 p-4">
        <BackgroundAnimation />
        
        {/* Honeycomb Icons floating around */}
        <HoneycombIcon Icon={Sparkles} label="Sparkle" initialX={20} initialY={15} />
        <HoneycombIcon Icon={Layout} label="Layout" initialX={10} initialY={30} />
        <HoneycombIcon Icon={Users} label="Team" initialX={22} initialY={40} />
        
        <HoneycombIcon Icon={UserPlus} label="Invite" initialX={85} initialY={10} />
        <HoneycombIcon Icon={Network} label="Flow" initialX={75} initialY={25} />
        <HoneycombIcon Icon={Target} label="Goal" initialX={88} initialY={42} />

        {/* Central Content */}
        <div className="flex flex-col items-center justify-center z-10 space-y-8">
          <GlowingRing />
          
          <div className="text-center space-y-4 max-w-lg">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent"
            >
              Extracting Information...
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-slate-400 text-lg md:text-xl font-medium"
            >
              We are extracting information from the above honey combs to your system
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="pt-6"
            >
              <a 
                href="/dashboard"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold shadow-lg shadow-blue-500/30 transition-all hover:scale-105 active:scale-95"
              >
                View Dashboard
              </a>
            </motion.div>
          </div>
        </div>

        {/* Floating interactive element */}
        <motion.div
          drag
          dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
          className="absolute bottom-10 left-10 w-16 h-16 rounded-full bg-blue-500/20 backdrop-blur-xl border border-blue-400/30 flex items-center justify-center cursor-move shadow-lg shadow-blue-500/20"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.5, type: "spring" }}
        >
          <div className="w-10 h-10 rounded-full bg-blue-600 overflow-hidden ring-2 ring-blue-300">
               <Image 
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" 
                  alt="avatar" 
                  unoptimized
                  width={40}
                  height={40}
               />
          </div>
        </motion.div>
      </div>

      {/* Dashboard Preview (Integrated UI) */}
      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="w-full max-w-[95%] mx-auto mb-20 z-20"
      >
        <DashboardContainer isPreview />
      </motion.div>
    </main>
  );
}

"use client";

import { Search, Settings, Bell, CircleCheck, Inbox, MessageSquare, LayoutGrid, Users, Zap, Mail, Rocket } from "lucide-react";
import { motion } from "framer-motion";

export const Navbar = () => {
  const navItems = [
    { name: "Inbox", icon: Inbox, active: true },
    { name: "Contacts", icon: Users },
    { name: "AI Employees", icon: Zap },
    { name: "Workflows", icon: LayoutGrid },
    { name: "Campaigns", icon: Rocket },
  ];

  return (
    <nav className="h-16 border-b border-slate-200 bg-white flex items-center justify-between px-6 sticky top-0 z-50">
      <div className="flex items-center space-x-8">
        {/* Logo */}
        <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl leading-none">h</span>
            </div>
            <span className="text-slate-900 font-bold text-xl tracking-tight">heyy</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <button
              key={item.name}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                item.active 
                  ? "bg-slate-100 text-slate-900" 
                  : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <item.icon className="w-4 h-4" />
              <span>{item.name}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <button className="p-2 text-slate-500 hover:bg-slate-50 rounded-full">
          <Settings className="w-5 h-5" />
        </button>
        <div className="flex items-center space-x-2 pl-4 border-l border-slate-200">
          <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 font-bold text-sm">
            M
          </div>
          <span className="text-sm font-semibold text-slate-900 hidden sm:inline">Michael Johnson</span>
        </div>
      </div>
    </nav>
  );
};

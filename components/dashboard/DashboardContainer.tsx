"use client";

import { Navbar } from "@/components/dashboard/Navbar";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { ChatList } from "@/components/dashboard/ChatList";
import { ChatWindow } from "@/components/dashboard/ChatWindow";
import { DetailsPanel } from "@/components/dashboard/DetailsPanel";

export const DashboardContainer = ({ isPreview = false }: { isPreview?: boolean }) => {
  return (
    <div className={`flex flex-col bg-white overflow-hidden ${isPreview ? 'rounded-t-2xl shadow-2xl border-t border-x border-white/10' : 'min-h-screen'}`}>
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <ChatList />
        <ChatWindow />
        <DetailsPanel />
      </div>
    </div>
  );
};

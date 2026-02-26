"use client";

import { useState, useCallback } from "react";
import { Navbar } from "@/components/dashboard/Navbar";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { ChatList } from "@/components/dashboard/ChatList";
import { ChatWindow } from "@/components/dashboard/ChatWindow";
import { DetailsPanel } from "@/components/dashboard/DetailsPanel";
import { User } from "@/types";

export const DashboardContainer = ({ isPreview = false }: { isPreview?: boolean }) => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [showChatOnMobile, setShowChatOnMobile] = useState(false);

  const handleSelectUser = useCallback((user: User) => {
    setSelectedUser(user);
    setShowChatOnMobile(true);
  }, []);

  const handleBackToList = useCallback(() => {
    setShowChatOnMobile(false);
  }, []);

  return (
    <div className={`flex flex-col bg-white overflow-hidden ${isPreview ? 'rounded-t-2xl shadow-2xl border-t border-x border-white/10' : 'min-h-screen'}`}>
      <Navbar />
      <div className="flex flex-1 overflow-hidden relative">
        <Sidebar />
        
        <div className={`${showChatOnMobile ? 'hidden md:flex' : 'flex'}`}>
          <ChatList onSelectUser={handleSelectUser} selectedUserId={selectedUser?.id} />
        </div>

        <div className={`flex-1 flex overflow-hidden ${showChatOnMobile ? 'flex' : 'hidden md:flex'}`}>
          <ChatWindow user={selectedUser} onBack={handleBackToList} />
        </div>
        
        <DetailsPanel user={selectedUser} />
      </div>
    </div>
  );
};

"use client";

import { User, ChevronDown, MessageCircle, Hash } from "lucide-react";

export const Sidebar = () => {
  return (
    <div className="w-64 border-r border-slate-200 bg-slate-50/50 h-[calc(100vh-64px)] flex flex-col p-4 overflow-y-auto hidden lg:flex">
      <div className="space-y-6">
        {/* Inbox Section */}
        <div>
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4 px-2">Inbox</h3>
          <div className="space-y-1">
            <SidebarItem icon={User} label="My Inbox" />
            <SidebarItem icon={MessageCircle} label="All" count={28} active />
            <SidebarItem icon={User} label="Unassigned" count={5} />
          </div>
        </div>

        {/* Teams Section */}
        <div>
          <div className="flex items-center justify-between px-2 mb-4">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Teams</h3>
            <ChevronDown className="w-3 h-3 text-slate-400" />
          </div>
          <div className="space-y-1">
            <SidebarItem icon={Hash} label="Sales" count={7} color="bg-blue-100 text-blue-600" />
            <SidebarItem icon={Hash} label="Customer Support" count={16} color="bg-green-100 text-green-600" />
          </div>
        </div>

        {/* Users Section */}
        <div>
          <div className="flex items-center justify-between px-2 mb-4">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Users</h3>
            <ChevronDown className="w-3 h-3 text-slate-400" />
          </div>
          <div className="space-y-1">
            <SidebarItem avatar="SW" label="Sarah Williams" count={2} />
            <SidebarItem avatar="MJ" label="Michael Johnson" count={11} active />
            <SidebarItem avatar="ED" label="Emily Davis" />
            <SidebarItem avatar="CM" label="Christopher Miller" count={4} />
            <SidebarItem avatar="AG" label="Amanda Garcia" count={5} />
            <SidebarItem avatar="JM" label="Joshua Martinez" />
            <SidebarItem avatar="AT" label="Ashley Taylor" count={1} />
            <SidebarItem avatar="DA" label="Daniel Anderson" />
            <SidebarItem avatar="JT" label="Jessica Thomas" count={2} />
          </div>
        </div>

        {/* Channels Section */}
        <div>
            <div className="flex items-center justify-between px-2 mb-4">
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Channels</h3>
                <ChevronDown className="w-3 h-3 text-slate-400" />
            </div>
            <div className="space-y-1">
                <SidebarItem icon={MessageCircle} label="Fit4Life" color="bg-green-100 text-green-600" activeBadge />
                <SidebarItem icon={MessageCircle} label="Fit4Life" color="bg-pink-100 text-pink-600" />
            </div>
        </div>
      </div>
    </div>
  );
};

interface SidebarItemProps {
  icon?: React.ElementType;
  avatar?: string;
  label: string;
  count?: number;
  active?: boolean;
  color?: string;
  activeBadge?: boolean;
}

const SidebarItem = ({ icon: Icon, avatar, label, count, active, color, activeBadge }: SidebarItemProps) => {
  return (
    <button className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
      active ? "bg-white shadow-sm ring-1 ring-slate-200 text-slate-900" : "text-slate-500 hover:bg-white/50 hover:text-slate-900"
    }`}>
      <div className="flex items-center space-x-3 truncate">
        {Icon ? (
          <div className={`p-1 rounded-md ${color || 'bg-slate-100 text-slate-500'}`}>
            <Icon className="w-4 h-4" />
          </div>
        ) : avatar ? (
          <div className={`w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-600 shrink-0`}>
            {avatar}
          </div>
        ) : null}
        <span className="truncate">{label}</span>
      </div>
      {count !== undefined && count > 0 && (
        <span className="text-xs font-semibold text-slate-400 ml-2">{count}</span>
      )}
      {activeBadge && (
        <div className="w-2 h-2 rounded-full bg-green-500 ml-2 shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
      )}
    </button>
  );
};

import { User as UserIcon, ChevronDown, ChevronRight, MessageCircle, Hash, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import { fetchUsers } from "@/lib/api";
import { User } from "@/types";

export const Sidebar = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [openSections, setOpenSections] = useState({
    teams: true,
    users: true,
    channels: true
  });

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  useEffect(() => {
    async function loadUsers() {
      try {
        const data = await fetchUsers();
        setUsers(data.slice(0, 7)); 
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    loadUsers();
  }, []);

  return (
    <div className="w-64 border-r border-slate-200 bg-slate-50/50 h-[calc(100vh-64px)] flex flex-col p-4 overflow-y-auto hidden lg:flex">
      <div className="space-y-6">
        {/* Inbox Section */}
        <div>
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4 px-2">Inbox</h3>
          <div className="space-y-1">
            <SidebarItem icon={UserIcon} label="My Inbox" />
            <SidebarItem icon={MessageCircle} label="All" count={28} active />
            <SidebarItem icon={UserIcon} label="Unassigned" count={5} />
          </div>
        </div>

        {/* Teams Section */}
        <div>
          <button 
            onClick={() => toggleSection('teams')}
            className="w-full flex items-center justify-between px-2 mb-4 group"
          >
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Teams</h3>
            {openSections.teams ? <ChevronDown className="w-3 h-3 text-slate-400 group-hover:text-slate-600" /> : <ChevronRight className="w-3 h-3 text-slate-400 group-hover:text-slate-600" />}
          </button>
          {openSections.teams && (
            <div className="space-y-1">
              <SidebarItem icon={Hash} label="Sales" count={7} color="bg-blue-100 text-blue-600" />
              <SidebarItem icon={Hash} label="Customer Support" count={16} color="bg-green-100 text-green-600" />
            </div>
          )}
        </div>

        {/* Users Section */}
        <div>
          <button 
            onClick={() => toggleSection('users')}
            className="w-full flex items-center justify-between px-2 mb-4 group"
          >
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Users</h3>
            {openSections.users ? <ChevronDown className="w-3 h-3 text-slate-400 group-hover:text-slate-600" /> : <ChevronRight className="w-3 h-3 text-slate-400 group-hover:text-slate-600" />}
          </button>
          {openSections.users && (
            <div className="space-y-1">
              {loading ? (
                <div className="flex items-center space-x-2 px-3 py-2 text-slate-400">
                    <Loader2 className="w-3 h-3 animate-spin" />
                    <span className="text-xs">Loading...</span>
                </div>
              ) : (
                  users.map((user, idx) => (
                      <SidebarItem 
                          key={user.id} 
                          avatar={`${user.firstName.charAt(0)}${user.lastName.charAt(0)}`}
                          label={`${user.firstName} ${user.lastName}`}
                          active={idx === 1} 
                      />
                  ))
              )}
            </div>
          )}
        </div>

        {/* Channels Section */}
        <div>
            <button 
                onClick={() => toggleSection('channels')}
                className="w-full flex items-center justify-between px-2 mb-4 group"
            >
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Channels</h3>
                {openSections.channels ? <ChevronDown className="w-3 h-3 text-slate-400 group-hover:text-slate-600" /> : <ChevronRight className="w-3 h-3 text-slate-400 group-hover:text-slate-600" />}
            </button>
            {openSections.channels && (
                <div className="space-y-1">
                    <SidebarItem icon={MessageCircle} label="Fit4Life" color="bg-green-100 text-green-600" activeBadge />
                    <SidebarItem icon={MessageCircle} label="Fit4Life" color="bg-pink-100 text-pink-600" />
                </div>
            )}
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

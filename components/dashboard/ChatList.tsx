"use client";

import { Search, ChevronDown, CheckCircle2, Loader2 } from "lucide-react";
import { useState, useEffect, useMemo } from "react";
import { fetchUsers } from "@/lib/api";

interface UserAPI {
  id: number;
  name: string;
  email: string;
  company: {
    catchPhrase: string;
  };
}

export const ChatList = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [users, setUsers] = useState<UserAPI[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function loadUsers() {
            try {
                const data = await fetchUsers();
                setUsers(data);
            } catch (err) {
                setError("Failed to load contacts");
                console.error(err);
            } finally {
                setLoading(false);
            }
        }
        loadUsers();
    }, []);

    const colors = ["bg-blue-500", "bg-yellow-500", "bg-indigo-500", "bg-orange-500", "bg-teal-500", "bg-pink-500", "bg-purple-500", "bg-amber-500", "bg-lime-500", "bg-emerald-500"];

    const filteredUsers = useMemo(() => {
        return users.filter(user => 
            user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.email.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [users, searchQuery]);

  return (
    <div className="w-80 border-r border-slate-200 bg-white h-[calc(100vh-64px)] flex flex-col overflow-hidden shrink-0">
      {/* Header */}
      <div className="p-4 border-b border-slate-100 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-5 h-5 text-slate-400" />
            <h2 className="font-bold text-slate-900 truncate max-w-[150px]">Michael Johnson</h2>
          </div>
          <button className="p-1 rounded-md hover:bg-slate-50 text-slate-500">
            <Search className="w-4 h-4" />
          </button>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search Chat"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border-none rounded-lg text-sm focus:ring-2 focus:ring-blue-100 transition-all outline-none"
          />
        </div>

        <div className="flex items-center justify-between text-sm font-semibold text-slate-900">
          <button className="flex items-center space-x-1 hover:text-blue-600 transition-colors">
            <span>Open</span>
            <ChevronDown className="w-4 h-4" />
          </button>
          <button className="flex items-center space-x-1 hover:text-blue-600 transition-colors">
            <span>Newest</span>
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto divide-y divide-slate-50">
        {loading ? (
            <div className="h-full flex flex-col items-center justify-center p-8 space-y-2 opacity-50">
                <Loader2 className="w-6 h-6 animate-spin text-blue-600" />
                <span className="text-xs font-medium text-slate-500">Loading contacts...</span>
            </div>
        ) : error ? (
            <div className="p-8 text-center">
                <p className="text-sm text-red-500 font-medium">{error}</p>
                <button onClick={() => window.location.reload()} className="mt-2 text-xs text-blue-600 font-bold hover:underline">Retry</button>
            </div>
        ) : filteredUsers.length === 0 ? (
            <div className="p-8 text-center text-slate-400 text-sm">
                No contacts found for &quot;{searchQuery}&quot;
            </div>
        ) : (
            filteredUsers.map((user, idx) => (
            <button
                key={user.id}
                className={`w-full p-4 flex items-start space-x-3 transition-colors text-left ${
                idx === 0 && !searchQuery ? "bg-slate-50" : "hover:bg-slate-50/50"
                }`}
            >
                <div className={`w-10 h-10 rounded-full ${colors[idx % colors.length]} flex items-center justify-center text-white font-bold shrink-0`}>
                {user.name.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-0.5">
                    <span className="font-bold text-slate-900 truncate">{user.name}</span>
                    <span className="text-[11px] text-slate-400">23:23</span>
                </div>
                <p className="text-xs text-slate-500 truncate">{user.company.catchPhrase}</p>
                </div>
            </button>
            ))
        )}
      </div>
    </div>
  );
};

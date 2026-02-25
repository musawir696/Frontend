import { ChevronDown, User as UserIcon, Plus, X, MessageSquare, Phone, Instagram, LayoutDashboard } from "lucide-react";
import { User } from "@/types";

export const DetailsPanel = ({ user }: { user: User | null }) => {
  if (!user) {
    return (
      <div className="w-80 border-l border-slate-200 bg-white h-[calc(100vh-64px)] hidden xl:flex items-center justify-center text-slate-400">
        <p className="text-sm">Select a contact</p>
      </div>
    );
  }

  return (
    <div className="w-80 border-l border-slate-200 bg-white h-[calc(100vh-64px)] overflow-y-auto hidden xl:block">
      {/* Header */}
      <div className="h-16 px-6 border-b border-slate-100 flex items-center justify-between shrink-0">
        <h2 className="font-bold text-slate-900">Details</h2>
        <button className="p-1.5 text-slate-400 hover:bg-slate-50 rounded-lg border border-slate-200">
          <LayoutDashboard className="w-4 h-4" />
        </button>
      </div>

      <div className="p-6 space-y-8">
        {/* Chat Data */}
        <Section title="Chat Data">
            <div className="space-y-4 pt-2">
                <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-400">Assignee</span>
                    <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center">
                            <UserIcon className="w-3 h-3 text-slate-500" />
                        </div>
                        <span className="text-sm font-bold text-slate-900">Michael Johnson</span>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-400">Team</span>
                    <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center">
                            <UserIcon className="w-3 h-3 text-slate-500" />
                        </div>
                        <span className="text-sm font-bold text-slate-900">Sales Team</span>
                    </div>
                </div>
            </div>
        </Section>

        {/* Contact Data */}
        <Section title="Contact Data">
            <div className="space-y-4 pt-2">
                <DataRow label="First Name" value={user.firstName} />
                <DataRow label="Last Name" value={user.lastName} />
                <DataRow label="Phone number" value={user.phone} />
                <DataRow label="Email" value={user.email} />
                <button className="text-xs font-bold text-slate-900 hover:underline">See all</button>
            </div>
        </Section>

        {/* Contact Labels */}
        <Section title="Contact Labels">
            <div className="flex flex-wrap gap-2 pt-2">
                <Label text="Closed Won" color="bg-blue-50 text-blue-600 border-blue-200" icon={<Phone className="w-3 h-3" />} />
                <Label text="Chicago" color="bg-blue-50 text-blue-600 border-blue-200" icon={<MessageSquare className="w-3 h-3" />} />
                <button className="w-8 h-8 rounded-full border-2 border-dashed border-slate-200 flex items-center justify-center text-blue-500 hover:border-blue-400 transition-colors">
                    <Plus className="w-4 h-4" />
                </button>
            </div>
        </Section>

        {/* Notes */}
        <Section title="Notes">
            <div className="space-y-2 pt-2">
                <input 
                    type="text" 
                    placeholder="Add a note" 
                    className="w-full bg-amber-100/50 border-none rounded-lg py-2 px-3 text-sm placeholder:text-amber-600/50 text-amber-900 outline-none"
                />
                <div className="bg-amber-100 p-3 rounded-lg border border-amber-200">
                    <p className="text-xs font-medium text-amber-900">Strong potential for future upgrades</p>
                </div>
            </div>
        </Section>

        {/* Other Chats */}
        <Section title="Other Chats">
            <div className="space-y-4 pt-2">
                <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-lg bg-pink-500 flex items-center justify-center shadow-lg shadow-pink-500/20 ring-2 ring-pink-100">
                             <Instagram className="w-4 h-4 text-white" />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-slate-900">Fit4Life</p>
                            <p className="text-[10px] text-slate-500">On my way!</p>
                        </div>
                    </div>
                    <span className="text-[10px] text-slate-400">08/08/25</span>
                </div>
            </div>
        </Section>
      </div>
    </div>
  );
};

const Section = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="space-y-2">
        <button className="w-full flex items-center justify-between group">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">{title}</h3>
            <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-slate-600 transition-colors" />
        </button>
        {children}
    </div>
);

const DataRow = ({ label, value }: { label: string, value: string }) => (
    <div className="flex flex-col space-y-1">
        <span className="text-[10px] font-medium text-slate-400 uppercase tracking-tight">{label}</span>
        <span className="text-sm font-bold text-slate-900">{value}</span>
    </div>
);

const Label = ({ text, color, icon }: { text: string, color: string, icon?: React.ReactNode }) => (
    <div className={`px-3 py-1.5 rounded-full border flex items-center space-x-2 text-[11px] font-bold ${color}`}>
        {icon}
        <span>{text}</span>
        <X className="w-3 h-3 cursor-pointer opacity-50 hover:opacity-100" />
    </div>
);

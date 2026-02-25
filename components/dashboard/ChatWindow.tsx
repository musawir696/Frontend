import { MoreVertical, Moon, Box, Image as ImageIcon, Youtube, Smile, CornerUpLeft, Zap, Mic, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import { fetchPosts } from "@/lib/api";

interface PostAPI {
  id: number;
  title: string;
  body: string;
}

interface Message {
  id: number;
  sender: string;
  text: string;
  time: string;
  type: "incoming" | "outgoing";
  isAI?: boolean;
}

export const ChatWindow = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadMessages() {
            try {
                const data = await fetchPosts(1); // Default to user 1
                const formattedMessages = data.map((post: PostAPI, idx: number) => ({
                    id: post.id,
                    sender: idx % 2 === 0 ? "Olivia Mckinsey" : "Michael",
                    text: post.body,
                    time: "23:08",
                    type: idx % 2 === 0 ? "incoming" : "outgoing",
                    isAI: idx % 2 !== 0
                }));
                setMessages(formattedMessages);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        }
        loadMessages();
    }, []);

  return (
    <div className="flex-1 flex flex-col bg-slate-50 h-[calc(100vh-64px)] overflow-hidden">
      {/* Header */}
      <div className="h-16 px-6 border-b border-slate-200 flex items-center justify-between bg-white shrink-0">
        <h2 className="font-bold text-slate-900">Olivia Mckinsey</h2>
        <div className="flex items-center space-x-2">
          <button className="p-2 text-slate-500 hover:bg-slate-50 rounded-lg">
            <MoreVertical className="w-5 h-5" />
          </button>
          <button className="p-2 text-slate-500 hover:bg-slate-50 rounded-lg">
            <Moon className="w-5 h-5" />
          </button>
          <button className="p-2 text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow-sm">
            <Box className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        <div className="flex justify-center mb-8">
            <span className="px-3 py-1 bg-white rounded-lg text-xs font-bold text-slate-900 shadow-sm ring-1 ring-slate-200">
                28 August 2025
            </span>
        </div>

        {loading ? (
             <div className="h-full flex flex-col items-center justify-center opacity-50 space-y-2">
                <Loader2 className="w-6 h-6 animate-spin text-blue-600" />
                <span className="text-xs font-medium text-slate-500">Loading messages...</span>
             </div>
        ) : (
            messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.type === 'outgoing' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] ${msg.type === 'outgoing' ? 'flex flex-row-reverse space-x-reverse' : 'flex space-x-3'}`}>
                    {msg.type === 'incoming' && (
                        <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-600 shrink-0 mt-1">
                            O
                        </div>
                    )}
                    <div className="space-y-1">
                        <div className={`p-4 rounded-2xl shadow-sm text-sm leading-relaxed ${
                            msg.type === 'outgoing' 
                                ? "bg-indigo-100 text-slate-900 rounded-tr-none border border-indigo-200" 
                                : "bg-white text-slate-900 rounded-tl-none border border-slate-200"
                        }`}>
                            {msg.text}
                        </div>
                        <div className={`flex items-center text-[10px] text-slate-400 px-1 ${msg.type === 'outgoing' ? 'justify-end' : 'justify-start'}`}>
                            <span>{msg.time}</span>
                            {msg.type === 'outgoing' && <span className="ml-1 text-blue-500">✓✓</span>}
                        </div>
                    </div>
                </div>
            </div>
            ))
        )}
      </div>

      {/* Input */}
      <div className="p-4 bg-white border-t border-slate-200 shrink-0">
        <div className="max-w-4xl mx-auto flex items-end space-x-2 bg-slate-50 border border-slate-200 rounded-2xl p-2 pr-4">
            <div className="flex items-center space-x-1 pl-2 pb-1.5">
                <button className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg"><ImageIcon className="w-5 h-5" /></button>
                <button className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg"><Youtube className="w-5 h-5" /></button>
                <button className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg"><Smile className="w-5 h-5" /></button>
                <button className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg"><CornerUpLeft className="w-5 h-5" /></button>
            </div>
            
            <textarea 
                placeholder="Type something...."
                className="flex-1 bg-transparent border-none focus:ring-0 text-sm py-2 px-2 resize-none h-10 max-h-32 text-slate-700 outline-none"
                rows={1}
            />
            
            <div className="flex items-center space-x-2 pb-1.5">
                <button className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg"><Zap className="w-5 h-5" /></button>
                <button className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg"><Mic className="w-5 h-5" /></button>
            </div>
        </div>
      </div>
    </div>
  );
};

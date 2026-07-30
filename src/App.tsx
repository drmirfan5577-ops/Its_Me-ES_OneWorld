import React, { useState } from 'react';
import { 
  Menu, Search, Bell, Video, User, Home, Flame, 
  Tv, History, ThumbsUp, Compass, Settings, ShieldCheck, 
  MessageSquare, Phone, Globe, Play, Heart, Share2, Sparkles
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'trending' | 'messages' | 'admin' | 'studio'>('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedVideo, setSelectedVideo] = useState<any | null>(null);

  const sampleVideos = [
    {
      id: '1',
      title: 'SmartTube Enterprise Architecture & Future Vision | E.S OneWorld',
      channel: 'E.S OneWorld Official',
      views: '125K views',
      time: '2 days ago',
      duration: '14:20',
      thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=60',
      category: 'Technology'
    },
    {
      id: '2',
      title: 'Natural Healing Pathways & Holistic Wellness Insights',
      channel: 'Smart Research & Analysis',
      views: '48K views',
      time: '1 week ago',
      duration: '22:15',
      thumbnail: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=60',
      category: 'Health'
    },
    {
      id: '3',
      title: 'Global Broadcasting & Live Streaming Infrastructure Demo',
      channel: 'E.S OneWorld Tech',
      views: '92K views',
      time: '3 days ago',
      duration: '08:45',
      thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=60',
      category: 'Live'
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col">
      {/* Top Bar */}
      <header className="h-16 border-b border-zinc-800 bg-zinc-900/80 backdrop-blur sticky top-0 z-50 px-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-zinc-800 rounded-full transition">
            <Menu className="w-5 h-5 text-zinc-300" />
          </button>
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setActiveTab('home')}>
            <div className="bg-red-600 p-2 rounded-xl flex items-center justify-center shadow-lg shadow-red-600/30">
              <Play className="w-5 h-5 text-white fill-white" />
            </div>
            <div>
              <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">SmartTube</span>
              <span className="block text-[10px] text-zinc-400 font-medium tracking-wide">A project of E.S OneWorld</span>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center flex-1 max-w-xl mx-8">
          <div className="flex w-full bg-zinc-950 border border-zinc-800 rounded-full overflow-hidden focus-within:border-zinc-600">
            <input 
              type="text" 
              placeholder="Search videos, creators, or communities..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 bg-transparent text-sm focus:outline-none text-zinc-200 placeholder-zinc-500"
            />
            <button className="px-6 bg-zinc-900 border-l border-zinc-800 hover:bg-zinc-800 flex items-center justify-center transition">
              <Search className="w-4 h-4 text-zinc-400" />
            </button>
          </div>
        </div>

        {/* User Actions */}
        <div className="flex items-center gap-3">
          <button onClick={() => setActiveTab('studio')} className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 rounded-lg text-xs font-medium transition">
            <Video className="w-4 h-4 text-red-500" />
            <span>Create</span>
          </button>
          <button className="p-2 hover:bg-zinc-800 rounded-full transition relative">
            <Bell className="w-5 h-5 text-zinc-300" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-red-500 to-amber-500 flex items-center justify-center font-bold text-sm shadow">
            MQ
          </div>
        </div>
      </header>

      {/* Main Content Layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 border-r border-zinc-800 bg-zinc-900/50 p-4 hidden lg:flex flex-col justify-between">
          <div className="space-y-6">
            <div className="space-y-1">
              <button onClick={() => setActiveTab('home')} className={`w-full flex items-center gap-4 px-3 py-2.5 rounded-xl text-sm font-medium transition ${activeTab === 'home' ? 'bg-red-600/10 text-red-500 border border-red-600/20' : 'hover:bg-zinc-800 text-zinc-300'}`}>
                <Home className="w-4 h-4" /> Home
              </button>
              <button onClick={() => setActiveTab('trending')} className={`w-full flex items-center gap-4 px-3 py-2.5 rounded-xl text-sm font-medium transition ${activeTab === 'trending' ? 'bg-red-600/10 text-red-500 border border-red-600/20' : 'hover:bg-zinc-800 text-zinc-300'}`}>
                <Flame className="w-4 h-4" /> Trending
              </button>
              <button onClick={() => setActiveTab('messages')} className={`w-full flex items-center gap-4 px-3 py-2.5 rounded-xl text-sm font-medium transition ${activeTab === 'messages' ? 'bg-red-600/10 text-red-500 border border-red-600/20' : 'hover:bg-zinc-800 text-zinc-300'}`}>
                <MessageSquare className="w-4 h-4" /> Messages & Calls
              </button>
              <button onClick={() => setActiveTab('admin')} className={`w-full flex items-center gap-4 px-3 py-2.5 rounded-xl text-sm font-medium transition ${activeTab === 'admin' ? 'bg-red-600/10 text-red-500 border border-red-600/20' : 'hover:bg-zinc-800 text-zinc-300'}`}>
                <ShieldCheck className="w-4 h-4" /> Admin Command Hub
              </button>
            </div>
          </div>
          <div className="pt-4 border-t border-zinc-800 text-xs text-zinc-500 space-y-1">
            <p>© 2026 SmartTube</p>
            <p className="text-zinc-400 font-medium">A project of E.S OneWorld</p>
          </div>
        </aside>

        {/* Dynamic Workspace */}
        <main className="flex-1 overflow-y-auto p-6 bg-zinc-950">
          {activeTab === 'home' && (
            <div className="space-y-6">
              <div className="flex items-center gap-2 overflow-x-auto pb-2">
                {['All', 'Technology', 'Health & Wellness', 'Live Streaming', 'Music', 'Podcasts', 'Documentary'].map((cat, idx) => (
                  <button key={idx} className={`px-4 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition ${idx === 0 ? 'bg-white text-zinc-950 font-semibold' : 'bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800'}`}>
                    {cat}
                  </button>
                ))}
              </div>

              {/* Video Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {sampleVideos.map((video) => (
                  <div key={video.id} onClick={() => setSelectedVideo(video)} className="group cursor-pointer bg-zinc-900/40 border border-zinc-800/60 rounded-2xl overflow-hidden hover:border-zinc-700 transition">
                    <div className="relative aspect-video bg-zinc-900 overflow-hidden">
                      <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                      <span className="absolute bottom-2 right-2 px-2 py-0.5 bg-black/80 backdrop-blur text-[10px] font-semibold rounded text-white">{video.duration}</span>
                    </div>
                    <div className="p-4 space-y-2">
                      <h3 className="font-semibold text-sm line-clamp-2 text-zinc-100 group-hover:text-red-400 transition">{video.title}</h3>
                      <p className="text-xs text-zinc-400">{video.channel}</p>
                      <div className="flex items-center gap-2 text-xs text-zinc-500">
                        <span>{video.views}</span>
                        <span>•</span>
                        <span>{video.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'admin' && (
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6">
                <h2 className="text-xl font-bold flex items-center gap-2 text-zinc-100">
                  <ShieldCheck className="w-6 h-6 text-red-500" /> Admin Command & Governance Center
                </h2>
                <p className="text-sm text-zinc-400 mt-1">Full operational command, user moderation, and legal compliance control hub.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-5 bg-zinc-900/40 border border-zinc-800 rounded-xl space-y-2">
                  <span className="text-xs text-zinc-500">Active Nodes</span>
                  <h3 className="text-2xl font-bold text-white">100% Operational</h3>
                  <p className="text-xs text-emerald-400">All CDN & Transcode workers active</p>
                </div>
                <div className="p-5 bg-zinc-900/40 border border-zinc-800 rounded-xl space-y-2">
                  <span className="text-xs text-zinc-500">Security & RLS</span>
                  <h3 className="text-2xl font-bold text-white">Protected</h3>
                  <p className="text-xs text-emerald-400">PostgreSQL policies active</p>
                </div>
                <div className="p-5 bg-zinc-900/40 border border-zinc-800 rounded-xl space-y-2">
                  <span className="text-xs text-zinc-500">Compliance</span>
                  <h3 className="text-2xl font-bold text-white">GDPR Ready</h3>
                  <p className="text-xs text-emerald-400">Automatic data scrubbing</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'messages' && (
            <div className="max-w-3xl mx-auto bg-zinc-900/40 border border-zinc-800 rounded-2xl p-8 text-center space-y-4">
              <MessageSquare className="w-12 h-12 text-red-500 mx-auto" />
              <h2 className="text-xl font-bold">Community Messaging & WebRTC Calling</h2>
              <p className="text-sm text-zinc-400 max-w-md mx-auto">Connect with other creators, join voice rooms, and experience high-definition video calls directly within SmartTube.</p>
              <button className="px-6 py-2.5 bg-red-600 hover:bg-red-500 text-white font-medium rounded-xl text-sm shadow-lg shadow-red-600/20 transition">
                Start Secure Call
              </button>
            </div>
          )}

          {activeTab === 'trending' && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <Flame className="w-6 h-6 text-red-500" /> Trending Right Now
              </h2>
              <div className="space-y-3">
                {sampleVideos.map((v, i) => (
                  <div key={v.id} className="flex gap-4 bg-zinc-900/40 border border-zinc-800 p-4 rounded-xl items-center">
                    <span className="text-2xl font-bold text-zinc-600 w-6 text-center">#{i+1}</span>
                    <img src={v.thumbnail} className="w-32 aspect-video object-cover rounded-lg" alt="" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-sm text-zinc-100">{v.title}</h3>
                      <p className="text-xs text-zinc-400 mt-1">{v.channel} • {v.views}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

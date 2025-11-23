import { useState } from "react";

interface BottomNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function BottomNav({ activeTab, setActiveTab }: BottomNavProps) {
  const tabs = [
    { id: "feed", label: "FEED", color: "#00ff41" },
    { id: "search", label: "SEARCH", color: "#00f5ff" },
    { id: "add", label: "ADD", color: "#ffbe0b" },
    { id: "profile", label: "PROFILE", color: "#ff006e" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-black/95 backdrop-blur-sm border-t border-white/10">
      <div className="max-w-md mx-auto px-4 py-6">
        <div className="flex items-center justify-around gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="flex flex-col items-center gap-2 transition-all"
            >
              <span
                className="tracking-wider transition-all"
                style={{
                  color: activeTab === tab.id ? "#ffffff" : "rgba(255, 255, 255, 0.4)",
                  fontSize: activeTab === tab.id ? "0.9rem" : "0.8rem",
                  fontWeight: activeTab === tab.id ? 700 : 500,
                }}
              >
                {tab.label}
              </span>
              <div
                className="h-0.5 rounded-full transition-all"
                style={{
                  width: activeTab === tab.id ? "100%" : "0%",
                  backgroundColor: tab.color,
                  boxShadow: activeTab === tab.id ? `0 0 10px ${tab.color}, 0 0 20px ${tab.color}` : "none",
                }}
              />
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
import { Search, Send } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-10 bg-black/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-md mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-white/60 text-sm italic">What do your destimen?</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="text-white/80 hover:text-white">
              <Search size={24} />
            </button>
            <button className="text-white/80 hover:text-white">
              <Send size={24} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
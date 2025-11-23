export function Profile() {
  const savedDesires = [
    { id: 1, text: "TRAVEL THE WORLD", color: "#00ff41" },
    { id: 2, text: "LEARN PIANO", color: "#ff006e" },
    { id: 3, text: "START A BUSINESS", color: "#00f5ff" },
    { id: 4, text: "WRITE A BOOK", color: "#ffbe0b" },
    { id: 5, text: "RUN MARATHON", color: "#fb5607" },
    { id: 6, text: "MASTER COOKING", color: "#8338ec" },
    { id: 7, text: "BUILD AN APP", color: "#06ffa5" },
    { id: 8, text: "FIND PEACE", color: "#f72585" },
    { id: 9, text: "GAIN WISDOM", color: "#00ff41" },
  ];

  return (
    <div className="max-w-md mx-auto px-4 pb-32 pt-32">
      {/* Profile Header */}
      <div className="mb-8">
        <div className="flex items-start justify-between mb-6">
          <div className="relative">
            <span 
              className="tracking-tighter" 
              style={{ 
                fontSize: "3rem", 
                fontWeight: 900,
                color: "#00ff41",
                textShadow: "0 0 20px #00ff41"
              }}
            >
              120
            </span>
          </div>
          <div>
            <h1 
              className="tracking-tight"
              style={{ 
                fontSize: "2rem", 
                fontWeight: 700,
                color: "#8338ec",
                textShadow: "0 0 15px #8338ec"
              }}
            >
              faltuchemails
            </h1>
          </div>
        </div>

        {/* Vertical Email */}
        <div className="fixed left-4 top-32 bottom-32 flex items-center">
          <p 
            className="tracking-wider whitespace-nowrap"
            style={{ 
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
              fontSize: "1rem",
              fontWeight: 700,
              color: "#00ff41",
              opacity: 0.8
            }}
          >
            faltuchemails@gmail.com
          </p>
        </div>

        {/* Change Username Button */}
        <button className="mb-8 flex flex-col items-start gap-2 group">
          <span 
            className="tracking-widest transition-all"
            style={{ 
              color: "#ffffff",
              fontSize: "0.9rem",
              fontWeight: 600
            }}
          >
            CHANGE USERNAME
          </span>
          <div 
            className="h-0.5 w-full rounded-full"
            style={{
              backgroundColor: "#00f5ff",
              boxShadow: "0 0 10px #00f5ff"
            }}
          />
        </button>
      </div>

      {/* Helper Text */}
      <p 
        className="mb-6 italic"
        style={{ 
          color: "rgba(255, 255, 255, 0.5)",
          fontSize: "0.85rem"
        }}
      >
        Profile information displayed above
      </p>

      {/* Grid of Saved Desires */}
      <div 
        className="relative"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "1px",
          padding: "1px",
          background: "linear-gradient(to right, rgba(255, 255, 255, 0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.3) 1px, transparent 1px)",
          backgroundSize: "calc(50% + 0.5px) 100%, 100% calc(33.333% + 0.33px)",
          boxShadow: "0 0 20px rgba(255, 255, 255, 0.1), inset 0 0 20px rgba(255, 255, 255, 0.05)"
        }}
      >
        {savedDesires.map((desire) => (
          <div
            key={desire.id}
            className="relative p-4 flex items-center justify-center min-h-[120px] cursor-pointer transition-all hover:bg-white/5"
            style={{
              borderRight: "1px solid rgba(255, 255, 255, 0.3)",
              borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
              boxShadow: "inset 0 0 30px rgba(255, 255, 255, 0.02)"
            }}
          >
            <p
              className="text-center tracking-tight leading-tight"
              style={{
                fontSize: "1.5rem",
                fontWeight: 900,
                color: desire.color,
                textShadow: `0 0 15px ${desire.color}`,
                letterSpacing: "-0.02em"
              }}
            >
              {desire.text}
            </p>
          </div>
        ))}
      </div>

      {/* Logout Button */}
      <button className="mt-12 flex flex-col items-center gap-2 w-full group">
        <span 
          className="tracking-widest transition-all"
          style={{ 
            color: "#ffffff",
            fontSize: "1rem",
            fontWeight: 600
          }}
        >
          LOGOUT
        </span>
        <div 
          className="h-0.5 rounded-full transition-all"
          style={{
            width: "140px",
            backgroundColor: "#00f5ff",
            boxShadow: "0 0 10px #00f5ff, 0 0 20px #00f5ff"
          }}
        />
      </button>
    </div>
  );
}

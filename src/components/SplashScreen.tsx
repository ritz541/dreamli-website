import { useEffect } from "react";
import { Logo } from "./Logo";

interface SplashScreenProps {
  onComplete: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  const letters = [
    { char: "D", color: "#00ff41" },
    { char: "r", color: "#ff006e" },
    { char: "e", color: "#00f5ff" },
    { char: "a", color: "#ffbe0b" },
    { char: "m", color: "#fb5607" },
    { char: "l", color: "#8338ec" },
    { char: "i", color: "#06ffa5" },
  ];

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center gap-12">
      {/* Logo */}
      <div className="animate-pulse">
        <Logo size="lg" />
      </div>

      {/* Dreamli Text */}
      <div className="flex items-center gap-1">
        {letters.map((letter, index) => (
          <span
            key={index}
            className="tracking-tighter"
            style={{
              fontSize: "5rem",
              fontWeight: 900,
              color: letter.color,
              textShadow: `0 0 20px ${letter.color}, 0 0 40px ${letter.color}, 0 0 60px ${letter.color}`,
              animation: `fadeIn 0.5s ease-in-out ${index * 0.1}s both`,
            }}
          >
            {letter.char}
          </span>
        ))}
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
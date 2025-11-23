interface LogoProps {
  size?: "sm" | "md" | "lg";
}

export function Logo({ size = "md" }: LogoProps) {
  const sizes = {
    sm: { fontSize: "1.125rem", gap: "1px" },
    md: { fontSize: "3rem", gap: "2px" },
    lg: { fontSize: "5rem", gap: "4px" },
  };

  const currentSize = sizes[size];

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
    <div className="flex items-center" style={{ gap: currentSize.gap }}>
      {letters.map((letter, index) => (
        <span
          key={index}
          className="tracking-tighter"
          style={{
            fontSize: currentSize.fontSize,
            fontWeight: 900,
            color: letter.color,
            textShadow: `0 0 15px ${letter.color}, 0 0 30px ${letter.color}`,
          }}
        >
          {letter.char}
        </span>
      ))}
    </div>
  );
}
import { DesireCard } from "./DesireCard";
import { useState } from "react";

interface Desire {
  id: string;
  text: string;
  author: string;
  avatar: string;
  likes: number;
  comments: number;
  color: string;
  textColor: string;
}

const VIBRANT_COLORS = [
  "bg-gradient-to-br from-green-500 to-green-600",
  "bg-gradient-to-br from-yellow-400 to-yellow-500",
  "bg-gradient-to-br from-pink-500 to-rose-600",
  "bg-gradient-to-br from-purple-500 to-purple-600",
  "bg-gradient-to-br from-blue-500 to-blue-600",
  "bg-gradient-to-br from-orange-500 to-orange-600",
  "bg-gradient-to-br from-red-500 to-red-600",
  "bg-gradient-to-br from-teal-500 to-teal-600",
  "bg-gradient-to-br from-indigo-500 to-indigo-600",
];

const NEON_COLORS = [
  "#00ff41", // neon green
  "#ff006e", // neon pink
  "#00f5ff", // neon cyan
  "#ffbe0b", // neon yellow
  "#fb5607", // neon orange
  "#8338ec", // neon purple
  "#ff006e", // neon magenta
  "#06ffa5", // neon mint
  "#f72585", // neon rose
];

const mockDesires: Desire[] = [
  {
    id: "1",
    text: "What do you desire?",
    author: "Sarah Chen",
    avatar: "SC",
    likes: 234,
    comments: 45,
    color: VIBRANT_COLORS[0],
    textColor: NEON_COLORS[0],
  },
  {
    id: "2",
    text: "I want to commerce",
    author: "Alex Rivera",
    avatar: "AR",
    likes: 189,
    comments: 32,
    color: VIBRANT_COLORS[1],
    textColor: NEON_COLORS[1],
  },
  {
    id: "3",
    text: "Travel the world",
    author: "Maya Johnson",
    avatar: "MJ",
    likes: 567,
    comments: 89,
    color: VIBRANT_COLORS[2],
    textColor: NEON_COLORS[2],
  },
  {
    id: "4",
    text: "Build something amazing",
    author: "Chris Park",
    avatar: "CP",
    likes: 423,
    comments: 67,
    color: VIBRANT_COLORS[3],
    textColor: NEON_COLORS[3],
  },
  {
    id: "5",
    text: "Find true happiness",
    author: "Jordan Lee",
    avatar: "JL",
    likes: 891,
    comments: 124,
    color: VIBRANT_COLORS[4],
    textColor: NEON_COLORS[4],
  },
  {
    id: "6",
    text: "Make a difference",
    author: "Sam Wilson",
    avatar: "SW",
    likes: 356,
    comments: 54,
    color: VIBRANT_COLORS[5],
    textColor: NEON_COLORS[5],
  },
  {
    id: "7",
    text: "Learn everything",
    author: "Riley Martinez",
    avatar: "RM",
    likes: 445,
    comments: 78,
    color: VIBRANT_COLORS[6],
    textColor: NEON_COLORS[6],
  },
  {
    id: "8",
    text: "Create beautiful art",
    author: "Taylor Kim",
    avatar: "TK",
    likes: 612,
    comments: 93,
    color: VIBRANT_COLORS[7],
    textColor: NEON_COLORS[7],
  },
];

export function DesireFeed() {
  const [desires] = useState<Desire[]>(mockDesires);

  return (
    <div className="max-w-md mx-auto pb-24">
      <div className="divide-y divide-white/10">
        {desires.map((desire) => (
          <DesireCard key={desire.id} desire={desire} />
        ))}
      </div>
    </div>
  );
}
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

import feedImg from "../../images/feed.png";
import desireDetailsImg from "../../images/desire-details.png";
import profileImg from "../../images/profile.png";
import addImg from "../../images/add.png";
import commentBoardImg from "../../images/comment-board.png";
import commentsImg from "../../images/comments.png";
import lightModeImg from "../../images/light-mode.png";
import loginImg from "../../images/login.png";
import searchImg from "../../images/search.png";
import shareImg from "../../images/share.png";

interface Screenshot {
  url: string;
  title: string;
  color: string;
}

export function ScreenshotViewer3D() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const screenshots: Screenshot[] = [
    {
      url: feedImg,
      title: "Feed View",
      color: "#00ff41",
    },
    {
      url: desireDetailsImg,
      title: "Explore Dreams",
      color: "#ff006e",
    },
    {
      url: profileImg,
      title: "Profile",
      color: "#00f5ff",
    },
    {
      url: addImg,
      title: "Create Dream",
      color: "#ffbe0b",
    },
    {
      url: commentBoardImg,
      title: "Comment Board",
      color: "#7c3aed",
    },
    {
      url: commentsImg,
      title: "Comments",
      color: "#06b6d4",
    },
    {
      url: lightModeImg,
      title: "Light Mode",
      color: "#f97316",
    },
    {
      url: loginImg,
      title: "Login",
      color: "#ef4444",
    },
    {
      url: searchImg,
      title: "Search",
      color: "#10b981",
    },
    {
      url: shareImg,
      title: "Share",
      color: "#3b82f6",
    },
  ];

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + screenshots.length) % screenshots.length
    );
  };

  return (
    <div className="relative w-full h-[600px] flex items-center justify-center">
      {/* 3D Carousel Container */}
      <div className="relative w-full h-full" style={{ perspective: "2000px" }}>
        <div className="absolute inset-0 flex items-center justify-center">
          {screenshots.map((screenshot, index) => {
            const offset = (index - currentIndex + screenshots.length) % screenshots.length;
            const isCenter = offset === 0;
            const isLeft = offset === screenshots.length - 1;
            const isRight = offset === 1;
            const isVisible = isCenter || isLeft || isRight;

            let xPosition = 0;
            let rotateY = 0;
            let zPosition = -300;
            let scale = 0.7;
            let opacity = 0;

            if (isCenter) {
              xPosition = 0;
              rotateY = 0;
              zPosition = 0;
              scale = 1;
              opacity = 1;
            } else if (isLeft) {
              xPosition = -400;
              rotateY = 45;
              zPosition = -200;
              scale = 0.8;
              opacity = 0.5;
            } else if (isRight) {
              xPosition = 400;
              rotateY = -45;
              zPosition = -200;
              scale = 0.8;
              opacity = 0.5;
            }

            return (
              <motion.div
                key={index}
                className="absolute"
                initial={false}
                animate={{
                  x: xPosition,
                  rotateY: rotateY,
                  z: zPosition,
                  scale: scale,
                  opacity: isVisible ? opacity : 0,
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.32, 0.72, 0, 1],
                }}
                style={{
                  transformStyle: "preserve-3d",
                  pointerEvents: isCenter ? "auto" : "none",
                }}
              >
                <div
                  className="relative rounded-3xl overflow-hidden border-4 border-white/20"
                  style={{
                    width: "300px",
                    height: "600px",
                    boxShadow: `0 20px 60px ${screenshot.color}40, 0 0 40px ${screenshot.color}30`,
                  }}
                >
                  <ImageWithFallback
                    src={screenshot.url}
                    alt={screenshot.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Overlay gradient */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"
                  />

                  {/* Title */}
                  {isCenter && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="absolute bottom-0 left-0 right-0 p-6"
                    >
                      <h4
                        style={{
                          fontSize: "1.5rem",
                          fontWeight: 900,
                          color: screenshot.color,
                          textShadow: `0 0 20px ${screenshot.color}`,
                        }}
                      >
                        {screenshot.title}
                      </h4>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/20 hover:bg-white/10 transition-all duration-300 flex items-center justify-center group"
        style={{
          boxShadow: "0 0 20px #00ff4140",
        }}
      >
        <ChevronLeft
          size={24}
          className="text-white/80 group-hover:text-white transition-colors"
        />
      </button>

      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/20 hover:bg-white/10 transition-all duration-300 flex items-center justify-center group"
        style={{
          boxShadow: "0 0 20px #ff006e40",
        }}
      >
        <ChevronRight
          size={24}
          className="text-white/80 group-hover:text-white transition-colors"
        />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {screenshots.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className="w-2 h-2 rounded-full transition-all duration-300"
            style={{
              backgroundColor:
                index === currentIndex
                  ? screenshots[currentIndex].color
                  : "rgba(255, 255, 255, 0.3)",
              boxShadow:
                index === currentIndex
                  ? `0 0 10px ${screenshots[currentIndex].color}`
                  : "none",
              width: index === currentIndex ? "32px" : "8px",
            }}
          />
        ))}
      </div>
    </div>
  );
}

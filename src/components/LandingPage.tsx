import { Logo } from "./Logo";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ScreenshotViewer3D } from "./ScreenshotViewer3D";
import { FallingParticles } from "./FallingParticles";
import {
  Heart,
  MessageCircle,
  Grid3x3,
  User,
  Download,
  Sparkles,
  Zap,
  Share2,
} from "lucide-react";

export function LandingPage() {
  const features = [
    {
      icon: <Sparkles size={32} />,
      title: "Share Your Desires",
      description:
        "Express what you truly want with bold, eye-catching headlines",
      color: "#00ff41",
    },
    {
      icon: <Heart size={32} />,
      title: "Connect & Engage",
      description:
        "Like and comment on desires that resonate with you",
      color: "#ff006e",
    },
    {
      icon: <Grid3x3 size={32} />,
      title: "Beautiful Grid",
      description:
        "Explore desires in a stunning neon grid layout",
      color: "#00f5ff",
    },
    {
      icon: <Zap size={32} />,
      title: "Instant Expression",
      description:
        "Quick and easy sharing with a vibrant, minimal interface",
      color: "#ffbe0b",
    },
  ];

  const mockDesires = [
    { text: "TRAVEL THE WORLD", color: "#00ff41" },
    { text: "START A BUSINESS", color: "#ff006e" },
    { text: "LEARN TO DANCE", color: "#00f5ff" },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Falling Particles Effect */}
      <FallingParticles />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20">
        {/* Background Glow Effects */}
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ backgroundColor: "#00ff41" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ backgroundColor: "#ff006e" }}
        />

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-8 animate-pulse">
            <Logo size="lg" />
          </div>

          {/* Tagline */}
          <h2
            className="mb-6 tracking-tight"
            style={{
              fontSize: "3rem",
              fontWeight: 900,
              background:
                "linear-gradient(to right, #00ff41, #ff006e, #00f5ff, #ffbe0b)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Share Your Dreams.
            <br />
            Inspire The World.
          </h2>

          <p className="text-white/60 text-xl mb-12 max-w-2xl mx-auto">
            A vibrant social platform where bold dreams meet
            stunning design. Express yourself with eye-catching
            headlines and connect with others.
          </p>

          {/* Indus App Store Badge */}
          <a
            href="https://indusapp.store/f0tupjal"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-block hover:opacity-90 transition-opacity duration-300"
            aria-label="Get Dreamli on Indus App Store"
          >
            <img
              src="/badge-black-full-color-english.png"
              alt="Get it on Indus App Store"
              className="h-16 mx-auto"
            />
          </a>

          <p className="text-white/40 text-sm mt-4">
            Available on Indus App Store
          </p>
        </div>
      </section>

      {/* App Preview Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h3
            className="text-center mb-16 tracking-tight"
            style={{
              fontSize: "3.5rem",
              fontWeight: 900,
              color: "#00f5ff",
              textShadow: "0 0 20px #00f5ff",
            }}
          >
            Experience Dreamli
          </h3>

          {/* 3D Screenshot Viewer */}
          <div className="mb-20">
            <ScreenshotViewer3D />
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
                style={{
                  boxShadow: `0 0 20px ${feature.color}20`,
                }}
              >
                <div
                  style={{
                    color: feature.color,
                    textShadow: `0 0 10px ${feature.color}`,
                  }}
                >
                  {feature.icon}
                </div>
                <div>
                  <h4
                    className="mb-2"
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: 700,
                      color: feature.color,
                    }}
                  >
                    {feature.title}
                  </h4>
                  <p className="text-white/60">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 px-6 border-y border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <div
                className="mb-4"
                style={{
                  fontSize: "3.25rem",
                  fontWeight: 900,
                  color: "#00ff41",
                  textShadow: "0 0 20px #00ff41",
                }}
              >
                2
              </div>
              <p className="text-white/60 text-xl">
                Active Users
              </p>
            </div>
            <div>
              <div
                className="mb-4"
                style={{
                  fontSize: "3.25rem",
                  fontWeight: 900,
                  color: "#ff006e",
                  textShadow: "0 0 20px #ff006e",
                }}
              >
                10
              </div>
              <p className="text-white/60 text-xl">
                Desires Shared
              </p>
            </div>
            <div>
              <div
                className="mb-4"
                style={{
                  fontSize: "3.25rem",
                  fontWeight: 900,
                  color: "#00f5ff",
                  textShadow: "0 0 20px #00f5ff",
                }}
              >
                0
              </div>
              <p className="text-white/60 text-xl">
                Connections
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-32 px-6">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h3
            className="mb-6 tracking-tight"
            style={{
              fontSize: "3.5rem",
              fontWeight: 900,
              color: "#ffbe0b",
              textShadow: "0 0 30px #ffbe0b",
            }}
          >
            Ready to Share Your Desires?
          </h3>

          <p className="text-white/60 text-xl mb-12">
            Join our growing community — 2 active users
          </p>

          {/* Indus App Store Badge */}
          <a
            href="https://indusapp.store/f0tupjal"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-block hover:opacity-90 transition-opacity duration-300"
            aria-label="Get Dreamli on Indus App Store"
          >
            <img
              src="/badge-black-full-color-english.png"
              alt="Get it on Indus App Store"
              className="h-20 mx-auto"
            />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <Logo size="sm" />

            <div className="flex gap-8 text-white/60">
              <a
                href="#"
                className="hover:text-white transition-colors"
              >
                About
              </a>
              <a
                href="/privacy-policy.html"
                className="hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy
              </a>
              <a
                href="/csae-policy.html"
                className="hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Child Safety
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors"
              >
                Terms
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors"
              >
                Contact
              </a>
            </div>

            <div className="flex gap-4">
              <button
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-white/40 transition-colors"
                style={{ color: "#00f5ff" }}
              >
                <Share2 size={18} />
              </button>
            </div>
          </div>

          <div className="text-center mt-8 text-white/40 text-sm">
            © 2024 Dreamli. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
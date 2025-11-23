import { DesireFeed } from "./components/DesireFeed";
import { Header } from "./components/Header";
import { BottomNav } from "./components/BottomNav";
import { Profile } from "./components/Profile";
import { LandingPage } from "./components/LandingPage";
import { useState } from "react";

export default function App() {
  const [activeTab, setActiveTab] = useState("feed");
  const [showLanding, setShowLanding] = useState(true);

  if (showLanding) {
    return <LandingPage />;
  }

  return (
    <div className="min-h-screen bg-black">
      <Header />
      {activeTab === "feed" && <DesireFeed />}
      {activeTab === "profile" && <Profile />}
      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}
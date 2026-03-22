"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/ui/Navbar";
import HeroSearch from "@/components/features/HeroSearch";
import PopularDestinations from "@/components/features/PopularDestinations";
import AiChatWidget from "@/components/features/AiChatWidget";

export default function Home() {
  useEffect(() => {
    console.log("Sustav uspješno spojen na antigravitaciju... 🚀");
  }, []);

  // Shared state between HeroSearch and AiChatWidget
  const [aiPrompt, setAiPrompt] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isAiLoading, setIsAiLoading] = useState(false);

  const handleAiSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!aiPrompt.trim()) return;
    setIsChatOpen(true);
    setIsAiLoading(true);

    // Simulated fetch
    setTimeout(() => {
      setIsAiLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Navbar />
      <HeroSearch 
         aiPrompt={aiPrompt} 
         setAiPrompt={setAiPrompt} 
         handleAiSearch={handleAiSearch} 
      />
      <PopularDestinations />
      <AiChatWidget 
         isChatOpen={isChatOpen}
         setIsChatOpen={setIsChatOpen}
         aiPrompt={aiPrompt}
         isAiLoading={isAiLoading}
      />
    </div>
  );
}

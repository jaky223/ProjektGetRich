"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import AuthModal from "@/components/AuthModal";
import UserDashboardModal from "@/components/features/UserDashboardModal";

export default function Navbar() {
  const router = useRouter();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalView, setAuthModalView] = useState<"login" | "register">("login");
  const [loggedInUser, setLoggedInUser] = useState<string | null>(null);
  
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);

  return (
    <>
      <nav className="absolute top-0 w-full z-50 py-6 px-8 grid grid-cols-3 items-center text-white">
        {/* LOGO - Lijevo */}
        <div className="flex items-center justify-start">
          <img
            src="/avelio-logo-badge.png"
            alt="Avelio"
            className="h-20 md:h-24 w-auto drop-shadow-2xl transition-transform hover:scale-105 object-contain cursor-pointer"
            onClick={() => router.push('/')}
          />
        </div>

        {/* MENI - Sredina (Centrirano) */}
        <div className="hidden md:flex justify-center gap-10 font-semibold tracking-wide drop-shadow-md text-sm lg:text-base">
          {/* Prostor za buduće linkove */}
        </div>

        {/* GUMBI - Desno */}
        <div className="flex justify-end gap-5 items-center">
          {loggedInUser ? (
            <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-lg pr-2">
              <span className="font-semibold text-white tracking-wide text-sm pl-2">Pozdrav, {loggedInUser}</span>
              <div className="flex items-center gap-1.5 pl-3 border-l border-white/20">
                {/* Dashboard / Postavke Button */}
                <button 
                  onClick={() => setIsDashboardOpen(true)}
                  className="text-white hover:text-blue-200 transition font-medium text-xs bg-black/20 p-2 rounded-full hover:bg-black/40 flex items-center justify-center transform hover:scale-105"
                  title="Postavke profila i moji smještaji"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </button>
                {/* Odjava Button */}
                <button 
                  onClick={() => setLoggedInUser(null)} 
                  className="text-white hover:text-white transition font-bold text-[11px] uppercase tracking-wider bg-black/20 px-4 py-2 rounded-full hover:bg-red-500/80 transform hover:scale-105"
                >
                  Odjava
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Desktop Nav - User Actions */}
              <button onClick={() => { setAuthModalView("login"); setIsAuthModalOpen(true); }} className="font-semibold hover:text-blue-300 transition drop-shadow-md hidden sm:block">Prijavi se</button>
              <button onClick={() => { setAuthModalView("register"); setIsAuthModalOpen(true); }} className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 text-white px-6 py-2.5 rounded-full font-bold transition shadow-xl border border-white/20 transform hover:scale-105">
                Registracija
              </button>
            </>
          )}
        </div>
      </nav>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onLoginSuccess={(username) => setLoggedInUser(username)}
        initialView={authModalView}
      />

      <UserDashboardModal 
        isOpen={isDashboardOpen} 
        onClose={() => setIsDashboardOpen(false)} 
        username={loggedInUser || ""}
      />
    </>
  );
}

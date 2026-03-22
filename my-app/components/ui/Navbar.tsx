"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import AuthModal from "@/components/AuthModal";

export default function Navbar() {
  const router = useRouter();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalView, setAuthModalView] = useState<"login" | "register">("login");
  const [loggedInUser, setLoggedInUser] = useState<string | null>(null);

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
            <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-lg">
              <span className="font-semibold text-white tracking-wide text-sm">Pozdrav, {loggedInUser}</span>
              <button onClick={() => setLoggedInUser(null)} className="text-blue-200 hover:text-white transition font-medium text-xs bg-black/20 px-3 py-1.5 rounded-full hover:bg-black/40">Odjava</button>
            </div>
          ) : (
            <>
              <button
                onClick={() => router.push('/dodaj-smjestaj')}
                className="font-bold text-white hover:text-blue-200 transition drop-shadow-md hidden md:block bg-white/20 px-4 py-2 rounded-full border border-white/30 backdrop-blur-sm hover:bg-white/30"
              >
                Objavi svoj smještaj
              </button>
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
    </>
  );
}

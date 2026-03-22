"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface HeroSearchProps {
  aiPrompt: string;
  setAiPrompt: (val: string) => void;
  handleAiSearch: (e: React.FormEvent) => void;
}

export default function HeroSearch({ aiPrompt, setAiPrompt, handleAiSearch }: HeroSearchProps) {
  const router = useRouter();

  // Stanja za osnovnu tražilicu
  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("1");

  const handleRegularSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = new URLSearchParams();
    if (location) query.append("location", location);

    if (checkIn && checkOut) {
      query.append("dates", `${checkIn} do ${checkOut}`);
    } else if (checkIn) {
      query.append("dates", `Od ${checkIn}`);
    } else if (checkOut) {
      query.append("dates", `Do ${checkOut}`);
    }

    if (guests) {
      query.append("guests", `${guests} osoba`);
    }

    router.push(`/search?${query.toString()}`);
  };

  return (
    <div className="relative min-h-[85vh] w-full flex items-center justify-center pt-24 pb-16">
      {/* Pozadinska slika (Četiri godišnja doba Hrvatske) */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-4">
          <img src="https://www.infozagreb.hr/documents/preview_king-tomislav-square-m-gaparovi-5ec4fec35823a.jpg" alt="Proljeće" className="w-full h-full object-cover transition-transform duration-10000 hover:scale-105" />
          <img src="https://putujmojeftino.com/wp-content/uploads/2022/12/Croatia-mali-losinj-by-ilijaaa-dreamstime.jpg" alt="Ljeto" className="w-full h-full object-cover transition-transform duration-10000 hover:scale-105" />
          <img src="https://putnikofer.hr/wp-content/uploads/2023/10/groznjan-istra-1600x900.jpg" alt="Jesen" className="w-full h-full object-cover transition-transform duration-10000 hover:scale-105" />
          <img src="https://www.camping-simuni.hr/wp-content/uploads/bf-advanced-images/5055/plitvice-1920x0.jpg" alt="Zima" className="w-full h-full object-cover transition-transform duration-10000 hover:scale-105" />
        </div>
        <div className="absolute inset-0 bg-black/30 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black/80 pointer-events-none"></div>
      </div>

      {/* Glavni sadržaj (Tekst i tražilica) */}
      <div className="relative z-10 w-full max-w-5xl px-4 flex flex-col items-center mt-8">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white text-center mb-4 drop-shadow-xl tracking-tight leading-tight">
          Pronađite svoj <span className="text-blue-400">savršeni</span> odmor
        </h1>
        <p className="text-xl md:text-2xl text-gray-100 text-center mb-10 max-w-2xl drop-shadow-md font-light">
          Otkrijte najljepše apartmane, vile i hotele diljem predivne Hrvatske.
        </p>

        {/* Oblačić za pretraživanje (Search Bar) */}
        <form onSubmit={handleRegularSearch} className="bg-white p-1.5 rounded-3xl md:rounded-full shadow-xl w-full max-w-5xl flex flex-col md:flex-row items-center divide-y md:divide-y-0 md:divide-x divide-gray-200 relative z-20">
          <div className="flex-[1.5] w-full px-6 py-2 cursor-pointer hover:bg-gray-50 rounded-t-3xl md:rounded-full transition group">
            <label className="block text-[10px] font-extrabold text-gray-800 uppercase tracking-wider mb-0.5 cursor-pointer group-hover:text-blue-600 transition">Gdje idete?</label>
            <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Npr. Zadar, Split, Istra..." className="w-full bg-transparent border-none text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-0 text-sm truncate font-medium p-0" />
          </div>

          <div className="flex-1 w-full px-6 py-2 cursor-pointer hover:bg-gray-50 transition group">
            <label className="block text-[10px] font-extrabold text-gray-800 uppercase tracking-wider mb-0.5 cursor-pointer group-hover:text-blue-600 transition">Prijava</label>
            <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} className="w-full bg-transparent border-none text-gray-900 focus:outline-none focus:ring-0 text-sm font-medium p-0 cursor-text" />
          </div>

          <div className="flex-1 w-full px-6 py-2 cursor-pointer hover:bg-gray-50 transition group">
            <label className="block text-[10px] font-extrabold text-gray-800 uppercase tracking-wider mb-0.5 cursor-pointer group-hover:text-blue-600 transition">Odjava</label>
            <input type="date" value={checkOut} min={checkIn} onChange={(e) => setCheckOut(e.target.value)} className="w-full bg-transparent border-none text-gray-900 focus:outline-none focus:ring-0 text-sm font-medium p-0 cursor-text" />
          </div>

          <div className="flex-[1.2] w-full px-4 py-2 cursor-pointer hover:bg-gray-50 rounded-b-3xl md:rounded-full transition flex flex-col md:flex-row justify-between md:items-center group">
            <div className="px-2 mb-2 md:mb-0 w-full md:w-auto">
              <label className="block text-[10px] font-extrabold text-gray-800 uppercase tracking-wider mb-0.5 cursor-pointer group-hover:text-blue-600 transition">Gosti</label>
              <div className="flex items-center gap-1">
                <input type="number" min="1" max="20" value={guests} onChange={(e) => setGuests(e.target.value)} placeholder="1" className="w-12 bg-transparent border-none text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-0 text-sm font-medium p-0 text-center" />
                <span className="text-sm font-medium text-gray-600">osoba</span>
              </div>
            </div>
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-xl md:rounded-full transition shadow-lg flex items-center justify-center min-w-[44px] min-h-[44px] md:ml-2 transform hover:scale-105 w-full md:w-auto mt-2 md:mt-0">
              <svg className="w-5 h-5 hidden md:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span className="md:hidden font-bold">Pretraži</span>
            </button>
          </div>
        </form>

        {/* AI Pretraživanje */}
        <div className="flex items-center gap-4 my-6 w-full max-w-lg z-20">
          <div className="h-[1px] bg-white/40 flex-1"></div>
          <span className="text-white text-sm font-semibold uppercase tracking-widest drop-shadow-md">Ili isprobajte pametni AI asistent</span>
          <div className="h-[1px] bg-white/40 flex-1"></div>
        </div>

        <div className="w-full max-w-4xl relative z-20 group">
          <div className="absolute -inset-1 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-indigo-500 rounded-3xl md:rounded-full blur-md opacity-40 group-hover:opacity-75 transition duration-500 group-hover:duration-200"></div>

          <form onSubmit={handleAiSearch} className="relative bg-white p-1.5 rounded-3xl md:rounded-full shadow-2xl flex flex-col md:flex-row items-center border border-white/50">
            <div className="hidden md:flex px-6 items-center justify-center">
              <svg className="w-6 h-6 text-fuchsia-600 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
            </div>
            <div className="flex-1 w-full px-6 py-3 md:py-1.5">
              <label className="block text-[10px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600 uppercase tracking-wider mb-0.5 cursor-pointer">Opišite svoj savršen odmor u jednoj rečenici</label>
              <input type="text" value={aiPrompt} onChange={(e) => setAiPrompt(e.target.value)} placeholder="Npr. 'Želim u Dalmaciju s dvoje djece...'" className="w-full bg-transparent border-none text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-0 text-sm md:text-base font-medium" />
            </div>
            <button type="submit" className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white px-8 py-3 rounded-xl md:rounded-full transition shadow-lg flex items-center justify-center font-bold tracking-wide transform hover:scale-105 w-full md:w-auto mt-2 md:mt-0 gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              Pronađi s AI
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

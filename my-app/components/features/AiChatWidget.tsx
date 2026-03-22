"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface AiChatWidgetProps {
  isChatOpen: boolean;
  setIsChatOpen: (val: boolean) => void;
  aiPrompt: string;
  isAiLoading: boolean;
}

export default function AiChatWidget({ isChatOpen, setIsChatOpen, aiPrompt, isAiLoading }: AiChatWidgetProps) {
  const router = useRouter();
  const [isChatExpanded, setIsChatExpanded] = useState(false);

  return (
    <div className={`fixed z-[100] flex flex-col items-end transition-all duration-300 ${isChatExpanded ? 'inset-0 items-center justify-center bg-black/40 backdrop-blur-sm p-4' : 'bottom-6 right-6 pointer-events-none'}`}>
      {/* Chat Prozor */}
      {isChatOpen && (
        <div className={`${isChatExpanded ? 'w-full max-w-6xl h-[90vh]' : 'mb-4 w-full sm:w-[420px] h-[600px] max-h-[80vh]'} pointer-events-auto bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/40 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-10 duration-300`}>
          
          {/* Header chat prozora */}
          <div className="bg-gradient-to-r from-violet-600/80 to-fuchsia-600/80 backdrop-blur-md p-4 flex justify-between items-center text-white shadow-md relative z-10 border-b border-white/20">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm shadow-inner">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
              </div>
              <div>
                <h4 className="font-bold text-[15px] tracking-wide">Avelio AI</h4>
                <p className="text-[10px] text-fuchsia-100 font-medium tracking-wider uppercase">Uvijek tu za vas</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button onClick={() => setIsChatExpanded(!isChatExpanded)} className="hover:bg-white/20 p-2 rounded-full transition flex items-center justify-center">
                {isChatExpanded ? (
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v4H5M9 7L4 2M15 3v4h4M15 7l5-5M9 21v-4H5M9 17l-5 5M15 21v-4h4M15 17l5 5" /></svg>
                ) : (
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4h4M4 4l5 5M16 4h4v4M20 4l-5 5M4 16v4h4M4 20l5-5M16 20h4v-4M20 20l-5-5" /></svg>
                )}
              </button>
              <button onClick={() => { setIsChatOpen(false); setIsChatExpanded(false); }} className="hover:bg-white/20 p-2 rounded-full transition flex items-center justify-center pointer">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 bg-transparent flex flex-col gap-4">
            {aiPrompt && (
              <div className="self-end max-w-[85%]">
                <div className="bg-blue-600/80 backdrop-blur-md border border-blue-500/30 text-white rounded-2xl rounded-tr-sm px-4 py-2.5 shadow-sm">
                  <p className="text-sm font-medium leading-relaxed">{aiPrompt}</p>
                </div>
              </div>
            )}

            {isAiLoading && (
              <div className="self-start flex items-end gap-2">
                <div className="bg-gradient-to-br from-violet-500 to-fuchsia-500 w-8 h-8 rounded-full flex items-center justify-center shrink-0 shadow-md">
                  <span className="text-white text-[10px] font-bold">AI</span>
                </div>
                <div className="bg-white/60 backdrop-blur-md border border-white/50 rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-violet-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                  <span className="w-2 h-2 bg-fuchsia-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                  <span className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce"></span>
                </div>
              </div>
            )}

            {!isAiLoading && aiPrompt && (
              <div className="self-start flex items-start gap-2 w-full max-w-[100%]">
                <div className="bg-gradient-to-br from-violet-500 to-fuchsia-500 w-8 h-8 rounded-full flex items-center justify-center shrink-0 shadow-md mt-1">
                  <span className="text-white text-[10px] font-bold">AI</span>
                </div>
                <div className="flex flex-col gap-3 w-full overflow-hidden">
                  <div className="bg-white/80 backdrop-blur-md border border-white/60 text-gray-800 rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm inline-block w-fit">
                    <p className="font-medium text-sm leading-relaxed">
                      Savršen izbor! ✨ Pronašao sam 3 najbolje opcije u Dalmaciji blizu pješčanih plaža s obiteljskim sadržajima:
                    </p>
                  </div>
                  
                  {/* Results Carousel Simulation */}
                  <div className="flex gap-4 overflow-x-auto pb-4 pt-2 px-1 w-full snap-x snap-mandatory [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-white/10 [&::-webkit-scrollbar-thumb]:bg-white/50 [&::-webkit-scrollbar-thumb]:rounded-full">
                     <AiResultCard title="Family Resort Duće" price="145€" url="/smjestaj/1" image="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSbvZV0-UgDwVobO5y057pQumcyP9t-J7Wn69MJgYMpGIsvMRpKb1OWRAdTCkjk2Phs6qQ3HwYQhbHhDeKNy4Lqjxw&s=19" rating="4.9" desc="Savršeno za obitelji s djecom, samo 50m od mora i plaže." router={router} highlight="Najbolji odabir AI-a" />
                     <AiResultCard title="Vila Pješčana Uvala" price="160€" url="/smjestaj/2" image="https://lh3.googleusercontent.com/gps-cs-s/AHVAwep80cDORxceOru7jDNBroOErPIU42SWm5I-hxzBF5uXmeUASdMDxyALrY9KTkZtt9MxujzCTf6nEbqqqbHCgz7Y8eKhb015SPuRblugeqcgfQfQopbwJOH0occDQYqqfH5FI2xz=w675-h390-n-k-no" rating="4.7" desc="Moderno uređena vila s plitkim bazenom." router={router} discount="-10% popusta" />
                     <AiResultCard title="Apartman Omiška Rivijera" price="115€" url="/smjestaj/3" image="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSgmfyY9H5y_sXNwuz4Nel_LAV9G94lGov8NLiIUm_uN-jf1xh0ogjpfizta10fQ4xcl6IQzMTNdTk44jk-Oo87Ae8&s=19" rating="4.8" desc="Prvi red do mora. Prikladno za rane dječje aktivnosti." router={router} warning="Još samo 1 slobodna noć!" />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-3 border-t border-white/30 bg-white/20 backdrop-blur-xl shadow-[0_-10px_15px_-3px_rgba(0,0,0,0.05)]">
            <div className="flex items-center gap-2 bg-white/30 backdrop-blur-md border border-white/40 p-1.5 rounded-full px-3 focus-within:ring-2 focus-within:ring-violet-500/30 focus-within:border-violet-400 transition-all shadow-inner">
              <input type="text" placeholder="Traži dalje (npr. treba i dječji bazen)" className="flex-1 bg-transparent border-none text-xs font-medium text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-0" />
              <button className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-full p-2 transition transform hover:scale-105 shadow-md flex items-center justify-center">
                <svg className="w-3.5 h-3.5 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Button to open chat */}
      {!isChatOpen && (
        <button onClick={() => setIsChatOpen(true)} className="pointer-events-auto bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white p-4 rounded-full shadow-2xl flex items-center justify-center transform hover:scale-110 transition-all duration-300 group">
          <svg className="w-8 h-8 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
          <span className="absolute top-0 right-0 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white border-2 border-fuchsia-600"></span>
          </span>
        </button>
      )}
    </div>
  );
}

function AiResultCard({ title, price, url, image, rating, desc, router, highlight, discount, warning }: any) {
  return (
    <div className="snap-center shrink-0 w-[240px] md:w-[260px] bg-white/90 backdrop-blur-lg p-3 rounded-2xl shadow-lg border border-white/60 hover:shadow-xl hover:-translate-y-1 transition duration-300 group flex flex-col justify-between">
      <div>
        <div className="aspect-[4/3] w-full rounded-xl overflow-hidden relative mb-3">
          <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
          <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-md px-2 py-1 rounded-lg flex gap-1 items-center">
            <span className="text-yellow-400 text-xs">★</span>
            <span className="text-white text-[10px] font-bold">{rating}</span>
          </div>
          {highlight && <div className="absolute bottom-2 right-2 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-2 py-1 rounded text-[10px] font-extrabold shadow-md">{highlight}</div>}
          {warning && <div className="absolute inset-x-0 bottom-0 bg-red-600 text-white py-1 text-center text-[10px] font-bold">{warning}</div>}
        </div>
        <h4 className="font-extrabold text-gray-900 text-base line-clamp-1 mb-1">{title}</h4>
        <p className="text-gray-500 text-xs line-clamp-2 font-medium mb-3">{desc}</p>
      </div>
      <div>
        <div className="flex justify-between items-end mb-3">
          {discount ? <span className="text-xs text-green-600 font-bold bg-green-100 px-2 py-0.5 rounded-full">{discount}</span> : <div />}
          <span className="font-extrabold text-gray-900 text-lg">{price}<span className="text-xs text-gray-500 font-medium">/noć</span></span>
        </div>
        <button onClick={() => router.push(url)} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-xl text-xs transition shadow-md active:scale-95 duration-200">
          Rezerviraj odmah
        </button>
      </div>
    </div>
  );
}

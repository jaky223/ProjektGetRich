"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import AddAccommodationWizard from "@/components/features/add-accommodation/AddAccommodationWizard";
interface UserDashboardModalProps {
    isOpen: boolean;
    onClose: () => void;
    username: string;
}

export default function UserDashboardModal({ isOpen, onClose, username }: UserDashboardModalProps) {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState<"profil" | "smjestaji" | "postavke" | "dodaj-smjestaj">("profil");

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/60 backdrop-blur-md p-4 animate-in fade-in duration-300">
            <div className="bg-white w-full max-w-5xl h-[85vh] rounded-[2rem] shadow-2xl flex overflow-hidden relative border border-white/20">
                {/* Zatvori gumb */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 text-gray-400 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 p-2.5 rounded-full transition z-20"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Lijevi izbornik (Sidebar) */}
                <div className="w-1/3 max-w-[280px] bg-gradient-to-b from-gray-50 to-gray-100 border-r border-gray-200 flex flex-col p-6 h-full shrink-0">
                    <div className="flex items-center gap-4 mb-10 mt-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-violet-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-blue-500/30 border-4 border-white">
                            {username.charAt(0).toUpperCase()}
                        </div>
                        <div>
                            <h2 className="font-extrabold text-xl text-gray-900 tracking-tight leading-tight">{username}</h2>
                            <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full mt-1 inline-block border border-blue-100/50">Domaćin</span>
                        </div>
                    </div>

                    <nav className="flex flex-col gap-2">
                        <button 
                            onClick={() => setActiveTab("profil")}
                            className={`flex items-center gap-3 w-full text-left px-5 py-3.5 rounded-2xl font-bold transition-all ${activeTab === "profil" ? 'bg-white shadow-sm text-blue-700 border border-gray-100' : 'text-gray-600 hover:bg-gray-200/50 hover:text-gray-900'}`}
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                            Moj Profil
                        </button>
                        <button 
                            onClick={() => setActiveTab("smjestaji")}
                            className={`flex items-center gap-3 w-full text-left px-5 py-3.5 rounded-2xl font-bold transition-all ${activeTab === "smjestaji" ? 'bg-white shadow-sm text-blue-700 border border-gray-100' : 'text-gray-600 hover:bg-gray-200/50 hover:text-gray-900'}`}
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                            Moji Smještaji
                        </button>
                        <button 
                            onClick={() => setActiveTab("postavke")}
                            className={`flex items-center gap-3 w-full text-left px-5 py-3.5 rounded-2xl font-bold transition-all ${activeTab === "postavke" ? 'bg-white shadow-sm text-blue-700 border border-gray-100' : 'text-gray-600 hover:bg-gray-200/50 hover:text-gray-900'}`}
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            Sigurnost i Postavke
                        </button>
                    </nav>

                    <div className="mt-auto">
                        <div className="bg-blue-600/10 border border-blue-600/20 p-5 rounded-3xl mt-6">
                            <h4 className="font-bold text-blue-800 text-sm mb-1.5">Avelio Podrška</h4>
                            <p className="text-xs text-blue-700/80 mb-3 font-medium">Trebate pomoć s vašim smještajem?</p>
                            <button className="text-xs font-bold bg-white text-blue-700 px-4 py-2.5 rounded-xl shadow-sm w-full hover:shadow-md transition">
                                Kontaktirajte nas
                            </button>
                        </div>
                    </div>
                </div>

                {/* Glavni sadržaj (Content) */}
                <div className="flex-1 overflow-y-auto p-10 bg-white">
                    {activeTab === "profil" && (
                        <div className="animate-in slide-in-from-right-4 fade-in duration-500 max-w-2xl">
                            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-2">Vaš Profil</h2>
                            <p className="text-gray-500 font-medium mb-10">Pregledajte i ažurirajte svoje osobne podatke.</p>

                            <div className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Korisničko ime</label>
                                        <input type="text" defaultValue={username} className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition text-gray-800 font-medium" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                                        <input type="email" defaultValue={`${username.toLowerCase().replace(' ', '')}@example.com`} className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition text-gray-800 font-medium" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Ime</label>
                                        <input type="text" placeholder="Vaše ime" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition text-gray-800 font-medium" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Prezime</label>
                                        <input type="text" placeholder="Vaše prezime" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition text-gray-800 font-medium" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Broj mobitela</label>
                                    <input type="tel" placeholder="+385 91 234 5678" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition text-gray-800 font-medium" />
                                </div>
                                
                                <button className="mt-8 bg-gray-900 hover:bg-black text-white font-bold py-4 px-8 rounded-2xl shadow-lg transform hover:-translate-y-0.5 transition flex items-center gap-2">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    Spremi promjene
                                </button>
                            </div>
                        </div>
                    )}

                    {activeTab === "smjestaji" && (
                        <div className="animate-in slide-in-from-right-4 fade-in duration-500 flex flex-col h-full">
                            <div className="flex justify-between items-end mb-10">
                                <div>
                                    <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-2">Moji Smještaji</h2>
                                    <p className="text-gray-500 font-medium">Upravljajte svojim objavljenim apartmanima i kućama za odmor.</p>
                                </div>
                                <button 
                                    onClick={() => {
                                        setActiveTab("dodaj-smjestaj");
                                    }}
                                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-6 rounded-2xl shadow-lg shadow-blue-500/30 transform hover:-translate-y-0.5 transition flex items-center gap-2"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" /></svg>
                                    Dodaj novi smještaj
                                </button>
                            </div>

                            {/* Prazno stanje */}
                            <div className="flex-1 border-2 border-dashed border-gray-200 rounded-[2rem] bg-gray-50/50 flex flex-col items-center justify-center p-10 text-center">
                                <div className="w-24 h-24 bg-blue-100/50 text-blue-600 rounded-full flex items-center justify-center mb-6">
                                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                                </div>
                                <h3 className="text-2xl font-extrabold text-gray-900 mb-2">Nemate nijedan aktivan oglas</h3>
                                <p className="text-gray-500 font-medium max-w-sm mb-8">Objavite svoj prvi smještaj već danas i počnite primati rezervacije tisuća gostiju diljem Europe.</p>
                                <button
                                    onClick={() => {
                                        setActiveTab("dodaj-smjestaj");
                                    }}
                                    className="text-blue-600 font-extrabold hover:text-blue-800 hover:underline flex items-center gap-1.5 text-lg"
                                >
                                    Krenite s objavom prvog smještaja <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
                                </button>
                            </div>
                        </div>
                    )}

                    {activeTab === "postavke" && (
                        <div className="animate-in slide-in-from-right-4 fade-in duration-500">
                            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-2">Sigurnost i Postavke</h2>
                            <p className="text-gray-500 font-medium mb-10">Upravljajte lozinkom i postavkama vašeg korisničkog računa.</p>

                            <div className="space-y-6 max-w-2xl">
                                <div className="p-6 border border-gray-200 rounded-[2rem] bg-gray-50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                    <div>
                                        <h4 className="font-bold text-gray-900">Promjena lozinke</h4>
                                        <p className="text-sm text-gray-500 mt-1 font-medium">Vaša posljednja promjena bila je prije 3 mjeseca.</p>
                                    </div>
                                    <button className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-xl transition shadow-sm whitespace-nowrap">
                                        Nova lozinka
                                    </button>
                                </div>

                                <div className="p-6 border border-red-200 rounded-[2rem] bg-red-50 flex flex-col items-start gap-4 mt-8">
                                    <div>
                                        <h4 className="font-bold text-red-900 text-lg">Deaktivacija računa</h4>
                                        <p className="text-sm text-red-700/80 mt-1.5 font-medium leading-relaxed max-w-lg">Nakon deaktivacije svi vaši podaci, oglasi i recenzije bit će trajno obrisani iz našeg sustava. Ova akcija je nepovratna.</p>
                                    </div>
                                    <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-xl transition shadow-sm mt-2">
                                        Zatraži deaktivaciju
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === "dodaj-smjestaj" && (
                        <div className="h-full">
                            <AddAccommodationWizard 
                                onCancel={() => setActiveTab("smjestaji")}
                                onComplete={() => setActiveTab("smjestaji")} 
                                username={username}
                            />
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}

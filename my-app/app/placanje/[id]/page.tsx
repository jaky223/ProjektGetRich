"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

export default function CheckoutPage() {
    const params = useParams();
    const router = useRouter();
    const id = Number(params.id) || 1;
    const [isProcessing, setIsProcessing] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    // Mock podaci za sažetak (Isti kao i na detaljima da bude dosljedno)
    const smjestaj = {
        title: "Luksuzna Vila s bazenom",
        location: "Zadar",
        rating: 4.9,
        reviews: 128,
        price: 250,
        image: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwep80cDORxceOru7jDNBroOErPIU42SWm5I-hxzBF5uXmeUASdMDxyALrY9KTkZtt9MxujzCTf6nEbqqqbHCgz7Y8eKhb015SPuRblugeqcgfQfQopbwJOH0occDQYqqfH5FI2xz=w675-h390-n-k-no",
    };

    // Fiksni podaci za simulaciju rezervacije
    const nights = 5;
    const cleaningFee = 40;
    const serviceFee = 80;
    const total = (smjestaj.price * nights) + cleaningFee + serviceFee;

    const handlePayment = (e: React.FormEvent) => {
        e.preventDefault();
        setIsProcessing(true);
        // Simulacija procesiranja uplate (2 sekunde)
        setTimeout(() => {
            setIsProcessing(false);
            setIsSuccess(true);
        }, 2000);
    };

    if (isSuccess) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center font-sans p-4">
                <div className="bg-white max-w-lg w-full rounded-3xl shadow-2xl p-8 mb-10 md:mb-0 text-center border border-green-100 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 to-green-600"></div>
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <h1 className="text-3xl font-extrabold text-gray-900 mb-3">Plaćanje uspješno!</h1>
                    <p className="text-gray-600 font-medium mb-8 text-lg">
                        Vaš smještaj <span className="text-gray-900 font-bold">"{smjestaj.title}"</span> u Zadru je rezerviran. Potvrdu smo poslali na vaš e-mail.
                    </p>

                    <div className="bg-gray-50 p-4 rounded-2xl mb-8 flex justify-between items-center border border-gray-100 text-left">
                        <div>
                            <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Broj rezervacije</p>
                            <p className="text-gray-900 font-extrabold font-mono text-lg">#HR-5892-A</p>
                        </div>
                        <div className="text-right">
                            <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Plaćeno</p>
                            <p className="text-green-600 font-extrabold text-lg">{total} €</p>
                        </div>
                    </div>

                    <button
                        onClick={() => router.push('/')}
                        className="bg-blue-600 text-white font-bold px-8 py-3.5 rounded-full w-full hover:bg-blue-700 transition shadow-lg transform active:scale-[0.98] flex items-center justify-center gap-2"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                        Povratak na početnu
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white md:bg-gray-50 font-sans pb-24">
            {/* Header naplate */}
            <nav className="bg-white border-b border-gray-200 sticky top-0 z-40 hidden md:block shadow-sm">
                <div className="max-w-6xl mx-auto px-4 py-6 flex items-center">
                    <button onClick={() => window.history.back()} className="flex items-center group">
                        <div className="w-10 h-10 rounded-full bg-gray-50 group-hover:bg-gray-100 flex items-center justify-center transition mr-4">
                            <svg className="w-5 h-5 text-gray-700 group-hover:text-black transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                            </svg>
                        </div>
                    </button>
                    <h1 className="text-2xl font-extrabold text-gray-900">Potvrdite i platite</h1>
                </div>
            </nav>

            {/* Mobile back button */}
            <div className="md:hidden p-4 flex items-center bg-white sticky top-0 z-40 border-b border-gray-100">
                <button onClick={() => window.history.back()} className="mr-3 p-2 -ml-2">
                    <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <h1 className="text-lg font-extrabold text-gray-900">Potvrda</h1>
            </div>

            <div className="max-w-6xl mx-auto px-4 md:py-12 flex flex-col-reverse md:flex-row gap-12 lg:gap-24">

                {/* Lijeva strana - Forma za unos (Na mobitelu ide ispod sažetka) */}
                <div className="flex-[1.5] py-6 md:py-0">

                    {/* Dio 1: Detalji putovanja */}
                    <div className="mb-10 pb-10 border-b border-gray-200">
                        <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Vaše putovanje</h2>

                        <div className="flex justify-between items-center mb-6">
                            <div>
                                <h3 className="font-bold text-gray-900 text-lg">Datumi</h3>
                                <p className="text-gray-600 font-medium">15. srp – 20. srp</p>
                            </div>
                            <button className="font-extrabold text-gray-900 underline hover:text-blue-600 transition">Uredi</button>
                        </div>

                        <div className="flex justify-between items-center">
                            <div>
                                <h3 className="font-bold text-gray-900 text-lg">Gosti</h3>
                                <p className="text-gray-600 font-medium">1 gost</p>
                            </div>
                            <button className="font-extrabold text-gray-900 underline hover:text-blue-600 transition">Uredi</button>
                        </div>
                    </div>

                    {/* Dio 2: Unos plaćanja */}
                    <form onSubmit={handlePayment}>
                        <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Način plaćanja</h2>

                        {/* Tabovi plaćanja */}
                        <div className="flex gap-4 mb-6">
                            <div className="flex-1 border-2 border-gray-900 rounded-xl p-4 cursor-pointer flex justify-between items-center bg-gray-50">
                                <span className="font-bold text-gray-900">Kreditna kartica</span>
                                <div className="flex gap-1">
                                    <div className="w-8 h-5 bg-blue-800 rounded text-[8px] text-white flex items-center justify-center font-bold italic">VISA</div>
                                    <div className="w-8 h-5 bg-orange-500 rounded flex items-center justify-center"><div className="w-3 h-3 bg-red-500 rounded-full mix-blend-multiply opacity-80"></div><div className="w-3 h-3 bg-yellow-400 rounded-full mix-blend-multiply -ml-1 opacity-80"></div></div>
                                </div>
                            </div>
                            <div className="flex-1 border border-gray-200 rounded-xl p-4 cursor-pointer flex justify-between items-center hover:border-gray-400 text-gray-400 transition">
                                <span className="font-bold">PayPal</span>
                                <span className="font-bold italic text-blue-800">Pay<span className="text-blue-400">Pal</span></span>
                            </div>
                        </div>

                        {/* Inputi za karticu (Mock) */}
                        <div className="border border-gray-300 rounded-2xl overflow-hidden mb-8 shadow-sm">
                            <div className="border-b border-gray-300 relative focus-within:ring-1 focus-within:ring-gray-900 focus-within:border-gray-900 z-10 transition">
                                <input
                                    type="text"
                                    placeholder="Broj kartice"
                                    required
                                    className="w-full p-4 text-base font-medium placeholder-gray-500 text-gray-900 border-none focus:outline-none focus:ring-0 bg-transparent"
                                />
                                <div className="absolute right-4 top-4 text-gray-300">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex-1 border-r border-gray-300 focus-within:ring-1 focus-within:ring-gray-900 z-10 transition">
                                    <input
                                        type="text"
                                        placeholder="Istječe"
                                        required
                                        className="w-full p-4 text-base font-medium placeholder-gray-500 text-gray-900 border-none focus:outline-none focus:ring-0 bg-transparent"
                                    />
                                </div>
                                <div className="flex-1 focus-within:ring-1 focus-within:ring-gray-900 z-10 transition">
                                    <input
                                        type="text"
                                        placeholder="CVV"
                                        required
                                        className="w-full p-4 text-base font-medium placeholder-gray-500 text-gray-900 border-none focus:outline-none focus:ring-0 bg-transparent"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Pravila i gumb za potvrdu */}
                        <div className="mb-8 pt-8 border-t border-gray-200">
                            <h3 className="font-extrabold text-gray-900 text-xl mb-4">Pravila otkazivanja</h3>
                            <p className="text-gray-600 font-medium mb-4 leading-relaxed">
                                <span className="font-bold text-gray-900">Besplatno otkazivanje do 13. srp.</span> Nakon toga naplaćujemo polog ako otkažete prije isteka roka za besplatno otkazivanje.
                            </p>

                            <p className="text-gray-500 text-xs font-medium leading-relaxed mb-8 mt-6">
                                Odabirom gumba u nastavku slažem se s Pravilima doma donesenima od strane domaćina, Osnovnim pravilima za goste i ugovorom o isključivanju odgovornosti, kao i time da Avelio može teretiti moju metodu plaćanja.
                            </p>

                            <button
                                type="submit"
                                disabled={isProcessing}
                                className={`font-extrabold text-white text-lg rounded-xl py-4 transition-all w-full md:w-auto md:px-12 flex items-center justify-center shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-95 ${isProcessing ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900'}`}
                            >
                                {isProcessing ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                                        Procesiranje...
                                    </>
                                ) : (
                                    'Potvrdi i plati'
                                )}
                            </button>
                        </div>
                    </form>
                </div>

                {/* Desna strana - Sažetak računa (Sticky na desktopu, na vrhu na mobitelu) */}
                <div className="flex-1 flex justify-center md:justify-end">
                    <div className="bg-white border text-gray-900 border-gray-300 md:rounded-3xl p-6 w-full lg:max-w-md md:sticky top-28 shadow-sm">

                        {/* Info o smještaju mini */}
                        <div className="flex gap-4 pb-6 border-b border-gray-200">
                            <div className="w-28 h-24 rounded-2xl overflow-hidden shrink-0">
                                <img src={smjestaj.image} alt={smjestaj.title} className="w-full h-full object-cover" />
                            </div>
                            <div className="flex flex-col justify-between">
                                <div>
                                    <span className="text-xs text-gray-500 font-bold uppercase tracking-wider">{smjestaj.location}</span>
                                    <h3 className="font-extrabold text-sm text-gray-900 mt-1 line-clamp-2">{smjestaj.title}</h3>
                                </div>
                                <div className="flex items-center gap-1 text-xs font-bold text-gray-900">
                                    <span className="text-yellow-500 text-sm">★</span>
                                    <span>{smjestaj.rating}</span>
                                    <span className="text-gray-500 font-medium">({smjestaj.reviews} recenzija)</span>
                                </div>
                            </div>
                        </div>

                        <div className="py-6 border-b border-gray-200">
                            <h3 className="text-xl font-extrabold text-gray-900 mb-6">Pojedinosti o cijeni</h3>
                            <div className="flex flex-col gap-4">
                                <div className="flex justify-between text-gray-600 font-medium">
                                    <span>{smjestaj.price} € x {nights} noćenja</span>
                                    <span className="text-gray-900">{smjestaj.price * nights} €</span>
                                </div>
                                <div className="flex justify-between text-gray-600 font-medium">
                                    <span className="underline cursor-pointer">Naknada za čišćenje</span>
                                    <span className="text-gray-900">{cleaningFee} €</span>
                                </div>
                                <div className="flex justify-between text-gray-600 font-medium pb-2">
                                    <span className="underline cursor-pointer">Naknada za uslugu portala</span>
                                    <span className="text-gray-900">{serviceFee} €</span>
                                </div>
                            </div>
                        </div>

                        <div className="pt-6 flex justify-between items-center text-gray-900 font-extrabold">
                            <span className="text-lg">Ukupno (EUR)</span>
                            <span className="text-2xl">{total} €</span>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

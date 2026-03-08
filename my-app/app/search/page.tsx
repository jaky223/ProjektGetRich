"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { Suspense, useState } from "react";
import Link from "next/link";

function PrikazRezultataPretrage() {
    const searchParams = useSearchParams();
    const router = useRouter();

    const locationQuery = searchParams.get("location") || "Sve destinacije";
    const datesQuery = searchParams.get("dates") || "Bilo kada";
    const guestsQuery = searchParams.get("guests") || "Odaberite goste";

    const [priceRange, setPriceRange] = useState(500);

    // Mock rezultati
    const mockResults = [
        {
            id: 1,
            title: "Luksuzna Vila s bazenom",
            location: "Zadar",
            rating: 4.9,
            reviews: 128,
            price: 250,
            image: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwep80cDORxceOru7jDNBroOErPIU42SWm5I-hxzBF5uXmeUASdMDxyALrY9KTkZtt9MxujzCTf6nEbqqqbHCgz7Y8eKhb015SPuRblugeqcgfQfQopbwJOH0occDQYqqfH5FI2xz=w675-h390-n-k-no",
            description: "Prekrasna vila tik uz plažu s infinity bazenom i panoramskim pogledom na more. Uključuje privatnu teretanu i spa zonu.",
            features: ["Bazen", "Wi-Fi", "Parking", "Klima"],
        },
        {
            id: 2,
            title: "Moderni Apartman u centru",
            location: "Split",
            rating: 4.8,
            reviews: 342,
            price: 120,
            image: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSgmfyY9H5y_sXNwuz4Nel_LAV9G94lGov8NLiIUm_uN-jf1xh0ogjpfizta10fQ4xcl6IQzMTNdTk44jk-Oo87Ae8&s=19",
            description: "Prostrani apartman smješten unutar Dioklecijanove palače, okružen povijesnim znamenitostima i restoranima.",
            features: ["Blizu centra", "Wi-Fi", "Klima"],
        },
        {
            id: 3,
            title: "Rustikalna kuća u prirodi",
            location: "Istra",
            rating: 4.7,
            reviews: 89,
            price: 180,
            image: "https://putnikofer.hr/wp-content/uploads/2023/10/groznjan-istra-1600x900.jpg",
            description: "Autentična istarska kamena kuća idealna za miran obiteljski odmor okružena maslinicima i vinogradima.",
            features: ["Vrt", "Pet-friendly", "Parking", "Kamin"],
        },
        {
            id: 4,
            title: "Ekskluzivni smještaj s pogledom",
            location: "Dubrovnik",
            rating: 5.0,
            reviews: 210,
            price: 350,
            image: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSbvZV0-UgDwVobO5y057pQumcyP9t-J7Wn69MJgYMpGIsvMRpKb1OWRAdTCkjk2Phs6qQ3HwYQhbHhDeKNy4Lqjxw&s=19",
            description: "Vrhunski dizajnerski apartman s terasom koja nudi spektakularan pogled na zidine i staru jezgru grada.",
            features: ["Pogled na more", "Premium", "Transfer"],
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
            {/* Mini Navigacija */}
            <nav className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center group">
                        <svg className="w-5 h-5 text-gray-500 mr-2 group-hover:text-blue-600 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                        <span className="font-semibold text-gray-700 group-hover:text-blue-600 transition">Natrag</span>
                    </Link>
                    <div className="hidden md:flex gap-4 items-center">
                        {/* Sažetak pretrage u navbaru */}
                        <div className="bg-blue-50/80 border border-blue-100 px-5 py-2.5 rounded-full text-sm font-bold flex gap-4 divide-x divide-blue-200 shadow-inner">
                            <span className="text-blue-900">{locationQuery}</span>
                            <span className="text-blue-700 pl-4">{datesQuery}</span>
                            <span className="text-blue-700 pl-4">{guestsQuery}</span>
                        </div>
                    </div>
                    <button className="bg-blue-600 text-white px-5 py-2 rounded-full font-bold hover:bg-blue-700 transition">
                        Izmijeni
                    </button>
                </div>
            </nav>

            <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8 w-full">
                {/* Lijevi stupac - Filteri (Sidebar) */}
                <div className="w-full lg:w-1/4 shrink-0">
                    <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 sticky top-24">
                        <h3 className="font-extrabold text-xl text-gray-900 mb-6 flex items-center gap-2">
                            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                            </svg>
                            Filteri
                        </h3>

                        {/* Cijena */}
                        <div className="mb-8 border-b border-gray-100 pb-6">
                            <h4 className="font-bold text-gray-800 mb-4">Cijena po noćenju</h4>
                            <p className="text-sm text-gray-500 mb-3">Do {priceRange} €</p>
                            <input
                                type="range"
                                min="50"
                                max="1000"
                                value={priceRange}
                                onChange={(e) => setPriceRange(Number(e.target.value))}
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                            />
                            <div className="flex justify-between text-xs text-gray-400 mt-2 font-medium">
                                <span>50 €</span>
                                <span>1000+ €</span>
                            </div>
                        </div>

                        {/* Sadržaji */}
                        <div className="mb-8 border-b border-gray-100 pb-6">
                            <h4 className="font-bold text-gray-800 mb-4">Popularni sadržaji</h4>
                            <div className="flex flex-col gap-3">
                                {['Bazen', 'Wi-Fi', 'Besplatan parking', 'Klima uređaj', 'Dozvoljeni ljubimci'].map((amenity) => (
                                    <label key={amenity} className="flex items-center gap-3 cursor-pointer group">
                                        <div className="relative flex items-center">
                                            <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-blue-600 bg-gray-50 focus:ring-blue-500 cursor-pointer transition" />
                                        </div>
                                        <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition">{amenity}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Vrsta smještaja */}
                        <div>
                            <h4 className="font-bold text-gray-800 mb-4">Vrsta smještaja</h4>
                            <div className="flex flex-col gap-3">
                                {['Kuća / Vila', 'Apartman', 'Hotel', 'Glamping'].map((type) => (
                                    <label key={type} className="flex items-center gap-3 cursor-pointer group">
                                        <div className="relative flex items-center">
                                            <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-blue-600 bg-gray-50 focus:ring-blue-500 cursor-pointer transition" />
                                        </div>
                                        <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition">{type}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Desni stupac - Rezultati */}
                <div className="flex-1 w-full">
                    <div className="mb-6">
                        <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
                            Smještaji u okolici mjesta <span className="text-blue-600">{locationQuery}</span>
                        </h1>
                        <p className="text-gray-500 font-medium">Više od 300 mjesta za boravak • {datesQuery} • {guestsQuery}</p>
                    </div>

                    <div className="flex gap-2 mb-6 overflow-x-auto pb-2 scrollbar-hide">
                        {['Naša preporuka', 'Najniža cijena', 'Najbolje ocijenjeno', 'Najbliže centru'].map((sort, index) => (
                            <button
                                key={sort}
                                className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-bold border transition-all ${index === 0 ? 'bg-gradient-to-r from-blue-600 to-blue-800 text-white border-transparent shadow-md' : 'bg-white text-gray-700 border-gray-200 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50'}`}
                            >
                                {sort}
                            </button>
                        ))}
                    </div>

                    <div className="flex flex-col gap-6">
                        {mockResults.map((result) => (
                            <Link href={`/smjestaj/${result.id}`} key={result.id} className="bg-white rounded-3xl p-4 flex flex-col md:flex-row gap-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group cursor-pointer no-underline text-current block">
                                {/* Slika */}
                                <div className="w-full md:w-72 h-48 md:h-auto rounded-2xl overflow-hidden relative shrink-0">
                                    <img src={result.image} alt={result.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                                    <button className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-md rounded-full hover:bg-white transition hover:text-red-500 text-gray-500">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                    </button>
                                </div>

                                {/* Informacije */}
                                <div className="flex flex-col justify-between flex-1 py-1 pr-2">
                                    <div>
                                        <div className="flex justify-between items-start mb-1">
                                            <span className="text-xs font-bold text-gray-400 tracking-wider uppercase">{result.location}</span>
                                            <div className="flex items-center gap-1 font-bold text-sm">
                                                <span className="text-yellow-500">⭐</span>
                                                <span>{result.rating}</span>
                                                <span className="text-gray-400 font-normal">({result.reviews})</span>
                                            </div>
                                        </div>
                                        <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition">{result.title}</h2>
                                        <p className="text-gray-500 text-sm mb-4 line-clamp-2">{result.description}</p>

                                        <div className="flex flex-wrap gap-2">
                                            {result.features.map(feat => (
                                                <span key={feat} className="text-xs font-bold bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
                                                    {feat}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex justify-between items-end mt-4 pt-4 border-t border-gray-50">
                                        <div>
                                            <p className="font-extrabold text-2xl text-gray-900">{result.price}€<span className="text-sm font-medium text-gray-500"> / noć</span></p>
                                            <p className="text-xs text-gray-500 font-medium underline mt-1">Ukupno {result.price * 3}€ (Cijena za 3 noći)</p>
                                        </div>
                                        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-2.5 rounded-xl font-bold group-hover:from-blue-700 group-hover:to-blue-900 transition shadow-md transform group-hover:scale-105 text-center">
                                            Prikaži
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Učitaj više */}
                    <div className="mt-10 flex justify-center pb-12">
                        <button className="border-2 border-blue-600 text-blue-600 font-bold px-8 py-3 rounded-full hover:bg-blue-600 hover:text-white transition shadow-md hover:shadow-xl transform hover:-translate-y-1">
                            Prikaži više smještaja
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function StranicaZaPretragu() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-blue-600 font-bold text-xl">Učitavanje rezultata...</div>}>
            <PrikazRezultataPretrage />
        </Suspense>
    );
}

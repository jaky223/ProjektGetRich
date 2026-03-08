"use client";

import Link from "next/link";
import { useState } from "react";

export default function WishlistPage() {
    // Mock spremeni podaci
    const [savedItems, setSavedItems] = useState([
        {
            id: 1,
            title: "Luksuzna Vila s bazenom",
            location: "Zadar",
            rating: 4.9,
            reviews: 128,
            price: 250,
            image: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwep80cDORxceOru7jDNBroOErPIU42SWm5I-hxzBF5uXmeUASdMDxyALrY9KTkZtt9MxujzCTf6nEbqqqbHCgz7Y8eKhb015SPuRblugeqcgfQfQopbwJOH0occDQYqqfH5FI2xz=w675-h390-n-k-no",
        },
        {
            id: 2,
            title: "Ekskluzivni smještaj s pogledom",
            location: "Dubrovnik",
            rating: 5.0,
            reviews: 210,
            price: 350,
            image: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSbvZV0-UgDwVobO5y057pQumcyP9t-J7Wn69MJgYMpGIsvMRpKb1OWRAdTCkjk2Phs6qQ3HwYQhbHhDeKNy4Lqjxw&s=19",
        },
        {
            id: 3,
            title: "Rustikalna kuća u prirodi",
            location: "Istra",
            rating: 4.7,
            reviews: 89,
            price: 180,
            image: "https://putnikofer.hr/wp-content/uploads/2023/10/groznjan-istra-1600x900.jpg",
        }
    ]);

    const removeSavedItem = (id: number) => {
        setSavedItems(savedItems.filter(item => item.id !== id));
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
            {/* Navigacija */}
            <nav className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center group">
                        <svg className="w-5 h-5 text-gray-500 mr-2 group-hover:text-blue-600 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                        <span className="font-semibold text-gray-700 group-hover:text-blue-600 transition">Natrag na početnu</span>
                    </Link>

                    {/* Korisnički izbornik dummy */}
                    <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-full py-1.5 px-2 hover:shadow-md transition cursor-pointer">
                        <svg className="w-5 h-5 ml-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
                        <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                            J
                        </div>
                    </div>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto px-4 py-10 w-full flex-1">
                {/* Profil Header */}
                <div className="flex flex-col md:flex-row gap-8 items-start mb-12 border-b border-gray-200 pb-10">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-800 text-white rounded-full flex items-center justify-center text-4xl font-extrabold shadow-lg shrink-0">
                        J
                    </div>
                    <div>
                        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">Jakov</h1>
                        <p className="text-gray-500 font-medium mb-4">Pridružen/a 2026. • Booking entuzijast</p>

                        <div className="flex flex-wrap gap-4">
                            <button className="bg-white border border-gray-200 text-gray-700 font-bold px-5 py-2 rounded-xl shadow-sm hover:bg-gray-50 hover:text-blue-600 transition">Uredi profil</button>
                            <button className="bg-white border border-gray-200 text-gray-700 font-bold px-5 py-2 rounded-xl shadow-sm hover:bg-gray-50 transition">Postavke računa</button>
                        </div>
                    </div>
                </div>

                {/* Stranica sa Spremljenim / Omiljenim Smještajima */}
                <div>
                    <div className="flex justify-between items-end mb-8">
                        <div>
                            <h2 className="text-2xl font-extrabold text-gray-900">Moja lista želja ❤️</h2>
                            <p className="text-gray-500 font-medium mt-1">Imate {savedItems.length} spremljenih smještaja za buduća putovanja.</p>
                        </div>
                    </div>

                    {savedItems.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {savedItems.map((item) => (
                                <div key={item.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group cursor-pointer flex flex-col relative">
                                    {/* Slika s apsolutnim gumbom za brisanje (srce) */}
                                    <div className="w-full aspect-[4/3] relative overflow-hidden">
                                        <Link href={`/smjestaj/${item.id}`} className="absolute inset-0 z-0">
                                            <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                                            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition"></div>
                                        </Link>

                                        {/* Gumb za micanje iz favorita */}
                                        <button
                                            onClick={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                removeSavedItem(item.id);
                                            }}
                                            className="absolute top-4 right-4 z-10 p-2.5 bg-white/90 backdrop-blur-md rounded-full shadow-md hover:scale-110 transition-transform text-red-500 hover:text-red-600 hover:bg-white"
                                            title="Ukloni iz liste želja"
                                        >
                                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                            </svg>
                                        </button>
                                    </div>

                                    {/* Informacije koje vode na detalje */}
                                    <Link href={`/smjestaj/${item.id}`} className="p-4 flex-1 flex flex-col justify-between no-underline block">
                                        <div>
                                            <div className="flex justify-between items-start mb-1">
                                                <span className="text-xs font-bold text-gray-400 tracking-wider uppercase line-clamp-1">{item.location}</span>
                                                <div className="flex items-center gap-1 font-bold text-sm shrink-0">
                                                    <span className="text-yellow-500">⭐</span>
                                                    <span>{item.rating}</span>
                                                </div>
                                            </div>
                                            <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition line-clamp-2">{item.title}</h3>
                                        </div>

                                        <div className="mt-4 pt-4 border-t border-gray-50 flex justify-between items-center">
                                            <p className="font-extrabold text-lg text-gray-900">{item.price}€<span className="text-xs font-medium text-gray-500"> / noć</span></p>
                                            <span className="text-sm font-bold text-blue-600 group-hover:translate-x-1 transition-transform inline-block">Pogledaj</span>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="bg-white rounded-3xl border border-gray-200 p-12 text-center shadow-sm">
                            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-10 h-10 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                            </div>
                            <h3 className="text-xl font-extrabold text-gray-900 mb-2">Vaša lista želja je trenutno prazna.</h3>
                            <p className="text-gray-500 font-medium mb-6">Niste još spremili nijedan smještaj. Kliknite na ikonu srca dok pretražujete.</p>
                            <Link href="/search" className="inline-block bg-blue-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-blue-700 transition shadow-md hover:shadow-lg transform active:scale-95">
                                Kreni u pretragu
                            </Link>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}

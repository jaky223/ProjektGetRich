"use client";

import { useParams } from "next/navigation";
import Link from "next/link";

export default function StranicaDetaljaSmjestaja() {
    const params = useParams();
    const id = Number(params.id) || 1;

    // Isti mock podaci kao i na search stranici da budu konzistentni, ali s više detalja
    const sveVeze = [
        {
            id: 1,
            title: "Luksuzna Vila s bazenom",
            location: "Zadar",
            address: "Morska ulica 15, 23000 Zadar",
            rating: 4.9,
            reviews: 128,
            price: 250,
            mainImage: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwep80cDORxceOru7jDNBroOErPIU42SWm5I-hxzBF5uXmeUASdMDxyALrY9KTkZtt9MxujzCTf6nEbqqqbHCgz7Y8eKhb015SPuRblugeqcgfQfQopbwJOH0occDQYqqfH5FI2xz=w675-h390-n-k-no",
            images: [
                "https://lh3.googleusercontent.com/gps-cs-s/AHVAwep80cDORxceOru7jDNBroOErPIU42SWm5I-hxzBF5uXmeUASdMDxyALrY9KTkZtt9MxujzCTf6nEbqqqbHCgz7Y8eKhb015SPuRblugeqcgfQfQopbwJOH0occDQYqqfH5FI2xz=w675-h390-n-k-no",
                "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSbvZV0-UgDwVobO5y057pQumcyP9t-J7Wn69MJgYMpGIsvMRpKb1OWRAdTCkjk2Phs6qQ3HwYQhbHhDeKNy4Lqjxw&s=19",
                "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSgmfyY9H5y_sXNwuz4Nel_LAV9G94lGov8NLiIUm_uN-jf1xh0ogjpfizta10fQ4xcl6IQzMTNdTk44jk-Oo87Ae8&s=19"
            ],
            description: "Prekrasna vila tik uz plažu s infinity bazenom i panoramskim pogledom na more. Uključuje privatnu teretanu i spa zonu. Idealno polazište za istraživanje divnog Zadra i predivnih nacionalnih parkova u okolici. Odmor na koji ste čekali cijele godine s luksuzom koji zaslužujete.",
            features: ["Bazen", "Wi-Fi", "Parking", "Klima", "Roštilj", "Privatna plaža", "Teretana", "Wellness"],
            guests: 6,
            bedrooms: 3,
            beds: 3,
            baths: 2,
            hostName: "Ivana Marić"
        },
        {
            id: 2,
            title: "Moderni Apartman u centru",
            location: "Split",
            address: "Marmontova ulica 5, 21000 Split",
            rating: 4.8,
            reviews: 342,
            price: 120,
            mainImage: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSgmfyY9H5y_sXNwuz4Nel_LAV9G94lGov8NLiIUm_uN-jf1xh0ogjpfizta10fQ4xcl6IQzMTNdTk44jk-Oo87Ae8&s=19",
            images: [
                "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSgmfyY9H5y_sXNwuz4Nel_LAV9G94lGov8NLiIUm_uN-jf1xh0ogjpfizta10fQ4xcl6IQzMTNdTk44jk-Oo87Ae8&s=19",
                "https://putnikofer.hr/wp-content/uploads/2023/10/groznjan-istra-1600x900.jpg",
                "https://lh3.googleusercontent.com/gps-cs-s/AHVAwep80cDORxceOru7jDNBroOErPIU42SWm5I-hxzBF5uXmeUASdMDxyALrY9KTkZtt9MxujzCTf6nEbqqqbHCgz7Y8eKhb015SPuRblugeqcgfQfQopbwJOH0occDQYqqfH5FI2xz=w675-h390-n-k-no"
            ],
            description: "Prostrani apartman smješten unutar Dioklecijanove palače, okružen povijesnim znamenitostima i restoranima. Uživajte u autentičnom iskustvu Splita iz prve ruke. Samo 5 minuta hoda do Rive.",
            features: ["Blizu centra", "Wi-Fi", "Klima", "Kuhinja", "TV", "Perilica rublja"],
            guests: 4,
            bedrooms: 2,
            beds: 2,
            baths: 1,
            hostName: "Marko Babić"
        },
        {
            id: 3,
            title: "Rustikalna kuća u prirodi",
            location: "Istra",
            address: "Selo 15, 52429 Grožnjan",
            rating: 4.7,
            reviews: 89,
            price: 180,
            mainImage: "https://putnikofer.hr/wp-content/uploads/2023/10/groznjan-istra-1600x900.jpg",
            images: [
                "https://putnikofer.hr/wp-content/uploads/2023/10/groznjan-istra-1600x900.jpg",
                "https://lh3.googleusercontent.com/gps-cs-s/AHVAwep80cDORxceOru7jDNBroOErPIU42SWm5I-hxzBF5uXmeUASdMDxyALrY9KTkZtt9MxujzCTf6nEbqqqbHCgz7Y8eKhb015SPuRblugeqcgfQfQopbwJOH0occDQYqqfH5FI2xz=w675-h390-n-k-no",
                "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSgmfyY9H5y_sXNwuz4Nel_LAV9G94lGov8NLiIUm_uN-jf1xh0ogjpfizta10fQ4xcl6IQzMTNdTk44jk-Oo87Ae8&s=19"
            ],
            description: "Autentična istarska kamena kuća idealna za miran obiteljski odmor okružena maslinicima i vinogradima. Pobjegnite od gradske vreve i ponovno se povežite s prirodom i uživajte u domaćem vinu.",
            features: ["Vrt", "Pet-friendly", "Parking", "Kamin", "Priroda", "Bicikli"],
            guests: 5,
            bedrooms: 2,
            beds: 3,
            baths: 1,
            hostName: "Ana Kos"
        },
        {
            id: 4,
            title: "Ekskluzivni smještaj s pogledom",
            location: "Dubrovnik",
            address: "Stradun 21, 20000 Dubrovnik",
            rating: 5.0,
            reviews: 210,
            price: 350,
            mainImage: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSbvZV0-UgDwVobO5y057pQumcyP9t-J7Wn69MJgYMpGIsvMRpKb1OWRAdTCkjk2Phs6qQ3HwYQhbHhDeKNy4Lqjxw&s=19",
            images: [
                "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSbvZV0-UgDwVobO5y057pQumcyP9t-J7Wn69MJgYMpGIsvMRpKb1OWRAdTCkjk2Phs6qQ3HwYQhbHhDeKNy4Lqjxw&s=19",
                "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSgmfyY9H5y_sXNwuz4Nel_LAV9G94lGov8NLiIUm_uN-jf1xh0ogjpfizta10fQ4xcl6IQzMTNdTk44jk-Oo87Ae8&s=19",
                "https://putnikofer.hr/wp-content/uploads/2023/10/groznjan-istra-1600x900.jpg"
            ],
            description: "Vrhunski dizajnerski apartman s terasom koja nudi spektakularan pogled na zidine i staru jezgru grada. Vrhunski detalji unutrašnjosti koji pružaju kraljevski osjećaj za vaš boravak u Dubrovniku.",
            features: ["Pogled na more", "Premium", "Transfer", "Doručak u krevet", "Wi-Fi"],
            guests: 2,
            bedrooms: 1,
            beds: 1,
            baths: 1,
            hostName: "Luksuzni Dubrovnik d.o.o."
        }
    ];

    const smjestaj = sveVeze.find((s) => s.id === id) || sveVeze[0];

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans pb-24">
            {/* Navigacija */}
            <nav className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm relative">
                <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                    <button
                        onClick={() => window.history.back()}
                        className="flex items-center group -ml-2"
                    >
                        <div className="p-2 rounded-full hover:bg-gray-100 transition">
                            <svg className="w-5 h-5 text-gray-700 group-hover:text-blue-600 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                            </svg>
                        </div>
                    </button>

                    <div className="flex gap-4 items-center">
                        <button className="flex items-center gap-2 p-2 rounded-full hover:bg-blue-50 hover:text-blue-600 transition text-gray-700 group">
                            <svg className="w-5 h-5 group-hover:text-blue-600 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
                            <span className="font-semibold text-sm hidden sm:block">Podijeli</span>
                        </button>
                        <button className="flex items-center gap-2 p-2 rounded-full hover:bg-blue-50 hover:text-blue-600 transition text-gray-700 group">
                            <svg className="w-5 h-5 group-hover:text-blue-600 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                            <span className="font-semibold text-sm hidden sm:block">Spremi</span>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero Naslov */}
            <div className="max-w-7xl mx-auto px-4 pt-8 w-full">
                <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">{smjestaj.title}</h1>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-semibold text-gray-900 mb-6">
                    <div className="flex items-center gap-1">
                        <span className="text-yellow-500 text-lg">★</span>
                        <span className="text-lg">{smjestaj.rating}</span>
                    </div>
                    <span className="text-gray-400 underline decoration-gray-300 font-medium cursor-pointer hover:text-gray-900 transition">{smjestaj.reviews} recenzija</span>
                    <span className="text-gray-300">•</span>
                    <span className="text-gray-500 font-medium">{smjestaj.location}</span>
                    <span className="text-gray-300">•</span>
                    <span className="text-gray-500 font-medium underline decoration-gray-300 cursor-pointer hover:text-gray-900 transition">{smjestaj.address}</span>
                </div>
            </div>

            {/* Galerija slika */}
            <div className="max-w-7xl mx-auto px-4 w-full mb-12">
                <div className="grid grid-cols-4 grid-rows-2 gap-2 h-[450px] rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group">
                    {/* Glavna velika slika */}
                    <div className="col-span-4 md:col-span-2 row-span-2 relative cursor-pointer group/image">
                        <img src={smjestaj.mainImage} alt={smjestaj.title} className="w-full h-full object-cover transition duration-500 group-hover/image:scale-105" />
                        <div className="absolute inset-0 bg-black/10 transition group-hover/image:bg-transparent"></div>
                    </div>

                    {/* Manje slike */}
                    {smjestaj.images[1] && (
                        <div className="hidden md:block col-span-1 row-span-1 relative cursor-pointer group/image">
                            <img src={smjestaj.images[1]} alt={smjestaj.title} className="w-full h-full object-cover transition duration-500 group-hover/image:scale-105" />
                            <div className="absolute inset-0 bg-black/10 transition group-hover/image:bg-transparent"></div>
                        </div>
                    )}
                    {smjestaj.images[2] && (
                        <div className="hidden md:block col-span-1 row-span-1 relative cursor-pointer group/image">
                            <img src={smjestaj.images[2]} alt={smjestaj.title} className="w-full h-full object-cover transition duration-500 group-hover/image:scale-105" />
                            <div className="absolute inset-0 bg-black/10 transition group-hover/image:bg-transparent"></div>
                        </div>
                    )}
                    {smjestaj.images[0] && (
                        <div className="hidden md:block col-span-2 row-span-1 relative cursor-pointer group/image">
                            <img src={smjestaj.images[0]} alt={smjestaj.title} className="w-full h-full object-cover transition duration-500 group-hover/image:scale-105" />
                            <div className="absolute inset-0 bg-black/10 transition group-hover/image:bg-transparent"></div>

                            <button className="absolute bottom-4 right-4 bg-white/95 text-blue-800 backdrop-blur-md px-4 py-2 rounded-xl text-sm font-bold shadow-md hover:bg-white transition hover:scale-105 border border-white">
                                Prikaži sve fotografije
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Sadržaj ispod slika */}
            <div className="max-w-7xl mx-auto px-4 w-full flex flex-col lg:flex-row gap-12">

                {/* Lijeva kolona (Detalji) */}
                <div className="flex-[2]">
                    <div className="pb-8 border-b border-gray-200">
                        <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Cijeli smještaj • Domaćin: {smjestaj.hostName}</h2>
                        <div className="flex gap-4 text-gray-600 font-medium border-l-4 border-blue-600 pl-3">
                            <span>Maks. {smjestaj.guests} gostiju</span>
                            <span>• {smjestaj.bedrooms} spavaćih soba</span>
                            <span>• {smjestaj.beds} kreveta</span>
                            <span>• {smjestaj.baths} kupaonica</span>
                        </div>
                    </div>

                    {/* Highlight feature */}
                    <div className="py-8 border-b border-gray-200 flex flex-col gap-6">
                        <div className="flex gap-4">
                            <svg className="w-8 h-8 text-blue-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                            <div>
                                <h3 className="font-extrabold text-gray-900">Odlična lokacija</h3>
                                <p className="text-gray-500 font-medium">95 % nedavnih gostiju ocijenilo je lokaciju s 5 zvjezdica.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <svg className="w-8 h-8 text-blue-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                            <div>
                                <h3 className="font-extrabold text-gray-900">Besplatno otkazivanje do 48h prije prijave</h3>
                                <p className="text-gray-500 font-medium">Osigurajte vrhunsku fleksibilnost svojih putovanja i rezervirajte bez stresa.</p>
                            </div>
                        </div>
                    </div>

                    {/* Opis */}
                    <div className="py-8 border-b border-gray-200">
                        <h2 className="text-xl font-extrabold text-gray-900 mb-4">O ovom smještaju</h2>
                        <p className="text-gray-700 leading-relaxed font-medium">
                            {smjestaj.description}
                        </p>
                        <button className="font-extrabold text-blue-600 underline mt-4 hover:translate-x-1 transition-transform inline-block">Prikaži više</button>
                    </div>

                    {/* Što nudi ovaj smještaj */}
                    <div className="py-8">
                        <h2 className="text-xl font-extrabold text-gray-900 mb-6">Što nudi ovaj smještaj</h2>
                        <div className="grid grid-cols-2 gap-4">
                            {smjestaj.features.map(feat => (
                                <div key={feat} className="flex items-center gap-3">
                                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span className="font-semibold text-gray-700">{feat}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Desna kolona (Sticky Booking Box) */}
                <div className="flex-1 lg:max-w-md relative">
                    <div className="bg-white rounded-3xl p-6 shadow-2xl border border-gray-200 sticky top-28 drop-shadow-2xl">
                        <div className="flex items-end justify-between mb-6">
                            <span className="text-3xl font-extrabold text-gray-900">{smjestaj.price} € <span className="text-base text-gray-500 font-medium">/ noć</span></span>
                            <div className="flex flex-col items-end">
                                <div className="flex items-center gap-1 font-bold text-sm">
                                    <span className="text-yellow-500">★</span>
                                    <span>{smjestaj.rating}</span>
                                </div>
                                <span className="text-xs text-gray-400 underline">{smjestaj.reviews} recenzija</span>
                            </div>
                        </div>

                        <div className="border border-gray-300 rounded-2xl overflow-hidden mb-4">
                            <div className="flex border-b border-gray-300">
                                <div className="p-3 flex-1 border-r border-gray-300 cursor-pointer hover:bg-gray-50 transition">
                                    <span className="block text-[10px] font-extrabold text-gray-900 uppercase tracking-widest">Prijava</span>
                                    <input type="date" className="w-full bg-transparent p-0 text-sm focus:ring-0 border-none font-medium mt-1 text-gray-600 outline-none" />
                                </div>
                                <div className="p-3 flex-1 cursor-pointer hover:bg-gray-50 transition">
                                    <span className="block text-[10px] font-extrabold text-gray-900 uppercase tracking-widest">Odjava</span>
                                    <input type="date" className="w-full bg-transparent p-0 text-sm focus:ring-0 border-none font-medium mt-1 text-gray-600 outline-none" />
                                </div>
                            </div>
                            <div className="p-3 cursor-pointer hover:bg-gray-50 transition relative group">
                                <span className="block text-[10px] font-extrabold text-gray-900 uppercase tracking-widest">Gosti</span>
                                <div className="flex justify-between items-center mt-1">
                                    <span className="text-sm font-medium text-gray-600">1 gost</span>
                                    <svg className="w-5 h-5 text-gray-500 transform group-hover:-translate-y-0.5 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                                </div>
                            </div>
                        </div>

                        <Link href={`/placanje/${id}`} className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-extrabold py-4 rounded-xl text-lg transition shadow-xl hover:shadow-2xl transform active:scale-[0.98] flex items-center justify-center">
                            Rezerviraj
                        </Link>
                        <p className="text-center text-sm text-gray-500 mt-3 font-medium">Vaša kartica još neće biti terećena</p>

                        <div className="mt-6 flex flex-col gap-3 pb-6 border-b border-gray-200">
                            <div className="flex justify-between text-gray-600 font-medium hover:text-gray-900 transition underline cursor-pointer">
                                <span>{smjestaj.price} € x 5 noćenja</span>
                                <span>{smjestaj.price * 5} €</span>
                            </div>
                            <div className="flex justify-between text-gray-600 font-medium hover:text-gray-900 transition underline cursor-pointer">
                                <span>Naknada za čišćenje</span>
                                <span>40 €</span>
                            </div>
                            <div className="flex justify-between text-gray-600 font-medium hover:text-gray-900 transition underline cursor-pointer">
                                <span>Naknada za uslugu</span>
                                <span>80 €</span>
                            </div>
                        </div>

                        <div className="flex justify-between text-gray-900 font-extrabold text-lg mt-6">
                            <span>Ukupno za platiti</span>
                            <span>{(smjestaj.price * 5) + 40 + 80} €</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

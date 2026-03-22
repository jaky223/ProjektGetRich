import React from "react";

export function Step1PersonalInfo({ formData, handleChange }: any) {
    return (
        <div className="animate-in fade-in slide-in-from-right-8 duration-500">
            <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 mb-2 mt-4">Dobrodošli! 👋</h1>
            <p className="text-gray-500 mb-8 font-medium">Za početak, trebamo nekoliko osnovnih informacija o vama kao iznajmljivaču.</p>
            <div className="space-y-5">
                <div className="flex flex-col sm:flex-row gap-5">
                    <div className="flex-1">
                        <label className="block text-sm font-bold text-gray-700 mb-1.5">Ime</label>
                        <input type="text" name="ime" value={formData.ime} onChange={handleChange} className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition text-gray-800" placeholder="Vaše ime" required />
                    </div>
                    <div className="flex-1">
                        <label className="block text-sm font-bold text-gray-700 mb-1.5">Prezime</label>
                        <input type="text" name="prezime" value={formData.prezime} onChange={handleChange} className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition text-gray-800" placeholder="Vaše prezime" required />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1.5">Email adresa</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition text-gray-800" placeholder="vas.email@primjer.com" required />
                </div>
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1.5">Broj mobitela / telefona</label>
                    <input type="tel" name="telefon" value={formData.telefon} onChange={handleChange} className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition text-gray-800" placeholder="+385 91 234 5678" required />
                </div>
            </div>
        </div>
    );
}

export function Step2BasicInfo({ formData, handleChange }: any) {
    return (
        <div className="animate-in fade-in slide-in-from-right-8 duration-500">
            <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 mb-2">Osnovno o objektu 🏠</h1>
            <p className="text-gray-500 mb-8 font-medium">Upišite naziv objekta, vrstu smještaja i kapacitet.</p>
            <div className="space-y-6">
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1.5">Koji je naziv vašeg objekta?</label>
                    <input type="text" name="nazivSmjestaja" value={formData.nazivSmjestaja} onChange={handleChange} className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition text-gray-800" placeholder="Npr. Apartmani Sunce, Sunset Vila..." required />
                </div>
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1.5">Tip objekta</label>
                    <select name="tipSmjestaja" value={formData.tipSmjestaja} onChange={handleChange} className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition font-medium text-gray-800">
                        <option value="Apartman">Apartman / Stan</option>
                        <option value="Kuća">Kuća za odmor</option>
                        <option value="Vila">Vila</option>
                        <option value="Soba">Soba</option>
                        <option value="Glamping">Glamping / Kampiranje</option>
                        <option value="Brod">Brod / Jahta</option>
                    </select>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">Maks. Gosti</label>
                        <input type="number" min="1" max="50" name="brojGostiju" value={formData.brojGostiju} onChange={handleChange} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none font-bold text-center text-gray-900" required />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1" title="Broj spavaćih soba">Spavaće S.</label>
                        <input type="number" min="0" max="20" name="brojSpavacihSoba" value={formData.brojSpavacihSoba} onChange={handleChange} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none font-bold text-center text-gray-900" required />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">Kreveti</label>
                        <input type="number" min="1" max="50" name="brojKreveta" value={formData.brojKreveta} onChange={handleChange} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none font-bold text-center text-gray-900" required />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">Kupaonice</label>
                        <input type="number" min="1" max="20" name="brojKupaonica" value={formData.brojKupaonica} onChange={handleChange} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none font-bold text-center text-gray-900" required />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1.5">Koliko okvirno planirate naplaćivati noćenje? (U eurima, po noći)</label>
                    <div className="relative">
                        <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 font-bold">€</span>
                        <input type="number" min="1" name="cijenaPoNoci" value={formData.cijenaPoNoci} onChange={handleChange} className="w-full pl-9 p-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none font-bold text-gray-900" placeholder="Npr. 80" required />
                    </div>
                    <p className="text-xs text-gray-400 mt-2 font-medium">Ovo se uvijek može naknadno promijeniti u kalendaru i postaviti različite cijene po sezoni.</p>
                </div>
            </div>
        </div>
    );
}

export function Step3Location({ formData, handleChange }: any) {
    return (
        <div className="animate-in fade-in slide-in-from-right-8 duration-500">
            <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 mb-2">Gdje se nalazite? 📍</h1>
            <p className="text-gray-500 mb-8 font-medium">Vaša točna lokacija će gostima biti dostupna tek nakon potvrđene rezervacije.</p>
            <div className="space-y-5">
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1.5">Država</label>
                    <input type="text" name="drzava" value={formData.drzava} onChange={handleChange} className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition text-gray-800 font-medium" required />
                </div>
                <div className="flex flex-col sm:flex-row gap-5">
                    <div className="flex-[2]">
                        <label className="block text-sm font-bold text-gray-700 mb-1.5">Mjesto / Grad</label>
                        <input type="text" name="grad" value={formData.grad} onChange={handleChange} className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition text-gray-800" placeholder="Npr. Šibenik" required />
                    </div>
                    <div className="flex-1">
                        <label className="block text-sm font-bold text-gray-700 mb-1.5">Poštanski br.</label>
                        <input type="text" name="postanskiBroj" value={formData.postanskiBroj} onChange={handleChange} className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition text-gray-800" placeholder="22000" required />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1.5">Ulica i kućni broj</label>
                    <input type="text" name="ulica" value={formData.ulica} onChange={handleChange} className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition text-gray-800" placeholder="Npr. Kralja Zvonimira 14" required />
                </div>
                <div className="mt-6 border border-gray-200 rounded-2xl overflow-hidden bg-gray-100 h-48 relative flex items-center justify-center">
                    {(formData.grad || formData.ulica) ? (
                        <div className="text-center">
                            <svg className="w-10 h-10 text-red-500 mx-auto mb-2 drop-shadow-md animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            <span className="font-bold text-gray-700 bg-white/80 px-3 py-1 rounded-full text-sm block">Pin postavljen na temelju adrese</span>
                        </div>
                    ) : (
                        <span className="text-gray-400 font-bold text-sm">Mapa će se ažurirati unosom adrese</span>
                    )}
                </div>
            </div>
        </div>
    );
}

export function Step4Details({ formData, handleChange, handleSadrzajiToggle, dostupniSadrzaji }: any) {
    return (
        <div className="animate-in fade-in slide-in-from-right-8 duration-500">
            <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 mb-2">Što sve nudite gostima? ✨</h1>
            <p className="text-gray-500 mb-8 font-medium">Odaberite opremu koju vaš objekt nudi i dodajte kratak atraktivan opis.</p>
            <div className="space-y-6">
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-3">Istaknuti sadržaji (kliknite na one koje imate):</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {dostupniSadrzaji.map((amenity: any) => (
                            <button
                                key={amenity.id}
                                type="button"
                                onClick={() => handleSadrzajiToggle(amenity.id)}
                                className={`flex items-center gap-2 p-3 rounded-xl border-2 transition-all font-bold text-sm ${formData.sadrzaji.includes(amenity.id) ? "border-blue-500 bg-blue-50 text-blue-700 shadow-sm" : "border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50"}`}
                            >
                                <span className="text-xl">{amenity.icon}</span>
                                <span>{amenity.label}</span>
                            </button>
                        ))}
                    </div>
                </div>
                <div className="flex items-center gap-3 p-4 border border-gray-200 rounded-xl bg-gray-50 mt-4">
                    <input type="checkbox" id="kucniLjubimci" name="kucniLjubimci" checked={formData.kucniLjubimci} onChange={handleChange} className="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                    <label htmlFor="kucniLjubimci" className="font-bold text-gray-800 cursor-pointer">
                        Ovaj smještaj je "Pet Friendly" (Dozvoljeni kućni ljubimci) 🐶
                    </label>
                </div>
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1.5">Opis smještaja koji privlači goste</label>
                    <textarea name="opis" value={formData.opis} onChange={handleChange} rows={5} className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition text-gray-800 resize-none" placeholder="Prekrasan apartman s pogledom na more. Idealan za obitelji koja želi uživati u miru i blizini pješčane plaže..." required></textarea>
                </div>
            </div>
        </div>
    );
}

export function Step5Images({ formData, handleImageUpload, removeImage }: any) {
    return (
        <div className="animate-in fade-in slide-in-from-right-8 duration-500">
            <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 mb-2">Pokažite se u najboljem svjetlu 📸</h1>
            <p className="text-gray-500 mb-6 font-medium">Gosti obožavaju fotografije. Smještaji s barem 5 fotografija imaju 40% više rezervacija!</p>
            <div className="space-y-6">
                <div className="relative">
                    <input type="file" multiple accept="image/*" onChange={handleImageUpload} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
                    <div className="w-full border-2 border-dashed border-blue-400 bg-blue-50 rounded-2xl p-10 flex flex-col items-center justify-center text-center transition hover:bg-blue-100">
                        <div className="bg-white p-3 rounded-full text-blue-600 shadow-sm mb-3">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>
                        </div>
                        <h3 className="font-bold text-blue-800 text-lg">Kliknite da biste dodali slike</h3>
                        <p className="text-blue-600 text-sm font-medium mt-1">ili ih povucite i ispustite ovdje. (JPG, PNG)</p>
                    </div>
                </div>
                {formData.slike.length > 0 && (
                    <div className="mt-6">
                        <h4 className="font-bold text-gray-800 mb-3 text-sm uppercase tracking-wider">Odabrane fotografije ({formData.slike.length})</h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {formData.slike.map((src: any, index: number) => (
                                <div key={index} className="relative aspect-[4/3] rounded-xl overflow-hidden group border border-gray-200 shadow-sm">
                                    <img src={src} alt="Upload preview" className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <button type="button" onClick={() => removeImage(index)} className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 shadow-lg transform hover:scale-110 transition">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                        </button>
                                    </div>
                                    {index === 0 && (
                                        <div className="absolute top-2 left-2 bg-white/90 px-2 py-0.5 rounded text-[10px] font-bold text-gray-800 shadow-sm uppercase tracking-wider">Naslovna</div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-xl flex gap-3 text-yellow-800">
                    <svg className="w-6 h-6 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <p className="text-sm font-medium">Ne brinite, ove slike možete urediti, sortirati ili obrisati bilo kada kasnije iz svog upravljačkog profila. Ovo je čisto da vidimo što nudite!</p>
                </div>
            </div>
        </div>
    );
}

export function Step6Success({ formData, router }: any) {
    return (
        <div className="text-center py-12 animate-in zoom-in duration-500 max-w-lg mx-auto">
            <div className="w-24 h-24 bg-gradient-to-br from-green-100 to-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner border border-emerald-200">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
            </div>
            <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 mb-4 tracking-tight">Čestitamo! 🥂</h2>
            <p className="text-gray-600 font-medium mb-10 text-lg leading-relaxed">
                Hvala vam, <span className="font-bold text-gray-900">{formData.ime}</span>! Vaš smještaj <span className="font-bold text-blue-600">"{formData.nazivSmjestaja}"</span> je uspješno poslan na provjeru. Naš tim stručnjaka će pregledati oglas i aktivirati ga unutar 24 sata.
            </p>
            <div className="flex flex-col gap-3">
                <button onClick={() => router.push('/')} className="w-full bg-gray-900 hover:bg-black text-white font-bold py-4 rounded-xl transition shadow-xl transform hover:-translate-y-0.5">
                    Povratak na naslovnicu
                </button>
                <button className="w-full bg-white hover:bg-gray-50 border-2 border-gray-200 text-gray-800 font-bold py-4 rounded-xl transition shadow-sm">
                    Otvori nadzornu ploču (Dashboard)
                </button>
            </div>
        </div>
    );
}

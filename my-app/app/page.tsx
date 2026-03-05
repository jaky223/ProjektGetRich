import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      {/* Navigacijska traka */}
      <nav className="absolute top-0 w-full z-50 py-6 px-8 grid grid-cols-3 items-center text-white">

        {/* LOGO - Lijevo */}
        <div className="flex items-center justify-start">
          <img
            src="/avelio-logo-badge.png"
            alt="Avelio"
            className="h-20 md:h-24 w-auto drop-shadow-2xl transition-transform hover:scale-105 object-contain"
          />
        </div>

        {/* MENI - Sredina (Centrirano) */}
        <div className="hidden md:flex justify-center gap-10 font-semibold tracking-wide drop-shadow-md text-sm lg:text-base">
          <a href="#" className="hover:text-blue-300 transition hover:-translate-y-0.5 duration-300">Smještaj</a>
          <a href="#" className="hover:text-blue-300 transition hover:-translate-y-0.5 duration-300">Letovi</a>
          <a href="#" className="hover:text-blue-300 transition hover:-translate-y-0.5 duration-300">Iskustva</a>
          <a href="#" className="hover:text-blue-300 transition hover:-translate-y-0.5 duration-300">Rent-a-car</a>
        </div>

        {/* GUMBI - Desno */}
        <div className="flex justify-end gap-5 items-center">
          <button className="font-semibold hover:text-blue-300 transition drop-shadow-md hidden sm:block">Prijavi se</button>
          <button className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 text-white px-6 py-2.5 rounded-full font-bold transition shadow-xl border border-white/20 transform hover:scale-105">
            Registracija
          </button>
        </div>
      </nav>

      {/* Hero Sekcija */}
      <div className="relative min-h-[85vh] w-full flex items-center justify-center pt-24 pb-16">
        {/* Pozadinska slika (Četiri godišnja doba Hrvatske) */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-4">
            {/* Proljeće (Zagreb) */}
            <img
              src="https://www.infozagreb.hr/documents/preview_king-tomislav-square-m-gaparovi-5ec4fec35823a.jpg"
              alt="Proljeće"
              className="w-full h-full object-cover transition-transform duration-10000 hover:scale-105"
            />
            {/* Ljeto (Mali Lošinj) */}
            <img
              src="https://putujmojeftino.com/wp-content/uploads/2022/12/Croatia-mali-losinj-by-ilijaaa-dreamstime.jpg"
              alt="Ljeto"
              className="w-full h-full object-cover transition-transform duration-10000 hover:scale-105"
            />
            {/* Jesen (Grožnjan) */}
            <img
              src="https://putnikofer.hr/wp-content/uploads/2023/10/groznjan-istra-1600x900.jpg"
              alt="Jesen"
              className="w-full h-full object-cover transition-transform duration-10000 hover:scale-105"
            />
            {/* Zima (Plitvice) */}
            <img
              src="https://www.camping-simuni.hr/wp-content/uploads/bf-advanced-images/5055/plitvice-1920x0.jpg"
              alt="Zima"
              className="w-full h-full object-cover transition-transform duration-10000 hover:scale-105"
            />
          </div>

          {/* Zatamnjeni sloj (Overlay) kako bi tekst bio čitljiv i kako bi stopio rubove slika! */}
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
          <div className="bg-white p-1.5 rounded-3xl md:rounded-full shadow-xl w-full max-w-4xl flex flex-col md:flex-row items-center divide-y md:divide-y-0 md:divide-x divide-gray-200 relative z-20">
            {/* Lokacija */}
            <div className="flex-1 w-full px-8 py-2 cursor-pointer hover:bg-gray-50 rounded-t-3xl md:rounded-full transition group">
              <label className="block text-[10px] font-extrabold text-gray-800 uppercase tracking-wider mb-0.5 cursor-pointer group-hover:text-blue-600 transition">Gdje idete?</label>
              <input type="text" placeholder="Npr. Zadar, Split, Istra..." className="w-full bg-transparent border-none text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-0 text-sm truncate font-medium" />
            </div>

            {/* Datumi */}
            <div className="flex-1 w-full px-8 py-2 cursor-pointer hover:bg-gray-50 md:rounded-full transition group">
              <label className="block text-[10px] font-extrabold text-gray-800 uppercase tracking-wider mb-0.5 cursor-pointer group-hover:text-blue-600 transition">Kada?</label>
              <input type="text" placeholder="Dodajte datume" className="w-full bg-transparent border-none text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-0 text-sm font-medium" />
            </div>

            {/* Gosti */}
            <div className="flex-1 w-full px-6 py-2 cursor-pointer hover:bg-gray-50 rounded-b-3xl md:rounded-full transition flex flex-col md:flex-row justify-between md:items-center group">
              <div className="px-2 mb-2 md:mb-0">
                <label className="block text-[10px] font-extrabold text-gray-800 uppercase tracking-wider mb-0.5 cursor-pointer group-hover:text-blue-600 transition">Tko ide?</label>
                <input type="text" placeholder="Dodajte goste" className="w-full bg-transparent border-none text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-0 text-sm font-medium" />
              </div>

              {/* Veliki gumb za pretragu */}
              <button className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-xl md:rounded-full transition shadow-lg flex items-center justify-center min-w-[44px] min-h-[44px] md:ml-2 transform hover:scale-105 w-full md:w-auto">
                <svg className="w-5 h-5 hidden md:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span className="md:hidden font-bold">Pretraži</span>
              </button>
            </div>
          </div>

          {/* AI Pretraživanje - Novo */}
          <div className="flex items-center gap-4 my-6 w-full max-w-lg z-20">
            <div className="h-[1px] bg-white/40 flex-1"></div>
            <span className="text-white text-sm font-semibold uppercase tracking-widest drop-shadow-md">Ili isprobajte pametni AI asistent</span>
            <div className="h-[1px] bg-white/40 flex-1"></div>
          </div>

          <div className="w-full max-w-4xl relative z-20 group">
            {/* Animacija sjaja (Glow) */}
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-indigo-500 rounded-3xl md:rounded-full blur-md opacity-40 group-hover:opacity-75 transition duration-500 group-hover:duration-200"></div>

            {/* AI Unos */}
            <div className="relative bg-white p-1.5 rounded-3xl md:rounded-full shadow-2xl flex flex-col md:flex-row items-center border border-white/50">
              <div className="hidden md:flex px-6 items-center justify-center">
                <svg className="w-6 h-6 text-fuchsia-600 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>

              <div className="flex-1 w-full px-6 py-3 md:py-1.5">
                <label className="block text-[10px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600 uppercase tracking-wider mb-0.5 cursor-pointer">Opišite svoj savršen odmor u jednoj rečenici</label>
                <input
                  type="text"
                  placeholder="Npr. 'Želim u Dalmaciju s dvoje djece, apartman blizu pješčane plaže...'"
                  className="w-full bg-transparent border-none text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-0 text-sm md:text-base font-medium"
                />
              </div>

              {/* AI Gumb */}
              <button className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white px-8 py-3 rounded-xl md:rounded-full transition shadow-lg flex items-center justify-center font-bold tracking-wide transform hover:scale-105 w-full md:w-auto mt-2 md:mt-0 gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Pronađi s AI
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Popularne Destinacije - Prikaz kartica smještaja */}
      <div className="max-w-7xl mx-auto w-full px-4 py-24 z-10 relative bg-gray-50">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-2 tracking-tight">Popularne destinacije u Hrvatskoj</h2>
            <p className="text-gray-500 text-lg">Inspirirajte se za vaše sljedeće putovanje</p>
          </div>
          <button className="text-blue-600 font-bold hover:text-blue-800 transition hidden sm:block">Prikaži sve →</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Kartica 1 */}
          <div className="group cursor-pointer rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 bg-white border border-gray-100">
            <div className="aspect-[4/3] w-full relative overflow-hidden">
              <img src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSbvZV0-UgDwVobO5y057pQumcyP9t-J7Wn69MJgYMpGIsvMRpKb1OWRAdTCkjk2Phs6qQ3HwYQhbHhDeKNy4Lqjxw&s=19" alt="Dubrovnik" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
                <span className="text-sm font-bold text-gray-900">⭐ 4.9</span>
              </div>
            </div>
            <div className="p-5">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-bold text-xl text-gray-900">Dubrovnik</h3>
              </div>
              <p className="text-gray-500 text-sm mb-3">Vile s privatnim bazenom i pogledom na more</p>
              <div className="flex justify-between items-center text-sm border-t border-gray-100 pt-3">
                <span className="text-gray-500 font-medium">450+ smještaja</span>
                <span className="font-bold text-blue-600">Od 120€ / noć</span>
              </div>
            </div>
          </div>

          {/* Kartica 2 */}
          <div className="group cursor-pointer rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 bg-white border border-gray-100">
            <div className="aspect-[4/3] w-full relative overflow-hidden">
              <img src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSgmfyY9H5y_sXNwuz4Nel_LAV9G94lGov8NLiIUm_uN-jf1xh0ogjpfizta10fQ4xcl6IQzMTNdTk44jk-Oo87Ae8&s=19" alt="Split" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
                <span className="text-sm font-bold text-gray-900">⭐ 4.8</span>
              </div>
            </div>
            <div className="p-5">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-bold text-xl text-gray-900">Split</h3>
              </div>
              <p className="text-gray-500 text-sm mb-3">Apartmani u samom srcu Dioklecijanove palače</p>
              <div className="flex justify-between items-center text-sm border-t border-gray-100 pt-3">
                <span className="text-gray-500 font-medium">320+ smještaja</span>
                <span className="font-bold text-blue-600">Od 80€ / noć</span>
              </div>
            </div>
          </div>

          {/* Kartica 3 */}
          <div className="group cursor-pointer rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 bg-white border border-gray-100">
            <div className="aspect-[4/3] w-full relative overflow-hidden">
              <img src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSXDH0fGLQEiNGmmyHB9tQiG2Zp8noeHbS3snarYVAf3c1gwUdbJ_Ic4Aq-1AXWS3bODy2VGJKvDyYHwj8MjpBOCxk&s=19" alt="Rovinj" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
                <span className="text-sm font-bold text-gray-900">⭐ 4.9</span>
              </div>
            </div>
            <div className="p-5">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-bold text-xl text-gray-900">Rovinj</h3>
              </div>
              <p className="text-gray-500 text-sm mb-3">Luksuzni smještaji u autentičnom Istarskom stilu</p>
              <div className="flex justify-between items-center text-sm border-t border-gray-100 pt-3">
                <span className="text-gray-500 font-medium">210+ smještaja</span>
                <span className="font-bold text-blue-600">Od 150€ / noć</span>
              </div>
            </div>
          </div>

          {/* Kartica 4 */}
          <div className="group cursor-pointer rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 bg-white border border-gray-100">
            <div className="aspect-[4/3] w-full relative overflow-hidden">
              <img src="https://lh3.googleusercontent.com/gps-cs-s/AHVAwep80cDORxceOru7jDNBroOErPIU42SWm5I-hxzBF5uXmeUASdMDxyALrY9KTkZtt9MxujzCTf6nEbqqqbHCgz7Y8eKhb015SPuRblugeqcgfQfQopbwJOH0occDQYqqfH5FI2xz=w675-h390-n-k-no" alt="Zadar" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
                <span className="text-sm font-bold text-gray-900">⭐ 4.7</span>
              </div>
            </div>
            <div className="p-5">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-bold text-xl text-gray-900">Zadar</h3>
              </div>
              <p className="text-gray-500 text-sm mb-3">Balkoni s pogledom na naš slavni najljepši zalazak sunca</p>
              <div className="flex justify-between items-center text-sm border-t border-gray-100 pt-3">
                <span className="text-gray-500 font-medium">280+ smještaja</span>
                <span className="font-bold text-blue-600">Od 90€ / noć</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

export default function PopularDestinations() {
  return (
    <div className="max-w-7xl mx-auto w-full px-4 py-24 z-10 relative bg-gray-50">
      <div className="flex justify-between items-end mb-10">
        <div>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-2 tracking-tight">Popularne destinacije u Hrvatskoj</h2>
          <p className="text-gray-500 text-lg">Inspirirajte se za vaše sljedeće putovanje</p>
        </div>
        <button className="text-blue-600 font-bold hover:text-blue-800 transition hidden sm:block">Prikaži sve →</button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <DestinationCard 
           image="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSbvZV0-UgDwVobO5y057pQumcyP9t-J7Wn69MJgYMpGIsvMRpKb1OWRAdTCkjk2Phs6qQ3HwYQhbHhDeKNy4Lqjxw&s=19" 
           title="Dubrovnik" 
           description="Vile s privatnim bazenom i pogledom na more" 
           count="450+" price="120€" rating="4.9" />
        <DestinationCard 
           image="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSgmfyY9H5y_sXNwuz4Nel_LAV9G94lGov8NLiIUm_uN-jf1xh0ogjpfizta10fQ4xcl6IQzMTNdTk44jk-Oo87Ae8&s=19" 
           title="Split" 
           description="Apartmani u samom srcu Dioklecijanove palače" 
           count="320+" price="80€" rating="4.8" />
        <DestinationCard 
           image="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSXDH0fGLQEiNGmmyHB9tQiG2Zp8noeHbS3snarYVAf3c1gwUdbJ_Ic4Aq-1AXWS3bODy2VGJKvDyYHwj8MjpBOCxk&s=19" 
           title="Rovinj" 
           description="Luksuzni smještaji u autentičnom Istarskom stilu" 
           count="210+" price="150€" rating="4.9" />
        <DestinationCard 
           image="https://lh3.googleusercontent.com/gps-cs-s/AHVAwep80cDORxceOru7jDNBroOErPIU42SWm5I-hxzBF5uXmeUASdMDxyALrY9KTkZtt9MxujzCTf6nEbqqqbHCgz7Y8eKhb015SPuRblugeqcgfQfQopbwJOH0occDQYqqfH5FI2xz=w675-h390-n-k-no" 
           title="Zadar" 
           description="Balkoni s pogledom na slavni zadarski zalazak" 
           count="280+" price="90€" rating="4.7" />
      </div>
    </div>
  );
}

function DestinationCard({ image, title, description, count, price, rating }: { image: string, title: string, description: string, count: string, price: string, rating: string }) {
  return (
    <div className="group cursor-pointer rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 bg-white border border-gray-100">
      <div className="aspect-[4/3] w-full relative overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
          <span className="text-sm font-bold text-gray-900">⭐ {rating}</span>
        </div>
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-1">
          <h3 className="font-bold text-xl text-gray-900">{title}</h3>
        </div>
        <p className="text-gray-500 text-sm mb-3 line-clamp-2">{description}</p>
        <div className="flex justify-between items-center text-sm border-t border-gray-100 pt-3">
          <span className="text-gray-500 font-medium">{count} smještaja</span>
          <span className="font-bold text-blue-600">Od {price} / noć</span>
        </div>
      </div>
    </div>
  );
}

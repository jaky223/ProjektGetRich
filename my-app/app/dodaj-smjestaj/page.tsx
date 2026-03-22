"use client";

import { useRouter } from "next/navigation";
import { useAddAccommodation } from "@/hooks/useAddAccommodation";
import { 
    Step1PersonalInfo, 
    Step2BasicInfo, 
    Step3Location, 
    Step4Details, 
    Step5Images, 
    Step6Success 
} from "@/components/features/add-accommodation/WizardSteps";

const dostupniSadrzaji = [
    { id: "wifi", label: "Besplatan Wi-Fi", icon: "🌐" },
    { id: "klima", label: "Klima uređaj", icon: "❄️" },
    { id: "bazen", label: "Bazen", icon: "🏊" },
    { id: "parking", label: "Besplatan parking", icon: "🚗" },
    { id: "kuhinja", label: "Kuhinja", icon: "🍳" },
    { id: "perilica", label: "Perilica rublja", icon: "🧺" },
    { id: "tv", label: "TV ravnog ekrana", icon: "📺" },
    { id: "balkon", label: "Balkon ili terasa", icon: "☀️" },
    { id: "rostilj", label: "Roštilj", icon: "🥩" },
    { id: "pogled_more", label: "Pogled na more", icon: "🌊" },
    { id: "vrt", label: "Vrt/Dvorište", icon: "🌳" },
    { id: "grijanje", label: "Grijanje", icon: "🔥" },
];

export default function DodajSmjestaj() {
    const router = useRouter();
    const { step, isSubmitting, formData, actions } = useAddAccommodation();
    const totalSteps = 5;

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-violet-50 flex flex-col font-sans">
            <nav className="w-full bg-white/80 backdrop-blur-md shadow-sm py-4 px-8 flex justify-between items-center sticky top-0 z-50 border-b border-blue-100/50">
                <div className="flex items-center cursor-pointer" onClick={() => router.push('/')}>
                    <img src="/avelio-logo-badge.png" alt="Avelio" className="h-10 md:h-12 w-auto object-contain" />
                </div>
                <button onClick={() => router.push('/')} className="text-gray-500 hover:text-red-600 font-bold transition flex items-center gap-2">
                    <span className="hidden sm:inline">Odustani od objave</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </nav>

            {step < 6 && (
                <div className="w-full bg-white/50 backdrop-blur-sm border-b border-violet-100/50">
                    <div className="max-w-4xl mx-auto px-4 py-4 sm:py-6">
                        <div className="flex justify-between text-xs font-extrabold text-violet-600 mb-2 uppercase tracking-wider">
                            <span>Korak {step}</span>
                            <span>Od {totalSteps}</span>
                        </div>
                        <div className="w-full h-3 bg-violet-100/50 rounded-full overflow-hidden shadow-inner border border-violet-100/50">
                            <div
                                className="h-full bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500 rounded-full transition-all duration-500 ease-out relative shadow-[0_0_10px_rgba(139,92,246,0.3)]"
                                style={{ width: `${(step / totalSteps) * 100}%` }}
                            ></div>
                        </div>
                    </div>
                </div>
            )}

            <div className="flex-1 w-full max-w-3xl mx-auto p-4 sm:p-8 mb-12 relative mt-4">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-violet-400 to-fuchsia-400 rounded-[2.5rem] blur-2xl opacity-20 pointer-events-none"></div>

                <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/60 p-6 sm:p-10">
                    {step < 6 && (
                        <button onClick={step === 1 ? () => router.push('/') : actions.prevStep} className="mb-6 text-sm text-gray-500 hover:text-gray-900 flex items-center gap-1.5 font-bold transition bg-gray-50 hover:bg-gray-100 px-3 py-1.5 rounded-lg w-fit">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                            {step === 1 ? "Povratak na naslovnicu" : "Nazad"}
                        </button>
                    )}

                    <form onSubmit={step === 5 ? actions.handleSubmit : (e) => { e.preventDefault(); actions.nextStep(); }}>
                        {step === 1 && <Step1PersonalInfo formData={formData} handleChange={actions.handleChange} />}
                        {step === 2 && <Step2BasicInfo formData={formData} handleChange={actions.handleChange} />}
                        {step === 3 && <Step3Location formData={formData} handleChange={actions.handleChange} />}
                        {step === 4 && <Step4Details formData={formData} handleChange={actions.handleChange} handleSadrzajiToggle={actions.handleSadrzajiToggle} dostupniSadrzaji={dostupniSadrzaji} />}
                        {step === 5 && <Step5Images formData={formData} handleImageUpload={actions.handleImageUpload} removeImage={actions.removeImage} />}

                        {step < 6 && (
                            <div className="mt-10 pt-6 border-t border-gray-100 flex justify-end">
                                <button
                                    type="submit"
                                    disabled={isSubmitting || (step === 5 && formData.slike.length === 0)}
                                    className={`bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-600 hover:from-blue-700 hover:via-violet-700 hover:to-fuchsia-700 text-white font-bold py-3.5 px-8 rounded-xl shadow-[0_10px_20px_rgba(139,92,246,0.2)] hover:shadow-[0_15px_25px_rgba(139,92,246,0.3)] transition transform hover:-translate-y-0.5 flex items-center gap-2 ${(isSubmitting || (step === 5 && formData.slike.length === 0)) ? 'opacity-70 cursor-not-allowed' : ''}`}
                                >
                                    {isSubmitting ? (
                                        <>Obrada podataka...</>
                                    ) : step === 5 ? (
                                        <>
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                                            Objavi smještaj
                                        </>
                                    ) : (
                                        <>
                                            Sljedeći korak
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                        </>
                                    )}
                                </button>
                            </div>
                        )}
                    </form>

                    {step === 6 && <Step6Success formData={formData} router={router} />}
                </div>
            </div>
        </div>
    );
}

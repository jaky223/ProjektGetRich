"use client";

import { useAddAccommodation } from "@/hooks/useAddAccommodation";
import { 
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

interface AddAccommodationWizardProps {
    onCancel: () => void;
    onComplete: () => void;
    username: string;
}

export default function AddAccommodationWizard({ onCancel, onComplete, username }: AddAccommodationWizardProps) {
    const { step, isSubmitting, formData, actions } = useAddAccommodation();
    const totalSteps = 4;

    // We'll pass a custom router mock to Step6Success so we don't navigate away
    const mockRouter = {
        push: (path: string) => {
            if (path === '/') {
                onComplete();
            }
        }
    } as any;

    return (
        <div className="flex flex-col h-full bg-white animate-in slide-in-from-right-4 fade-in duration-500 rounded-2xl relative">
            {/* Header Wizard progress */}
            {step < 5 && (
                <div className="w-full mb-6">
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center gap-3">
                            <button type="button" onClick={onCancel} className="text-gray-400 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                            </button>
                            <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">Objava smještaja</h2>
                        </div>
                        <div className="text-xs font-extrabold text-violet-600 uppercase tracking-wider bg-violet-50 px-3 py-1.5 rounded-full border border-violet-100">
                            Korak {step} / {totalSteps}
                        </div>
                    </div>
                    <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden border border-gray-200">
                        <div
                            className="h-full bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500 rounded-full transition-all duration-500 ease-out"
                            style={{ width: `${(step / totalSteps) * 100}%` }}
                        ></div>
                    </div>
                </div>
            )}

            <div className="flex-1 w-full max-w-2xl mx-auto py-2 pb-20">
                <div className="relative bg-white rounded-3xl p-2 sm:p-4">
                    {step < 5 && step > 1 && (
                         <button onClick={actions.prevStep} type="button" className="mb-6 text-sm text-gray-500 hover:text-gray-900 flex items-center gap-1.5 font-bold transition bg-gray-50 hover:bg-gray-100 px-3 py-1.5 rounded-lg w-fit">
                             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                             Nazad
                         </button>
                    )}

                    <form onSubmit={step === 4 ? (e) => actions.handleSubmit(e, username) : (e) => { e.preventDefault(); actions.nextStep(); }}>
                        {step === 1 && <Step2BasicInfo formData={formData} handleChange={actions.handleChange} />}
                        {step === 2 && <Step3Location formData={formData} handleChange={actions.handleChange} />}
                        {step === 3 && <Step4Details formData={formData} handleChange={actions.handleChange} handleSadrzajiToggle={actions.handleSadrzajiToggle} dostupniSadrzaji={dostupniSadrzaji} />}
                        {step === 4 && <Step5Images formData={formData} handleImageUpload={actions.handleImageUpload} removeImage={actions.removeImage} />}

                        {step < 5 && (
                            <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between items-center">
                                <button type="button" onClick={onCancel} className="text-gray-500 hover:text-red-500 font-bold px-4 py-2 transition">
                                    Odustani
                                </button>
                                <button
                                    type="submit"
                                    disabled={isSubmitting || (step === 4 && formData.slike.length === 0)}
                                    className={`bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white font-bold py-3.5 px-8 rounded-xl shadow-lg transition transform hover:-translate-y-0.5 flex items-center gap-2 ${(isSubmitting || (step === 4 && formData.slike.length === 0)) ? 'opacity-70 cursor-not-allowed' : ''}`}
                                >
                                    {isSubmitting ? (
                                        <>Obrada podataka...</>
                                    ) : step === 4 ? (
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

                    {step === 5 && <Step6Success formData={formData} router={mockRouter} />}
                </div>
            </div>
        </div>
    );
}

import { useState } from "react";

export function useAddAccommodation() {
    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [formData, setFormData] = useState({
        // Korak 1
        ime: "",
        prezime: "",
        email: "",
        telefon: "",
        // Korak 2
        nazivSmjestaja: "",
        tipSmjestaja: "Apartman",
        brojGostiju: "2",
        brojSpavacihSoba: "1",
        brojKreveta: "1",
        brojKupaonica: "1",
        cijenaPoNoci: "",
        // Korak 3
        drzava: "Hrvatska",
        grad: "",
        postanskiBroj: "",
        ulica: "",
        // Korak 4
        opis: "",
        sadrzaji: [] as string[],
        kucniLjubimci: false,
        // Korak 5
        slike: [] as string[],
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        if (type === 'checkbox') {
            const checked = (e.target as HTMLInputElement).checked;
            setFormData(prev => ({ ...prev, [name]: checked }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSadrzajiToggle = (amenity: string) => {
        setFormData(prev => {
            const exists = prev.sadrzaji.includes(amenity);
            if (exists) {
                return { ...prev, sadrzaji: prev.sadrzaji.filter(a => a !== amenity) };
            } else {
                return { ...prev, sadrzaji: [...prev.sadrzaji, amenity] };
            }
        });
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const newImages = Array.from(e.target.files).map(file => URL.createObjectURL(file));
            setFormData(prev => ({
                ...prev,
                slike: [...prev.slike, ...newImages]
            }));
        }
    };

    const removeImage = (indexToRemove: number) => {
        setFormData(prev => ({
            ...prev,
            slike: prev.slike.filter((_, index) => index !== indexToRemove)
        }));
    };

    const nextStep = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setStep(s => s + 1);
    };

    const prevStep = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setStep(s => s - 1);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setStep(6); 
        }, 2000);
    };

    return {
        step,
        isSubmitting,
        formData,
        actions: { handleChange, handleSadrzajiToggle, handleImageUpload, removeImage, nextStep, prevStep, handleSubmit, setStep }
    };
}

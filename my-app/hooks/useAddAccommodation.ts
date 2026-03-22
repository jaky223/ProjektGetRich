import { useState } from "react";

export interface AccommodationImage {
    file: File;
    previewUrl: string;
}

export function useAddAccommodation() {
    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [formData, setFormData] = useState({
        ime: "",
        prezime: "",
        email: "",
        telefon: "",
        nazivSmjestaja: "",
        tipSmjestaja: "Apartman",
        brojGostiju: "2",
        brojSpavacihSoba: "1",
        brojKreveta: "1",
        brojKupaonica: "1",
        cijenaPoNoci: "",
        drzava: "Hrvatska",
        grad: "",
        postanskiBroj: "",
        ulica: "",
        opis: "",
        sadrzaji: [] as string[],
        kucniLjubimci: false,
        slike: [] as AccommodationImage[],
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
            const newImages = Array.from(e.target.files).map(file => ({
                file,
                previewUrl: URL.createObjectURL(file)
            }));
            setFormData(prev => ({
                ...prev,
                slike: [...prev.slike, ...newImages]
            }));
        }
    };

    const removeImage = (indexToRemove: number) => {
        setFormData(prev => {
            const imgToRemove = prev.slike[indexToRemove];
            if (imgToRemove) URL.revokeObjectURL(imgToRemove.previewUrl);
            return {
                ...prev,
                slike: prev.slike.filter((_, index) => index !== indexToRemove)
            };
        });
    };

    const nextStep = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setStep(s => s + 1);
    };

    const prevStep = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setStep(s => s - 1);
    };

    const handleSubmit = async (e: React.FormEvent, username: string) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            const data = new FormData();
            
            // Bundle all metadata into a single JSON object
            const metadata = {
                username,
                title: formData.nazivSmjestaja,
                type: formData.tipSmjestaja,
                guests: formData.brojGostiju,
                bedrooms: formData.brojSpavacihSoba,
                beds: formData.brojKreveta,
                bathrooms: formData.brojKupaonica,
                pricePerNight: formData.cijenaPoNoci,
                country: formData.drzava,
                city: formData.grad,
                postalCode: formData.postanskiBroj,
                street: formData.ulica,
                description: formData.opis,
                petsAllowed: formData.kucniLjubimci,
                amenities: formData.sadrzaji
            };

            // Add the JSON part with explicitly set Content-Type
            const jsonBlob = new Blob([JSON.stringify(metadata)], { type: 'application/json' });
            data.append("data", jsonBlob);
            
            // Add images as separate parts (but now many fewer parts in total!)
            formData.slike.forEach(img => {
                data.append("images", img.file);
            });

            const res = await fetch("http://localhost:8080/api/accommodations", {
                method: "POST",
                body: data
            });

            console.log(res);

            if (!res.ok) {
                throw new Error("Greška prilikom objave smještaja");
            }

            window.scrollTo({ top: 0, behavior: 'smooth' });
            setStep(5);
        } catch (error) {
            console.error(error);
            alert("Došlo je do pogreške prilikom objave. Molimo pokušajte ponovno.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return {
        step,
        isSubmitting,
        formData,
        actions: { handleChange, handleSadrzajiToggle, handleImageUpload, removeImage, nextStep, prevStep, handleSubmit, setStep }
    };
}

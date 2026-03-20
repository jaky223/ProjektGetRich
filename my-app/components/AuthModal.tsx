"use client";

import { useState, useEffect } from "react";
import GoogleAuthButton from "./GoogleAuthButton";

interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
    onLoginSuccess: (username: string) => void;
    initialView?: "login" | "register";
}

export default function AuthModal({ isOpen, onClose, onLoginSuccess, initialView = "login" }: AuthModalProps) {
    const [isLoginView, setIsLoginView] = useState(initialView === "login");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (isOpen) {
            setIsLoginView(initialView === "login");
            setError(null);
        }
    }, [isOpen, initialView]);

    // Form states
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [isHost, setIsHost] = useState(false);

    if (!isOpen) return null;

    const handleGoogleSuccess = async (credential: string) => {
        setIsLoading(true);
        setError(null);

        const baseUrl = "http://localhost:8080/api/users";
        const endpoint = isLoginView ? "/login/google" : "/register/google";

        try {
            const response = await fetch(`${baseUrl}${endpoint}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ token: credential }),
            });

            if (!response.ok) {
                let errorData = "Došlo je do greške prilikom Google prijave.";
                try {
                    const body = await response.text();
                    if (body) errorData = body;
                } catch { }
                throw new Error(errorData);
            }

            let data;
            const contentType = response.headers.get("content-type");
            if (contentType && contentType.includes("application/json")) {
                data = await response.json();
            } else {
                data = await response.text(); // Because backend mock returns just a map stringified maybe? Text is safer fallback.
            }

            // Get a logical username or fallback
            // In a real app, backend decodes Google JWT, registers/logs in user, returns info
            const userName = data?.firstName || data?.username || "Google Korisnik";
            
            onLoginSuccess(userName);
            onClose();

        } catch (err: any) {
            setError(err.message || "Pogreška u komunikaciji sa serverom (Google).");
        } finally {
            setIsLoading(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        const baseUrl = "http://localhost:8080/api/users";
        const endpoint = isLoginView ? "/login/classic" : "/register/classic";

        // Formatting HTML date input (YYYY-MM-DD) to expected backend format (DD-MM-YYYY)
        let formattedDob = dateOfBirth;
        if (dateOfBirth) {
            try {
                // dateOfBirth from <input type="date"> is typically "YYYY-MM-DD"
                const dateObj = new Date(dateOfBirth);
                if (!isNaN(dateObj.getTime())) {
                    const day = String(dateObj.getDate()).padStart(2, '0');
                    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
                    const year = dateObj.getFullYear();
                    formattedDob = `${day}-${month}-${year}`;
                }
            } catch (e) {
                // fallback to original if parsing fails
            }
        }

        // Construct request body based on the DTO map
        const payload = isLoginView
            ? { username, password, email }
            : { username, password, email, firstName, lastName, dateOfBirth: formattedDob, phoneNumber };

        try {
            const response = await fetch(`${baseUrl}${endpoint}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                let errorData = "Došlo je do greške prilikom prijave/registracije.";
                try {
                    const body = await response.text();
                    if (body) errorData = body;
                } catch { }
                throw new Error(errorData);
            }

            let data;
            const contentType = response.headers.get("content-type");
            if (contentType && contentType.includes("application/json")) {
                data = await response.json();
            } else {
                data = await response.text();
            }

            // Simulating a successful login and saving username to callback
            // Depending on the actual backend implementation, it might return token or user details map
            const actualUsername = data?.firstName || username || (typeof data === 'string' ? username : "Korisnik");
            onLoginSuccess(actualUsername);
            onClose(); // Hide modal on success

        } catch (err: any) {
            setError(err.message || "Pogreška u komunikaciji sa serverom.");
        } finally {
            setIsLoading(false);
        }
    };

    const toggleView = () => {
        setIsLoginView(!isLoginView);
        setError(null);
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 sm:p-6 animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md max-h-[95vh] flex flex-col overflow-hidden relative border border-white/20">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-700 hover:text-gray-900 bg-white/80 hover:bg-white p-2 rounded-full transition z-10 shadow-sm border border-gray-200"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Header */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 sm:p-8 text-white text-center shrink-0 relative shadow-md">
                    <h2 className="text-3xl font-extrabold tracking-tight">
                        {isLoginView ? "Dobrodošli natrag" : "Pridruži se Avelio"}
                    </h2>
                    <p className="text-blue-200 text-sm mt-2 font-medium">
                        {isLoginView ? "Prijavite se za pristup vašem profilu." : "Kreirajte račun za brže i lakše rezervacije."}
                    </p>
                </div>

                {/* Form Content */}
                <div className="p-6 sm:p-8 overflow-y-auto">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                        {/* Error message */}
                        {error && (
                            <div className="bg-red-50 text-red-600 p-3 rounded-xl text-sm font-medium border border-red-100 text-center animate-pulse">
                                {error}
                            </div>
                        )}

                        {/* Inputs based on Registration vs Login */}
                        {!isLoginView && (
                            <div className="flex gap-4">
                                <input
                                    type="text"
                                    placeholder="Ime"
                                    required
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    className="w-1/2 p-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition text-gray-800 shadow-sm"
                                />
                                <input
                                    type="text"
                                    placeholder="Prezime"
                                    required
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    className="w-1/2 p-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition text-gray-800 shadow-sm"
                                />
                            </div>
                        )}

                        <input
                            type="text"
                            placeholder="Korisničko ime"
                            required
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition text-gray-800 shadow-sm"
                        />

                        {!isLoginView && (
                            <input
                                type="email"
                                placeholder="Email adresa"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition text-gray-800 shadow-sm"
                            />
                        )}

                        <input
                            type="password"
                            placeholder="Lozinka"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition text-gray-800 shadow-sm"
                        />

                        {!isLoginView && (
                            <>
                                <input
                                    type="date"
                                    placeholder="Datum rođenja (DD-MM-YYYY)"
                                    title="Datum rođenja"
                                    value={dateOfBirth}
                                    onChange={(e) => setDateOfBirth(e.target.value)}
                                    className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition text-gray-800 shadow-sm text-sm"
                                />
                                <input
                                    type="tel"
                                    placeholder="Broj mobitela"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition text-gray-800 shadow-sm"
                                />
                            </>
                        )}

                        {isLoginView && (
                            <div className="flex justify-end mt-[-8px]">
                                <a href="#" className="text-xs text-blue-600 font-semibold hover:text-blue-800 hover:underline transition">
                                    Zaboravljena lozinka?
                                </a>
                            </div>
                        )}

                        {/* Submit btn */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`w-full py-4 mt-2 rounded-xl text-white font-bold tracking-wide transition transform bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 shadow-lg hover:shadow-xl hover:-translate-y-0.5 ${isLoading ? "opacity-70 cursor-not-allowed" : ""}`}
                        >
                            {isLoading ? "Učitavanje..." : (isLoginView ? "Prijavi se" : "Registriraj me")}
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="flex items-center gap-4 my-6">
                        <div className="h-[1px] bg-gray-200 flex-1"></div>
                        <span className="text-gray-400 text-xs font-semibold uppercase tracking-widest">ili</span>
                        <div className="h-[1px] bg-gray-200 flex-1"></div>
                    </div>

                    {/* Google Login Component */}
                    <div className="w-full flex justify-center">
                        <GoogleAuthButton 
                            onSuccess={handleGoogleSuccess}
                            onError={() => setError("Google prijava/registracija nije uspjela.")}
                        />
                    </div>

                    {/* Toggle Register/Login */}
                    <p className="text-center text-sm font-medium text-gray-600 mt-6">
                        {isLoginView ? "Nemate račun?" : "Već imate račun?"}{" "}
                        <button
                            type="button"
                            onClick={toggleView}
                            className="text-blue-600 font-bold hover:underline"
                        >
                            {isLoginView ? "Registrirajte se" : "Prijavite se"}
                        </button>
                    </p>

                </div>
            </div>
        </div>
    );
}

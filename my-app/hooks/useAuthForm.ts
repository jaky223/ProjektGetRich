import { useState, useCallback, useEffect } from "react";
import { authService } from "../services/authService";

export function useAuthForm(initialView: "login" | "register", onLoginSuccess: (username: string) => void, onClose: () => void, isOpen: boolean) {
    const [isLoginView, setIsLoginView] = useState(initialView === "login");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (isOpen) {
            setIsLoginView(initialView === "login");
            setError(null);
        }
    }, [isOpen, initialView]);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const toggleView = useCallback(() => {
        setIsLoginView((prev) => !prev);
        setError(null);
    }, []);

    const handleGoogleSuccess = async (credential: string) => {
        setIsLoading(true);
        setError(null);

        try {
            const result = await authService.googleAuth(credential, isLoginView);
            
            if (result.isNewUser) {
                setIsLoginView(false);
                if (result.data.email) setEmail(result.data.email);
                if (result.data.firstName) setFirstName(result.data.firstName);
                if (result.data.lastName) setLastName(result.data.lastName);
                if (result.data.email) {
                    setUsername(result.data.email.split('@')[0]);
                }
                setError("Vaš Google račun nije registriran. Molimo dovršite registraciju.");
                return;
            }

            const data = result.data;
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

        let formattedDob = dateOfBirth;
        if (dateOfBirth) {
            try {
                const dateObj = new Date(dateOfBirth);
                if (!isNaN(dateObj.getTime())) {
                    const day = String(dateObj.getDate()).padStart(2, '0');
                    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
                    const year = dateObj.getFullYear();
                    formattedDob = `${day}-${month}-${year}`;
                }
            } catch (e) {}
        }

        const payload = isLoginView
            ? { username, password, email }
            : { username, password, email, firstName, lastName, dateOfBirth: formattedDob, phoneNumber };

        try {
            const data = await authService.classicAuth(payload, isLoginView);
            const actualUsername = data?.firstName || username || (typeof data === 'string' ? username : "Korisnik");
            onLoginSuccess(actualUsername);
            onClose();
        } catch (err: any) {
            setError(err.message || "Pogreška u komunikaciji sa serverom.");
        } finally {
            setIsLoading(false);
        }
    };

    return {
        isLoginView,
        isLoading,
        error,
        form: { username, setUsername, password, setPassword, email, setEmail, firstName, setFirstName, lastName, setLastName, dateOfBirth, setDateOfBirth, phoneNumber, setPhoneNumber },
        actions: { toggleView, handleGoogleSuccess, handleSubmit },
        setError
    };
}

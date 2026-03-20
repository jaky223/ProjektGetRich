"use client";

import { GoogleLogin } from "@react-oauth/google";

interface GoogleAuthButtonProps {
    onSuccess: (credential: string) => void;
    onError?: () => void;
}

export default function GoogleAuthButton({ onSuccess, onError }: GoogleAuthButtonProps) {
    return (
        <div className="flex justify-center w-full">
            <GoogleLogin
                onSuccess={(credentialResponse) => {
                    if (credentialResponse.credential) {
                        onSuccess(credentialResponse.credential);
                    }
                }}
                onError={() => {
                    console.error("Google Login Failed");
                    if (onError) onError();
                }}
                useOneTap
            />
        </div>
    );
}

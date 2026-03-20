"use client";

import { GoogleOAuthProvider } from "@react-oauth/google";

export default function GoogleProvider({ children }: { children: React.ReactNode }) {
  const clientId = "363574513803-dt95rpnkii47oqv3to360es8bgdh9iho.apps.googleusercontent.com";

  return <GoogleOAuthProvider clientId={clientId}>{children}</GoogleOAuthProvider>;
}

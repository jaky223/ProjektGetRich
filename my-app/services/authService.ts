const BASE_API_URL = "http://localhost:8080/api";

export const authService = {
  async googleAuth(credential: string, isLogin: boolean) {
    const endpoint = isLogin ? "/google/auth/login" : "/google/auth/register";
    const response = await fetch(`${BASE_API_URL}${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: credential }),
    });

    if (!response.ok) {
      if (response.status === 404) {
        const data = await response.json();
        return { isNewUser: true, data };
      }
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
      data = await response.text();
    }
    return { isNewUser: false, data };
  },

  async classicAuth(payload: any, isLogin: boolean) {
    const endpoint = isLogin ? "/users/login/classic" : "/users/register/classic";
    const response = await fetch(`${BASE_API_URL}${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      let errorData = "Došlo je do greške prilikom prijave/registracije.";
      try {
        const body = await response.text();
        if (body) {
           try {
             // Handle array of validation errors from GlobalExceptionHandler cleanly
             const parsed = JSON.parse(body);
             if (Array.isArray(parsed)) {
               errorData = parsed.join("\n");
             } else {
               errorData = body;
             }
           } catch {
             errorData = body;
           }
        }
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
    return data;
  }
};

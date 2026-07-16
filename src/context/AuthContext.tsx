"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

// Structure definition for the active user session data
interface UserSession {
  uid: string;
  email: string;
}

// Structure definition for the global context hook values
interface AuthContextType {
  user: UserSession | null;
  loading: boolean;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserSession | null>(null);
  const [loading, setLoading] = useState(true);

  // Queries our hidden local server node to check the active cookie session
  const verifyActiveSession = async () => {
    try {
      const res = await fetch("/api/auth/me");
      if (res.ok) {
        const data = await res.json();
        console.log("verified user is: ", data);
        setUser(data.user);
      } else {
        setUser(null);
      }
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  // Run the session verification handshake immediately on application mount
  useEffect(() => {
    verifyActiveSession();
  }, []);

  // Clears out our secure local cookies and returns user back to access portal
  const logout = async () => {
    try {
      const res = await fetch("/api/auth/logout", { method: "POST" });
      if (res.ok) {
        setUser(null);
        localStorage.removeItem("user_profile");
        window.location.href = "/account";
      }
    } catch (err) {
      console.error("🔒 Session termination handshake failed:", err);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook allowing any page layout or dashboard view to read operator telemetry
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error(
      "useAuth must be wrapped inside an AuthProvider element container.",
    );
  }
  return context;
}

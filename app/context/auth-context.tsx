import React, { createContext, useContext, useEffect, useState } from "react";
import Api from "~/action/api";
import SessionApp from "~/action/session";

interface AuthContextType {
  isAuthenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const login = (token: string) => {
    SessionApp.set("token", token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    SessionApp.clear();
    Api.post(Api.logout, {}, true)
    setIsAuthenticated(false);
  };


  useEffect(() => {
    setIsAuthenticated(!!SessionApp.get("token"))
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook untuk menggunakan AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth harus digunakan dalam AuthProvider");
  }
  return context;
};

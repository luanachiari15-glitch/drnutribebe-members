
import React, { createContext, useContext, useState, useEffect } from 'react';

// NOTA: Para produção, substitua estas funções pelas chamadas reais do Firebase Auth
// Esta implementação simula o comportamento do Firebase para funcionamento imediato.

interface User {
  uid: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, pass: string) => Promise<void>;
  register: (email: string, pass: string) => Promise<void>;
  logout: () => void;
  resetPassword: (email: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula a verificação de token persistente
    const savedUser = localStorage.getItem('nutribebe-user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, pass: string) => {
    setLoading(true);
    // Simulação de delay de rede
    await new Promise(r => setTimeout(r, 800));
    const newUser = { uid: '123', email };
    setUser(newUser);
    localStorage.setItem('nutribebe-user', JSON.stringify(newUser));
    setLoading(false);
  };

  const register = async (email: string, pass: string) => {
    setLoading(true);
    await new Promise(r => setTimeout(r, 800));
    const newUser = { uid: '123', email };
    setUser(newUser);
    localStorage.setItem('nutribebe-user', JSON.stringify(newUser));
    setLoading(false);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('nutribebe-user');
  };

  const resetPassword = async (email: string) => {
    await new Promise(r => setTimeout(r, 800));
    console.log(`Email de recuperação enviado para: ${email}`);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout, resetPassword }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};

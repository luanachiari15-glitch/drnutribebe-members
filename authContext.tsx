
import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  uid: string;
  email: string;
  ip: string;
  verified: boolean;
}

interface AccountData {
  email: string;
  passwordHash: string;
  ip: string;
  failedAttempts: number;
  lockUntil: number | null;
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
    const savedUser = localStorage.getItem('nutribebe-active-session');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const getIP = async () => {
    try {
      const res = await fetch('https://api.ipify.org?format=json');
      const data = await res.json();
      return data.ip;
    } catch {
      return '127.0.0.1'; // Fallback
    }
  };

  const getAccounts = (): AccountData[] => JSON.parse(localStorage.getItem('nutribebe-accounts') || '[]');
  
  const saveAccounts = (accounts: AccountData[]) => {
    localStorage.setItem('nutribebe-accounts', JSON.stringify(accounts));
  };

  const login = async (email: string, pass: string) => {
    setLoading(true);
    await new Promise(r => setTimeout(r, 1000));
    
    const accounts = getAccounts();
    const accountIndex = accounts.findIndex(a => a.email === email);
    
    if (accountIndex === -1) {
      setLoading(false);
      throw new Error('auth.error.invalid');
    }

    const account = accounts[accountIndex];

    // Check lock
    if (account.lockUntil && account.lockUntil > Date.now()) {
      setLoading(false);
      throw new Error('auth.error.locked');
    }

    // Mock Hash Check (simples para o exemplo)
    if (account.passwordHash === `hash_${pass}`) {
      account.failedAttempts = 0;
      account.lockUntil = null;
      saveAccounts(accounts);
      
      const sessionUser = { uid: Math.random().toString(36), email, ip: account.ip, verified: true };
      setUser(sessionUser);
      localStorage.setItem('nutribebe-active-session', JSON.stringify(sessionUser));
    } else {
      account.failedAttempts += 1;
      if (account.failedAttempts >= 5) {
        account.lockUntil = Date.now() + 15 * 60 * 1000; // 15 min lock
      }
      saveAccounts(accounts);
      setLoading(false);
      throw new Error('auth.error.invalid');
    }
    setLoading(false);
  };

  const register = async (email: string, pass: string) => {
    setLoading(true);
    const ip = await getIP();
    await new Promise(r => setTimeout(r, 1200));

    const accounts = getAccounts();
    
    if (accounts.some(a => a.email === email)) {
      setLoading(false);
      throw new Error('auth.error.exists');
    }

    if (accounts.some(a => a.ip === ip)) {
      setLoading(false);
      throw new Error('auth.error.ip_limit');
    }

    const newAccount: AccountData = {
      email,
      passwordHash: `hash_${pass}`,
      ip,
      failedAttempts: 0,
      lockUntil: null
    };

    accounts.push(newAccount);
    saveAccounts(accounts);

    const sessionUser = { uid: Math.random().toString(36), email, ip, verified: false };
    setUser(sessionUser);
    localStorage.setItem('nutribebe-active-session', JSON.stringify(sessionUser));
    setLoading(false);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('nutribebe-active-session');
  };

  const resetPassword = async (email: string) => {
    await new Promise(r => setTimeout(r, 1000));
    const accounts = getAccounts();
    if (!accounts.some(a => a.email === email)) throw new Error('auth.error.not_found');
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

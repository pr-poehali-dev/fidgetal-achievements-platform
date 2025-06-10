import React, { createContext, useContext, useState, ReactNode } from "react";

interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  birthDate?: string;
  city?: string;
  rank: string;
  rating: number;
  level: number;
  currentXP: number;
  nextLevelXP: number;
  achievements: Achievement[];
}

interface Achievement {
  id: number;
  name: string;
  description: string;
  type: string;
  category: string;
  rarity: string;
  xp: number;
  date: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (userData: Partial<User>) => void;
  logout: () => void;
  updateUser: (userData: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (userData: Partial<User>) => {
    const defaultUser: User = {
      id: Date.now().toString(),
      name: userData.name || "Пользователь",
      email: userData.email || "",
      phone: userData.phone,
      birthDate: userData.birthDate,
      city: userData.city,
      rank: "Новичок",
      rating: 1000,
      level: 1,
      currentXP: 0,
      nextLevelXP: 1000,
      achievements: [],
    };
    setUser({ ...defaultUser, ...userData });
  };

  const logout = () => {
    setUser(null);
  };

  const updateUser = (userData: Partial<User>) => {
    if (user) {
      setUser({ ...user, ...userData });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        logout,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export default AuthContext;

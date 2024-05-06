"use client"
import React, { createContext, useState, useContext, useEffect } from 'react';

interface LanguageContextValue {
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
 const [language, setLanguage] = useState('BG'); // default language

useEffect(() => {
  const storedLanguage = typeof window !== 'undefined' ? localStorage.getItem('language') : 'BG';
  if (storedLanguage) {
    setLanguage(storedLanguage);
  }
}, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextValue => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
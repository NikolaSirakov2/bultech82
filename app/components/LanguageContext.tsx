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

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', language);
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
"use client";
import { Dispatch, SetStateAction, createContext, useState } from "react";

interface LanguageContextProviderProps {
  children: React.ReactNode;
}

interface LanguageContextProps {
  language: string;
  setLanguage: Dispatch<SetStateAction<"english" | "portuguese">>;
}

export const LanguageContext = createContext({} as LanguageContextProps);

export const LanguageContextProvider: React.FC<LanguageContextProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<"english" | "portuguese">("english");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

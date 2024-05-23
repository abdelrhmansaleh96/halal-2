// src/shadcn/components/language-context.tsx

import { ReactNode, createContext, useLayoutEffect } from "react";

import { useTranslation } from "react-i18next";

type LanguageContextType = {
  // language: string;
  // setLanguage: (language: string) => void;
};

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const { i18n } = useTranslation();
  // const [language, setLanguage] = useState<string>(i18n.language);

  useLayoutEffect(() => {
    document.body.setAttribute("dir", i18n.dir());
    document.body.setAttribute("lang", i18n.language);
    document.documentElement.setAttribute("lang", i18n.language);
    document.documentElement.setAttribute("dir", i18n.dir());
  }, [i18n.language, i18n.dir()]);

  return <LanguageContext.Provider value={{}}>{children}</LanguageContext.Provider>;
};

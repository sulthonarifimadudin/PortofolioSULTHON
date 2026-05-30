import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { useState, useEffect } from 'react';

export type Language = 'en' | 'id';

interface LangState {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
}

export const useLangStore = create<LangState>()(
  persist(
    (set) => ({
      lang: 'en',
      setLang: (lang) => set({ lang }),
      toggleLang: () =>
        set((state) => ({
          lang: state.lang === 'en' ? 'id' : 'en',
        })),
    }),
    {
      name: 'portfolio-lang',
    }
  )
);

export function useHydratedLangState() {
  const { lang, toggleLang, setLang } = useLangStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return {
    lang: mounted ? lang : 'en',
    toggleLang,
    setLang,
    mounted,
  };
}

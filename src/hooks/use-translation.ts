import { useHydratedLangState } from '@/store/lang-store';
import { en } from '@/locales/en';
import { id } from '@/locales/id';

export function useTranslation() {
  const { lang, toggleLang, setLang } = useHydratedLangState();
  
  const t = lang === 'id' ? id : en;
  
  return { t, lang, toggleLang, setLang };
}

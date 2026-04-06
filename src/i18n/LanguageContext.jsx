import React, { useState, useEffect } from 'react';
import { LanguageContext } from './useLanguage';
import translations from './translations.jsx';

function detectLanguage() {
  const browserLang = navigator.language || navigator.languages?.[0] || '';
  return browserLang.startsWith('pt') ? 'pt' : 'en';
}

const SUPPORTED_LANGS = ['pt', 'en'];

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem('portfolio-lang');
    if (saved === 'pt') return 'pt';
    if (saved === 'en') return 'en';
    return detectLanguage();
  });

  useEffect(() => {
    localStorage.setItem('portfolio-lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const t = translations[lang];
  const toggleLang = () => setLang(prev => (prev === 'pt' ? 'en' : 'pt'));

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

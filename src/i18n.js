import React, { createContext, useContext, useEffect, useState } from "react";
import { content, digits, languages } from "./content";

const LangContext = createContext(null);
const KEY = "arasta-lang";

function initialLang() {
  try {
    const saved = localStorage.getItem(KEY);
    if (languages.some((l) => l.code === saved)) return saved;
  } catch (e) { /* storage blocked: fall back to Sorani */ }
  return "ckb";
}

export function LangProvider({ children }) {
  const [lang, setLang] = useState(initialLang);
  const meta = languages.find((l) => l.code === lang);
  const t = content[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = meta.dir;
    document.title = t.metaTitle;
    try { localStorage.setItem(KEY, lang); } catch (e) { /* ignore */ }
  }, [lang, meta.dir, t.metaTitle]);

  const value = { lang, setLang, t, dir: meta.dir, num: (n) => digits(n, lang) };
  return React.createElement(LangContext.Provider, { value }, children);
}

export const useLang = () => useContext(LangContext);

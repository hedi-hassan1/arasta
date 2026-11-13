import React, { useEffect, useRef, useState } from "react";
import Icon from "./Icon";
import { languages } from "../content";
import { useLang } from "../i18n";

// Language button: shows the current language, opens a small list of the three.
export default function LangSwitch({ dark = false }) {
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const current = languages.find((l) => l.code === lang);

  useEffect(() => {
    const close = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    const esc = (e) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("mousedown", close);
    document.addEventListener("keydown", esc);
    return () => { document.removeEventListener("mousedown", close); document.removeEventListener("keydown", esc); };
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button type="button" onClick={() => setOpen(!open)} aria-haspopup="listbox" aria-expanded={open} aria-label={t.langLabel}
        className={`flex items-center gap-2 rounded-brand border px-3 py-2 font-heading text-sm font-bold transition-colors ${
          dark ? "border-blue-mid text-cream hover:border-accent" : "border-line bg-white text-navy hover:border-accent"}`}>
        <Icon name="europe" size={18} />
        <span>{current.label}</span>
      </button>
      {open && (
        <ul role="listbox" aria-label={t.langLabel}
          className="absolute end-0 z-50 mt-2 w-40 overflow-hidden rounded-brand border border-line bg-white py-1">
          {languages.map((l) => (
            <li key={l.code}>
              <button type="button" role="option" aria-selected={l.code === lang} lang={l.code} dir={l.dir}
                onClick={() => { setLang(l.code); setOpen(false); }}
                className={`flex w-full items-center justify-between gap-2 px-4 py-2.5 text-start font-heading text-sm font-bold ${
                  l.code === lang ? "bg-sand text-navy" : "text-navy hover:bg-cream"}`}>
                {l.label}
                {l.code === lang && <Icon name="check" size={16} strokeWidth={2} className="text-accent-dark" />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

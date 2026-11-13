import React from "react";
import { Link } from "react-router-dom";
import Icon from "./Icon";
import { contact, routes, waLink } from "../content";
import { useLang } from "../i18n";

export default function Footer() {
  const { t, num } = useLang();
  const socials = [
    { name: "instagram", href: contact.instagram, label: t.instagram },
    { name: "facebook", href: contact.facebook, label: t.facebook },
    { name: "tiktok", href: contact.tiktok, label: t.tiktok },
  ];
  return (
    <footer className="mt-28 bg-navy text-mist">
      <div className="container-x grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <img src="/brand/akoi-horizontal-dark.svg" alt={t.brand} className="-m-4 h-28 w-auto" />
          <p className="mt-6 max-w-xs font-heading text-lg font-bold leading-[1.75] text-cream">{t.tagline}</p>
          <div className="mt-6 flex gap-3">
            {socials.map((s) => (
              <a key={s.name} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}
                className="grid h-11 w-11 place-items-center rounded-full border border-blue-mid text-cream transition-colors hover:border-accent hover:text-accent">
                <Icon name={s.name} size={20} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-base font-bold text-cream">{t.footer.pages}</h3>
          <ul className="mt-4 space-y-2">
            {routes.map((to, i) => (<li key={to}><Link to={to} className="hover:text-accent">{t.nav[i]}</Link></li>))}
          </ul>
        </div>

        <div>
          <h3 className="text-base font-bold text-cream">{t.footer.services}</h3>
          <ul className="mt-4 space-y-2">
            {t.services.map((s) => (<li key={s.id}><Link to={`/services#${s.id}`} className="hover:text-accent">{s.title}</Link></li>))}
          </ul>
        </div>

        <div>
          <h3 className="text-base font-bold text-cream">{t.footer.contact}</h3>
          <ul className="mt-4 space-y-3">
            <li><a href={waLink()} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-accent"><Icon name="phone" size={18} /><span className="ltr">{contact.whatsappDisplay}</span></a></li>
            <li><a href={`mailto:${contact.email}`} className="flex items-center gap-2 hover:text-accent"><Icon name="mail" size={18} /><span className="ltr">{contact.email}</span></a></li>
            <li><a href={contact.instagram} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-accent"><Icon name="instagram" size={18} /><span className="ltr">{contact.handle}</span></a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-blue-mid">
        <p className="container-x py-6 text-sm">© {num(new Date().getFullYear())} {t.brand}. {t.footer.rights}</p>
      </div>
    </footer>
  );
}

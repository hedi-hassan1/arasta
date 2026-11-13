import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Icon from "./Icon";
import LangSwitch from "./LangSwitch";
import { routes, waLink } from "../content";
import { useLang } from "../i18n";

export default function NavBar() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => setOpen(false), [pathname]);

  const linkClass = ({ isActive }) =>
    `font-heading text-[15px] font-bold transition-colors ${isActive ? "text-navy" : "text-slate hover:text-navy"}`;

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-cream/95 backdrop-blur">
      <div className="container-x flex h-20 items-center justify-between gap-4">
        <Link to="/" aria-label={t.brand} className="shrink-0">
          <img src="/brand/akoi-horizontal-light.svg" alt={t.brand} className="-my-3 h-[96px] w-auto" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label={t.nav[0]}>
          {routes.map((to, i) => (
            <NavLink key={to} to={to} end className={linkClass}>
              {({ isActive }) => (
                <span className="relative py-2">
                  {t.nav[i]}
                  {isActive && <span className="absolute -bottom-1 start-0 h-1 w-6 rounded-full bg-amber" />}
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LangSwitch />
          <a href={waLink(t.wa.hello)} target="_blank" rel="noreferrer" className="btn-navy hidden px-5 py-2.5 text-sm sm:inline-flex">
            <Icon name="phone" size={18} /> {t.messageUs}
          </a>
          <button type="button" className="rounded-brand p-2 text-navy lg:hidden" onClick={() => setOpen(!open)}
            aria-expanded={open} aria-label={open ? t.menuClose : t.menuOpen}>
            <Icon name={open ? "close" : "menu"} size={28} />
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-line bg-cream lg:hidden">
          <nav className="container-x flex flex-col py-4">
            {routes.map((to, i) => (
              <NavLink key={to} to={to} end
                className={({ isActive }) => `rounded-brand px-3 py-3 font-heading text-lg font-bold ${isActive ? "bg-sand text-navy" : "text-navy"}`}>
                {t.nav[i]}
              </NavLink>
            ))}
            <a href={waLink(t.wa.hello)} target="_blank" rel="noreferrer" className="btn-amber mt-3">
              <Icon name="phone" size={18} /> {t.messageUs}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

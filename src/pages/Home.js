import React from "react";
import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import SectionHead from "../components/SectionHead";
import CTABand from "../components/CTABand";
import { waLink } from "../content";
import { useLang } from "../i18n";

export default function Home() {
  const { t, num } = useLang();
  const h = t.home;
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-cream">
        <div className="container-x grid items-center gap-12 py-20 md:grid-cols-[1.7fr_1fr] md:py-28">
          <div>
            <span className="accent-bar" />
            <p className="mt-5 font-heading text-lg font-bold text-accent">{t.brand}</p>
            <h1 className="mt-2 text-4xl/[1.75] font-extrabold sm:text-5xl/[1.75] lg:text-[56px]/[1.75]">{t.tagline}</h1>
            <p className="mt-6 max-w-xl text-lg text-mist sm:text-xl">{h.heroText}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a className="btn-accent" href={waLink(t.wa.more)} target="_blank" rel="noreferrer">
                <Icon name="phone" size={20} /> {t.messageUs}
              </a>
              <Link className="btn-ghost-dark" to="/services">{t.nav[1]} <Icon name="arrow" size={20} className="ltr:-scale-x-100" /></Link>
            </div>
          </div>
          <div className="hidden justify-center md:flex">
            <img src="/brand/akoi-symbol-dark.svg" alt="" className="w-full max-w-[380px]" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="container-x py-24">
        <SectionHead eyebrow={h.servicesEyebrow} title={h.servicesTitle} text={h.servicesText} />
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {t.services.map((s) => (
            <Link key={s.id} to={`/services#${s.id}`} className="card group flex flex-col p-7 transition-colors hover:border-accent sm:p-8">
              <span className="grid h-14 w-14 place-items-center rounded-brand bg-sand text-navy"><Icon name={s.icon} size={30} /></span>
              <h3 className="mt-5 text-2xl font-bold">{s.title}</h3>
              <p className="mt-2 text-slate">{s.short}</p>
              <span className="mt-6 inline-flex items-center gap-2 font-heading text-sm font-bold text-accent-dark">
                {t.learnMore}
                <Icon name="arrow" size={18} className="transition-transform ltr:-scale-x-100 rtl:group-hover:-translate-x-1 ltr:group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-sand py-24">
        <div className="container-x">
          <SectionHead eyebrow={h.processEyebrow} title={h.processTitle} />
          <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {t.steps.map((st, i) => (
              <li key={st.title} className="card p-7">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-accent font-heading text-xl font-extrabold text-navy">{num(i + 1)}</span>
                <h3 className="mt-5 text-xl font-bold">{st.title}</h3>
                <p className="mt-2 text-slate">{st.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Honesty */}
      <section className="container-x py-24">
        <div className="grid items-center gap-8 rounded-[18px] bg-navy p-8 text-cream sm:p-12 md:grid-cols-[auto_1fr]">
          <span className="grid h-20 w-20 place-items-center rounded-full border-2 border-accent text-accent"><Icon name="shield" size={40} /></span>
          <div>
            <h2 className="text-2xl font-extrabold sm:text-3xl">{h.honestyTitle}</h2>
            <p className="mt-3 max-w-3xl text-lg text-mist">{t.honesty}</p>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}

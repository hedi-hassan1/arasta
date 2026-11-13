import React from "react";
import Icon from "../components/Icon";
import SectionHead from "../components/SectionHead";
import CTABand from "../components/CTABand";
import { waLink } from "../content";
import { useLang } from "../i18n";

export default function Services() {
  const { t } = useLang();
  const p = t.servicesPage;
  return (
    <>
      <section className="bg-navy py-20 text-cream">
        <div className="container-x">
          <SectionHead dark eyebrow={p.eyebrow} title={p.title} text={p.text} />
        </div>
      </section>

      <div className="container-x space-y-6 py-20">
        {t.services.map((s, i) => (
          <article key={s.id} id={s.id} className={`card scroll-mt-28 grid gap-8 p-7 sm:p-10 md:grid-cols-[1fr_1.1fr] ${i % 2 ? "bg-sand" : ""}`}>
            <div>
              <span className="grid h-16 w-16 place-items-center rounded-brand bg-navy text-cream"><Icon name={s.icon} size={34} /></span>
              <h2 className="mt-6 text-3xl font-extrabold">{s.title}</h2>
              <p className="mt-3 text-lg text-slate">{s.intro}</p>
              <a className="btn-navy mt-7" href={waLink(t.wa.about(s.title))} target="_blank" rel="noreferrer">
                <Icon name="phone" size={20} /> {t.askAbout}
              </a>
            </div>
            <ul className="space-y-3 self-center">
              {s.items.map((it) => (
                <li key={it} className="flex items-start gap-3 rounded-brand border border-line bg-white px-5 py-4 font-medium">
                  <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-accent text-navy"><Icon name="check" size={16} strokeWidth={2} /></span>
                  {it}
                </li>
              ))}
            </ul>
          </article>
        ))}

        <p className="rounded-[18px] border border-line bg-white p-6 text-slate">
          <b className="font-heading text-navy">{p.note} </b>{t.honesty}
        </p>
      </div>

      <CTABand />
    </>
  );
}

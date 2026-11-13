import React from "react";
import SectionHead from "../components/SectionHead";
import CTABand from "../components/CTABand";
import { useLang } from "../i18n";

export default function About() {
  const { t } = useLang();
  const a = t.about;
  return (
    <>
      <section className="bg-navy py-20 text-cream">
        <div className="container-x grid items-center gap-12 md:grid-cols-[1.4fr_1fr]">
          <SectionHead dark eyebrow={a.eyebrow} title={a.title} text={a.text} />
          <img src="/brand/arasta-stacked-dark.svg" alt={t.brand} className="mx-auto hidden w-full max-w-[300px] md:block" />
        </div>
      </section>

      <section className="container-x py-24">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <SectionHead eyebrow={a.storyEyebrow} title={a.storyTitle} />
            <div className="mt-6 space-y-4 text-lg text-slate">
              {a.story.map((p) => <p key={p}>{p}</p>)}
            </div>
          </div>
          <div className="card self-start p-8">
            <span className="accent-bar" />
            <p className="mt-4 font-heading text-xl font-bold">{a.founderText}</p>
          </div>
        </div>
      </section>

      <section className="bg-sand py-24">
        <div className="container-x">
          <SectionHead eyebrow={a.valuesEyebrow} title={a.valuesTitle} />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {t.values.map((v) => (
              <div key={v.title} className="card p-7">
                <h3 className="text-xl font-bold">{v.title}</h3>
                <p className="mt-2 text-slate">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="pt-24"><CTABand /></div>
    </>
  );
}

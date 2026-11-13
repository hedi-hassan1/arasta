import React from "react";
import Icon from "./Icon";
import { contact, waLink } from "../content";
import { useLang } from "../i18n";

export default function CTABand() {
  const { t } = useLang();
  return (
    <section className="container-x">
      <div className="flex flex-col items-start justify-between gap-8 rounded-[18px] bg-amber p-8 sm:p-12 md:flex-row md:items-center">
        <div className="max-w-xl">
          <h2 className="text-2xl font-extrabold text-navy sm:text-3xl">{t.cta.title}</h2>
          <p className="mt-3 text-lg text-navy">{t.cta.text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a className="btn-navy" href={waLink(t.wa.question)} target="_blank" rel="noreferrer">
            <Icon name="phone" size={20} /> {t.whatsapp}
          </a>
          <a className="btn border-2 border-navy text-navy hover:bg-navy hover:text-cream" href={contact.instagram} target="_blank" rel="noreferrer">
            <Icon name="instagram" size={20} /> {t.instagram}
          </a>
        </div>
      </div>
    </section>
  );
}

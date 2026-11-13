import React, { useEffect, useState } from "react";
import Icon from "../components/Icon";
import SectionHead from "../components/SectionHead";
import { contact, waLink } from "../content";
import { useLang } from "../i18n";

export default function Connect() {
  const { t, lang } = useLang();
  const c = t.connect;
  const [form, setForm] = useState({ name: "", service: t.services[0].title, message: "" });
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  // keep the chosen service valid when the language changes
  useEffect(() => setForm((f) => ({ ...f, service: t.services[0].title })), [lang, t.services]);

  const send = (e) => {
    e.preventDefault();
    window.open(waLink(t.wa.form(form)), "_blank", "noopener");
  };

  const channels = [
    { icon: "phone", label: t.whatsapp, value: contact.whatsappDisplay, href: waLink(t.wa.hello) },
    { icon: "phone", label: t.phone, value: contact.phone2Display, href: `tel:${contact.phone2}` },
    { icon: "mail", label: t.email, value: contact.email, href: `mailto:${contact.email}` },
    { icon: "instagram", label: t.instagram, value: contact.handle, href: contact.instagram },
    { icon: "facebook", label: t.facebook, value: contact.handle, href: contact.facebook },
    { icon: "tiktok", label: t.tiktok, value: contact.handle, href: contact.tiktok },
  ];

  const field = "mt-2 block w-full rounded-brand border-line bg-cream px-4 py-3 text-navy focus:border-amber focus:ring-amber";

  return (
    <>
      <section className="bg-navy py-20 text-cream">
        <div className="container-x">
          <SectionHead dark eyebrow={c.eyebrow} title={c.title} text={c.text} />
        </div>
      </section>

      <section className="container-x grid gap-8 py-20 lg:grid-cols-[1.2fr_1fr]">
        <form onSubmit={send} className="card p-7 sm:p-10">
          <h2 className="text-2xl font-extrabold">{c.formTitle}</h2>
          <label className="mt-6 block font-semibold">{c.name}
            <input required value={form.name} onChange={set("name")} className={field} placeholder={c.namePh} />
          </label>
          <label className="mt-5 block font-semibold">{c.service}
            <select value={form.service} onChange={set("service")} className={field}>
              {t.services.map((s) => <option key={s.id}>{s.title}</option>)}
              <option>{c.other}</option>
            </select>
          </label>
          <label className="mt-5 block font-semibold">{c.message}
            <textarea required rows={5} value={form.message} onChange={set("message")} className={field} placeholder={c.messagePh} />
          </label>
          <button type="submit" className="btn-amber mt-7 w-full sm:w-auto"><Icon name="phone" size={20} /> {c.send}</button>
        </form>

        <div className="grid content-start gap-3">
          {channels.map((ch) => (
            <a key={ch.label} href={ch.href} target={ch.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
              className="card flex items-center gap-4 p-5 transition-colors hover:border-amber">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-brand bg-sand text-navy"><Icon name={ch.icon} size={24} /></span>
              <span>
                <span className="block text-sm text-slate">{ch.label}</span>
                <span className="ltr font-semibold">{ch.value}</span>
              </span>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}

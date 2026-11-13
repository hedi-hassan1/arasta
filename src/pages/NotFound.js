import React from "react";
import { Link } from "react-router-dom";
import { useLang } from "../i18n";

export default function NotFound() {
  const { t } = useLang();
  return (
    <section className="container-x py-32 text-center">
      <span className="accent-bar mx-auto" />
      <h1 className="mt-6 text-4xl font-extrabold">{t.notFound.title}</h1>
      <p className="mt-4 text-lg text-slate">{t.notFound.text}</p>
      <Link to="/" className="btn-navy mt-8">{t.notFound.back}</Link>
    </section>
  );
}

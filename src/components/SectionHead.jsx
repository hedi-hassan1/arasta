import React from "react";

export default function SectionHead({ eyebrow, title, text, dark = false, center = false }) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <span className={`accent-bar ${center ? "mx-auto" : ""}`} />
      {eyebrow && (
        <p className={`mt-4 font-heading text-base font-bold ${dark ? "text-accent" : "text-accent-dark"}`}>{eyebrow}</p>
      )}
      <h2 className={`mt-2 text-3xl font-extrabold sm:text-4xl ${dark ? "text-cream" : "text-navy"}`}>{title}</h2>
      {text && <p className={`mt-4 text-lg ${dark ? "text-mist" : "text-slate"}`}>{text}</p>}
    </div>
  );
}

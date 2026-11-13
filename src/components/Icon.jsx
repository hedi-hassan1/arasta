import React from "react";

// Akoi line icons: 24 grid, stroke 1.5, round caps (same set as brand/icons)
const paths = {
  study: <><path d="M2.5 9 12 4.5 21.5 9 12 13.5Z" /><path d="M6.5 11v5c0 1.6 2.5 3 5.5 3s5.5-1.4 5.5-3v-5" /><path d="M21.5 9v5" /></>,
  europe: <><circle cx="12" cy="12" r="9" /><ellipse cx="12" cy="12" rx="3.8" ry="9" /><path d="M3 12h18M4.6 7.5h14.8M4.6 16.5h14.8" /></>,
  systems: <><path d="M12 3 3 7.5 12 12l9-4.5Z" /><path d="m3 12 9 4.5 9-4.5" /><path d="m3 16.5 9 4.5 9-4.5" /></>,
  travel: <path d="M12 2.8c.8 0 1.4.8 1.4 1.8V9.2l7.1 4.3v1.9l-7.1-2.1v4.2l2.2 1.7v1.6L12 20l-3.6.8v-1.6l2.2-1.7v-4.2l-7.1 2.1v-1.9l7.1-4.3V4.6c0-1 .6-1.8 1.4-1.8Z" />,
  contact: <><path d="M4.5 4.5h15a1.5 1.5 0 0 1 1.5 1.5v9.5a1.5 1.5 0 0 1-1.5 1.5H11l-4.5 3.5V17h-2A1.5 1.5 0 0 1 3 15.5V6a1.5 1.5 0 0 1 1.5-1.5Z" /><path d="M7.5 9h9M7.5 12.5h6" /></>,
  document: <><path d="M14 3H7a1.5 1.5 0 0 0-1.5 1.5v15A1.5 1.5 0 0 0 7 21h10a1.5 1.5 0 0 0 1.5-1.5V7.5Z" /><path d="M14 3v4.5h4.5" /><path d="m9 14 2 2 4-4" /></>,
  phone: <path d="M5 4h3l1.5 4-2 1.3a10 10 0 0 0 7.2 7.2l1.3-2 4 1.5v3a1.5 1.5 0 0 1-1.6 1.5A16 16 0 0 1 3.5 5.6 1.5 1.5 0 0 1 5 4Z" />,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3.5 6.5 8.5 6.5 8.5-6.5" /></>,
  instagram: <><rect x="3.5" y="3.5" width="17" height="17" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17 7h.01" /></>,
  facebook: <path d="M14.5 21v-7.5h2.5l.5-3h-3V8.8c0-.9.4-1.6 1.7-1.6h1.4V4.6a17 17 0 0 0-2.2-.1c-2.3 0-3.9 1.4-3.9 4V10.5H9v3h2.5V21" />,
  tiktok: <path d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5M14 3c.4 2.6 2.2 4.4 5 4.6" />,
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  arrow: <path d="M19 12H5m0 0 6-6m-6 6 6 6" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  shield: <><path d="M12 3 4.5 6v5.5c0 4.5 3.2 8.2 7.5 9.5 4.3-1.3 7.5-5 7.5-9.5V6Z" /><path d="m9 12 2 2 4-4" /></>,
};

export default function Icon({ name, size = 24, className = "", strokeWidth = 1.5 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill="none"
      stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
      className={className} aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

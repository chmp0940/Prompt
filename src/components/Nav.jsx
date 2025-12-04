import { useState } from "react";
import Container from "./Container";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#pricing", label: "Pricing" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur shadow">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="text-xl font-bold text-indigo-600">
            BrandName
          </a>
          <ul className="hidden md:flex space-x-6">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="hover:text-indigo-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            aria-controls="mobile-menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </Container>
      {open && (
        <div id="mobile-menu" className="md:hidden border-t border-slate-200">
          <ul className="space-y-1 px-2 py-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="block rounded px-3 py-2 hover:bg-slate-100"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

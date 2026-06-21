"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Work", href: "/#projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="text-navy font-semibold text-base tracking-tight hover:text-orange transition-colors duration-200"
          >
            Suri Huang
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-slate-500 hover:text-navy text-sm font-medium transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="/resume.pdf"
              download
              className="bg-navy text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-orange transition-colors duration-200"
            >
              Resume
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-slate-500 hover:text-navy rounded-md"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-slate-100 py-4 flex flex-col gap-4 pb-5">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-slate-600 text-sm font-medium hover:text-navy transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="/resume.pdf"
              download
              className="bg-navy text-white text-sm font-medium px-4 py-2 rounded-lg text-center w-fit hover:bg-orange transition-colors"
            >
              Resume
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

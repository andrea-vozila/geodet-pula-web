"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Usluge", href: "/#services" },
  { label: "O nama", href: "/#about" },
  { label: "FAQ", href: "/#faq" },
  { label: "Kontakt", href: "/#contact" },
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link href="/#hero" className="shrink-0">
          <img
            src="/logo-black-no-bg.svg?width=150&height=40"
            alt="Geodet Logo"
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Glavna navigacija"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-charcoal transition-colors hover:text-navy"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-2">
          {/* Desktop/Tablet: full text CTA */}
          <Button
            asChild
            size="sm"
            className="hidden rounded-sm bg-[#1D4ED8] px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-[#1E3A8A] md:inline-flex"
          >
            <Link href="/#contact">
              <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
              Nazovite nas
            </Link>
          </Button>

          {/* Mobile: icon-only solid blue CTA matching hamburger size */}
          <Button
            asChild
            className="flex h-10 w-10 items-center justify-center rounded-sm bg-[#1D4ED8] text-white hover:bg-[#1E3A8A] md:hidden"
          >
            <a href="tel:+385992188077" aria-label="Nazovite nas">
              <Phone className="h-5 w-5" />
            </a>
          </Button>

          {/* Mobile menu toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Zatvori izbornik" : "Otvori izbornik"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav
          className="border-t border-border bg-background px-6 py-4 md:hidden"
          aria-label="Mobilna navigacija"
        >
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="py-2 text-sm font-medium text-charcoal transition-colors hover:text-navy"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

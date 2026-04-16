"use client";

import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { useAnchorNavigation } from "@/lib/utils/scroll";

const navLinks = [
  { label: "Usluge", href: "/#services" },
  { label: "O nama", href: "/#about" },
  { label: "Česta pitanja", href: "/#faq" },
  { label: "Kontakt", href: "/#contact" },
];

const legalLinks = [
  { label: "Impressum", href: "/pravne-informacije#impressum" },
  {
    label: "Politika privatnosti",
    href: "/pravne-informacije#politika-privatnosti",
  },
  { label: "Uvjeti korištenja", href: "/pravne-informacije#uvjeti-koristenja" },
  { label: "Postavke kolačića", href: "/pravne-informacije#postavke-kolacica" },
];

const externalLinks = [
  { label: "HKOIG", href: "https://hkoig.hr/" },
  { label: "Geoportal", href: "https://geoportal.dgu.hr/" },
  { label: "Uređena zemlja", href: "https://oss.uredjenazemlja.hr/" },
  {
    label: "Državna geodetska uprava",
    href: "https://dgu.gov.hr/",
  },
];

export function FooterSection() {
  const onAnchorClick = useAnchorNavigation();

  return (
    <footer className="bg-footer-bg text-primary-foreground">
      <div className="page-shell py-[clamp(3rem,2.4rem+2vw,6rem)]">
        <div className="grid gap-[clamp(3rem,2.4rem+2vw,6rem)] grid-cols-1 lg:grid-cols-[1fr_3fr]">
          {/* Brand */}
          <div className="">
            <Link
              href="/#hero"
              className="mb-6 flex items-center shrink-0 transition-opacity hover:opacity-80 focus-visible:opacity-80"
              onClick={(e) => onAnchorClick(e, "/#hero")}
            >
              <img
                src="/geodet-doo-pula-istra-logo.svg?"
                alt="Geodetski ured Pula Istra - Geodet d.o.o. Logo"
                className="h-8 sm:h-9 md:h-10 lg:h-12 2xl:h-[3.5rem] w-auto brightness-0 invert object-contain"
              />
            </Link>

            {/*
              <p className="mb-6 text-sm leading-relaxed text-primary-foreground/70">
              Geodetske usluge za Pulu, Istru i okolicu. Precizno, po zakonu i s
              više od 30 godina iskustva.
              </p>
            */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <MapPin
                  size={16}
                  strokeWidth={2.5}
                  className="shrink-0 text-primary-foreground/60"
                  aria-hidden="true"
                />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Mutilska+23,+52100+Pula,+Hrvatska"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                >
                  Mutilska 23, 52100 Pula
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone
                  size={16}
                  strokeWidth={2.5}
                  className="shrink-0 text-primary-foreground/60"
                  aria-hidden="true"
                />
                <div className="flex flex-col">
                  <a
                    href="tel:+385992188077"
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground"
                  >
                    +385 99 218 8077
                  </a>
                  <a
                    href="tel:+38552213777"
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground"
                  >
                    +385 52 213 777
                  </a>
                  <a
                    href="tel:+38598219197"
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground"
                  >
                    +385 98 219 197
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="-3 -3 28 28"
                  className="shrink-0 text-primary-foreground/60"
                  width="16"
                  height="16"
                  aria-hidden="true">
                  <path 
                    fill="currentColor" 
                    stroke="none"
                    transform="scale(1.5)"
                    stroke="currentColor" 
                    strokeWidth="0.2"
                    d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"
                  />
                </svg>
                <a
                  href="https://wa.me/385992188077"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground"
                >
                  +385 99 218 8077
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail
                  size={16}
                  strokeWidth={2.5}
                  className="shrink-0 text-primary-foreground/60"
                  aria-hidden="true"
                />
                <a
                  href="mailto:marin@geodet.hr"
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground"
                >
                  marin@geodet.hr
                </a>
              </div>
            </div>
          </div>
          
          {/* Druga skupina */}
          <div className="grid gap-[clamp(3rem,2.4rem+2vw,6rem)] grid-cols-1 md:grid-cols-[auto_auto_auto]">
            {/* Navigation */}
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground/80">
                Navigacija
              </h4>
              <nav aria-label="Navigacija u podnožju">
                <ul className="flex flex-col gap-3" role="list">
                  {navLinks.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                        onClick={(e) => onAnchorClick(e, link.href)}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Legal */}
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground/80">
                Pravne informacije
              </h4>
              <ul className="flex flex-col gap-3" role="list">
                {legalLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                      onClick={(e) => onAnchorClick(e, link.href)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* External */}
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground/80">
                Korisne poveznice
              </h4>
              <ul className="flex flex-col gap-3" role="list">
                {externalLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* Bottom bar */}
        <div className="mt-[clamp(3rem,2.4rem+2vw,6rem)] border-t border-primary-foreground/10 pt-8">
          <p className="text-center text-xs text-primary-foreground/50">
            {`\u00A9 ${new Date().getFullYear()} Geodet d.o.o. Sva prava pridržana.`}
          </p>
        </div>
      </div>
    </footer>
  );
}

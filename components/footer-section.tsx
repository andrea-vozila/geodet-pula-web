import Link from "next/link"
import { MapPin, Phone, Mail } from "lucide-react"

const navLinks = [
  { label: "Usluge", href: "/#services" },
  { label: "O nama", href: "/#about" },
  { label: "Česta pitanja", href: "/#faq" },
  { label: "Kontakt", href: "/#contact" },
]

const legalLinks = [
  { label: "Impressum", href: "/pravne-informacije#impressum" },
  { label: "Politika privatnosti", href: "/pravne-informacije#politika-privatnosti" },
  { label: "Uvjeti korištenja", href: "/pravne-informacije#uvjeti-koristenja" },
  { label: "Postavke kolačića", href: "/pravne-informacije#postavke-kolacica" },
]

export function FooterSection() {
  return (
    <footer className="bg-footer-bg text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/#hero" className="mb-4 inline-block">
              <img
                src="/placeholder.svg?width=150&height=40"
                alt="Geodet Logo"
                className="h-8 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mb-6 text-sm leading-relaxed text-primary-foreground/70">
              Geodetske usluge za Pulu, Istru i okolicu. Precizno, po zakonu i s
              više od 30 godina iskustva.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <MapPin size={16} strokeWidth={2.5} className="shrink-0 text-primary-foreground/60" aria-hidden="true" />
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
                <Phone size={16} strokeWidth={2.5} className="shrink-0 text-primary-foreground/60" aria-hidden="true" />
                <div className="flex flex-col">
                  <a href="tel:+385992188077" className="text-sm text-primary-foreground/70 hover:text-primary-foreground">+385 99 218 8077</a>
                  <a href="tel:+38552213777" className="text-sm text-primary-foreground/70 hover:text-primary-foreground">+385 52 213 777</a>
                  <a href="tel:+38598219197" className="text-sm text-primary-foreground/70 hover:text-primary-foreground">+385 98 219 197</a>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} strokeWidth={2.5} className="shrink-0 text-primary-foreground/60" aria-hidden="true" />
                <a href="mailto:marin@geodet.hr" className="text-sm text-primary-foreground/70 hover:text-primary-foreground">marin@geodet.hr</a>
              </div>
            </div>
          </div>

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
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-primary-foreground/10 pt-8">
          <p className="text-center text-xs text-primary-foreground/50">
            {`\u00A9 ${new Date().getFullYear()} Geodet d.o.o. Sva prava pridržana.`}
          </p>
        </div>
      </div>
    </footer>
  )
}

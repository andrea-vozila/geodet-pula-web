import { FileText, Map, Scale, Check, Circle } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { LucideIcon } from "lucide-react"

interface BulletPoint {
  icon: LucideIcon
  text: string
}

const bulletPoints: BulletPoint[] = [
  {
    icon: FileText,
    text: "Legalizirajte objekte prije dolaska inspekcija.",
  },
  {
    icon: Map,
    text: "Očistite vlasništvo za brzu prodaju.",
  },
  {
    icon: Scale,
    text: "Definirajte međe i zauvijek riješite nesuglasice sa susjedima.",
  },
  {
    icon: Check,
    text: "Naši inženjeri besplatno izlaze na teren i rješavaju birokraciju umjesto vas.",
  },
  {
    icon: Check,
    text: "Precizno, po zakonu i brže od konkurencije.",
  },
]

const trustBadges = [
  "Više od 30 godina rješavamo imovinsko-pravne probleme u Istri.",
  "Detaljno poznajemo procedure lokalnih ureda i kako najbrže riješiti vaš predmet.",
]

export function HeroSection() {
  return (
    <section id="hero" className="relative flex min-h-[100svh] flex-col justify-center bg-background">
      {/* Background image overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/placeholder.svg?width=1920&height=1080"
          alt="Aerial architectural photograph of Istrian landscape with geodetic equipment"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-background/90" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-4 sm:py-6 md:py-10 lg:px-8 lg:py-12">
        <div className="max-w-3xl lg:max-w-4xl xl:max-w-5xl">
          {/* Pre-headline */}
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-navy md:mb-3">
            Geodetske usluge za Pulu, Istru i okolicu
          </p>

          {/* H1 — max 2 lines on any screen */}
          <h1 className="mb-3 text-2xl font-bold leading-tight tracking-tight text-midnight text-balance sm:text-3xl md:mb-5 md:text-[2.5rem] lg:text-4xl xl:text-[3rem]">
            Do čistih papira <br /> bez čekanja u redovima katastra
          </h1>

          {/* Bullet points */}
          <ul className="mb-2 flex flex-col gap-1 md:mb-5 md:gap-2" role="list">
            {bulletPoints.map((point) => (
              <li key={point.text} className="flex items-start gap-2 md:gap-3">
                <point.icon
                  className="mt-0.5 shrink-0 text-[#166534]"
                  size={18}
                  strokeWidth={2.5}
                  aria-hidden="true"
                />
                <span className="text-sm leading-relaxed text-charcoal md:text-base">
                  {point.text}
                </span>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <Button
            asChild
            size="lg"
            className="h-10 rounded-sm bg-navy px-4 text-sm font-semibold text-primary-foreground shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] ring-1 ring-navy/20 transition-all hover:-translate-y-1 hover:bg-navy-dark active:scale-95 md:h-12 md:px-8 md:text-base"
          >
            <a href="/#contact">
              <span className="md:hidden">{"Zatražite besplatnu procjenu"}</span>
              <span className="hidden md:inline">{"Zatražite besplatnu procjenu stanja odmah"}</span>
            </a>
          </Button>

          {/* Trust badge */}
          <div className="mt-2 max-w-2xl rounded-sm border border-border bg-secondary/60 px-4 py-2 md:mt-3 md:px-5 md:py-3 lg:max-w-3xl">
            <ul className="flex flex-col gap-1" role="list">
              {trustBadges.map((badge) => (
                <li key={badge} className="flex items-start gap-2">
                  <Circle
                    className="mt-1.5 shrink-0 fill-[#166534] text-[#166534]"
                    size={6}
                    aria-hidden="true"
                  />
                  <span className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    {badge}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

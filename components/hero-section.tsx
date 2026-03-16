import { useEffect, useState } from "react"
import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const rotatingMessages = [
  "Legalizirajte objekte prije dolaska inspekcija.",
  "Očistite vlasništvo za brzu prodaju.",
  "Definirajte međe i zauvijek riješite nesuglasice sa susjedima.",
]

const trustItems = [
  "Besplatno izlazimo na teren i rješavamo birokraciju umjesto vas.",
  "Više od 30 godina rješavamo imovinsko-pravne probleme u Istri.",
  "Detaljno poznajemo procedure lokalnih ureda i kako najbrže riješiti vaš predmet.",
]

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % rotatingMessages.length)
    }, 3500)

    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden text-white"
    >
      {/* Background image & vignette overlay */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* Desktop / tablet background */}
        <img
          src="/hero-opt2.jpg"
          alt="Geodetski snimak Pule i Istre iz zraka"
          className="hidden h-full w-full object-cover md:block"
        />
        {/* Mobile background */}
        <img
          src="/hero-opt-mobile.jpg"
          alt="Geodetska oprema na terenu u Istri"
          className="block h-full w-full object-cover md:hidden"
        />

        {/* Dark vignette for contrast */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(15,23,42,0.2),rgba(0,0,0,0.95))]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-6xl items-center px-6 py-8 sm:py-10 md:px-8 lg:px-10 lg:py-16">
        <div className="flex w-full flex-col items-start text-left md:items-center md:text-center">
          {/* Pre-headline */}
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-white/70 md:mb-4 md:text-sm">
            Geodetske usluge za Pulu, Istru i okolicu
          </p>

          {/* Headline */}
          <h1 className="text-balance text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-5xl lg:text-6xl">
            Do čistih papira <br />
            Bez čekanja u redovima katastra
          </h1>

          {/* Sub-headline — rotating messages */}
          <div className="mt-4 h-16 w-full overflow-hidden md:mt-6">
            <div className="relative h-full">
              {rotatingMessages.map((message, index) => {
                const isActive = index === currentIndex

                return (
                  <p
                    key={message}
                    className={`absolute inset-0 flex items-center text-left text-lg font-medium text-white/90 transition-all duration-700 ease-out md:text-center md:text-xl ${
                      isActive ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"
                    }`}
                    aria-hidden={!isActive}
                  >
                    {message}
                  </p>
                )
              })}
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-8 flex w-full justify-start md:justify-center">
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
          </div>

          {/* Trust badge box */}
          <div className="mt-6 w-full max-w-3xl rounded-lg border border-white/10 bg-black/20 p-4 backdrop-blur-md md:mt-8">
            <div className="flex flex-col gap-3 md:flex-row md:justify-center md:gap-6">
              {trustItems.map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircle2
                    className="mt-0.5 shrink-0 text-[#166534]"
                    size={16}
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  <p className="text-sm leading-relaxed text-white/80">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client";

import { useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAnchorNavigation } from "@/lib/utils/scroll";

const rotatingMessages = [
  "Legalizirajte objekte prije dolaska inspekcija.",
  "Očistite vlasništvo za brzu prodaju.",
  "Definirajte međe i zauvijek riješite nesuglasice sa susjedima.",
];

const trustItems = [
  "Izlazimo na teren u najkraćem roku i rješavamo birokraciju umjesto vas.",
  "Više od 30 godina rješavamo imovinsko-pravne probleme u Istri.",
  "Detaljno poznajemo procedure lokalnih ureda i kako najbrže riješiti vaš predmet.",
];

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const onAnchorClick = useAnchorNavigation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % rotatingMessages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] overflow-hidden bg-white text-charcoal"
    >
      {/* Background images + premium gradients (A/B overlays) */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <img
          src="/geodetski-inzenjer-totalna-stanica-mjerenje-terena-istra.webp"
          alt="Geodetski stručnjak s preciznim mjernim instrumentom obavlja geodetsku izmjeru zemljišta na parceli u Istri"
          className=" h-full w-full object-cover object-[65%_100%]"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/40 to-transparent" />
        {/* Localized bottom fade to hide hard image edge */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-secondary via-secondary/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 pt-[clamp(6.5rem,8vw,12rem)]">
        <div className="page-shell">
          <div className="max-w-[45rem] sm:max-w-[50rem] lg:max-w-[60rem] xl:max-w-[65rem] w-full mr-auto">
            {/* Group 1: Headings */}
            <div className="flex max-w-full flex-col gap-3 md:gap-4">
              <p className="max-w-full break-words text-xs font-semibold uppercase tracking-[0.25em] text-charcoal/80 md:text-sm">
                Geodetske usluge za Pulu, Istru i okolicu
              </p>

              <h1 className="max-w-full break-words text-balance text-3xl font-extrabold leading-tight tracking-tight text-charcoal sm:text-4xl md:text-5xl lg:text-6xl">
                Do čistih papira <br />
                Bez čekanja u redovima katastra
              </h1>

              {/* Rotator */}
              <div
                className="relative w-full max-w-full overflow-hidden"
                aria-live="polite"
                aria-atomic="true"
              >
                {/* Reserve height to prevent layout shift on tiny screens */}
                <div className="min-h-[3.5rem] sm:min-h-[3rem]">
                  {rotatingMessages.map((message, index) => {
                    const isActive = index === currentIndex;

                    return (
                      <p
                        key={message}
                        className={[
                          "absolute left-0 top-0 w-full max-w-full break-words pr-2 text-base font-medium text-charcoal/90 transition-all duration-700 ease-out sm:text-lg md:text-xl",
                          isActive
                            ? "translate-x-0 opacity-100"
                            : "translate-x-6 opacity-0",
                        ].join(" ")}
                        aria-hidden={!isActive}
                      >
                        {message}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Group 2: Action */}
            <div className="mt-10 flex max-w-full flex-col gap-4 md:mt-14">
              <div className="flex w-full max-w-full justify-start">
                <Button
                  asChild
                  size="lg"
                  className="h-10 rounded-sm bg-navy px-4 text-sm font-semibold text-primary-foreground shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] ring-1 ring-navy/20 transition-all hover:-translate-y-1 hover:bg-navy-dark active:scale-95 md:h-12 md:px-8 md:text-base"
                >
                  <a
                    href="/#contact"
                    onClick={(e) => onAnchorClick(e, "/#contact")}
                  >
                    <span className="sm:hidden">
                      {"Zatražite besplatnu procjenu"}
                    </span>
                    <span className="hidden sm:inline">
                      {"Zatražite besplatnu procjenu stanja odmah"}
                    </span>
                  </a>
                </Button>
              </div>

              <div
                className="flex w-[90%] sm:w-[70%] md:w-full md:max-w-full flex-col gap-3 rounded-sm bg-white/40 p-3 shadow-sm backdrop-blur-sm sm:bg-transparent sm:p-0 sm:shadow-none sm:backdrop-blur-none md:bg-transparent md:p-0 md:shadow-none md:backdrop-blur-none" /*max-w-full  ili  w-[70%] sm:w-[70%] md:w-full md:max-w-full*/
              >
                {trustItems.map((item) => (
                  <div
                    key={item}
                    className="flex max-w-full items-center gap-2" /*border-l-2 border-charcoal/15 pl-3*/
                  >
                    <CheckCircle2
                      className="shrink-0 text-[#166534]"
                      size={16}
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                    <p className="max-w-full break-words text-xs font-medium text-charcoal/90 md:text-sm">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom padding so section can breathe without pushing past viewport */}
            <div className="h-12 md:h-16" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}

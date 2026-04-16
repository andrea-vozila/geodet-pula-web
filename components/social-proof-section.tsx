"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const partners = [
  "BOUYGUES CONSTRUCTION",
  "UNITECH",
  "ODVODNJA",
  "ALBANEŽ",
  "OPĆINA MARČANA",
  "ZRAČNA LUKA PULA",
  "GRAD ROVINJ",
  "OPĆA BOLNICA PULA",
  "SVEUČILIŠTE JURJA DOBRILE",
  "OPĆINA LIŽNJAN",
  "GRAD PULA",
  "GRAD NOVIGRAD",
  "ŽUPANIJSKA UPRAVA ZA CESTE",
  "STRABAG HIDROINŽENJERING",
  "GRAD VODNJAN",
  "KOMUNALNI SERVIS d.o.o.",
  "ENERGOMONT",
  "FLUMING",
  "ARH2000 d.o.o.",
];

const testimonials = [
  {
    name: "Ivan K.",
    location: "Pula",
    text: "Vrlo profesionalna usluga. Sve je odrađeno brzo i precizno, bez nepotrebnih komplikacija. Preporučujem.",
    rating: 5,
  },
  {
    name: "Marko B.",
    location: "Rovinj",
    text: "Od prve komunikacije do završetka posla sve je bilo jasno i korektno. Posebno pohvaljujem brzinu i dostupnost.",
    rating: 5,
  },
  {
    name: "Ana M.",
    location: "Poreč",
    text: "Jako zadovoljan suradnjom. Sve je objašnjeno jasno i sve je odrađeno kako je dogovoreno.",
    rating: 5,
  },
  {
    name: "Nikola S.",
    location: "Medulin",
    text: "Odlična komunikacija i pristup. Sve je riješeno bez čekanja i nepotrebnih komplikacija.",
    rating: 5,
  },
  {
    name: "Petra L.",
    location: "Pazin",
    text: "Pouzdano, brzo i točno. Sve preporuke za bilo kakve geodetske usluge.",
    rating: 5,
  },
  {
    name: "Tomislav R.",
    location: "Pula",
    text: "Geodetski elaborat riješen u roku i bez problema. Sve pohvale za profesionalnost i organizaciju.",
    rating: 5,
  },
  {
    name: "Marija D.",
    location: "Rovinj",
    text: "Parcelacija odrađena kvalitetno i u dogovorenom roku. Vrlo korektan i profesionalan pristup.",
    rating: 5,
  },
  {
    name: "Luka V.",
    location: "Labin",
    text: "Iskolčenje odrađeno precizno i brzo. Sve je prošlo glatko i bez stresa.",
    rating: 5,
  },
  {
    name: "Ivana P.",
    location: "Umag",
    text: "Geodetska situacija napravljena brzo i točno. Sve informacije sam dobila na vrijeme i jasno.",
    rating: 5,
  },
  {
    name: "Damir G.",
    location: "Pula",
    text: "Evidentiranje zgrade odrađeno efikasno uz odličnu komunikaciju. Sve preporuke.",
    rating: 5,
  },
];

function useItemsPerView() {
  const [itemsPerView, setItemsPerView] = useState(1);

  useEffect(() => {
    function update() {
      if (window.innerWidth >= 1024) setItemsPerView(3);
      else if (window.innerWidth >= 768) setItemsPerView(2);
      else setItemsPerView(1);
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return itemsPerView;
}

export function SocialProofSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const itemsPerView = useItemsPerView();
  const maxSlide = Math.max(0, testimonials.length - itemsPerView);

  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
      }, 5000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isAutoPlaying, maxSlide]);

  const goTo = useCallback(
    (index: number) => {
      setCurrentSlide(Math.max(0, Math.min(index, maxSlide)));
      setIsAutoPlaying(false);
    },
    [maxSlide],
  );

  // Each card takes up (100 / itemsPerView)% of the container
  // On mobile (itemsPerView=1), shifting by 100% moves exactly one card
  const slideOffset = currentSlide * (100 / itemsPerView);

  return (
    <section className="section-space bg-secondary">
      {/* Partners Marquee */}
      <div className="mb-[var(--section-y)]">
        <p className="mb-8 px-6 text-center text-sm font-bold uppercase tracking-widest text-[#1E293B] md:px-0">
          Partneri i institucije s kojima uspješno surađujemo
        </p>
        <div className="relative overflow-hidden">
          {/* GLAVNI KONTEJNER TRAKE - gap-16 kontrolira razmak između "Znački" */}
          <div className="animate-marquee flex w-max items-center gap-16 px-8">
            {[...partners, ...partners].map((partner, i) => (
              /* UNUTARNJI KONTEJNER (Značka) - gap-16 kontrolira razmak između Imena i Separatora */
              <div
                key={`${partner}-${i}`}
                className="flex items-center gap-16 shrink-0"
              >
                {/* 1. IME PARTNERA (Minimalistički stil) */}
                <span className="font-display text-lg md:text-xl font-extrabold uppercase tracking-[0.15em] text-midnight/70 whitespace-nowrap select-none">
                  {partner}
                </span>

                {/* 2. SEPARATOR (Točka) */}
                <span className="text-muted-foreground/60 text-xs md:text-sm select-none flex items-center justify-center -translate-y-[0px]">
                  ◆
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="page-shell">
        <h2 className="mb-12 text-center text-2xl font-bold tracking-tight text-charcoal md:text-3xl lg:text-4xl text-balance">
          Što kažu naši klijenti
        </h2>
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${slideOffset}%)`,
            }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="w-full shrink-0 px-3 md:w-1/2 lg:w-1/3"
              >
                <div className="flex h-full flex-col rounded-sm border-none bg-card p-6 shadow-[0_4px_6px_-1px_rgb(0_0_0_/_0.1)] transition-shadow hover:shadow-[0_8px_12px_-2px_rgb(0_0_0_/_0.12)]">
                  <div
                    className="mb-4 flex gap-1"
                    aria-label={`${testimonial.rating} od 5 zvjezdica`}
                  >
                    {Array.from({ length: testimonial.rating }).map((_, j) => (
                      <Star
                        key={j}
                        size={18}
                        className="fill-amber-400 text-amber-400"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="mb-6 flex-1 text-sm leading-relaxed text-charcoal md:text-base">
                    {`"${testimonial.text}"`}
                  </p>
                  <div>
                    <p className="text-sm font-semibold text-midnight">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <Button
            variant="outline"
            size="icon"
            className="rounded-sm"
            onClick={() => goTo(currentSlide - 1)}
            disabled={currentSlide === 0}
            aria-label="Prethodni testimonijal"
          >
            <ChevronLeft size={20} strokeWidth={2.5} />
          </Button>
          <div className="flex gap-2">
            {Array.from({ length: maxSlide + 1 }).map((_, i) => (
              <button
                key={i}
                className={`h-2 rounded-full transition-all ${
                  i === currentSlide
                    ? "w-6 bg-navy"
                    : "w-2 bg-border hover:bg-muted-foreground/40"
                }`}
                onClick={() => goTo(i)}
                aria-label={`Idi na stranicu ${i + 1}`}
              />
            ))}
          </div>
          <Button
            variant="outline"
            size="icon"
            className="rounded-sm"
            onClick={() => goTo(currentSlide + 1)}
            disabled={currentSlide >= maxSlide}
            aria-label="Sljedeći testimonijal"
          >
            <ChevronRight size={20} strokeWidth={2.5} />
          </Button>
        </div>
      </div>
    </section>
  );
}

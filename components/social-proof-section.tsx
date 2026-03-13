"use client"

import { useRef, useEffect, useState, useCallback } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const partners = [
  "Grad Pula",
  "Općina Medulin",
  "Grad Rovinj",
  "Općina Fažana",
  "Grad Vodnjan",
  "Općina Ližnjan",
  "Grad Pazin",
  "Općina Marčana",
]

const testimonials = [
  {
    name: "Marko Jurčić",
    location: "Pula",
    text: "Trebao sam legalizirati kuću koju je gradio otac. U Geodetu su me primili odmah, izašli na teren isti tjedan i riješili sve papire. Nisam morao niti jednom u katastar. Svaka preporuka.",
    rating: 5,
  },
  {
    name: "Ana Petrović",
    location: "Medulin",
    text: "Imali smo problem s međom sa susjedom koji je trajao godinama. Inženjeri iz Geodeta su precizno odredili granice i sve dokumentirali. Sad imam mir i čiste papire.",
    rating: 5,
  },
  {
    name: "Ivan Brajković",
    location: "Rovinj",
    text: "Prodavali smo zemljište i trebali smo hitnu parcelaciju. Geodet d.o.o. je odradio posao brzo i profesionalno. Kupac je bio impresioniran koliko su papiri bili uredni.",
    rating: 5,
  },
  {
    name: "Mirjana Vuković",
    location: "Fažana",
    text: "Naslijedila sam parcelu koja nije bila usklađena u katastru i gruntovnici. Mislila sam da će trajati mjesecima, ali su u Geodetu sve riješili u rekordnom roku.",
    rating: 5,
  },
]

function useItemsPerView() {
  const [itemsPerView, setItemsPerView] = useState(1)

  useEffect(() => {
    function update() {
      if (window.innerWidth >= 1024) setItemsPerView(3)
      else if (window.innerWidth >= 768) setItemsPerView(2)
      else setItemsPerView(1)
    }
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  return itemsPerView
}

export function SocialProofSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const itemsPerView = useItemsPerView()
  const maxSlide = Math.max(0, testimonials.length - itemsPerView)

  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1))
      }, 5000)
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isAutoPlaying, maxSlide])

  const goTo = useCallback(
    (index: number) => {
      setCurrentSlide(Math.max(0, Math.min(index, maxSlide)))
      setIsAutoPlaying(false)
    },
    [maxSlide]
  )

  // Each card takes up (100 / itemsPerView)% of the container
  // On mobile (itemsPerView=1), shifting by 100% moves exactly one card
  const slideOffset = currentSlide * (100 / itemsPerView)

  return (
    <section className="bg-secondary py-20">
      {/* Partners Marquee */}
      <div className="mb-16">
        <p className="mb-8 px-6 text-center text-sm font-bold uppercase tracking-widest text-[#1E293B] md:px-0">
          Partneri i institucije s kojima uspješno surađujemo
        </p>
        <div className="relative overflow-hidden">
          <div className="animate-marquee flex w-max items-center gap-16 px-8">
            {[...partners, ...partners].map((partner, i) => (
              <div
                key={`${partner}-${i}`}
                className="flex h-12 shrink-0 items-center rounded-sm bg-background/60 px-8"
              >
                <span className="text-sm font-medium text-muted-foreground/70 select-none">
                  {partner}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
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
                  <div className="mb-4 flex gap-1" aria-label={`${testimonial.rating} od 5 zvjezdica`}>
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
  )
}

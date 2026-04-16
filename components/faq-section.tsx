"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Send } from "lucide-react"
import { useAnchorNavigation } from "@/lib/utils/scroll"

const faqs = [
  {
    q: "Koliko se čeka izlazak geodeta na teren?",
    a: "Vaše vrijeme nam je prioritet. Dok se na istarskom tržištu izlazak geodeta često čeka tjednima (ili se uopće ne javljaju na telefon), naša praksa je drugačija. Na teren izlazimo u najkraćem mogućem roku (čim vremenski uvjeti to dopuste). Još važnije: naš prvi izlazak na teren i procjena vaše situacije su potpuno besplatni. Mi dolazimo k vama, bez ikakve obveze.",
  },
  {
    q: "Koliko traje proces (parcelacija, upis, usklađenje)?",
    a: "Naš terenski rad i izrada elaborata u uredu odrađuju se brzo i bez odgode. Međutim, sam upis ovisi o brzini katastra i suda (što može trajati tjednima). Tu do izražaja dolazi naših 30 godina iskustva \u2013 mi institucijama predajemo besprijekorno čiste papire i proaktivno pratimo i \"guramo\" vaš predmet kroz sustav kako ne bi tjednima skupljao prašinu u nekoj ladici.",
  },
  {
    q: "Moram li ja osobno ići u Katastar ili na sud?",
    a: "Ne. Zaboravite na uzimanje slobodnih dana na poslu, traženje parkinga po gradu i čekanje u redovima. Kao naš klijent, dobivate \"ključ u ruke\" uslugu. Vaš jedini zadatak je da nam predate dokumente koje imate. Mi pripremamo svu papirologiju, predajemo zahtjeve, komuniciramo s referentima i donosimo vam gotovo, službeno rješenje. Od prvog mjerenja do zadnjeg pečata \u2013 sve je naša briga.",
  },
  {
    q: "Imam bespravan objekt i čujem da kreće novi val legalizacije. Što da radim?",
    a: "Reagirajte odmah. Uskoro kreće novi krug legalizacije, a inspekcije na području Istre su sve rigoroznije. Ne čekajte rješenje o rušenju. Javite nam se odmah kako bismo izradili geodetski snimak izvedenog stanja \u2013 to je prvi, zakonski obavezan i najvažniji dokument s kojim spašavate svoj objekt i započinjete proces ozakonjenja.",
  },
  {
    q: "Koliko koštaju geodetske usluge i kako se formira cijena?",
    a: "Cijena ovisi o specifičnosti terena i vrsti postupka (legalizacija, parcelacija, usklađenje). Kako ne biste plaćali napamet, naša stručna procjena je potpuno besplatna. Nakon pregleda, dajemo vam točnu i transparentnu ponudu bez skrivenih troškova.",
  },
]

export function FaqSection() {
  const onAnchorClick = useAnchorNavigation()

  return (
    <section className="section-space bg-background">
      <div className="page-shell-narrow">
        <h2 className="mb-12 text-center text-2xl font-bold tracking-tight text-charcoal md:text-3xl lg:text-4xl text-balance">
          Česta pitanja o našim uslugama i procedurama
        </h2>

        <Accordion type="single" collapsible className="flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-sm border-none bg-card px-6 shadow-[0_4px_6px_-1px_rgb(0_0_0_/_0.1)]"
            >
              <AccordionTrigger className="text-left text-sm font-semibold text-midnight hover:no-underline md:text-base">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-charcoal md:text-base">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Contact CTA Box */}
        <div className="mt-12 rounded-sm bg-secondary p-8 text-center">
          <h3 className="mb-2 text-lg font-bold text-midnight md:text-xl">
            Niste pronašli odgovor na svoje pitanje?
          </h3>
          <p className="mb-6 text-sm leading-relaxed text-muted-foreground md:text-base">
            Naš tim je dostupan za besplatne konzultacije. Odgovaramo u najkraćem
            roku.
          </p>
          <Button
            asChild
            className="rounded-sm bg-navy px-4 text-sm font-semibold text-primary-foreground shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] ring-1 ring-navy/20 transition-all hover:-translate-y-1 hover:bg-navy-dark active:scale-95 sm:px-6"
          >
            <a href="/#contact" onClick={(e) => onAnchorClick(e, "/#contact")}>
              <Send size={16} strokeWidth={2.5} aria-hidden="true" />
              Pošaljite upit
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

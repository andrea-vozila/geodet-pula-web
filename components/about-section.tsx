import { Award, Users, Crosshair, Building } from "lucide-react"

const strengths = [
  {
    icon: Award,
    title: "Iskustvo koje rješava najteže slučajeve",
    text: "Kroz desetljeća rada na specifičnom istarskom terenu, susreli smo se sa svim mogućim problemima u katastru i gruntovnici. Znamo procedure, poznajemo referentne urede i znamo najkraći put do rješenja.",
  },
  {
    icon: Users,
    title: "Tim od 5 stručnjaka",
    subtitle: "Ne čekate na jednog čovjeka",
    text: "Za razliku od malih ureda gdje se na izlazak na teren čeka mjesecima, naš tim od 5 iskusnih inženjera geodezije i geoinformatike omogućava brzu reakciju i poštivanje dogovorenih rokova.",
  },
  {
    icon: Crosshair,
    title: "Milimetarska preciznost",
    text: "Ulažemo u najsuvremenije geodetske uređaje. Zašto je to vama bitno? Jer greška u mjerenju znači odbijanje papira na sudu. S nama ste sigurni da je sve odrađeno savršeno točno i po zakonu.",
  },
  {
    icon: Building,
    title: "Povjerenje institucija",
    text: "Godinama uspješno surađujemo s jedinicama lokalne samouprave (općinama i gradovima), javnim ustanovama i velikim investitorima. Ako institucije vjeruju našoj točnosti i transparentnosti, možete i vi.",
  },
]

export function AboutSection() {
  return (
    <section className="bg-secondary py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Left: Text content */}
          <div className="lg:col-span-3">
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-charcoal md:text-3xl lg:text-4xl text-balance">
              Zašto nam vjeruju investitori i obitelji diljem Istre već više od 30
              godina
            </h2>
            <p className="mb-10 text-sm leading-relaxed text-charcoal md:text-base lg:text-lg">
              {"Tvrtka Geodet d.o.o. nije samo ured koji mjeri parcele. Osnovani davne 1992. godine kao jedna od prvih tvrtki za geodetsko-katastarske poslove u Puli, naš primarni posao je pravna sigurnost vaše nekretnine. Znamo da geodetski poslovi mogu biti stresni, dugotrajni i puni nepoznanica. Zato smo naš način rada prilagodili vama:"}
            </p>

            <div className="flex flex-col gap-8">
              {strengths.map((s) => (
                <div key={s.title} className="flex items-start gap-4">
                  <s.icon
                    size={24}
                    strokeWidth={2.5}
                    className="mt-1 shrink-0 text-forest"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="mb-1 text-base font-semibold text-midnight md:text-lg">
                      {s.title}
                      {s.subtitle && (
                        <span className="ml-1 font-normal text-muted-foreground">
                          ({s.subtitle})
                        </span>
                      )}
                    </h3>
                    <p className="text-sm leading-relaxed text-charcoal md:text-base">
                      {s.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-10 text-sm leading-relaxed text-charcoal md:text-base lg:text-lg">
              Nalazimo se u Puli, na adresi{" "}
              <a
                href="https://www.google.com/maps/search/?api=1&query=Mutilska+23,+52100+Pula,+Hrvatska"
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-2 text-charcoal transition-colors hover:text-blue-600"
              >
                Mutilska 23
              </a>
              . Bilo da prodajete, gradite ili legalizirate&nbsp;&ndash; svratite do nas ili nas nazovite. Svaki uspješan
              projekt počinje jednim preciznim mjerenjem i iskrenim savjetom.
            </p>
          </div>

          {/* Right: Image placeholder */}
          <div className="lg:col-span-2">
            <div className="sticky top-8 overflow-hidden rounded-sm shadow-[0_4px_6px_-1px_rgb(0_0_0_/_0.1)]">
              <img
                src="/placeholder.svg?width=600&height=800"
                alt="Tim inženjera geodezije Geodet d.o.o. na terenu u Istri s najmodernijom geodetskom opremom"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

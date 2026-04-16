import { Landmark, Fence, Scale, Scissors, Ruler } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface ServiceCard {
  icon: LucideIcon
  overline: string
  title: string
  text: string
  highlight?: boolean
}

const services: ServiceCard[] = [
  {
    icon: Landmark,
    overline: "Upis objekata",
    title: "Legalizacija i evidentiranje",
    text: 'Od "livade" do legalne kuće. Spremite se za novi val legalizacije koji kreće uskoro. Izrađujemo geodetske snimke izvedenog stanja kako biste ozakonili svoju kuću ili nadstrešnicu, izbjegli kazne i napokon mirno spavali bez straha od rušenja.',
    highlight: true,
  },
  {
    icon: Fence,
    overline: "Uređenje međa",
    title: "Iskolčenje",
    text: "Granice mira sa susjedima. Precizno određujemo granice vaše parcele kako biste znali što je vaše, do zadnjeg centimetra.",
  },
  {
    icon: Scale,
    overline: "Usklađenje katastra i zemljišnih knjiga",
    title: "Sređivanje vlasničkog lista",
    text: "Spajamo stvarno stanje s papirima. Rješavamo neslaganja kako bi vaša nekretnina bila pravno čista i spremna za prodaju.",
  },
  {
    icon: Scissors,
    overline: "Parcelacija zemljišta",
    title: "Cijepanje parcela",
    text: "Brza i točna podjela parcela. Savršeno za nasljednike, suvlasnike ili investitore koji pripremaju teren za prodaju.",
  },
  {
    icon: Ruler,
    overline: "Geodetske podloge za gradnju",
    title: "Priprema za arhitekta",
    text: "Temelj svakog projekta. Pripremamo sve što vašem arhitektu treba za izradu glavnog projekta i dobivanje građevinske dozvole.",
  },
]

export function ServicesSection() {
  return (
    <section className="section-space bg-secondary">
      <div className="page-shell">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-charcoal md:text-3xl lg:text-4xl">
            Naše usluge
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base lg:text-lg">
            Pretvaramo vaš problem u čiste papire
          </p>
        </div>

        {/* Highlight card first on mobile, then 2x2 grid for the rest */}
        <div className="flex flex-col gap-8">
          {/* Primary highlight card */}
          {services
            .filter((s) => s.highlight)
            .map((service) => (
              <div
                key={service.title}
                className="rounded-sm border-t-4 border-t-midnight bg-card p-8 shadow-[0_4px_6px_-1px_rgb(0_0_0_/_0.1)] transition-shadow hover:shadow-[0_8px_12px_-2px_rgb(0_0_0_/_0.12)] lg:p-10"
              >
                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-10">
                  <div className="shrink-0">
                    <service.icon
                      size={24}
                      strokeWidth={2.5}
                      className="text-forest"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-navy">
                      {service.overline}
                    </p>
                    <h3 className="mb-3 text-xl font-bold text-midnight md:text-2xl">
                      {service.title}
                    </h3>
                    <p className="max-w-2xl text-sm leading-relaxed text-charcoal md:text-base lg:text-lg">
                      {service.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}

          {/* Remaining cards in a 2x2 grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {services
              .filter((s) => !s.highlight)
              .map((service) => (
                <div
                  key={service.title}
                  className="rounded-sm bg-card p-8 shadow-[0_4px_6px_-1px_rgb(0_0_0_/_0.1)] transition-shadow hover:shadow-[0_8px_12px_-2px_rgb(0_0_0_/_0.12)]"
                >
                  <service.icon
                    size={24}
                    strokeWidth={2.5}
                    className="mb-6 text-forest"
                    aria-hidden="true"
                  />
                  <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-navy">
                    {service.overline}
                  </p>
                  <h3 className="mb-3 text-lg font-bold text-midnight md:text-xl">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-charcoal md:text-base">
                    {service.text}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}

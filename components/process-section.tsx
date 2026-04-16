import { PhoneCall, SatelliteDish, FileCheck } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: PhoneCall,
    title: "Vi nazovete nas",
    text: "Objasnite nam problem u 5 minuta. Dajemo vam iskren savjet isplati li se uopće ulaziti u proces.",
  },
  {
    number: "02",
    icon: SatelliteDish,
    title: "Mi mjerimo i rješavamo birokraciju",
    text: "Izlazimo na teren, mjerimo najmodernijom opremom i izrađujemo elaborat. Mi komuniciramo s katastrom da vi ne morate.",
  },
  {
    number: "03",
    icon: FileCheck,
    title: "Vi dobivate rješenje",
    text: "Dobivate službene dokumente, čiste vlasničke listove i miran san.",
  },
]

export function ProcessSection() {
  return (
    <section className="section-space bg-background">
      <div className="page-shell">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-charcoal md:text-3xl lg:text-4xl text-balance">
            Do čistih papira u 3 jednostavna koraka
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <div key={step.number} className="relative flex flex-col items-center text-center">
              {/* Connector line (desktop only) */}
              {i < steps.length - 1 && (
                <div className="absolute top-10 left-[calc(50%+40px)] hidden h-px w-[calc(100%-80px)] bg-border md:block" aria-hidden="true" />
              )}

              {/* Number circle */}
              <div className="relative mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-secondary">
                <span className="text-2xl font-bold text-navy">
                  {step.number}
                </span>
                <step.icon
                  size={20}
                  strokeWidth={2.5}
                  className="absolute -bottom-1 -right-1 text-forest"
                  aria-hidden="true"
                />
              </div>

              <h3 className="mb-3 text-lg font-bold text-midnight md:text-xl">
                {step.title}
              </h3>
              <p className="max-w-xs text-sm leading-relaxed text-charcoal md:text-base">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

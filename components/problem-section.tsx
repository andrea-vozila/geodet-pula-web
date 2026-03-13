import { Home, FileText, MapPin } from "lucide-react"

const problems = [
  {
    icon: Home,
    title: "Kuća je na terenu, ali na papiru je livada?",
    text: "Treba vam upis kuće kako biste dobili kredit, prodali je ili izbjegli probleme s inspekcijom.",
  },
  {
    icon: FileText,
    title: "U katastru jedno, u gruntovnici drugo?",
    text: "Imate kupca za nekretninu, ali prodaja stoji jer papiri nisu čisti, a sud traži geodetski elaborat.",
  },
  {
    icon: MapPin,
    title: "Niste sigurni gdje je granica?",
    text: "Bojite se da je susjed ušao u vašu parcelu, želite postaviti ogradu, ali ne želite svađu bez službenog dokaza.",
  },
]

export function ProblemSection() {
  return (
    <section className="bg-background py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-charcoal md:text-3xl lg:text-4xl text-balance">
            Zvuči li vam neka od ovih situacija poznato?
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base lg:text-lg">
            Ne dopustite da vam neuredni papiri blokiraju život i investicije.{" "}
            <br className="hidden md:block" />
            Mi to rješavamo.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="rounded-sm border-none bg-card p-8 shadow-[0_4px_6px_-1px_rgb(0_0_0_/_0.1)] transition-shadow hover:shadow-[0_8px_12px_-2px_rgb(0_0_0_/_0.12)]"
            >
              <problem.icon
                size={24}
                strokeWidth={2.5}
                className="mb-6 text-forest"
                aria-hidden="true"
              />
              <h3 className="mb-3 text-base font-semibold text-midnight md:text-lg">
                {problem.title}
              </h3>
              <p className="text-sm leading-relaxed text-charcoal md:text-base">
                {problem.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { SiteHeader } from "@/components/site-header"
import { FooterSection } from "@/components/footer-section"

export default function LegalInformationPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="section-space bg-background">
          <div className="page-shell">
            <div className="page-shell-narrow">
              <h1 className="mb-6 text-3xl font-bold tracking-tight text-charcoal md:text-4xl lg:text-5xl text-balance">
                Pravne informacije tvrtke GEODET d.o.o.
              </h1>
              <h2 className="mb-4 text-xl font-semibold text-midnight md:text-2xl">
                Uvodne odredbe
              </h2>
              <p className="text-sm leading-relaxed text-charcoal md:text-base lg:text-lg">
                Dobrodošli na web stranicu geodet-pula.hr. Pristupom, pregledavanjem i korištenjem ove web
                stranice potvrđujete da ste pročitali, razumjeli i da se u cijelosti slažete s ovdje navedenim
                Uvjetima korištenja, Politikom privatnosti te Pravilima o kolačićima. Ako se ne slažete s bilo
                kojim dijelom ovih uvjeta, molimo vas da prestanete s korištenjem ove web stranice. Svrha ovih
                pravnih informacija je transparentno vas obavijestiti o pravilima korištenja našeg sadržaja,
                našim odgovornostima te o načinu na koji prikupljamo, obrađujemo i štitimo vaše osobne podatke
                sukladno važećim zakonskim propisima.
              </p>

              <h2
                id="impressum"
                className="mt-10 mb-4 text-xl font-semibold text-midnight md:text-2xl scroll-mt-24 md:scroll-mt-32"
              >
                1. Impressum (Osnovni podaci o tvrtki)
              </h2>
              <p className="mb-3 text-sm leading-relaxed text-charcoal md:text-base lg:text-lg">
                Ova web stranica u vlasništvu je i pod upravljanjem tvrtke:
              </p>
              <ul className="mb-6 list-disc space-y-1 pl-5 text-sm leading-relaxed text-charcoal md:text-base lg:text-lg">
                <li>Naziv: GEODET d. o. o.</li>
                <li>Sjedište: Mutilska ulica - Via Mutila 23, 52100 Pula</li>
                <li>OIB: 49185821168</li>
                <li>MBS: 03935655</li>
                <li>Direktor: Kristina Opić Filipović</li>
                <li>Kontakt e-mail: marin@geodet.hr</li>
                <li>Kontakt telefon: +385 52 213 777</li>
              </ul>

              <h2
                id="uvjeti-koristenja"
                className="mt-10 mb-4 text-xl font-semibold text-midnight md:text-2xl scroll-mt-24 md:scroll-mt-32"
              >
                2. Uvjeti korištenja
              </h2>
              <p className="mb-3 text-sm leading-relaxed text-charcoal md:text-base lg:text-lg">
                Korištenjem web stranice geodet-pula.hr (u daljnjem tekstu: &quot;Stranica&quot;) prihvaćate ove
                Uvjete korištenja. Sadržaj na Stranici isključivo je informativne prirode. Iako se trudimo
                osigurati točnost informacija, GEODET d.o.o. ne preuzima odgovornost za eventualne greške ili
                propuste. Sve geodetske usluge i savjeti postaju pravno obvezujući isključivo potpisivanjem
                službenog ugovora ili narudžbenice za izradu geodetskih elaborata.
              </p>
              <ul className="mb-6 list-disc space-y-1 pl-5 text-sm leading-relaxed text-charcoal md:text-base lg:text-lg">
                <li>
                  Autorska prava (Intelektualno vlasništvo): Sav sadržaj na ovoj web stranici, uključujući
                  tekstove, grafike, logotipe, dizajn i softverski kod, zaštićen je autorskim pravima i
                  isključivo je vlasništvo tvrtke GEODET d.o.o. Zabranjeno je svako neovlašteno kopiranje,
                  distribucija ili korištenje sadržaja u komercijalne svrhe bez našeg prethodnog pisanog
                  odobrenja.
                </li>
                <li>
                  Poveznice na treće strane: Naša stranica može sadržavati poveznice na vanjske web stranice
                  koje nisu pod našom kontrolom. GEODET d.o.o. ne preuzima odgovornost za sadržaj, politiku
                  privatnosti ili sigurnost tih vanjskih stranica.
                </li>
                <li>
                  Izmjene pravila: Zadržavamo pravo povremene izmjene i dopune ovih Uvjeta korištenja bez
                  prethodne najave. Vaša je odgovornost redovito provjeravati ovu stranicu kako biste bili
                  upoznati s eventualnim promjenama.
                </li>
              </ul>

              <h2
                id="politika-privatnosti"
                className="mt-10 mb-4 text-xl font-semibold text-midnight md:text-2xl scroll-mt-24 md:scroll-mt-32"
              >
                3. Politika privatnosti
              </h2>
              <p className="mb-3 text-sm leading-relaxed text-charcoal md:text-base lg:text-lg">
                Vaša privatnost nam je važna. Osobne podatke koje nam pošaljete putem kontakt forme (vaše ime,
                e-mail adresa, sadržaj poruke) koristimo isključivo u svrhu odgovaranja na vaš upit i pružanja
                tražene geodetske usluge. Podatke nećemo dijeliti, prodavati niti ustupati trećim stranama, osim
                ako to nije nužno za izvršenje zakonskih obveza.
              </p>
              <ul className="mb-6 list-disc space-y-1 pl-5 text-sm leading-relaxed text-charcoal md:text-base lg:text-lg">
                <li>
                  Korisnička prava (Prava ispitanika): Sukladno Općoj uredbi o zaštiti podataka (GDPR), imate
                  pravo u svakom trenutku zatražiti uvid u vaše osobne podatke koje posjedujemo, zatražiti njihov
                  ispravak ili potpuno brisanje javljanjem na naš e-mail.
                </li>
                <li>
                  Rok čuvanja podataka: Podatke iz vaših upita čuvamo do završetka poslovne komunikacije ili, u
                  slučaju ostvarivanja suradnje, do isteka zakonskog roka predviđenog za čuvanje poslovne
                  dokumentacije.
                </li>
                <li>
                  Pravo na prigovor nadzornom tijelu: Ako smatrate da je došlo do povrede obrade vaših osobnih
                  podataka, imate pravo podnijeti prigovor nadležnom tijelu, odnosno Agenciji za zaštitu osobnih
                  podataka (AZOP).
                </li>
                <li>
                  Zaštita od spama: Ova je stranica zaštićena Cloudflare Turnstile sustavom u svrhu sprječavanja
                  spama i zloupotrebe. Sukladno tome, primjenjuju se Cloudflareova Pravila o privatnosti i Uvjeti
                  pružanja usluge.
                </li>
              </ul>

              <h2
                id="postavke-kolacica"
                className="mt-10 mb-4 text-xl font-semibold text-midnight md:text-2xl scroll-mt-24 md:scroll-mt-32"
              >
                4. Pravila o kolačićima (Cookies)
              </h2>
              <p className="mb-3 text-sm leading-relaxed text-charcoal md:text-base lg:text-lg">
                Ova web stranica koristi samo nužne kolačiće i tehnologije trećih strana potrebne za osnovno
                funkcioniranje i sigurnost stranice:
              </p>
              <ul className="mb-3 list-disc space-y-1 pl-5 text-sm leading-relaxed text-charcoal md:text-base lg:text-lg">
                <li>
                  Nužni kolačići: Koristimo Cloudflare Turnstile kako bismo zaštitili našu kontakt formu od
                  zlonamjernih botova.
                </li>
                <li>
                  Kolačići trećih strana: Naša stranica koristi Google Maps za prikaz lokacije ureda, koji može
                  postaviti vlastite kolačiće sukladno Googleovim pravilima privatnosti.
                </li>
              </ul>
              <p className="text-sm leading-relaxed text-charcoal md:text-base lg:text-lg">
                Naša stranica NE KORISTI kolačiće za marketinško praćenje i analitiku (poput Facebook Pixela ili
                Google Analyticsa).
              </p>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  )
}


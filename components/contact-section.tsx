"use client";

import { useState } from "react";
import Script from "next/script";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Navigation,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useAnchorNavigation } from "@/lib/utils/scroll";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactSection() {
  const onAnchorClick = useAnchorNavigation();
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "submitting") return;

    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      ...Object.fromEntries(formData),
      _email: {
        subject: "Novi upit s web stranice",
      },
    };

    try {
      const response = await fetch("https://submit-form.com/RsW8IzEhI", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        async
        defer
      />
      <section
        className="scroll-mt-24 bg-secondary py-20 lg:py-24 md:scroll-mt-32"
        id="contact"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Section header */}
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-charcoal md:text-3xl lg:text-4xl text-balance">
              Nemojte nagađati s vlastitom imovinom.
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base lg:text-lg">
              Svaki dan čekanja može značiti propalu prodaju ili kaznu. Javite
              nam se danas.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Left: Contact Form */}
            <div
              id="contact-form"
              className="rounded-sm bg-card p-6 shadow-[0_4px_6px_-1px_rgb(0_0_0_/_0.1)] sm:p-8 lg:p-10"
            >
              {status === "success" ? (
                <div className="flex min-h-[260px] flex-col items-center justify-center text-center sm:min-h-[280px]">
                  <CheckCircle2
                    size={40}
                    className="mb-4 text-[#166534]"
                    aria-hidden="true"
                  />
                  <h3 className="mb-2 text-base font-bold text-midnight md:text-lg lg:text-xl">
                    Upit zaprimljen!
                  </h3>
                  <p className="max-w-md text-sm leading-relaxed text-charcoal md:text-base">
                    Javit ćemo se u najkraćem roku. <br /> Za hitne slučajeve
                    nazovite nas izravno.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="mb-6 text-base font-bold text-midnight md:text-lg lg:text-xl">
                    Zatražite besplatnu procjenu stanja odmah
                  </h3>
                  <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                    {/* Honeypot field */}
                    <div className="sr-only">
                      <label htmlFor="_phone_number">Broj telefona</label>
                      <input
                        type="text"
                        id="_phone_number"
                        name="_phone_number"
                        tabIndex={-1}
                        autoComplete="off"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <Label
                        htmlFor="name"
                        className="text-sm font-medium text-charcoal"
                      >
                        Ime i prezime
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        placeholder="Vaše ime i prezime"
                        className="rounded-sm border-input bg-background focus-visible:border-navy focus-visible:ring-navy/20"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label
                        htmlFor="email"
                        className="text-sm font-medium text-charcoal"
                      >
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        placeholder="vas@email.com"
                        className="rounded-sm border-input bg-background focus-visible:border-navy focus-visible:ring-navy/20"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label
                        htmlFor="message"
                        className="text-sm font-medium text-charcoal"
                      >
                        {"Poruka / Upit"}
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        placeholder="Opišite nam svoju situaciju..."
                        className="rounded-sm border-input bg-background focus-visible:border-navy focus-visible:ring-navy/20"
                      />
                    </div>

                    {/* Cloudflare Turnstile */}
                    <div
                      className="cf-turnstile"
                      data-sitekey="0x4AAAAAACoAE7yAEk2CiCnB"
                    />

                    <Button
                      type="submit"
                      disabled={status === "submitting"}
                      className="mt-2 h-10 rounded-sm bg-navy px-4 py-2 text-sm font-semibold text-primary-foreground shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] ring-1 ring-navy/20 transition-all hover:-translate-y-1 hover:bg-navy-dark active:scale-95 md:h-12 md:px-6 md:text-base"
                    >
                      <Mail size={18} strokeWidth={2.5} aria-hidden="true" />
                      {status === "submitting"
                        ? "Slanje..."
                        : "Pošaljite nam upit"}
                    </Button>

                    {status === "error" && (
                      <p className="text-sm text-red-600">
                        Ups! Došlo je do pogreške. <br /> Molimo pokušajte
                        ponovno ili nas nazovite.
                      </p>
                    )}

                    <p className="text-xs text-muted-foreground">
                      Vaši podaci su sigurni i koriste se isključivo za odgovor
                      na vaš upit.
                    </p>
                  </form>
                </>
              )}
            </div>

            {/* Right: Info panel */}
            <div className="flex flex-col gap-8">
              <div
                id="contact-info"
                className="scroll-mt-24 rounded-sm bg-card p-6 shadow-[0_4px_6px_-1px_rgb(0_0_0_/_0.1)] sm:p-8 md:scroll-mt-32"
              >
                <h3 className="mb-4 text-base font-bold text-midnight md:text-lg lg:text-xl">
                  Trebate hitan odgovor?
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-charcoal md:text-base">
                  Dostupni smo na telefon radnim danom ili nam pošaljite email.
                </p>

                {/* Desktop/Tablet: anchor to contact section */}
                <Button
                  asChild
                  variant="outline"
                  className="mb-8 hidden h-10 rounded-sm border-navy px-4 text-sm font-semibold text-navy transition-all hover:-translate-y-1 hover:bg-navy hover:text-primary-foreground active:scale-95 md:inline-flex md:h-12 md:px-6 md:text-base"
                >
                  <a
                    href="/#contact"
                    onClick={(e) => onAnchorClick(e, "/#contact")}
                  >
                    <Phone size={18} strokeWidth={2.5} aria-hidden="true" />
                    Nazovite nas
                  </a>
                </Button>

                {/* Mobile: direct phone call */}
                <Button
                  asChild
                  variant="outline"
                  className="mb-8 flex h-10 rounded-sm border-navy px-4 py-2 text-sm font-semibold text-navy transition-all hover:-translate-y-1 hover:bg-navy hover:text-primary-foreground active:scale-95 md:hidden"
                >
                  <a href="tel:+385992188077">
                    <Phone size={18} strokeWidth={2.5} aria-hidden="true" />
                    Nazovite nas
                  </a>
                </Button>

                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-3">
                    <Phone
                      size={20}
                      strokeWidth={2.5}
                      className="mt-0.5 shrink-0 text-forest"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-sm font-semibold text-midnight">
                        Telefon
                      </p>
                      <a
                        href="tel:+385992188077"
                        className="block text-sm text-charcoal hover:text-navy"
                      >
                        +385 99 218 8077
                      </a>
                      <a
                        href="tel:+38552213777"
                        className="block text-sm text-charcoal hover:text-navy"
                      >
                        +385 52 213 777
                      </a>
                      <a
                        href="tel:+38598219197"
                        className="block text-sm text-charcoal hover:text-navy"
                      >
                        +385 98 219 197
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail
                      size={20}
                      strokeWidth={2.5}
                      className="mt-0.5 shrink-0 text-forest"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-sm font-semibold text-midnight">
                        Email
                      </p>
                      <a
                        href="mailto:marin@geodet.hr"
                        className="text-sm text-charcoal hover:text-navy"
                      >
                        marin@geodet.hr
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin
                      size={20}
                      strokeWidth={2.5}
                      className="mt-0.5 shrink-0 text-forest"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-sm font-semibold text-midnight">
                        Adresa
                      </p>
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=Mutilska+23,+52100+Pula,+Hrvatska"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-charcoal transition-colors hover:text-navy"
                      >
                        Mutilska 23, 52100 Pula
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock
                      size={20}
                      strokeWidth={2.5}
                      className="mt-0.5 shrink-0 text-forest"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-sm font-semibold text-midnight">
                        Radno vrijeme
                      </p>
                      <p className="text-sm text-charcoal">
                        {"Pon \u2013 Pet: 08:00 \u2013 16:00"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map with native routing CTA */}
              <div className="w-full">
                <div className="relative w-full min-h-[350px] overflow-hidden rounded-xl border border-slate-200 shadow-md md:h-full">
                  <iframe
                    title="Karta lokacije ureda Geodet d.o.o."
                    src="https://www.google.com/maps?q=Mutilska+23,+52100+Pula,+Hrvatska&output=embed"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 h-full w-full min-h-[350px] border-0"
                  />
                </div>
                <Button
                  asChild
                  className="mt-4 inline-flex rounded-sm bg-[#1D4ED8] px-4 py-2 text-sm font-semibold text-white shadow-md transition-colors hover:bg-[#1E3A8A]"
                >
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=Mutilska+23,+52100+Pula,+Hrvatska"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Navigation
                      size={18}
                      strokeWidth={2.5}
                      aria-hidden="true"
                    />
                    Upute do ureda
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

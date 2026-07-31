import { createFileRoute } from "@tanstack/react-router";
import { Clock3, Mail, MapPin, MessageCircle, ShieldCheck } from "lucide-react";

import { ContactForm } from "@/components/contact-form";
import { MarketingLayout } from "@/components/site-chrome";
import { SUPPORT_EMAIL, SUPPORT_EMAIL_URL } from "@/lib/site-urls";

const WHATSAPP_URL =
  "https://wa.me/573025673434?text=Hola%20Tara%2C%20quisiera%20pedir%20informaci%C3%B3n%20sobre%20una%20soluci%C3%B3n.";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto y solicitud de información | Alianza F1" },
      {
        name: "description",
        content:
          "Cuéntanos qué necesita tu empresa y pide información sobre software, automatización, inteligencia artificial, integraciones y modernización.",
      },
      { property: "og:title", content: "Hablemos de tu proyecto | Alianza F1" },
      {
        property: "og:description",
        content: "Una consulta breve para entender tu necesidad y recomendarte el siguiente paso.",
      },
      { property: "og:url", content: "/contacto" },
    ],
    links: [{ rel: "canonical", href: "/contacto" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <MarketingLayout>
      <section className="relative overflow-hidden border-b border-white/5 bg-hero">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-brand/10 blur-3xl"
        />
        <div className="relative mx-auto grid max-w-7xl gap-9 px-5 py-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-12 lg:py-20">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">
              <MessageCircle className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
              Contacto directo
            </span>
            <h1 className="mt-6 max-w-xl font-display text-4xl font-semibold leading-[1.04] tracking-tight sm:text-5xl lg:text-6xl">
              Hablemos de lo que tu empresa{" "}
              <span className="text-gradient-animated">necesita resolver.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Cuéntanos el contexto en menos de dos minutos. Revisamos personalmente tu solicitud y
              te orientamos sobre el siguiente paso.
            </p>

            <div className="mt-8 hidden max-w-xl gap-3 lg:grid lg:grid-cols-2">
              {[
                {
                  icon: Clock3,
                  title: "Respuesta humana",
                  description: "Recibes una primera orientación, no una respuesta automática.",
                },
                {
                  icon: ShieldCheck,
                  title: "Datos bajo control",
                  description: "La landing no almacena la información que escribes.",
                },
              ].map(({ icon: Icon, title, description }) => (
                <div key={title} className="rounded-2xl border border-white/8 bg-white/[0.025] p-4">
                  <Icon className="h-5 w-5 text-brand" aria-hidden="true" />
                  <h2 className="mt-3 text-sm font-semibold">{title}</h2>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 hidden border-t border-white/8 pt-6 lg:block">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                También puedes escribirnos directamente
              </p>
              <div className="mt-3 flex flex-col gap-3 text-sm sm:flex-row sm:flex-wrap">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 text-foreground/85 transition hover:text-foreground"
                >
                  <MessageCircle className="h-4 w-4 text-brand" aria-hidden="true" />
                  +57 302 567 3434
                </a>
                <a
                  href={SUPPORT_EMAIL_URL}
                  className="inline-flex items-center gap-2 text-foreground/85 transition hover:text-foreground"
                >
                  <Mail className="h-4 w-4 text-brand" aria-hidden="true" />
                  {SUPPORT_EMAIL}
                </a>
              </div>
              <p className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                Colombia · Atención remota para Latinoamérica
              </p>
            </div>
          </div>

          <ContactForm />

          <div className="border-t border-white/8 pt-6 lg:hidden">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              También puedes escribirnos directamente
            </p>
            <div className="mt-3 flex flex-col gap-3 text-sm">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 text-foreground/85 transition hover:text-foreground"
              >
                <MessageCircle className="h-4 w-4 text-brand" aria-hidden="true" />
                +57 302 567 3434
              </a>
              <a
                href={SUPPORT_EMAIL_URL}
                className="inline-flex items-center gap-2 text-foreground/85 transition hover:text-foreground"
              >
                <Mail className="h-4 w-4 text-brand" aria-hidden="true" />
                {SUPPORT_EMAIL}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14">
        <div className="grid gap-5 border-b border-white/5 pb-14 md:grid-cols-3">
          {[
            ["1", "Cuéntanos el contexto", "Qué necesitas resolver, mejorar o construir."],
            ["2", "Revisamos tu caso", "Identificamos alcance, dependencias y preguntas clave."],
            [
              "3",
              "Definimos el siguiente paso",
              "Una conversación, diagnóstico o propuesta inicial.",
            ],
          ].map(([number, title, description]) => (
            <article key={number} className="flex gap-4">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-brand/20 bg-brand/10 font-display text-sm font-semibold text-brand">
                {number}
              </span>
              <div>
                <h2 className="font-display text-base font-semibold">{title}</h2>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </MarketingLayout>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { Check, Handshake, MapPin, UserRoundCheck } from "lucide-react";
import { BrandCTA, MarketingLayout } from "@/components/site-chrome";

export const Route = createFileRoute("/nosotros")({
  head: () => ({
    meta: [
      { title: "Alianza F1 y Tara Campos Padilla | Nosotros" },
      {
        name: "description",
        content:
          "Conoce a Alianza F1 y a Tara Campos Padilla, ingeniera de software con más de 15 años de experiencia en sistemas empresariales.",
      },
    ],
    links: [{ rel: "canonical", href: "/nosotros" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <MarketingLayout>
      <section className="relative overflow-hidden border-b border-white/5 bg-hero">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[.8fr_1.2fr] lg:py-28">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute inset-10 -z-10 rounded-full bg-brand/25 blur-3xl"
            />
            <div className="card-elevated overflow-hidden">
              <img
                src="/Tara.png"
                alt="Tara Campos Padilla, ingeniera de software y directora de Alianza F1"
                width="800"
                height="1000"
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="border-t border-white/5 px-5 py-3 text-xs text-muted-foreground">
                Tara Campos Padilla · Ingeniera de software
              </div>
            </div>
          </div>
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">
              <UserRoundCheck className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
              Alianza F1
            </span>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Tecnología empresarial con{" "}
              <span className="text-gradient-animated">acompañamiento directo.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Alianza F1 diseña, desarrolla e implementa soluciones tecnológicas personalizadas para
              organizaciones que buscan optimizar procesos, integrar sistemas e incorporar
              inteligencia artificial de forma práctica.
            </p>
            <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
              La dirección técnica y comercial está a cargo de Tara Campos Padilla. Esto permite
              conversar directamente con quien analiza el proceso, diseña la arquitectura y acompaña
              la construcción de la solución.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <BrandCTA>Conversar con Tara</BrandCTA>
              <BrandCTA href="/casos" secondary>
                Ver experiencia
              </BrandCTA>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              icon: Handshake,
              title: "Relación directa",
              description:
                "Sin capas comerciales innecesarias: las decisiones técnicas y de negocio se conversan con la responsable del proyecto.",
            },
            {
              icon: Check,
              title: "Más de 15 años de experiencia",
              description:
                "Experiencia en software empresarial, sistemas legacy, bases de datos, integraciones, automatización e infraestructura.",
            },
            {
              icon: MapPin,
              title: "Colombia y Latinoamérica",
              description:
                "Atención remota para empresas y emprendedores de diferentes sectores y ubicaciones.",
            },
          ].map(({ icon: Icon, title, description }) => (
            <article key={title} className="card-elevated p-6">
              <Icon className="h-6 w-6 text-brand" aria-hidden="true" />
              <h2 className="mt-5 font-display text-xl font-semibold">{title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/5 bg-surface/30">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-2">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
              Principios
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              La tecnología debe producir valor dentro del proceso.
            </h2>
          </div>
          <ul className="grid gap-3">
            {[
              "Cada desarrollo debe responder a una necesidad empresarial identificable.",
              "Las soluciones deben ser mantenibles y capaces de crecer.",
              "La automatización debe reducir trabajo repetitivo y errores.",
              "La inteligencia artificial debe complementar los procesos humanos.",
              "El sistema debe adaptarse al negocio y no al contrario.",
            ].map((principle) => (
              <li
                key={principle}
                className="flex items-start gap-3 rounded-xl border border-white/8 bg-white/[0.025] p-4 text-sm text-foreground/85"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                {principle}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 text-center">
        <h2 className="font-display text-3xl font-semibold">
          ¿Tienes un proceso que necesita evolucionar?
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
          La evaluación inicial ayuda a determinar si existe un alcance viable y cuál capacidad de
          Alianza F1 aporta más valor.
        </p>
        <BrandCTA className="mt-7">Hablemos del proyecto</BrandCTA>
      </section>
    </MarketingLayout>
  );
}

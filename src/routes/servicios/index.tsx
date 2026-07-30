import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Bot, Check, Sparkles } from "lucide-react";
import { ServiceIcon } from "@/components/service-detail-page";
import { BrandCTA, MarketingLayout } from "@/components/site-chrome";
import { serviceCatalog } from "@/lib/site-content";

export const Route = createFileRoute("/servicios/")({
  head: () => ({
    meta: [
      { title: "Servicios de software, automatización e IA | Alianza F1" },
      {
        name: "description",
        content:
          "Software empresarial a medida, automatización, inteligencia artificial, integraciones, evolución legacy, infraestructura y sitios web.",
      },
    ],
    links: [{ rel: "canonical", href: "/servicios" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <MarketingLayout>
      <section className="relative overflow-hidden border-b border-white/5 bg-hero">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:py-28">
          <div className="max-w-4xl animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-gradient" />
              Servicios
            </span>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Tecnología que conecta procesos, información y{" "}
              <span className="text-gradient-animated">crecimiento.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Diseñamos soluciones alrededor de la operación real de cada empresa. El alcance puede
              comenzar con una fase concreta y evolucionar con evidencia.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <BrandCTA>Evaluar mi caso</BrandCTA>
              <BrandCTA href="#catalogo" secondary>
                Explorar servicios
              </BrandCTA>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16">
        <a
          href="/agente-ia"
          className="group relative grid overflow-hidden rounded-3xl border border-brand/30 bg-gradient-to-br from-brand/15 via-accent/8 to-transparent lg:grid-cols-[1fr_.9fr]"
        >
          <div
            aria-hidden="true"
            className="absolute -left-16 top-0 h-72 w-72 rounded-full bg-brand/15 blur-3xl"
          />
          <div className="relative p-7 sm:p-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand/25 bg-brand/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-brand">
              <Sparkles className="h-3.5 w-3.5" />
              Producto insignia
            </div>
            <h2 className="mt-5 font-display text-3xl font-semibold">
              Agente de IA empresarial con respuestas verificables.
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
              Consulta documentos autorizados, responde con contexto y muestra las fuentes
              utilizadas. Configurable para el conocimiento y los límites de cada organización.
            </p>
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm text-foreground/85">
              {["RAG", "Documentos autorizados", "Fuentes visibles"].map((item) => (
                <li key={item} className="inline-flex items-center gap-2">
                  <Check className="h-4 w-4 text-brand" />
                  {item}
                </li>
              ))}
            </ul>
            <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-brand transition group-hover:text-foreground">
              Conocer el agente
              <ArrowRight className="h-4 w-4" />
            </span>
          </div>
          <div className="relative min-h-64 overflow-hidden border-t border-white/10 lg:border-l lg:border-t-0">
            <img
              src="/alianza-f1-agente-ia.webp"
              alt=""
              width="1152"
              height="768"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.02]"
            />
            <Bot className="absolute right-5 top-5 h-7 w-7 text-brand" aria-hidden="true" />
          </div>
        </a>
      </section>

      <section id="catalogo" className="mx-auto max-w-7xl scroll-mt-24 px-5 pb-20">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
            Portafolio de capacidades
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Seis líneas que pueden trabajar de forma independiente o conectada.
          </h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {serviceCatalog.map((service, index) => (
            <a
              key={service.slug}
              href={`/servicios/${service.slug}`}
              className="group card-elevated relative flex min-h-80 flex-col p-6 tilt-hover tilt-hover-active"
            >
              <span className="absolute right-5 top-5 font-mono text-xs text-muted-foreground">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="grid h-12 w-12 place-items-center rounded-xl border border-brand/30 bg-brand/10 text-brand">
                <ServiceIcon name={service.icon} />
              </span>
              <h3 className="mt-7 font-display text-xl font-semibold">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {service.summary}
              </p>
              <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-brand transition group-hover:text-foreground">
                Explorar servicio
                <ArrowRight className="h-4 w-4" />
              </span>
            </a>
          ))}
        </div>
      </section>
    </MarketingLayout>
  );
}

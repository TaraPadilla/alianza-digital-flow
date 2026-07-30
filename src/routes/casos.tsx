import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check, Layers3 } from "lucide-react";
import { BrandCTA, MarketingLayout } from "@/components/site-chrome";
import { caseStudies } from "@/lib/site-content";

export const Route = createFileRoute("/casos")({
  head: () => ({
    meta: [
      { title: "Casos y experiencia empresarial | Alianza F1" },
      {
        name: "description",
        content:
          "Experiencia de Alianza F1 construyendo plataformas empresariales, sistemas por fases, integraciones y evolución de software.",
      },
    ],
    links: [{ rel: "canonical", href: "/casos" }],
  }),
  component: CasesPage,
});

function CasesPage() {
  return (
    <MarketingLayout>
      <section className="relative overflow-hidden border-b border-white/5 bg-hero">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:py-28">
          <div className="max-w-4xl animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">
              <Layers3 className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
              Experiencia aplicada
            </span>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Sistemas construidos para{" "}
              <span className="text-gradient-animated">operaciones reales.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Presentamos los casos de forma anónima para proteger la confidencialidad. El foco está
              en el problema, la solución y el efecto operativo.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid gap-5 lg:grid-cols-2">
          {caseStudies.map((study, index) => (
            <article
              key={study.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-surface/40 p-6 transition hover:border-brand/35 hover:bg-surface/60 sm:p-8"
            >
              <span
                aria-hidden="true"
                className="absolute left-0 top-8 h-12 w-[3px] rounded-r bg-brand opacity-50 transition group-hover:opacity-100"
              />
              <div className="flex items-center justify-between gap-4">
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand">
                  {study.sector}
                </span>
                <span className="font-mono text-xs text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h2 className="mt-4 font-display text-2xl font-semibold">{study.title}</h2>
              <div className="mt-6 space-y-5">
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Punto de partida
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/85">{study.problem}</p>
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Solución
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/85">
                    {study.solution}
                  </p>
                </div>
                <div className="rounded-xl border border-brand/20 bg-brand/[0.06] p-4">
                  <h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand">
                    <Check className="h-3.5 w-3.5" aria-hidden="true" />
                    Efecto operativo
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/90">{study.impact}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20">
        <div className="rounded-3xl border border-brand/25 bg-gradient-to-br from-brand/12 via-accent/8 to-transparent p-8 sm:p-12">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl font-semibold">
                Tu proceso no tiene que parecerse a estos casos.
              </h2>
              <p className="mt-3 text-muted-foreground">
                La primera conversación sirve para entender si existe un problema claro, una fase
                viable y una solución alineada con Alianza F1.
              </p>
            </div>
            <BrandCTA>
              Evaluar mi caso
              <ArrowRight className="hidden" />
            </BrandCTA>
          </div>
        </div>
      </section>
    </MarketingLayout>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { Check, GitPullRequestArrow, ShieldCheck } from "lucide-react";
import { BrandCTA, MarketingLayout } from "@/components/site-chrome";
import { methodologySteps } from "@/lib/site-content";

export const Route = createFileRoute("/metodologia")({
  head: () => ({
    meta: [
      { title: "Metodología de trabajo | Alianza F1" },
      {
        name: "description",
        content:
          "Descubrimiento, alcance, desarrollo iterativo, implementación y evolución para construir tecnología empresarial con decisiones claras.",
      },
    ],
    links: [{ rel: "canonical", href: "/metodologia" }],
  }),
  component: MethodologyPage,
});

function MethodologyPage() {
  return (
    <MarketingLayout>
      <section className="relative overflow-hidden border-b border-white/5 bg-hero">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[1fr_.8fr] lg:py-28">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">
              <GitPullRequestArrow className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
              Metodología
            </span>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Un camino claro para convertir una necesidad en{" "}
              <span className="text-gradient-animated">una solución útil.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              La metodología protege el alcance, reduce incertidumbre y permite validar resultados
              antes de ampliar la inversión.
            </p>
          </div>
          <div className="card-elevated p-7 sm:p-8">
            <ShieldCheck className="h-8 w-8 text-brand" aria-hidden="true" />
            <h2 className="mt-5 font-display text-2xl font-semibold">Principios del proceso</h2>
            <ul className="mt-5 space-y-3">
              {[
                "El problema de negocio se entiende antes de elegir tecnología.",
                "El alcance incluye funcionalidades, exclusiones y responsabilidades.",
                "La infraestructura y los servicios externos se hacen visibles.",
                "Soporte, garantía y evolución se tratan como conceptos diferentes.",
                "Cuando conviene, el proyecto se divide en fases.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground/85">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20">
        <ol className="relative space-y-5">
          <div
            aria-hidden="true"
            className="absolute bottom-10 left-7 top-10 hidden w-px bg-gradient-to-b from-brand via-accent to-transparent sm:block"
          />
          {methodologySteps.map((step) => (
            <li
              key={step.number}
              className="card-elevated relative grid gap-5 p-6 sm:grid-cols-[56px_1fr] sm:items-start sm:p-8"
            >
              <span className="relative z-10 grid h-14 w-14 place-items-center rounded-2xl border border-brand/30 bg-background font-display text-xl font-semibold text-brand">
                {step.number}
              </span>
              <div>
                <h2 className="font-display text-2xl font-semibold">{step.title}</h2>
                <p className="mt-2 max-w-3xl leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20">
        <div className="rounded-3xl border border-brand/25 bg-gradient-to-br from-brand/12 via-accent/8 to-transparent p-8 text-center sm:p-12">
          <h2 className="font-display text-3xl font-semibold">
            La primera fase comienza con una conversación.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Revisamos el proceso, las restricciones y el resultado esperado antes de plantear una
            solución o estimación.
          </p>
          <BrandCTA className="mt-7">Contar mi necesidad</BrandCTA>
        </div>
      </section>
    </MarketingLayout>
  );
}

import {
  ArrowRight,
  Boxes,
  Braces,
  Check,
  CloudCog,
  Code2,
  GitBranch,
  RefreshCcw,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { BrandCTA, MarketingLayout } from "@/components/site-chrome";
import { getService, type ServiceContent, type ServiceIconName } from "@/lib/site-content";

const icons: Record<ServiceIconName, LucideIcon> = {
  software: Boxes,
  automation: Workflow,
  integration: GitBranch,
  legacy: RefreshCcw,
  infrastructure: CloudCog,
  website: Code2,
};

const capabilityAnchors: Partial<Record<ServiceContent["slug"], string>> = {
  "software-empresarial": "aplicaciones-web",
  integraciones: "whatsapp",
  "evolucion-legacy": "soporte",
};

export function ServiceIcon({
  name,
  className = "h-5 w-5",
}: {
  name: ServiceIconName;
  className?: string;
}) {
  const Icon = icons[name];
  return <Icon className={className} aria-hidden="true" />;
}

export function ServiceDetailPage({ service }: { service: ServiceContent }) {
  return (
    <MarketingLayout>
      <section className="relative overflow-hidden border-b border-white/5 bg-hero">
        <div
          aria-hidden="true"
          className="absolute -right-24 top-0 h-96 w-96 rounded-full bg-brand/15 blur-3xl"
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[1.15fr_.85fr] lg:py-28">
          <div className="animate-fade-up">
            <nav aria-label="Migas de pan" className="text-xs text-muted-foreground">
              <a href="/" className="hover:text-foreground">
                Inicio
              </a>
              <span className="mx-2" aria-hidden="true">
                /
              </span>
              <a href="/servicios" className="hover:text-foreground">
                Servicios
              </a>
              <span className="mx-2" aria-hidden="true">
                /
              </span>
              <span className="text-foreground/80">{service.menuTitle}</span>
            </nav>
            <div className="mt-7 inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">
              <ServiceIcon name={service.icon} className="h-3.5 w-3.5 text-brand" />
              {service.eyebrow}
            </div>
            <h1 className="mt-5 max-w-4xl font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              {service.headline}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {service.summary}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <BrandCTA>Evaluar mi proyecto</BrandCTA>
              <BrandCTA href="/servicios" secondary>
                Ver todos los servicios
              </BrandCTA>
            </div>
          </div>

          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute inset-8 -z-10 rounded-full bg-brand/20 blur-3xl"
            />
            <div className="card-elevated relative overflow-hidden p-6 sm:p-8">
              <div className="flex items-center justify-between">
                <span className="grid h-14 w-14 place-items-center rounded-2xl border border-brand/30 bg-brand/10 text-brand">
                  <ServiceIcon name={service.icon} className="h-7 w-7" />
                </span>
                <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-300">
                  Solución a medida
                </span>
              </div>
              <h2 className="mt-8 font-display text-2xl font-semibold">{service.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {service.outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-2 text-sm text-foreground/85">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand/10 text-brand">
                      <Check className="h-3 w-3" aria-hidden="true" />
                    </span>
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        id={capabilityAnchors[service.slug]}
        className="mx-auto max-w-7xl scroll-mt-28 px-5 py-20"
      >
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
              Alcance adaptable
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Capacidades que se combinan según tu operación.
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">{service.description}</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {service.capabilities.map((capability) => (
              <div
                key={capability}
                className="card-elevated flex items-center gap-3 p-4 transition hover:border-brand/30 hover:bg-brand/[0.04]"
              >
                <Braces className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                <span className="text-sm font-medium">{capability}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/5 bg-surface/30">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
              Cuándo aporta más valor
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Una buena solución comienza con un problema bien definido.
            </h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {service.idealFor.map((item, index) => (
              <article key={item} className="card-elevated p-6">
                <span className="font-mono text-xs text-brand">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-5 text-sm leading-relaxed text-foreground/85">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
            Cómo lo abordamos
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            De la necesidad a una primera entrega útil.
          </h2>
        </div>
        <ol className="mt-10 grid gap-4 md:grid-cols-3">
          {service.process.map((step, index) => (
            <li key={step.title} className="card-elevated p-6 tilt-hover tilt-hover-active">
              <span className="font-display text-3xl font-semibold text-gradient">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20">
        <div className="rounded-3xl border border-brand/25 bg-gradient-to-br from-brand/12 via-accent/8 to-transparent p-7 sm:p-10">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                También puede interesarte
              </span>
              <h2 className="mt-3 font-display text-2xl font-semibold sm:text-3xl">
                Conecta esta capacidad con el resto de tu operación.
              </h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {service.related.map((slug) => {
                  const related = getService(slug);
                  return (
                    <a
                      key={slug}
                      href={`/servicios/${slug}`}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-3 py-2 text-xs font-medium text-foreground/85 transition hover:border-brand/30 hover:text-foreground"
                    >
                      {related.menuTitle}
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  );
                })}
              </div>
            </div>
            <BrandCTA>Conversemos sobre tu proceso</BrandCTA>
          </div>
        </div>
      </section>
    </MarketingLayout>
  );
}

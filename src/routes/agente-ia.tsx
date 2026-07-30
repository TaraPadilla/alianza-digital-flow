import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpenCheck,
  Check,
  FileLock2,
  Files,
  MessageSquareText,
  SearchCheck,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { BrandCTA, MarketingLayout } from "@/components/site-chrome";
import { PUBLIC_AGENT_URL } from "@/lib/site-urls";

export const Route = createFileRoute("/agente-ia")({
  head: () => ({
    meta: [
      { title: "Agente de IA empresarial con fuentes | Alianza F1" },
      {
        name: "description",
        content:
          "Convierte documentos autorizados en respuestas empresariales verificables. Conoce el agente de IA de Alianza F1 y conversa con la demostración pública.",
      },
    ],
    links: [{ rel: "canonical", href: "/agente-ia" }],
  }),
  component: AgentPage,
});

function AgentPage() {
  const features = [
    {
      icon: Files,
      title: "Conocimiento autorizado",
      description:
        "Trabaja sobre documentos y fuentes seleccionadas por la organización para cada caso de uso.",
    },
    {
      icon: SearchCheck,
      title: "Respuestas con contexto",
      description:
        "Recupera la información relevante antes de responder y evita depender solamente del conocimiento general del modelo.",
    },
    {
      icon: BookOpenCheck,
      title: "Fuentes visibles",
      description:
        "Muestra las referencias utilizadas para que el usuario pueda comprobar el origen de la respuesta.",
    },
    {
      icon: ShieldCheck,
      title: "Diseñado con límites",
      description:
        "Define alcance, permisos, exclusiones y comportamientos cuando la documentación no contiene una respuesta suficiente.",
    },
  ];

  const useCases = [
    "Consultas internas sobre políticas, procesos y manuales",
    "Asistencia sobre productos, servicios o documentación técnica",
    "Búsqueda guiada en bases documentales extensas",
    "Atención inicial con respuestas respaldadas por información oficial",
    "Apoyo a equipos comerciales, administrativos y operativos",
    "Clasificación y extracción de conocimiento documental",
  ];

  return (
    <MarketingLayout>
      <section className="relative overflow-hidden border-b border-white/5 bg-hero">
        <div
          aria-hidden="true"
          className="absolute -right-24 top-10 h-[480px] w-[480px] rounded-full bg-brand/20 blur-3xl"
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[1fr_1.05fr] lg:py-28">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand/25 bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-brand">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              Producto insignia de Alianza F1
            </div>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.03] tracking-tight sm:text-5xl lg:text-6xl">
              El conocimiento de tu empresa, convertido en{" "}
              <span className="text-gradient-animated">respuestas verificables.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Un agente de inteligencia artificial configurable con documentación empresarial
              autorizada, capaz de responder con contexto y mostrar las fuentes utilizadas.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <BrandCTA href={PUBLIC_AGENT_URL}>Conversar con el agente público</BrandCTA>
              <BrandCTA href="#como-funciona" secondary>
                Ver cómo funciona
              </BrandCTA>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs text-muted-foreground">
              {["Documentos autorizados", "Fuentes visibles", "Alcance configurable"].map(
                (item) => (
                  <span key={item} className="inline-flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
                    {item}
                  </span>
                ),
              )}
            </div>
          </div>

          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute inset-8 -z-10 rounded-full bg-brand/25 blur-3xl"
            />
            <div className="overflow-hidden rounded-3xl border border-brand/30 bg-[#050c22] shadow-2xl shadow-brand/10">
              <img
                src="/alianza-f1-agente-ia.webp"
                alt="Representación del flujo entre documentos autorizados, un agente de IA, una respuesta y sus fuentes"
                width="1152"
                height="768"
                className="aspect-[3/2] w-full object-cover"
              />
              <div className="grid gap-3 border-t border-white/10 p-4 sm:grid-cols-3">
                {[
                  ["01", "Consulta"],
                  ["02", "Contexto"],
                  ["03", "Respuesta + fuentes"],
                ].map(([number, label]) => (
                  <div key={number} className="rounded-xl bg-white/[0.035] px-3 py-2.5">
                    <span className="font-mono text-[10px] text-brand">{number}</span>
                    <span className="ml-2 text-xs font-medium">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
            Inteligencia empresarial con respaldo
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            No es un chatbot genérico. Es una puerta de acceso al conocimiento autorizado.
          </h2>
          <p className="mt-5 text-muted-foreground">
            El agente se diseña alrededor de una base documental, reglas de respuesta y objetivos
            concretos para la organización.
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, description }) => (
            <article key={title} className="card-elevated p-6 tilt-hover tilt-hover-active">
              <span className="grid h-11 w-11 place-items-center rounded-xl border border-brand/25 bg-brand/10 text-brand">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="como-funciona" className="scroll-mt-24 border-y border-white/5 bg-surface/30">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                Cómo funciona
              </span>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                De una pregunta a una respuesta que se puede comprobar.
              </h2>
              <p className="mt-5 text-muted-foreground">
                La arquitectura puede adaptarse a diferentes fuentes, niveles de acceso e
                integraciones según el proyecto.
              </p>
            </div>
            <ol className="space-y-4">
              {[
                {
                  icon: MessageSquareText,
                  title: "El usuario realiza una consulta",
                  description:
                    "La pregunta se interpreta dentro del propósito definido para el agente.",
                },
                {
                  icon: FileLock2,
                  title: "Se recupera información autorizada",
                  description:
                    "El sistema busca los fragmentos relevantes en la documentación disponible.",
                },
                {
                  icon: BookOpenCheck,
                  title: "Se genera una respuesta con referencias",
                  description:
                    "El usuario recibe una explicación clara acompañada por las fuentes empleadas.",
                },
              ].map(({ icon: Icon, title, description }, index) => (
                <li key={title} className="card-elevated flex gap-5 p-5 sm:p-6">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand/10 text-brand">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="font-mono text-[10px] text-brand">
                      PASO {String(index + 1).padStart(2, "0")}
                    </span>
                    <strong className="mt-1 block font-display text-lg">{title}</strong>
                    <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">
                      {description}
                    </span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
              Aplicaciones
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Un mismo enfoque, diferentes casos de uso.
            </h2>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {useCases.map((useCase) => (
              <li
                key={useCase}
                className="flex items-start gap-3 rounded-xl border border-white/8 bg-white/[0.025] p-4 text-sm leading-relaxed text-foreground/85"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                {useCase}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20">
        <div className="relative overflow-hidden rounded-3xl border border-brand/30 bg-gradient-to-br from-brand/15 via-accent/10 to-transparent p-8 sm:p-12">
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand/20 blur-3xl"
          />
          <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl font-semibold">
                Comprueba la experiencia directamente.
              </h2>
              <p className="mt-3 text-muted-foreground">
                Conversa con el agente público de Alianza F1 y observa cómo responde utilizando
                conocimiento institucional autorizado.
              </p>
            </div>
            <a
              href={PUBLIC_AGENT_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl btn-primary btn-primary-hover px-5 py-3 text-sm font-semibold"
            >
              Abrir agente público
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </MarketingLayout>
  );
}

import {
  CheckCircle2,
  ExternalLink,
  FileCheck2,
  LockKeyhole,
  MessageCircleMore,
} from "lucide-react";

const PUBLIC_AGENT_URL = "https://ia.tecnologiaydesarrolloweb.com/";

const benefits = [
  {
    icon: FileCheck2,
    title: "Documentos autorizados",
    description: "Responde únicamente con el conocimiento empresarial disponible para la consulta.",
  },
  {
    icon: CheckCircle2,
    title: "Respuestas verificables",
    description: "Incluye las fuentes utilizadas para que puedas validar cada respuesta.",
  },
  {
    icon: LockKeyhole,
    title: "Información bajo control",
    description: "El acceso al conocimiento respeta los permisos definidos por la organización.",
  },
];

export function EnterpriseAgentCard() {
  return (
    <article
      aria-labelledby="enterprise-agent-title"
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/10 via-brand/5 to-accent/10"
    >
      <div
        aria-hidden="true"
        className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-brand/20 blur-3xl"
      />

      <div className="relative overflow-hidden border-b border-white/10 bg-[#050c22]">
        <img
          src="/alianza-f1-agente-ia.webp"
          alt=""
          aria-hidden="true"
          width="1152"
          height="768"
          loading="lazy"
          decoding="async"
          className="aspect-[16/7] w-full object-cover transition duration-700 group-hover:scale-[1.02]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-background/55 via-transparent to-transparent"
        />
        <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-background/80 px-3 py-1.5 text-xs font-medium text-foreground shadow-lg backdrop-blur-md">
          <span className="relative flex h-2 w-2" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Agente público de Alianza F1
        </div>
      </div>

      <div className="relative flex flex-1 flex-col p-5 sm:p-6">
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-brand/20 bg-brand/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand">
          <MessageCircleMore className="h-3.5 w-3.5" aria-hidden="true" />
          Inteligencia empresarial
        </div>

        <h2
          id="enterprise-agent-title"
          className="mt-4 font-display text-2xl font-semibold leading-tight tracking-tight sm:text-3xl"
        >
          Agente de IA entrenado con información empresarial
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
          Conversa con el agente de Alianza F1 y obtén respuestas claras basadas en documentos
          autorizados, con las fuentes visibles para comprobar la información.
        </p>

        <ul className="mt-5 grid gap-3" aria-label="Beneficios del agente de IA">
          {benefits.map(({ icon: Icon, title, description }) => (
            <li
              key={title}
              className="flex gap-3 rounded-xl border border-white/8 bg-white/[0.025] p-3"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand/10 text-brand">
                <Icon className="h-4 w-4" aria-hidden="true" />
              </span>
              <span>
                <strong className="block text-sm font-semibold text-foreground">{title}</strong>
                <span className="mt-0.5 block text-xs leading-relaxed text-muted-foreground">
                  {description}
                </span>
              </span>
            </li>
          ))}
        </ul>

        <a
          href={PUBLIC_AGENT_URL}
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Conversar con el agente público de Alianza F1; abre en una pestaña nueva"
          className="magnetic magnetic-shine mt-6 inline-flex w-fit items-center gap-2 rounded-xl btn-primary btn-primary-hover px-5 py-3 text-sm font-semibold shadow-lg"
        >
          Conversar con el agente
          <ExternalLink className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}

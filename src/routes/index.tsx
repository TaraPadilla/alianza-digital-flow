import { createFileRoute } from "@tanstack/react-router";
import {
  createElement,
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
  type CSSProperties,
} from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { EnterpriseAgentCard } from "@/components/enterprise-agent-card";
import { TechnologyBlogCard } from "@/components/technology-blog-card";

/* ---------- Scroll reveal ---------- */
function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  as?: keyof React.JSX.IntrinsicElements;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
            break;
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const style: CSSProperties = { transitionDelay: `${delay}ms` };
  return createElement(
    Tag,
    {
      ref,
      style,
      className: `reveal ${visible ? "reveal-in" : ""} ${className}`,
    },
    children,
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    links: [{ rel: "canonical", href: "/" }],
    meta: [{ property: "og:url", content: "/" }],
  }),
  component: LandingPage,
});

const WHATSAPP_BASE = "https://wa.me/573025673434";
const DEFAULT_MSG = "Hola Tara, vi la página de Alianza F1 y quisiera conversar sobre un proyecto.";
const waUrl = (msg = DEFAULT_MSG) => `${WHATSAPP_BASE}?text=${encodeURIComponent(msg)}`;

/* ---------- Small building blocks ---------- */

function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">
      <span className="h-1.5 w-1.5 rounded-full bg-brand-gradient animate-pulse-glow" />
      {children}
    </span>
  );
}

function PrimaryCTA({
  children,
  href = waUrl(),
  className = "",
}: {
  children: ReactNode;
  href?: string;
  className?: string;
}) {
  const isWhatsApp = href?.includes("wa.me");
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer noopener"
      className={`magnetic magnetic-shine inline-flex items-center gap-2 rounded-xl ${isWhatsApp ? "btn-whatsapp btn-whatsapp-hover" : "btn-primary btn-primary-hover"} px-5 py-3 text-sm font-semibold ${className}`}
    >
      {isWhatsApp && <img src="/whatsapp.svg" alt="WhatsApp" className="h-4 w-4" />}
      {children}
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M5 12h14M13 5l7 7-7 7" />
      </svg>
    </a>
  );
}

function GhostCTA({ children, href }: { children: ReactNode; href: string }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer noopener"
      className="inline-flex items-center gap-2 rounded-xl glass px-5 py-3 text-sm font-semibold text-foreground/90 transition hover:text-foreground hover:border-white/20"
    >
      {children}
    </a>
  );
}

/* ---------- Header ---------- */

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const nav = [
    { href: "#soluciones", label: "Soluciones" },
    { href: "#casos", label: "Casos" },
    { href: "#metodologia", label: "Metodología" },
    { href: "#sobre", label: "Sobre Tara" },
    { href: "#faq", label: "Preguntas" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-white/5 bg-background/70 backdrop-blur-xl transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:flex sm:justify-between">
        <a href="#top" className="flex min-w-0 items-center gap-3">
          <img
            src="/Logo.png"
            alt="Alianza F1 Logo"
            className={`shrink-0 object-contain transition-all duration-300 ${scrolled ? "h-12 w-12 mt-0 ml-0" : "-mt-8 -ml-4 h-40 w-40"}`}
          />
          <div className="flex flex-col">
            <span
              className={`truncate font-display font-semibold tracking-tight transition-all duration-300 ${scrolled ? "text-xl" : "text-3xl"}`}
            >
              <span className="text-gradient">Web & Móvil</span>
            </span>
            <span
              className={`text-xs text-muted-foreground hidden sm:block transition-all duration-300 ${scrolled ? "opacity-0 h-0" : "opacity-100"}`}
            >
              Transformando ideas en soluciones digitales innovadoras y eficientes.
            </span>
          </div>
        </a>
        <nav aria-label="Principal" className="hidden items-center gap-7 md:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-base text-muted-foreground transition hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-lg glass md:hidden"
            aria-label="Abrir menú"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>
          <a
            href={waUrl()}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-xl btn-whatsapp btn-whatsapp-hover px-4 py-2 text-base font-semibold"
          >
            <img src="/whatsapp.svg" alt="WhatsApp" className="h-5 w-5" />
            Hablemos
          </a>
        </div>
      </div>
      {open && (
        <div className="border-t border-white/5 bg-background/95 md:hidden">
          <nav aria-label="Móvil" className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-3">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
            <a
              href={waUrl()}
              target="_blank"
              rel="noreferrer"
              className="mt-2 rounded-lg btn-whatsapp btn-whatsapp-hover px-3 py-2 text-center text-sm font-semibold"
            >
              <img src="/whatsapp.svg" alt="WhatsApp" className="h-4 w-4 inline mr-1" />
              Hablemos
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

/* ---------- Hero visual (custom abstract) ---------- */

function HeroVisual() {
  return (
    <div className="relative aspect-[5/4] w-full">
      {/* ambient blobs */}
      <div
        aria-hidden
        className="absolute -left-10 -top-10 h-64 w-64 rounded-full bg-brand/30 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-10 -right-10 h-64 w-64 rounded-full bg-accent/30 blur-3xl"
      />

      {/* dashboard card */}
      <div
        className="relative h-full w-full card-elevated overflow-hidden p-4 sm:p-5"
        style={{ boxShadow: "var(--shadow-elegant)" }}
      >
        {/* window chrome */}
        <div className="flex items-center gap-2 border-b border-white/5 pb-3">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
          <div className="ml-3 flex-1 truncate rounded-md bg-white/5 px-2 py-1 text-[10px] text-muted-foreground">
            alianzaf1.app / operaciones
          </div>
        </div>

        <div className="mt-4 grid grid-cols-6 gap-3">
          {/* KPI row */}
          {[
            { l: "Procesos activos", v: "24" },
            { l: "Automatizaciones", v: "137" },
            { l: "Integraciones", v: "9" },
          ].map((k) => (
            <div
              key={k.l}
              className="col-span-2 rounded-xl border border-white/5 bg-white/[0.03] p-3"
            >
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                {k.l}
              </div>
              <div className="mt-1 font-display text-2xl font-semibold text-gradient">{k.v}</div>
            </div>
          ))}

          {/* Flow visualization */}
          <div className="col-span-6 rounded-xl border border-white/5 bg-white/[0.03] p-4">
            <div className="mb-3 flex items-center justify-between">
              <div className="text-xs font-medium">Flujo de automatización</div>
              <div className="text-[10px] text-muted-foreground">n8n · WhatsApp · CRM</div>
            </div>
            <svg viewBox="0 0 480 140" className="w-full">
              <defs>
                <linearGradient id="line" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="oklch(0.72 0.19 258)" />
                  <stop offset="100%" stopColor="oklch(0.66 0.22 300)" />
                </linearGradient>
              </defs>
              {/* nodes */}
              {[
                { x: 40, y: 70, label: "Entrada" },
                { x: 160, y: 30, label: "IA" },
                { x: 160, y: 110, label: "Reglas" },
                { x: 300, y: 70, label: "CRM" },
                { x: 430, y: 70, label: "Cliente" },
              ].map((n) => (
                <g key={n.label}>
                  <circle
                    cx={n.x}
                    cy={n.y}
                    r="18"
                    fill="oklch(0.24 0.05 265)"
                    stroke="url(#line)"
                    strokeWidth="1.5"
                  />
                  <text
                    x={n.x}
                    y={n.y + 4}
                    textAnchor="middle"
                    fontSize="9"
                    fill="oklch(0.9 0.02 258)"
                  >
                    {n.label}
                  </text>
                </g>
              ))}
              {/* edges */}
              {[
                "M58,70 C 100,70 110,30 142,30",
                "M58,70 C 100,70 110,110 142,110",
                "M178,30 C 220,30 240,70 282,70",
                "M178,110 C 220,110 240,70 282,70",
                "M318,70 L 412,70",
              ].map((d, i) => (
                <path
                  key={i}
                  d={d}
                  fill="none"
                  stroke="url(#line)"
                  strokeWidth="1.5"
                  strokeDasharray="4 6"
                  className="animate-dash"
                />
              ))}
            </svg>
          </div>

          {/* Mini chart */}
          <div className="col-span-4 rounded-xl border border-white/5 bg-white/[0.03] p-3">
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
              Tareas manuales eliminadas
            </div>
            <svg viewBox="0 0 240 60" className="mt-2 w-full">
              <defs>
                <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="oklch(0.72 0.19 258 / 0.6)" />
                  <stop offset="100%" stopColor="oklch(0.72 0.19 258 / 0)" />
                </linearGradient>
              </defs>
              <path
                d="M0,50 L20,44 L40,46 L60,38 L80,30 L100,32 L120,24 L140,18 L160,20 L180,12 L200,10 L220,6 L240,4 L240,60 L0,60 Z"
                fill="url(#area)"
              />
              <path
                d="M0,50 L20,44 L40,46 L60,38 L80,30 L100,32 L120,24 L140,18 L160,20 L180,12 L200,10 L220,6 L240,4"
                fill="none"
                stroke="oklch(0.78 0.16 275)"
                strokeWidth="1.5"
              />
            </svg>
          </div>
          <div className="col-span-2 flex flex-col gap-2 rounded-xl border border-white/5 bg-white/[0.03] p-3">
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
              Estado
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse-glow" /> Operando
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="h-2 w-2 rounded-full bg-brand animate-pulse-glow" /> 3 flujos activos
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Sections ---------- */

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-hero">
      {/* Aurora blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute -left-32 top-10 h-[420px] w-[420px] rounded-full bg-brand/25 blur-3xl animate-aurora" />
        <div
          className="absolute -right-24 top-40 h-[380px] w-[380px] rounded-full bg-accent/25 blur-3xl animate-aurora"
          style={{ animationDelay: "-6s" }}
        />
        <div
          className="absolute left-1/3 -bottom-32 h-[360px] w-[360px] rounded-full bg-brand-2/20 blur-3xl animate-aurora"
          style={{ animationDelay: "-12s" }}
        />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-16 lg:grid-cols-[1.05fr_1fr] lg:pt-24">
        <div className="animate-fade-up">
          <SectionEyebrow>Software empresarial a medida</SectionEyebrow>
          <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Tecnología que se <span className="text-gradient-animated">adapta a tu negocio</span>,
            no al contrario.
          </h1>
          <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
            Diseñamos plataformas empresariales, automatizaciones e integraciones que eliminan
            tareas manuales y convierten tus procesos en sistemas eficientes.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <PrimaryCTA>Cuéntame tu proyecto</PrimaryCTA>
            <GhostCTA href="#soluciones">Ver soluciones</GhostCTA>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Evaluación inicial sin compromiso · Respuesta directa por WhatsApp.
          </p>

          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4">
            {[
              { k: "+15", l: "años en software empresarial" },
              { k: "1:1", l: "acompañamiento directo" },
              { k: "LATAM", l: "atención remota" },
            ].map((s, i) => (
              <div
                key={s.l}
                className="rounded-xl glass p-3 animate-fade-up transition hover:-translate-y-0.5 hover:border-white/20"
                style={{ animationDelay: `${200 + i * 120}ms` }}
              >
                <dt className="font-display text-2xl font-semibold text-gradient">{s.k}</dt>
                <dd className="mt-1 text-[11px] leading-tight text-muted-foreground">{s.l}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="animate-float">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}

function TrustStrip() {
  const items = [
    {
      text: "Proveedora tecnológica autorizada de Meta (WhatsApp)",
      icon: <img src="/meta.svg" alt="Meta" className="h-6 w-6" />,
    },
    {
      text: "AWS Certified Cloud Practitioner",
      icon: <img src="/aws.svg" alt="AWS" className="h-6 w-6" />,
    },
    {
      text: "Oracle Cloud — Inteligencia Artificial",
      icon: <img src="/oracle.svg" alt="Oracle Cloud" className="h-6 w-6" />,
    },
    {
      text: "Entrega de código fuente y control de versiones",
      icon: <img src="/git.svg" alt="Git" className="h-6 w-6" />,
    },
  ];
  const loop = [...items, ...items];
  return (
    <section aria-label="Confianza" className="relative border-y border-white/5 bg-surface/40">
      <div
        className="group relative overflow-hidden py-5"
        style={{
          maskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <ul className="flex w-max items-center gap-10 whitespace-nowrap text-xs text-muted-foreground sm:text-sm animate-marquee group-hover:[animation-play-state:paused]">
          {loop.map((item, idx) => (
            <li key={`${item.text}-${idx}`} className="flex items-center gap-2">
              {item.icon}
              <span>{item.text}</span>
              <span aria-hidden className="ml-10 h-1 w-1 rounded-full bg-white/20" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function BlogBanner() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-12">
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Technology Blog */}
        <Reveal className="h-full">
          <TechnologyBlogCard />
        </Reveal>

        {/* Enterprise AI Agent */}
        <Reveal className="h-full">
          <EnterpriseAgentCard />
        </Reveal>
      </div>
    </section>
  );
}

function Pains() {
  const items = [
    "Información dispersa en Excel, chats y correos",
    "Procesos manuales que consumen horas",
    "Poca trazabilidad sobre la operación",
    "Sistemas actuales que ya no acompañan el negocio",
  ];
  return (
    <section id="dolores" className="mx-auto max-w-7xl px-5 py-20">
      <Reveal className="card-elevated p-8 sm:p-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionEyebrow>Cuando el negocio crece</SectionEyebrow>
            <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              ¿Tu operación depende de archivos dispersos, tareas repetitivas o sistemas que no se
              comunican?
            </h2>
            <p className="mt-5 text-muted-foreground sm:text-lg">
              Ese no es solamente un problema tecnológico. Es tiempo perdido, información difícil de
              controlar y decisiones que llegan tarde.
            </p>
            <a
              href={waUrl("Hola Tara, quisiera que revisemos nuestro proceso operativo.")}
              target="_blank"
              rel="noreferrer noopener"
              className="group mt-8 inline-flex items-center gap-2 border-b border-white/20 pb-2 text-sm font-semibold text-foreground transition-colors hover:border-brand"
            >
              <img src="/whatsapp.svg" alt="WhatsApp" className="h-4 w-4" />
              Revisemos tu proceso
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform group-hover:translate-x-1"
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <ul className="flex flex-col justify-center divide-y divide-white/5">
            {items.map((text, idx) => (
              <li key={text} className="flex items-start gap-5 py-5">
                <span className="mt-0.5 font-mono text-sm font-semibold text-destructive">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="text-base text-foreground/90">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}

function Services() {
  const services = [
    {
      t: "Plataformas web empresariales",
      d: "Sistemas administrativos, portales y aplicaciones creadas alrededor de la operación real de tu negocio.",
      chips: ["Laravel", "React", ".NET", "Bases de datos"],
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M3 9h18" />
          <path d="M7 6.5h.01M10 6.5h.01" />
        </svg>
      ),
    },
    {
      t: "Automatización de procesos",
      d: "Conectamos herramientas y eliminamos tareas repetitivas para que la información avance sin depender de procesos manuales.",
      chips: ["n8n", "APIs", "Flujos", "Integraciones"],
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="3.5" />
          <path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.2 5.2l2.1 2.1M16.7 16.7l2.1 2.1M5.2 18.8l2.1-2.1M16.7 7.3l2.1-2.1" />
        </svg>
      ),
    },
    {
      t: "IA + WhatsApp",
      d: "Implementamos asistentes, clasificación de información y atención automatizada integrada con los procesos de tu empresa.",
      chips: ["OpenAI", "WhatsApp", "Meta", "RAG"],
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 3a9 9 0 0 1 6.4 15.3L20 21l-3-1.5A9 9 0 1 1 12 3z" />
          <path d="M8.5 12h.01M12 12h.01M15.5 12h.01" />
        </svg>
      ),
    },
    {
      t: "Evolución de sistemas",
      d: "Analizamos aplicaciones existentes, corregimos problemas e incorporamos nuevas funciones sin perder la lógica del negocio.",
      chips: ["Legacy", "APIs REST", "Optimización", "Soporte"],
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M8 7l-5 5 5 5" />
          <path d="M16 7l5 5-5 5" />
          <path d="M14 4l-4 16" />
        </svg>
      ),
    },
  ];

  return (
    <section id="soluciones" className="relative border-y border-white/5 bg-surface/30">
      <div className="mx-auto max-w-7xl px-5 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <SectionEyebrow>Servicios</SectionEyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Cuatro frentes para transformar la operación.
            </h2>
            <p className="mt-3 text-muted-foreground">
              Diseñamos cada solución alrededor de un proceso real del negocio. Nada de plantillas
              genéricas.
            </p>
          </div>
          <PrimaryCTA>Evaluar mi caso</PrimaryCTA>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal
              key={s.t}
              as="article"
              delay={i * 90}
              className="card-elevated relative flex flex-col p-6 tilt-hover tilt-hover-active hover:border-white/15"
            >
              <span className="absolute right-5 top-5 font-mono text-xs text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="mb-6 inline-grid h-11 w-11 place-items-center rounded-lg border border-brand/40 bg-brand/10 text-brand">
                {s.icon}
              </div>
              <h3 className="font-display text-xl font-semibold leading-snug">{s.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              <div className="mt-6 flex flex-wrap gap-1.5">
                {s.chips.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-brand/30 bg-brand/5 px-2.5 py-0.5 text-[11px] text-brand/90"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Cases() {
  const cases = [
    {
      tag: "Renta corta",
      t: "Plataforma de gestión operativa integral",
      p: "Reservas, gastos y documentos vivían en múltiples herramientas. El equipo perdía tiempo consolidando información.",
      s: "Plataforma única con reservas, balances, gastos, documentos, RR. HH. y automatización de generación documental.",
      e: "Operación centralizada y trazable, con menos trabajo manual y visibilidad clara del estado de cada propiedad.",
    },
    {
      tag: "Paisajismo",
      t: "Sistema de diseño y ejecución",
      p: "Presupuestos en hojas de cálculo, banco de plantas disperso y seguimiento manual de cada proyecto.",
      s: "Módulos de clientes, zonas de diseño, banco de plantas, presupuestos y seguimiento de ejecución en una sola plataforma.",
      e: "Presupuestos más rápidos, historia consultable por cliente y control real del avance de obra.",
    },
    {
      tag: "Operación en campo",
      t: "Portal de clientes y evidencias",
      p: "Contratos y visitas de campo se registraban en papel, con reportes lentos y sin transparencia al cliente.",
      s: "Contratos, zonas, visitas, evidencias fotográficas, portal de clientes y reportes en línea.",
      e: "Cliente informado en tiempo real, equipos con instrucciones claras y auditoría completa de cada visita.",
    },
    {
      tag: "POS empresarial",
      t: "Integración de pagos y modernización",
      p: "Sistema POS antiguo, sin integración de pagos y con procesos internos que requerían intervención manual.",
      s: "Modernización gradual del núcleo, integración con pasarela de pagos y ajustes de procesos críticos.",
      e: "Cobro más ágil, menos errores operativos y un sistema listo para seguir evolucionando por fases.",
    },
  ];

  const bullets = [
    "Gestión administrativa, inventarios y recursos humanos",
    "Presupuestos, reportes y generación de documentos",
    "Integraciones de pagos, APIs y sistemas heredados",
    "Automatizaciones, OCR e interacción por WhatsApp",
  ];

  return (
    <section id="casos" className="mx-auto max-w-7xl px-5 py-24">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left: manifesto */}
        <Reveal className="lg:sticky lg:top-24 lg:self-start">
          <SectionEyebrow>Casos reales</SectionEyebrow>
          <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.5rem]">
            Sistemas construidos para operaciones{" "}
            <span className="italic text-destructive">reales.</span>
          </h2>
          <p className="mt-5 text-muted-foreground sm:text-lg">
            Hemos trabajado en soluciones empresariales de diferentes sectores, conectando software,
            datos y procesos. Presentamos los casos de forma anónima por confidencialidad.
          </p>
          <ul className="mt-8 space-y-3.5">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-sm text-foreground/90">
                <span className="mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full border border-brand/40 bg-brand/10 text-brand">
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                {b}
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Right: stacked case cards */}
        <div className="space-y-4">
          {cases.map((c, i) => (
            <Reveal
              key={c.t}
              as="article"
              delay={i * 90}
              className="group relative rounded-2xl border border-white/10 bg-surface/40 p-6 sm:p-7 transition-all hover:border-brand/40 hover:bg-surface/60"
            >
              <span
                aria-hidden
                className="absolute left-0 top-6 h-8 w-[3px] rounded-r bg-brand opacity-0 transition-opacity group-hover:opacity-100"
              />
              <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand">
                {c.tag}
              </div>
              <h3 className="mt-2 font-display text-xl font-semibold leading-snug sm:text-2xl">
                {c.t}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.s}</p>
              <p className="mt-4 text-xs text-foreground/60">
                <span className="text-muted-foreground">Efecto operativo · </span>
                {c.e}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Methodology() {
  const steps = [
    {
      n: "01",
      t: "Entendemos",
      d: "Conversamos el proceso real, sus cuellos de botella y qué éxito significa para tu equipo.",
    },
    {
      n: "02",
      t: "Diseñamos por fases",
      d: "Definimos un alcance por etapas con entregas útiles y decisiones claras en cada paso.",
    },
    {
      n: "03",
      t: "Construimos y acompañamos",
      d: "Desarrollamos, integramos y quedamos disponibles para evolucionar la solución contigo.",
    },
  ];
  return (
    <section id="metodologia" className="border-y border-white/5 bg-surface/30">
      <div className="mx-auto max-w-7xl px-5 py-20">
        <div className="max-w-2xl">
          <SectionEyebrow>Metodología</SectionEyebrow>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Un camino claro, sin sorpresas.
          </h2>
        </div>
        <ol className="mt-10 grid gap-4 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal
              key={s.n}
              as="li"
              delay={i * 140}
              className="card-elevated p-6 tilt-hover tilt-hover-active"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-display text-3xl font-semibold text-gradient-animated">
                  {s.n}
                </span>
                <span className="h-px flex-1 mx-4 bg-gradient-to-r from-brand/50 via-white/10 to-transparent" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="mx-auto max-w-7xl px-5 py-20">
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.2fr]">
        <div className="relative">
          <div
            aria-hidden
            className="absolute inset-0 -z-10 rounded-3xl bg-brand-gradient/25 blur-3xl"
          />
          <div className="card-elevated relative overflow-hidden">
            <div className="aspect-[4/5] w-full">
              <img
                src="/Tara.png"
                alt="Tara Campos Padilla - Ingeniera de software"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="border-t border-white/5 px-5 py-3 text-xs text-muted-foreground">
              Tara Campos Padilla · Ingeniera de software
            </div>
          </div>
        </div>

        <div>
          <SectionEyebrow>Detrás del proyecto</SectionEyebrow>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Hablas directamente con quien diseña y construye tu solución.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Alianza F1 está dirigida por Tara Campos Padilla, ingeniera y desarrolladora de software
            con más de 15 años de experiencia creando y evolucionando sistemas empresariales. Sin
            intermediarios, sin traducciones entre áreas: una interlocutora técnica y comercial que
            entiende tu negocio.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              "Acompañamiento directo, 1:1",
              "Proveedora autorizada de Meta (WhatsApp)",
              "AWS Certified Cloud Practitioner",
              "Oracle Cloud — Inteligencia Artificial",
              "Laravel, React, Node.js, .NET, Delphi, n8n",
              "PostgreSQL, SQL Server, MySQL, APIs, cloud",
            ].map((i) => (
              <li key={i} className="flex items-start gap-2 text-sm">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-0.5 shrink-0 text-brand"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                <span className="text-foreground/90">{i}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <PrimaryCTA>Conversemos por WhatsApp</PrimaryCTA>
            <GhostCTA href="https://www.behance.net/IngTaraCampos">
              Ver portafolio en Behance
            </GhostCTA>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Contact form ---------- */

type FormData = {
  nombre: string;
  empresa: string;
  contacto: string;
  tipo: string;
  descripcion: string;
};
type Errors = Partial<Record<keyof FormData, string>>;

function ContactForm() {
  const [data, setData] = useState<FormData>({
    nombre: "",
    empresa: "",
    contacto: "",
    tipo: "",
    descripcion: "",
  });
  const [errors, setErrors] = useState<Errors>({});

  function update<K extends keyof FormData>(k: K, v: string) {
    setData((d) => ({ ...d, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  }

  function validate(): boolean {
    const e: Errors = {};
    if (!data.nombre.trim() || data.nombre.trim().length < 2) e.nombre = "Cuéntanos tu nombre.";
    if (data.nombre.length > 100) e.nombre = "Máximo 100 caracteres.";
    if (!data.contacto.trim()) e.contacto = "Déjanos un WhatsApp o correo.";
    else if (data.contacto.length > 120) e.contacto = "Máximo 120 caracteres.";
    if (!data.tipo) e.tipo = "Elige una opción.";
    if (!data.descripcion.trim() || data.descripcion.trim().length < 10)
      e.descripcion = "Cuéntanos un poco más (mínimo 10 caracteres).";
    if (data.descripcion.length > 1000) e.descripcion = "Máximo 1000 caracteres.";
    if (data.empresa.length > 120) e.empresa = "Máximo 120 caracteres.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function onSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    if (!validate()) return;
    const msg =
      `Hola Tara, soy ${data.nombre}` +
      (data.empresa ? ` (${data.empresa})` : "") +
      `. Vi la página de Alianza F1 y me interesa: ${data.tipo}.\n\n` +
      `Descripción: ${data.descripcion}\n\n` +
      `Mi contacto: ${data.contacto}`;
    window.open(waUrl(msg), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={onSubmit} noValidate className="card-elevated p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="nombre">Nombre</Label>
          <Input
            id="nombre"
            value={data.nombre}
            onChange={(e) => update("nombre", e.target.value)}
            maxLength={100}
            aria-invalid={!!errors.nombre}
            className="mt-1.5 bg-white/[0.03]"
            placeholder="Tu nombre"
          />
          {errors.nombre && <p className="mt-1 text-xs text-destructive">{errors.nombre}</p>}
        </div>
        <div>
          <Label htmlFor="empresa">
            Empresa <span className="text-muted-foreground">(opcional)</span>
          </Label>
          <Input
            id="empresa"
            value={data.empresa}
            onChange={(e) => update("empresa", e.target.value)}
            maxLength={120}
            className="mt-1.5 bg-white/[0.03]"
            placeholder="Nombre de tu empresa"
          />
          {errors.empresa && <p className="mt-1 text-xs text-destructive">{errors.empresa}</p>}
        </div>
        <div>
          <Label htmlFor="contacto">WhatsApp o correo</Label>
          <Input
            id="contacto"
            value={data.contacto}
            onChange={(e) => update("contacto", e.target.value)}
            maxLength={120}
            aria-invalid={!!errors.contacto}
            className="mt-1.5 bg-white/[0.03]"
            placeholder="+57 300 000 0000 o tu@correo.com"
          />
          {errors.contacto && <p className="mt-1 text-xs text-destructive">{errors.contacto}</p>}
        </div>
        <div>
          <Label htmlFor="tipo">Tipo de solución</Label>
          <Select value={data.tipo} onValueChange={(v) => update("tipo", v)}>
            <SelectTrigger
              id="tipo"
              aria-invalid={!!errors.tipo}
              className="mt-1.5 bg-white/[0.03]"
            >
              <SelectValue placeholder="Selecciona una opción" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Plataforma a medida">Plataforma a medida</SelectItem>
              <SelectItem value="Automatización / IA">Automatización / IA</SelectItem>
              <SelectItem value="Integraciones">Integraciones</SelectItem>
              <SelectItem value="Modernización o soporte">Modernización o soporte</SelectItem>
              <SelectItem value="Aún no lo tengo claro">Aún no lo tengo claro</SelectItem>
            </SelectContent>
          </Select>
          {errors.tipo && <p className="mt-1 text-xs text-destructive">{errors.tipo}</p>}
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="descripcion">Cuéntanos brevemente</Label>
          <Textarea
            id="descripcion"
            value={data.descripcion}
            onChange={(e) => update("descripcion", e.target.value)}
            maxLength={1000}
            aria-invalid={!!errors.descripcion}
            rows={4}
            className="mt-1.5 bg-white/[0.03]"
            placeholder="¿Qué proceso te gustaría mejorar o qué necesitas construir?"
          />
          <div className="mt-1 flex items-center justify-between">
            {errors.descripcion ? (
              <p className="text-xs text-destructive">{errors.descripcion}</p>
            ) : (
              <span />
            )}
            <span className="text-[11px] text-muted-foreground">
              {data.descripcion.length}/1000
            </span>
          </div>
        </div>
      </div>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-xl btn-whatsapp btn-whatsapp-hover px-5 py-3 text-sm font-semibold"
        >
          <img src="/whatsapp.svg" alt="WhatsApp" className="h-4 w-4" />
          Enviar por WhatsApp
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </button>
        <span className="text-xs text-muted-foreground">
          Se abrirá una conversación con la información ingresada.
        </span>
      </div>
    </form>
  );
}

function CTAContact() {
  return (
    <section id="contacto" className="relative overflow-hidden border-y border-white/5">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-hero opacity-80" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <SectionEyebrow>Cuéntame tu proyecto</SectionEyebrow>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Empecemos por entender tu proceso.
          </h2>
          <p className="mt-4 max-w-lg text-muted-foreground">
            La evaluación inicial es sin compromiso. Te devolvemos una lectura clara del alcance,
            riesgos y posibles fases del proyecto.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <PrimaryCTA>Escribir por WhatsApp</PrimaryCTA>
            <GhostCTA href="mailto:tarapadilla90@gmail.com">tarapadilla90@gmail.com</GhostCTA>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    {
      q: "¿Trabajan proyectos nuevos y también sistemas existentes?",
      a: "Sí. Diseñamos plataformas desde cero y también evolucionamos, modernizamos o mantenemos sistemas ya en producción, incluidos sistemas legacy.",
    },
    {
      q: "¿Se puede avanzar por fases?",
      a: "Sí. Preferimos entregas por fases con alcance acotado, para que el negocio empiece a usar la solución rápido y podamos ajustar según feedback real.",
    },
    {
      q: "¿De quién es el código fuente?",
      a: "Del cliente cuando corresponde. Entregamos código fuente y control de versiones para que la solución esté siempre bajo tu control.",
    },
    {
      q: "¿Atienden en toda Latinoamérica?",
      a: "Sí. Trabajamos de forma remota con equipos en distintos países de la región, con reuniones y seguimiento en horarios coordinados.",
    },
    {
      q: "¿Cómo es la evaluación inicial?",
      a: "Es una conversación sin compromiso donde entendemos el proceso, revisamos lo existente y devolvemos una lectura clara del alcance y las fases sugeridas.",
    },
    {
      q: "¿Manejan integraciones con WhatsApp y pagos?",
      a: "Sí. Somos proveedora tecnológica autorizada de Meta para soluciones de WhatsApp e integramos pasarelas de pagos y APIs de terceros.",
    },
  ];
  return (
    <section id="faq" className="mx-auto max-w-4xl px-5 py-20">
      <div className="text-center">
        <SectionEyebrow>Preguntas frecuentes</SectionEyebrow>
        <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Lo que suelen preguntarnos antes de empezar.
        </h2>
      </div>
      <Accordion type="single" collapsible className="mt-10 space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem key={f.q} value={`item-${i}`} className="card-elevated border-0 px-5">
            <AccordionTrigger className="text-left font-display text-base font-semibold hover:no-underline">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5 bg-surface/40">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span
              aria-hidden
              className="grid h-8 w-8 place-items-center rounded-lg bg-brand-gradient text-[10px] font-bold text-white"
            >
              A/F1
            </span>
            <span className="font-display text-lg font-semibold">
              Alianza <span className="text-gradient">F1</span>
            </span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            Software empresarial a medida, automatización e integraciones. Acompañamiento directo
            desde Colombia para toda Latinoamérica.
          </p>
        </div>
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Navegación
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a className="hover:text-foreground text-muted-foreground" href="#soluciones">
                Soluciones
              </a>
            </li>
            <li>
              <a className="hover:text-foreground text-muted-foreground" href="#casos">
                Casos
              </a>
            </li>
            <li>
              <a className="hover:text-foreground text-muted-foreground" href="#metodologia">
                Metodología
              </a>
            </li>
            <li>
              <a className="hover:text-foreground text-muted-foreground" href="#faq">
                Preguntas
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Contacto
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a
                className="hover:text-foreground text-muted-foreground"
                href="mailto:tarapadilla90@gmail.com"
              >
                tarapadilla90@gmail.com
              </a>
            </li>
            <li>
              <a
                className="hover:text-foreground text-muted-foreground"
                href={waUrl()}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp +57 302 567 3434
              </a>
            </li>
            <li>
              <a
                className="hover:text-foreground text-muted-foreground"
                href="https://www.behance.net/IngTaraCampos"
                target="_blank"
                rel="noreferrer"
              >
                Behance / IngTaraCampos
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Ubicación
          </h3>
          <p className="mt-4 text-sm text-muted-foreground">
            Colombia · Atención remota en toda Latinoamérica.
          </p>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-5 text-xs text-muted-foreground sm:flex-row">
          <span>© {new Date().getFullYear()} Alianza F1 · Tara Campos Padilla</span>
          <span>Hecho con foco en procesos empresariales reales.</span>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Floating WhatsApp ---------- */

function FloatingWhatsApp() {
  return (
    <a
      href={waUrl()}
      target="_blank"
      rel="noreferrer"
      aria-label="Escribir por WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full btn-whatsapp btn-whatsapp-hover px-4 py-3 text-sm font-semibold shadow-lg"
    >
      <img src="/whatsapp.svg" alt="WhatsApp" className="h-5 w-5" />
      Hablemos
    </a>
  );
}

/* ---------- Page ---------- */

function LandingPage() {
  return (
    <div className="min-h-screen">
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:rounded-md focus:bg-brand focus:px-3 focus:py-2 focus:text-primary-foreground"
      >
        Saltar al contenido
      </a>
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <BlogBanner />
        <Pains />
        <Services />
        <Cases />
        <Methodology />
        <About />
        <CTAContact />
        <FAQ />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

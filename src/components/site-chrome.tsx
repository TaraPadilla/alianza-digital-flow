import {
  ArrowRight,
  Bot,
  Boxes,
  Braces,
  ChevronDown,
  CloudCog,
  Code2,
  GitBranch,
  Menu,
  RefreshCcw,
  Sparkles,
  Workflow,
  X,
} from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";

const WHATSAPP_URL =
  "https://wa.me/573025673434?text=Hola%20Tara%2C%20vi%20la%20p%C3%A1gina%20de%20Alianza%20F1%20y%20quisiera%20conversar%20sobre%20un%20proyecto.";

const serviceGroups = [
  {
    title: "Software y operación",
    items: [
      {
        href: "/servicios/software-empresarial",
        label: "Software empresarial",
        description: "Sistemas, portales y plataformas a medida.",
        icon: Boxes,
      },
      {
        href: "/servicios/software-empresarial#aplicaciones-web",
        label: "Aplicaciones web",
        description: "Experiencias multiusuario y responsive.",
        icon: Braces,
      },
      {
        href: "/servicios/sitios-web",
        label: "Sitios web",
        description: "Presencia digital clara y funcional.",
        icon: Code2,
      },
    ],
  },
  {
    title: "Automatización e IA",
    items: [
      {
        href: "/servicios/automatizacion-ia",
        label: "Automatización de procesos",
        description: "Flujos, documentos, OCR y n8n.",
        icon: Workflow,
      },
      {
        href: "/agente-ia",
        label: "Agentes de IA y RAG",
        description: "Respuestas empresariales con fuentes.",
        icon: Bot,
      },
      {
        href: "/servicios/integraciones",
        label: "Integraciones y WhatsApp",
        description: "APIs y sistemas trabajando juntos.",
        icon: GitBranch,
      },
    ],
  },
  {
    title: "Evolución técnica",
    items: [
      {
        href: "/servicios/evolucion-legacy",
        label: "Evolución y legacy",
        description: "Modernización sin perder la lógica del negocio.",
        icon: RefreshCcw,
      },
      {
        href: "/servicios/evolucion-legacy#soporte",
        label: "Mantenimiento y soporte",
        description: "Incidencias, mejoras y nuevas fases.",
        icon: Braces,
      },
      {
        href: "/servicios/infraestructura",
        label: "Infraestructura",
        description: "Cloud, Docker y despliegues.",
        icon: CloudCog,
      },
    ],
  },
];

function Arrow() {
  return <ArrowRight className="h-4 w-4" aria-hidden="true" />;
}

export function BrandCTA({
  href = WHATSAPP_URL,
  children,
  secondary = false,
  className = "",
}: {
  href?: string;
  children: ReactNode;
  secondary?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer noopener" : undefined}
      className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition ${
        secondary
          ? "glass text-foreground hover:border-brand/40 hover:bg-brand/5"
          : "magnetic magnetic-shine btn-primary btn-primary-hover"
      } ${className}`}
    >
      {children}
      <Arrow />
    </a>
  );
}

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const close = (event: PointerEvent) => {
      if (!servicesRef.current?.contains(event.target as Node)) {
        setDesktopServicesOpen(false);
      }
    };
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setDesktopServicesOpen(false);
        setMobileOpen(false);
      }
    };
    document.addEventListener("pointerdown", close);
    document.addEventListener("keydown", escape);
    return () => {
      document.removeEventListener("pointerdown", close);
      document.removeEventListener("keydown", escape);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-5 px-5">
        <a href="/" className="flex min-w-0 items-center gap-3" aria-label="Alianza F1, inicio">
          <img src="/Logo.png" alt="" className="h-12 w-12 shrink-0 object-contain" />
          <span className="min-w-0">
            <span className="block truncate font-display text-xl font-semibold">
              Alianza <span className="text-gradient">F1</span>
            </span>
            <span className="hidden text-[10px] uppercase tracking-[0.16em] text-muted-foreground sm:block">
              Software · Automatización · IA
            </span>
          </span>
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-1 lg:flex">
          <a
            href="/agente-ia"
            className="group mr-1 inline-flex items-center gap-2 rounded-xl border border-brand/25 bg-brand/10 px-3.5 py-2 text-sm font-semibold text-foreground transition hover:border-brand/50 hover:bg-brand/15"
          >
            <Sparkles className="h-4 w-4 text-brand" aria-hidden="true" />
            Agente IA
            <span className="rounded-full bg-brand/15 px-1.5 py-0.5 text-[9px] uppercase tracking-wider text-brand">
              Estrella
            </span>
          </a>

          <div
            ref={servicesRef}
            className="relative"
            onMouseEnter={() => setDesktopServicesOpen(true)}
            onMouseLeave={() => setDesktopServicesOpen(false)}
          >
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={desktopServicesOpen}
              aria-controls="services-mega-menu"
              onClick={() => setDesktopServicesOpen((value) => !value)}
              className="inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm text-muted-foreground transition hover:bg-white/5 hover:text-foreground"
            >
              Servicios
              <ChevronDown
                className={`h-4 w-4 transition ${desktopServicesOpen ? "rotate-180" : ""}`}
                aria-hidden="true"
              />
            </button>

            {desktopServicesOpen && (
              <div
                id="services-mega-menu"
                className="absolute left-1/2 top-full w-[min(960px,calc(100vw-2rem))] -translate-x-1/2 pt-4"
              >
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-background/95 p-3 shadow-2xl shadow-black/40 backdrop-blur-2xl">
                  <div className="grid grid-cols-[1fr_1fr_1fr_240px] gap-2">
                    {serviceGroups.map((group) => (
                      <div key={group.title} className="rounded-xl p-2">
                        <div className="px-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                          {group.title}
                        </div>
                        <ul className="mt-2 space-y-1">
                          {group.items.map((item) => {
                            const Icon = item.icon;
                            return (
                              <li key={item.href}>
                                <a
                                  href={item.href}
                                  className="group/item flex gap-3 rounded-xl p-2.5 transition hover:bg-white/5"
                                >
                                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-brand/20 bg-brand/10 text-brand transition group-hover/item:border-brand/40">
                                    <Icon className="h-4 w-4" aria-hidden="true" />
                                  </span>
                                  <span>
                                    <span className="block text-sm font-semibold text-foreground">
                                      {item.label}
                                    </span>
                                    <span className="mt-0.5 block text-[11px] leading-snug text-muted-foreground">
                                      {item.description}
                                    </span>
                                  </span>
                                </a>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    ))}

                    <a
                      href="/agente-ia"
                      className="group relative overflow-hidden rounded-xl border border-accent/30 bg-gradient-to-br from-brand/15 via-accent/10 to-transparent p-5"
                    >
                      <div
                        aria-hidden="true"
                        className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-brand/25 blur-3xl"
                      />
                      <Bot className="relative h-7 w-7 text-brand" aria-hidden="true" />
                      <div className="relative mt-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-brand">
                        Producto insignia
                      </div>
                      <div className="relative mt-2 font-display text-lg font-semibold">
                        Conocimiento empresarial que responde.
                      </div>
                      <p className="relative mt-2 text-xs leading-relaxed text-muted-foreground">
                        Consulta documentos autorizados y comprueba cada respuesta con sus fuentes.
                      </p>
                      <span className="relative mt-5 inline-flex items-center gap-2 text-xs font-semibold text-foreground">
                        Conocer el agente
                        <Arrow />
                      </span>
                    </a>
                  </div>
                  <div className="mt-2 flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.025] px-4 py-3">
                    <p className="text-xs text-muted-foreground">
                      Cada solución se diseña alrededor de un proceso empresarial real.
                    </p>
                    <a
                      href="/servicios"
                      className="inline-flex items-center gap-2 text-xs font-semibold text-brand hover:text-foreground"
                    >
                      Ver todos los servicios
                      <Arrow />
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>

          <a
            href="/casos"
            className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition hover:bg-white/5 hover:text-foreground"
          >
            Casos
          </a>
          <a
            href="/metodologia"
            className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition hover:bg-white/5 hover:text-foreground"
          >
            Metodología
          </a>
          <a
            href="/nosotros"
            className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition hover:bg-white/5 hover:text-foreground"
          >
            Nosotros
          </a>
          <a
            href="https://blog.tecnologiaydesarrolloweb.com/"
            target="_blank"
            rel="noreferrer noopener"
            className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition hover:bg-white/5 hover:text-foreground"
          >
            Blog
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="hidden items-center gap-2 rounded-xl btn-whatsapp btn-whatsapp-hover px-4 py-2 text-sm font-semibold sm:inline-flex"
          >
            <img src="/whatsapp.svg" alt="" className="h-4 w-4" />
            Hablemos
          </a>
          <button
            type="button"
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((value) => !value)}
            className="grid h-10 w-10 place-items-center rounded-lg glass lg:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="max-h-[calc(100vh-76px)] overflow-y-auto border-t border-white/5 bg-background/98 lg:hidden">
          <nav aria-label="Móvil" className="mx-auto max-w-7xl space-y-2 px-5 py-4">
            <a
              href="/agente-ia"
              className="flex items-center justify-between rounded-xl border border-brand/25 bg-brand/10 px-4 py-3 font-semibold"
            >
              <span className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-brand" />
                Agente IA
              </span>
              <span className="text-[9px] uppercase tracking-wider text-brand">
                Producto estrella
              </span>
            </a>

            <button
              type="button"
              aria-expanded={mobileServicesOpen}
              onClick={() => setMobileServicesOpen((value) => !value)}
              className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left font-semibold hover:bg-white/5"
            >
              Servicios
              <ChevronDown
                className={`h-4 w-4 transition ${mobileServicesOpen ? "rotate-180" : ""}`}
              />
            </button>

            {mobileServicesOpen && (
              <div className="space-y-4 rounded-xl border border-white/8 bg-white/[0.02] p-3">
                {serviceGroups.map((group) => (
                  <div key={group.title}>
                    <div className="px-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      {group.title}
                    </div>
                    <ul className="mt-1">
                      {group.items.map((item) => (
                        <li key={item.href}>
                          <a
                            href={item.href}
                            className="block rounded-lg px-2 py-2 text-sm text-foreground/85 hover:bg-white/5 hover:text-foreground"
                          >
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <a
                  href="/servicios"
                  className="flex items-center justify-between rounded-lg bg-brand/10 px-3 py-2 text-sm font-semibold text-brand"
                >
                  Ver todos los servicios
                  <Arrow />
                </a>
              </div>
            )}

            {[
              ["/casos", "Casos"],
              ["/metodologia", "Metodología"],
              ["/nosotros", "Nosotros"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="block rounded-xl px-4 py-3 font-medium text-muted-foreground hover:bg-white/5 hover:text-foreground"
              >
                {label}
              </a>
            ))}
            <a
              href="https://blog.tecnologiaydesarrolloweb.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="block rounded-xl px-4 py-3 font-medium text-muted-foreground hover:bg-white/5 hover:text-foreground"
            >
              Blog
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-2 flex items-center justify-center gap-2 rounded-xl btn-whatsapp btn-whatsapp-hover px-4 py-3 text-sm font-semibold"
            >
              <img src="/whatsapp.svg" alt="" className="h-4 w-4" />
              Conversar por WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-white/5 bg-surface/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <a href="/" className="flex items-center gap-3">
            <img src="/Logo.png" alt="" className="h-10 w-10 object-contain" />
            <span className="font-display text-lg font-semibold">
              Alianza <span className="text-gradient">F1</span>
            </span>
          </a>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Software empresarial, automatización, inteligencia artificial e integraciones
            construidas alrededor de procesos reales.
          </p>
        </div>
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Producto
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href="/agente-ia" className="text-muted-foreground hover:text-foreground">
                Agente IA empresarial
              </a>
            </li>
            <li>
              <a
                href="https://ia.tecnologiaydesarrolloweb.com/"
                target="_blank"
                rel="noreferrer noopener"
                className="text-muted-foreground hover:text-foreground"
              >
                Conversar con el agente
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Explorar
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              ["/servicios", "Servicios"],
              ["/casos", "Casos"],
              ["/metodologia", "Metodología"],
              ["/nosotros", "Nosotros"],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className="text-muted-foreground hover:text-foreground">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Contacto
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>
              <a href="mailto:tarapadilla90@gmail.com" className="hover:text-foreground">
                tarapadilla90@gmail.com
              </a>
            </li>
            <li>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="hover:text-foreground"
              >
                +57 302 567 3434
              </a>
            </li>
            <li>Colombia · Atención remota LATAM</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-2 px-5 py-5 text-xs text-muted-foreground sm:flex-row">
          <span>© {new Date().getFullYear()} Alianza F1 · Tara Campos Padilla</span>
          <span>Tecnología construida para operaciones reales.</span>
        </div>
      </div>
    </footer>
  );
}

export function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Conversar con Alianza F1 por WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full btn-whatsapp btn-whatsapp-hover px-4 py-3 text-sm font-semibold shadow-lg"
    >
      <img src="/whatsapp.svg" alt="" className="h-5 w-5" />
      <span className="hidden sm:inline">Hablemos</span>
    </a>
  );
}

export function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:rounded-md focus:bg-brand focus:px-3 focus:py-2 focus:text-primary-foreground"
      >
        Saltar al contenido
      </a>
      <SiteHeader />
      <main id="main-content">{children}</main>
      <SiteFooter />
      <FloatingWhatsApp />
    </div>
  );
}

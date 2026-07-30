import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import { GoogleAnalytics } from "../components/google-analytics";
import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SUPPORT_EMAIL } from "../lib/site-urls";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Página no encontrada</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          La página que buscas no existe o fue movida.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md btn-primary btn-primary-hover px-4 py-2 text-sm font-medium"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          Esta página no cargó
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Algo salió mal. Puedes intentar de nuevo o volver al inicio.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md btn-primary btn-primary-hover px-4 py-2 text-sm font-medium"
          >
            Intentar de nuevo
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Ir al inicio
          </a>
        </div>
      </div>
    </div>
  );
}

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Alianza F1",
  description:
    "Alianza F1 desarrolla un agente de IA empresarial con fuentes y diseña software, automatizaciones e integraciones a medida para empresas en Latinoamérica.",
  areaServed: "Latinoamérica",
  founder: { "@type": "Person", name: "Tara Campos Padilla", jobTitle: "Ingeniera de software" },
  email: SUPPORT_EMAIL,
  telephone: "+57 302 567 3434",
  address: { "@type": "PostalAddress", addressCountry: "CO" },
  sameAs: ["https://www.behance.net/IngTaraCampos"],
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Alianza F1 — Agente IA, software empresarial y automatización" },
      {
        name: "description",
        content:
          "Agente de IA empresarial con fuentes, software a medida, automatización, integraciones y evolución tecnológica para empresas en Latinoamérica.",
      },
      { name: "author", content: "Alianza F1 — Tara Campos Padilla" },
      { name: "theme-color", content: "#0b1020" },
      {
        property: "og:title",
        content: "Alianza F1 — Agente IA, software empresarial y automatización",
      },
      {
        property: "og:description",
        content:
          "Conocimiento empresarial que responde con fuentes, acompañado por software, automatización e integraciones a medida.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Alianza F1" },
      { property: "og:locale", content: "es_LA" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Alianza F1 — Agente IA, software empresarial y automatización",
      },
      {
        name: "twitter:description",
        content:
          "Agente de IA empresarial con fuentes y un ecosistema de soluciones tecnológicas a medida.",
      },
      {
        property: "og:image",
        content:
          "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/d195952b-93bd-45fc-b104-e343ea6fd993",
      },
      {
        name: "twitter:image",
        content:
          "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/d195952b-93bd-45fc-b104-e343ea6fd993",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap",
      },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(orgJsonLd) }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <GoogleAnalytics />
      <Outlet />
    </QueryClientProvider>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/service-detail-page";
import { getService } from "@/lib/site-content";

export const Route = createFileRoute("/servicios/automatizacion-ia")({
  head: () => ({
    meta: [
      { title: "Automatización e inteligencia artificial | Alianza F1" },
      {
        name: "description",
        content:
          "Automatización de procesos, OCR, clasificación documental, n8n, agentes especializados e inteligencia artificial aplicada.",
      },
    ],
  }),
  component: () => <ServiceDetailPage service={getService("automatizacion-ia")} />,
});

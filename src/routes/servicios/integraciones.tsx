import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/service-detail-page";
import { getService } from "@/lib/site-content";

export const Route = createFileRoute("/servicios/integraciones")({
  head: () => ({
    meta: [
      { title: "Integraciones, APIs y WhatsApp | Alianza F1" },
      {
        name: "description",
        content:
          "Conectamos ERP, CRM, WhatsApp Business, Google Workspace, Microsoft 365, OpenAI y sistemas propios mediante APIs.",
      },
    ],
  }),
  component: () => <ServiceDetailPage service={getService("integraciones")} />,
});

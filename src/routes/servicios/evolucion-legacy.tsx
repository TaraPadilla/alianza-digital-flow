import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/service-detail-page";
import { getService } from "@/lib/site-content";

export const Route = createFileRoute("/servicios/evolucion-legacy")({
  head: () => ({
    meta: [
      { title: "Evolución de sistemas y software legacy | Alianza F1" },
      {
        name: "description",
        content:
          "Modernización, mantenimiento e integración de sistemas legacy, POS, Delphi, VB6, .NET y bases de datos empresariales.",
      },
    ],
  }),
  component: () => <ServiceDetailPage service={getService("evolucion-legacy")} />,
});

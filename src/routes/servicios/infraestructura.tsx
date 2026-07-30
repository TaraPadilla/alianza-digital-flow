import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/service-detail-page";
import { getService } from "@/lib/site-content";

export const Route = createFileRoute("/servicios/infraestructura")({
  head: () => ({
    meta: [
      { title: "Infraestructura cloud y despliegues | Alianza F1" },
      {
        name: "description",
        content:
          "Configuración de servidores, Docker, VPS, cloud, bases de datos, certificados y despliegues automatizados.",
      },
    ],
  }),
  component: () => <ServiceDetailPage service={getService("infraestructura")} />,
});

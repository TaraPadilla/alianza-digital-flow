import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/service-detail-page";
import { getService } from "@/lib/site-content";

export const Route = createFileRoute("/servicios/sitios-web")({
  head: () => ({
    meta: [
      { title: "Sitios web y presencia digital | Alianza F1" },
      {
        name: "description",
        content:
          "Landing pages, sitios corporativos y portales sencillos con rendimiento, SEO técnico e integraciones esenciales.",
      },
    ],
  }),
  component: () => <ServiceDetailPage service={getService("sitios-web")} />,
});

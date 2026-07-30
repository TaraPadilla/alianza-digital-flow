import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/service-detail-page";
import { getService } from "@/lib/site-content";

export const Route = createFileRoute("/servicios/software-empresarial")({
  head: () => ({
    meta: [
      { title: "Software empresarial a medida | Alianza F1" },
      {
        name: "description",
        content:
          "Sistemas administrativos, portales, inventarios, plataformas SaaS y aplicaciones web construidas alrededor de tu operación.",
      },
    ],
  }),
  component: () => <ServiceDetailPage service={getService("software-empresarial")} />,
});

export type ServiceIconName =
  "software" | "automation" | "integration" | "legacy" | "infrastructure" | "website";

export type ServiceSlug =
  | "software-empresarial"
  | "automatizacion-ia"
  | "integraciones"
  | "evolucion-legacy"
  | "infraestructura"
  | "sitios-web";

export type ServiceContent = {
  slug: ServiceSlug;
  icon: ServiceIconName;
  title: string;
  menuTitle: string;
  eyebrow: string;
  headline: string;
  summary: string;
  description: string;
  outcomes: string[];
  capabilities: string[];
  idealFor: string[];
  process: { title: string; description: string }[];
  related: ServiceSlug[];
};

export const serviceCatalog: ServiceContent[] = [
  {
    slug: "software-empresarial",
    icon: "software",
    title: "Software empresarial a medida",
    menuTitle: "Software empresarial",
    eyebrow: "Procesos convertidos en sistemas",
    headline: "Una plataforma construida alrededor de la operación real de tu empresa.",
    summary:
      "Diseñamos sistemas administrativos, portales y plataformas internas que centralizan procesos, usuarios, documentos e indicadores.",
    description:
      "Cada solución comienza entendiendo cómo trabaja tu equipo. A partir de ese proceso diseñamos módulos, permisos, reportes e integraciones que pueden crecer por fases sin obligarte a adaptar el negocio a una plantilla genérica.",
    outcomes: [
      "Información centralizada y trazable",
      "Menos tareas manuales y retrabajos",
      "Procesos claros para cada usuario",
      "Arquitectura preparada para evolucionar",
    ],
    capabilities: [
      "Sistemas administrativos",
      "ERP y CRM especializados",
      "Inventarios y operaciones",
      "Portales para clientes",
      "Gestión documental",
      "Usuarios, roles y permisos",
      "Reportes y dashboards",
      "Plataformas SaaS",
    ],
    idealFor: [
      "Empresas que dependen de Excel, correos o herramientas desconectadas",
      "Operaciones con reglas particulares que un software estándar no cubre",
      "Equipos que necesitan construir una solución por módulos o fases",
    ],
    process: [
      {
        title: "Descubrimiento",
        description: "Mapeamos el proceso, las reglas, los usuarios y el resultado esperado.",
      },
      {
        title: "Diseño por fases",
        description: "Definimos una primera entrega útil, medible y con alcance protegido.",
      },
      {
        title: "Construcción y evolución",
        description: "Implementamos, validamos y ampliamos el sistema según el uso real.",
      },
    ],
    related: ["integraciones", "automatizacion-ia", "infraestructura"],
  },
  {
    slug: "automatizacion-ia",
    icon: "automation",
    title: "Automatización e inteligencia artificial",
    menuTitle: "Automatización e IA",
    eyebrow: "Menos repetición, mejores decisiones",
    headline: "Flujos inteligentes que conectan información, acciones y personas.",
    summary:
      "Automatizamos tareas administrativas, documentales y comerciales utilizando n8n, APIs, OCR y modelos de inteligencia artificial.",
    description:
      "La automatización se diseña sobre un proceso concreto: qué inicia el flujo, qué información necesita, qué reglas debe respetar y cuándo debe intervenir una persona. La IA complementa la operación; no reemplaza el control empresarial.",
    outcomes: [
      "Reducción de tareas repetitivas",
      "Procesamiento más rápido de documentos",
      "Menos errores de transcripción",
      "Información disponible donde se necesita",
    ],
    capabilities: [
      "Automatización con n8n",
      "Clasificación documental",
      "OCR y extracción de datos",
      "Procesamiento de correos",
      "Agentes especializados",
      "Sistemas RAG",
      "Automatización comercial",
      "Flujos de aprobación",
    ],
    idealFor: [
      "Procesos que copian información entre varias herramientas",
      "Equipos que reciben y clasifican documentos manualmente",
      "Operaciones que quieren incorporar IA con un alcance verificable",
    ],
    process: [
      {
        title: "Identificar",
        description: "Detectamos tareas repetitivas, decisiones y puntos de control.",
      },
      {
        title: "Orquestar",
        description: "Conectamos sistemas, reglas, datos y servicios externos.",
      },
      {
        title: "Medir",
        description: "Validamos resultados y ajustamos el flujo con evidencia operativa.",
      },
    ],
    related: ["integraciones", "software-empresarial", "infraestructura"],
  },
  {
    slug: "integraciones",
    icon: "integration",
    title: "Integraciones y APIs",
    menuTitle: "Integraciones y APIs",
    eyebrow: "Sistemas que sí se comunican",
    headline: "Conectamos tus plataformas para que la información avance sin duplicarse.",
    summary:
      "Integramos sistemas propios y de terceros mediante APIs, webhooks y flujos automatizados.",
    description:
      "Una integración bien diseñada elimina cargas duplicadas, mantiene consistencia entre plataformas y permite crear procesos que antes dependían de intervención manual.",
    outcomes: [
      "Datos sincronizados entre plataformas",
      "Menos duplicidad e inconsistencias",
      "Procesos comerciales conectados",
      "Trazabilidad de cada intercambio",
    ],
    capabilities: [
      "APIs REST",
      "Webhooks",
      "WhatsApp Business",
      "Google Workspace",
      "Microsoft 365",
      "ERP y CRM",
      "OpenAI y Gemini",
      "Sistemas propios y de terceros",
    ],
    idealFor: [
      "Empresas con varias herramientas que no comparten información",
      "Procesos que dependen de exportar e importar archivos",
      "Equipos que necesitan integrar WhatsApp con su operación",
    ],
    process: [
      {
        title: "Auditoría técnica",
        description: "Revisamos documentación, autenticación, límites y datos disponibles.",
      },
      {
        title: "Contrato de integración",
        description: "Definimos eventos, transformaciones, errores y responsabilidades.",
      },
      {
        title: "Implementación controlada",
        description: "Probamos, monitoreamos y documentamos cada conexión.",
      },
    ],
    related: ["automatizacion-ia", "software-empresarial", "infraestructura"],
  },
  {
    slug: "evolucion-legacy",
    icon: "legacy",
    title: "Evolución de sistemas y software legacy",
    menuTitle: "Evolución y legacy",
    eyebrow: "Conservar el conocimiento, modernizar la tecnología",
    headline: "Hacemos evolucionar sistemas críticos sin perder la lógica del negocio.",
    summary:
      "Analizamos aplicaciones existentes, corregimos incidencias e incorporamos nuevas funciones e integraciones.",
    description:
      "Alianza F1 combina experiencia en tecnologías actuales y sistemas legacy. Esto permite comprender aplicaciones que llevan años operando y modernizarlas de forma gradual, evitando reemplazos innecesarios o riesgosos.",
    outcomes: [
      "Continuidad de sistemas críticos",
      "Reducción de deuda técnica",
      "Nuevas funciones e integraciones",
      "Soporte con contexto empresarial",
    ],
    capabilities: [
      "Delphi y VB6",
      ".NET y ASP.NET",
      "POS y sistemas administrativos",
      "SQL Server y Firebird",
      "Diagnóstico de incidencias",
      "Modernización gradual",
      "Mantenimiento evolutivo",
      "Bolsas de horas acotadas",
    ],
    idealFor: [
      "Empresas con software estable que todavía soporta procesos críticos",
      "Equipos que necesitan integrar sistemas antiguos con plataformas actuales",
      "Aplicaciones que requieren mantenimiento especializado y evolución gradual",
    ],
    process: [
      {
        title: "Diagnóstico",
        description: "Entendemos arquitectura, dependencias y reglas acumuladas.",
      },
      {
        title: "Priorización",
        description: "Separamos incidencias, mantenimiento y nuevas funcionalidades.",
      },
      {
        title: "Evolución segura",
        description: "Implementamos cambios acotados con pruebas y trazabilidad.",
      },
    ],
    related: ["integraciones", "infraestructura", "software-empresarial"],
  },
  {
    slug: "infraestructura",
    icon: "infrastructure",
    title: "Infraestructura y despliegues",
    menuTitle: "Infraestructura",
    eyebrow: "La base técnica de cada solución",
    headline: "Entornos confiables para desplegar, proteger y operar tu software.",
    summary:
      "Configuramos servidores, contenedores, bases de datos y procesos de despliegue cuando el proyecto lo requiere.",
    description:
      "La infraestructura se analiza como una capa independiente del desarrollo. Definimos claramente servicios cloud, licencias, dominios, certificados, consumos y responsabilidades para evitar costos ocultos.",
    outcomes: [
      "Despliegues repetibles",
      "Ambientes claramente separados",
      "Costos de infraestructura visibles",
      "Operación más estable y mantenible",
    ],
    capabilities: [
      "Docker",
      "VPS y cloud",
      "Oracle Cloud y AWS",
      "Dominios y SSL",
      "Bases de datos",
      "GitHub Actions",
      "Ambientes de desarrollo y producción",
      "Configuración y monitoreo",
    ],
    idealFor: [
      "Proyectos que necesitan pasar de desarrollo a producción",
      "Empresas que quieren ordenar servidores, accesos y despliegues",
      "Soluciones con APIs, bases de datos o servicios externos",
    ],
    process: [
      {
        title: "Requerimientos",
        description: "Calculamos necesidades de disponibilidad, seguridad y capacidad.",
      },
      {
        title: "Configuración",
        description: "Preparamos entornos, datos, certificados y automatizaciones.",
      },
      {
        title: "Entrega operativa",
        description: "Documentamos accesos, responsabilidades y costos recurrentes.",
      },
    ],
    related: ["software-empresarial", "integraciones", "evolucion-legacy"],
  },
  {
    slug: "sitios-web",
    icon: "website",
    title: "Sitios web y presencia digital",
    menuTitle: "Sitios web",
    eyebrow: "Una presencia clara y funcional",
    headline: "Sitios profesionales con alcance definido e integraciones útiles.",
    summary:
      "Creamos landing pages, sitios informativos y portales sencillos cuando son la solución adecuada.",
    description:
      "Este servicio está pensado para proyectos con objetivos, contenidos y límites claros. Puede incluir formularios, analítica e integraciones básicas, manteniendo el foco en rendimiento y facilidad de mantenimiento.",
    outcomes: [
      "Mensaje comercial claro",
      "Experiencia responsive",
      "Carga rápida y SEO técnico",
      "Integraciones esenciales",
    ],
    capabilities: [
      "Landing pages",
      "Sitios corporativos",
      "WordPress",
      "Formularios",
      "Analítica",
      "SEO técnico",
      "Integraciones básicas",
      "Mantenimiento acotado",
    ],
    idealFor: [
      "Empresas que necesitan presentar claramente su oferta",
      "Campañas o productos con una conversión específica",
      "Proyectos con diseño, contenidos y alcance definidos",
    ],
    process: [
      {
        title: "Contenido y objetivo",
        description: "Definimos audiencia, mensaje, recorrido y conversión.",
      },
      {
        title: "Diseño y construcción",
        description: "Creamos una experiencia consistente, rápida y responsive.",
      },
      {
        title: "Publicación",
        description: "Configuramos dominio, analítica y entrega técnica.",
      },
    ],
    related: ["integraciones", "infraestructura", "automatizacion-ia"],
  },
];

export function getService(slug: ServiceSlug) {
  return serviceCatalog.find((service) => service.slug === slug)!;
}

export const caseStudies = [
  {
    sector: "Renta corta",
    title: "Plataforma de gestión operativa integral",
    problem:
      "Reservas, gastos y documentos vivían en herramientas diferentes y exigían consolidación manual.",
    solution:
      "Una plataforma con reservas, balances, gastos, documentos, recursos humanos y automatización documental.",
    impact: "Operación centralizada, trazable y con menos trabajo administrativo.",
  },
  {
    sector: "Operación empresarial",
    title: "Sistema modular para procesos internos",
    problem:
      "La empresa necesitaba gestionar clientes, facturación, pagos, reportes y nuevos módulos sin fragmentar la información.",
    solution:
      "Sistema empresarial desarrollado por fases con módulos operativos y zona para clientes.",
    impact: "Una base tecnológica capaz de evolucionar con nuevas necesidades.",
  },
  {
    sector: "Retail y sistemas críticos",
    title: "Evolución e integración de software legacy",
    problem:
      "Procesos especializados dependían de aplicaciones existentes y reglas de negocio acumuladas durante años.",
    solution:
      "Diagnóstico, soporte técnico especializado e integraciones sobre tecnologías legacy y actuales.",
    impact: "Continuidad operativa sin perder conocimiento crítico del negocio.",
  },
  {
    sector: "Inventario y trazabilidad",
    title: "Control de herramientas y operación",
    problem:
      "La organización necesitaba mejorar la trazabilidad de inventario, bodegas, usuarios, actas y reportes.",
    solution:
      "Diseño de una solución empresarial por fases con roles, movimientos y control documental.",
    impact: "Mayor visibilidad de activos, responsabilidades y estados operativos.",
  },
];

export const methodologySteps = [
  {
    number: "01",
    title: "Descubrimiento",
    description:
      "Entendemos el negocio, el proceso actual, los usuarios y el resultado que realmente importa.",
  },
  {
    number: "02",
    title: "Alcance y arquitectura",
    description:
      "Definimos funcionalidades, exclusiones, integraciones, infraestructura y una primera fase útil.",
  },
  {
    number: "03",
    title: "Construcción iterativa",
    description:
      "Desarrollamos con validaciones frecuentes para reducir riesgos y mantener decisiones claras.",
  },
  {
    number: "04",
    title: "Implementación",
    description:
      "Probamos, desplegamos y entregamos accesos, código y documentación según el proyecto.",
  },
  {
    number: "05",
    title: "Evolución",
    description:
      "Separamos soporte, mantenimiento y nuevas fases para que la solución crezca de forma sostenible.",
  },
];

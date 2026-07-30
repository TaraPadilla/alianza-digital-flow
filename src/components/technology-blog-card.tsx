import { Bot, Code2, ExternalLink, Newspaper, Workflow } from "lucide-react";

const BLOG_URL = "https://blog.tecnologiaydesarrolloweb.com/";

const topics = [
  {
    icon: Bot,
    title: "IA aplicada al negocio",
    description: "Ideas prácticas para convertir inteligencia artificial en resultados medibles.",
  },
  {
    icon: Workflow,
    title: "Automatización y WhatsApp",
    description: "Guías para conectar procesos, canales y equipos de forma más eficiente.",
  },
  {
    icon: Code2,
    title: "Software empresarial",
    description: "Buenas prácticas para crear soluciones seguras, escalables y sostenibles.",
  },
];

export function TechnologyBlogCard() {
  return (
    <article
      aria-labelledby="technology-blog-title"
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-brand/30 bg-gradient-to-br from-brand/10 via-accent/5 to-brand/10"
    >
      <div
        aria-hidden="true"
        className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl"
      />

      <div className="relative overflow-hidden border-b border-white/10 bg-[#050c22]">
        <img
          src="/alianza-f1-blog-tecnologia.webp"
          alt=""
          aria-hidden="true"
          width="1152"
          height="768"
          loading="lazy"
          decoding="async"
          className="aspect-[16/7] w-full object-cover transition duration-700 group-hover:scale-[1.02]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-background/55 via-transparent to-transparent"
        />
        <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-background/80 px-3 py-1.5 text-xs font-medium text-foreground shadow-lg backdrop-blur-md">
          <Newspaper className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
          Guías, noticias y recursos
        </div>
      </div>

      <div className="relative flex flex-1 flex-col p-5 sm:p-6">
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-brand/20 bg-brand/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand">
          <Code2 className="h-3.5 w-3.5" aria-hidden="true" />
          Conocimiento tecnológico
        </div>

        <h2
          id="technology-blog-title"
          className="mt-4 font-display text-2xl font-semibold leading-tight tracking-tight sm:text-3xl"
        >
          Blog de tecnología y desarrollo de software
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
          Descubre contenidos sobre inteligencia artificial, automatización, WhatsApp y desarrollo
          de soluciones empresariales, explicados con enfoque práctico.
        </p>

        <ul className="mt-5 grid gap-3" aria-label="Temas del blog de tecnología">
          {topics.map(({ icon: Icon, title, description }) => (
            <li
              key={title}
              className="flex gap-3 rounded-xl border border-white/8 bg-white/[0.025] p-3"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand/10 text-brand">
                <Icon className="h-4 w-4" aria-hidden="true" />
              </span>
              <span>
                <strong className="block text-sm font-semibold text-foreground">{title}</strong>
                <span className="mt-0.5 block text-xs leading-relaxed text-muted-foreground">
                  {description}
                </span>
              </span>
            </li>
          ))}
        </ul>

        <a
          href={BLOG_URL}
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Visitar el blog de tecnología y desarrollo de software; abre en una pestaña nueva"
          className="magnetic magnetic-shine mt-6 inline-flex w-fit items-center gap-2 rounded-xl btn-primary btn-primary-hover px-5 py-3 text-sm font-semibold shadow-lg"
        >
          Visitar el blog
          <ExternalLink className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}

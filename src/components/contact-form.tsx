import { ArrowRight, CheckCircle2, LockKeyhole, MessageCircleMore } from "lucide-react";
import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const WHATSAPP_BASE = "https://wa.me/573025673434";
const MINIMUM_COMPLETION_TIME = 1_500;

const interestOptions = [
  "Software a medida",
  "Automatización e IA",
  "Integraciones",
  "Sitio web",
  "Soporte o modernización",
  "Aún no lo tengo claro",
] as const;

type ContactData = {
  nombre: string;
  empresa: string;
  contacto: string;
  interes: string;
  mensaje: string;
  sitioWeb: string;
};

type ContactField = Exclude<keyof ContactData, "sitioWeb">;
type ContactErrors = Partial<Record<ContactField | "form", string>>;

const initialData: ContactData = {
  nombre: "",
  empresa: "",
  contacto: "",
  interes: "",
  mensaje: "",
  sitioWeb: "",
};

function whatsappUrl(data: ContactData) {
  const message = [
    `Hola Tara, soy ${data.nombre.trim()}${data.empresa.trim() ? ` de ${data.empresa.trim()}` : ""}.`,
    `Quiero pedir información sobre: ${data.interes}.`,
    "",
    data.mensaje.trim(),
    "",
    `Puedes contactarme en: ${data.contacto.trim()}`,
  ].join("\n");

  return `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`;
}

export function ContactForm({
  className,
  heading = "Cuéntanos qué necesitas",
  description = "Completa lo esencial. El mensaje quedará listo para enviarlo por WhatsApp.",
}: {
  className?: string;
  heading?: string;
  description?: string;
}) {
  const [data, setData] = useState<ContactData>(initialData);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [submittedUrl, setSubmittedUrl] = useState("");
  const startedAt = useRef(0);

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  function update<K extends keyof ContactData>(field: K, value: ContactData[K]) {
    setData((current) => ({ ...current, [field]: value }));
    if (field !== "sitioWeb" && errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined, form: undefined }));
    }
  }

  function validate() {
    const nextErrors: ContactErrors = {};
    const name = data.nombre.trim();
    const contact = data.contacto.trim();
    const message = data.mensaje.trim();

    if (name.length < 2) nextErrors.nombre = "Escribe tu nombre.";
    if (name.length > 80) nextErrors.nombre = "Usa máximo 80 caracteres.";
    if (data.empresa.length > 100) nextErrors.empresa = "Usa máximo 100 caracteres.";
    if (contact.length < 5) nextErrors.contacto = "Escribe un correo o número de WhatsApp.";
    if (contact.length > 120) nextErrors.contacto = "Usa máximo 120 caracteres.";
    if (!data.interes) nextErrors.interes = "Selecciona el tema de tu consulta.";
    if (message.length < 10) nextErrors.mensaje = "Cuéntanos un poco más (mínimo 10 caracteres).";
    if (message.length > 700) nextErrors.mensaje = "Usa máximo 700 caracteres.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmittedUrl("");

    // Honeypot: las personas nunca ven ni completan este campo.
    if (data.sitioWeb) {
      setErrors({ form: "No pudimos validar el envío. Recarga la página e inténtalo de nuevo." });
      return;
    }

    if (!startedAt.current || Date.now() - startedAt.current < MINIMUM_COMPLETION_TIME) {
      setErrors({ form: "Espera un momento y vuelve a intentarlo." });
      return;
    }

    if (!validate()) return;

    const url = whatsappUrl(data);
    setSubmittedUrl(url);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className={cn(
        "relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-surface/80 p-5 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-8",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-brand/15 blur-3xl"
      />

      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="font-display text-2xl font-semibold tracking-tight">{heading}</h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
              {description}
            </p>
          </div>
          <span className="hidden h-11 w-11 shrink-0 place-items-center rounded-2xl border border-brand/20 bg-brand/10 text-brand sm:grid">
            <MessageCircleMore className="h-5 w-5" aria-hidden="true" />
          </span>
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[-10000px] top-auto h-px w-px overflow-hidden"
        >
          <Label htmlFor="contact-website">Sitio web</Label>
          <Input
            id="contact-website"
            name="website"
            value={data.sitioWeb}
            onChange={(event) => update("sitioWeb", event.target.value)}
            autoComplete="off"
            tabIndex={-1}
          />
        </div>

        <div className="mt-7 grid gap-5 sm:grid-cols-2">
          <Field label="Nombre" error={errors.nombre}>
            <Input
              id="contact-name"
              name="name"
              value={data.nombre}
              onChange={(event) => update("nombre", event.target.value)}
              maxLength={80}
              autoComplete="name"
              aria-invalid={Boolean(errors.nombre)}
              aria-describedby={errors.nombre ? "contact-name-error" : undefined}
              className="mt-2 h-12 rounded-xl bg-white/[0.035] px-4"
              placeholder="Tu nombre"
            />
          </Field>

          <Field label="Empresa (opcional)" error={errors.empresa}>
            <Input
              id="contact-company"
              name="organization"
              value={data.empresa}
              onChange={(event) => update("empresa", event.target.value)}
              maxLength={100}
              autoComplete="organization"
              aria-invalid={Boolean(errors.empresa)}
              aria-describedby={errors.empresa ? "contact-company-error" : undefined}
              className="mt-2 h-12 rounded-xl bg-white/[0.035] px-4"
              placeholder="Nombre de tu empresa"
            />
          </Field>

          <Field label="Correo o WhatsApp" error={errors.contacto}>
            <Input
              id="contact-channel"
              name="contact"
              value={data.contacto}
              onChange={(event) => update("contacto", event.target.value)}
              maxLength={120}
              autoComplete="email"
              inputMode="email"
              aria-invalid={Boolean(errors.contacto)}
              aria-describedby={errors.contacto ? "contact-channel-error" : undefined}
              className="mt-2 h-12 rounded-xl bg-white/[0.035] px-4"
              placeholder="tu@correo.com o +57…"
            />
          </Field>

          <Field label="¿Qué te interesa?" error={errors.interes}>
            <Select value={data.interes} onValueChange={(value) => update("interes", value)}>
              <SelectTrigger
                id="contact-interest"
                aria-invalid={Boolean(errors.interes)}
                aria-describedby={errors.interes ? "contact-interest-error" : undefined}
                className="mt-2 h-12 w-full rounded-xl bg-white/[0.035] px-4"
              >
                <SelectValue placeholder="Selecciona una opción" />
              </SelectTrigger>
              <SelectContent>
                {interestOptions.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>

          <div className="sm:col-span-2">
            <div className="flex items-center justify-between gap-3">
              <Label htmlFor="contact-message">¿Cómo podemos ayudarte?</Label>
              <span className="text-[11px] tabular-nums text-muted-foreground">
                {data.mensaje.length}/700
              </span>
            </div>
            <Textarea
              id="contact-message"
              name="message"
              value={data.mensaje}
              onChange={(event) => update("mensaje", event.target.value)}
              maxLength={700}
              rows={4}
              aria-invalid={Boolean(errors.mensaje)}
              aria-describedby={errors.mensaje ? "contact-message-error" : undefined}
              className="mt-2 min-h-32 resize-y rounded-xl bg-white/[0.035] px-4 py-3"
              placeholder="Ej.: necesitamos automatizar la recepción de solicitudes y conectarlas con nuestro sistema actual."
            />
            {errors.mensaje && (
              <p id="contact-message-error" className="mt-1.5 text-xs text-destructive">
                {errors.mensaje}
              </p>
            )}
          </div>
        </div>

        <div aria-live="polite" className="mt-5">
          {errors.form && (
            <p className="rounded-xl border border-destructive/25 bg-destructive/10 px-4 py-3 text-sm text-destructive">
              {errors.form}
            </p>
          )}
          {submittedUrl && (
            <p className="flex items-start gap-2 rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-200">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              <span>
                El mensaje está listo. Si WhatsApp no se abrió,{" "}
                <a
                  href={submittedUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="font-semibold underline underline-offset-2"
                >
                  ábrelo aquí
                </a>
                .
              </span>
            </p>
          )}
        </div>

        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-2 text-xs text-muted-foreground">
            <LockKeyhole className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
            Sin CAPTCHA. Protección antirrobots silenciosa.
          </p>
          <button
            type="submit"
            className="magnetic magnetic-shine inline-flex min-h-12 items-center justify-center gap-2 rounded-xl btn-primary btn-primary-hover px-5 py-3 text-sm font-semibold"
          >
            Pedir información
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </form>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: ReactNode }) {
  const errorId =
    label === "Nombre"
      ? "contact-name-error"
      : label === "Empresa (opcional)"
        ? "contact-company-error"
        : label === "Correo o WhatsApp"
          ? "contact-channel-error"
          : "contact-interest-error";

  return (
    <div>
      <Label htmlFor={errorId.replace("-error", "")}>{label}</Label>
      {children}
      {error && (
        <p id={errorId} className="mt-1.5 text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}

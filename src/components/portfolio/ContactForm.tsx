import { useState, type FormEvent } from "react";
import { Loader2, Send } from "lucide-react";
import { LINKS } from "@/data/portfolio";

type Errors = { name?: string; email?: string; message?: string };

export function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const validate = () => {
    const next: Errors = {};
    if (values.name.trim().length < 2) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
      next.email = "Please enter a valid email address.";
    if (values.message.trim().length < 10) next.message = "Message should be at least 10 characters.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    const subject = encodeURIComponent(`Portfolio message from ${values.name}`);
    const body = encodeURIComponent(`${values.message}\n\nFrom: ${values.name} (${values.email})`);
    window.location.href = `mailto:${LINKS.email}?subject=${subject}&body=${body}`;
    window.setTimeout(() => setStatus("sent"), 700);
  };

  const field =
    "w-full rounded-xl border border-border bg-secondary/40 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/50 focus:ring-2 focus:ring-ring/40";

  return (
    <form onSubmit={onSubmit} noValidate className="glass rounded-2xl p-6 md:p-8">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-xs font-medium text-muted-foreground">
            Name
          </label>
          <input
            id="name"
            name="name"
            className={field}
            placeholder="Your name"
            value={values.name}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            onChange={(e) => setValues({ ...values, name: e.target.value })}
          />
          {errors.name ? (
            <p id="name-error" className="mt-1.5 text-xs text-destructive">
              {errors.name}
            </p>
          ) : null}
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-xs font-medium text-muted-foreground">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className={field}
            placeholder="you@example.com"
            value={values.email}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
          />
          {errors.email ? (
            <p id="email-error" className="mt-1.5 text-xs text-destructive">
              {errors.email}
            </p>
          ) : null}
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="message" className="mb-2 block text-xs font-medium text-muted-foreground">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={field}
          placeholder="Tell me about the role, project or idea…"
          value={values.message}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          onChange={(e) => setValues({ ...values, message: e.target.value })}
        />
        {errors.message ? (
          <p id="message-error" className="mt-1.5 text-xs text-destructive">
            {errors.message}
          </p>
        ) : null}
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 disabled:opacity-70"
          style={{ boxShadow: "var(--shadow-glow)" }}
        >
          {status === "sending" ? (
            <Loader2 className="size-4 animate-spin" />
          ) : (
            <Send className="size-4" />
          )}
          Send Message
        </button>
        <p aria-live="polite" className="text-xs text-muted-foreground">
          {status === "sent"
            ? "Your email client has opened with the message ready to send."
            : null}
        </p>
      </div>
    </form>
  );
}

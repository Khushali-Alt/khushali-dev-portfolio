import { useRef, useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { Loader2, Send } from "lucide-react";

// EmailJS credentials (public key / IDs — safe to expose client-side).
const EMAILJS_SERVICE_ID = "service_57l89rs";
const EMAILJS_TEMPLATE_ID = "template_kvor4pc";
const EMAILJS_PUBLIC_KEY = "ifgLkgDWc2v5UlwmW";

type Errors = { name?: string; email?: string; message?: string };

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const validate = () => {
    const next: Errors = {};
    if (values.name.trim().length < 2) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
      next.email = "Please enter a valid email address.";
    if (values.message.trim().length < 10) next.message = "Message should be at least 10 characters.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");

    try {
      const form = formRef.current;
      if (!form) return;
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form, {
        publicKey: EMAILJS_PUBLIC_KEY,
      });
      setStatus("sent");
      setValues({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS send failed:", err);
      setStatus("error");
    }
  };

  const field =
    "w-full border-2 border-foreground bg-background px-4 py-3 text-sm font-medium outline-none transition-shadow placeholder:text-muted-foreground focus:shadow-editorial";

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="paper-panel bg-highlight p-6 md:p-8">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-xs font-medium text-muted-foreground">
            Name
          </label>
          <input
            id="name"
            name="from_name"
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
            name="reply_to"
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
          className="editorial-button bg-foreground text-background disabled:opacity-70"
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
            ? "Message sent — thanks, I'll get back to you soon!"
            : status === "error"
              ? "Something went wrong sending your message. Please try again."
              : null}
        </p>
      </div>
    </form>
  );
}

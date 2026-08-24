import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

function useSpotlight<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    el.addEventListener("pointermove", onMove);
    return () => el.removeEventListener("pointermove", onMove);
  }, []);
  return ref;
}

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}) {
  const ref = useSpotlight<HTMLElement>();
  return (
    <section
      id={id}
      ref={ref}
      className={cn("relative mx-auto w-full max-w-6xl px-5 py-20 md:py-28", className)}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-80"
        style={{
          background:
            "radial-gradient(320px circle at var(--mx, 50%) var(--my, 30%), color-mix(in oklab, var(--primary) 10%, transparent), transparent 70%)",
        }}
      />
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">{eyebrow}</p>
        <h2 className="mt-3 text-3xl font-semibold md:text-4xl">{title}</h2>
        {description ? (
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
            {description}
          </p>
        ) : null}
      </Reveal>
      <div className="mt-10 md:mt-14">{children}</div>
    </section>
  );
}

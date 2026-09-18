import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function Section({ id, eyebrow, title, description, children, className }: { id: string; eyebrow: string; title: string; description?: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={cn("relative border-t-2 border-foreground px-4 py-16 md:px-8 md:py-24", className)}>
      <div className="mx-auto min-w-0 max-w-7xl">
        <Reveal className="grid min-w-0 grid-cols-[minmax(0,1fr)] gap-4 md:grid-cols-[220px_minmax(0,1fr)] md:items-start">
          <p className="section-kicker pt-2">{eyebrow}</p>
          <div className="min-w-0">
            <h2 className="max-w-4xl text-4xl font-black uppercase leading-[0.95] sm:text-6xl">{title}</h2>
            {description ? <p className="mt-5 max-w-2xl text-base font-medium leading-relaxed text-muted-foreground">{description}</p> : null}
          </div>
        </Reveal>
        <div className="mt-12 min-w-0">{children}</div>
      </div>
    </section>
  );
}
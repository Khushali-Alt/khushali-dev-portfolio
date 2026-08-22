import { useRef, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SpotlightCard({
  as: Tag = "div",
  className,
  children,
  glow = 260,
}: {
  as?: ElementType;
  className?: string;
  children: ReactNode;
  glow?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <Tag
      ref={ref}
      onMouseMove={(e: React.MouseEvent<HTMLDivElement>) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        el.style.setProperty("--mx", `${e.clientX - r.left}px`);
        el.style.setProperty("--my", `${e.clientY - r.top}px`);
        el.style.setProperty("--spot", "1");
      }}
      onMouseLeave={() => ref.current?.style.setProperty("--spot", "0")}
      className={cn("glass glass-hover spotlight relative overflow-hidden rounded-2xl", className)}
      style={{ ["--glow" as string]: `${glow}px` }}
    >
      {children}
    </Tag>
  );
}

import { useEffect, useRef } from "react";

/**
 * Global liquid cursor field: two blurred blobs that trail the pointer with
 * different easing, creating a soft "liquified" flow across every section.
 */
export function CursorField() {
  const aRef = useRef<HTMLDivElement>(null);
  const bRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(hover: none)").matches) return;

    let tx = window.innerWidth / 2;
    let ty = window.innerHeight / 3;
    let ax = tx;
    let ay = ty;
    let bx = tx;
    let by = ty;
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };

    const tick = () => {
      ax += (tx - ax) * 0.14;
      ay += (ty - ay) * 0.14;
      bx += (tx - bx) * 0.06;
      by += (ty - by) * 0.06;
      const stretch = Math.min(1.35, 1 + Math.hypot(tx - bx, ty - by) / 900);
      if (aRef.current) {
        aRef.current.style.transform = `translate3d(${ax}px, ${ay}px, 0) translate(-50%, -50%)`;
      }
      if (bRef.current) {
        bRef.current.style.transform = `translate3d(${bx}px, ${by}px, 0) translate(-50%, -50%) scale(${stretch})`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div
        ref={bRef}
        className="absolute left-0 top-0 size-[38rem] rounded-full opacity-[0.55] blur-[90px] will-change-transform"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--primary) 16%, transparent), transparent 70%)",
        }}
      />
      <div
        ref={aRef}
        className="absolute left-0 top-0 size-[22rem] rounded-full opacity-70 blur-[60px] will-change-transform"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--chart-2, var(--primary)) 14%, transparent), transparent 70%)",
        }}
      />
    </div>
  );
}

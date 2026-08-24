import { useEffect, useRef, useState } from "react";
import { ArrowRight, FileDown, Github, Linkedin, Code2, Sparkles } from "lucide-react";
import { LINKS } from "@/data/portfolio";
import backdrop from "@/assets/profile-backdrop.jpg";

const ROLES = ["Full-Stack Developer", "AI/ML Enthusiast", "Software Engineer in Progress"];

const MARQUEE = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express",
  "Python",
  "Java",
  "Flask",
  "MongoDB",
  "SQL",
  "Scikit-learn",
  "Docker",
  "Tailwind CSS",
  "Git",
];

function useRotatingRole() {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = window.setInterval(() => setI((v) => (v + 1) % ROLES.length), 2600);
    return () => window.clearInterval(t);
  }, []);
  return ROLES[i];
}

export function Hero() {
  const role = useRotatingRole();
  const spotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = spotRef.current;
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

  return (
    <section
      id="home"
      ref={spotRef}
      className="relative overflow-hidden pt-36 pb-16 md:pt-44 md:pb-20"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-bg opacity-50" />
      <div aria-hidden className="pointer-events-none absolute inset-0 hero-glow" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70 transition-opacity"
        style={{
          background:
            "radial-gradient(340px circle at var(--mx, 50%) var(--my, 20%), color-mix(in oklab, var(--primary) 12%, transparent), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="orb pointer-events-none left-[-6rem] top-24 size-72 bg-primary/25"
      />
      <div
        aria-hidden
        className="orb pointer-events-none right-[-4rem] top-56 size-64 bg-chart-2/20"
        style={{ animationDelay: "-6s" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40"
        style={{ background: "linear-gradient(to top, var(--background), transparent)" }}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <span className="inline-flex items-center gap-2.5 rounded-full border border-border bg-secondary/60 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-primary backdrop-blur-md">
            <span className="live-dot size-1.5 rounded-full bg-primary" />
            OPEN TO FULL TIME SDE ROLES
          </span>

          <h1 className="mt-6 text-[2.6rem] font-bold leading-[1.03] md:text-7xl">
            <span className="shimmer-text">Khushali Tiwari</span>
          </h1>

          <p className="mt-5 flex flex-wrap items-center gap-x-2 font-mono text-sm text-muted-foreground md:text-base">
            <Sparkles aria-hidden className="size-4 text-primary" />
            <span className="text-muted-foreground/70">building as a</span>
            <span key={role} className="animate-fade-in font-semibold text-foreground">
              {role}
              <span aria-hidden className="ml-0.5 inline-block w-[2px] translate-y-[2px] self-stretch bg-primary align-middle" style={{ height: "1em" }} />
            </span>
            <span className="sr-only">
              Full-Stack Developer, AI/ML Enthusiast, Software Engineer in Progress
            </span>
          </p>

          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-[15px]">
            I am a B.Tech student specializing in Full-Stack Development with a passion for building
            functional, user-centric web applications. Currently, I am sharpening my skills in modern
            frontend frameworks and robust backend databases through hands-on projects. I love
            translating complex logic into seamless digital experiences. My goal is to become a
            versatile Software Engineer who contributes to impactful, scalable tech solutions. I bring
            a strong foundation in computer science principles, a collaborative mindset, and an
            eagerness to learn and adapt to evolving technologies.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              style={{ boxShadow: "var(--shadow-glow)" }}
            >
              <span
                aria-hidden
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-700 group-hover:translate-x-full"
              />
              View Projects
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={`mailto:${LINKS.email}?subject=Resume%20request`}
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-secondary/50 px-5 py-3 text-sm font-semibold backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
            >
              <FileDown className="size-4" />
              Download Resume
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            {[
              { href: LINKS.github, label: "GitHub", Icon: Github },
              { href: LINKS.linkedin, label: "LinkedIn", Icon: Linkedin },
              { href: LINKS.leetcode, label: "LeetCode", Icon: Code2 },
            ].map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                className="group inline-flex items-center gap-2 rounded-lg border border-border px-3.5 py-2 text-xs text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-foreground hover:shadow-[0_0_22px_-8px_var(--primary)]"
              >
                <Icon className="size-4 transition-colors group-hover:text-primary" />
                {label}
              </a>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="float-soft relative">
            <div className="relative aspect-square overflow-hidden rounded-[1.75rem] p-[1.5px]">
              <span aria-hidden className="conic-ring opacity-70" />
              <div className="glass relative size-full overflow-hidden rounded-[1.7rem]">
                <img
                  src={backdrop}
                  alt=""
                  aria-hidden
                  width={768}
                  height={768}
                  className="absolute inset-0 size-full object-cover opacity-70"
                />
                <div className="relative grid size-full place-items-center">
                  <div className="text-center">
                    <span className="font-display text-6xl font-bold text-gradient">KT</span>
                    <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                      B.Tech CSE · 2023–2027
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass absolute -left-6 top-8 hidden rounded-xl px-3 py-2 font-mono text-[11px] text-muted-foreground sm:block">
              <span className="text-primary">●</span> Java · DSA
            </div>
            <div className="glass absolute -right-4 bottom-24 hidden rounded-xl px-3 py-2 font-mono text-[11px] text-muted-foreground sm:block">
              <span className="text-primary">▲</span> AI / ML
            </div>
          </div>

          <div className="glass mt-5 grid grid-cols-3 divide-x divide-border rounded-2xl p-4 text-center">
            {[
              { v: "200+", l: "LeetCode" },
              { v: "8.0", l: "CGPA" },
              { v: "8+", l: "Projects" },
            ].map((s) => (
              <div key={s.l}>
                <p className="font-display text-xl font-bold text-primary">{s.v}</p>
                <p className="text-[11px] text-muted-foreground">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* tech marquee */}
      <div
        className="relative mt-14 overflow-hidden border-y border-border py-3.5"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
        }}
        aria-hidden
      >
        <div className="marquee-track gap-8 pr-8">
          {[...MARQUEE, ...MARQUEE].map((t, i) => (
            <span
              key={`${t}-${i}`}
              className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground/70"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

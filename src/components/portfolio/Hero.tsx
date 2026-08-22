import { ArrowRight, FileDown, Github, Linkedin, Code2 } from "lucide-react";
import { LINKS } from "@/data/portfolio";
import backdrop from "@/assets/profile-backdrop.jpg";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-bg opacity-60" />
      <div aria-hidden className="pointer-events-none absolute inset-0 hero-glow" />
      <div
        aria-hidden
        className="orb pointer-events-none left-[-6rem] top-24 size-72 bg-primary/25"
      />
      <div
        aria-hidden
        className="orb pointer-events-none right-[-4rem] top-56 size-64 bg-chart-2/20"
        style={{ animationDelay: "-6s" }}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1.35fr_1fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
            <span className="size-1.5 rounded-full bg-primary" />
            Open to internships & SDE roles
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-[1.05] md:text-6xl">
            <span className="text-gradient">Khushali Tiwari</span>
          </h1>
          <p className="mt-4 font-mono text-sm text-muted-foreground md:text-base">
            Full-Stack Developer <span className="text-primary">/</span> AI–ML Enthusiast{" "}
            <span className="text-primary">/</span> Software Engineer in Progress
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
              className="group inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              style={{ boxShadow: "var(--shadow-glow)" }}
            >
              View Projects
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={`mailto:${LINKS.email}?subject=Resume%20request`}
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-secondary/60 px-5 py-3 text-sm font-semibold transition-colors hover:border-primary/40"
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
                className="inline-flex items-center gap-2 rounded-lg border border-border px-3.5 py-2 text-xs text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
              >
                <Icon className="size-4" />
                {label}
              </a>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="glass relative aspect-square overflow-hidden rounded-3xl p-2">
            <img
              src={backdrop}
              alt=""
              aria-hidden
              width={768}
              height={768}
              className="absolute inset-0 size-full object-cover opacity-70"
            />
            <div className="relative grid size-full place-items-center rounded-[1.4rem]">
              <div className="text-center">
                <span className="font-display text-6xl font-bold text-gradient">KT</span>
                <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                  B.Tech CSE · 2023–2027
                </p>
              </div>
            </div>
          </div>
          <div className="glass mt-4 grid grid-cols-2 gap-3 rounded-2xl p-4 text-center">
            <div>
              <p className="font-display text-xl font-bold text-primary">200+</p>
              <p className="text-[11px] text-muted-foreground">LeetCode solved</p>
            </div>
            <div>
              <p className="font-display text-xl font-bold text-primary">8.0</p>
              <p className="text-[11px] text-muted-foreground">CGPA / 10</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

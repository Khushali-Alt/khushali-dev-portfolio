import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Award,
  Briefcase,
  Code2,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Twitter,
} from "lucide-react";

import { Nav } from "@/components/portfolio/Nav";
import { CursorField } from "@/components/portfolio/CursorField";
import { Hero } from "@/components/portfolio/Hero";
import { ContactForm } from "@/components/portfolio/ContactForm";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import {
  ACHIEVEMENTS,
  FEATURED_PROJECTS,
  LINKS,
  MINI_PROJECTS,
  SKILL_GROUPS,
  STATS,
} from "@/data/portfolio";

const title = "Khushali Tiwari — Full-Stack Developer & AI/ML Enthusiast";
const description =
  "Portfolio of Khushali Tiwari, a B.Tech CSE student building full-stack web applications and AI/ML projects with React, Next.js, Node.js and Python.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <CursorField />
      <Nav />
      <main>
        <Hero />

        {/* ABOUT */}
        <Section
          id="about"
          eyebrow="01 / About"
          title="A CS student who ships real applications"
          description="I study Computer Science Engineering with a Data Science minor, and I learn best by building — full-stack apps, API integrations and machine-learning experiments."
        >
          <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
            <Reveal className="glass glass-hover rounded-2xl p-6 md:p-8">
              <ul className="grid gap-3 text-sm leading-relaxed text-muted-foreground sm:grid-cols-2">
                {[
                  "B.Tech Computer Science Engineering student",
                  "Full-Stack Development specialization",
                  "Data Science minor",
                  "Strong foundation in core CS principles",
                  "Hands-on development across multiple projects",
                  "Active interest in AI/ML and Generative AI",
                  "Passion for solving problems with technology",
                  "Strong learning and adaptation mindset",
                  "Goal: become a versatile Software Engineer",
                  "Collaborative and adaptable by default",
                ].map((point) => (
                  <li key={point} className="flex gap-2.5">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>

            <div className="grid grid-cols-2 gap-4">
              {STATS.map((s, i) => (
                <Reveal
                  key={s.label}
                  delay={i * 70}
                  className="glass glass-hover flex flex-col justify-center rounded-2xl p-5"
                >
                  <p className="font-display text-2xl font-bold text-primary">{s.value}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </Section>

        {/* EDUCATION */}
        <Section id="education" eyebrow="02 / Education" title="Academic background">
          <ol className="relative border-l border-border pl-6">
            <li className="relative">
              <span className="absolute -left-[1.72rem] top-1.5 grid size-6 place-items-center rounded-full border border-primary/40 bg-background">
                <span className="size-2 rounded-full bg-primary" />
              </span>
              <Reveal className="glass glass-hover rounded-2xl p-6 md:p-8">
                <div className="flex flex-wrap items-center gap-3">
                  <GraduationCap className="size-5 text-primary" />
                  <h3 className="text-lg font-semibold">Quantum University — Roorkee, Uttarakhand</h3>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Bachelor of Technology — Computer Science Engineering
                </p>
                <div className="mt-4 flex flex-wrap gap-2 font-mono text-xs">
                  {["2023 – 2027", "CGPA 8.0 / 10", "Minor: Data Science"].map((t) => (
                    <span
                      key={t}
                      className="rounded-lg border border-border bg-secondary/50 px-3 py-1.5 text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Reveal>
            </li>
          </ol>
        </Section>

        {/* EXPERIENCE */}
        <Section id="experience" eyebrow="03 / Experience" title="Where I've worked">
          <ol className="relative border-l border-border pl-6">
            <li className="relative">
              <span className="absolute -left-[1.72rem] top-1.5 grid size-6 place-items-center rounded-full border border-primary/40 bg-background">
                <span className="size-2 rounded-full bg-primary" />
              </span>
              <Reveal className="glass glass-hover rounded-2xl p-6 md:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <Briefcase className="size-5 text-primary" />
                    <h3 className="text-lg font-semibold">
                      Web Development Intern — TechyVibe Technology
                    </h3>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">
                    July 2024 – August 2024
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Worked on assigned web development projects and gained hands-on experience with
                  modern frontend development and day-to-day development workflows — implementing
                  interfaces, collaborating with the team, and learning practical delivery habits.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["HTML", "CSS", "Bootstrap", "JavaScript", "Tailwind CSS", "React", "Git"].map(
                    (t) => (
                      <span
                        key={t}
                        className="rounded-lg border border-border bg-secondary/50 px-3 py-1.5 font-mono text-xs text-muted-foreground"
                      >
                        {t}
                      </span>
                    ),
                  )}
                </div>
              </Reveal>
            </li>
          </ol>
        </Section>

        {/* SKILLS */}
        <Section
          id="skills"
          eyebrow="04 / Skills"
          title="Technology stack"
          description="The languages, frameworks and tools I use to build and experiment."
        >
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {SKILL_GROUPS.map((group, i) => (
              <Reveal
                key={group.title}
                delay={i * 60}
                className="glass glass-hover rounded-2xl p-6"
              >
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                  {group.title}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="cursor-default rounded-lg border border-border bg-secondary/40 px-3 py-1.5 text-xs text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:text-foreground hover:shadow-[0_0_20px_-6px_var(--primary)]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* PROJECTS */}
        <Section
          id="projects"
          eyebrow="05 / Projects"
          title="Featured projects"
          description="Full-stack builds, API integrations and machine-learning experiments — each one built end to end."
        >
          <div className="grid gap-6">
            {FEATURED_PROJECTS.map((p, i) => (
              <Reveal
                key={p.title}
                as="article"
                delay={i * 50}
                className="glass glass-hover group overflow-hidden rounded-3xl"
              >
                <div className="grid gap-6 p-6 md:grid-cols-[1fr_1.6fr] md:p-8">
                  <div className="relative min-h-40 overflow-hidden rounded-2xl border border-border bg-secondary/40">
                    <div aria-hidden className="absolute inset-0 grid-bg opacity-70" />
                    <div
                      aria-hidden
                      className="absolute inset-0 opacity-70 transition-opacity duration-500 group-hover:opacity-100"
                      style={{ background: "var(--gradient-hero)" }}
                    />
                    <div className="relative flex h-full flex-col justify-between p-5">
                      <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
                        0{i + 1}
                      </span>
                      <p className="font-display text-lg font-semibold">{p.blurb}</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold md:text-2xl">{p.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {p.description}
                    </p>

                    <ul className="mt-4 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
                      {p.features.map((f) => (
                        <li key={f} className="flex gap-2.5">
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                          {f}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {p.stack.map((t) => (
                        <span
                          key={t}
                          className="rounded-lg border border-border bg-secondary/40 px-3 py-1.5 font-mono text-xs text-muted-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6">
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-2 rounded-xl border border-border bg-secondary/60 px-4 py-2.5 text-sm font-medium transition-colors hover:border-primary/40 hover:text-primary"
                      >
                        <Github className="size-4" />
                        View on GitHub
                        <ArrowUpRight className="size-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-14">
            <Reveal>
              <h3 className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
                Additional projects & experiments
              </h3>
            </Reveal>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {MINI_PROJECTS.map((p, i) => (
                <Reveal key={p.title} delay={i * 60} className="glass glass-hover rounded-2xl p-5">
                  <h4 className="text-sm font-semibold">{p.title}</h4>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mt-4 inline-flex items-center gap-1.5 text-xs text-primary hover:underline"
                  >
                    <Github className="size-3.5" /> Repository
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </Section>

        {/* ACHIEVEMENTS */}
        <Section
          id="achievements"
          eyebrow="06 / Achievements"
          title="Activities & recognition"
          description="Programs, publications and events that shaped how I learn and collaborate."
        >
          <div className="grid gap-5 md:grid-cols-2">
            {ACHIEVEMENTS.map((a, i) => (
              <Reveal key={a.title} delay={i * 60} className="glass glass-hover rounded-2xl p-6">
                <div className="flex items-start gap-3">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-border bg-secondary/60">
                    <Award className="size-5 text-primary" />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold">{a.title}</h3>
                    <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.15em] text-primary">
                      {a.meta}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {a.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* CODING */}
        <Section
          id="coding"
          eyebrow="07 / Coding"
          title="Problem solving"
          description="Consistent practice in data structures and algorithms, primarily in Java."
        >
          <Reveal className="glass relative overflow-hidden rounded-3xl p-8 md:p-12">
            <div aria-hidden className="absolute inset-0 grid-bg opacity-50" />
            <div className="relative grid items-center gap-8 md:grid-cols-[1fr_auto]">
              <div>
                <p className="font-display text-4xl font-bold text-gradient md:text-6xl">130+</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  LeetCode problems solved · Primary language: Java
                </p>
                <div className="mt-6 flex flex-wrap gap-1.5" aria-hidden>
                  {Array.from({ length: 56 }).map((_, i) => (
                    <span
                      key={i}
                      className="size-3.5 rounded-[4px] border border-border"
                      style={{
                        background:
                          i % 7 === 0
                            ? "transparent"
                            : `color-mix(in oklab, var(--primary) ${20 + ((i * 13) % 70)}%, transparent)`,
                      }}
                    />
                  ))}
                </div>
              </div>
              <a
                href={LINKS.leetcode}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 self-start rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                style={{ boxShadow: "var(--shadow-glow)" }}
              >
                <Code2 className="size-4" />
                LeetCode Profile
              </a>
            </div>
          </Reveal>
        </Section>

        {/* CONTACT */}
        <Section
          id="contact"
          eyebrow="08 / Contact"
          title="Let's Build Something Meaningful."
          description="Open to software engineering internships, collaborations and interesting problems. I usually reply within a day."
        >
          <div className="grid gap-6 lg:grid-cols-[1fr_1.3fr]">
            <Reveal className="grid content-start gap-3">
              {[
                { Icon: Mail, label: LINKS.email, href: `mailto:${LINKS.email}` },
                { Icon: Github, label: "github.com/Khushali-Alt", href: LINKS.github },
                { Icon: Linkedin, label: "LinkedIn — Khushali Tiwari", href: LINKS.linkedin },
                { Icon: Twitter, label: "X — @Khushali_ktgb24", href: LINKS.x },
                { Icon: Code2, label: "LeetCode — Khushali_22", href: LINKS.leetcode },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noreferrer noopener"
                  className="glass glass-hover flex items-center gap-3 rounded-xl px-4 py-3.5 text-sm text-muted-foreground hover:text-foreground"
                >
                  <Icon className="size-4 text-primary" />
                  <span className="truncate">{label}</span>
                  <ArrowUpRight className="ml-auto size-4 opacity-60" />
                </a>
              ))}
            </Reveal>
            <Reveal delay={80}>
              <ContactForm />
            </Reveal>
          </div>
        </Section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-8 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Khushali Tiwari — B.Tech CSE, Quantum University.</p>
          <p className="font-mono">Built with React, TypeScript & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}

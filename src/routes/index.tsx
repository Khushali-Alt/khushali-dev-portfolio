import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Award, Briefcase, Code2, Github, GraduationCap, Linkedin, Mail, Twitter } from "lucide-react";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { ContactForm } from "@/components/portfolio/ContactForm";
import { TechLogo } from "@/components/portfolio/TechLogo";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { ACHIEVEMENTS, FEATURED_PROJECTS, LINKS, MINI_PROJECTS, SKILL_GROUPS, STATS } from "@/data/portfolio";

const title = "Khushali Tiwari — Full-Stack Developer";
const description = "Portfolio of Khushali Tiwari, a full-stack developer and AI/ML enthusiast building modern web applications.";

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

const ABOUT_POINTS = [
  "B.Tech Computer Science Engineering student",
  "Full-Stack Development specialization",
  "Data Science minor",
  "Strong foundation in core CS principles",
  "Hands-on development across multiple projects",
  "Active interest in AI/ML and Generative AI",
  "Passion for solving problems with technology",
  "Collaborative and adaptable by default",
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <a href="#about" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:border-2 focus:border-foreground focus:bg-highlight focus:px-4 focus:py-2">Skip to content</a>
      <Nav />
      <main>
        <Hero />

        <Section id="about" eyebrow="01 / About" title="A CS student who ships real applications" description="I learn best by building — full-stack products, API integrations and machine-learning experiments.">
          <div className="grid gap-4 lg:grid-cols-12">
            <Reveal className="paper-panel bg-card p-6 md:p-8 lg:col-span-7">
              <p className="section-kicker">A little about me</p>
              <ul className="mt-6 grid gap-x-8 gap-y-4 text-sm font-semibold sm:grid-cols-2">
                {ABOUT_POINTS.map((point, index) => (
                  <li key={point} className="flex gap-3 border-t-2 border-foreground pt-3">
                    <span className="text-pop">0{index + 1}</span>{point}
                  </li>
                ))}
              </ul>
            </Reveal>
            <div className="grid grid-cols-2 gap-4 lg:col-span-5">
              {STATS.map((stat, index) => (
                <Reveal key={stat.label} delay={index * 60} className={`paper-panel p-5 ${index % 3 === 0 ? "bg-highlight" : index % 3 === 1 ? "bg-teal" : index % 3 === 2 ? "bg-pop" : "bg-card"}`}>
                  <p className="text-3xl font-black sm:text-4xl">{stat.label === "LeetCode Problems" ? "130+" : stat.value}</p>
                  <p className="mt-2 text-xs font-bold uppercase">{stat.label}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </Section>

        <Section id="education" eyebrow="02 / Education" title="Learning with purpose">
          <Reveal className="paper-panel grid overflow-hidden md:grid-cols-[180px_1fr]">
            <div className="grid place-items-center border-b-2 border-foreground bg-highlight p-8 md:border-b-0 md:border-r-2">
              <GraduationCap className="size-16" strokeWidth={1.6} />
            </div>
            <div className="p-6 md:p-9">
              <p className="section-kicker">2023 — 2027</p>
              <h3 className="mt-3 text-2xl font-black sm:text-3xl">Quantum University — Roorkee, Uttarakhand</h3>
              <p className="mt-3 font-semibold text-muted-foreground">Bachelor of Technology · Computer Science Engineering · Minor in Data Science</p>
              <div className="mt-6 inline-flex border-2 border-foreground bg-teal px-4 py-2 text-sm font-extrabold">CGPA 8.0 / 10</div>
            </div>
          </Reveal>
        </Section>

        <Section id="experience" eyebrow="03 / Experience" title="Where I've worked">
          <Reveal className="paper-panel relative p-6 md:p-10">
            <div className="sticker absolute -right-2 -top-5 rotate-3 bg-pop px-4 py-2 text-xs font-black uppercase">Internship</div>
            <div className="flex items-start gap-4">
              <span className="grid size-14 shrink-0 place-items-center border-2 border-foreground bg-teal"><Briefcase className="size-7" /></span>
              <div>
                <p className="section-kicker">July 2024 — August 2024</p>
                <h3 className="mt-2 text-2xl font-black">Web Development Intern</h3>
                <p className="font-bold text-pop-foreground">TechyVibe Technology</p>
                <p className="mt-4 max-w-3xl text-sm font-medium leading-relaxed text-muted-foreground">Worked on assigned web development projects and gained hands-on experience with modern frontend development, interface implementation, team collaboration, and practical delivery workflows.</p>
                <div className="mt-6 flex flex-wrap gap-2">{["HTML", "CSS", "Bootstrap", "JavaScript", "Tailwind CSS", "React", "Git"].map((tech) => <span key={tech} className="tech-pill"><TechLogo name={tech} />{tech}</span>)}</div>
              </div>
            </div>
          </Reveal>
        </Section>

        <Section id="skills" eyebrow="04 / Skills" title="Technology, with the proper badges" description="The languages, frameworks and tools I use to build and experiment.">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SKILL_GROUPS.map((group, index) => (
              <Reveal key={group.title} delay={index * 50} className={`paper-panel p-6 ${index === 0 ? "bg-highlight" : index === 1 ? "bg-teal" : index === 2 ? "bg-pop" : "bg-card"}`}>
                <p className="section-kicker">0{index + 1}</p>
                <h3 className="mt-2 text-xl font-black">{group.title}</h3>
                <ul className="mt-5 grid gap-2">
                  {group.items.map((item) => <li key={item} className="flex items-center gap-3 border-t-2 border-foreground py-2 text-sm font-bold"><TechLogo name={item} className="size-5 shrink-0" />{item}</li>)}
                </ul>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section id="projects" eyebrow="05 / Projects" title="Selected work" description="Full-stack products, intelligent systems and practical experiments — designed and built end to end.">
          <div className="grid gap-5">
            {FEATURED_PROJECTS.map((project, index) => {
              const major = index < 2;
              return (
                <Reveal key={project.title} as="article" delay={index * 40} className={`paper-panel group grid overflow-hidden ${major ? "md:grid-cols-[0.7fr_1.3fr]" : "md:grid-cols-[240px_1fr]"}`}>
                  <div className={`relative flex min-h-52 flex-col justify-between border-b-2 border-foreground p-6 md:border-b-0 md:border-r-2 ${index % 3 === 0 ? "bg-pop" : index % 3 === 1 ? "bg-teal" : "bg-highlight"}`}>
                    <span className="text-6xl font-black">0{index + 1}</span>
                    <div>
                      <p className="section-kicker">{major ? "Major project" : "Featured build"}</p>
                      <p className="mt-2 text-xl font-black">{project.blurb}</p>
                    </div>
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-2xl font-black sm:text-3xl">{project.title}</h3>
                      <a href={project.github} target="_blank" rel="noreferrer noopener" aria-label={`Open ${project.title} on GitHub`} title="View repository" className="icon-button shrink-0"><Github className="size-5" /><ArrowUpRight className="size-3" /></a>
                    </div>
                    <p className="mt-4 text-sm font-medium leading-relaxed text-muted-foreground">{project.description}</p>
                    <ul className="mt-5 grid gap-2 text-sm font-semibold sm:grid-cols-2">{project.features.map((feature) => <li key={feature} className="flex gap-2"><span className="text-pop">✦</span>{feature}</li>)}</ul>
                    <div className="mt-6 flex flex-wrap gap-2">{project.stack.map((tech) => <span key={tech} className="tech-pill"><TechLogo name={tech} />{tech}</span>)}</div>
                  </div>
                </Reveal>
              );
            })}
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {MINI_PROJECTS.map((project, index) => (
              <Reveal key={project.title} delay={index * 50} className="paper-panel flex flex-col justify-between p-5">
                <div><span className="section-kicker">Experiment 0{index + 1}</span><h3 className="mt-3 text-lg font-black">{project.title}</h3><p className="mt-3 text-sm font-medium leading-relaxed text-muted-foreground">{project.description}</p></div>
                <a href={project.github} target="_blank" rel="noreferrer noopener" className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold">Repository <ArrowUpRight className="size-4" /></a>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section id="achievements" eyebrow="06 / Achievements" title="Milestones that shaped me">
          <div className="grid gap-4 md:grid-cols-2">
            {ACHIEVEMENTS.map((achievement, index) => (
              <Reveal key={achievement.title} delay={index * 50} className="paper-panel flex gap-4 p-6">
                <span className={`grid size-12 shrink-0 place-items-center border-2 border-foreground ${index % 3 === 0 ? "bg-pop" : index % 3 === 1 ? "bg-highlight" : "bg-teal"}`}><Award className="size-6" /></span>
                <div><h3 className="text-lg font-black">{achievement.title}</h3><p className="mt-1 text-xs font-extrabold uppercase text-pop-foreground">{achievement.meta}</p><p className="mt-3 text-sm font-medium leading-relaxed text-muted-foreground">{achievement.description}</p></div>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section id="coding" eyebrow="07 / Coding" title="Problem solving, one commit at a time">
          <Reveal className="paper-panel grid overflow-hidden md:grid-cols-[1fr_280px]">
            <div className="bg-teal p-8 md:p-12"><p className="text-7xl font-black sm:text-8xl">130+</p><p className="mt-2 text-lg font-bold">LeetCode problems solved</p><p className="mt-5 max-w-xl text-sm font-medium text-muted-foreground">Consistent practice in data structures and algorithms, primarily in Java.</p></div>
            <div className="flex flex-col justify-between border-t-2 border-foreground p-8 md:border-l-2 md:border-t-0"><Code2 className="size-16" strokeWidth={1.5} /><a href={LINKS.leetcode} target="_blank" rel="noreferrer noopener" className="editorial-button mt-8 bg-foreground text-background">View profile <ArrowUpRight className="size-4" /></a></div>
          </Reveal>
        </Section>

        <Section id="contact" eyebrow="08 / Contact" title="Let's build something meaningful" description="Open to software engineering roles, collaborations and interesting problems. I usually reply within a day.">
          <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal className="grid content-start gap-3">
              {[
                { Icon: Mail, label: LINKS.email, href: `mailto:${LINKS.email}` },
                { Icon: Github, label: "GitHub", href: LINKS.github },
                { Icon: Linkedin, label: "LinkedIn", href: LINKS.linkedin },
                { Icon: Twitter, label: "X / Twitter", href: LINKS.x },
                { Icon: Code2, label: "LeetCode", href: LINKS.leetcode },
              ].map(({ Icon, label, href }, index) => <a key={label} href={href} target={href.startsWith("mailto:") ? undefined : "_blank"} rel="noreferrer noopener" className={`paper-panel flex items-center gap-3 p-4 text-sm font-bold ${index === 0 ? "bg-pop" : "bg-card"}`}><Icon className="size-5" /><span className="truncate">{label}</span><ArrowUpRight className="ml-auto size-4" /></a>)}
            </Reveal>
            <Reveal delay={80}><ContactForm /></Reveal>
          </div>
        </Section>
      </main>
      <footer className="border-t-2 border-foreground bg-foreground text-background"><div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-8 text-xs font-bold md:px-8"><p>© {new Date().getFullYear()} Khushali Tiwari</p><p>React · TypeScript · Tailwind CSS</p></div></footer>
    </div>
  );
}
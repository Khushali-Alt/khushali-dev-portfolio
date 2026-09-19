import { ArrowDownRight, ArrowUpRight, Code2, FileDown, Github, Linkedin } from "lucide-react";
import { LINKS } from "@/data/portfolio";
import portraitAsset from "@/assets/khushali.png.asset.json";
import resumeAsset from "@/assets/resume.pdf.asset.json";
import { TechLogo } from "./TechLogo";

const FEATURED_TECH = ["React", "TypeScript", "Node.js", "Python", "MongoDB"];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-4 pb-14 pt-28 md:px-8 md:pb-20 md:pt-32">
      <div aria-hidden className="editorial-dots absolute inset-0 opacity-40" />
      <div className="relative mx-auto grid max-w-7xl gap-4 lg:grid-cols-12">
        <div className="paper-panel relative flex min-h-[440px] flex-col justify-between overflow-hidden p-6 sm:p-9 lg:col-span-8 lg:p-12">
          <div className="sticker absolute -right-5 top-6 rotate-6 bg-highlight px-6 py-3 text-xs font-extrabold uppercase sm:right-7">
            Portfolio · 2026
          </div>
          <div>
            <p className="mb-7 flex items-center gap-2 text-xs font-extrabold uppercase text-muted-foreground">
              <span className="size-2.5 rounded-full bg-accent" /> Open to full time SDE roles
            </p>
            <p className="text-sm font-bold">Hi, my name is Khushali.</p>
            <h1 className="mt-3 max-w-3xl text-5xl font-black uppercase leading-[0.9] sm:text-7xl lg:text-[6.7rem]">
              I build for <span className="text-pop">impact.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base font-medium leading-relaxed text-muted-foreground sm:text-lg">
              Full-stack developer and AI/ML enthusiast turning complex ideas into useful, scalable digital experiences.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#projects" className="editorial-button bg-highlight text-foreground">
              View my work <ArrowDownRight className="size-4" />
            </a>
            <a href={resumeAsset.url} target="_blank" rel="noreferrer noopener" download className="editorial-button bg-card text-foreground">
              Resume <FileDown className="size-4" />
            </a>
          </div>
        </div>

        <div className="paper-panel relative min-h-[440px] overflow-visible bg-pop p-4 lg:col-span-4">
          <div className="h-full min-h-[400px] overflow-hidden border-2 border-foreground bg-secondary">
            <img src={portraitAsset.url} alt="Khushali Tiwari" width={800} height={800} className="h-full w-full object-cover object-center grayscale-[18%]" />
          </div>
          <div className="sticker absolute -bottom-6 -left-3 grid size-28 -rotate-12 place-items-center rounded-full bg-card p-4 text-center text-[10px] font-black uppercase leading-tight sm:size-32">
            Design · Development · AI · India
          </div>
          <div className="sticker absolute -right-2 top-8 rotate-3 bg-accent px-3 py-2 text-xs font-extrabold">B.Tech CSE</div>
        </div>

        <div className="paper-panel bg-teal p-6 lg:col-span-4">
          <p className="section-kicker">Current focus</p>
          <p className="mt-3 text-2xl font-bold leading-tight">Modern web systems with thoughtful interfaces.</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {FEATURED_TECH.map((tech) => (
              <span key={tech} className="tech-pill bg-card"><TechLogo name={tech} />{tech}</span>
            ))}
          </div>
        </div>

        <div className="paper-panel flex flex-col justify-between gap-8 p-6 sm:flex-row sm:items-end lg:col-span-8 lg:p-8">
          <div>
            <p className="section-kicker">Find me online</p>
            <p className="mt-2 max-w-lg text-2xl font-bold">Building in public, learning continuously, and ready to collaborate.</p>
          </div>
          <div className="flex gap-2">
            {[
              { href: LINKS.github, label: "GitHub", Icon: Github },
              { href: LINKS.linkedin, label: "LinkedIn", Icon: Linkedin },
              { href: LINKS.leetcode, label: "LeetCode", Icon: Code2 },
            ].map(({ href, label, Icon }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer noopener" aria-label={label} title={label} className="icon-button">
                <Icon className="size-5" /><ArrowUpRight className="size-3" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
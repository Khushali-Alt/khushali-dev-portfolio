import { Code2 } from "lucide-react";
import type { IconType } from "react-icons";
import {
  SiBootstrap,
  SiCss,
  SiDocker,
  SiExpress,
  SiFlask,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostman,
  SiPython,
  SiReact,
  SiScikitlearn,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const LOGOS: Record<string, IconType> = {
  Bootstrap: SiBootstrap,
  CSS: SiCss,
  Docker: SiDocker,
  "Express.js": SiExpress,
  Flask: SiFlask,
  Git: SiGit,
  GitHub: SiGithub,
  HTML: SiHtml5,
  Java: FaJava,
  JavaScript: SiJavascript,
  MongoDB: SiMongodb,
  SQL: SiMysql,
  "Next.js": SiNextdotjs,
  "Node.js": SiNodedotjs,
  Postman: SiPostman,
  Python: SiPython,
  React: SiReact,
  "Scikit-learn": SiScikitlearn,
  "Tailwind CSS": SiTailwindcss,
  TypeScript: SiTypescript,
};

export function TechLogo({ name, className = "size-5" }: { name: string; className?: string }) {
  const Logo = LOGOS[name];
  return Logo ? <Logo aria-hidden className={className} /> : <Code2 aria-hidden className={className} />;
}
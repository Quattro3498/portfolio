import {
  siC,
  siCplusplus,
  siPython,
  siAtlassian,
  siClaude,
  siCss,
  siCursor,
  siGooglegemini,
  siDotnet,
  siPhp,
  siDocker,
  siFigma,
  siJira,
  siEjs,
  siExpress,
  siGit,
  siGithub,
  siHtml5,
  siJavascript,
  siMysql,
  siNextdotjs,
  siNginx,
  siNodedotjs,
  siPrisma,
  siReact,
  siTailwindcss,
  siTypescript,
} from "simple-icons";
import type { TechKey } from "@/lib/content";
import { csharpPath, DEVICON_VIEWBOX, javaPath, sqlServerPath, visualBasicPath } from "@/lib/devicon-paths";

type IconData = { path: string; title: string; viewBox?: string };

const icons: Partial<Record<TechKey, IconData>> = {
  react: siReact,
  reactnative: siReact, // React Native usa il logo React
  nextjs: siNextdotjs,
  typescript: siTypescript,
  tailwind: siTailwindcss,
  javascript: siJavascript,
  html: siHtml5,
  css: siCss,
  node: siNodedotjs,
  express: siExpress,
  mysql: siMysql,
  prisma: siPrisma,
  docker: siDocker,
  git: siGit,
  github: siGithub,
  ejs: siEjs,
  dotnet: siDotnet,
  php: siPhp,
  claude: siClaude,
  figma: siFigma,
  jira: siJira,
  python: siPython,
  java: { path: javaPath, title: "Java", viewBox: DEVICON_VIEWBOX },
  csharp: { path: csharpPath, title: "C#", viewBox: DEVICON_VIEWBOX },
  vb: { path: visualBasicPath, title: "Visual Basic", viewBox: DEVICON_VIEWBOX },
  sqlserver: { path: sqlServerPath, title: "Microsoft SQL Server", viewBox: DEVICON_VIEWBOX },
  c: siC,
  cpp: siCplusplus,
  gemini: siGooglegemini,
  cursor: siCursor,
  nginx: siNginx,
  atlassian: siAtlassian,
};

// Path ufficiali dal pacchetto simple-icons, colorati con il testo corrente.
// Se una tecnologia non ha icona il chip resta solo testo.
export const hasIcon = (name: TechKey) => Boolean(icons[name]);

export default function TechIcon({ name, size = 18 }: { name: TechKey; size?: number }) {
  const icon = icons[name];
  if (!icon) return null;
  return (
    <svg viewBox={icon.viewBox ?? "0 0 24 24"} width={size} height={size} fill="currentColor" aria-hidden>
      <path d={icon.path} />
    </svg>
  );
}

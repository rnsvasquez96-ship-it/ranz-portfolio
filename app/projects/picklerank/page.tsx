import Hero from "@/components/project/Hero";
import Overview from "@/components/project/Overview";
import Features, {
  type Feature,
} from "@/components/project/Features";
import TechStack from "@/components/project/TechStack";
import Gallery from "@/components/project/Gallery";
import ProjectFooter from "@/components/project/ProjectFooter";

const features: Feature[] = [
  {
    title: "Tournament Management",
    description:
      "Create, organize, and manage pickleball tournaments with an intuitive dashboard.",
    icon: "Trophy",
  },
  {
    title: "Player Profiles",
    description:
      "Manage player information, registrations, and tournament participation.",
    icon: "Users",
  },
  {
    title: "Authentication",
    description:
      "Secure authentication system for organizers and players.",
    icon: "ShieldCheck",
  },
  {
    title: "Live Rankings",
    description:
      "Automatically update player rankings based on tournament results.",
    icon: "BarChart3",
  },
  {
    title: "Match Management",
    description:
      "Schedule matches, record scores, and monitor tournament progress.",
    icon: "Swords",
  },
  {
    title: "Tournament Scheduling",
    description:
      "Organize tournament dates, brackets, and player matchups.",
    icon: "CalendarDays",
  },
];

const stacks = [
  {
    title: "Frontend",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    technologies: [
      "Node.js",
      "NestJS",
      "REST API",
    ],
  },
  {
    title: "Database",
    technologies: [
      "PostgreSQL",
      "Prisma ORM",
    ],
  },
  {
    title: "Tools",
    technologies: [
      "Git",
      "GitHub",
      "VS Code",
      "Figma",
    ],
  },
];

const gallery = [
  {
    title: "Dashboard Overview",
    image: "/projects/picklerank/dashboard-1.png",
  },
  {
    title: "Dashboard Analytics",
    image: "/projects/picklerank/dashboard-2.png",
  },
  {
    title: "Tournament Management",
    image: "/projects/picklerank/tournaments.png",
  },
  {
    title: "Match Management",
    image: "/projects/picklerank/matches.png",
  },
  {
    title: "Player Rankings",
    image: "/projects/picklerank/rankings.png",
  },
  {
    title: "Player Management",
    image: "/projects/picklerank/players.png",
  },
];

const githubUrl =
  "https://github.com/rnsvasquez96-ship-it/picklerank";

const demoUrl =
  "https://picklerank-1gxw6y6r3-letmeseedatnathz.vercel.app";

export default function PickleRankPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Hero
        title="PickleRank"
        category="Full-Stack Tournament Management Platform"
        description="PickleRank is a modern web application designed to simplify pickleball tournament organization. The platform enables organizers to manage tournaments, players, matches, and live rankings through an intuitive dashboard and responsive user interface."
        image="/projects/picklerank/hero.png"
        github={githubUrl}
        demo={demoUrl}
        technologies={[
          "Next.js",
          "TypeScript",
          "NestJS",
          "PostgreSQL",
          "Prisma",
          "Tailwind CSS",
        ]}
      />

      <Overview
        overview="PickleRank was developed as a full-stack tournament management platform focused on delivering a seamless experience for tournament organizers and players. It centralizes tournament creation, player management, match scheduling, match results, and ranking management into one responsive application. The project demonstrates modern full-stack development using a Next.js frontend, NestJS backend, REST APIs, PostgreSQL, and Prisma ORM."
      />

      <Features features={features} />

      <TechStack stacks={stacks} />

      <Gallery images={gallery} />

      <ProjectFooter
        github={githubUrl}
        demo={demoUrl}
      />

    </main>
  );
}
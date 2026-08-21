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
    title: "Ticket Management",
    description:
      "Create, view, update, and manage support tickets through a structured workflow.",
    icon: "Receipt",
  },
  {
    title: "Ticket Details",
    description:
      "Review complete ticket information, status, priority, and related request details in one place.",
    icon: "FileText",
  },
  {
    title: "Automated Replies",
    description:
      "Generate structured automated responses to support requests to improve response speed and consistency.",
    icon: "Bot",
  },
  {
    title: "Gmail Integration",
    description:
      "Connect ticket workflows with Gmail for support communication and message handling.",
    icon: "Mail",
  },
  {
    title: "Automated Testing",
    description:
      "Includes automated test coverage to help validate application behavior and improve reliability.",
    icon: "TestTube2",
  },
  {
    title: "Support Workflow",
    description:
      "Organizes support requests into a clear process for tracking and handling incoming tickets.",
    icon: "Workflow",
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
      "NestJS",
      "Node.js",
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
    title: "Integration & Testing",
    technologies: [
      "Gmail",
      "Automated Testing",
      "Git",
      "GitHub",
    ],
  },
];

const gallery = [
  {
    title: "TicketFlow Overview",
    image: "/projects/ticketflow/hero.png",
  },
  {
    title: "Ticket Details",
    image: "/projects/ticketflow/ticketdetails.png",
  },
  {
    title: "Automated Reply",
    image: "/projects/ticketflow/automatedreply.png",
  },
  {
    title: "Automated Tests",
    image: "/projects/ticketflow/automatedtests.png",
  },
  {
    title: "Gmail Integration",
    image: "/projects/ticketflow/gmail.png",
  },
];

export default function TicketFlowPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero
        title="TicketFlow"
        category="Full-Stack Support Ticket Management System"
        description="TicketFlow is a full-stack support ticket management application designed to organize incoming requests, manage ticket details, automate responses, integrate support communication, and improve workflow reliability through automated testing."
        image="/projects/ticketflow/hero.png"
        github="https://github.com/rnsvasquez96-ship-it/ticketflow"
        demo="#"
        technologies={[
          "Next.js",
          "TypeScript",
          "NestJS",
          "PostgreSQL",
          "Prisma",
        ]}
      />

      <Overview
        overview="TicketFlow was developed as a full-stack support ticket management system focused on simplifying the handling of incoming requests. The application provides structured ticket management, detailed ticket views, automated replies, Gmail integration, and automated testing. The project demonstrates frontend and backend development, REST API design, database integration, external service integration, and software testing practices."
      />

      <Features features={features} />

      <TechStack stacks={stacks} />

      <Gallery images={gallery} />

      <ProjectFooter
        github="https://github.com/rnsvasquez96-ship-it/ticketflow"
        demo="#"
      />
    </main>
  );
}
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
    title: "Member Management",
    description:
      "Register members, manage profiles, assign membership plans, renew memberships, and update member status.",
    icon: "Users",
  },
  {
    title: "Role-Based Access",
    description:
      "Separate Admin and Front Desk permissions using secure backend-enforced role-based access control.",
    icon: "ShieldCheck",
  },
  {
    title: "Check-In Tracking",
    description:
      "Track daily attendance, search members, prevent duplicate same-day check-ins, and review attendance history.",
    icon: "CalendarDays",
  },
  {
    title: "Payment Management",
    description:
      "Record Cash, GCash, Maya, and Card payments with backend-generated references and transaction totals.",
    icon: "Receipt",
  },
  {
    title: "Trainer Management",
    description:
      "Manage trainer profiles, specialties, availability, status, and important trainer information.",
    icon: "Users",
  },
  {
    title: "Reports & Dashboard",
    description:
      "Monitor active members, attendance, revenue, expiring memberships, recent transactions, trainers, and gym analytics.",
    icon: "BarChart3",
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
      "Framer Motion",
    ],
  },
  {
    title: "Backend",
    technologies: [
      "NestJS",
      "REST API",
      "JWT Authentication",
      "DTO Validation",
      "Role-Based Guards",
    ],
  },
  {
    title: "Database",
    technologies: [
      "PostgreSQL",
      "Prisma ORM",
      "Database Migrations",
      "Seed Data",
    ],
  },
  {
    title: "Deployment & Security",
    technologies: [
      "Vercel",
      "Railway",
      "bcrypt",
      "HTTP-only Cookies",
      "CORS",
    ],
  },
];

const gallery = [
  {
    title: "Management Dashboard",
    image: "/projects/crown-gym/dashboard.png",
  },
  {
    title: "Member Management",
    image: "/projects/crown-gym/members.png",
  },
  {
    title: "Member Details",
    image: "/projects/crown-gym/member-details.png",
  },
  {
    title: "Check-In Tracking",
    image: "/projects/crown-gym/checkins.png",
  },
  {
    title: "Payment Management",
    image: "/projects/crown-gym/payments.png",
  },
];

const githubUrl =
  "https://github.com/rnsvasquez96-ship-it/crown-gym-management-system";

const demoUrl =
  "https://crown-gym-management-system.vercel.app";

export default function CrownGymPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero
        title="Crown Gym"
        category="Full-Stack Gym Management System"
        description="Crown is a full-stack gym management platform for managing memberships, attendance, trainers, payments, staff access, and business reporting through one centralized system."
        image="/projects/crown-gym/dashboard.png"
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
        overview="Crown was developed as a production-style gym management platform designed to centralize day-to-day gym operations. The system manages the complete member lifecycle from registration and membership assignment to renewals, check-ins, and payments. Admin and Front Desk roles provide different levels of access through backend-enforced role-based permissions. The project demonstrates full-stack development using a Next.js frontend, NestJS REST API, PostgreSQL, Prisma ORM, JWT authentication, and a deployed Vercel and Railway architecture."
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
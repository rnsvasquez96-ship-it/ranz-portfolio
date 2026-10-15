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
    title: "Map-First Room Management",
    description:
      "Manage dormitory floors, rooms, beds, and occupancy through a visual floor layout designed for daily operations.",
    icon: "Map",
  },
  {
    title: "SOLO & Bedspace Rentals",
    description:
      "Support both full-room SOLO rentals and individual bedspace assignments within shared rooms.",
    icon: "BedDouble",
  },
  {
    title: "Tenant & Lease Management",
    description:
      "Manage tenant profiles, room or bed assignments, lease records, status changes, and move-in or move-out workflows.",
    icon: "Users",
  },
  {
    title: "Billing & Payments",
    description:
      "Track bills, bill items, payment submissions, verification, rejection, and payment allocation across tenant accounts.",
    icon: "Receipt",
  },
  {
    title: "Maintenance Management",
    description:
      "Record, track, and manage maintenance requests as part of day-to-day dormitory operations.",
    icon: "Wrench",
  },
  {
    title: "Role-Based Access",
    description:
      "Provide ADMIN, STAFF, and TENANT permissions with secure authentication and backend-enforced access control.",
    icon: "ShieldCheck",
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
      "shadcn/Radix UI",
      "Recharts",
    ],
  },
  {
    title: "Backend",
    technologies: [
      "NestJS",
      "REST API",
      "JWT Authentication",
      "Role-Based Access Control",
    ],
  },
  {
    title: "Database",
    technologies: [
      "PostgreSQL",
      "Neon",
      "Prisma ORM",
    ],
  },
  {
    title: "Testing & DevOps",
    technologies: [
      "Jest",
      "Playwright",
      "Docker",
      "GitHub Actions",
      "Vercel",
      "Render",
    ],
  },
];

const gallery = [
  {
    title: "Admin Dashboard",
    image: "/projects/silong/silong-admin-dashboard.png",
  },
  {
    title: "Dormitory Floor Map",
    image: "/projects/silong/silong-floor-map.png",
  },
  {
    title: "Room & Bedspace Management",
    image: "/projects/silong/silong-rooms.png",
  },
  {
    title: "Admin Billing",
    image: "/projects/silong/silong-admin-billing.png",
  },
  {
    title: "Tenant Dashboard",
    image: "/projects/silong/silong-tenant-dashboard.png",
  },
  {
    title: "Tenant Billing",
    image: "/projects/silong/silong-tenant-billing.png",
  },
  {
    title: "Maintenance Requests",
    image: "/projects/silong/silong-maintenance.png",
  },
  {
    title: "Reports & Analytics",
    image: "/projects/silong/silong-reports.png",
  },
];

const githubUrl =
  "https://github.com/rnsvasquez96-ship-it/silong";

const demoUrl =
  "https://silong-nu.vercel.app";

export default function SilongPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero
        title="Silong"
        category="Full-Stack Dormitory & Bedspace Management System"
        description="Silong is a full-stack dormitory and bedspace management platform built for Philippine boarding houses and dormitories, combining room and bed occupancy, tenant management, leases, billing, payments, maintenance, and role-based access in one centralized system."
        image="/projects/silong/silong-admin-dashboard.png"
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
        overview="Silong was developed as a production-style dormitory and bedspace management system for Philippine boarding houses and rental properties. It supports both SOLO rooms and BEDSPACE rooms, allowing staff to manage full-room rentals as well as individual bed assignments. The platform centralizes tenant records, lease lifecycle management, billing, payment verification, maintenance requests, announcements, and occupancy through a map-first interface. ADMIN, STAFF, and TENANT roles are protected through JWT authentication and role-based access control, while the application is deployed using Vercel, Render, Neon PostgreSQL, Docker, and GitHub Actions."
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
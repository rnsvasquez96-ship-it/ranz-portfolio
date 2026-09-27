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
    title: "Interactive 3D Experience",
    description:
      "Explore performance vehicles through an interactive 3D presentation built for an immersive browsing experience.",
    icon: "Box",
  },
  {
    title: "Premium Vehicle Fleet",
    description:
      "Browse a curated selection of premium performance vehicles with dedicated vehicle details and presentation.",
    icon: "Car",
  },
  {
    title: "Cinematic Motion Design",
    description:
      "Uses scroll-driven animation and motion effects to create a premium, cinematic presentation throughout the experience.",
    icon: "Sparkles",
  },
  {
    title: "Reservation Flow",
    description:
      "Complete a simulated reservation process including schedule selection, driver information, pricing review, and confirmation.",
    icon: "CalendarDays",
  },
  {
    title: "Responsive Experience",
    description:
      "Designed to provide a consistent and polished experience across desktop, tablet, and mobile devices.",
    icon: "MonitorSmartphone",
  },
  {
    title: "Vehicle Details",
    description:
      "Dedicated vehicle pages present specifications, imagery, pricing, and rental information in a focused layout.",
    icon: "FileText",
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
    title: "3D Experience",
    technologies: [
      "Three.js",
      "React Three Fiber",
      "Drei",
    ],
  },
  {
    title: "Animation",
    technologies: [
      "GSAP",
      "Lenis",
      "Motion",
    ],
  },
  {
    title: "UI & Tools",
    technologies: [
      "Base UI",
      "Lucide React",
      "Git",
      "GitHub",
      "Vercel",
    ],
  },
];

const gallery = [
  {
    title: "Cinematic Landing Experience",
    image: "/projects/veloce/veloce-hero.png",
  },
  {
    title: "Interactive 3D Car Showcase",
    image: "/projects/veloce/veloce-3d-machine.png",
  },
  {
    title: "Premium Vehicle Fleet",
    image: "/projects/veloce/veloce-fleet.png",
  },
  {
    title: "Reservation Review",
    image: "/projects/veloce/veloce-reservation-review.png",
  },
];

const githubUrl =
  "https://github.com/rnsvasquez96-ship-it/veloce-premium-car-rental";

const demoUrl = "";

export default function VelocePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero
        title="Veloce"
        category="Interactive 3D Car Rental Experience"
        description="Veloce is a cinematic premium car rental experience combining interactive 3D vehicles, motion-driven storytelling, responsive fleet browsing, and a complete simulated reservation flow."
        image="/projects/veloce/veloce-hero.png"
        github={githubUrl}
        demo={demoUrl}
        technologies={[
          "Next.js",
          "TypeScript",
          "Three.js",
          "React Three Fiber",
          "GSAP",
          "Tailwind CSS",
        ]}
      />

      <Overview
        overview="Veloce was developed as a premium frontend experience focused on visual storytelling, interactive 3D presentation, and modern reservation UX. The project combines a cinematic landing page, performance vehicle browsing, interactive 3D showcases, responsive design, and a complete simulated booking flow covering scheduling, driver information, pricing review, and confirmation."
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
import Hero from "@/components/project/Hero";
import Overview from "@/components/project/Overview";
import Features, {
  type Feature,
} from "@/components/project/Features";
import TechStack from "@/components/project/TechStack";
import ProjectFooter from "@/components/project/ProjectFooter";

const features: Feature[] = [
  {
    title: "Responsive Design",
    description:
      "Optimized layouts and components for desktop, tablet, and mobile devices.",
    icon: "Users",
  },
  {
    title: "Interactive Navigation",
    description:
      "Smooth section navigation with a responsive mobile menu and clear user flow.",
    icon: "CalendarDays",
  },
  {
    title: "Modern UI",
    description:
      "A polished coffee shop interface with strong typography, spacing, and visual hierarchy.",
    icon: "BarChart3",
  },
  {
    title: "Smooth Interactions",
    description:
      "Subtle hover effects, scroll behavior, and animations that improve the browsing experience.",
    icon: "Swords",
  },
  {
    title: "Menu Showcase",
    description:
      "Dedicated sections for featured drinks and menu items with clear presentation.",
    icon: "Receipt",
  },
  {
    title: "Contact Experience",
    description:
      "A clear contact section that helps visitors connect with the business easily.",
    icon: "ShieldCheck",
  },
];

const stacks = [
  {
    title: "Frontend",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
    ],
  },
  {
    title: "Design",
    technologies: [
      "Responsive Design",
      "CSS Grid",
      "Flexbox",
      "CSS Animations",
    ],
  },
  {
    title: "Development",
    technologies: [
      "VS Code",
      "Chrome DevTools",
    ],
  },
  {
    title: "Tools & Deployment",
    technologies: [
      "Git",
      "GitHub",
      "GitHub Pages",
    ],
  },
];

const githubUrl =
  "https://github.com/rnsvasquez96-ship-it/brew-haven";

const demoUrl =
  "https://rnsvasquez96-ship-it.github.io/brew-haven/";

export default function BrewHavenPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Hero
        title="Brew Haven"
        category="Frontend Coffee Shop Website"
        description="Brew Haven is a responsive coffee shop website designed to create a warm and modern digital experience. The project focuses on clean frontend development, responsive layouts, smooth interactions, and a polished visual presentation across different screen sizes."
        image="/projects/brew-haven.jpg"
        github={githubUrl}
        demo={demoUrl}
        technologies={[
          "HTML5",
          "CSS3",
          "JavaScript",
          "Responsive Design",
        ]}
      />

      <Overview
        overview="Brew Haven was built as a modern frontend website for a coffee shop, with a focus on responsive design, visual consistency, and user-friendly navigation. The site includes a hero section, featured drinks, an about section, menu content, testimonials, a gallery, and contact information. The project demonstrates practical frontend development skills using semantic HTML, modern CSS, JavaScript interactions, and responsive web design."
      />

      <Features features={features} />

      <TechStack stacks={stacks} />

      <ProjectFooter
        github={githubUrl}
        demo={demoUrl}
      />

    </main>
  );
}
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
    title: "Group Expenses",
    description:
      "Create groups and manage shared expenses between friends, roommates, trips, and other activities.",
    icon: "Users",
  },
  {
    title: "Expense Tracking",
    description:
      "Add and organize expenses while keeping track of who paid and how costs are divided.",
    icon: "Receipt",
  },
  {
    title: "Balances & Settlements",
    description:
      "Track outstanding balances and simplify settlements between group members.",
    icon: "WalletCards",
  },
  {
    title: "Budget Management",
    description:
      "Create budgets and monitor spending to help users stay within their planned expenses.",
    icon: "PiggyBank",
  },
  {
    title: "Expense Analytics",
    description:
      "Visualize spending patterns and expense summaries through an easy-to-understand analytics dashboard.",
    icon: "ChartNoAxesCombined",
  },
  {
    title: "Recent Activity",
    description:
      "Review recent expenses, settlements, and other important account activity in one place.",
    icon: "History",
  },
];

const stacks = [
  {
    title: "Mobile",
    technologies: [
      "Flutter",
      "Dart",
      "Material Design",
    ],
  },
  {
    title: "Backend & Cloud",
    technologies: [
      "Firebase",
      "Firebase Authentication",
      "Cloud Firestore",
    ],
  },
  {
    title: "Development",
    technologies: [
      "Android Studio",
      "VS Code",
      "Android SDK",
    ],
  },
  {
    title: "Tools",
    technologies: [
      "Git",
      "GitHub",
      "Figma",
    ],
  },
];

const gallery = [
  {
    title: "Sign In",
    image: "/projects/splitly/signin.png",
  },
  {
    title: "Home Dashboard",
    image: "/projects/splitly/home.png",
  },
  {
    title: "Groups",
    image: "/projects/splitly/groups.png",
  },
  {
    title: "Group Details",
    image: "/projects/splitly/group-details.png",
  },
  {
    title: "Add Expense",
    image: "/projects/splitly/add-expense.png",
  },
  {
    title: "Balances & Settlements",
    image: "/projects/splitly/balancesandsettlements.png",
  },
  {
    title: "Budget Management",
    image: "/projects/splitly/budgets.png",
  },
  {
    title: "Expense Analytics",
    image: "/projects/splitly/analytics.png",
  },
  {
    title: "Recent Activity",
    image: "/projects/splitly/recents.png",
  },
  {
    title: "Settings",
    image: "/projects/splitly/settings.png",
  },
];

export default function SplitlyPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Hero
       title="Splitly"
       category="Mobile Expense Management Application"
          description="Splitly is a Flutter-based mobile application designed to simplify shared expense management. Users can organize groups, record shared expenses, track balances, manage budgets, analyze spending, and settle expenses through a clean and intuitive mobile experience."
         image="/projects/splitly.png"
         github="https://github.com/rnsvasquez96-ship-it/splitly"
         demo="#"
         technologies={[
          "Flutter",
           "Dart",
          "Firebase",
          "Firestore",
         "Android",
         "Material Design",]}
        />

      <Overview
        overview="Splitly was developed as a mobile expense management application that makes splitting and tracking shared expenses easier. The application brings group management, expense tracking, balances, settlements, budgets, analytics, and recent activity into one organized experience. The project demonstrates mobile application development with Flutter, cloud-based data management, authentication, responsive interface design, and practical financial tracking features."
      />

      <Features features={features} />

      <TechStack stacks={stacks} />

      <Gallery
        images={gallery}
        mobile
      />

      <ProjectFooter
         github="https://github.com/rnsvasquez96-ship-it/splitly"
          demo="#"
      />

    </main>
  );
}
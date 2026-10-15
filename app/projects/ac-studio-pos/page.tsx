import Hero from "@/components/project/Hero";
import Overview from "@/components/project/Overview";
import Features, {
  type Feature,
} from "@/components/project/Features";
import TechStack from "@/components/project/TechStack";
import Gallery from "@/components/project/Gallery";

const features: Feature[] = [
  {
    title: "Flexible Package Builder",
    description:
      "Create photo-session orders using Solo, 2 Pax, 3–4 Pax, and 5–8 Pax packages, including multiple packages in a single transaction.",
    icon: "Receipt",
  },
  {
    title: "Automatic Pricing & Discounts",
    description:
      "Automatically calculate regular pricing, qualified discounts, add-ons, raw photos, enhanced edits, rush processing, and additional-time rates.",
    icon: "Calculator",
  },
  {
    title: "Walk-In & Booking Workflow",
    description:
      "Handle both walk-in customers and scheduled bookings with customer details, booking date and time, GCash downpayments, balances, and payment methods.",
    icon: "CalendarDays",
  },
  {
    title: "Transaction Management",
    description:
      "Track orders through Booked, Waiting, In Studio, Editing, Ready, and Claimed statuses while maintaining payment and balance records.",
    icon: "Workflow",
  },
  {
    title: "Daily Sales Reconciliation",
    description:
      "Monitor cash and GCash collections, beginning balance, expected drawer cash, actual drawer count, and daily closing confirmation.",
    icon: "BarChart3",
  },
  {
    title: "Attendant DTR",
    description:
      "Record employee Time In and Time Out activity and review attendance through a dedicated DTR calendar.",
    icon: "Clock3",
  },
];

const stacks = [
  {
    title: "Frontend",
    technologies: [
      "Next.js 16",
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend & Database",
    technologies: [
      "Supabase",
      "PostgreSQL",
      "Supabase Authentication",
    ],
  },
  {
    title: "Business Features",
    technologies: [
      "POS Workflow",
      "Booking Management",
      "Payment Tracking",
      "Sales Reconciliation",
      "Printable Reports",
      "DTR",
    ],
  },
  {
    title: "Deployment",
    technologies: [
      "Vercel",
      "Git",
      "GitHub",
    ],
  },
];

const gallery = [
  {
    title: "Photo Session Checkout",
    image: "/projects/ac-studio-pos/acstudio-pos.png",
  },
  {
    title: "Walk-in Payment Flow",
    image: "/projects/ac-studio-pos/acstudio-walkin.png",
  },
  {
    title: "Booking & Downpayment Management",
    image: "/projects/ac-studio-pos/acstudio-booking.png",
  },
  {
    title: "Transaction History",
    image: "/projects/ac-studio-pos/acstudio-transactions.png",
  },
  {
    title: "Daily Sales & Cash Drawer Reconciliation",
    image: "/projects/ac-studio-pos/acstudio-daily-sales.png",
  },
  {
    title: "Attendant DTR",
    image: "/projects/ac-studio-pos/acstudio-dtr.png",
  },
];

export default function ACStudioPOSPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero
        title="AC Studio POS"
        category="Private Client Project · Full-Stack Developer & UI/UX Designer"
        description="A secure, iPad-friendly photo studio POS and operations system built to replace handwritten order, booking, and payment records with a centralized digital workflow."
        image="/projects/acstudio.png"
        github=""
        demo=""
        technologies={[
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Supabase",
          "PostgreSQL",
        ]}
      />

      <Overview
        overview="AC Studio POS was developed as a private real-world system for managing day-to-day photo studio operations. The studio previously relied on handwritten records for sessions, prices, add-ons, payments, and bookings, which made discounts, balances, and end-of-day reconciliation more difficult to manage. The system digitizes the complete workflow by supporting mixed photo packages, automatic pricing and qualified discounts, add-ons, walk-ins, scheduled bookings, GCash downpayments, remaining balances, transaction status tracking, daily sales reconciliation, printable reports, and employee DTR."
      />

      <Features features={features} />

      <TechStack stacks={stacks} />

      <Gallery images={gallery} />

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 md:p-10">
            <p className="text-sm uppercase tracking-[0.3em] text-indigo-400">
              PRIVATE CLIENT SYSTEM
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Live Private Deployment
            </h2>

            <p className="mt-5 max-w-3xl leading-7 text-gray-400">
              AC Studio POS is actively used for studio operations. Public
              access to the production application and source repository is
              intentionally restricted because the system handles customer,
              booking, payment, and employee information.
            </p>

            <p className="mt-4 max-w-3xl leading-7 text-gray-400">
              Screenshots shown in this portfolio use demonstration or masked
              data to protect customer, booking, payment, and employee
              information.
            </p>

            <div className="mt-8 inline-flex cursor-not-allowed items-center rounded-xl border border-white/10 bg-white/[0.05] px-5 py-3 text-sm font-medium text-gray-400">
              Private System
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
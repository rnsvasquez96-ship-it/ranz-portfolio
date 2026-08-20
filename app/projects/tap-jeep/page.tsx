"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  GraduationCap,
  Cpu,
  Smartphone,
  Database,
  CheckCircle2,
} from "lucide-react";

import Overview from "@/components/project/Overview";
import Features, {
  type Feature,
} from "@/components/project/Features";
import TechStack from "@/components/project/TechStack";
import TapJeepGallery from "@/components/project/TapJeepGallery";

const features: Feature[] = [
  {
    title: "RFID Tap-In / Tap-Out",
    description:
      "Automatically detects passenger entry and exit, records trips, and processes fare deductions using registered RFID cards.",
    icon: "ShieldCheck",
  },
  {
    title: "GPS-Based Fare Calculation",
    description:
      "Uses phone-based GPS data to calculate fares based on the passenger's tap-in and tap-out locations.",
    icon: "BarChart3",
  },
  {
    title: "Cash & Digital Reloading",
    description:
      "Allows passengers to reload RFID balances through the kiosk using a bill acceptor or simulated digital payment.",
    icon: "Receipt",
  },
  {
    title: "Passenger Application",
    description:
      "Provides passengers with account information, wallet features, transaction history, and RFID-related services.",
    icon: "Users",
  },
  {
    title: "Driver Application",
    description:
      "Supports trip-related operations and GPS-based fare processing through a dedicated driver mobile interface.",
    icon: "CalendarDays",
  },
  {
    title: "LED Seat Indicators",
    description:
      "Uses green and red LED indicators to communicate seat availability and jeepney capacity status.",
    icon: "Swords",
  },
];

const stacks = [
  {
    title: "Mobile Applications",
    technologies: [
      "FlutterFlow",
      "Dart",
      "Android",
      "Passenger App",
      "Driver App",
      "Kiosk App",
    ],
  },
  {
    title: "Backend & Data",
    technologies: [
      "Firebase",
      "Authentication",
      "Real-Time Data",
      "Cloud Data Storage",
    ],
  },
  {
    title: "Hardware",
    technologies: [
      "Arduino Mega",
      "RFID Reader",
      "RFID Writer",
      "LCD Display",
      "LED Indicators",
      "Buzzer",
      "Relay",
      "Bill Acceptor",
    ],
  },
  {
    title: "System Technologies",
    technologies: [
      "GPS",
      "Bluetooth",
      "Embedded Systems",
      "Automated Fare Collection",
      "Hardware Integration",
      "System Testing",
    ],
  },
];

const tapJeepPhotos = [
  "/projects/tap-jeep/1.jpg",
  "/projects/tap-jeep/2.jpg",
  "/projects/tap-jeep/3.jpg",
  "/projects/tap-jeep/4.jpg",
  "/projects/tap-jeep/5.jpg",
  "/projects/tap-jeep/6.jpg",
  "/projects/tap-jeep/7.jpg",
  "/projects/tap-jeep/8.jpg",
  "/projects/tap-jeep/9.jpg",
  "/projects/tap-jeep/10.jpg",
  "/projects/tap-jeep/11.jpg",
];

const results = [
  {
    icon: CheckCircle2,
    title: "Functional Prototype",
    description:
      "RFID, GPS, reloading, mobile applications, database services, and embedded hardware were successfully integrated into one system.",
  },
  {
    icon: Cpu,
    title: "Automated Fare Collection",
    description:
      "The RFID module successfully detected passenger entry and exit and automatically processed fare deductions.",
  },
  {
    icon: Smartphone,
    title: "GPS Fare Computation",
    description:
      "The system used GPS information to calculate fares based on the distance between boarding and drop-off locations.",
  },
  {
    icon: Database,
    title: "Centralized Data Management",
    description:
      "Trip records, passenger information, fare transactions, and account data were managed through the system backend.",
  },
];

export default function TapJeepPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section
        className="
          relative
          overflow-hidden
          px-6
          pb-24
          pt-32
          md:pb-32
        "
      >
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]
            bg-[size:60px_60px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            right-[-100px]
            top-20
            h-[420px]
            w-[420px]
            rounded-full
            bg-indigo-500/15
            blur-3xl
          "
        />

        <div className="relative z-10 mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
          >
            <Link
              href="/#projects"
              className="
                inline-flex
                items-center
                gap-2
                text-sm
                text-gray-400
                transition
                hover:text-white
              "
            >
              <ArrowLeft size={18} />
              Back to Portfolio
            </Link>
          </motion.div>

          <div
            className="
              mt-12
              grid
              items-center
              gap-14
              lg:grid-cols-2
              lg:gap-20
            "
          >
            <div>
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-indigo-500/20
                  bg-indigo-500/10
                  px-4
                  py-2
                  text-sm
                  text-indigo-400
                "
              >
                <GraduationCap size={17} />
                Computer Engineering Capstone
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.08 }}
                className="
                  mt-6
                  text-5xl
                  font-bold
                  tracking-tight
                  md:text-7xl
                "
              >
                TAP-JEEP
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.15 }}
                className="
                  mt-3
                  text-xl
                  font-medium
                  text-gray-300
                "
              >
                Trip & Automated Payment System for Jeepney Efficiency
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.22 }}
                className="
                  mt-6
                  max-w-xl
                  text-lg
                  leading-relaxed
                  text-gray-400
                "
              >
                A smart transportation prototype designed to modernize
                traditional jeepney fare collection through RFID-based
                tap-in/tap-out payments, GPS-based fare calculation,
                cash and digital reloading, mobile applications, and
                centralized data management.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.28 }}
                className="mt-8 flex flex-wrap gap-2"
              >
                {[
                  "FlutterFlow",
                  "Dart",
                  "Firebase",
                  "Arduino Mega",
                  "RFID",
                  "GPS",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="
                      rounded-full
                      border
                      border-white/10
                      bg-white/[0.05]
                      px-4
                      py-2
                      text-sm
                      text-gray-300
                    "
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="
                  mt-10
                  border-l-2
                  border-indigo-400
                  pl-5
                "
              >
                <p className="font-medium text-white">
                  De La Salle Lipa
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  Bachelor of Science in Computer Engineering
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  CpE Design Project 2 • 2025
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{
                opacity: 0,
                x: 30,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.7,
                delay: 0.15,
              }}
              className="
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/[0.04]
                p-2
              "
            >
              <Image
                src="/projects/tap-jeep/hero.jpg"
                alt="TAP-JEEP project prototype"
                width={1400}
                height={900}
                priority
                className="
                  h-auto
                  w-full
                  rounded-[1.25rem]
                  object-cover
                "
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <Overview
        overview="TAP-JEEP was developed to address inefficiencies in traditional cash-based jeepney fare collection, including payment delays, fare inaccuracies, disputes, and manual cash handling. The system combines RFID automated fare collection, GPS-based fare computation, cash and simulated digital reloading, mobile applications, and cloud-based data management into one integrated prototype."
      />

      {/* PROBLEM & SOLUTION */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="
              text-sm
              uppercase
              tracking-[0.3em]
              text-indigo-400
            "
          >
            PROBLEM & SOLUTION
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="
              mt-5
              text-4xl
              font-bold
              md:text-5xl
            "
          >
            Modernizing Traditional Fare Collection
          </motion.h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/[0.04]
                p-8
              "
            >
              <p className="text-sm font-medium text-red-400">
                THE PROBLEM
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                Manual Fare Collection
              </h3>

              <p className="mt-4 leading-relaxed text-gray-400">
                Traditional cash-based fare collection can cause delays,
                fare inaccuracies, payment disputes, cash-handling concerns,
                and inefficient boarding, particularly during crowded trips.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="
                rounded-3xl
                border
                border-indigo-500/20
                bg-indigo-500/[0.05]
                p-8
              "
            >
              <p className="text-sm font-medium text-indigo-400">
                THE SOLUTION
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                TAP-JEEP
              </h3>

              <p className="mt-4 leading-relaxed text-gray-400">
                TAP-JEEP automates fare payment using registered RFID
                cards, calculates fares using GPS information, supports
                RFID balance reloading, and connects mobile applications
                and transaction data through Firebase.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <Features features={features} />

      {/* TECH STACK */}
      <TechStack stacks={stacks} />

      {/* SYSTEM COMPONENTS */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="
              text-sm
              uppercase
              tracking-[0.3em]
              text-indigo-400
            "
          >
            SYSTEM
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="
              mt-5
              text-4xl
              font-bold
              md:text-5xl
            "
          >
            Integrated Hardware & Software
          </motion.h2>

          <div
            className="
              mt-12
              grid
              gap-6
              md:grid-cols-2
              lg:grid-cols-3
            "
          >
            {[
              {
                number: "01",
                title: "Tap Unit",
                text: "Arduino Mega, RFID reader, LCD displays, LED indicators, buzzer, relay, and Bluetooth communication.",
              },
              {
                number: "02",
                title: "Reloading Kiosk",
                text: "RFID writer, bill acceptor, Arduino Mega, and tablet interface for balance reloading and transactions.",
              },
              {
                number: "03",
                title: "Passenger App",
                text: "Passenger-facing application for wallet information, digital reloading, tap history, and account services.",
              },
              {
                number: "04",
                title: "Driver App",
                text: "Dedicated application supporting driver operations and GPS-based fare calculation.",
              },
              {
                number: "05",
                title: "Kiosk App",
                text: "Tablet-based user interface for kiosk transactions, RFID interaction, balance information, and reloading.",
              },
              {
                number: "06",
                title: "Firebase Backend",
                text: "Handles real-time data updates, authentication, account information, fare transactions, and trip records.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -4 }}
                className="
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.04]
                  p-7
                  transition
                  duration-300
                  hover:border-indigo-500/30
                "
              >
                <span className="text-sm font-medium text-indigo-400">
                  {item.number}
                </span>

                <h3 className="mt-3 text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-relaxed text-gray-400">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TAP-JEEP PHOTO CAROUSEL */}
      <TapJeepGallery images={tapJeepPhotos} />

      {/* RESULTS */}
      <section
        className="
          relative
          overflow-hidden
          px-6
          py-24
          md:py-32
        "
      >
        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[320px]
            w-[520px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-indigo-500/10
            blur-3xl
          "
        />

        <div className="relative z-10 mx-auto max-w-7xl">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="
              text-sm
              uppercase
              tracking-[0.3em]
              text-indigo-400
            "
          >
            PROJECT RESULTS
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="
              mt-5
              text-4xl
              font-bold
              md:text-5xl
            "
          >
            From Concept to Functional Prototype
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="
              mt-6
              max-w-3xl
              leading-relaxed
              text-gray-400
            "
          >
            Component testing and system integration confirmed that the
            major TAP-JEEP modules could operate together as a functional
            automated fare collection prototype.
          </motion.p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {results.map((result, index) => {
              const Icon = result.icon;

              return (
                <motion.div
                  key={result.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/[0.04]
                    p-7
                  "
                >
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-2xl
                      bg-indigo-500/10
                      text-indigo-400
                    "
                  >
                    <Icon size={24} />
                  </div>

                  <h3 className="mt-5 text-2xl font-bold">
                    {result.title}
                  </h3>

                  <p className="mt-3 leading-relaxed text-gray-400">
                    {result.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CAPSTONE FOOTER */}
      <section className="px-6 pb-32 pt-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            mx-auto
            max-w-5xl
            rounded-3xl
            border
            border-white/10
            bg-white/[0.04]
            p-8
            text-center
            md:p-12
          "
        >
          <div
            className="
              mx-auto
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              bg-indigo-500/10
              text-indigo-400
            "
          >
            <GraduationCap size={28} />
          </div>

          <h2 className="mt-6 text-3xl font-bold md:text-4xl">
            Computer Engineering Capstone
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              leading-relaxed
              text-gray-400
            "
          >
            TAP-JEEP combines mobile development, cloud services,
            automated fare collection, embedded systems, RFID technology,
            GPS, hardware integration, and system testing into one
            transportation prototype.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {[
              "De La Salle Lipa",
              "BS Computer Engineering",
              "CpE Design Project 2",
              "2025",
            ].map((item) => (
              <span
                key={item}
                className="
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.05]
                  px-4
                  py-2
                  text-sm
                  text-gray-300
                "
              >
                {item}
              </span>
            ))}
          </div>

          <Link
            href="/#projects"
            className="
              mt-10
              inline-flex
              items-center
              gap-2
              text-indigo-400
              transition
              hover:text-indigo-300
            "
          >
            <ArrowLeft size={18} />
            Back to Projects
          </Link>
        </motion.div>
      </section>

    </main>
  );
}
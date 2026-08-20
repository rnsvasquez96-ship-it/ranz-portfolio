"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useRef } from "react";

const projects = [
  {
    title: "PickleRank",
    category: "🏆 Full-Stack Platform",
    image: "/projects/picklerank.png",
    description:
      "A modern tournament management platform for organizing players, tournaments, matches, and live rankings.",
    stack: [
      "Next.js",
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "Prisma",
    ],
    href: "/projects/picklerank",
  },

  {
    title: "Splitly",
    category: "📱 Mobile App Development",
    image: "/projects/splitly.png",
    description:
      "A Flutter-based expense management app for groups, shared expenses, balances, settlements, budgets, and analytics.",
    stack: [
      "Flutter",
      "Dart",
      "Firebase",
      "Firestore",
    ],
    href: "/projects/splitly",
  },

  {
    title: "Brew Haven",
    category: "☕ Frontend Development",
    image: "/projects/brewhaven.png",
    description:
      "A responsive coffee shop website featuring modern UI, smooth interactions, and mobile-friendly design.",
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive Design",
    ],
    href: "/projects/brew-haven",
  },

  {
    title: "TAP-JEEP",
    category: "🚍 Computer Engineering Capstone",
    image: "/projects/tapjeep.jpg",
    description:
      "A smart transportation and automated fare collection system integrating RFID, GPS, mobile applications, Firebase, and embedded hardware.",
    stack: [
      "FlutterFlow",
      "Dart",
      "Firebase",
      "Arduino Mega",
      "RFID",
      "GPS",
    ],
    href: "/projects/tap-jeep",
  },
];

export default function Projects() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({
      left: -480,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({
      left: 480,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="projects"
      className="overflow-hidden px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Label */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="
            text-sm
            uppercase
            tracking-[0.3em]
            text-indigo-400
          "
        >
          03 / PROJECTS
        </motion.p>

        {/* Header */}
        <div
          className="
            mt-5
            flex
            flex-col
            gap-6
            md:flex-row
            md:items-end
            md:justify-between
          "
        >
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="
                text-4xl
                font-bold
                tracking-tight
                md:text-6xl
              "
            >
              Projects
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.08,
              }}
              className="
                mt-6
                max-w-3xl
                text-base
                leading-relaxed
                text-gray-400
                md:text-lg
              "
            >
              A collection of software, web, mobile, and computer
              engineering projects showcasing my experience in building
              modern and user-focused technology solutions.
            </motion.p>
          </div>

          {/* Desktop Controls */}
          <div className="hidden shrink-0 gap-3 sm:flex">
            <button
              type="button"
              onClick={scrollLeft}
              aria-label="Previous projects"
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-white/[0.04]
                text-white
                transition
                duration-200
                hover:border-indigo-500/40
                hover:bg-white/[0.08]
              "
            >
              <ChevronLeft size={23} />
            </button>

            <button
              type="button"
              onClick={scrollRight}
              aria-label="Next projects"
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-white/[0.04]
                text-white
                transition
                duration-200
                hover:border-indigo-500/40
                hover:bg-white/[0.08]
              "
            >
              <ChevronRight size={23} />
            </button>
          </div>
        </div>

        {/* Project Carousel */}
        <div
          ref={sliderRef}
          className="
            mt-16
            flex
            snap-x
            snap-mandatory
            gap-6
            overflow-x-auto
            scroll-smooth
            pb-6
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          "
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
              }}
              className="
                w-[88vw]
                shrink-0
                snap-start
                sm:w-[430px]
                lg:w-[470px]
              "
            >
              <Link
                href={project.href}
                className="
                  group
                  flex
                  h-full
                  min-h-[560px]
                  flex-col
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.04]
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:border-indigo-500/40
                  hover:bg-white/[0.06]
                "
              >
                {/* Project Image */}
                <div
                  className="
                    relative
                    h-[260px]
                    w-full
                    overflow-hidden
                    bg-black
                    sm:h-[280px]
                  "
                >
                  <Image
                    src={project.image}
                    alt={`${project.title} project preview`}
                    fill
                    sizes="(max-width: 640px) 88vw, 470px"
                    className="
                      object-cover
                      object-top
                      transition-transform
                      duration-500
                      group-hover:scale-[1.03]
                    "
                  />

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/25
                      via-transparent
                      to-transparent
                    "
                  />
                </div>

                {/* Project Content */}
                <div
                  className="
                    flex
                    flex-1
                    flex-col
                    p-6
                    md:p-8
                  "
                >
                  <span
                    className="
                      text-sm
                      font-medium
                      text-indigo-400
                    "
                  >
                    {project.category}
                  </span>

                  <h3
                    className="
                      mt-3
                      text-2xl
                      font-bold
                      md:text-3xl
                    "
                  >
                    {project.title}
                  </h3>

                  <p
                    className="
                      mt-4
                      leading-relaxed
                      text-gray-400
                    "
                  >
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="
                          rounded-full
                          border
                          border-white/10
                          bg-white/[0.05]
                          px-3
                          py-1.5
                          text-xs
                          text-gray-300
                          md:text-sm
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Case Study */}
                  <div className="mt-auto pt-8">
                    <div
                      className="
                        flex
                        items-center
                        gap-2
                        font-medium
                        text-indigo-400
                      "
                    >
                      View Case Study

                      <ArrowRight
                        size={18}
                        className="
                          transition-transform
                          duration-300
                          group-hover:translate-x-1
                        "
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Mobile Swipe Hint */}
        <p
          className="
            mt-1
            text-center
            text-xs
            text-gray-600
            sm:hidden
          "
        >
          Swipe to explore projects →
        </p>

      </div>
    </section>
  );
}
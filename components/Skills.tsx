"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";

const skillGroups = [
  {
    title: "Frontend Development",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
    ],
  },

  {
    title: "Backend & Databases",
    skills: [
      "Node.js",
      "Express.js",
      "NestJS",
      "REST APIs",
      "PostgreSQL",
      "MySQL",
      "Prisma ORM",
      "Firebase",
    ],
  },

  {
    title: "Mobile Development",
    skills: [
      "Flutter",
      "Dart",
      "Firebase",
      "Android",
      "Responsive Mobile UI",
    ],
  },

  {
    title: "QA & Software Testing",
    skills: [
      "Manual Testing",
      "Test Cases",
      "API Testing",
      "Postman",
      "Bug Reporting",
      "Debugging",
      "Software Quality Assurance",
    ],
  },

  {
    title: "Automation & Python",
    skills: [
      "Python",
      "Pandas",
      "OpenPyXL",
      "Excel Automation",
      "Workflow Automation",
      "Data Processing",
      "AI-Assisted Development",
    ],
  },

  {
    title: "UI/UX Design",
    skills: [
      "Figma",
      "Wireframing",
      "Prototyping",
      "User-Centered Design",
      "Design Systems",
      "Responsive Design",
    ],
  },

  {
    title: "Computer Engineering",
    skills: [
      "Arduino",
      "RFID",
      "GPS",
      "Embedded Systems",
      "IoT",
      "Microcontrollers",
      "Hardware Integration",
    ],
  },

  {
    title: "Developer Tools & Practices",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Chrome DevTools",
      "Agile",
      "Version Control",
      "Git Workflow",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="
        relative
        overflow-hidden
        px-6
        py-24
        md:py-32
      "
    >
      {/* Soft Background Glow */}
      <div
        className="
          pointer-events-none
          absolute
          right-[-120px]
          top-1/3
          h-[300px]
          w-[300px]
          rounded-full
          bg-indigo-500/10
          blur-3xl
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Label */}
        <Reveal>
          <p
            className="
              text-sm
              uppercase
              tracking-[0.3em]
              text-indigo-400
            "
          >
            04 / SKILLS
          </p>
        </Reveal>

        {/* Heading */}
        <Reveal delay={0.1}>
          <h2
            className="
              mt-5
              text-4xl
              font-bold
              tracking-tight
              md:text-6xl
            "
          >
            Technical Skills
          </h2>
        </Reveal>

        {/* Description */}
        <Reveal delay={0.15}>
          <p
            className="
              mt-6
              max-w-3xl
              text-base
              leading-relaxed
              text-gray-400
              md:text-lg
            "
          >
            Technologies and tools I use across software development,
            mobile applications, testing, automation, UI/UX design,
            and computer engineering projects.
          </p>
        </Reveal>

        {/* Skill Cards */}
        <div
          className="
            mt-16
            grid
            grid-cols-1
            gap-6
            md:grid-cols-2
            xl:grid-cols-4
          "
        >
          {skillGroups.map((group, index) => (
            <Reveal
              key={group.title}
              delay={index * 0.05}
            >
              <motion.div
                whileHover={{
                  y: -6,
                }}
                transition={{
                  duration: 0.2,
                }}
                className="
                  group
                  relative
                  h-full
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.04]
                  p-6
                  transition
                  duration-300
                  hover:border-indigo-500/30
                  hover:bg-white/[0.06]
                  md:p-7
                "
              >
                {/* Card Glow */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-10
                    -top-10
                    h-28
                    w-28
                    rounded-full
                    bg-indigo-500/0
                    blur-2xl
                    transition
                    duration-500
                    group-hover:bg-indigo-500/10
                  "
                />

                {/* Accent Line */}
                <div
                  className="
                    mb-5
                    h-[2px]
                    w-8
                    bg-indigo-400/70
                    transition-all
                    duration-300
                    group-hover:w-14
                  "
                />

                <h3
                  className="
                    relative
                    text-xl
                    font-bold
                    md:text-2xl
                  "
                >
                  {group.title}
                </h3>

                {/* Skill Chips */}
                <div className="relative mt-6 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{
                        y: -2,
                        scale: 1.03,
                      }}
                      transition={{
                        duration: 0.15,
                      }}
                      className="
                        cursor-default
                        rounded-full
                        border
                        border-white/10
                        bg-white/[0.06]
                        px-3
                        py-1.5
                        text-xs
                        text-gray-300
                        transition-colors
                        duration-200
                        hover:border-indigo-500/30
                        hover:bg-indigo-500/10
                        hover:text-white
                        md:text-sm
                      "
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
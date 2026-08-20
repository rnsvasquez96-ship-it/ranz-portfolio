"use client";

import { motion } from "framer-motion";

const timeline = [
  {
    year: "2026",
    title: "Computer Engineering Graduate",
    company: "De La Salle Lipa",
    description:
      "Graduated with a Bachelor of Science in Computer Engineering, building a strong foundation in software development, automation, UI/UX design, embedded systems, and technology solutions.",
  },

  {
    year: "2025",
    title: "UI/UX Designer Intern",
    company: "Certicode / SupSoft Tech",
    description:
      "Designed user interfaces, created prototypes, improved usability, and contributed to user-centered digital solutions through collaborative design work.",
  },

  {
    year: "2025 - 2026",
    title: "Software Development Projects",
    company: "Academic & Personal Projects",
    description:
      "Built full-stack applications, responsive websites, mobile applications, automation tools, and database-driven software using modern development technologies.",
  },

  {
    year: "2025 - 2026",
    title: "TAP-JEEP Capstone Project",
    company: "Computer Engineering Research Project",
    description:
      "Developed a smart transportation system integrating RFID, GPS, Flutter, Firebase, and embedded hardware for automated fare collection and transportation management.",
  },

  {
    year: "Ongoing",
    title: "Continuous Technology Development",
    company: "Software Engineering • QA • Automation • UI/UX",
    description:
      "Continuously expanding practical skills in software engineering, quality assurance, mobile development, automation, and user experience design through hands-on projects and independent learning.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
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
          right-[-100px]
          top-1/3
          h-[280px]
          w-[280px]
          rounded-full
          bg-indigo-500/10
          blur-3xl
        "
      />

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Section Label */}
        <motion.p
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.45,
          }}
          className="
            text-sm
            uppercase
            tracking-[0.3em]
            text-indigo-400
          "
        >
          05 / JOURNEY
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{
            opacity: 0,
            y: 22,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.55,
            delay: 0.08,
          }}
          className="
            mt-5
            text-4xl
            font-bold
            tracking-tight
            md:text-6xl
          "
        >
          My Experience
        </motion.h2>

        {/* Intro */}
        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
            delay: 0.14,
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
          A journey shaped by engineering education, industry experience,
          software projects, and continuous hands-on learning.
        </motion.p>

        {/* Timeline */}
        <div className="relative mt-16">

          {/* Timeline Line */}
          <div
            className="
              absolute
              bottom-0
              left-[15px]
              top-0
              w-px
              bg-gradient-to-b
              from-indigo-400/60
              via-white/15
              to-transparent
            "
          />

          {timeline.map((item, index) => (
            <motion.div
              key={`${item.year}-${item.title}`}
              initial={{
                opacity: 0,
                x: -24,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.07,
              }}
              className="
                relative
                pb-12
                pl-12
                last:pb-0
              "
            >
              {/* Timeline Dot */}
              <motion.div
                initial={{
                  scale: 0.7,
                  opacity: 0,
                }}
                whileInView={{
                  scale: 1,
                  opacity: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.07 + 0.08,
                }}
                className="
                  absolute
                  left-0
                  top-6
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-indigo-400/30
                  bg-black
                "
              >
                <div
                  className="
                    h-3
                    w-3
                    rounded-full
                    bg-indigo-400
                  "
                />
              </motion.div>

              {/* Card */}
              <motion.div
                whileHover={{
                  y: -4,
                }}
                transition={{
                  duration: 0.2,
                }}
                className="
                  group
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.04]
                  p-6
                  transition
                  duration-300
                  hover:border-indigo-500/30
                  hover:bg-white/[0.06]
                  md:p-8
                "
              >
                <div
                  className="
                    flex
                    flex-col
                    gap-2
                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                  "
                >
                  <p
                    className="
                      font-medium
                      text-indigo-400
                    "
                  >
                    {item.year}
                  </p>

                  <div
                    className="
                      h-px
                      w-10
                      bg-indigo-400/50
                      transition-all
                      duration-300
                      group-hover:w-16
                    "
                  />
                </div>

                <h3
                  className="
                    mt-4
                    text-2xl
                    font-bold
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-2
                    text-gray-300
                  "
                >
                  {item.company}
                </p>

                <p
                  className="
                    mt-4
                    leading-relaxed
                    text-gray-400
                  "
                >
                  {item.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
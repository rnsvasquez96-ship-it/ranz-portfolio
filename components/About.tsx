"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";

const stats = [
  {
    value: "2026",
    label: "Computer Engineering Graduate",
  },
  {
    value: "1+",
    label: "Industry Internship",
  },
  {
    value: "6+",
    label: "Engineering Projects",
  },
];

export default function About() {
  return (
    <section
      id="about"
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
          left-[-120px]
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
        <Reveal>
          <p
            className="
              text-sm
              uppercase
              tracking-[0.3em]
              text-indigo-400
            "
          >
            02 / ABOUT ME
          </p>
        </Reveal>

        {/* Heading */}
        <Reveal delay={0.1}>
          <h2
            className="
              mt-6
              max-w-4xl
              text-4xl
              font-bold
              leading-tight
              tracking-tight
              md:text-6xl
            "
          >
            Building Software.
            <br />

            <span className="text-gray-300">
              Designing Experiences.
            </span>

            <br />

            <span
              className="
                bg-gradient-to-r
                from-indigo-400
                via-cyan-400
                to-purple-400
                bg-clip-text
                text-transparent
              "
            >
              Automating Solutions.
            </span>
          </h2>
        </Reveal>

        {/* Paragraph 1 */}
        <Reveal delay={0.2}>
          <p
            className="
              mt-8
              max-w-4xl
              text-base
              leading-8
              text-gray-400
              md:text-lg
            "
          >
            I am Ranz Nathaniel Vasquez, a Computer Engineering graduate
            from De La Salle Lipa, Batch 2026. I also gained industry
            experience as a UI/UX Designer Intern at Certicode / SupSoft
            Tech, where I worked on creating intuitive and user-centered
            digital experiences.
          </p>
        </Reveal>

        {/* Paragraph 2 */}
        <Reveal delay={0.3}>
          <p
            className="
              mt-5
              max-w-4xl
              text-base
              leading-8
              text-gray-400
              md:text-lg
            "
          >
            My interests span software engineering, full-stack development,
            mobile applications, quality assurance, automation, and UI/UX
            design. I enjoy turning ideas into reliable and practical
            technology solutions that solve real-world problems.
          </p>
        </Reveal>

        {/* Stats */}
        <div
          className="
            mt-12
            grid
            grid-cols-1
            gap-5
            md:grid-cols-3
          "
        >
          {stats.map((stat, index) => (
            <Reveal
              key={stat.label}
              delay={0.4 + index * 0.08}
            >
              <motion.div
                whileHover={{
                  y: -5,
                }}
                transition={{
                  duration: 0.2,
                }}
                className="
                  group
                  h-full
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.04]
                  p-6
                  transition
                  duration-300
                  hover:border-indigo-500/30
                  hover:bg-white/[0.06]
                "
              >
                <motion.h3
                  initial={{ opacity: 0.8 }}
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.2 }}
                  className="
                    text-3xl
                    font-bold
                    text-white
                  "
                >
                  {stat.value}
                </motion.h3>

                <p
                  className="
                    mt-2
                    leading-relaxed
                    text-gray-400
                  "
                >
                  {stat.label}
                </p>

                <div
                  className="
                    mt-5
                    h-px
                    w-10
                    bg-indigo-400/60
                    transition-all
                    duration-300
                    group-hover:w-16
                  "
                />
              </motion.div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
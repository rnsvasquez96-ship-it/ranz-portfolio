"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";

const projects = [
  {
    title: "PickleRank",
    category: "🏆 Full-Stack Platform",
    image: "/projects/picklerank.jpg",
    description:
      "A modern tournament management platform built for pickleball organizations to manage players, tournaments, match results, and live rankings.",

    features: [
      "Tournament Management",
      "Player Profiles",
      "Authentication",
      "Live Rankings",
    ],

    stack: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Tailwind CSS",
    ],

    github: "#",
    demo: "#",
  },

  {
    title: "Brew Haven",
    category: "☕ Frontend Development",
    image: "/projects/brew-haven.jpg",
    description:
      "A premium coffee shop website showcasing responsive layouts, smooth animations, and modern frontend development.",

    features: [
      "Responsive Design",
      "Interactive UI",
      "Smooth Animations",
      "Mobile Optimized",
    ],

    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive Design",
    ],

    github: "#",
    demo: "#",
  },

  {
    title: "TAP-JEEP",
    category: "🚍 Computer Engineering",
    image: "/projects/tap-jeep.jpg",
    description:
      "A smart transportation fare collection system using RFID, GPS, Flutter, and Firebase for automated public transportation.",

    features: [
      "RFID Authentication",
      "GPS Fare Calculation",
      "Flutter Mobile App",
      "Firebase",
    ],

    stack: [
      "Arduino",
      "RFID",
      "Flutter",
      "Firebase",
    ],

    github: "#",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-indigo-400 tracking-[0.3em] uppercase text-sm"
        >
          03 / PROJECTS
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 text-4xl md:text-6xl font-bold"
        >
          Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-6 max-w-3xl text-lg text-gray-400 leading-relaxed"
        >
          A selection of software, web, and computer engineering projects
          showcasing my skills in full-stack development, frontend
          engineering, and embedded systems.
        </motion.p>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{
                y: -10,
                transition: { duration: 0.25 },
              }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-indigo-500/40 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300"
            >
              <div className="overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1200}
                  height={700}
                  className="w-full h-60 object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-8">

                <span className="inline-flex rounded-full bg-indigo-500/10 px-3 py-1 text-sm text-indigo-400 border border-indigo-500/20">
                  {project.category}
                </span>

                <h3 className="mt-5 text-3xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-4 text-gray-400 leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-6 space-y-3">
                  {project.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 text-gray-300"
                    >
                      <span className="text-green-400 font-bold">✓</span>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {project.stack.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/10 px-3 py-2 text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex gap-3">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-white py-3 font-medium text-black transition hover:scale-105"
                  >
                    <Code2 size={18} />
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/20 py-3 transition hover:bg-white/10"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>

                </div>

              </div>
            </motion.article>
          ))}

        </div>
      </div>
    </section>
  );
}
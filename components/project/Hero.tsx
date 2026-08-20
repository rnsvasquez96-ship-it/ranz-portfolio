"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, } from "lucide-react";
import { FaGithub } from "react-icons/fa";

interface HeroProps {
  title: string;
  category: string;
  description: string;
  image: string;
  github: string;
  demo: string;
  technologies: string[];
}

export default function Hero({
  title,
  category,
  description,
  image,
  github,
  demo,
  technologies,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden px-6 pt-32 pb-20">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl">

        {/* Back */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-gray-400 transition hover:text-white"
        >
          <ArrowLeft size={18} />
          Back to Portfolio
        </Link>

        <div className="mt-10 grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-indigo-400">
              {category}
            </p>

            <h1 className="mt-4 text-5xl font-bold md:text-7xl">
              {title}
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-gray-400">
              {description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-black transition hover:scale-105"
              >
                <FaGithub size={18} />
                GitHub
              </a>

              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3 transition hover:bg-white/10"
              >
                <ExternalLink size={18} />
                Live Demo
              </a>

            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl">
              <Image
                src={image}
                alt={title}
                width={1400}
                height={900}
                priority
                className="h-auto w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

interface ProjectFooterProps {
  github: string;
  demo: string;
}

export default function ProjectFooter({
  github,
  demo,
}: ProjectFooterProps) {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-5xl">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            rounded-3xl
            border
            border-white/10
            bg-white/5
            p-10
            text-center
            backdrop-blur-xl
          "
        >

          <h2 className="text-4xl font-bold">
            Interested in this project?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-400">
            Explore the source code, view the live demo, or return to the
            portfolio to discover more of my work.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">

            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                rounded-xl
                bg-white
                px-6
                py-3
                font-semibold
                text-black
                transition
                hover:scale-105
              "
            >
              <FaGithub size={18} />
              GitHub Repository
            </a>

            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                rounded-xl
                border
                border-white/20
                px-6
                py-3
                transition
                hover:bg-white/10
              "
            >
              <ExternalLink size={18} />
              Live Demo
            </a>

          </div>

          <div className="mt-12">

            <Link
              href="/#projects"
              className="
                inline-flex
                items-center
                gap-2
                text-gray-400
                transition
                hover:text-white
              "
            >
              <ArrowLeft size={18} />
              Back to Portfolio
            </Link>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
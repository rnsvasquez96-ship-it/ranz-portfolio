"use client";

import { motion } from "framer-motion";

interface TechCategory {
  title: string;
  technologies: string[];
}

interface TechStackProps {
  stacks: TechCategory[];
}

export default function TechStack({ stacks }: TechStackProps) {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm uppercase tracking-[0.3em] text-indigo-400"
        >
          TECHNOLOGIES
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-4xl font-bold md:text-5xl"
        >
          Tech Stack
        </motion.h2>

        <div className="mt-16 grid gap-8 md:grid-cols-2">

          {stacks.map((stack, index) => (

            <motion.div
              key={stack.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-8
                backdrop-blur-xl
              "
            >

              <h3 className="text-2xl font-semibold">
                {stack.title}
              </h3>

              <div className="mt-6 flex flex-wrap gap-3">

                {stack.technologies.map((tech) => (

                  <span
                    key={tech}
                    className="
                      rounded-full
                      border
                      border-white/10
                      bg-indigo-500/10
                      px-4
                      py-2
                      text-sm
                      text-white
                      transition
                      hover:bg-indigo-500/20
                    "
                  >
                    {tech}
                  </span>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";

interface OverviewProps {
  overview: string;
}

export default function Overview({ overview }: OverviewProps) {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-5xl">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm tracking-[0.3em] uppercase text-indigo-400"
        >
          PROJECT OVERVIEW
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-4xl font-bold md:text-5xl"
        >
          About the Project
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 text-lg leading-9 text-gray-400"
        >
          {overview}
        </motion.p>

      </div>
    </section>
  );
}
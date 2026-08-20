"use client";

import { motion } from "framer-motion";
import {
  Trophy,
  Users,
  ShieldCheck,
  BarChart3,
  CalendarDays,
  Swords,
  Receipt,
  WalletCards,
  PiggyBank,
  ChartNoAxesCombined,
  History,
} from "lucide-react";

const icons = {
  Trophy,
  Users,
  ShieldCheck,
  BarChart3,
  CalendarDays,
  Swords,
  Receipt,
  WalletCards,
  PiggyBank,
  ChartNoAxesCombined,
  History,
};

export interface Feature {
  title: string;
  description: string;
  icon: keyof typeof icons;
}

interface FeaturesProps {
  features: readonly Feature[];
}

export default function Features({ features }: FeaturesProps) {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm uppercase tracking-[0.3em] text-indigo-400"
        >
          FEATURES
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-4xl font-bold md:text-5xl"
        >
          Key Features
        </motion.h2>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = icons[feature.icon];

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  p-8
                  transition
                  duration-300
                  hover:border-indigo-500/30
                  hover:bg-white/[0.07]
                "
              >
                <div
                  className="
                    mb-6
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-indigo-500/15
                    text-indigo-400
                  "
                >
                  <Icon size={28} />
                </div>

                <h3 className="text-2xl font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
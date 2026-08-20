"use client";

import { motion } from "framer-motion";
import { Mail, FileText, ArrowUpRight } from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const contacts = [
  {
    title: "Email",
    value: "vasquezranznathaniel@gmail.com",
    link: "mailto:vasquezranznathaniel@gmail.com",
    icon: Mail,
  },

  {
    title: "GitHub",
    value: "github.com/rnsvasquez96-ship-it",
    link: "https://github.com/rnsvasquez96-ship-it",
    icon: FaGithub,
  },

  {
    title: "LinkedIn",
    value: "linkedin.com/in/ranz-nathaniel-vasquez",
    link: "https://www.linkedin.com/in/ranz-nathaniel-vasquez-612500364/",
    icon: FaLinkedin,
  },

  {
    title: "Resume",
    value: "Download CV",
    link: "/resume.pdf",
    icon: FileText,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        px-6
        py-24
        md:py-32
      "
    >
      {/* Soft Glow */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-[-80px]
          left-1/2
          h-[320px]
          w-[320px]
          -translate-x-1/2
          rounded-full
          bg-indigo-500/10
          blur-3xl
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-5xl
          text-center
        "
      >
        {/* Label */}
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
          06 / CONTACT
        </motion.p>

        {/* Heading */}
        <motion.h2
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
          }}
          transition={{
            duration: 0.55,
            delay: 0.08,
          }}
          className="
            mt-6
            text-4xl
            font-bold
            tracking-tight
            md:text-6xl
          "
        >
          Let's Build Something
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
            Together
          </span>
        </motion.h2>

        {/* Intro */}
        <motion.p
          initial={{
            opacity: 0,
            y: 18,
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
            delay: 0.15,
          }}
          className="
            mx-auto
            mt-6
            max-w-2xl
            text-base
            leading-relaxed
            text-gray-400
            md:text-lg
          "
        >
          I am open to opportunities in Software Engineering,
          Full-Stack Development, QA Engineering, UI/UX Design,
          Automation Engineering, Mobile Development, and IT Support.
        </motion.p>

        {/* Contact Cards */}
        <div
          className="
            mt-12
            grid
            gap-6
            md:grid-cols-2
          "
        >
          {contacts.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={item.title}
                href={item.link}
                target={
                  item.title === "Resume" || item.title === "Email"
                    ? undefined
                    : "_blank"
                }
                rel={
                  item.title === "GitHub" ||
                  item.title === "LinkedIn"
                    ? "noopener noreferrer"
                    : undefined
                }
                download={
                  item.title === "Resume"
                    ? true
                    : undefined
                }
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
                }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.07,
                }}
                whileHover={{
                  y: -5,
                }}
                className="
                  group
                  relative
                  flex
                  items-center
                  gap-5
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.04]
                  p-6
                  text-left
                  transition
                  duration-300
                  hover:border-indigo-500/30
                  hover:bg-white/[0.06]
                "
              >
                {/* Soft card glow */}
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

                {/* Icon */}
                <motion.div
                  whileHover={{
                    scale: 1.06,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="
                    relative
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-indigo-500/20
                    bg-indigo-500/10
                    text-indigo-400
                  "
                >
                  <Icon size={23} />
                </motion.div>

                {/* Text */}
                <div
                  className="
                    relative
                    min-w-0
                    flex-1
                  "
                >
                  <h3
                    className="
                      font-bold
                      text-white
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-1
                      truncate
                      text-sm
                      text-gray-400
                    "
                  >
                    {item.value}
                  </p>
                </div>

                {/* Arrow */}
                <ArrowUpRight
                  size={19}
                  className="
                    relative
                    shrink-0
                    text-gray-500
                    transition
                    duration-300
                    group-hover:-translate-y-1
                    group-hover:translate-x-1
                    group-hover:text-indigo-400
                  "
                />
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
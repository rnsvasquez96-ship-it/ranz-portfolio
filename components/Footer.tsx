"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className="
        relative
        overflow-hidden
        border-t
        border-white/10
        px-6
        py-10
      "
    >
      {/* Subtle Background Glow */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-[-120px]
          left-1/2
          h-[220px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-indigo-500/5
          blur-3xl
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          max-w-7xl
          flex-col
          items-center
          justify-between
          gap-6
          md:flex-row
        "
      >
        {/* Copyright */}
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.4,
          }}
          className="
            text-center
            md:text-left
          "
        >
          <p className="text-sm text-gray-400">
            © 2026 Ranz Nathaniel Vasquez.
          </p>

          <p
            className="
              mt-1
              text-xs
              text-gray-600
            "
          >
            Designed & built with Next.js
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.4,
            delay: 0.08,
          }}
          className="
            flex
            items-center
            gap-3
          "
        >
          {/* GitHub */}
          <motion.a
            href="https://github.com/rnsvasquez96-ship-it"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            whileHover={{
              y: -3,
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/[0.04]
              text-gray-400
              transition
              duration-200
              hover:border-indigo-500/30
              hover:bg-white/[0.08]
              hover:text-white
            "
          >
            <FaGithub size={20} />
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/ranz-nathaniel-vasquez-612500364/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            whileHover={{
              y: -3,
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/[0.04]
              text-gray-400
              transition
              duration-200
              hover:border-indigo-500/30
              hover:bg-white/[0.08]
              hover:text-white
            "
          >
            <FaLinkedin size={20} />
          </motion.a>

          {/* Back to Top */}
          <motion.button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            whileHover={{
              y: -3,
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="
              ml-1
              flex
              h-11
              w-11
              cursor-pointer
              items-center
              justify-center
              rounded-full
              border
              border-indigo-500/20
              bg-indigo-500/10
              text-indigo-400
              transition
              duration-200
              hover:border-indigo-500/40
              hover:bg-indigo-500/20
              hover:text-indigo-300
            "
          >
            <ArrowUp size={19} />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
}
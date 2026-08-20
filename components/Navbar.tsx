"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Experience",
    href: "#experience",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="
        fixed
        left-0
        right-0
        top-0
        z-50
        border-b
        border-white/10
        bg-black/60
        backdrop-blur-md
      "
    >
      <nav
        className="
          mx-auto
          flex
          max-w-7xl
          items-center
          justify-between
          px-6
          py-4
        "
      >
        {/* Logo */}
        <motion.a
          href="#home"
          initial={{
            opacity: 0,
            y: -8,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.45,
          }}
          whileHover={{
            scale: 1.04,
          }}
          className="
            text-xl
            font-bold
            tracking-tight
            text-white
          "
        >
          RNV
          <span className="text-indigo-400">.</span>
        </motion.a>

        {/* Desktop Menu */}
        <div
          className="
            hidden
            items-center
            gap-8
            md:flex
          "
        >
          {links.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{
                opacity: 0,
                y: -8,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.05 * index,
                duration: 0.4,
              }}
              className="
                group
                relative
                text-sm
                text-gray-300
                transition-colors
                duration-200
                hover:text-white
              "
            >
              {link.name}

              <span
                className="
                  absolute
                  -bottom-2
                  left-0
                  h-[1px]
                  w-0
                  bg-indigo-400
                  transition-all
                  duration-300
                  group-hover:w-full
                "
              />
            </motion.a>
          ))}
        </div>

        {/* Mobile Button */}
        <motion.button
          type="button"
          onClick={() => setOpen((current) => !current)}
          whileTap={{
            scale: 0.92,
          }}
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-white/[0.04]
            text-white
            transition
            hover:bg-white/[0.08]
            md:hidden
          "
          aria-label={
            open
              ? "Close navigation menu"
              : "Open navigation menu"
          }
        >
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.div
                key="close"
                initial={{
                  opacity: 0,
                  rotate: -45,
                  scale: 0.8,
                }}
                animate={{
                  opacity: 1,
                  rotate: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  rotate: 45,
                  scale: 0.8,
                }}
                transition={{
                  duration: 0.18,
                }}
              >
                <X size={22} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{
                  opacity: 0,
                  rotate: 45,
                  scale: 0.8,
                }}
                animate={{
                  opacity: 1,
                  rotate: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  rotate: -45,
                  scale: 0.8,
                }}
                transition={{
                  duration: 0.18,
                }}
              >
                <Menu size={22} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.28,
              ease: "easeOut",
            }}
            className="
              overflow-hidden
              border-t
              border-white/10
              bg-black/90
              md:hidden
            "
          >
            <div
              className="
                flex
                flex-col
                gap-2
                px-6
                py-5
              "
            >
              {links.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{
                    opacity: 0,
                    x: -12,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: index * 0.04,
                    duration: 0.25,
                  }}
                  className="
                    rounded-xl
                    px-4
                    py-3
                    text-gray-300
                    transition
                    duration-200
                    hover:bg-white/[0.06]
                    hover:text-white
                  "
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
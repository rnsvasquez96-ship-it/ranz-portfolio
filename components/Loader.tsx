"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1250);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.35,
              ease: "easeOut",
            },
          }}
          className="
            fixed
            inset-0
            z-[9999]
            flex
            items-center
            justify-center
            overflow-hidden
            bg-black
          "
        >
          {/* Soft Glow */}
          <div
            className="
              pointer-events-none
              absolute
              h-[260px]
              w-[260px]
              rounded-full
              bg-indigo-500/15
              blur-3xl
            "
          />

          <motion.div
            initial={{
              opacity: 0,
              y: 16,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.45,
              ease: "easeOut",
            }}
            className="
              relative
              z-10
              w-[260px]
              text-center
            "
          >
            {/* Initials */}
            <motion.h1
              initial={{
                opacity: 0,
                letterSpacing: "0.05em",
              }}
              animate={{
                opacity: 1,
                letterSpacing: "0.18em",
              }}
              transition={{
                duration: 0.55,
              }}
              className="
                text-5xl
                font-bold
                tracking-[0.18em]
                md:text-7xl
              "
            >
              RNV
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{
                opacity: 0,
                y: 8,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.2,
                duration: 0.4,
              }}
              className="
                mt-5
                text-sm
                text-gray-400
                md:text-base
              "
            >
              Computer Engineer • Software Developer
            </motion.p>

            {/* Progress */}
            <div
              className="
                mt-8
                h-[2px]
                w-full
                overflow-hidden
                rounded-full
                bg-white/10
              "
            >
              <motion.div
                initial={{
                  scaleX: 0,
                }}
                animate={{
                  scaleX: 1,
                }}
                transition={{
                  duration: 0.9,
                  ease: "easeInOut",
                }}
                className="
                  h-full
                  origin-left
                  bg-gradient-to-r
                  from-indigo-400
                  via-cyan-400
                  to-purple-400
                "
              />
            </div>

            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.45,
                duration: 0.3,
              }}
              className="
                mt-4
                text-xs
                uppercase
                tracking-[0.25em]
                text-gray-600
              "
            >
              Loading Portfolio
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
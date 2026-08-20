"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ChevronDown } from "lucide-react";
import type { MouseEvent } from "react";

const techStack = [
  {
    name: "Full-Stack Development",
    position: "top-10 left-0",
  },
  {
    name: "React / Next.js",
    position: "top-24 right-0",
  },
  {
    name: "QA Automation",
    position: "bottom-32 left-0",
  },
  {
    name: "Python Automation",
    position: "bottom-10 right-10",
  },
  {
    name: "UI/UX Design",
    position: "top-1/2 right-[-30px]",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut" as const,
    },
  },
};

export default function Hero() {
  const imageX = useMotionValue(0);
  const imageY = useMotionValue(0);

  const spotlightX = useMotionValue(50);
  const spotlightY = useMotionValue(50);

  const smoothImageX = useSpring(imageX, {
    stiffness: 120,
    damping: 18,
    mass: 0.3,
  });

  const smoothImageY = useSpring(imageY, {
    stiffness: 120,
    damping: 18,
    mass: 0.3,
  });

  const smoothSpotlightX = useSpring(spotlightX, {
    stiffness: 100,
    damping: 20,
  });

  const smoothSpotlightY = useSpring(spotlightY, {
    stiffness: 100,
    damping: 20,
  });

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const normalizedX = x / rect.width - 0.5;
    const normalizedY = y / rect.height - 0.5;

    imageX.set(normalizedX * 10);
    imageY.set(normalizedY * 10);

    spotlightX.set((x / rect.width) * 100);
    spotlightY.set((y / rect.height) * 100);
  };

  const handleMouseLeave = () => {
    imageX.set(0);
    imageY.set(0);

    spotlightX.set(50);
    spotlightY.set(50);
  };

  return (
    <section
      id="home"
      className="
        relative
        flex
        min-h-screen
        items-center
        overflow-hidden
        px-6
        pt-24
      "
    >
      {/* Background Grid */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]
          bg-[size:60px_60px]
        "
      />

      {/* Soft Background Glow */}
      <div
        className="
          pointer-events-none
          absolute
          right-0
          top-20
          h-[300px]
          w-[300px]
          rounded-full
          bg-indigo-600/15
          blur-3xl
          sm:right-20
          sm:h-[440px]
          sm:w-[440px]
        "
      />

      {/* Secondary Glow */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-20
          left-[-80px]
          h-[240px]
          w-[240px]
          rounded-full
          bg-cyan-500/10
          blur-3xl
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          w-full
          max-w-7xl
          grid-cols-1
          items-center
          gap-14
          lg:grid-cols-2
          lg:gap-20
        "
      >
        {/* LEFT */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={fadeUp}
            className="text-lg text-gray-400"
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="
              mt-4
              text-4xl
              font-bold
              leading-tight
              tracking-tight
              sm:text-5xl
              md:text-7xl
            "
          >
            Ranz Nathaniel
            <br />

            <span
              className="
                bg-gradient-to-r
                from-white
                via-gray-300
                to-gray-500
                bg-clip-text
                text-transparent
              "
            >
              Vasquez
            </span>
          </motion.h1>

          <motion.div
            variants={fadeUp}
            className="
              mt-6
              flex
              flex-wrap
              items-center
              gap-3
            "
          >
            <span
              className="
                rounded-full
                border
                border-white/10
                bg-white/[0.05]
                px-4
                py-2
                text-sm
                text-gray-300
              "
            >
              Computer Engineering Graduate
            </span>

            <span
              className="
                rounded-full
                border
                border-white/10
                bg-white/[0.05]
                px-4
                py-2
                text-sm
                text-gray-300
              "
            >
              Batch 2026
            </span>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="
              mt-8
              min-h-[42px]
              text-xl
              font-medium
              text-indigo-400
              sm:text-2xl
              md:text-3xl
            "
          >
            <TypeAnimation
              sequence={[
                "Software Engineer",
                2000,
                "Full-Stack Developer",
                2000,
                "QA Engineer & Software Tester",
                2000,
                "UI/UX Designer",
                2000,
                "Automation Engineer",
                2000,
                "IT Support Specialist",
                2000,
              ]}
              speed={45}
              repeat={Infinity}
            />
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="
              mt-6
              max-w-xl
              text-base
              leading-relaxed
              text-gray-400
              md:text-lg
            "
          >
            Building modern applications, reliable software systems,
            automation solutions, and user-centered digital experiences
            with a focus on usability, performance, and clean design.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="
              mt-10
              flex
              flex-col
              gap-4
              sm:flex-row
            "
          >
            <motion.a
              href="#projects"
              whileHover={{
                y: -2,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.98,
              }}
              transition={{
                duration: 0.18,
              }}
              className="
                rounded-full
                bg-white
                px-8
                py-3
                text-center
                font-medium
                text-black
              "
            >
              View Projects
            </motion.a>

            <motion.a
              href="/resume.pdf"
              download
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.98,
              }}
              transition={{
                duration: 0.18,
              }}
              className="
                rounded-full
                border
                border-white/15
                bg-white/[0.02]
                px-8
                py-3
                text-center
                transition
                hover:bg-white/[0.07]
              "
            >
              Download Resume
            </motion.a>
          </motion.div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{
            opacity: 0,
            x: 35,
            scale: 0.97,
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: "easeOut",
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="
            relative
            mt-10
            flex
            min-h-[500px]
            items-center
            justify-center
            lg:mt-0
          "
        >
          {/* Cursor Spotlight */}
          <motion.div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-0
              rounded-[3rem]
              opacity-80
            "
            style={{
              background: `radial-gradient(circle at ${smoothSpotlightX.get()}% ${smoothSpotlightY.get()}%, rgba(99,102,241,0.22), rgba(34,211,238,0.08) 30%, transparent 60%)`,
            }}
          />

          {/* Static Glow */}
          <div
            className="
              pointer-events-none
              absolute
              h-[280px]
              w-[280px]
              rounded-full
              bg-cyan-500/12
              blur-3xl
              sm:h-[380px]
              sm:w-[380px]
            "
          />

          {/* Gradient Frame */}
          <div
            className="
              absolute
              h-[350px]
              w-[260px]
              rounded-[2rem]
              bg-gradient-to-br
              from-indigo-500
              via-cyan-400
              to-purple-500
              sm:h-[440px]
              sm:w-[330px]
            "
          />

          {/* Profile Parallax */}
          <motion.div
            style={{
              x: smoothImageX,
              y: smoothImageY,
            }}
            whileHover={{
              scale: 1.015,
            }}
            transition={{
              duration: 0.2,
            }}
            className="
              relative
              h-[340px]
              w-[250px]
              overflow-hidden
              rounded-[2rem]
              border
              border-white/10
              bg-black
              shadow-2xl
              shadow-indigo-500/10
              sm:h-[430px]
              sm:w-[320px]
            "
          >
            <Image
              src="/images/profile.png"
              alt="Ranz Nathaniel Vasquez"
              fill
              priority
              sizes="(max-width:640px) 250px, 320px"
              className="object-cover"
            />
          </motion.div>

          {/* Tech Badges */}
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{
                opacity: 0,
                scale: 0.92,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.45,
                delay: 0.45 + index * 0.08,
              }}
              whileHover={{
                y: -3,
                scale: 1.03,
              }}
              className={`
                absolute
                hidden
                sm:block
                ${tech.position}
                rounded-full
                border
                border-white/15
                bg-black/70
                px-4
                py-2
                text-sm
                text-white
                shadow-lg
                whitespace-nowrap
              `}
            >
              {tech.name}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        initial={{
          opacity: 0,
          y: -6,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 1.1,
          duration: 0.6,
        }}
        className="
          absolute
          bottom-7
          left-1/2
          hidden
          -translate-x-1/2
          flex-col
          items-center
          gap-2
          text-xs
          uppercase
          tracking-[0.25em]
          text-gray-500
          md:flex
        "
      >
        Scroll

        <motion.div
          animate={{
            y: [0, 5, 0],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.a>
    </section>
  );
}
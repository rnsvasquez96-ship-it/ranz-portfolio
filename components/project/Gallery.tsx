"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

interface GalleryImage {
  title: string;
  image: string;
}

interface GalleryProps {
  images: GalleryImage[];
  mobile?: boolean;
}

export default function Gallery({
  images,
  mobile = false,
}: GalleryProps) {
  const [selectedImage, setSelectedImage] =
    useState<GalleryImage | null>(null);

  if (!images.length) return null;

  return (
    <>
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-[0.3em] text-indigo-400"
          >
            GALLERY
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-4xl font-bold md:text-5xl"
          >
            Project Screenshots
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mt-5 max-w-3xl text-lg leading-relaxed text-gray-400"
          >
            Explore the interface and key screens of the project.
            Click any screenshot to view it in full size.
          </motion.p>

          <div
            className={
              mobile
                ? "mt-16 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4"
                : "mt-16 grid gap-8 md:grid-cols-2"
            }
          >
            {images.map((item, index) => (
              <motion.button
                key={item.title}
                type="button"
                onClick={() => setSelectedImage(item)}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.05,
                  duration: 0.35,
                }}
                whileHover={{ y: -5 }}
                className="
                  group
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.04]
                  text-left
                  transition
                  duration-300
                  hover:border-indigo-500/40
                  hover:bg-white/[0.06]
                "
              >
                {/* Screenshot */}
                <div className="relative overflow-hidden bg-black">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={mobile ? 900 : 1400}
                    height={mobile ? 1600 : 800}
                    sizes={
                      mobile
                        ? "(max-width:640px) 50vw, (max-width:1024px) 33vw, 25vw"
                        : "(max-width:768px) 100vw, 50vw"
                    }
                    className={
                      mobile
                        ? "h-[360px] w-full object-contain sm:h-[420px]"
                        : "h-[260px] w-full object-cover object-top md:h-[300px]"
                    }
                  />

                  {/* Hover overlay */}
                  <div
                    className="
                      absolute
                      inset-0
                      flex
                      items-center
                      justify-center
                      bg-black/0
                      opacity-0
                      transition
                      duration-300
                      group-hover:bg-black/35
                      group-hover:opacity-100
                    "
                  >
                    <div
                      className="
                        flex
                        items-center
                        gap-2
                        rounded-full
                        bg-black/70
                        px-4
                        py-2
                        text-sm
                        font-medium
                        text-white
                      "
                    >
                      <ZoomIn size={17} />
                      View Full Size
                    </div>
                  </div>
                </div>

                {/* Title */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold">
                    {item.title}
                  </h3>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Fullscreen Preview */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="
              fixed
              inset-0
              z-[9999]
              flex
              items-center
              justify-center
              bg-black/90
              p-4
              sm:p-8
            "
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              aria-label="Close image"
              className="
                absolute
                right-5
                top-5
                z-20
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                bg-black/70
                text-white
                transition
                hover:bg-white/10
              "
            >
              <X size={24} />
            </button>

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.95,
              }}
              transition={{ duration: 0.2 }}
              onClick={(event) => event.stopPropagation()}
              className="
                flex
                max-h-[92vh]
                max-w-6xl
                flex-col
                items-center
                justify-center
              "
            >
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                width={1600}
                height={2400}
                sizes="95vw"
                className="
                  max-h-[82vh]
                  h-auto
                  w-auto
                  max-w-full
                  rounded-2xl
                  object-contain
                "
              />

              <p className="mt-4 text-center text-gray-300">
                {selectedImage.title}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
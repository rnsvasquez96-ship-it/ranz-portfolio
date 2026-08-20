"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

interface TapJeepGalleryProps {
  images: string[];
}

export default function TapJeepGallery({
  images,
}: TapJeepGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images.length) return null;

  const previousImage = () => {
    setCurrentIndex((current) =>
      current === 0 ? images.length - 1 : current - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((current) =>
      current === images.length - 1 ? 0 : current + 1
    );
  };

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">

        <p className="text-sm uppercase tracking-[0.3em] text-indigo-400">
          GALLERY
        </p>

        <h2 className="mt-5 text-4xl font-bold md:text-5xl">
          Project Gallery
        </h2>

        <div className="relative mt-14 flex items-center justify-center gap-4">

          <button
            type="button"
            onClick={previousImage}
            aria-label="Previous photo"
            className="
              flex
              h-12
              w-12
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/[0.05]
              text-white
              transition
              hover:border-indigo-500/40
              hover:bg-white/10
            "
          >
            <ChevronLeft size={24} />
          </button>

          <motion.div
            key={images[currentIndex]}
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25 }}
            className="
              relative
              w-full
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-black
            "
          >
            <div className="relative aspect-[16/10] w-full">
              <Image
                src={images[currentIndex]}
                alt={`TAP-JEEP project photo ${currentIndex + 1}`}
                fill
                sizes="(max-width:768px) 100vw, 1000px"
                className="object-contain"
              />
            </div>
          </motion.div>

          <button
            type="button"
            onClick={nextImage}
            aria-label="Next photo"
            className="
              flex
              h-12
              w-12
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/[0.05]
              text-white
              transition
              hover:border-indigo-500/40
              hover:bg-white/10
            "
          >
            <ChevronRight size={24} />
          </button>

        </div>

        <div className="mt-6 flex justify-center gap-2">
          {images.map((image, index) => (
            <button
              key={image}
              type="button"
              onClick={() => setCurrentIndex(index)}
              aria-label={`View photo ${index + 1}`}
              className={
                currentIndex === index
                  ? "h-2 w-6 rounded-full bg-indigo-400"
                  : "h-2 w-2 rounded-full bg-white/20"
              }
            />
          ))}
        </div>

      </div>
    </section>
  );
}
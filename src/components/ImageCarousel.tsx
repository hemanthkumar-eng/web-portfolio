"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface ImageCarouselProps {
  images: readonly string[];
}

export function ImageCarousel({ images }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(true);
  const [direction, setDirection] = React.useState(0);

  const nextImage = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const previousImage = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToImage = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  if (images.length === 0) return null;

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative w-full h-[500px] mb-8 rounded-xl overflow-hidden group"
    >
      <div className="relative w-full h-full">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute inset-0"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-full"
            >
              <Image
                src={images[currentIndex]}
                alt={`Project image ${currentIndex + 1}`}
                fill
                className={`object-cover rounded-xl transition-opacity duration-300 ${
                  isLoading ? "opacity-0" : "opacity-100"
                }`}
                priority={currentIndex === 0}
                onLoad={() => setIsLoading(false)}
                onError={(e) => {
                  console.error("Failed to load image:", images[currentIndex]);
                  setIsLoading(false);
                }}
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-xl backdrop-blur-sm">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full"
            />
          </div>
        )}
      </div>

      {images.length > 1 && (
        <>
          <motion.button
            onClick={previousImage}
            whileHover={{ scale: 1.15, x: -5 }}
            whileTap={{ scale: 0.85 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 0 }}
            className="group-hover:opacity-100 absolute left-4 top-1/2 -translate-y-1/2 glass-effect text-white p-3 rounded-full hover:bg-white/20 transition-all z-10"
            aria-label="Previous image"
          >
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              whileHover={{ x: -3 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <path d="m15 18-6-6 6-6" />
            </motion.svg>
          </motion.button>
          <motion.button
            onClick={nextImage}
            whileHover={{ scale: 1.15, x: 5 }}
            whileTap={{ scale: 0.85 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 0 }}
            className="group-hover:opacity-100 absolute right-4 top-1/2 -translate-y-1/2 glass-effect text-white p-3 rounded-full hover:bg-white/20 transition-all z-10"
            aria-label="Next image"
          >
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              whileHover={{ x: 3 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <path d="m9 18 6-6-6-6" />
            </motion.svg>
          </motion.button>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10"
          >
            {images.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToImage(index)}
                whileHover={{ scale: 1.3, y: -2 }}
                whileTap={{ scale: 0.8 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: 1,
                  scale: index === currentIndex ? 1 : 0.5,
                }}
                transition={{
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 500,
                }}
                className={`rounded-full transition-all ${
                  index === currentIndex
                    ? "w-8 h-2 bg-white shadow-lg shadow-purple-500/50"
                    : "w-2 h-2 bg-white/50 hover:bg-white/75"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </motion.div>
        </>
      )}
    </motion.div>
  );
}

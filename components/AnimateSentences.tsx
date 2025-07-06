"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Heart } from "lucide-react"; // ❤️ plain outline icon

const sentences = [
  "I want to work with you for…",
  "Overcoming anxiety and fear.",
  "Healing past trauma with compassion.",
  "Building healthy relationships.",
];

const AnimatedSentences = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % sentences.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-10 sm:h-12 overflow-hidden text-center">
      {sentences.map((sentence, i) => (
        <motion.div
          key={i}
          className="text-lg sm:text-xl font-bold text-cyan-100 absolute w-full flex items-center justify-center gap-2"
          initial={{ y: 40, opacity: 0 }}
          animate={{
            y: i === index ? 0 : 40,
            opacity: i === index ? 1 : 0,
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {i === 0 && <Heart className="w-5 h-5 text-white" />}
          {sentence}
        </motion.div>
      ))}
    </div>
  );
};

export default AnimatedSentences;

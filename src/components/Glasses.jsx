import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function GlassesIcon({
  size = 160,
  stroke = "currentColor",
  strokeWidth = 3,
}) {
  // one reusable "draw" variant so each piece animates in sequence
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i = 0) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 0.9, ease: "easeInOut", delay: i * 0.35 },
        opacity: { duration: 0.01, delay: i * 0.35 },
      },
    }),
  };

  return (
    <motion.svg
      ref={ref}
      viewBox="0 0 200 80"
      width={size}
      height={(size * 80) / 200}
      fill="none"
      role="img"
      aria-label="Animated glasses"
      className="text-mainBlack dark:text-mainWhite absolute right-3 bottom-0 h-10 w-10 animate-pulse sm:h-14 sm:w-14 md:h-16 md:w-16 lg:right-5 lg:bottom-2 lg:h-18 lg:w-18 xl:right-6 xl:h-24 xl:w-24"
    >
      {/* left temple */}
      <motion.line
        x1="35"
        y1="40"
        x2="6"
        y2="36"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={draw}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        custom={0}
      />

      {/* left round lens */}
      <motion.circle
        cx="60"
        cy="40"
        r="24"
        stroke={stroke}
        strokeWidth={strokeWidth}
        fill="none"
        variants={draw}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        custom={1}
      />

      {/* bridge */}
      <motion.line
        x1="84"
        y1="40"
        x2="106"
        y2="40"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        variants={draw}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        custom={2}
      />

      {/* right round lens */}
      <motion.circle
        cx="130"
        cy="40"
        r="24"
        stroke={stroke}
        strokeWidth={strokeWidth}
        fill="none"
        variants={draw}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        custom={3}
      />

      {/* right temple */}
      <motion.line
        x1="154"
        y1="40"
        x2="183"
        y2="36"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={draw}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        custom={4}
      />
    </motion.svg>
  );
}

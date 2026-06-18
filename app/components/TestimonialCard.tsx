"use client";

import { motion } from "framer-motion";

interface TestimonialCardProps {
  review: string;
  name: string;
  location: string;
  color: string;
  rotate: string;
  index: number;
}

const borderColors: Record<string, string> = {
  blue: "hover:border-blue-600",
  yellow: "hover:border-yellow-500",
  rose: "hover:border-rose-500",
  cyan: "hover:border-cyan-400",
};

const quoteColors: Record<string, string> = {
  blue: "group-hover:text-blue-600",
  yellow: "group-hover:text-yellow-500",
  rose: "group-hover:text-rose-500",
  cyan: "group-hover:text-cyan-400",
};

const animationVariants = [
  {
    x: "150%",
    y: "60%",
    rotate: 15,
  },
  {
    x: "30%",
    y: "60%",
    rotate: 5,
  },
  {
    x: "150%",
    y: "-40%",
    rotate: -5,
  },
  {
    x: "30%",
    y: "-40%",
    rotate: -15,
  },
];

const TestimonialCard = ({
  review,
  name,
  location,
  color,
  rotate,
  index,
}: TestimonialCardProps) => {
  const animation = animationVariants[index];

  return (
    <motion.div
      initial={{
        x: animation.x,
        y: animation.y,
        rotate: animation.rotate,
        scale: 0.75,
        opacity: 0,
      }}
      whileInView={{
        x: 0,
        y: 0,
        rotate: 0,
        scale: 1,
        opacity: 1,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.15,
        ease: "easeOut",
      }}
      className={`
        w-[85vw]
        sm:w-auto
        shrink-0
        snap-center
        group
        bg-white
        rounded-3xl
        p-5
        flex
        flex-col
        shadow-2xl
        border-b-4
        border-transparent
        transition-all
        duration-1200
        ease-out
        ${borderColors[color]}
        ${rotate}
      `}
    >
      <div className="flex-grow">
        <span
          className={`
            text-6xl
            text-gray-800
            font-serif
            leading-none
            h-6
            block
            transition-colors
            duration-700
            ${quoteColors[color]}
          `}
        >
          “
        </span>

        <p className="text-gray-700 text-md mt-3 mb-6">{review}</p>
      </div>

      <div>
        <h4 className="font-bold text-gray-900 text-sm sm:text-[15px]">
          {name}
        </h4>

        <span className="text-gray-500 text-xs sm:text-sm">{location}</span>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;

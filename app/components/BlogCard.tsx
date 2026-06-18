"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface BlogCardProps {
  title: string;
  description: string;
  image: string;
  height: string;
  index?: number;
}

const directions = [
  { x: "100%", y: "50%" }, // card 1
  { x: "100%", y: "-50%" }, // card 2
  { x: "0%", y: "50%" }, // card 3
  { x: "0%", y: "-50%" }, // card 4
  { x: "-100%", y: "50%" }, // card 5
  { x: "-100%", y: "-50%" }, // card 6
];

const BlogCard = ({
  title,
  description,
  image,
  height,
  index,
}: BlogCardProps) => {
  const isAnimated = index !== undefined;

  return (
    <motion.div
      initial={
        isAnimated
          ? {
              x: directions[index].x,
              y: directions[index].y,
              scale: 0.5,
              opacity: 0,
            }
          : false
      }
      whileInView={
        isAnimated
          ? {
              x: 0,
              y: 0,
              scale: 1,
              opacity: 1,
            }
          : undefined
      }
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={
        isAnimated
          ? {
              duration: 1.2,
              delay: 0.1 + index * 0.1,
              ease: "easeOut",
            }
          : undefined
      }
      className={`
  group
  relative
  overflow-hidden
  rounded-xl
  cursor-pointer
  shadow-lg
  hover:shadow-xl
  ${index !== undefined ? height : "h-72 sm:h-80"}
`}
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />

      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#003F6B] to-transparent translate-y-full transition-transform duration-700 group-hover:translate-y-0">
        <p className="text-white font-medium truncate">{description}</p>
      </div>
    </motion.div>
  );
};

export default BlogCard;

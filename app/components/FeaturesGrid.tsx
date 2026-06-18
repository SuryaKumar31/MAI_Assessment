"use client";

import { motion } from "framer-motion";
import { features } from "../utils/data";
import { useIsDesktop } from "../hooks/useIsDesktop";

const directions = [
  { x: "50%", y: "50%" },
  { x: "-50%", y: "50%" },
  { x: "50%", y: "-50%" },
  { x: "-50%", y: "-50%" },
];

const getVariant = (index: number) => ({
  hidden: {
    x: directions[index].x,
    y: directions[index].y,
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.2,
      delay: 0.2 + index * 0.15,
      ease: "easeOut",
    },
  },
});

const FeaturesGrid = () => {
  const isDesktop = useIsDesktop();

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 mt-4">
        {features.map((feature, index) => (
          <motion.div
            key={feature.id}
            // variants={getVariant(index)}
            // initial="hidden"
            // whileInView="visible"
            variants={isDesktop ? getVariant(index) : undefined}
            initial={isDesktop ? "hidden" : false}
            whileInView={isDesktop ? "visible" : undefined}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className={`
              flex flex-col relative
              ${
                index === 0
                  ? "border-b border-gray-200 md:border-r p-6 md:pl-0"
                  : ""
              }
              ${index === 1 ? "border-b border-gray-200 p-6 md:pr-0" : ""}
              ${
                index === 2
                  ? "border-b border-gray-200 md:border-b-0 md:border-r p-6 md:pl-0 md:pb-0"
                  : ""
              }
              ${index === 3 ? "p-6 md:pr-0 md:pb-0" : ""}
            `}
          >
            <div className="relative mb-3 mt-3 md:mt-0 md:mb-5">
              <span
                className="absolute -left-3 md:left-8 -top-8 md:top-2 text-[100px] opacity-90 z-0 select-none leading-none tracking-tighter"
                style={{
                  color: feature.bgColor,
                }}
              >
                {feature.id}
              </span>

              <h3 className="relative z-10 pt-6 md:pt-14 text-[1.1rem] md:text-2xl font-bold text-gray-800">
                {feature.title}
              </h3>
            </div>

            <p className="relative z-10 text-sm md:text-[15px] leading-relaxed text-gray-500">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesGrid;

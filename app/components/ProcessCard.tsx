import Image from "next/image";
import { motion } from "framer-motion";

type ProcessCardProps = {
  id: number;
  title: string;
  image: string;
  description: string;
  index: number;
};

const delays = [0.2, 0.45, 0.7, 0.95];

const ProcessCard = ({
  id,
  title,
  image,
  description,
  index,
}: ProcessCardProps) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: window.innerWidth >= 768 ? -80 : 0,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 1,
        delay: delays[index],
        ease: "easeOut",
      }}
      className="flex flex-col items-center relative"
    >
      {/* Image */}
      <div className="relative w-24 h-24 mx-auto mb-6 shrink-0 z-10 group">
        <div className="relative w-full h-full rounded-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>

        <div className="absolute top-0 -right-1 w-6 h-6 bg-[#0C7A56] text-white rounded-full flex items-center justify-center text-[12px] font-bold shadow-md">
          {id}
        </div>
      </div>

      {/* Content */}
      <div className="px-3 bg-[#F2F6FB] md:bg-transparent py-3 md:py-0 rounded-xl md:rounded-none text-center">
        <h4 className="text-[17px] font-bold text-[#333333] mb-3 leading-snug">
          {title}
        </h4>

        <p className="text-[14px] md:text-[15px] text-gray-500 leading-relaxed max-w-[360px] mx-auto">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default ProcessCard;

import Image from "next/image";
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";

type ProjectCardProps = {
  image: string;
  category: string;
  title: string;
  location: string;
  status?: string;
  hoverColor: string;
  index: number;
};

const ProjectCard = ({
  image,
  category,
  title,
  location,
  status = "Active",
  hoverColor,
  index,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 80,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.8,
        delay: index * 0.25,
        ease: "easeOut",
      }}
      whileHover={{
        borderBottomColor: hoverColor,
        boxShadow: `0 18px 35px -10px ${hoverColor}55`,
        transition: {
          duration: 0.15,
        //   delay: 0.15,
          ease: "easeOut",
        },
      }}
      className="
    group
    bg-white
    rounded-3xl
    overflow-hidden
    cursor-pointer
    shadow-[0_4px_24px_rgba(0,0,0,0.04)]
    border-b-4
    border-transparent
  "
    >
      {/* Image */}
      <div className="relative h-55 rounded-t-3xl overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute top-4 right-4 bg-[#064e3b]/85 backdrop-blur-sm px-3.5 py-1 rounded-full flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#34d399]" />
          <span className="text-white text-[11px] font-semibold">{status}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col grow">
        <span className="text-[#0F7BA2] text-[11px] uppercase tracking-wider font-medium mb-2">
          {category}
        </span>

        <h3 className="text-[18px] font-bold text-[#333] mb-2 truncate">
          {title}
        </h3>

        <div className="">
          <div className="h-px bg-gray-100 mb-4" />

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-[#6788AA]">
              <MapPin size={18} />
              <span className="text-sm font-medium">{location}</span>
            </div>

            <span className="font-bold text-[#008000] text-[14px] shrink-0 font-sans">
              Flexible
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

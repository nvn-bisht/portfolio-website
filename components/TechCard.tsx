import { cn } from "@/lib/utils";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

interface TechCardProps {
  title: string;
  className: string;
  tech: { name: string; image: string }[];
}

const Skills = ({ title, tech, className }: TechCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className=" flex flex-col justify-center items-center"
    >
      <div className="relative flex justify-between  items-center flex-col w-full max-w-1100 gap-6 md:flex-col">
        <div className="w-full  flex flex-wrap  justify-center mt-5 gap-5">
          <div
            className={cn(
              "w-full  max-w-500 bg-card border border-purple-600 shadow-md  rounded-xl py-6 px-14 md:max-w-400 md:px-10 md:py-4 sm:max-w-330 sm:px-10 sm:py-3 glow-border h-full",
              className
            )}
          >
            <h2 className="text-2xl font-semibold text-secondary text-center mb-4">
              {title}
            </h2>
            <div className="flex justify-center mb-5 h-full flex-wrap gap-4">
              {tech.map((item, i) => (
                <div
                  key={i}
                  className="text-lg font-normal text-primary-80 border border-primary-80 rounded-lg py-3 px-4 flex items-center gap-2 md:text-base  border-purple-500 md:py-2 md:px-3 sm:text-base sm:py-2 sm:px-3 glow-border hover:scale-[1.1] transition-all"
                >
                  <div className="relative w-8 h-8">
                    <Image
                      src={item?.image}
                      alt={item.name}
                      className="object-contain"
                      fill
                    />
                  </div>

                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;

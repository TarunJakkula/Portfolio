import { useState } from "react";
import { motion, useMotionValue } from "framer-motion";

type CardProps = {
  title: string;
  data: {
    icon: string;
    techName: string;
  }[];
};

export default function Card({ title, data }: CardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Size of the orange circle
  const circleSize = 80;

  return (
    <div className="flex md:w-auto w-full justify-center ">
      <div className="relative sm:w-[300px] w-[80%] ">
        <motion.div
          className="h-20 w-20 rounded-full bg-[#eb5e28] absolute"
          style={{ x, y }}
          animate={{ opacity: isHovered ? 1 : 0 }}
        />
        <motion.div
          className="relative flex flex-col lg:gap-5 gap-3 h-fit p-7 w-full bg-black shadow-2xl bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-15 rounded-lg"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const offsetX = e.clientX - rect.left;
            const offsetY = e.clientY - rect.top;

            // Set x and y to ensure the circle stays within the card
            x.set(
              Math.max(
                0,
                Math.min(rect.width - circleSize, offsetX - circleSize / 2)
              )
            );
            y.set(
              Math.max(
                0,
                Math.min(rect.height - circleSize, offsetY - circleSize / 2)
              )
            );
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <span className="poppins md:text-base text-sm text-center text-white">
            {title}
          </span>
          {data.map((obj, index) => (
            <div
              key={index}
              className="flex gap-5 justify-between items-center"
            >
              <code className="text-[#a2a2a2] md:text-sm text-xs">
                {obj.techName}
              </code>
              <div className="w-[40px] h-[40px] rounded-full bg-transparent flex justify-center items-center p-2">
                <img
                  src={obj.icon}
                  alt={obj.techName}
                  className="md:text-sm text-xs"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

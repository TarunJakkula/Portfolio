import { motion, useMotionValue } from "framer-motion";
import { useContext } from "react";
import { CursorContext } from "../../Layout";

type CardProps = {
  title: string;
  data: {
    icon: string;
    techName: string;
  }[];
};

export default function Card({ title, data }: CardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const { setCursorVariant } = useContext(CursorContext);
  // Size of the orange circle
  const circleSize = 80;

  return (
    <div
      className="flex w-full justify-center"
      onMouseEnter={() => setCursorVariant && setCursorVariant("text")}
      onMouseLeave={() => setCursorVariant && setCursorVariant("click")}
    >
      <motion.div
        className="relative flex flex-col lg:gap-5 gap-3 h-fit p-7 w-full bg-white hover:bg-black/50 hover:text-white text-black duration-500 transition-colors rounded-xl"
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
      >
        <span className="poppins md:text-base text-sm text-center ">
          {title}
        </span>
        {data.map((obj, index) => (
          <div key={index} className="flex gap-5 justify-between items-center">
            <code className=" md:text-sm text-xs">{obj.techName}</code>
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
  );
}

import { motion, useScroll, useTransform } from "framer-motion";
import { useContext, useRef } from "react";
import { experience } from "../util/staticData";
import { CursorContext } from "../Layout";

export default function Experience() {
  const { setCursorVariant } = useContext(CursorContext);
  const lineContainer = useRef(null);
  const { scrollYProgress } = useScroll({
    target: lineContainer,
    offset: ["start 80%", "end 80%"],
  });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      ref={lineContainer}
      id="experience"
      className=" w-[80%] h-auto py-12 md:gap-10 gap-5 md:pt-32 pt-20 relative flex"
    >
      <span
        className="text-vertical silkscreen lg:text-6xl md:text-4xl text-2xl h-fit font-bold strokeIt-white tracking-widest uppercase sticky top-32"
        onMouseEnter={() => setCursorVariant && setCursorVariant("text")}
        onMouseLeave={() => setCursorVariant && setCursorVariant("click")}
      >
        Experience
      </span>
      <div className="w-[6px]  bg-[#eb5f282a] relative ">
        <motion.div
          style={{ height }}
          className="absolute top-0 left-0 w-full bg-white"
        />
      </div>
      <div className="flex flex-col items-start md:py-10 py-5 md:gap-16 gap-5">
        {experience.map((obj, index) => {
          return (
            <div
              key={index}
              className="flex md:flex-row flex-col xl:gap-20 lg:gap-16 md:gap-12 gap-3"
            >
              <span className="silkscreen lg:text-9xl md:text-7xl text-5xl h-full leading-[0.5]  tracking-[-0.1em]">
                {index < 10 && "0"}
                <span className="drop-shadow-2xl text-white">
                  {experience.length - index}
                </span>
              </span>
              <div
                key={index}
                className="flex flex-col "
                onMouseEnter={() =>
                  setCursorVariant && setCursorVariant("text")
                }
                onMouseLeave={() =>
                  setCursorVariant && setCursorVariant("click")
                }
              >
                <span className="md:text-2xl text-lg poppins">
                  {obj.Company}
                </span>
                <span className="md:text-4xl text-xl text-white silkscreen ">
                  {obj.Role}
                </span>
                <span className="md:text-2xl text-lg poppins">{obj.Date}</span>
                <span className="md:text-md text-sm md:mt-3 mt-1 poppins">
                  {obj.Description}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

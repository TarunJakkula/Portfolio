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
      className=" w-[80%] h-auto py-12 md:gap-10 gap-5 relative flex"
    >
      <span
        className="text-vertical-reverse silkscreen lg:text-6xl md:text-4xl text-2xl h-fit font-bold strokeIt-black tracking-widest uppercase sticky top-32"
        onMouseEnter={() => setCursorVariant && setCursorVariant("text")}
        onMouseLeave={() => setCursorVariant && setCursorVariant("click")}
      >
        Experience
      </span>
      <div className="w-[6px] bg-black/30 relative ">
        <motion.div
          style={{ height }}
          className="absolute top-0 left-0 w-full bg-white"
        />
      </div>
      <div className="flex flex-col items-start md:py-10 py-5 md:gap-10 gap-5 w-full">
        {experience.map((obj, index) => {
          return (
            <>
              {index !== 0 && <div className="w-full h-[1px] bg-white/10" />}
              <div
                key={index}
                className="flex md:flex-row flex-col-reverse md:justify-between w-full xl:gap-20 lg:gap-16 md:gap-12 gap-6"
              >
                <div
                  key={index}
                  className="flex flex-col gap-5"
                  onMouseEnter={() =>
                    setCursorVariant && setCursorVariant("text")
                  }
                  onMouseLeave={() =>
                    setCursorVariant && setCursorVariant("click")
                  }
                >
                  <span className="md:text-xl text-lg poppins">
                    {obj.Company},{" "}
                    <span className=" md:text-sm text-sm">{obj.Date}</span>
                  </span>
                  <span className="md:text-5xl text-3xl text-white silkscreen ">
                    {obj.Role}
                  </span>
                  <ul className="md:text-md text-sm md:mt-3 mt-1 ml-5 space-y-2 poppins w-full max-w-[900px]">
                    {obj.Description.map((ele, index) => {
                      return (
                        <li className="list-disc" key={index}>
                          {ele}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <span className="silkscreen text-black/30 lg:text-9xl md:text-7xl text-5xl h-full leading-[0.5] tracking-[-0.1em]">
                  {index < 10 && "0"}
                  <span className="drop-shadow-2xl ">
                    {experience.length - index}
                  </span>
                </span>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

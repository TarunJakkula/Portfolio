import { projects } from "../util/staticData";
import { useContext, useState } from "react";
import { CursorContext } from "../Layout";

export default function Project() {
  const { setCursorVariant } = useContext(CursorContext);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleLeft = () => setActiveIndex((state) => Math.max(0, state - 1));
  const handleRight = () =>
    setActiveIndex((state) => Math.min(projects.length - 1, state + 1));

  return (
    <div
      id="projects"
      className="md:w-[80%] w-full h-auto md:gap-10 sm:gap-5 gap-1 flex flex-row-reverse justify-center py-20 relative"
    >
      <span
        className="md:block hidden text-vertical silkscreen lg:text-6xl md:text-4xl text-2xl h-fit font-bold strokeIt-black tracking-widest uppercase sticky top-32"
        onMouseEnter={() => setCursorVariant && setCursorVariant("text")}
        onMouseLeave={() => setCursorVariant && setCursorVariant("click")}
      >
        Projects
      </span>

      <div
        className={` flex-1 flex lg:flex-row-reverse md:gap-10 gap-5 flex-col justify-center h-auto relative overflow-hidden px-10`}
      >
        <div className="relative w-full max-w-[1000px] flex items-center">
          <div className="absolute top-0 left-0 h-full w-full hover:opacity-100 opacity-0 transition-opacity flex justify-between items-center">
            <button
              onClick={handleLeft}
              className="bg-white rounded-full shadow-xl text-black silkscreen text-2xl h-10 w-10 pr-1 -translate-x-5"
            >
              {"<"}
            </button>
            <button
              onClick={handleRight}
              className="bg-white rounded-full shadow-xl text-black silkscreen text-2xl h-10 w-10 pl-1 translate-x-5"
            >
              {">"}
            </button>
          </div>
          <img
            src={projects[activeIndex].Image}
            alt={projects[activeIndex].Name}
            className="w-full h-auto object-cover flex rounded-xl shadow-xl"
          />
        </div>
        <div
          className={` poppins p-2 lg:w-[600px] w-[400px] flex flex-col justify-center md:gap-5 gap-2`}
          onMouseEnter={() => setCursorVariant && setCursorVariant("text")}
          onMouseLeave={() => setCursorVariant && setCursorVariant("click")}
        >
          <p
            className={` gap-2 silkscreen w-[calc(100%-30px)] lg:text-3xl md:text-2xl sm:text-xl text-lg tracking-tighter`}
          >
            {projects[activeIndex].Name}
          </p>
          <div className="p-2 rounded-full bg-white w-fit flex gap-2 shadow-xl  ">
            {projects[activeIndex].Tech.map((innerObj, innerIndex) => {
              return (
                <img
                  key={innerIndex}
                  src={innerObj.Image}
                  alt={innerObj.Alt}
                  className="lg:h-6 h-5 lg:w-6 w-5 object-fill"
                />
              );
            })}
          </div>

          <div className="flex w-fit gap-5">
            {projects[activeIndex].Links.map((innerObj, innerIndex) =>
              innerObj.Link === "" ? (
                <p
                  key={innerIndex}
                  className={` md:text-lg text-sm md:cursor-none text-black`}
                  onMouseEnter={() =>
                    setCursorVariant && setCursorVariant("default")
                  }
                  onMouseLeave={() =>
                    setCursorVariant && setCursorVariant("text")
                  }
                >
                  <code>{innerObj.Name}</code>
                </p>
              ) : (
                <a
                  href={innerObj.Link}
                  key={innerIndex}
                  target="_blank"
                  className={`underline underline-offset-8 md:text-lg text-sm md:cursor-none`}
                  onMouseEnter={() =>
                    setCursorVariant && setCursorVariant("default")
                  }
                  onMouseLeave={() =>
                    setCursorVariant && setCursorVariant("text")
                  }
                >
                  <code>{innerObj.Name}</code>
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

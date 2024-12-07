import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { projects } from "../util/staticData";
import { useContext } from "react";
import { CursorContext } from "../Layout";

export default function Project() {
  const { setCursorVariant } = useContext(CursorContext);
  return (
    <div
      id="projects"
      className="w-[80%] md:h-screen h-[700px] md:gap-10 sm:gap-5 gap-1 flex justify-center items-center"
    >
      <span
        className="text-vertical font-bold strokeIt-white silkscreen lg:text-6xl md:text-4xl text-2xl tracking-widest uppercase"
        onMouseEnter={() => setCursorVariant && setCursorVariant("text")}
        onMouseLeave={() => setCursorVariant && setCursorVariant("click")}
      >
        Projects
      </span>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        mousewheel={true}
        direction="vertical"
        modules={[Mousewheel, Pagination]}
        className=" lg:w-full w-auto h-4/5"
      >
        {projects.map((obj, index) => {
          return (
            <SwiperSlide key={index} className="h-full flex items-center">
              <div
                className={`${
                  obj.Name === "Yaarit" || obj.Name === "Tsrtc Bus Tracking"
                    ? "text-black font-medium"
                    : "text-white"
                } w-full flex justify-center h-auto relative rounded-xl shadow-xl overflow-hidden group`}
              >
                <div className="absolute top-2 left-2 bg-[#c7342a] text-black poppins text-xl font-bold w-10 h-10 rounded-full flex justify-center items-center">
                  {index + 1}
                </div>
                <img
                  src={obj.ImageSmall}
                  alt={obj.Name}
                  className="w-auto md:h-[700px] h-[500px] object-cover lg:hidden"
                />
                <img
                  src={obj.Image}
                  alt={obj.Name}
                  className="w-full h-auto object-cover hidden lg:block"
                />
                <div
                  className={`${
                    obj.Name === "Yaarit" || obj.Name === "Tsrtc Bus Tracking"
                      ? "bg-white"
                      : "bg-black"
                  } shadow-2xl  bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-50 absolute poppins top-0 left-0 p-2 h-full w-full hover:opacity-100 opacity-0 transition-all duration-500 flex justify-center items-center md:gap-5 gap-2`}
                >
                  <div
                    className="flex flex-col justify-center items-center text-center"
                    onMouseEnter={() =>
                      setCursorVariant && setCursorVariant("text")
                    }
                    onMouseLeave={() =>
                      setCursorVariant && setCursorVariant("click")
                    }
                  >
                    <span className=" lg:text-3xl md:text-2xl sm:text-xl text-lg tracking-tighter">
                      {obj.Name}
                    </span>
                    <span className="lg:text-xl md:text-md text-sm flex md:flex-row flex-col items-center justify-center md:gap-5 gap-2">
                      Technologies used:{" "}
                      <div className="flex gap-2">
                        {obj.Tech.map((innerObj, innerIndex) => {
                          return (
                            <img
                              key={innerIndex}
                              src={innerObj.Image}
                              alt={innerObj.Alt}
                              className="lg:h-8 h-5 lg:w-8 w-5 object-fill"
                            />
                          );
                        })}
                      </div>
                    </span>
                    <div className="flex w-fit gap-5">
                      {obj.Links.map((innerObj, innerIndex) => {
                        return (
                          <a
                            href={innerObj.Link}
                            key={innerIndex}
                            target="_blank"
                            className={`${
                              obj.Name === "Yaarit" ||
                              obj.Name === "Tsrtc Bus Tracking"
                                ? "text-blue-900 font-medium underlined-dark-blue"
                                : "text-blue-400 underlined-light-blue"
                            } md:text-lg text-sm md:cursor-none`}
                            onMouseEnter={() =>
                              setCursorVariant && setCursorVariant("default")
                            }
                            onMouseLeave={() =>
                              setCursorVariant && setCursorVariant("text")
                            }
                          >
                            <code>{innerObj.Name}</code>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

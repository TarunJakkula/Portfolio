import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-creative";

import { projects } from "../util/staticData";

export default function Project() {
  return (
    <div
      id="projects"
      className="w-full h-auto md:py-10 py-5 md:gap-10 gap-3 md:pt-32 pt-20 flex justify-center items-center"
    >
      <span className="text-vertical font-bold strokeIt-white poppins lg:text-6xl md:text-4xl text-2xl tracking-widest uppercase">
        Projects
      </span>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[Pagination, EffectCreative]}
        className=" md:w-full w-[70%]"
      >
        {projects.map((obj, index) => {
          return (
            <SwiperSlide key={index} className=" mb-10">
              <div
                className={`${
                  obj.Name === "Yaarit" || obj.Name === "Tsrtc Bus Tracking"
                    ? "text-black font-medium"
                    : "text-white"
                } w-full flex justify-center h-auto relative rounded-xl overflow-hidden group`}
              >
                <div className="absolute top-2 left-2 bg-[#eb5e28] text-black poppins text-xl font-bold w-10 h-10 rounded-full flex justify-center items-center">
                  {index + 1}
                </div>
                <img
                  src={obj.ImageSmall}
                  alt={obj.Name}
                  className="w-full h-auto object-cover sm:hidden"
                />
                <img
                  src={obj.Image}
                  alt={obj.Name}
                  className="w-full h-auto object-cover hidden sm:block"
                />
                <div
                  className={`${
                    obj.Name === "Yaarit" || obj.Name === "Tsrtc Bus Tracking"
                      ? "bg-white"
                      : "bg-black"
                  } shadow-2xl  bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-50 absolute poppins top-0 left-0 p-2 h-full w-full hover:opacity-100 opacity-0 transition-all duration-500 flex flex-col justify-center items-center text-center md:gap-5 gap-2`}
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
                            className="lg:h-8 h-5 w-auto"
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
                              ? "text-blue-900 font-medium"
                              : "text-blue-400"
                          } underline underline-offset-8 md:text-lg text-sm`}
                        >
                          <code>{innerObj.Name}</code>
                        </a>
                      );
                    })}
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

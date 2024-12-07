import { useContext } from "react";
import profilePic from "../assets/profile-pic.webp";
import { CursorContext } from "../Layout";

export default function Intro() {
  const { setCursorVariant } = useContext(CursorContext);

  return (
    <div className="flex xl:flex-row flex-col-reverse w-[80%] h-auto md:py-10 py-5 px-1 xl:py-32 gap-5 justify-between items-center ">
      <div className="flex flex-col md:gap-10 gap-5 max-w-[800px]">
        <span
          className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl silkscreen w-fit"
          onMouseEnter={() => setCursorVariant && setCursorVariant("text")}
          onMouseLeave={() => setCursorVariant && setCursorVariant("click")}
        >
          Hi, I'm Tarun
        </span>
        <span className=" md:text-base sm:text-sm text-xs leading-loose text-pretty text-white silkscreen">
          I am a{" "}
          <span className="font-bold uppercase">fullstack developer</span> with
          a strong background in computer science, experienced in managing web
          applications. I have worked on projects using{" "}
          <span className="font-bold uppercase">MERN Stack</span> and{" "}
          <span className="font-bold uppercase">Nextjs.</span> I thrive in
          collaborative environments and am committed to staying at the
          forefront of development trends.
        </span>
        <div className="flex items-center flex-wrap md:gap-5 gap-1">
          <a
            href="https://drive.google.com/uc?export=download&id=1-gVPerdDVDPED4DHD--tegDGPS60gMX1"
            download={true}
            onMouseEnter={() => setCursorVariant && setCursorVariant("default")}
            onMouseLeave={() => setCursorVariant && setCursorVariant("click")}
            className="bg-white rounded-full text-black poppins shadow-2xl w-fit py-3 px-5 sm:text-sm text-xs cursor-none"
          >
            Download Resume
          </a>
          <a
            href="#footer"
            onMouseEnter={() => setCursorVariant && setCursorVariant("default")}
            onMouseLeave={() => setCursorVariant && setCursorVariant("click")}
            className="bg-transparent rounded-full text-white drop-shadow-2xl poppins w-fit p-3 sm:text-sm text-xs cursor-none"
          >
            Contact Me
          </a>
        </div>
      </div>

      <img
        src={profilePic}
        alt=""
        className=" md:h-[400px] sm:h-[300px] h-[200px] w-auto object-cover rounded-full "
      />
    </div>
  );
}

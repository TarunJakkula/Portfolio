import profilePic from "../assets/profile-pic.webp";

export default function Intro() {
  return (
    <div className="flex xl:flex-row flex-col-reverse w-full h-auto md:py-10 py-5 px-1 xl:pt-32 gap-5 justify-between items-center">
      <div className="flex flex-col md:gap-10 gap-5">
        <span className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl poppins">
          Hi, I'm Tarun
        </span>
        <code className=" md:text-lg sm:text-sm text-xs leading-loose font-extralight text-[#9e9e9e] max-w-[1000px]">
          I am a{" "}
          <code className="font-bold uppercase text-[#eb5e28]">
            fullstack developer
          </code>{" "}
          with a strong background in computer science, experienced in managing
          web applications. I have worked on projects using{" "}
          <code className="font-bold uppercase text-[#eb5e28]">MERN Stack</code>{" "}
          and{" "}
          <code className="font-bold uppercase text-[#eb5e28]">Nextjs.</code> I
          thrive in collaborative environments and am committed to staying at
          the forefront of development trends.
        </code>
        <div className="flex items-center flex-wrap md:gap-5 gap-1">
          <a
            href="https://drive.google.com/uc?export=download&id=1-gVPerdDVDPED4DHD--tegDGPS60gMX1"
            download={true}
            className="bg-white rounded-full text-black poppins shadow-2xl w-fit py-3 px-5 sm:text-sm text-xs"
          >
            Download Resume
          </a>
          <a
            href="#footer"
            className="bg-transparent rounded-full text-white drop-shadow-2xl poppins w-fit p-3 sm:text-sm text-xs"
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

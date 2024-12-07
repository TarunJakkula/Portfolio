import { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Github from "../assets/icons/githubLogo.svg";
import Linkedin from "../assets/icons/LI-In-Bug.png";
import { CursorContext } from "../Layout";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { setCursorVariant } = useContext(CursorContext);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuVariants = {
    open: { x: 0 },
    closed: { x: "100%" },
  };

  return (
    <div className="sticky md:mt-16 mt-8 md:top-16 top-8 flex justify-center items-center z-[2]">
      <header className=" md:w-fit w-full flex md:justify-center justify-between items-center shadow-2xl md:gap-10 gap-5 text-base md:py-5 py-3 md:px-10 sm:px-7 px-5 bg-neutral-50 rounded-full poppins">
        <a
          href="#main"
          onMouseEnter={() => setCursorVariant && setCursorVariant("default")}
          onMouseLeave={() => setCursorVariant && setCursorVariant("click")}
          className="poppins md:text-base text-sm uppercase tracking-wide font-medium text-black md:cursor-none"
        >
          tarun jakkula
        </a>
        <a
          href="#experience"
          onMouseEnter={() => setCursorVariant && setCursorVariant("default")}
          onMouseLeave={() => setCursorVariant && setCursorVariant("click")}
          className="text-[#c7342a] underlined md:text-base sm:text-sm text-xs md:block hidden md:cursor-none"
        >
          experience
        </a>
        <a
          href="#projects"
          onMouseEnter={() => setCursorVariant && setCursorVariant("default")}
          onMouseLeave={() => setCursorVariant && setCursorVariant("click")}
          className="text-[#c7342a] underlined md:text-base sm:text-sm text-xs md:block hidden md:cursor-none"
        >
          projects
        </a>
        <a
          href="https://github.com/TarunJakkula"
          target="_blank"
          rel="noreferrer"
          onMouseEnter={() => setCursorVariant && setCursorVariant("default")}
          onMouseLeave={() => setCursorVariant && setCursorVariant("click")}
          className="md:block hidden md:cursor-none"
        >
          <img src={Github} alt="GitHub" width={"20px"} height={"25px"} />
        </a>
        <a
          href="https://www.linkedin.com/in/tarun-jakkula"
          target="_blank"
          rel="noreferrer"
          onMouseEnter={() => setCursorVariant && setCursorVariant("default")}
          onMouseLeave={() => setCursorVariant && setCursorVariant("click")}
          className="md:block hidden md:cursor-none"
        >
          <img src={Linkedin} alt="LinkedIn" width={"25px"} height={"25px"} />
        </a>
        <button
          className="p-1 rounded-full flex justify-center items-center md:hidden md:cursor-none"
          onMouseEnter={() => setCursorVariant && setCursorVariant("default")}
          onMouseLeave={() => setCursorVariant && setCursorVariant("click")}
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#000"
          >
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
        </button>
      </header>

      {/* Hamburger Menu */}
      <motion.div
        className="fixed top-0 right-0 bottom-0 w-full z-[5] bg-white backdrop-filter backdrop-blur-3xl bg-opacity-100 flex flex-col justify-center items-center gap-1 md:hidden poppins"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
        transition={{ type: "spring", stiffness: 500, damping: 50 }}
      >
        <div
          className="p-5 flex justify-center items-center absolute top-3 left-3"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#000"
          >
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          </svg>
        </div>
        <a
          href="#main"
          className="silkscreen text-4xl leading-none tracking-wider text-center font-medium text-black mb-8"
          onClick={toggleMenu}
        >
          tarun jakkula
        </a>
        <a
          href="#experience"
          className="text-[#c7342a] underlined text-center text-2xl mb-6"
          onClick={toggleMenu}
        >
          experience
        </a>
        <a
          href="#projects"
          className="text-[#c7342a] underlined text-center text-2xl mb-6"
          onClick={toggleMenu}
        >
          projects
        </a>
        <div className="flex gap-5">
          <a
            href="https://github.com/TarunJakkula"
            target="_blank"
            rel="noreferrer"
            className="mb-6"
            onClick={toggleMenu}
          >
            <img src={Github} alt="GitHub" width={"45px"} height={"45px"} />
          </a>
          <a
            href="https://www.linkedin.com/in/tarun-jakkula"
            target="_blank"
            rel="noreferrer"
            onClick={toggleMenu}
          >
            <img src={Linkedin} alt="LinkedIn" width={"50px"} height={"55px"} />
          </a>
        </div>
      </motion.div>
    </div>
  );
}

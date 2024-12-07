import App from "./Page";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import useMouse from "./util/hooks/Mouse";
import debounce from "./util/debounce";

type CursorVaraints = "default" | "click" | "text";

type CursorContextType = {
  setCursorVariant: Dispatch<SetStateAction<CursorVaraints>> | undefined;
};

export const CursorContext = createContext<CursorContextType>({
  setCursorVariant: undefined,
});

export default function RootLayout() {
  const { scrollY } = useScroll();
  const [isXL, setIsXL] = useState(window.innerWidth >= 1280);
  const [cursorVariant, setCursorVariant] = useState<CursorVaraints>("default");
  const mouse = useMouse();
  const lastMousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (mouse.x !== null && mouse.y !== null)
      lastMousePosition.current = { x: mouse.x, y: mouse.y };
  }, [mouse.x, mouse.y]);

  const common = {
    opacity: 1,
    height: 80,
    width: 80,
    x: (mouse.x ?? lastMousePosition.current.x) - 40,
    y: (mouse.y ?? lastMousePosition.current.y) - 40,
    transition: { duration: 0.2 },
  };

  const variants = {
    default: {
      ...common,
      scale: 0.25,
    },
    text: {
      ...common,
      scale: 1,
    },
    click: {
      ...common,
      scale: 0.5,
    },
  };

  useEffect(() => {
    const updateIsXL = () => {
      setIsXL(window.innerWidth >= 1280);
    };
    const debouncedUpdate = debounce(updateIsXL, 100);

    window.addEventListener("resize", debouncedUpdate);
    return () => window.removeEventListener("resize", debouncedUpdate);
  }, []);

  const width = useTransform(
    scrollY,
    [0, isXL ? 300 : 200],
    [isXL ? "90%" : "95%", "100%"]
  );
  const borderRadius = useTransform(
    scrollY,
    [0, isXL ? 300 : 200],
    [isXL ? 50 : 30, 0]
  );
  const opacity = useTransform(scrollY, [0, isXL ? 300 : 200], [0.7, 0]);

  return (
    <CursorContext.Provider value={{ setCursorVariant }}>
      <motion.div
        variants={variants}
        className="z-[100] fixed top-0 left-0 h-3 w-3 bg-white mix-blend-exclusion border rounded-full pointer-events-none "
        animate={cursorVariant}
        transition={{
          type: "tween",
          duration: 0.01,
        }}
      />
      <motion.span
        style={{ opacity }}
        className="fixed top-0 left-0 xl:text-8xl text-black text-6xl poppins font-semibold flex justify-center items-center w-full p-24 xl:px-36 lg:px-20 md:px-16 px-12 "
      >
        <span
          onMouseEnter={() => setCursorVariant("text")}
          onMouseLeave={() => setCursorVariant("default")}
        >
          Portfolio
        </span>
      </motion.span>
      <motion.div
        style={{ width, borderRadius }}
        id="main"
        onMouseEnter={() => setCursorVariant("click")}
        onMouseLeave={() => setCursorVariant("default")}
        className="min-h-screen h-auto xl:mt-[300px] mt-[200px] flex flex-col items-center lg:py-10 md:py-7 py-5 bg-[#c7342a] noise relative"
      >
        <App />
      </motion.div>
    </CursorContext.Provider>
  );
}

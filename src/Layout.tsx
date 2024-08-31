import App from "./Page";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function RootLayout() {
  const { scrollY } = useScroll();
  const [isXL, setIsXL] = useState(window.innerWidth >= 1280);

  // Update isXL on window resize
  useEffect(() => {
    const updateIsXL = () => {
      setIsXL(window.innerWidth >= 1280);
    };

    window.addEventListener("resize", updateIsXL);
    return () => window.removeEventListener("resize", updateIsXL);
  }, []);

  // Define transform values based on screen size
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
  const opacity = useTransform(scrollY, [0, isXL ? 300 : 200], [0.5, 0]);

  return (
    <>
      <motion.span
        style={{ opacity }}
        className="fixed top-0 left-0 xl:text-8xl text-6xl poppins font-semibold -z-[1] flex justify-center items-center w-full p-24 xl:px-36 lg:px-20 md:px-16 px-12 "
      >
        Portfolio
      </motion.span>
      <motion.div
        style={{ width, borderRadius }}
        id="main"
        className="min-h-screen h-auto xl:mt-[300px] mt-[200px] flex flex-col items-center lg:p-10 md:p-7 p-5 bg-[#252422] relative"
      >
        <App />
      </motion.div>
    </>
  );
}

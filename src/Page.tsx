import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Project from "./components/Project";
import Technologies from "./components/Technologies";

export default function Page() {
  return (
    <>
      <Header />
      <div className="text-white flex flex-col w-full justify-center items-center">
        <Intro />
        <Technologies />
        <Experience />
        <Project />
      </div>
      <Footer />
    </>
  );
}

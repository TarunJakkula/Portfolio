import EmblaCarousel from "./Project/EmblaCarousel.jsx";
import { useInView } from "react-intersection-observer";

const OPTIONS = { containScroll: "trimSnaps" };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

function PROJECT({ project }) {
  const [Href] = useInView({ threshold: 0.1 });
  const [Bref] = useInView({ threshold: 0.1 });

  return (
    <div ref={project} className="project flex flex-col">
      <div className={`project-heading `} ref={Href}>
        <span className="NAME size-medium">My Projects</span>
      </div>
      <div className={`project-carousel `} ref={Bref}>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
    </div>
  );
}

export default PROJECT;

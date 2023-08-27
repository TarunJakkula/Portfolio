import EmblaCarousel from "./Project/EmblaCarousel.jsx";
import { useInView } from "react-intersection-observer";

const OPTIONS = { containScroll: "trimSnaps" };
const SLIDE_COUNT = 2;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

function PROJECT({ project }) {
  const [Href, HinView] = useInView({ threshold: 0.1 });
  const [Bref, BinView] = useInView({ threshold: 0.1 });

  return (
    <div ref={project} className="project">
      <div>
        <div
          className={`project-heading opacity-0 ${HinView && "fade-in"}`}
          ref={Href}
        >
          <span className="NAME size-medium">Projects</span>
        </div>
        <div
          className={`project-carousel opacity-0 ${BinView && "fade-in"}`}
          ref={Bref}
        >
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </div>
      </div>
    </div>
  );
}

export default PROJECT;

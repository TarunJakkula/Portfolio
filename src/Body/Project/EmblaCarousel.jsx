import tsrtc from "./public/img1.png";
import conditional from "./public/img2.png";
import ecommerece from "./public/img3.png";
import yaarit from "./public/img4.png";
import apd from "./public/img5.png";
import github from "./public/github-mark.svg";
import useEmblaCarousel from "embla-carousel-react";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";

const EmblaCarousel = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const images = [apd, yaarit, ecommerece, tsrtc, conditional];
  const description = [
    [
      "Autonomous Pesticide Deployement",
      "NextJS, Flask, Reienforcement learning",
    ],
    ["Yaarit", "MERN Stack"],
    ["ECommerce Replica", "ReactJS"],
    ["TSRTC BUS TRACKING", "MERN Stack"],
    ["Condition Monitoring", "Machine Learning"],
  ];
  const links = [
    "https://github.com/TarunJakkula/APD_Nextjs",
    "https://github.com/TarunJakkula/yaarit_react",
    "https://github.com/TarunJakkula/ECommerceSampleProject",
    "https://github.com/TarunJakkula/Projects/tree/f4524670795164c7990998f81487a714842c2859/TSRTC%20BUS%20TRACKING",
    "https://github.com/TarunJakkula/Projects/tree/f4524670795164c7990998f81487a714842c2859/Condition%20Monitoring%20of%20Brake%20Disc%20Images%20using%20%20Convolutional%20Neural%20Network",
  ];
  const imageByIndex = (index) => images[index % images.length];

  return (
    <>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((index) => (
              <div className="embla__slide" key={index}>
                <img
                  className="embla__slide__img"
                  src={imageByIndex(index)}
                  alt="Your alt text"
                />
                <div className="embla__slide__description">
                  <span className="NAME black size-medium2">
                    {description[index][0]}
                  </span>
                  <br />
                  <span className="NAME black size-smol">
                    {"("}
                    {description[index][1]}
                    {")"}
                  </span>
                  <br />
                  <a
                    href={links[index]}
                    target="_blank"
                    rel="noreferrer"
                    style={{ display: "grid", placeContent: "center" }}
                  >
                    <img src={github} alt="" className="link-carousel" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="embla__dots">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={"embla__dot".concat(
              index === selectedIndex ? " embla__dot--selected" : ""
            )}
          />
        ))}
      </div>
    </>
  );
};

export default EmblaCarousel;

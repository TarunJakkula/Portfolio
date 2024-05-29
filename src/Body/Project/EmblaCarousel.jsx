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
      ["Autonomous Pesticide Deployement", "https://apd-nextjs.vercel.app/"],
      "NextJS, Flask, Reienforcement learning",
    ],
    [["Yaarit", "https://yaarit-react.vercel.app/"], "MERN Stack"],
    [
      [
        "ECommerce Replica",
        "https://tarunjakkula.github.io/ECommerceSampleProject/",
      ],
      "ReactJS",
    ],
    [["TSRTC BUS TRACKING", null], "MERN Stack"],
    [
      [
        "Condition Monitoring",
        "https://ieeexplore.ieee.org/abstract/document/10112491",
      ],
      "Machine Learning",
    ],
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
                  <a
                    href={description[index][0][1]}
                    target="_blank"
                    className="NAME black size-medium2"
                    rel="noreferrer"
                  >
                    {description[index][0][0]}
                    {description[index][0][1] && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#000000"
                      >
                        <path d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z" />
                      </svg>
                    )}
                  </a>

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

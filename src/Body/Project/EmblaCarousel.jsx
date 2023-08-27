import image1 from "./public/img1.png";
import image2 from "./public/img2.png";
import github from "./public/github-mark.svg";
import useEmblaCarousel from "embla-carousel-react";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";

const EmblaCarousel = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const images = [image1, image2];
  const description = [
    ["TSRTC BUS TRACKING ", " MERN Stack"],
    ["Condition Monitoring ", " Machine Learning"],
  ];
  const links = [
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
                  <span className="NAME black size-medium1">
                    {description[index][0]}
                    {" - "}
                    {description[index][1]}
                  </span>
                  <div>
                    <span className="NAME black size-smol">
                      View the Project on{" "}
                    </span>
                    <a href={links[index]} target="_blank" rel="noreferrer">
                      <img src={github} alt="" className="link-carousel" />
                    </a>
                  </div>
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

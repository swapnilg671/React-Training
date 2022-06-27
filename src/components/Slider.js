import SliderData from "../Resources/SliderData";
import React, { useState } from "react";
import "./Slider.css";
import SliderBtn from "../components/SliderButton";
function Slider() {
  const [slideIndex, setSlideIndex] = useState(0);
  const nextSlide = () => {
    if (slideIndex !== SliderData.length - 1) {
      setSlideIndex(slideIndex + 1);
      console.log(slideIndex);
    } else if (slideIndex === SliderData.length - 1) {
      setSlideIndex(0);
      console.log(slideIndex);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 0) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 0) {
      setSlideIndex(SliderData.length - 1);
    }
  };

  return (
    <div>
      <div className="container-slider">
        {SliderData.map(({ image, id }) => (
          <div
            key={id}
            className={slideIndex === id ? "slide active-anim" : "slide"}
          >
            <SliderBtn moveSlide={prevSlide} direction="previous" />
            <img src={SliderData[slideIndex].image} alt="image slider" />

            <SliderBtn moveSlide={nextSlide} direction="next" />
          </div>
        ))}
      </div>
      <div className="container-dots">
        {Array.from({ length: 5 }).map((item, index) => (
          <div
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? "dot active" : "dot"}
          ></div>
        ))}
      </div>{" "}
    </div>
  );
}
export default Slider;

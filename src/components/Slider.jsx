import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import { ApiSlides } from "../apifolder/SliderApi";

export default function Slider() {
  //useState hooks
  const [slides] = useState(ApiSlides);
  const [activeSlide, setActiveSlide] = useState(0);

  //style for arrows on the bothside of the page
  const arrowStyle =
    "rounded-full bg-gray flex justify-center items-center shadow-sm hover:cursor-pointer";

  const nextSlide = () => {
    if (activeSlide === slides.length - 1) {
      setActiveSlide(0);
    } else {
      setActiveSlide(activeSlide + 1);
    }
  };

  const prvSlide = () => {
    if (activeSlide === 0) {
      setActiveSlide(slides.length - 1);
    } else {
      setActiveSlide(activeSlide - 1);
    }
  };

  return (
    <div className="parentDiv h-[540px] bg-white flex items-center justify-between">
      {/*leftarrow div*/}
      <div className={arrowStyle}>
        <ArrowLeftOutlined style={{ fontSize: "50px" }} onClick={prvSlide} />
      </div>
      {/*slide div*/}
      {slides.map((slide, index) => {
        if (index === activeSlide) {
          return (
            <div
              className={
                `wrapper flex w-[100%] h-[70%] justify-center items-center shadow-xl rounded-lg border-[#c0c0c0] border-10px overflow-hidden relative` +
                slide.background
              }
            >
              <div className="slide flex item-center justify-center h-[100%]">
                <div className="forImage flex flex-1 justify-center items-center h-[100%]">
                  <img
                    src={slide.src}
                    className="h-[100%] object-cover"
                    alt="photo of clothes"
                  />
                </div>
                <div className="description flex flex-col flex-1 place-item-start justify-center ml-11">
                  <h2 className="text-[35px]">{slide.content.h2}</h2>
                  <p>{slide.content.p}</p>
                  <button className="btn w-40 p-3">Shop Now</button>
                </div>
              </div>
            </div>
          );
        }
      })}
      {/*rightarrow div */}
      <div className={arrowStyle}>
        <ArrowRightOutlined style={{ fontSize: "50px" }} onClick={nextSlide} />
      </div>
    </div>
  );
}

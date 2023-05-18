import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import "./Gallary.css";

function ThumbnailPlugin(mainRef) {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove("active");
      });
    }
    function addActive(idx) {
      slider.slides[idx].classList.add("active");
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx);
        });
      });
    }

    slider.on("created", () => {
      if (!mainRef.current) return;
      addActive(slider.track.details.rel);
      addClickEvents();
      mainRef.current.on("animationStarted", (main) => {
        removeActive();
        const next = main.animator.targetIdx || 0;
        addActive(main.track.absToRel(next));
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
      });
    });
  };
}

const Gallary = () => {
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
  });
  const [thumbnailRef] = useKeenSlider(
    {
      initial: 0,
      slides: {
        perView: 4,
        spacing: 10,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  );
  return (
    <div className="bg-wildJoyColorTwo">
      <div className="max-w-7xl mx-auto pt-10 pb-10">
        <h2
          className="font-display text-5xl text-center mb-10
         text-wildJoyColorOne font-bold"
        >
          Wild Joy Toy Gallary
        </h2>
        <div ref={sliderRef} className="keen-slider">
          <div className=" keen-slider__slide number-slide1 p-5 md:p-20 rounded-xl  bg-wildJoyColorOne">
            <div className="image-container">
              <img
                className="rounded-xl image-full"
                src="https://img.freepik.com/free-photo/fluffy-toy-texture-close-up_23-2149686884.jpg?w=740&t=st=1684410025~exp=1684410625~hmac=8e3652206921eb28b9b1554659e3ce0bbd3b64a88b9f7283e3bd7f7e9797aeec"
                alt=""
              />
            </div>
          </div>
          <div className=" keen-slider__slide number-slide2 p-5 md:p-20 rounded-xl  bg-wildJoyColorOne">
            <div className="image-container">
              <img
                className="rounded-xl image-full"
                src="https://img.freepik.com/free-photo/fluffy-toy-texture-close-up_23-2149686916.jpg?size=626&ext=jpg"
                alt=""
              />
            </div>
          </div>
          <div className=" keen-slider__slide number-slide3 p-5 md:p-20 rounded-xl  bg-wildJoyColorOne">
            <div className="image-container">
              <img
                className="rounded-xl image-full"
                src="https://img.freepik.com/free-photo/beautiful-portrait-incredible-charming-small-baby_1304-3878.jpg?size=626&ext=jpg"
                alt=""
              />
            </div>
          </div>
          <div className=" keen-slider__slide number-slide4 p-5 md:p-20 rounded-xl  bg-wildJoyColorOne">
            <div className="image-container">
              <img
                className="rounded-xl image-full"
                src="https://img.freepik.com/free-photo/fluffy-toy-texture-close-up_23-2149686890.jpg?size=626&ext=jpg"
                alt=""
              />
            </div>
          </div>
          <div className=" keen-slider__slide number-slide5 p-5 md:p-20 rounded-xl  bg-wildJoyColorOne">
            <div className="image-container">
              <img
                className="rounded-xl image-full"
                src="https://img.freepik.com/free-photo/fluffy-toy-texture-close-up_23-2149686920.jpg?t=st=1684378445~exp=1684379045~hmac=aaf4b88e07b5cf49261489380598a679b8e386996caeb166720855080edb81f3"
                alt=""
              />
            </div>
          </div>
          <div className=" keen-slider__slide number-slide5 p-6 md:p-20 rounded-xl  bg-wildJoyColorOne">
            <div className="image-container">
              <img
                className="rounded-xl image-full"
                src="https://img.freepik.com/free-photo/fluffy-toy-texture-close-up_23-2149686918.jpg?w=740&t=st=1684411207~exp=1684411807~hmac=9608ec3725a4bfc132ec553e3bacd7392a940fa23850c216f919a8a1c00e32bb"
                alt=""
              />
            </div>
          </div>
          
        </div>

        <div ref={thumbnailRef} className="keen-slider thumbnail">
          <div className="keen-slider__slide number-slide1 p-2 mt-2 rounded-xl bg-wildJoyColorOne">
            <img
              src="https://img.freepik.com/free-photo/fluffy-toy-texture-close-up_23-2149686884.jpg?w=740&t=st=1684410025~exp=1684410625~hmac=8e3652206921eb28b9b1554659e3ce0bbd3b64a88b9f7283e3bd7f7e9797aeec"
              alt=""
            />
          </div>
          <div className="keen-slider__slide number-slide2 p-2 mt-2 rounded-xl bg-wildJoyColorOne">
            <img
              src="https://img.freepik.com/free-photo/fluffy-toy-texture-close-up_23-2149686916.jpg?size=626&ext=jpg"
              alt=""
            />
          </div>
          <div className="keen-slider__slide number-slide3 p-2 mt-2 rounded-xl bg-wildJoyColorOne">
            <img
              src="https://img.freepik.com/free-photo/beautiful-portrait-incredible-charming-small-baby_1304-3878.jpg?size=626&ext=jpg"
              alt=""
            />
          </div>
          <div className="keen-slider__slide number-slide4 p-2 mt-2 rounded-xl bg-wildJoyColorOne">
            <img
              src="https://img.freepik.com/free-photo/fluffy-toy-texture-close-up_23-2149686890.jpg?size=626&ext=jpg"
              alt=""
            />
          </div>
          <div className="keen-slider__slide number-slide5 p-2 mt-2 rounded-xl bg-wildJoyColorOne">
            <img
              src="https://img.freepik.com/free-photo/fluffy-toy-texture-close-up_23-2149686920.jpg?t=st=1684378445~exp=1684379045~hmac=aaf4b88e07b5cf49261489380598a679b8e386996caeb166720855080edb81f3"
              alt=""
            />
          </div>
          <div className="keen-slider__slide number-slide6 p-2 mt-2 rounded-xl bg-wildJoyColorOne">
            <img
              src="https://img.freepik.com/free-photo/fluffy-toy-texture-close-up_23-2149686918.jpg?w=740&t=st=1684411207~exp=1684411807~hmac=9608ec3725a4bfc132ec553e3bacd7392a940fa23850c216f919a8a1c00e32bb"
              alt=""
            />
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Gallary;

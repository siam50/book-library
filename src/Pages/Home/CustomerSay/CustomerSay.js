import React from "react";
import ReviewSlider from "./ReviewSlider";

const CustomerSay = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-easing="ease-in-out"
      className="py-10 md:py-32"
    >
      <div
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        className="max-w-2xl mx-auto text-center"
      >
        <h2
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          className="text-3xl font-bold leading-tight text-blue-500 sm:text-4xl lg:text-5xl"
        >
          Customer Say
        </h2>
        <p
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          className="mt-3 text-xl leading-relaxed text-gray-600 md:mt-8"
        >
          Lorem Ipsum Illia kar non deserunt ullamco est sit aliqua dolor do
          amet sint. Velit officia consequat duis.
        </p>
      </div>
      <div
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        className="py-0 md:py-10"
      >
        <ReviewSlider></ReviewSlider>
      </div>
    </div>
  );
};

export default CustomerSay;

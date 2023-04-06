import React from "react";
import ReviewSlider from "./ReviewSlider";

const CustomerSay = () => {
  return (
    <div class="py-10 bg-gray-100 sm:py-16 lg:py-20 my-12 md:my-20">
      <div class="max-w-2xl mx-auto text-center">
        <h2 class="text-3xl font-bold leading-tight text-accent sm:text-4xl lg:text-5xl">
          Customer Say
        </h2>
        <p class="mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis.
        </p>
      </div>
      <div className="py-0 md:py-10">
        <ReviewSlider></ReviewSlider>
      </div>
    </div>
  );
};

export default CustomerSay;

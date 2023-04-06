import React from "react";
import bannerAnnimation from "../../../assets/bannerAnnimation.json";
import Lottie from "lottie-react";

const Banner = () => {
  return (
    <div>
      <section className="pt-10 overflow-hidden bg-gray-50 md:pt-0 sm:pt-16 2xl:pt-16 my-10 md:my-20">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-center grid-cols-1 md:grid-cols-2">
            <div className="relative">
              <Lottie animationData={bannerAnnimation} className=" h-80" />
            </div>

            <div>
              <h2 className="text-3xl text-accent font-bold leading-tight sm:text-4xl lg:text-5xl">
                Hey 👋 Grow <br className="block sm:hidden" />
                Your Knowledge
              </h2>
              <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;

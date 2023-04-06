import React from "react";

const SliderBanner2 = () => {
  return (
    <div>
      <section class="relative py-10 overflow-hidden bg-black sm:py-16 lg:py-24 xl:py-32">
        <div class="absolute inset-0">
          <img
            class="object-cover w-full h-full md:object-left md:scale-150 md:origin-top-left"
            src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/5/girl-working-on-laptop.jpg"
            alt=""
          />
        </div>

        <div class="absolute inset-0 hidden bg-gradient-to-r md:block from-black to-transparent"></div>

        <div class="absolute inset-0 block bg-black/60 md:hidden"></div>

        <div class="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div class="text-center   ">
            <h2 class="text-3xl font-bold w-auto md:w-96 mx-auto  leading-tight text-white sm:text-4xl lg:text-5xl">
              Get full access to Celebration
            </h2>
            <p class="mt-4 text-base w-auto md:w-96 mx-auto text-gray-200">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam.
            </p>
            <button
              type="submit"
              class="inline-flex items-center justify-center flex-shrink-0 w-auto px-4 py-4 mt-4 font-semibold text-white transition-all duration-200 bg-accent border border-transparent rounded sm:w-auto"
            >
              Login Here
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SliderBanner2;

// md:w-2/3 lg:w-1/2 xl:w-1/3

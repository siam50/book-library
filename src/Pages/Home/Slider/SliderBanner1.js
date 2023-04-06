import React from "react";

const SliderBanner1 = () => {
  return (
    <div>
      <section class="relative py-10 overflow-hidden bg-black sm:py-16 lg:py-24 xl:py-32">
        <div class="absolute inset-0">
          <img
            class="object-cover w-full h-full md:object-left md:scale-150 md:origin-top-left"
            src="https://img.freepik.com/free-photo/girl-sitting-table-with-notebooks_23-2147657336.jpg"
            alt=""
          />
        </div>

        <div class="absolute inset-0 hidden bg-gradient-to-r md:block from-black to-transparent"></div>

        <div class="absolute inset-0 block bg-black/60 md:hidden"></div>

        <div class="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div class="text-center md:w-2/3 lg:w-1/2 xl:w-1/3  md:text-left">
            <h2 class="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Get full access to Celebration
            </h2>
            <p class="mt-4 text-base text-gray-200">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam.
            </p>

            <form action="#" method="POST" class="mt-8 lg:mt-12">
              <div class="flex flex-col items-center sm:flex-row sm:justify-center">
                <div class="flex-1 w-full min-w-0 px-4 sm:px-0">
                  <div class="relative text-gray-400 focus-within:text-gray-600">
                    <label for="email" class="sr-only"></label>
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter email address"
                      class="block w-full py-4 pl-10 pr-4 text-base text-black placeholder-gray-500 transition-all duration-200 border-gray-200 rounded-md sm:rounded-r-none caret-blue-600 focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  class="inline-flex items-center justify-center flex-shrink-0 w-auto px-4 py-4 mt-4 font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md sm:mt-0 sm:rounded-l-none sm:w-auto hover:bg-blue-700 focus:bg-blue-700"
                >
                  Get instant access
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SliderBanner1;

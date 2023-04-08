import React from "react";

const About = () => {
  return (
    <div>
      <div className="py-10 bg-white sm:py-16 lg:py-24">
        <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="mx-auto text-left md:max-w-lg lg:max-w-2xl md:text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
              We are providing a product that can{" "}
              <span className="relative inline-block">
                <span className="absolute inline-block w-full h-2 bg-blue-300 bottom-1.5"></span>
                <span className="relative"> solve customer's pain </span>
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 mt-8 md:mt-20 gap-y-6 md:grid-cols-2 gap-x-10">
            <div>
              <img
                className="w-full mx-auto sm:max-w-xs"
                src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/817hAO-SdEL._AC_UF1000,1000_QL80_.jpg"
                alt=""
              />
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Hey! We are BookStore, founder of Celebration.
              </h3>
              <p className="mt-4 text-lg text-gray-700">
                Lorem Ipsum Illia kar non deserunt ullamco est sit aliqua dolor
                do amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
              <p className="mt-4 text-lg text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>

              <h3 className="mt-8 text-lg font-semibold text-gray-900">
                How do we do this without any investment?
              </h3>
              <p className="mt-4 text-lg text-gray-700">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

import React from "react";
import {
  HiOutlineBolt,
  HiOutlineBookOpen,
  HiOutlineHandThumbUp,
  HiOutlineUsers,
} from "react-icons/hi2";

const TellOurStory = () => {
  return (
    <div>
      <div
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        className="pt-5 md:pt-24"
      >
        <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
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
              Numbers Tell Our Story
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

          <div className="">
            <div
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8"
            >
              <div
                data-aos="fade-up"
                data-aos-easing="ease-in-out"
                className="grid grid-cols-1 gap-6 px-6 mt-8 sm:px-0 lg:mt-16 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-12"
              >
                <div
                  data-aos="fade-up"
                  className="overflow-hidden bg-white border border-gray-200 rounded-lg"
                >
                  <div className="px-4 py-6">
                    <div className="flex items-start">
                      <HiOutlineBolt className="flex-shrink-0 w-12 h-12 text-blue-500" />
                      <div className="ml-4">
                        <h4 className="text-4xl font-bold text-gray-900">6+</h4>
                        <p className="mt-1.5 text-lg font-medium leading-tight text-gray-500">
                          Years in business
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  data-aos="fade-up"
                  data-aos-easing="ease-in-out"
                  className="overflow-hidden bg-white border border-gray-200 rounded-lg"
                >
                  <div className="px-4 py-6">
                    <div className="flex items-start">
                      <HiOutlineUsers className="flex-shrink-0 w-12 h-12 text-blue-500" />
                      <div className="ml-4">
                        <h4 className="text-4xl font-bold text-gray-900">
                          12+
                        </h4>
                        <p className="mt-1.5 text-lg font-medium leading-tight text-gray-500">
                          Library members
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  data-aos="fade-up"
                  data-aos-easing="ease-in-out"
                  className="overflow-hidden bg-white border border-gray-200 rounded-lg"
                >
                  <div className="px-4 py-6">
                    <div className="flex items-start">
                      <HiOutlineBookOpen className="flex-shrink-0 w-12 h-12 text-blue-500" />
                      <div className="ml-4">
                        <h4 className="text-4xl font-bold text-gray-900">
                          3,274
                        </h4>
                        <p className="mt-1.5 text-lg font-medium leading-tight text-gray-500">
                          Books delivered
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  data-aos="fade-up"
                  data-aos-easing="ease-in-out"
                  className="overflow-hidden bg-white border border-gray-200 rounded-lg"
                >
                  <div className="px-4 py-6">
                    <div className="flex items-start">
                      <HiOutlineHandThumbUp className="flex-shrink-0 w-12 h-12 text-blue-500" />
                      <div className="ml-4">
                        <h4 className="text-4xl font-bold text-gray-900">
                          95%
                        </h4>
                        <p className="mt-1.5 text-lg font-medium leading-tight text-gray-500">
                          Customer success
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TellOurStory;

<svg
  className="flex-shrink-0 w-12 h-12 text-blue-500"
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
>
  <path
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="1"
    d="M13 10V3L4 14h7v7l9-11h-7z"
  />
</svg>;

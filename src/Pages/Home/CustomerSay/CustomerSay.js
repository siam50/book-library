import React from "react";
import ReviewSlider from "./ReviewSlider";
import { HiStar } from "react-icons/hi2";
import { FaRegStar, FaStarHalfAlt } from "react-icons/fa";

const CustomerSay = () => {
  return (
    <div className="py-10 bg-gray-100 lg:py-16 my-12 md:my-20">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold leading-tight text-accent sm:text-4xl lg:text-5xl">
          Customer Say
        </h2>
        <p className="mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis.
        </p>
      </div>
      {/* <div className="py-0 md:py-10">
        <ReviewSlider></ReviewSlider>
      </div> */}
      <div className="grid grid-cols-4 gap-3 py-0 md:py-10">
        <div className="container border-2 border-blue-200 bg-white flex flex-col w-full max-w-lg p-6 mx-auto rounded-md  text-black">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              <div>
                <img
                  src="https://hips.hearstapps.com/hmg-prod/images/gettyimages-693134468.jpg"
                  alt=""
                  className="object-cover w-12 h-12 rounded-full bg-gray-500"
                />
              </div>
            </div>
            <div className="flex items-center space-x-1 text-blue-500">
              <HiStar className="w-5 h-5 fill-current" />
              <HiStar className="w-5 h-5 fill-current" />
              <HiStar className="w-5 h-5 fill-current" />
              <HiStar className="w-5 h-5 fill-current" />
              <FaStarHalfAlt className="w-5 h-5 fill-current" />
            </div>
          </div>
          <div className=" py-2">
            <h4 className="font-bold">John Doe</h4>
          </div>
          <div className="text-sm text-black">
            <p>
              Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu
              dictum lectus consequat vitae. Etiam ut dolor id justo fringilla
              finibus.Donec eget ultricies diam, eu molestie arcu. Etiam nec
              lacus eu
            </p>
          </div>
        </div>
        <div className="container border-2 border-blue-200 bg-white flex flex-col w-full max-w-lg p-6 mx-auto rounded-md  text-black">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              <div>
                <img
                  src="https://img.buzzfeed.com/buzzfeed-static/static/2020-08/14/10/asset/c47a54674537/sub-buzz-1020-1597401402-19.jpg?crop=639%3A628%3B0%2C0&downsize=900:*&output-format=auto&output-quality=auto"
                  alt=""
                  className="object-cover w-12 h-12 rounded-full bg-gray-500"
                />
              </div>
            </div>
            <div className="flex items-center space-x-1 text-blue-500">
              <HiStar className="w-5 h-5 fill-current" />
              <HiStar className="w-5 h-5 fill-current" />
              <HiStar className="w-5 h-5 fill-current" />
              <HiStar className="w-5 h-5 fill-current" />
              <HiStar className="w-5 h-5 fill-current" />
            </div>
          </div>
          <div className=" py-2">
            <h4 className="font-bold">Sara Khan</h4>
          </div>
          <div className="text-sm text-black">
            <p>
              Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu
              dictum lectus consequat vitae. Etiam ut dolor id justo fringilla
              finibus.Donec eget ultricies diam, eu molestie arcu. Etiam nec
              lacus eu
            </p>
          </div>
        </div>
        <div className="container border-2 border-blue-200 bg-white flex flex-col w-full max-w-lg p-6 mx-auto rounded-md  text-black">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              <div>
                <img
                  src="https://images.saymedia-content.com/.image/t_share/MTg3ODcyNzg5MjEzMDI5NDMw/greatest-hollywood-actors.jpg"
                  alt=""
                  className="object-cover w-12 h-12 rounded-full bg-gray-500"
                />
              </div>
            </div>
            <div className="flex items-center space-x-1 text-blue-500">
              <HiStar className="w-5 h-5 fill-current" />
              <HiStar className="w-5 h-5 fill-current" />
              <HiStar className="w-5 h-5 fill-current" />
              <FaStarHalfAlt className="w-5 h-5 fill-current" />
              <FaRegStar className="w-5 h-5 fill-current" />
            </div>
          </div>
          <div className=" py-2">
            <h4 className="font-bold">Leroy Jenkins</h4>
          </div>
          <div className="text-sm text-black">
            <p>
              Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu
              dictum lectus consequat vitae. Etiam ut dolor id justo fringilla
              finibus.Donec eget ultricies diam, eu molestie arcu. Etiam nec
              lacus eu
            </p>
          </div>
        </div>
        <div className="container border-2 border-blue-200 bg-white flex flex-col w-full max-w-lg p-6 mx-auto rounded-md  text-black">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              <div>
                <img
                  src="https://source.unsplash.com/100x100/?portrait"
                  alt=""
                  className="object-cover w-12 h-12 rounded-full bg-gray-500"
                />
              </div>
            </div>
            <div className="flex items-center space-x-1 text-blue-500">
              <HiStar className="w-5 h-5 fill-current" />
              <HiStar className="w-5 h-5 fill-current" />
              <HiStar className="w-5 h-5 fill-current" />
              <HiStar className="w-5 h-5 fill-current" />
              <HiStar className="w-5 h-5 fill-current" />
            </div>
          </div>
          <div className=" py-2">
            <h4 className="font-bold">Lithu Ana</h4>
          </div>
          <div className="text-sm text-black">
            <p>
              Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu
              dictum lectus consequat vitae. Etiam ut dolor id justo fringilla
              finibus.Donec eget ultricies diam, eu molestie arcu. Etiam nec
              lacus eu
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSay;

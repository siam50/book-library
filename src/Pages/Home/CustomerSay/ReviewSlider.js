import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";
import { HiStar } from "react-icons/hi2";
import { FaRegStar, FaStarHalfAlt } from "react-icons/fa";

const ReviewSlider = () => {
  return (
    <div className=" cursor-pointer">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="container border-2 bg-white flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700  text-black">
            <div className="flex justify-between p-4">
              <div className="flex space-x-4">
                <div>
                  <img
                    src="https://images.saymedia-content.com/.image/t_share/MTg3ODcyNzg5MjEzMDI5NDMw/greatest-hollywood-actors.jpg"
                    alt=""
                    className="object-cover w-12 h-12 rounded-full bg-gray-500"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Leroy Jenkins</h4>
                  <span className="text-xs text-gray-400">2 days ago</span>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-yellow-500">
                <HiStar className="w-5 h-5 fill-current" />
                <span className="text-xl font-bold">5</span>
              </div>
            </div>
            <div className="p-4 space-y-2 text-sm text-black">
              <p>
                Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu
                dictum lectus consequat vitae. Etiam ut dolor id justo fringilla
                finibus.
              </p>
              <p>
                Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu
                mauris cursus venenatis. Maecenas gravida urna vitae accumsan.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container border-2 bg-white flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700  text-black">
            <div className="flex justify-between p-4">
              <div className="flex space-x-4">
                <div>
                  <img
                    src="https://hips.hearstapps.com/hmg-prod/images/gettyimages-693134468.jpg"
                    alt=""
                    className="object-cover w-12 h-12 rounded-full bg-gray-500"
                  />
                </div>
                <div>
                  <h4 className="font-bold">John Doe</h4>
                  <span className="text-xs text-gray-400">2 days ago</span>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-yellow-500">
                <FaStarHalfAlt className="w-5 h-5 fill-current" />
                <span className="text-xl font-bold">4.5</span>
              </div>
            </div>
            <div className="p-4 space-y-2 text-sm text-black">
              <p>
                Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu
                dictum lectus consequat vitae. Etiam ut dolor id justo fringilla
                finibus.
              </p>
              <p>
                Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu
                mauris cursus venenatis. Maecenas gravida urna vitae accumsan.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container border-2 bg-white flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700  text-black">
            <div className="flex justify-between p-4">
              <div className="flex space-x-4">
                <div>
                  <img
                    src="https://img.buzzfeed.com/buzzfeed-static/static/2020-08/14/10/asset/c47a54674537/sub-buzz-1020-1597401402-19.jpg?crop=639%3A628%3B0%2C0&downsize=900:*&output-format=auto&output-quality=auto"
                    alt=""
                    className="object-cover w-12 h-12 rounded-full bg-gray-500"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Summy Chui</h4>
                  <span className="text-xs text-gray-400">2 days ago</span>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-yellow-500">
                <HiStar className="w-5 h-5 fill-current" />
                <span className="text-xl font-bold">5</span>
              </div>
            </div>
            <div className="p-4 space-y-2 text-sm text-black">
              <p>
                Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu
                dictum lectus consequat vitae. Etiam ut dolor id justo fringilla
                finibus.
              </p>
              <p>
                Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu
                mauris cursus venenatis. Maecenas gravida urna vitae accumsan.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container border-2 bg-white flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700  text-black">
            <div className="flex justify-between p-4">
              <div className="flex space-x-4">
                <div>
                  <img
                    src="https://japaninsider.com/wp-content/uploads/2021/09/Japans-Most-Popular-Female-Actors-07-Tao-Tsuchiya-Image-Sourced-from-Asa-Gei-Plus-1024x1024.jpg"
                    alt=""
                    className="object-cover w-12 h-12 rounded-full bg-gray-500"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Sara Ali</h4>
                  <span className="text-xs text-gray-400">2 days ago</span>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-yellow-500">
                <FaRegStar className="w-5 h-5 fill-current" />
                <span className="text-xl font-bold">3.5</span>
              </div>
            </div>
            <div className="p-4 space-y-2 text-sm text-black">
              <p>
                Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu
                dictum lectus consequat vitae. Etiam ut dolor id justo fringilla
                finibus.
              </p>
              <p>
                Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu
                mauris cursus venenatis. Maecenas gravida urna vitae accumsan.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container border-2 bg-white flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700  text-black">
            <div className="flex justify-between p-4">
              <div className="flex space-x-4">
                <div>
                  <img
                    src="https://source.unsplash.com/100x100/?portrait"
                    alt=""
                    className="object-cover w-12 h-12 rounded-full bg-gray-500"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Asta Sabil</h4>
                  <span className="text-xs text-gray-400">2 days ago</span>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-yellow-500">
                <FaStarHalfAlt className="w-5 h-5 fill-current" />
                <span className="text-xl font-bold">4.5</span>
              </div>
            </div>
            <div className="p-4 space-y-2 text-sm text-black">
              <p>
                Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu
                dictum lectus consequat vitae. Etiam ut dolor id justo fringilla
                finibus.
              </p>
              <p>
                Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu
                mauris cursus venenatis. Maecenas gravida urna vitae accumsan.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ReviewSlider;

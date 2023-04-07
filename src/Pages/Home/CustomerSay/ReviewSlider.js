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
        slidesPerView={4}
        spaceBetween={25}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
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
                finibus.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
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
                finibus.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
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
                finibus.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container border-2 border-blue-200 bg-white flex flex-col w-full max-w-lg p-6 mx-auto rounded-md  text-black">
            <div className="flex justify-between">
              <div className="flex space-x-4">
                <div>
                  <img
                    src="https://i0.wp.com/filmeshilmy.com/wp-content/uploads/2019/10/Kiara.jpg?ssl=1"
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
                finibus.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
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
                finibus.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container border-2 border-blue-200 bg-white flex flex-col w-full max-w-lg p-6 mx-auto rounded-md  text-black">
            <div className="flex justify-between">
              <div className="flex space-x-4">
                <div>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuzexUZ98_JpkTw-JQ6CtVLTU2q-U7vmBm2g&usqp=CAU"
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
                finibus.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ReviewSlider;

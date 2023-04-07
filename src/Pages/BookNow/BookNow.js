import React from "react";
import { toast } from "react-hot-toast";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { useParams } from "react-router-dom";

const BookNow = () => {
  const { id } = useParams();

  const handleBooked = () => {
    toast.success("Successfully Booked Your Item");
  };
  return (
    <div>
      <div className="hero border  px-0 md:px-56 my-20">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://m.media-amazon.com/images/I/41LWmHoPnGL.jpg"
            className="max-w-sm w-56 rounded-lg shadow-2xl"
            alt=""
          />
          <div className="ms-0 md:ms-20">
            <h1 className="text-5xl font-bold">In Search of Lost Time</h1>
            <h1 className="text-2xl text-gray-500 font-bold pt-2">
              Marcel Proust
            </h1>
            <div className="flex items-center pt-2">
              <h1 className="text-3xl text-secondary font-bold">Only $120</h1>
              <div className="flex ms-20 text-warning">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </div>
            </div>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button onClick={handleBooked} className="btn btn-primary">
              Click to Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookNow;

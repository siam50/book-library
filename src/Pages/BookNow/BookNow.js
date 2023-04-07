import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { FaStar, FaStarHalf, FaStarHalfAlt } from "react-icons/fa";
import { useParams } from "react-router-dom";

const BookNow = () => {
  const { id } = useParams();
  //   const [items, setItems] = useState([]);

  //   useEffect(() => {
  //     fetch("books.json")
  //       .then((res) => res.json())
  //       .then((data) => setItems(data));
  //   }, []);

  //   const filterBook = books?.filter((item) => item.id === bookId.id);

  const handleBooked = () => {
    toast.success("Successfully Booked Your Item");
  };
  return (
    <div>
      <div className="hero bg-base-200  px-0 md:px-56 my-20">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUWEZP4bQ0pBlAi8jHqnJuty-pVDhckSuxTg&usqp=CAU"
            className="max-w-sm w-56 rounded-lg shadow-2xl"
            alt=""
          />
          <div className="ms-0 md:ms-20">
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <h1 className="text-2xl text-gray-500 font-bold pt-2">Pit Bull</h1>
            <div className="flex items-center pt-3">
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
              Booked
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookNow;

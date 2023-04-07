import React from "react";
import { Link } from "react-router-dom";

const NewArrivals = ({ books }) => {
  const newArrivals = books?.filter(
    (element) => element.category === "New Arrival"
  );
  console.log(books);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-5 md:mt-10 justify-items-center">
      {newArrivals?.map((newArrival) => (
        <div className="card w-72 bg-base-100 shadow-xl">
          <figure className="pt-10">
            <img
              src={newArrival.image}
              alt="Shoes"
              className="rounded-xl h-60"
            />
          </figure>
          <div className="card-body items-center text-center">
            <div className="flex">
              <h2 className="card-title">{newArrival.title}</h2>
              <div className="badge badge-secondary">NEW</div>
            </div>
            <p>Author: {newArrival.author}</p>
            <div className="card-actions">
              <Link to={`/booking/${newArrival.id}`}>
                <button className="btn btn-primary">Book Now</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewArrivals;

import React from "react";
import { Link } from "react-router-dom";

const Magazine = ({ books }) => {
  const magazines = books?.filter((element) => element.category === "Magazine");
  console.log(magazines);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-5 md:mt-10 justify-items-center">
      {magazines?.map((magazine) => (
        <div className="card w-72 bg-base-100 shadow-xl">
          <figure className="pt-10">
            <img src={magazine.image} alt="Shoes" className="rounded-xl h-60" />
          </figure>
          <div className="card-body items-center text-center">
            <div className="flex">
              <h2 className="card-title">{magazine.title}</h2>
              <div className="badge badge-warning">Magazine</div>
            </div>
            <p>Author: {magazine.author}</p>
            <div className="card-actions">
              <Link to={`/booking/${magazine.id}`}>
                <button className="btn btn-primary">Book Now</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Magazine;

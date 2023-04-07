import React from "react";

const Featured = ({ books }) => {
  const featured = books?.filter((element) => element.category === "Fetured");
  console.log(featured);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-5 md:mt-10 justify-items-center">
      {featured?.map((feature) => (
        <div className="card w-72 bg-base-100 shadow-xl">
          <figure className="pt-10">
            <img src={feature.image} alt="Shoes" className="rounded-xl h-60" />
          </figure>
          <div className="card-body items-center text-center">
            <div className="flex">
              <h2 className="card-title">{feature.title}</h2>
              <div className="badge badge-success">Featured</div>
            </div>
            <p>Author: {feature.author}</p>
            <div className="card-actions">
              <button className="btn btn-primary">Book Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Featured;

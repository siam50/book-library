import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  // Search filtering Operation
  const searchItem = books?.filter((item) => {
    if (search === "") {
      return item;
    } else if (item.title.toLowerCase().includes(search.toLocaleLowerCase())) {
      return item;
    }
  });

  return (
    <div className="my-10 md:my-20">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold leading-tight text-blue-500 sm:text-4xl lg:text-5xl">
          Book Collection
        </h1>
        <input
          onChange={(event) => setSearch(event.target.value)}
          type="text"
          name="search"
          placeholder="Search here"
          className="input input-bordered border-blue-200 w-full max-w-xs"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10 md:my-20 justify-items-center">
        {searchItem?.map((item) => (
          <div
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            key={item.id}
            className="card w-72 bg-base-100 shadow-xl"
          >
            <figure className="pt-10">
              <img src={item.image} alt="Shoes" className="rounded-xl h-60" />
            </figure>
            <div className="card-body items-center text-center">
              <div className="flex">
                <h2 className="card-title">{item.title}</h2>
              </div>
              <p>Author: {item.author}</p>
              <div className="card-actions">
                <Link to={`/booking/${item.id}`}>
                  <button className="btn btn-primary">Book Now</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;

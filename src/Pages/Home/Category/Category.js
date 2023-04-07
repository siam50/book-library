import React, { useEffect, useState } from "react";
import NewArrivals from "./NewArrivals";
import Featured from "./Featured";
import Magazine from "./Magazine";

const Category = () => {
  const [books, setBooks] = useState([]);
  const [newArrivals, setNewArrivals] = useState(true);
  const [featured, setFeatured] = useState(false);
  const [magazine, setMagazine] = useState(false);

  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  // Handle Category wise Book show
  const handleNewArrivals = () => {
    setNewArrivals(true);
    setFeatured(false);
    setMagazine(false);
  };
  const handleFeatured = () => {
    setNewArrivals(false);
    setFeatured(true);
    setMagazine(false);
  };
  const handleMagazine = () => {
    setNewArrivals(false);
    setFeatured(false);
    setMagazine(true);
  };

  return (
    <div
      data-aos="fade-up"
      data-aos-easing="ease-in-out"
      className="py-10 md:py-28"
    >
      <div
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold leading-tight text-blue-500 sm:text-4xl lg:text-5xl">
          Category
        </h2>
        <p className="mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
          Lorem Ipsum Illia kar non deserunt ullamco est sit aliqua dolor do
          amet sint. Velit officia consequat duis.
        </p>
      </div>
      <div
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        className="md:flex ps-5 pt-10 cursor-pointer text-center"
      >
        <h1
          onClick={handleNewArrivals}
          className={
            newArrivals
              ? "text-blue-500 text-2xl font-bold"
              : " text-gray-400 text-2xl font-bold"
          }
        >
          New Arrivals
        </h1>
        <h1
          onClick={handleFeatured}
          className={
            featured
              ? "text-blue-500 text-2xl font-bold ms-5"
              : " text-gray-400 text-2xl font-bold ms-5"
          }
        >
          Featured
        </h1>
        <h1
          onClick={handleMagazine}
          className={
            magazine
              ? "text-blue-500 text-2xl font-bold ms-5"
              : " text-gray-400 text-2xl font-bold ms-5"
          }
        >
          Magazine
        </h1>
      </div>
      <div data-aos="fade-up" data-aos-easing="ease-in-out">
        {newArrivals && <NewArrivals books={books}></NewArrivals>}
        {featured && <Featured books={books}></Featured>}
        {magazine && <Magazine books={books}></Magazine>}
      </div>
    </div>
  );
};

export default Category;

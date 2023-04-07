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

  // if (newArrivals) {
  //   const categoryItem = books?.filter(
  //     (element) => element?.category === "New Arrival"
  //   );
  //   if (categoryItem.length !== 0) {
  //     setBooks(categoryItem);
  //   } else {
  //     console.log("faka array");
  //   }
  // } else if (featured) {
  //   const categoryItem = books?.filter(
  //     (element) => element?.category === "Fetured"
  //   );
  //   setBooks(categoryItem);
  // } else if (magazine) {
  //   const categoryItem = books?.filter(
  //     (element) => element?.category === "Magazine"
  //   );
  //   setBooks(categoryItem);
  // }

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

  // if (books.length === 0) {
  //   return (
  //     <>
  //       <h1>Loading......</h1>
  //     </>
  //   );
  // }
  return (
    <div className="py-10 bg-gray-100 lg:py-16 my-12 md:my-20">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold leading-tight text-accent sm:text-4xl lg:text-5xl">
          Category
        </h2>
      </div>
      <div className="md:flex ps-5 pt-5 cursor-pointer text-center">
        <h1
          onClick={handleNewArrivals}
          className={
            newArrivals
              ? "text-blue-600 text-2xl font-semibold"
              : " text-gray-400 text-2xl font-semibold"
          }
        >
          New Arrivals
        </h1>
        <h1
          onClick={handleFeatured}
          className={
            featured
              ? "text-blue-600 text-2xl font-semibold ms-5"
              : " text-gray-400 text-2xl font-semibold ms-5"
          }
        >
          Featured
        </h1>
        <h1
          onClick={handleMagazine}
          className={
            magazine
              ? "text-blue-600 text-2xl font-semibold ms-5"
              : " text-gray-400 text-2xl font-semibold ms-5"
          }
        >
          Magazine
        </h1>
      </div>
      <div>
        {newArrivals && <NewArrivals books={books}></NewArrivals>}
        {featured && <Featured books={books}></Featured>}
        {magazine && <Magazine books={books}></Magazine>}
      </div>
    </div>
  );
};

export default Category;

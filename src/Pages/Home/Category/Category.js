import React, { useEffect } from "react";

const Category = () => {
  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div className="py-10 bg-gray-100 lg:py-16 my-12 md:my-20">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold leading-tight text-accent sm:text-4xl lg:text-5xl">
          Category
        </h2>
        <p className="mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis.
        </p>
      </div>
    </div>
  );
};

export default Category;

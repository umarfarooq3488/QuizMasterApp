import React from "react";
import CategoryList from "./Components/CategoryList";

const Category = () => {
  return (
    <div>
      <h1 className="text-xl text-center bg-gray-200 py-4 dark:bg-gray-950 dark:text-gray-200 font-bold pt-10">
        Choose the category and test and your knowledge
      </h1>
      <CategoryList />
    </div>
  );
};

export default Category;

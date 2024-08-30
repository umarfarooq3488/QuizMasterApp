import React from "react";

const Category = ({ category, id }) => {
  return (
    <div className="md:w-[450px] w-[300px] h-[250px] m-2 shadow-lg flex flex-col justify-center hover:scale-105 bg-blue-50 dark:bg-gray-900 rounded-lg shadow-gray-800 overflow-hidden transition-all duration-300 border border-gray-300 dark:border-gray-700">
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
          {category}
        </h2>
        <p className="text-gray-700 flex-wrap dark:text-gray-400 mb-4">
          Would you like to give have it a go: {category}
        </p>
        <div className="mt-4 flex justify-end">
          <button className="bg-teal-500 dark:bg-teal-700 text-white font-semibold py-2 px-4 rounded hover:bg-teal-600 dark:hover:bg-teal-600 transition-colors">
            Solve Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default Category;

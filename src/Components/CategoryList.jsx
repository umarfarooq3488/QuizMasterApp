import React, { useEffect, useState } from "react";
import { CSpinner } from "@coreui/react";
import Category from "./Category";
import { Link } from "react-router-dom";
// import '@coreui/coreui/dist/css/coreui.min.css'
import "../App.css";
import Loader from "./loader/Loader";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://opentdb.com/api_category.php")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data.trivia_categories);
        setLoading(false); // Move setLoading(false) here
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false); // Also set loading to false in case of error
      });
  }, []);
  // console.log(categories)

  return (
    <div className="flex flex-wrap min-h-[75vh] bg-gray-200 py-4 dark:bg-gray-950 justify-center">
      {loading ? (
        // Displaying a loading spinner while the categories are being fetched
        <div className="d-flex justify-content-center">
          <Loader />
        </div>
      ) : (
        categories.map((category) => (
          <Link
            to={`/quiz/${category.id}/${category.name}`}
            className="custom-link"
          >
            <Category category={category.name} id={category.id} />
          </Link>
        ))
      )}
    </div>
  );
};

export default CategoryList;

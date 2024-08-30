import React from "react";
import { Link } from "react-router-dom";
import CategoryList from "./Components/CategoryList";
import Loader from "./Components/loader/Loader";
import ToggleBtn from "./Components/ToggleBtn";

const Home = () => {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-blue-500 to-purple-500 text-white h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center max-w-2xl px-6">
          <h1 className="text-5xl font-bold mb-4">Welcome to QuizMaster</h1>
          <p className="text-xl mb-6">
            Challenge yourself with exciting quizzes on a wide range of topics.
            Whether you're a trivia buff or just looking to have some fun,
            QuizMaster has something for everyone!
          </p>
          <Link to="/categories">
            <button className="bg-white text-blue-500 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-blue-500 hover:text-[#eee] transition-all animate-bounce duration-300">
              Explore Categories
            </button>
          </Link>
        </div>
      </section>
      {/* <Header /> */}

      <CategoryList />
    </div>
  );
};

export default Home;

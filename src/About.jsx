import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-b from-indigo-600 to-purple-600 min-h-[83vh] flex items-center justify-center py-10 px-6">
      <div className="bg-gray-200 dark:bg-gray-900 mt-12 md:mt-0 rounded-lg shadow-lg max-w-4xl w-full p-8 md:p-12 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
        <h1 className="text-4xl font-bold dark:text-gray-200 text-gray-800 text-center mb-8 animate-fadeIn">
          About Us
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-6">
          Welcome to QuizMaster, your ultimate destination for testing your
          knowledge across various categories! We believe that learning should
          be fun, engaging, and accessible to everyone. Our mission is to create
          an interactive platform where you can challenge yourself, compete with
          friends, and discover new facts in an exciting way.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-6">
          Our team is passionate about education and technology. We work
          tirelessly to bring you the best quiz experience with a wide range of
          topics, difficulty levels, and unique features. Whether you're a
          trivia enthusiast or just looking to pass the time, QuizMaster has
          something for everyone.
        </p>
        <div className="mt-8 flex justify-center">
          <a
            href="/quiz"
            className="bg-indigo-600 text-white py-3 px-8 rounded-full font-semibold text-lg hover:bg-indigo-700 transition-colors duration-300 animate-bounce"
          >
            Start a Quiz
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

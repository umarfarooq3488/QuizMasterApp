import React, { useEffect, useState } from "react";
import Question from "./Components/Question";
import { useParams } from "react-router-dom";
import { v4 as uuid } from "uuid";
import Loader from "./Components/loader/Loader";
import he from "he";

const Quiz = () => {
  const [totalQsInCategory, setTotalQsInCategory] = useState(null);
  const [Data, setData] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [trackAnswer, setTrackAnswer] = useState({});
  const [loading, setLoading] = useState(false);
  const [showBtn, setShowBtn] = useState(false);
  const { category, name } = useParams();

  useEffect(() => {
    if (category) {
      fetch(`https://opentdb.com/api_count.php?category=${category}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Network response was not ok");
          }
          return res.json();
        })
        .then((data) => {
          const total = data.category_question_count.total_question_count;
          setTotalQsInCategory(total < 50 ? total - 10 : 50);
        })
        .catch((error) => console.error("Error:", error));
    }
  }, [category]);

  useEffect(() => {
    setLoading(true); // Added setLoading(true) here before fetching data
    if (totalQsInCategory != null) {
      fetch(
        `https://opentdb.com/api.php?amount=${totalQsInCategory}&category=${category}&type=multiple`
      )
        .then((res) => {
          if (!res.ok) {
            throw new Error("Network response was not ok");
          }
          return res.json();
        })
        .then((data) => {
          const decodedData = data.results.map((item) => ({
            ...item,
            id: uuid(), // Added unique id to each question for tracking selected answers
            question: he.decode(item.question),
            incorrect_answers: item.incorrect_answers.map((ans) =>
              he.decode(ans)
            ),
            correct_answer: he.decode(item.correct_answer),
          }));
          setData(decodedData);
          setLoading(false); // Added setLoading(false) after fetching data
        })
        .catch((error) => {
          console.error("Error:", error);
          setLoading(false); // Also set loading to false in case of error
        });
    }
  }, [category, totalQsInCategory]);

  const handleSubmit = () => {
    setShowResult(true);
  };

  setTimeout(() => {
    setShowBtn(true);
  }, 2000);

  return (
    <div className="min-h-screen h-full dark:bg-gray-950 bg-gray-200">
      <div className="header">
        <h1 className="text-4xl text-center font-bold dark:text-gray-200 py-5">
          Quiz App
        </h1>
        <h2 className="text-xl text-center font-semibold text-[#09ae09] mb-4">
          {category ? `Category: ${name}` : ""}
        </h2>
        <p className="text-center dark:text-gray-200">
          Start playing the quiz and test your knowledge
        </p>
      </div>
      {loading ? (
        <div className="flex justify-center mt-20">
          <Loader />
        </div>
      ) : (
        Data.map((item, index) => (
          <Question
            className=""
            key={index}
            id={item.id}
            question={item.question}
            incorrectAns={item.incorrect_answers}
            correctAns={item.correct_answer}
            selectedAnswer={selectedAnswers[index] || null}
            setTrackAnswer={(answer) =>
              setTrackAnswer((prev) => ({ ...prev, ...answer }))
            }
            trackAnswer={trackAnswer}
            setSelectedAnswer={(answer) =>
              setSelectedAnswers((prev) => ({ ...prev, [index]: answer }))
            }
            setCorrectAnswer={setCorrectAnswer}
            correctAnswer={correctAnswer}
            showResult={showResult}
          />
        ))
      )}

      {showBtn && (
        <div className="button flex flex-col items-center pb-20">
          <button
            onClick={handleSubmit}
            className="bg-green-500 text-white min-w-[250px] rounded-md p-4 text-lg font-bold"
            disabled={Object.keys(trackAnswer).length != Data.length}
          >
            Submit Your Quiz
          </button>
          {showResult && (
            <p className="dark:text-gray-200 my-4">
              You have scored {correctAnswer} out of {totalQsInCategory}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Quiz;

import React, { useEffect, useState } from "react";

const Question = ({
  id,
  question,
  correctAns,
  incorrectAns,
  selectedAnswer,
  setSelectedAnswer,
  setCorrectAnswer,
  correctAnswer,
  setTrackAnswer,
  trackAnswer,
  showResult,
}) => {
  const [allAnswers, setAllAnswers] = useState([]);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const shuffledArr = [...incorrectAns, correctAns].sort(
      () => Math.random() - 0.5
    );
    setAllAnswers(shuffledArr);
  }, [correctAns, incorrectAns]);

  const handleSave = () => {
    const isCorrect = selectedAnswer === correctAns;
    setTrackAnswer({ [id]: isCorrect });
    if (isCorrect) {
      setCorrectAnswer(correctAnswer + 1);
    }
    setSaved(true);
  };

  const backgroundColor =
    showResult && trackAnswer[id] === true
      ? "bg-green-200"
      : showResult && "bg-red-200";

  return (
    <div className="flex justify-center items-center md:my-5 my-2 ">
      <div
        key={id}
        className={`md:p-6 p-2 ${backgroundColor} dark:bg-gray-900 bg-gray-100 rounded-lg flex flex-col min-w-[310px] w-1/2 flex-wrap shadow-xl`}
      >
        <h2 className="text-xl font-bold mb-4 dark:text-gray-100">
          {question}
        </h2>
        <div className="flex flex-col dark:text-gray-300">
          {allAnswers.map((option, idx) => (
            <label key={idx}>
              <input
                type="radio"
                disabled={saved}
                value={option}
                checked={selectedAnswer === option}
                onChange={(e) => setSelectedAnswer(e.target.value)}
                className={`mx-2 `}
                name={`quizOption-${id}`}
              />
              {option}
            </label>
          ))}
        </div>
        <div
          className={`flex my-3 ${
            trackAnswer[id] === false && "justify-between"
          } items-center`}
        >
          {showResult && trackAnswer[id] === false && (
            <p className="text-xl font-medium ">
              The correct answer is:{" "}
              <span className="text-blue-500 font-bold">{correctAns}</span>
            </p>
          )}
          <div className="flex-grow" />{" "}
          {/* This empty div will take up the remaining space */}
          <button
            onClick={handleSave}
            className="text-end py-2 px-4 hover:bg-blue-600 bg-blue-500 text-white rounded-md font-bold"
          >
            {saved ? "Saved" : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Question;

import React from "react";
import QuizReview from "./QuizReview";
import { Link } from "react-router-dom";

const QuizResult = ({ quiz, answers }) => {
  const calculateScore = () => {
    let score = 0;
    quiz.questions.forEach((q, index) => {
      if (answers[index] === q.correctAnswer) {
        score++;
      }
    });
    return score;
  };

  const score = calculateScore();
  const handleDeleteQuizState = () => {
    localStorage.removeItem("quizState");
  };
  return (
    <div className="bg-gray-500 p-5">
      <h2 className="text-4xl text-white font-bold mb-6 text-center bg-gradient-to-r from-amber-200 to-yellow-500 bg-clip-text text-transparent animate-slideIn">
        Quiz Results
      </h2>
      <p className="text-3xl text-white font-bold mb-6 text-center">
        Your score: {score} out of {quiz.questions.length}
      </p>
      <hr className="my-5" />
      <h2 className="text-4xl text-white font-bold mb-6 text-center bg-gradient-to-r from-amber-200 to-yellow-500 bg-clip-text text-transparent">
        Quiz Review
      </h2>
      <QuizReview quiz={quiz} answers={answers} />
      <button
        type="button"
        onClick={handleDeleteQuizState}
        className="mt-4 ml-2 px-5 py-2 rounded-full text-white font-semibold text-2xl bg-gradient-to-r from-pink-300 hover:to-yellow-500 hover:from-green-400 to-blue-500">
        <Link to="/">Back to Home</Link>
      </button>
    </div>
  );
};

export default QuizResult;

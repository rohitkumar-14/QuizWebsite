import React, { useState } from 'react';
import QuizModal from "../components/QuizModal";
import NavBar from '../components/NavBar';

const AllQuiz = ({ quizzes }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedQuiz, setSelectedQuiz] = useState({ index: null, title: "" });

  const handleQuiz = (index, title) => {
    setSelectedQuiz({ index, title });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
    <NavBar />
    <div className="p-4 w-[100%] min-h-[100vh] mx-auto flex items-center justify-center">
      <div className="w-[70%] min-h-[70%] rounded border-2 border-white p-5 shadow-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-fadeIn">
        <h1 className="text-5xl text-white font-bold mb-6 text-center bg-gradient-to-r from-amber-200 to-yellow-500 bg-clip-text text-transparent">
          Available Quizzes
        </h1>
        <p className="text-xl px-20 text-white font-bold bg-gradient-to-r from-amber-200 to-yellow-500 bg-clip-text text-transparent">
          Choose Your Adventure! Select Your Favorite Quiz Category Below:
        </p>
        <div className="text-white px-[100px] my-5">
          <ul className="space-y-2 list-disc">
            {quizzes.map((quiz, index) => (
              <li key={index} className="mb-2">
                <button
                  onClick={() => handleQuiz(index, quiz.title)}
                  className="text-white font-semibold hover:text-yellow-500">
                  {quiz.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <QuizModal
          quizIndex={selectedQuiz.index}
          quizTitle={selectedQuiz.title}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </div>
    </div>
    </>
  );
};

export default AllQuiz;

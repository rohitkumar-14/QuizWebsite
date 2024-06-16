
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const QuizModal = ({ quizIndex, quizTitle, isOpen, onClose }) => {
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const [countdown, setCountdown] = useState(15);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setIsButtonEnabled(false);
      setCountdown(15);

      const timer = setInterval(() => {
        setCountdown((prevCountdown) => {
          if (prevCountdown > 1) {
            return prevCountdown - 1;
          } else {
            clearInterval(timer);
            setIsButtonEnabled(true);
            return 0;
          }
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [isOpen]);

  const handleStartQuiz = () => {
    navigate(`/quiz/${quizIndex}`);
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-2xl max-w-sm w-full animate-fadeIn">
        <h2 className="text-xl font-bold mb-4">Ready to start the quiz?</h2>
        <p className="mb-4">You are about to start the quiz: <strong>{quizTitle}</strong></p>
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Instructions:</h3>
          <ul className="list-disc list-inside text-sm">
            <li>Read each question carefully.</li>
            <li>Select the best answer from the given options.</li>
            <li>You cannot change your answer once submitted.</li>
            <li>After submit the quiz you can review your answers and check your score also.</li>
            <li>Click "Start Quiz" to begin.</li>
          </ul>
        </div>
        <button
          onClick={handleStartQuiz}
          className={`bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded ${!isButtonEnabled ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={!isButtonEnabled}
        >
          {isButtonEnabled ? 'Start Quiz' : `Please wait ${countdown} seconds`}
        </button>
        <button onClick={onClose} className="bg-purple-500 hover:bg-purple-800 text-white px-4 py-2 rounded ml-4">Cancel</button>
      </div>
    </div>
  );
};

export default QuizModal;

import React, { useState, useEffect } from 'react';
import QuizQuestion from './QuizQuestion';
import QuizResult from './QuizResult';

const Quiz = ({ quiz }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [timer, setTimer] = useState(600);
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    const savedState = localStorage.getItem('quizState');
    if (savedState) {
      const parsedState = JSON.parse(savedState);
      setCurrentQuestionIndex(parsedState.currentQuestionIndex);
      setAnswers(parsedState.answers);
      setTimer(parsedState.timer);
      setShowResult(parsedState.showResult);
    }
  }, []);

  useEffect(() => {
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen().then(() => setIsFullScreen(true));
    }

    const handleFullScreenChange = () => {
      if (!document.fullscreenElement) {
        // Exit full-screen detected, end the quiz
        setShowResult(true);
      }
    };

    document.addEventListener('fullscreenchange', handleFullScreenChange);

    return () => {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
      document.removeEventListener('fullscreenchange', handleFullScreenChange);
    };
  }, []);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      } else {
        setShowResult(true);
      }
    }, 1000);

    const saveState = () => {
      const stateToSave = {
        currentQuestionIndex,
        answers,
        timer,
        showResult
      };
      localStorage.setItem('quizState', JSON.stringify(stateToSave));
    };

    saveState();

    return () => {
      clearInterval(timerInterval);
    };
  }, [currentQuestionIndex, answers, timer, showResult]);

  const handleAnswer = (questionIndex, answer) => {
    setAnswers({ ...answers, [questionIndex]: answer });
  };

  const handleSubmit = () => {
    setShowResult(true);
  };

  return (
    <div className="w-[60%] h-[70%] rounded border-2 border-white shadow-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      {!showResult ? (
        <div className='p-5'>
          <h2 className="text-3xl font-bold mb-4 text-white text-center">{quiz.title}</h2>
          <p className="text-white text-center mb-2">{`Time Remaining: ${Math.floor(timer / 60)}:${timer % 60 < 10 ? '0' : ''}${timer % 60}`}</p>
          <QuizQuestion
            question={quiz.questions[currentQuestionIndex]}
            questionIndex={currentQuestionIndex}
            handleAnswer={handleAnswer}
            selectedAnswer={answers[currentQuestionIndex]}
          />
          <div className="mt-4">
            {currentQuestionIndex > 0 && (
              <button onClick={() => setCurrentQuestionIndex(currentQuestionIndex - 1)} className="bg-pink-500 text-white px-4 py-2 rounded mr-2">Previous</button>
            )}
            {currentQuestionIndex < quiz.questions.length - 1 ? (
              <button onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)} className="bg-yellow-500 text-white px-4 py-2 rounded">Next</button>
            ) : (
              <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
            )}
          </div>
        </div>
      ) : (
        <QuizResult quiz={quiz} answers={answers} />
      )}
    </div>
  );
};

export default Quiz;

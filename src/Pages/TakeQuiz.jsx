import React from 'react';
import { useParams } from 'react-router-dom';
import Quiz from '../components/Quiz';

const TakeQuiz = ({ quizzes }) => {
  const { id } = useParams();
  const quiz = quizzes[id];

  return (
    <div className="p-4 w-[100%] min-h-[100vh] mx-auto flex items-center justify-center">
      {quiz ? <Quiz  quiz={quiz} /> : <p>Quiz not found</p>}
    </div>
  );
};

export default TakeQuiz;

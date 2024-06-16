import React from 'react';

const QuizReview = ({ quiz, answers }) => {
  return (
    <div className='text-white bg-gray-500'>
      {quiz.questions.map((q, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-lg mb-2">{q.question}</h3>
          {q.options.map((option, i) => (
            <div key={i} className={`flex items-center mb-1 p-2 rounded ${option === q.correctAnswer ? 'bg-green-300 text-black' : answers[index] === option ? 'bg-red-200' : ''}`}>
              <input
                type="radio"
                id={`review_question${index}_option${i}`}
                name={`review_question${index}`}
                value={option}
                checked={answers[index] === option}
                readOnly
                className="mr-2"
              />
              <label htmlFor={`review_question${index}_option${i}`}>{option}</label>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default QuizReview;

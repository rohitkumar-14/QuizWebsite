import React from 'react';

const QuizQuestion = ({ question, questionIndex, handleAnswer, selectedAnswer }) => {
  return (
    <div>
      <h3 className="text-lg mb-4 text-white">{question.question}</h3>
      <div className="space-y-2">
        {question.options.map((option, index) => (
          <div key={index} className="flex items-center">
            <input
              type="radio"
              id={`question${questionIndex}_option${index}`}
              name={`question${questionIndex}`}
              value={option}
              checked={selectedAnswer === option}
              onChange={() => handleAnswer(questionIndex, option)}
              className="mr-2 "
            />
            <label htmlFor={`question${questionIndex}_option${index}`} className='text-white'>{option}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizQuestion;

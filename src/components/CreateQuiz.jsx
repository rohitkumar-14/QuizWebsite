import React, { useState } from "react";
import NavBar from "./NavBar";

const AdminPanel = ({ addQuiz }) => {
  const [quizTitle, setQuizTitle] = useState("");
  const [questions, setQuestions] = useState([
    { question: "", options: ["", "", "", ""], correctAnswer: "" },
  ]);

  const handleAddQuestion = () => {
    setQuestions([
      ...questions,
      { question: "", options: ["", "", "", ""], correctAnswer: "" },
    ]);
  };

  const handleInputChange = (index, event) => {
    const newQuestions = [...questions];
    newQuestions[index][event.target.name] = event.target.value;
    setQuestions(newQuestions);
  };

  const handleOptionChange = (qIndex, oIndex, event) => {
    const newQuestions = [...questions];
    newQuestions[qIndex].options[oIndex] = event.target.value;
    setQuestions(newQuestions);
  };

  const handleCorrectAnswerChange = (index, event) => {
    const newQuestions = [...questions];
    newQuestions[index].correctAnswer = event.target.value;
    setQuestions(newQuestions);
  };

  const handleSubmit = () => {
    addQuiz({ title: quizTitle, questions });
    setQuizTitle("");
    setQuestions([{ question: "", options: ["", "", "", ""], correctAnswer: "" }]);
  };

  return (
    <>
      <NavBar />
      <div className="p-4 w-[100%] min-h-[100vh] mx-auto flex items-center justify-center">
        <div className="w-[70%] min-h-[70%] rounded border-2 border-white p-5 shadow-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          <h1 className="text-5xl mt-8 text-white font-bold mb-6 text-center bg-gradient-to-r from-amber-200 to-yellow-500 bg-clip-text text-transparent">
            Create a Quiz
          </h1>
          <div className="mb-4 mx-10">
            <label className="block mb-2 text-white font-semibold">Quiz Title</label>
            <input
              type="text"
              value={quizTitle}
              placeholder="Enter Quiz Category Name"
              onChange={(e) => setQuizTitle(e.target.value)}
              className="border p-2 w-full bg-transparent rounded text-white focus:outline-none focus:ring-2 focus:ring-white placeholder:text-white"
            />
          </div>
          {questions.map((q, qIndex) => (
            <div key={qIndex} className="mb-4 mx-10">
              <label className="block mb-2 text-white font-semibold">{`Question ${qIndex + 1}`}</label>
              <input
                type="text"
                name="question"
                value={q.question}
                placeholder={`Enter Question`}
                onChange={(e) => handleInputChange(qIndex, e)}
                className="border p-2 w-full bg-transparent rounded text-white focus:outline-none focus:ring-2 focus:ring-white placeholder:text-white"
              />
              <div className="mt-2">
                {q.options.map((option, oIndex) => (
                  <div key={oIndex} className="mb-2 flex items-center">
                    <input
                      type="text"
                      value={option}
                      placeholder={`Option ${oIndex + 1}`}
                      onChange={(e) => handleOptionChange(qIndex, oIndex, e)}
                      className="border p-2 flex-1 mr-2 last:w-full bg-transparent rounded text-white focus:outline-none focus:ring-2 focus:ring-white placeholder:text-white"
                    />
                    <label className="text-white">
                      <input
                        type="radio"
                        name={`correctAnswer${qIndex}`}
                        value={option}
                        onChange={(e) => handleCorrectAnswerChange(qIndex, e)}
                        className="mr-2"
                      />
                      Correct Answer
                    </label>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className="mt-5 mx-10">
            <button
              onClick={handleAddQuestion}
              className="bg-yellow-500 text-white px-4 py-2 rounded mr-2"
            >
              Add Question
            </button>
            <button onClick={handleSubmit} className="bg-pink-500 text-white px-4 py-2 rounded">
              Submit Quiz
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPanel;

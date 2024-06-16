import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import TakeQuiz from './Pages/TakeQuiz';
import AllQuiz from './Pages/AllQuiz';
import CreateQuiz from './components/CreateQuiz';
import "./App.css"


const App = () => {
  const [quizzes, setQuizzes] = useState(JSON.parse(localStorage.getItem('quizzes')) || []);

  useEffect(() => {
    localStorage.setItem('quizzes', JSON.stringify(quizzes));
  }, [quizzes]);

  const addQuiz = (quiz) => {
    setQuizzes([...quizzes, quiz]);
  };

  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Home  />} />
        <Route path="/quiz/:id" element={<TakeQuiz quizzes={quizzes} />} />
        <Route path="/allquiz" element={<AllQuiz quizzes={quizzes} />} />
        <Route path="/createquiz" element={<CreateQuiz addQuiz={addQuiz} />} />
      </Routes>
    </Router>
  );
};

export default App;

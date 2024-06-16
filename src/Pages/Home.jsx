import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="p-4 w-[100%] min-h-[100vh] mx-auto flex items-center justify-center ">
        <div className="w-[70%] min-h-[70%] rounded border-2 border-white p-5 shadow-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
          <h1 className="text-5xl text-white font-bold mb-6 text-center bg-gradient-to-r from-amber-200 to-yellow-500 bg-clip-text text-transparent ">
            Welcome to RoQuiz!
          </h1>
          <h3 className="text-xl text-white font-bold text-center bg-gradient-to-r from-amber-200 to-yellow-500 bg-clip-text text-transparent">
            Discover, Play, and Learn with Fun Quizzes
          </h3>
          <p className="text-white px-10 my-5">
            At QuizMaster, we believe that learning should be fun and engaging.
            Our website offers a vast collection of quizzes across various
            topics, designed to challenge your knowledge and entertain you at
            the same time. Whether you're looking to test your trivia skills,
            prepare for an exam, or simply pass the time with some interesting
            questions, QuizMaster has something for everyone.
          </p>
          <h3 className="text-2xl px-10 text-white font-bold bg-gradient-to-r from-amber-200 to-yellow-500 bg-clip-text text-transparent">
            Features:
          </h3>
          <ul className="text-white px-10 list-disc">
            <li className="mx-10 ">
              Diverse Categories: Explore quizzes in categories like History,
              Science, Pop Culture, Sports, Literature, and more.
            </li>
            <li className="mx-10 ">
              View Results: Display the user's score and correct answers after
              submission.
            </li>
            <li className="mx-10 ">
              Review Answers:Allow users to review the questions and their
              answers with the correct answers highlighted.
            </li>
            <li className="mx-10 ">
              Mobile Friendly: Enjoy our quizzes on the go with our fully
              responsive design.
            </li>
          </ul>

          <button
            type="button"
            className="mt-4 ml-10 px-5 py-2 rounded-full text-white font-semibold text-2xl bg-gradient-to-r from-pink-300 hover:to-yellow-500 hover:from-green-400 to-blue-500">
            <Link to="/allquiz">Start Quiz</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;

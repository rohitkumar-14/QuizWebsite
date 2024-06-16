import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="w-full h-[20%] px-10 py-5 shadow-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-between text-white md:text-2xl ">
      <div>
        <h1>RoQuiz</h1>
      </div>
      <div>
        <ul className="flex items-center justify-between gap-5">
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/createquiz'}>Create Quiz</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;

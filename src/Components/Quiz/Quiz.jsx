import React from "react";
import "./Quiz.css";
const Quiz = () => {
  return (
    <div className="container">
      <h1>Quiz App</h1>

      <hr />
      <h2>Which device is required for the Internet connection?</h2>
      <ul>
        <li>Moderm</li>
        <li>Router</li>
        <li>LAN Cable</li>
        <li>Pen Drive</li>
        <button>Next</button>
        <div className="index">1 of 5 Questions</div>
      </ul>
    </div>
  );
};
export default Quiz;

import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./MathBlaster.css";

const MathBlaster = () => {
  const location = useLocation();
  const { updateLeaderboard } = location.state || {}; // Retrieve the function from state

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [userInput, setUserInput] = useState("");
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30); // 30 seconds timer
  const [gameOver, setGameOver] = useState(false);

  const generateQuestion = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operation = Math.random() > 0.5 ? "+" : "*";
    const newQuestion = `${num1} ${operation} ${num2}`;
    const correctAnswer = eval(newQuestion);
    setQuestion(newQuestion);
    setAnswer(correctAnswer);
    setUserInput("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (parseInt(userInput) === answer) {
      setScore(score + 10);
      generateQuestion();
    } else {
      setScore(score - 5);
    }
  };

  // Countdown timer
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setGameOver(true);
      if (updateLeaderboard) updateLeaderboard(score); // Call the function to update leaderboard
    }
  }, [timeLeft]);

  useEffect(() => {
    generateQuestion();
  }, []);

  return (
    <div className="math-container">
      <h1 className="math-title">Math Blaster</h1>
      {gameOver ? (
        <div className="math-game-over">
          <h2 className="math-subtitle">Game Over</h2>
          <p className="math-text">Your Score: {score}</p>
          <button
            className="math-button"
            onClick={() => window.location.reload()}
          >
            Play Again
          </button>
        </div>
      ) : (
        <div>
          <p className="math-text">Time Left: {timeLeft}s</p>
          <p className="math-text">Score: {score}</p>
          <h2 className="math-subtitle">{question}</h2>
          <form className="math-form" onSubmit={handleSubmit}>
            <input
              className="math-input"
              type="number"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              autoFocus
            />
            <button className="math-button" type="submit">
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default MathBlaster;

import React, { useState, useEffect } from "react";
import "./MathPuzzleGame.css";

const MathPuzzleGame = () => {
  const puzzles = [
    {
      question: "If 5 pencils cost $2, how much would 12 pencils cost?",
      logic: "unitary method", 
      correctAnswer: 4.8,
      options: [4.8, 5, 6, 3.6],
    },
    {
      question: "A car travels 120 miles in 2 hours. How far will it travel in 5 hours?",
      logic: "unitary method", 
      correctAnswer: 300,
      options: [300, 250, 280, 320],
    },
    {
      question: "If a book costs $15 and you buy 3 books, how much would 7 books cost?",
      logic: "unitary method", 
      correctAnswer: 35,
      options: [35, 40, 30, 25],
    },
    {
      question: "A machine produces 60 widgets in 1 hour. How many widgets will it produce in 8 hours?",
      logic: "unitary method", 
      correctAnswer: 480,
      options: [480, 450, 500, 550],
    },
    {
      question: "If 3 workers complete a task in 5 days, how long will it take 5 workers to complete the same task?",
      logic: "inverse variation", 
      correctAnswer: 3,
      options: [3, 4, 5, 6],
    },
    // Add more puzzles as needed
  ];

  const [currentPuzzle, setCurrentPuzzle] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [questionCount, setQuestionCount] = useState(0);

  // Function to handle answer selection
  const handleAnswerSelect = (answer) => {
    setUserAnswer(answer);

    if (answer === puzzles[currentPuzzle].correctAnswer) {
      setScore(score + 10);
    } else {
      setScore(score - 5);
    }

    const nextQuestionCount = questionCount + 1;
    setQuestionCount(nextQuestionCount);

    // Check if we reached the last question (after answering 5 questions)
    if (nextQuestionCount >= puzzles.length) {
      setGameOver(true);
    } else {
      setCurrentPuzzle(nextQuestionCount); // Move to next puzzle
    }
  };

  useEffect(() => {
    // Ensure that the game starts with the first puzzle and is ready to display
    if (questionCount === 0) {
      setCurrentPuzzle(0); // Start the game with the first puzzle
    }
  }, [questionCount]);

  return (
    <div className="puzzle">
      <div className="puzzle-container">
        <h1 className="puzzle-title">Math Puzzle Game</h1>
        <div className="puzzle-score-display">
          <p>Score: {score}</p>
        </div>
        {gameOver ? (
          <div className="puzzle-game-over">
            <h2 className="puzzle-game-over-title">Game Over!</h2>
            <p>Your final score: {score}</p>
            <button
              onClick={() => window.location.reload()}
              className="puzzle-restart-button"
            >
              Play Again
            </button>
          </div>
        ) : (
          <div>
            <div className="puzzle-question-container">
              <h2 className="puzzle-question">{puzzles[currentPuzzle].question}</h2>
              <p>Use the {puzzles[currentPuzzle].logic} to solve it.</p>
              <div className="puzzle-options-container">
                {puzzles[currentPuzzle].options.map((option, index) => (
                  <button
                    key={index}
                    className={`puzzle-option-button ${
                      userAnswer === option
                        ? option === puzzles[currentPuzzle].correctAnswer
                          ? "puzzle-correct-answer"
                          : "puzzle-incorrect-answer"
                        : ""
                    }`}
                    onClick={() => handleAnswerSelect(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MathPuzzleGame;

import React, { useState } from "react";
import "./SciencePuzzleGame.css";

const elements = [
  { id: 1, name: "Hydrogen", atomicNumber: 1 },
  { id: 2, name: "Helium", atomicNumber: 2 },
  { id: 3, name: "Lithium", atomicNumber: 3 },
  { id: 8, name: "Oxygen", atomicNumber: 8 },
  { id: 10, name: "Neon", atomicNumber: 10 },
];

const SciencePuzzleGame = () => {
  const [score, setScore] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [answer, setAnswer] = useState("");
  const [message, setMessage] = useState("");
  const [gameOver, setGameOver] = useState(false);

  const generateQuestion = () => {
    const randomElement = elements[Math.floor(Math.random() * elements.length)];
    setCurrentQuestion(randomElement);
    setAnswer("");
    setMessage("");
  };

  const checkAnswer = () => {
    if (answer.toLowerCase() === currentQuestion.name.toLowerCase()) {
      setScore(score + 1);
      setMessage("Correct!");
    } else {
      setMistakes(mistakes + 1);
      setMessage(`Incorrect! The correct answer was ${currentQuestion.name}.`);
    }

    setAnswer("");

    if (mistakes + 1 >= 3) {
      setGameOver(true);
    } else {
      setTimeout(generateQuestion, 1500); // Automatically generate the next question
    }
  };

  const resetGame = () => {
    setScore(0);
    setMistakes(0);
    setGameOver(false);
    setCurrentQuestion(null);
    setAnswer("");
    setMessage("");
  };

  return (
    <div className="science">
      <div className="science-puzzle">
        <h1>Science Puzzle Game</h1>
        <h3>Score: {score}</h3>
        <h3>Mistakes: {mistakes} / 3</h3>

        {gameOver ? (
          <div className="game-over">
            <h2>Game Over!</h2>
            <p>Your final score is: {score}</p>
            <button onClick={resetGame}>Play Again</button>
          </div>
        ) : currentQuestion ? (
          <div className="question-section">
            <p>What is the name of the element with atomic number {currentQuestion.atomicNumber}?</p>
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Your answer"
            />
            <button onClick={checkAnswer} disabled={!answer}>
              Submit
            </button>
            {message && <p className="message">{message}</p>}
          </div>
        ) : (
          <button onClick={generateQuestion}>Start Game</button>
        )}
      </div>
    </div>
  );
};

export default SciencePuzzleGame;

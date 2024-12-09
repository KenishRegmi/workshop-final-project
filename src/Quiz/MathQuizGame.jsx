import React, { useState, useEffect } from "react";
import "./MathQuizGame.css";

const questions = [
  {
    question: "What is the value of 5x - 3 when x = 2?",
    options: [7, 5, 10, 8],
    correctAnswer: 7,
  },
  {
    question: "What is the quadratic equation for roots x = 3 and x = -2?",
    options: ["x² - 5x + 6", "x² + 5x + 6", "x² - 3x - 6", "x² + 3x - 6"],
    correctAnswer: "x² - 5x + 6",
  },
  {
    question: "What is the area of a circle with radius 7 cm?",
    options: [49 * Math.PI, 25 * Math.PI, 14 * Math.PI, 49],
    correctAnswer: 49 * Math.PI,
  },
  {
    question: "Solve for x: 2x + 5 = 15",
    options: [5, 2, 10, 7],
    correctAnswer: 5,
  },
  {
    question: "What is the sum of angles in a triangle?",
    options: [180, 90, 360, 270],
    correctAnswer: 180,
  },
  {
    question: "What is the value of 3² + 4²?",
    options: [25, 29, 13, 17],
    correctAnswer: 25,
  },
  {
    question: "What is the value of pi to 2 decimal places?",
    options: [3.14, 3.16, 3.15, 3.13],
    correctAnswer: 3.14,
  },
  {
    question: "What is the value of x in the equation: 5x = 20?",
    options: [2, 4, 5, 6],
    correctAnswer: 4,
  },
  {
    question: "What is the solution to the equation: x + 7 = 12?",
    options: [5, 6, 7, 8],
    correctAnswer: 5,
  },
  {
    question: "What is the derivative of x²?",
    options: ["2x", "x²", "x", "1"],
    correctAnswer: "2x",
  },
  {
    question: "What is the solution to the equation 3x + 5 = 20?",
    options: [5, 10, 3, 15],
    correctAnswer: 5,
  },
  {
    question: "What is the area of a circle with radius 14 cm?",
    options: [196 * Math.PI, 98 * Math.PI, 49 * Math.PI, 28 * Math.PI],
    correctAnswer: 196 * Math.PI,
  },
  {
    question: "Solve for x: 5(x - 3) = 2x + 6",
    options: [4, 3, 6, 2],
    correctAnswer: 6,
  },
  {
    question: "What is the value of sin(30°)?",
    options: [1/2, 3/2, 1, 2/2],
    correctAnswer: 1/2,
  },
  {
    question: "Which of the following is the factorization of x² - 16?",
    options: ["(x - 4)(x + 4)", "(x - 8)(x + 8)", "(x - 4)(x - 4)", "(x + 4)(x + 4)"],
    correctAnswer: "(x - 4)(x + 4)",
  },
  {
    question: "What is the value of the discriminant in the equation 2x² + 4x - 6 = 0?",
    options: [16, 4, -4, 24],
    correctAnswer: 16,
  },
  {
    question: "What is the cosine of 60°?",
    options: [1/2, 3/2, 1, 2/2],
    correctAnswer: 1/2,
  },
  {
    question: "What is the volume of a cone with radius 7 cm and height 12 cm?",
    options: [308, 352, 184, 392],
    correctAnswer: 308 * Math.PI,
  },
  {
    question: "If tan(θ) = 3/4, what is the value of sin(θ)?",
    options: [3/5, 4/5, 1/5, 5/3],
    correctAnswer: 3/5,
  },
];

const MathQuizGame = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30); // 30 seconds to answer
  const [gameOver, setGameOver] = useState(false);
  const [mistakes, setMistakes] = useState(0); // Track mistakes
  const [message, setMessage] = useState("");

  // Timer for question duration
  useEffect(() => {
    if (timeLeft > 0 && !gameOver) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else if (timeLeft === 0 && !gameOver) {
      handleAnswerCheck();
    }
  }, [timeLeft, gameOver]);

  const handleAnswerCheck = () => {
    if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
      setMessage("Correct!");
    } else {
      setMistakes(mistakes + 1);
      setMessage(`Incorrect! The correct answer was ${questions[currentQuestionIndex].correctAnswer}.`);
    }

    // Check if the game should end due to 5 mistakes
    if (mistakes >= 5) {
      setGameOver(true);
      setMessage(`Game Over! You made 5 mistakes.`);
      return;
    }

    // Move to the next question or end the game if it's the last one
    if (currentQuestionIndex < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setTimeLeft(30); // Reset timer for next question
        setMessage("");
        setSelectedAnswer(null);
      }, 1500); // Delay before moving to the next question
    } else {
      setGameOver(true); // End game if no more questions
    }
  };

  const handleAnswerSelection = (answer) => {
    setSelectedAnswer(answer);
  };

  const resetGame = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setMistakes(0); // Reset mistakes count
    setTimeLeft(30);
    setGameOver(false);
    setMessage("");
    setSelectedAnswer(null);
  };

  return (
    <div className="math">
      <div className="math-quiz">
        <div className="math-quiz-container">
          <h1 className="math-quiz-title">Math Quiz Game</h1>
          <h3 className="math-quiz-score">Score: {score}</h3>
          <h3 className="math-quiz-timer">Time Left: {timeLeft}s</h3>
          <h3 className="math-quiz-mistakes">Mistakes: {mistakes} / 5</h3>

          {gameOver ? (
            <div className="math-quiz-game-over">
              <h2>Game Over!</h2>
              <p>Your final score is: {score}</p>
              <p>You made {mistakes} mistakes.</p>
              <button className="math-quiz-reset-btn" onClick={resetGame}>
                Play Again
              </button>
            </div>
          ) : (
            <div className="math-quiz-question">
              <p>{questions[currentQuestionIndex].question}</p>
              <div className="math-quiz-options">
                {questions[currentQuestionIndex].options.map((option, index) => (
                  <button
                    key={index}
                    className={`math-quiz-option ${selectedAnswer === option ? "selected" : ""}`}
                    onClick={() => handleAnswerSelection(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
              <button
                className="math-quiz-submit-btn"
                onClick={handleAnswerCheck}
                disabled={selectedAnswer === null}
              >
                Submit
              </button>
              {message && <p className="math-quiz-message">{message}</p>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MathQuizGame;

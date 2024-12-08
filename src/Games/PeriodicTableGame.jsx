import React, { useState, useEffect } from "react";
import "./PeriodicTableGame.css";

const PeriodicTableGame = () => {
  const elements = [
    { symbol: "H", name: "Hydrogen" },
    { symbol: "He", name: "Helium" },
    { symbol: "Li", name: "Lithium" },
    { symbol: "Be", name: "Beryllium" },
    { symbol: "B", name: "Boron" },
    { symbol: "C", name: "Carbon" },
    { symbol: "N", name: "Nitrogen" },
    { symbol: "O", name: "Oxygen" },
    { symbol: "F", name: "Fluorine" },
    { symbol: "Ne", name: "Neon" },
    { symbol: "Na", name: "Sodium" },
    { symbol: "Mg", name: "Magnesium" },
    { symbol: "Al", name: "Aluminum" },
    { symbol: "Si", name: "Silicon" },
    { symbol: "P", name: "Phosphorus" },
    { symbol: "S", name: "Sulfur" },
    { symbol: "Cl", name: "Chlorine" },
    { symbol: "Ar", name: "Argon" },
    { symbol: "K", name: "Potassium" },
    { symbol: "Ca", name: "Calcium" },
    { symbol: "Sc", name: "Scandium" },
    { symbol: "Ti", name: "Titanium" },
    { symbol: "V", name: "Vanadium" },
    { symbol: "Cr", name: "Chromium" },
    { symbol: "Mn", name: "Manganese" },
    { symbol: "Fe", name: "Iron" },
    { symbol: "Co", name: "Cobalt" },
    { symbol: "Ni", name: "Nickel" },
    { symbol: "Cu", name: "Copper" },
    { symbol: "Zn", name: "Zinc" },
    { symbol: "Ga", name: "Gallium" },
    { symbol: "Ge", name: "Germanium" },
    { symbol: "As", name: "Arsenic" },
    { symbol: "Se", name: "Selenium" },
    { symbol: "Br", name: "Bromine" },
    { symbol: "Kr", name: "Krypton" },
    { symbol: "Rb", name: "Rubidium" },
    { symbol: "Sr", name: "Strontium" },
    { symbol: "Y", name: "Yttrium" },
    { symbol: "Zr", name: "Zirconium" },
    { symbol: "Nb", name: "Niobium" },
    { symbol: "Mo", name: "Molybdenum" },
    { symbol: "Tc", name: "Technetium" },
    { symbol: "Ru", name: "Ruthenium" },
    { symbol: "Rh", name: "Rhodium" },
    { symbol: "Pd", name: "Palladium" },
    { symbol: "Ag", name: "Silver" },
    { symbol: "Cd", name: "Cadmium" },
    { symbol: "In", name: "Indium" },
    { symbol: "Sn", name: "Tin" },
    { symbol: "Sb", name: "Antimony" },
    { symbol: "I", name: "Iodine" },
    { symbol: "Te", name: "Tellurium" }
  ];

  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [userAnswer, setUserAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [questionCount, setQuestionCount] = useState(0);

  // Function to generate a random question
  const generateQuestion = () => {
    const randomElement = elements[Math.floor(Math.random() * elements.length)];
    const correctAnswerValue = randomElement.name;
    const incorrectAnswers = elements
      .filter((e) => e.name !== correctAnswerValue)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .map((e) => e.name);

    const allOptions = [
      correctAnswerValue,
      ...incorrectAnswers,
    ].sort(() => Math.random() - 0.5);

    setQuestion(randomElement.symbol); // Show symbol, answer will be the name
    setCorrectAnswer(correctAnswerValue);
    setOptions(allOptions);
  };

  // Handle answer selection
  const handleAnswerSelect = (answer) => {
    setUserAnswer(answer);
    if (answer === correctAnswer) {
      setScore(score + 10);
    } else {
      setScore(score - 5);
    }
    setQuestionCount(questionCount + 1);

    if (questionCount < 10) {
      generateQuestion(); // Continue with the game
    } else {
      setGameOver(true); // End the game after 10 questions
    }
  };

  useEffect(() => {
    generateQuestion();
  }, []);

  return (
    <div className="periodic">
      <div className="periodic-main">
        <h1 className="periodic-title">Periodic Table Game</h1>
        {gameOver ? (
          <div className="periodic-game-over">
            <h2 className="periodic-subtitle">Game Over</h2>
            <p className="periodic-text">Your final score: {score}</p>
            <button className="periodic-button" onClick={() => window.location.reload()}>
              Play Again
            </button>
          </div>
        ) : (
          <div>
            <div className="periodic-score">
              <p className="periodic-text">Score: {score}</p>
            </div>
            <div className="periodic-question-container">
              <h2 className="periodic-subtitle">What is the element with the symbol "{question}"?</h2>
              <div className="periodic-options-container">
                {options.map((option, index) => (
                  <button
                    key={index}
                    className={`periodic-option-button ${
                      userAnswer === option
                        ? option === correctAnswer
                          ? "periodic-correct"
                          : "periodic-incorrect"
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

export default PeriodicTableGame;

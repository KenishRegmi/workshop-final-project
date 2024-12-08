import React, { useState, useEffect } from "react";
import "./FlagGuesser.css";

const FlagGuesser = () => {
  // List of countries and flags (image URLs)
  const flagData = [
    { country: "India", flag: "https://flagcdn.com/w320/in.png" },
    { country: "France", flag: "https://flagcdn.com/w320/fr.png" },
    { country: "Japan", flag: "https://flagcdn.com/w320/jp.png" },
    { country: "Germany", flag: "https://flagcdn.com/w320/de.png" },
    { country: "United States", flag: "https://flagcdn.com/w320/us.png" },
    { country: "Canada", flag: "https://flagcdn.com/w320/ca.png" },
    { country: "Brazil", flag: "https://flagcdn.com/w320/br.png" },
    { country: "South Korea", flag: "https://flagcdn.com/w320/kr.png" },
    { country: "Australia", flag: "https://flagcdn.com/w320/au.png" },
    { country: "Russia", flag: "https://flagcdn.com/w320/ru.png" },
    { country: "Mexico", flag: "https://flagcdn.com/w320/mx.png" },
    { country: "Italy", flag: "https://flagcdn.com/w320/it.png" },
    { country: "Spain", flag: "https://flagcdn.com/w320/es.png" },
    { country: "Argentina", flag: "https://flagcdn.com/w320/ar.png" },
    { country: "Egypt", flag: "https://flagcdn.com/w320/eg.png" },
  ];

  const [currentFlag, setCurrentFlag] = useState({});
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

  const generateQuestion = () => {
    const randomFlag = flagData[Math.floor(Math.random() * flagData.length)];
    const shuffledOptions = shuffleArray(
      flagData
        .filter((item) => item.country !== randomFlag.country)
        .slice(0, 3)
        .concat(randomFlag)
    );

    setCurrentFlag(randomFlag);
    setOptions(shuffledOptions);
  };

  const handleOptionClick = (selectedCountry) => {
    setAttempts(attempts + 1);
    if (selectedCountry === currentFlag.country) {
      setScore(score + 1);
    }

    if (attempts + 1 === 5) {
      setGameOver(true);
    } else {
      generateQuestion();
    }
  };

  const resetGame = () => {
    setScore(0);
    setAttempts(0);
    setGameOver(false);
    generateQuestion();
  };

  useEffect(() => {
    generateQuestion();
  }, []);

  return (
    <div className="flag">
    <div className="flag-container">
      <h1 className="flag-title">Flag Guesser</h1>
      {gameOver ? (
        <div className="flag-game-over">
          <h2>Game Over</h2>
          <p>Your Score: {score}/5</p>
          <button className="flag-button" onClick={resetGame}>
            Play Again
          </button>
        </div>
      ) : (
        <div>
          <div className="flag-question">
            <img
              src={currentFlag.flag}
              alt={currentFlag.country}
              className="flag-image"
            />
            <p>Which country does this flag belong to?</p>
          </div>
          <div className="flag-options">
            {options.map((option) => (
              <button
                key={option.country}
                className="flag-option"
                onClick={() => handleOptionClick(option.country)}
              >
                {option.country}
              </button>
            ))}
          </div>
          <p className="flag-score">Score: {score}</p>
          <p className="flag-attempts">Attempts: {attempts}/5</p>
        </div>
      )}
    </div>
    </div>
  );
};

export default FlagGuesser;

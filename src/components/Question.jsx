import React, { useState } from "react";

function Question({ onQuizEnd }) {
  const questions = [
    {
      questionText: "What is the color of the sky?",
      options: ["Red", "Blue", "Green", "Yellow"],
      correctAnswer: "Blue",
    },
    {
      questionText: "How many legs does a spider have?",
      options: ["4", "6", "8", "10"],
      correctAnswer: "8",
    },
    {
      questionText: "What do plants need to make food?",
      options: ["Water", "Sunlight", "Air", "All of the above"],
      correctAnswer: "All of the above",
    },
    {
      questionText: "Which part of the plant grows underground?",
      options: ["Stem", "Leaf", "Root", "Flower"],
      correctAnswer: "Root",
    },
    {
      questionText: "How many seasons are there in a year?",
      options: ["2", "3", "4", "5"],
      correctAnswer: "4",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
      onQuizEnd(score + 1, questions.length); 
    }
  };

  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          <h1>
            You scored {score} out of {questions.length}
          </h1>
        </div>
      ) : (
        <div className="question-section">
          <h2>
            Question {currentQuestion + 1}/{questions.length}
          </h2>
          <p>{questions[currentQuestion].questionText}</p>
          <div className="options">
            {questions[currentQuestion].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswer(option)}>
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Question;

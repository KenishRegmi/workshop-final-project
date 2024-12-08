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
    {
      questionText: "What color is the sun?",
      options: ["Blue", "Red", "Yellow", "Green"],
      correctAnswer: "Yellow",
    },
    {
      questionText: "Which animal says 'meow'?",
      options: ["Dog", "Cat", "Cow", "Horse"],
      correctAnswer: "Cat",
    },
    {
      questionText: "How many legs does a cow have?",
      options: ["2", "4", "6", "8"],
      correctAnswer: "4",
    },
    {
      questionText: "What do we use to smell things?",
      options: ["Eyes", "Nose", "Ears", "Hands"],
      correctAnswer: "Nose",
    },
    {
      questionText: "What is the color of grass?",
      options: ["Red", "Blue", "Yellow", "Green"],
      correctAnswer: "Green",
    },
    {
      questionText: "Which one is a fruit?",
      options: ["Carrot", "Potato", "Apple", "Cabbage"],
      correctAnswer: "Apple",
    },
    {
      questionText: "Which part of the plant is green?",
      options: ["Stem", "Leaf", "Root", "Flower"],
      correctAnswer: "Leaf",
    },
    {
      questionText: "What do we drink that comes from cows?",
      options: ["Juice", "Water", "Milk", "Tea"],
      correctAnswer: "Milk",
    },
    {
      questionText: "Which animal is the largest on land?",
      options: ["Elephant", "Dog", "Lion", "Tiger"],
      correctAnswer: "Elephant",
    },
    {
      questionText: "What shape is the moon?",
      options: ["Square", "Triangle", "Circle", "Rectangle"],
      correctAnswer: "Circle",
    },
    {
      questionText: "What do we use to see things?",
      options: ["Nose", "Eyes", "Mouth", "Hands"],
      correctAnswer: "Eyes",
    },
    {
      questionText: "Which of these is a bird?",
      options: ["Dog", "Cat", "Parrot", "Horse"],
      correctAnswer: "Parrot",
    },
    {
      questionText: "How many fingers are on one hand?",
      options: ["3", "4", "5", "6"],
      correctAnswer: "5",
    },
    {
      questionText: "What do plants need to grow?",
      options: ["Sand", "Sunlight", "Plastic", "Paper"],
      correctAnswer: "Sunlight",
    },
    {
      questionText: "Which one of these is a body part?",
      options: ["Spoon", "Ear", "Ball", "Chair"],
      correctAnswer: "Ear",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [feedback, setFeedback] = useState(""); // Added state for feedback

  const handleAnswer = (selectedOption) => {
    const isCorrect = selectedOption === questions[currentQuestion].correctAnswer;
    if (isCorrect) {
      setScore(score + 1);
      setFeedback("Correct!"); // Show correct feedback
    } else {
      setFeedback("Incorrect!"); // Show incorrect feedback
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setTimeout(() => {
        setFeedback(""); // Clear feedback before showing next question
        setCurrentQuestion(nextQuestion);
      }, 1000); // Wait 1 second before showing the next question
    } else {
      setShowScore(true);
      onQuizEnd(score + (isCorrect ? 1 : 0), questions.length); // Pass updated score
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
          {feedback && <p className="feedback">{feedback}</p>} {/* Display feedback */}
        </div>
      )}
    </div>
  );
}

export default Question;

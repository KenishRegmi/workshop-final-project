import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';  // Import useHistory to redirect

const Math = ({ onQuizComplete }) => {
  const questions = [
    {
      question: 'What is 5 + 3?',
      options: [7, 8, 9, 10],
      answer: 8,
    },
    {
      question: 'What is 12 - 4?',
      options: [8, 6, 5, 10],
      answer: 8,
    },
    {
      question: 'What is 6 * 6?',
      options: [32, 36, 30, 42],
      answer: 36,
    },
    {
      question: 'What is 9 / 3?',
      options: [1, 2, 3, 4],
      answer: 3,
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [score, setScore] = useState(0);
  const history = useHistory();  // Use history for redirection

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    if (option === questions[currentQuestionIndex].answer) {
      setIsCorrect(true);
      setScore(score + 10);  // Increase score for correct answer
    } else {
      setIsCorrect(false);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setIsCorrect(null);
    } else {
      alert('Quiz Completed!');
      onQuizComplete(score);  // Pass the score to the parent when quiz is done
      history.push('/games');  // Redirect back to the games page
    }
  };

  return (
    <div className="mathquiz">
      <h1>Math Quiz</h1>
      <div className="question-container">
        <p>{questions[currentQuestionIndex].question}</p>
        <div className="options">
          {questions[currentQuestionIndex].options.map((option, index) => (
            <button
              key={index}
              className={`option ${selectedOption === option ? 'selected' : ''}`}
              onClick={() => handleOptionClick(option)}
              disabled={selectedOption !== null}
            >
              {option}
            </button>
          ))}
        </div>
        {isCorrect !== null && (
          <p className={isCorrect ? 'correct' : 'incorrect'}>
            {isCorrect ? 'Correct!' : 'Incorrect!'}
          </p>
        )}
        <button onClick={handleNextQuestion} disabled={selectedOption === null}>
          Next Question
        </button>
      </div>
    </div>
  );
};

export default Math;

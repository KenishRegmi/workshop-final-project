import React, { useState } from "react";
import Question from "./Question";

const Quizes = () => {
  const [quizStarted, setQuizStarted] = useState(false);5
  const [streak, setStreak] = useState(0);
  const [leaderboard, setLeaderboard] = useState([
    { name: "Alice", streak: 5 },
    { name: "Bob", streak: 5 },
    { name: "Charlie", streak: 4 },
    { name: "You", streak: 0 },
  ]);5
  const [previousPerformances, setPreviousPerformances] = useState([
    { topic: "Math", difficulty: "Medium", score: 85, date: "Dec 5, 2024" },
    { topic: "Science", difficulty: "Hard", score: 70, date: "Dec 3, 2024" },
    { topic: "History", difficulty: "Easy", score: 95, date: "Nov 30, 2024" },
  ]);5

  const handleStartQuiz = () => {
    setQuizStarted(true);5
  };

  const updateStreakAndLeaderboard = (correctCount) => {
    const newStreak = streak + correctCount;5
    setStreak(newStreak);

 5
    const updatedLeaderboard = [...leaderboard].map((player) => {
      if (player.name === "You") {
        return { ...player, streak: newStreak };
      }
      return player;
    });


    updatedLeaderboard.sort((a, b) => b.streak - a.streak);
    setLeaderboard(updatedLeaderboard);
  };

  const updatePreviousPerformances = (score, totalQuestions, topic = "General", difficulty = "Medium") => {
    const percentage = Math.round((score / totalQuestions) * 100);
    const date = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    const newPerformance = {
      topic,
      difficulty,
      score: percentage,
      date,
    };

    setPreviousPerformances([newPerformance, ...previousPerformances]);
  };

  return (
    <div className="quizes">
      {quizStarted ? (
        <Question
          onQuizEnd={(correctCount, totalQuestions) => {
            updateStreakAndLeaderboard(correctCount);
            updatePreviousPerformances(correctCount, totalQuestions);
            setQuizStarted(false);
          }}
        />
      ) : (
        <>
          <div className="quiz-container">
            <section className="quiz-start-section">
              <header className="quiz-header">
                <h1 className="quiz-title">Welcome to the Quiz Zone</h1>
                <p className="quiz-description">
                  Pick a topic, grade, and difficulty level to begin your quiz!
                </p>
              </header>

              <form className="quiz-selection">
                <div className="quiz-field">
                  <label htmlFor="quiz-topic" className="quiz-label">
                    Choose a Topic:
                  </label>
                  <select id="quiz-topic" className="quiz-dropdown">
                    <option value="math">Math</option>
                    <option value="science">Science</option>
                    <option value="history">History</option>
                    <option value="english">English</option>
                  </select>
                </div>

                <div className="quiz-field">
                  <label htmlFor="quiz-grade" className="quiz-label">
                    Select Your Grade:
                  </label>
                  <select id="quiz-grade" className="quiz-dropdown">
                    <option value="1">Class 1</option>
                    <option value="2">Class 2</option>
                    <option value="3">Class 3</option>
                    <option value="4">Class 4</option>
                    <option value="5">Class 5</option>
                    <option value="6">Class 6</option>
                    <option value="7">Class 7</option>
                    <option value="8">Class 8</option>
                    <option value="9">Class 9</option>
                    <option value="10">Class 10</option>
                  </select>
                </div>

                <div className="quiz-field">
                  <label htmlFor="quiz-difficulty" className="quiz-label">
                    Select Difficulty:
                  </label>
                  <select id="quiz-difficulty" className="quiz-dropdown">
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                  </select>
                </div>

                <button
                  type="button"
                  className="quiz-start-button"
                  onClick={handleStartQuiz}
                >
                  Start Quiz
                </button>
              </form>
            </section>

            <aside className="quiz-performance-section">
  <h2 className="quiz-performance-title">Your Previous Performances</h2>
  <ul className="quiz-performance-list">
    {previousPerformances.slice(0, 4).map((performance, index) => (
      <li key={index}>
        <strong>Quiz:</strong> {performance.topic} ({performance.difficulty})
        <br />
        <strong>Score:</strong> {performance.score}%
        <br />
        <strong>Date:</strong> {performance.date}
      </li>
    ))}
  </ul>
</aside>

          </div>

          <div className="quiz-streak-container">
            <section className="quiz-streak-section">
              <h2 className="quiz-streak-title">Your Streak</h2>
              <p className="quiz-streak-number">
                🔥 {streak} Quizzes Solved Consecutively!
              </p>
            </section>

            <section className="quiz-leaderboard-section">
              <h2 className="quiz-leaderboard-title">Leaderboard</h2>
              <ul className="quiz-leaderboard-list">
                {leaderboard.map((player, index) => (
                  <li
                    key={player.name}
                    className={`quiz-leaderboard-item ${
                      player.name === "You" ? "your-rank" : ""
                    }`}
                  >
                    <span className="quiz-rank">{index + 1}.</span>
                    <span className="quiz-player">{player.name}</span>
                    <span className="quiz-streak">{player.streak} Streak</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </>
      )}
    </div>
  );
};

export default Quizes;

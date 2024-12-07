import React from 'react'
import Question from './Question'

const Quizes = () => {
  return (
<div className="quizes">
    <div class="quiz-container">
  <section class="quiz-start-section">
    <header class="quiz-header">
      <h1 class="quiz-title">Welcome to the Quiz Zone</h1>
      <p class="quiz-description">Pick a topic, grade, and difficulty level to begin your quiz!</p>
    </header>

    <form class="quiz-selection">
      <div class="quiz-field">
        <label for="quiz-topic" class="quiz-label">Choose a Topic:</label>
        <select id="quiz-topic" class="quiz-dropdown">
          <option value="math">Math</option>
          <option value="science">Science</option>
          <option value="history">History</option>
          <option value="english">English</option>
        </select>
      </div>

      <div class="quiz-field">
        <label for="quiz-grade" class="quiz-label">Select Your Grade:</label>
        <select id="quiz-grade" class="quiz-dropdown">
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

      <div class="quiz-field">
        <label for="quiz-difficulty" class="quiz-label">Select Difficulty:</label>
        <select id="quiz-difficulty" class="quiz-dropdown">
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>

      <button  onClick={<Question/>}  type="button" class="quiz-start-button">Start Quiz</button>
    </form>
  </section>

  <aside class="quiz-performance-section">
    <h2 class="quiz-performance-title">Your Previous Performances</h2>
    <ul class="quiz-performance-list">
      <li>
        <strong>Quiz:</strong> Math (Medium)<br />
        <strong>Score:</strong> 85%<br />
        <strong>Date:</strong> Dec 5, 2024
      </li>
      <li>
        <strong>Quiz:</strong> Science (Hard)<br />
        <strong>Score:</strong> 70%<br />
        <strong>Date:</strong> Dec 3, 2024
      </li>
      <li>
        <strong>Quiz:</strong> History (Easy)<br />
        <strong>Score:</strong> 95%<br />
        <strong>Date:</strong> Nov 30, 2024
      </li>
    </ul>
  </aside>
</div>
<Question/>
</div>

  )
}

export default Quizes

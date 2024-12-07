import React from 'react'

const Home = () => {
  return (
<div className="home">
    <div className="home-container">
    <div className="home-left">
       <h2 className="home-left-logo">
            Best learning platform 
       </h2>
       <h2 className="home-left-tagline">For Learning</h2>
       <p className="home-left-para">
       Welcome to our educational hub! Explore interactive games, exciting quizzes, and creative activities tailored for students from classes 1 to 10. Designed to make learning fun and engaging, our platform helps students master concepts while enjoying the process. Teachers can also access resources to enhance classroom experiences and inspire young minds!"
       </p>
       <div className="buttons">
       <button className='join'>Join for free</button>
       <button className='subscription'>Join with subscription</button>
       </div>
    </div>
    <div className="home-right">
       <img src="./public/1.png" alt="" />
    </div>
    </div>
    <div className="home-second-container">
        <div className="home-second-child">
        <h2 className="game">Most Popular Games</h2>
        <button className='vgame'>View all</button>
        </div>  
        <div className="home-second-game">
               <div className="second-game-child1">
               <div class="courses">
  <div class="course-card">
    <div class="image-wrapper">
<img src="./public/mgames2.jpg" alt="" />  
    </div>
    <div class="course-info">
      <h3>Rocket Launch</h3>
      <p>Rocket Launch  
      Embark on an exciting journey through a virtual world filled with puzzles, quizzes, and challenges that test and enhance  </p>
      <button class="enroll-button">Lets Play</button>
    </div>
  </div>
  <div class="course-card">
    <div class="image-wrapper">
<img src="./public/mgames1.jpg" alt="" />
    </div>
    <div class="course-info">
      <h3>Jump Ladder</h3>
      <p>Jump Ladder is an engaging educational game designed to make learning fun and interactive! Players climb a virtual ladder by solving problems. </p>
      <button class="enroll-button">Lets play</button>
    </div>
  </div>
</div>
               </div>
        </div>
    </div>
    <div className="home-second-container">
        <div className="home-second-child">
        <h2 className="game">Most Popular Quizzes</h2>
        <button className='vgame'>View all</button>
        </div>  
        <div className="home-second-game">
               <div className="second-game-child1">
               <div class="courses">
  <div class="course-card">
    <div class="image-wrapper">
<img src="./public/math.png" alt="" />  
    </div>
    <div class="course-info">
      <h3>Math Quiz</h3>
      <p>Engage in a fun, interactive math quiz designed to challenge problem-solving skills, improve accuracy, and make learning enjoyable!  </p>
      <button class="enroll-button">Lets play</button>
    </div>
  </div>
  <div class="course-card">
    <div class="image-wrapper">
<img src="./public/science.png" alt="" />
    </div>
    <div class="course-info">
      <h3>Science Quiz</h3>
      <p>Explore the wonders of science with an exciting quiz to test knowledge, spark curiosity, and enhance learning for all!</p>
      <button class="enroll-button">Lets play</button>
    </div>
  </div>
</div>
               </div>
        </div>
        
        
    </div>
    <div className="home-second-container">
        <div className="home-second-child">
        <h2 className="game">Most Popular Puzzles</h2>
        <button className='vgame'>View all</button>
        </div>  
        <div className="home-second-game">
               <div className="second-game-child1">
               <div class="courses">
  <div class="course-card">
    <div class="image-wrapper">
<img src="./public/puzz1.png" alt="" />  
    </div>
    <div class="course-info">
      <h3>Math Puzzle</h3>
      <p>Engage in a fun, interactive math puzzle designed to challenge problem-solving skills, improve accuracy, and make learning enjoyable!  </p>
      <button class="enroll-button">Lets Go</button>
    </div>
  </div>
  <div class="course-card">
    <div class="image-wrapper">
<img src="./public/periodic.jpg" alt="" />
    </div>
    <div class="course-info">
      <h3>Science Puzzle</h3>
      <p>Fill all the element in the periodic table to win the game. Be the best and get the highest score!. Remember all the elements in the table.</p>
      <button class="enroll-button">Lets Go</button>
    </div>
  </div>
</div>
               </div>
        </div>
        
        
    </div>
</div>
  )
}

export default Home

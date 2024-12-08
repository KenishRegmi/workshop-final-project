import React from 'react';
import { Link } from 'react-router-dom';

const Leaderboard = () => {
  const leaderboardData = [
    { rank: 1, name: "John Doe", score: 1500 },
    { rank: 2, name: "Jane Smith", score: 1400 },
    { rank: 3, name: "Alex Johnson", score: 1300 },
    { rank: 4, name: "Maria Garcia", score: 1200 },
    { rank: 5, name: "Michael Brown", score: 1100 },
  ];

  return (
    <div className="leaderboard-container">
      <h2 className="leaderboard-title">Leaderboard</h2>
      <div className="leaderboard">
        <table className="leaderboard-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {leaderboardData.map((player) => (
              <tr key={player.rank}>
                <td className="rank">{player.rank}</td>
                <td className="name">{player.name}</td>
                <td className="score">{player.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const Games = () => {
  return (
    <div className="games">
      <div className="home-second-container">
        <div className="home-second-child">
          <h2 className="game">Most Popular Games</h2>
        </div>  
        <div className="home-second-game">
          <div className="second-game-child1">
            <div className="courses">
              <div className="course-card">
                <div className="image-wrapper">
                  <img src="./public/mgames2.jpg" alt="" />  
                </div>
                <div className="course-info">
                  <h3>Rocket Launch</h3>
                  <p>Embark on an exciting journey through a virtual world filled with puzzles, quizzes, and challenges that test and enhance your skills.</p>
                  <button className="enroll-button">Let's Play</button>
                </div>
              </div>
              <div className="course-card">
                <div className="image-wrapper">
                  <img src="./public/flag.png" alt="" />  
                </div>
                <div className="course-info">
                  <h3>Flag Guesser</h3>
                  <p>Flag Guesser is an engaging game. Can you become the best from the rest? I challenge you to be the best.</p>
                  <button className="enroll-button">Let's Play</button>
                </div>
              </div>
              <div className="course-card">
                <div className="image-wrapper">
                  <img src="./public/memory.jpg" alt="" />
                </div>
                <div className="course-info">
                  <h3>Memory Test</h3>
                  <p>Memory Test is an engaging game. Can you become the best from the rest? I challenge you to be the best.</p>
                  <button className="enroll-button">Let's Play</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="home-second-container">
        <div className="home-second-child">
          <h2 className="game">Trending Games</h2>
        </div>  
        <div className="home-second-game">
          <div className="second-game-child1">
            <div className="courses">
              <div className="course-card">
                <div className="image-wrapper">
                  <img src="./public/blaster.jpg" alt="" />  
                </div>
                <div className="course-info">
                  <h3>Math Blaster</h3>
                  <p>Math Blaster is a game where you have to solve math problems within a given time.</p>
                  <button className="enroll-button">Let's Play</button>
                </div>
              </div>
              <div className="course-card">
                <div className="image-wrapper">
                  <img src="./public/fold.jpg" alt="" />  
                </div>
                <div className="course-info">
                  <h3>Foldit</h3>
                  <p>Foldit is a computer game that enables you to contribute to important scientific research in protein folding.</p>
                  <button className="enroll-button">Let's Play</button>
                </div>
              </div>
              <div className="course-card">
                <div className="image-wrapper">
                  <img src="./public/mgames1.jpg" alt="" />
                </div>
                <div className="course-info">
                  <h3>Jump Ladder</h3>
                  <p>Jump Ladder is an engaging educational game designed to make learning fun and interactive. Players climb a virtual ladder by solving problems.</p>
                  <button className="enroll-button">Let's Play</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Leaderboard Section */}
      <Leaderboard />
    </div>
  );
};

export default Games;

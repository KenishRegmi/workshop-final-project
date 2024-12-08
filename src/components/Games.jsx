import React, { useState } from "react";
import { Link } from "react-router-dom";

const Games = () => {
  const [leaderboard, setLeaderboard] = useState([]);

  const handleUpdateLeaderboard = (score) => {
    // Add the player's score to the leaderboard
    const newLeaderboard = [...leaderboard, { player: "Player 1", score }];
    setLeaderboard(newLeaderboard);
  };

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
                  <p>
                    Rocket Launch: Embark on an exciting journey through a
                    virtual world filled with puzzles, quizzes, and challenges.
                  </p>
                  <button className="enroll-button">Let's Play</button>
                </div>
              </div>
              <div className="course-card">
                <div className="image-wrapper">
                  <img src="./public/flag.png" alt="" />
                </div>
                <div className="course-info">
                  <h3>Flag Guesser</h3>
                  <p>
                    Flag Guesser is an engaging game. Can you become the best
                    from the rest?
                  </p>
                  <button className="enroll-button">Let's Play</button>
                </div>
              </div>
              <div className="course-card">
                <div className="image-wrapper">
                  <img src="./public/memory.jpg" alt="" />
                </div>
                <div className="course-info">
                  <h3>Memory Test</h3>
                  <p>
                    Memory Test is an engaging game. Can you become the best
                    from the rest?
                  </p>
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
                  <p>
                    Math Blaster: A game where you solve questions in a given
                    period of time.
                  </p>
                  {/* Link to Math quiz */}
                  <Link to="/math">
                    <button className="enroll-button">Let's Play</button>
                  </Link>
                </div>
              </div>
              <div className="course-card">
                <div className="image-wrapper">
                  <img src="./public/fold.jpg" alt="" />
                </div>
                <div className="course-info">
                  <h3>Rocket Launch</h3>
                  <p>
                    Foldit: A game where you contribute to scientific research
                    on protein folding.
                  </p>
                  <button className="enroll-button">Let's Play</button>
                </div>
              </div>
              <div className="course-card">
                <div className="image-wrapper">
                  <img src="./public/mgames1.jpg" alt="" />
                </div>
                <div className="course-info">
                  <h3>Jump Ladder</h3>
                  <p>
                    Jump Ladder: An educational game where you solve problems to
                    climb the ladder.
                  </p>
                  <button className="enroll-button">Let's Play</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Display the leaderboard */}
      <div className="leaderboard">
        <h2>Leaderboard</h2>
        <ul>
          {leaderboard.map((entry, index) => (
            <li key={index}>
              {entry.player}: {entry.score} points
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Games;

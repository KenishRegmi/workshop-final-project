import React, { useState } from "react";
import { Link } from "react-router-dom";

const Games = () => {
  // State to store leaderboard
  const [leaderboard, setLeaderboard] = useState([]);

  // Function to update the leaderboard
  const handleUpdateLeaderboard = (score) => {
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
                  <img src="./public/blaster.jpg" alt="Math Blaster" />
                </div>
                <div className="course-info">
                  <h3>Math Blaster</h3>
                  <p>
                    Math Blaster: A game where you solve questions in a given
                    period of time. I challenge you to get the 500+ score. Can you
                    do it?
                  </p>
                  <Link
                    to={{
                      pathname: "/math",
                    }}
                  >
                    <button
                      className="enroll-button"
                      onClick={() => handleUpdateLeaderboard(500)}
                    >
                      Let's Play
                    </button>
                  </Link>
                </div>
              </div>
              <div className="course-card">
                <div className="image-wrapper">
                  <img src="./public/mgames1.jpg" alt="Jump Ladder" />
                </div>
                <div className="course-info">
                  <h3>Jump Ladder</h3>
                  <p>
                    Jump Ladder is an engaging educational game designed to make
                    learning fun and interactive! Players climb a virtual ladder
                    by solving problems.
                  </p>
                  <button
                    className="enroll-button"
                    onClick={() => handleUpdateLeaderboard(450)}
                  >
                    Let's Play
                  </button>
                </div>
              </div>
              <div className="course-card">
                <div className="image-wrapper">
                  <img src="./public/fold.jpg" alt="Fold it" />
                </div>
                <div className="course-info">
                  <h3>Fold it</h3>
                  <p>
                    Foldit is a puzzle game where players fold proteins,
                    contributing to real scientific research on protein
                    structures and potential medical breakthroughs.
                  </p>
                  <button
                    className="enroll-button"
                    onClick={() => handleUpdateLeaderboard(300)}
                  >
                    Let's Play
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="home-second-container">
        <div className="home-second-child">
          <h2 className="game">Most Trending Games</h2>
        </div>
        <div className="home-second-game">
          <div className="second-game-child1">
            <div className="courses">
              <div className="course-card">
                <div className="image-wrapper">
                  <img src="./public/memory.jpg" alt="Memory Test" />
                </div>
                <div className="course-info">
                  <h3>Memory Test</h3>
                  <p>
                    Memory Test is an engaging game to improve your memory. Let's see how good your memory is. Can you become the best among the rest?
                  </p>
                  <Link
                    to={{
                      pathname: "/memorytest",
                    }}
                  >
                    <button
                      className="enroll-button"
                      onClick={() => handleUpdateLeaderboard(350)}
                    >
                      Let's Play
                    </button>
                  </Link>
                </div>
              </div>
              <div className="course-card">
                <div className="image-wrapper">
                  <img src="./public/flag.png" alt="Flag Guesser" />
                </div>
                <div className="course-info">
                  <h3>Flag Guesser</h3>
                  <p>
                    Check your geography knowledge. Let's see how many correct flags you can get. Are you a beast in geography?
                  </p>
                  <Link
                    to={{
                      pathname: "/flagguesser",
                    }}
                  >
                    <button
                      className="enroll-button"
                      onClick={() => handleUpdateLeaderboard(400)}
                    >
                      Let's Play
                    </button>
                  </Link>
                </div>
              </div>
              <div className="course-card">
                <div className="image-wrapper">
                  <img src="./public/periodic.jpg" alt="Periodic Table" />
                </div>
                <div className="course-info">
                  <h3>Elementals</h3>
                  <p>
                    Elementals is a science-related game. In this game, you should be able to detect all the elements correctly.
                  </p>
                  <Link
                    to={{
                      pathname: "/periodictablegame",
                    }}
                  >
                    <button
                      className="enroll-button"
                      onClick={() => handleUpdateLeaderboard(450)}
                    >
                      Let's Play
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-second-container">

        <div className="home-second-child">
          <h2 className="game">All Games</h2>
        </div>
        <div className="home-second-game">
          <div className="second-game-child1">
            <div className="courses">
              <div className="course-card">
                <div className="image-wrapper">
                  <img src="./public/memory.jpg" alt="Memory Test" />
                </div>
                <div className="course-info">
                  <h3>Memory Test</h3>
                  <p>
                    Memory Test is an engaging game to improve your memory. Let's see how good your memory is. Can you become the best among the rest?
                  </p>
                  <Link
                    to={{
                      pathname: "/memorytest",
                    }}
                  >
                    <button
                      className="enroll-button"
                      onClick={() => handleUpdateLeaderboard(350)}
                    >
                      Let's Play
                    </button>
                  </Link>
                </div>
              </div>
              <div className="course-card">
                <div className="image-wrapper">
                  <img src="./public/flag.png" alt="Flag Guesser" />
                </div>
                <div className="course-info">
                  <h3>Flag Guesser</h3>
                  <p>
                    Check your geography knowledge. Let's see how many correct flags you can get. Are you a beast in geography?
                  </p>
                  <Link
                    to={{
                      pathname: "/flagguesser",
                    }}
                  >
                    <button
                      className="enroll-button"
                      onClick={() => handleUpdateLeaderboard(400)}
                    >
                      Let's Play
                    </button>
                  </Link>
                </div>
              </div>
              <div className="course-card">
                <div className="image-wrapper">
                  <img src="./public/periodic.jpg" alt="Periodic Table" />
                </div>
                <div className="course-info">
                  <h3>Elementals</h3>
                  <p>
                    Elementals is a science-related game. In this game, you should be able to detect all the elements correctly.
                  </p>
                  <Link
                    to={{
                      pathname: "/periodictablegame",
                    }}
                  >
                    <button
                      className="enroll-button"
                      onClick={() => handleUpdateLeaderboard(450)}
                    >
                      Let's Play
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-second-container">
        <div className="home-second-game">
          <div className="second-game-child1">
            <div className="courses">
              <div className="course-card">
                <div className="image-wrapper">
                  <img src="./public/blaster.jpg" alt="Math Blaster" />
                </div>
                <div className="course-info">
                  <h3>Math Blaster</h3>
                  <p>
                    Math Blaster: A game where you solve questions in a given
                    period of time. I challenge you to get the 500+ score. Can you
                    do it?
                  </p>
                  <Link
                    to={{
                      pathname: "/math",
                    }}
                  >
                    <button
                      className="enroll-button"
                      onClick={() => handleUpdateLeaderboard(500)}
                    >
                      Let's Play
                    </button>
                  </Link>
                </div>
              </div>
              <div className="course-card">
                <div className="image-wrapper">
                  <img src="./public/mgames1.jpg" alt="Jump Ladder" />
                </div>
                <div className="course-info">
                  <h3>Jump Ladder</h3>
                  <p>
                    Jump Ladder is an engaging educational game designed to make
                    learning fun and interactive! Players climb a virtual ladder
                    by solving problems.
                  </p>
                  <button
                    className="enroll-button"
                    onClick={() => handleUpdateLeaderboard(450)}
                  >
                    Let's Play
                  </button>
                </div>
              </div>
              <div className="course-card">
                <div className="image-wrapper">
                  <img src="./public/fold.jpg" alt="Fold it" />
                </div>
                <div className="course-info">
                  <h3>Fold it</h3>
                  <p>
                    Foldit is a puzzle game where players fold proteins,
                    contributing to real scientific research on protein
                    structures and potential medical breakthroughs.
                  </p>
                  <button
                    className="enroll-button"
                    onClick={() => handleUpdateLeaderboard(300)}
                  >
                    Let's Play
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Leaderboard Section */}
      <div className="leaderboard-section">
        <h3 className="leaderboard-title">Leaderboard</h3>
        <div className="leaderboard-list">
          {leaderboard.length > 0 ? (
            leaderboard.map((entry, index) => (
              <div className="leaderboard-entry" key={index}>
                <p>{index + 1}. {entry.player}: {entry.score} points</p>
              </div>
            ))
          ) : (
            <p>No leaderboard data available yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Games;

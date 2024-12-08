import React, { useState } from "react";
import { Link } from "react-router-dom";

const Games = () => {
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
                    period of time.I challenge you to get the 500+ score.Can you
                    do it?
                  </p>
                  <Link
                    to={{
                      pathname: "/math",
                    }}
                  >
                    <button className="enroll-button">Let's Play</button>
                  </Link>
                </div>
              </div>
              <div className="course-card">
                <div className="image-wrapper">
                  <img src="./public/mgames1.jpg" alt="" />
                </div>
                <div className="course-info">
                  <h3>Jump Ladder</h3>
                  <p>
                    Jump Ladder is an engaging educational game designed to make
                    learning fun and interactive! Players climb a virtual ladder
                    by solving problems.{" "}
                  </p>
                  <button className="enroll-button">Lets play</button>
                </div>
              </div>
              <div className="course-card">
                <div className="image-wrapper">
                  <img src="./public/fold.jpg" alt="" />
                </div>
                <div className="course-info">
                  <h3>Fold it</h3>
                  <p>
                    Foldit is a puzzle game where players fold proteins,
                    contributing to real scientific research on protein
                    structures and potential medical breakthroughs.{" "}
                  </p>
                  <button className="enroll-button">Lets play</button>
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
                  <img src="./public/memory.jpg" alt="Math Blaster" />
                </div>
                <div className="course-info">
                  <h3>Memory Test</h3>
                  <p>
                    Memory Test is engaging game to improve your memory.Lets see how good is your memory.Can you become the best among the rest?
                  </p>
                  <Link
                    to={{
                      pathname: "/memorytest",
                    }}
                  >
                    <button className="enroll-button">Let's Play</button>
                  </Link>
                </div>
              </div>
              <div className="course-card">
                <div className="image-wrapper">
                  <img src="./public/flag.png" alt="" />
                </div>
                <div className="course-info">
                  <h3>Flag Guesser</h3>
                  <p>
                  Check your Geography knowledge. Let see how many correct flags can you get. Are you a beast in Geogrpahy{" "}
                  </p>
                  <Link
                    to={{
                      pathname: "/flagguesser",
                    }}
                  >
                    <button className="enroll-button">Let's Play</button>
                  </Link>                </div>
              </div>
              <div className="course-card">
                <div className="image-wrapper">
                  <img src="./public/fold.jpg" alt="" />
                </div>
                <div className="course-info">
                  <h3>Fold it</h3>
                  <p>
                    Foldit is a puzzle game where players fold proteins,
                    contributing to real scientific research on protein
                    structures and potential medical breakthroughs.{" "}
                  </p>
                  <button className="enroll-button">Lets play</button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Games;

// Leaderboard.js
import React, { useState, useEffect } from 'react';

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [playerScore, setPlayerScore] = useState(null);

  useEffect(() => {
    const score = localStorage.getItem("score"); // Get score from local storage
    if (score) {
      setPlayerScore(score);
    }

    // Dummy leaderboard data
    const data = [
      { rank: 1, name: "John Doe", score: 1500 },
      { rank: 2, name: "Jane Smith", score: 1400 },
      { rank: 3, name: "Alex Johnson", score: 1300 },
      { rank: 4, name: "Maria Garcia", score: 1200 },
      { rank: 5, name: "Michael Brown", score: 1100 },
    ];

    setLeaderboardData(data);
  }, []);

  return (
    <div className="leaderboard-container">
      <h2 className="leaderboard-title">Leaderboard</h2>
      {playerScore && (
        <div className="player-score">
          <h3>Your Score: {playerScore}</h3>
        </div>
      )}
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
              <td>{player.rank}</td>
              <td>{player.name}</td>
              <td>{player.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;

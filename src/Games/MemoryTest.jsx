import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import "./MemoryTest.css";

const SimpleMemoryGame = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [clickCount, setClickCount] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  // Initialize cards
  useEffect(() => {
    const cardImages = ["🍎", "🎩", "🐄", "🍾"]; // Simple emojis
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((image, index) => ({
        id: index,
        image,
        flipped: false,
        matched: false,
      }));
    setCards(shuffledCards);
  }, []);

  const handleFlip = (cardId) => {
    if (flippedCards.length < 2) {
      setClickCount(clickCount + 1);
      const updatedCards = cards.map((card) =>
        card.id === cardId ? { ...card, flipped: true } : card
      );
      setCards(updatedCards);
      setFlippedCards((prev) => [...prev, cardId]);
    }
  };

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [firstId, secondId] = flippedCards;
      const firstCard = cards.find((card) => card.id === firstId);
      const secondCard = cards.find((card) => card.id === secondId);

      if (firstCard.image === secondCard.image) {
        setMatchedPairs(matchedPairs + 1);
        setCards((prevCards) =>
          prevCards.map((card) =>
            card.id === firstId || card.id === secondId
              ? { ...card, matched: true }
              : card
          )
        );
      } else {
        setTimeout(() => {
          setCards((prevCards) =>
            prevCards.map((card) =>
              card.id === firstId || card.id === secondId
                ? { ...card, flipped: false }
                : card
            )
          );
        }, 1000);
      }
      setFlippedCards([]);
    }
  }, [flippedCards, cards]);

  useEffect(() => {
    if (matchedPairs === 4) {
      setGameOver(true);
    }
  }, [matchedPairs]);

  const resetGame = () => {
    setMatchedPairs(0);
    setClickCount(0);
    setGameOver(false);
    const cardImages = ["🍎", "🎩", "🐄", "🍾"];
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((image, index) => ({
        id: index,
        image,
        flipped: false,
        matched: false,
      }));
    setCards(shuffledCards);
  };

  return (
    <div className="memory">
        <div className="memory-container">
      <h1>Memory Game</h1>
      {gameOver ? (
        <div className="game-over">
          <h2>Congratulations! You Win!</h2>
          <p>Total Clicks: {clickCount}</p>
          <button className="reset-button" onClick={resetGame}>
            Play Again
          </button>
        </div>
      ) : (
        <div>
          <p>Click Count: {clickCount}</p>
          <div className="card-grid">
            {cards.map((card) => (
              <div
                key={card.id}
                className={`card ${card.flipped || card.matched ? "flipped" : ""}`}
                onClick={() =>
                  !card.flipped && !card.matched && handleFlip(card.id)
                }
              >
                {card.flipped || card.matched ? (
                  <span className="card-content">{card.image}</span>
                ) : (
                  <span className="card-back">?</span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default SimpleMemoryGame;

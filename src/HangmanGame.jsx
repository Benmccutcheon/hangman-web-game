// HangmanGame.jsx
import React, { useState, useEffect } from "react";
import HangmanCanvas from "./HangmanCanvas";
import "./HangmanGame.css";

const wordData = {
  programming: [
    "REACT",
    "JAVASCRIPT",
    "DEVELOPER",
    "HANGMAN",
    "COMPONENT",
    "FUNCTION",
    "VARIABLE",
    "BROWSER",
    "SERVER",
    "DATABASE",
    "API",
    "FLUTTER",
    "ANDROID",
    "GITHUB",
    "TYPESCRIPT",
  ],
  anime: [
    "ONEPIECE",
    "NARUTO",
    "POKEMON",
    "GOKU",
    "LUFFY",
    "ZORO",
    "SAITAMA",
    "TITAN",
    "SHONEN",
    "AKIRA",
    "EVANGELION",
    "BLEACH",
    "HINATA",
    "KAKASHI",
  ],
  travel: [
    "TOKYO",
    "KYOTO",
    "OSAKA",
    "LONDON",
    "SYDNEY",
    "AUCKLAND",
    "BANGKOK",
    "BALI",
    "HANOI",
    "SINGAPORE",
    "MELBOURNE",
    "QUEENSTOWN",
    "PHUKET",
    "CHIANGMAI",
  ],
  animals: [
    "ELEPHANT",
    "GIRAFFE",
    "DOLPHIN",
    "PENGUIN",
    "TIGER",
    "LION",
    "KANGAROO",
    "PANDA",
    "ZEBRA",
    "CHEETAH",
    "EAGLE",
    "WHALE",
    "SHARK",
    "PARROT",
  ],
};

const categories = Object.keys(wordData);

const HangmanGame = () => {
  const [category, setCategory] = useState(categories[0]);
  const [word, setWord] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [mistakes, setMistakes] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);

  const chooseRandomWord = (cat) => {
    const list = wordData[cat];
    const randomIndex = Math.floor(Math.random() * list.length);
    return list[randomIndex].toUpperCase();
  };

  const startGame = (selectedCategory) => {
    setCategory(selectedCategory);
    setWord(chooseRandomWord(selectedCategory));
    setGuessedLetters([]);
    setMistakes(0);
    setGameStarted(true);
  };

  useEffect(() => {
    if (!word && categories.length) {
      startGame(categories[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleGuess = (letter) => {
    if (!gameStarted || guessedLetters.includes(letter)) return;

    setGuessedLetters([...guessedLetters, letter]);
    if (!word.includes(letter)) {
      setMistakes(mistakes + 1);
    }
  };

  const isGameWon = () => {
    if (!word) return false;
    return word
      .split("")
      .every((letter) => guessedLetters.includes(letter));
  };

  const isGameLost = () => {
    return mistakes >= 6;
  };

  const resetGame = () => {
    setWord(chooseRandomWord(category));
    setGuessedLetters([]);
    setMistakes(0);
  };

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <div className="hangman-container">
      <h1>Hangman</h1>

      {/* Category selection (only before game starts or you can always show it) */}
      {!gameStarted ? (
        <div className="category-select">
          <p>Choose a category:</p>
          <div className="category-buttons">
            {categories.map((cat) => (
              <button
                key={cat}
                className="category-button"
                onClick={() => startGame(cat)}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <>
          <div className="category-label">Category: {category}</div>

          <HangmanCanvas mistakes={mistakes} />

          <div className="word-display">
            {word.split("").map((letter, index) => (
              <span
                key={index}
                className={`letter ${
                  guessedLetters.includes(letter) ? "guessed" : ""
                }`}
              >
                {guessedLetters.includes(letter) ? letter : ""}
              </span>
            ))}
          </div>

          <div className="keyboard">
            {alphabet.map((letter) => (
              <button
                key={letter}
                className="keyboard-button"
                onClick={() => handleGuess(letter)}
                disabled={guessedLetters.includes(letter) || isGameWon() || isGameLost()}
              >
                {letter}
              </button>
            ))}
          </div>

          {isGameWon() && (
            <div className="result-message win">🎉 You won!</div>
          )}

          {isGameLost() && (
            <div className="result-message lose">
              You lost! The word was: <strong>{word}</strong>
            </div>
          )}

          <button className="new-game-button" onClick={resetGame}>
            New Game
          </button>
        </>
      )}
    </div>
  );
};

export default HangmanGame;

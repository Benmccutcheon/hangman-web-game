import { useEffect, useState } from "react";
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
    "FLUTTER",
    "ANDROID",
    "GITHUB",
    "TYPESCRIPT",
    "PYTHON",
    "CODING",
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
    "BLEACH",
    "HINATA",
    "KAKASHI",
    "TOTODORO",
    "PIKACHU",
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
    "PASSPORT",
    "BACKPACK",
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
    "OCTOPUS",
    "KOALA",
  ],
};

const categories = Object.keys(wordData);
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function HangmanGame() {
  const [category, setCategory] = useState("programming");
  const [word, setWord] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [mistakes, setMistakes] = useState(0);

  const chooseRandomWord = (selectedCategory) => {
    const words = wordData[selectedCategory];
    const randomIndex = Math.floor(Math.random() * words.length);

    return words[randomIndex];
  };

  const startGame = (selectedCategory = category) => {
    setCategory(selectedCategory);
    setWord(chooseRandomWord(selectedCategory));
    setGuessedLetters([]);
    setMistakes(0);
  };

  useEffect(() => {
    startGame("programming");
  }, []);

  const isGameWon = () => {
    return (
      word.length > 0 &&
      word.split("").every((letter) => guessedLetters.includes(letter))
    );
  };

  const isGameLost = () => mistakes >= 6;

  const handleGuess = (letter) => {
    if (
      guessedLetters.includes(letter) ||
      isGameWon() ||
      isGameLost()
    ) {
      return;
    }

    setGuessedLetters((currentGuesses) => [...currentGuesses, letter]);

    if (!word.includes(letter)) {
      setMistakes((currentMistakes) => currentMistakes + 1);
    }
  };

  return (
    <main className="hangman-container">
      <h1>Hangman</h1>

      <section className="category-select" aria-label="Choose a category">
        <p>Choose a category:</p>

        <div className="category-buttons">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              className={`category-button ${
                category === item ? "active" : ""
              }`}
              onClick={() => startGame(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </div>
      </section>

      <p className="category-label">
        Category: {category.charAt(0).toUpperCase() + category.slice(1)}
      </p>

      <HangmanCanvas mistakes={mistakes} />

      <p className="mistakes-count">Mistakes: {mistakes} / 6</p>

      <section className="word-display" aria-label="Hidden word">
        {word.split("").map((letter, index) => {
          const isGuessed = guessedLetters.includes(letter);

          return (
            <span
              key={`${letter}-${index}`}
              className={`letter ${isGuessed ? "guessed" : ""}`}
            >
              {isGuessed ? letter : ""}
            </span>
          );
        })}
      </section>

      <section className="keyboard" aria-label="Letter keyboard">
        {alphabet.map((letter) => (
          <button
            key={letter}
            type="button"
            onClick={() => handleGuess(letter)}
            disabled={
              guessedLetters.includes(letter) || isGameWon() || isGameLost()
            }
          >
            {letter}
          </button>
        ))}
      </section>

      {isGameWon() && (
        <p className="result-message win">🎉 You won!</p>
      )}

      {isGameLost() && (
        <p className="result-message lose">
          You lost! The word was: <strong>{word}</strong>
        </p>
      )}

      <button
        type="button"
        className="new-game-button"
        onClick={() => startGame(category)}
      >
        New Game
      </button>
    </main>
  );
}

export default HangmanGame;

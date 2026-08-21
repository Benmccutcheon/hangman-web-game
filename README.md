# Hangman Web Game

A small Hangman game built with React and Vite. I made this project to practise working with React state, component props, conditional rendering, event handling, and responsive CSS.

Players choose a category, guess letters using the on-screen keyboard, and try to reveal the word before the hangman is fully drawn.

## Features

- Four selectable categories: Programming, Anime, Travel, and Animals
- Random word selection for each new game
- On-screen A–Z keyboard
- Duplicate guesses are disabled
- Visible blank letter spaces so players can see the word length
- Six-mistake limit
- Animated SVG hangman drawing: a new body part fades in after every incorrect guess
- Win and loss messages
- New Game button that keeps the current category and selects another random word
- Responsive layout for desktop and mobile screens

## Built with

- React
- JavaScript (JSX)
- TypeScript
- Vite
- CSS

## How to play

1. Select a category.
2. A random word from that category is chosen.
3. Select letters using the keyboard.
4. Correct letters are revealed in the word.
5. Each incorrect letter adds one part to the hangman.
6. Guess the full word before reaching six mistakes to win.

## Project structure

```text
src/
├── App.jsx
├── HangmanGame.jsx      # Main game state, category selection, keyboard and results
├── HangmanCanvas.jsx    # SVG gallows and animated hangman figure
├── HangmanGame.css      # Game styling and animations
└── main.jsx
```

## What I practised

This project helped me practise:

- Using `useState` to manage the word, category, guessed letters, and mistake count
- Using `useEffect` to start a game when the component first loads
- Passing the number of mistakes from the game component to the SVG component as a prop
- Rendering UI conditionally for guessed letters, win states, and loss states
- Mapping over arrays to create category buttons, keyboard buttons, and letter spaces
- Styling responsive layouts with CSS Grid and media queries
- Adding small UI animations with CSS keyframes

## Ideas for future improvements

- Add difficulty levels and different mistake limits
- Add more word categories and a larger word library
- Support physical keyboard input
- Track score, win streaks, and high scores with local storage
- Add dark mode
- Add sound effects with a mute option
- Add a hint system

## Author

Created by Ben McCutcheon.

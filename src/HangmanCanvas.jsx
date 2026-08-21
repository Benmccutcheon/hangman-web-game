import "./HangmanGame.css";

function HangmanCanvas({ mistakes }) {
  return (
    <svg
      className="hangman-svg"
      viewBox="0 0 200 250"
      role="img"
      aria-label={`Hangman drawing with ${mistakes} mistakes`}
    >
      {/* Gallows: always displayed */}
      <line x1="20" y1="230" x2="100" y2="230" className="gallows" />
      <line x1="60" y1="230" x2="60" y2="20" className="gallows" />
      <line x1="60" y1="20" x2="140" y2="20" className="gallows" />
      <line x1="140" y1="20" x2="140" y2="40" className="gallows" />

      {/* One figure part appears for each incorrect answer */}
      {mistakes >= 1 && (
        <circle
          className="hangman-part"
          cx="140"
          cy="60"
          r="20"
          fill="none"
        />
      )}

      {mistakes >= 2 && (
        <line
          className="hangman-part"
          x1="140"
          y1="80"
          x2="140"
          y2="150"
        />
      )}

      {mistakes >= 3 && (
        <line
          className="hangman-part"
          x1="140"
          y1="92"
          x2="110"
          y2="120"
        />
      )}

      {mistakes >= 4 && (
        <line
          className="hangman-part"
          x1="140"
          y1="92"
          x2="170"
          y2="120"
        />
      )}

      {mistakes >= 5 && (
        <line
          className="hangman-part"
          x1="140"
          y1="150"
          x2="115"
          y2="190"
        />
      )}

      {mistakes >= 6 && (
        <line
          className="hangman-part"
          x1="140"
          y1="150"
          x2="165"
          y2="190"
        />
      )}
    </svg>
  );
}

export default HangmanCanvas;

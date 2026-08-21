// HangmanCanvas.jsx
import React from 'react';

const HangmanCanvas = ({ mistakes }) => {
  return (
    <svg
      viewBox="0 0 200 250"
      width="200"
      height="250"
      style={{ margin: '0 auto', display: 'block' }}
      aria-label="Hangman figure"
    >
      {/* Gallows (always visible) */}
      <line x1="20" y1="230" x2="100" y2="230" stroke="#333" strokeWidth="4" />
      <line x1="60" y1="230" x2="60" y2="20" stroke="#333" strokeWidth="4" />
      <line x1="60" y1="20" x2="140" y2="20" stroke="#333" strokeWidth="4" />
      <line x1="140" y1="20" x2="140" y2="40" stroke="#333" strokeWidth="4" />

      {/* Head – shows when mistakes >= 1 */}
      {mistakes >= 1 && (
        <circle
          cx="140"
          cy="60"
          r="20"
          fill="none"
          stroke="#333"
          strokeWidth="4"
        />
      )}

      {/* Body – shows when mistakes >= 2 */}
      {mistakes >= 2 && (
        <line x1="140" y1="80" x2="140" y2="150" stroke="#333" strokeWidth="4" />
      )}

      {/* Left arm – shows when mistakes >= 3 */}
      {mistakes >= 3 && (
        <line x1="140" y1="90" x2="110" y2="120" stroke="#333" strokeWidth="4" />
      )}

      {/* Right arm – shows when mistakes >= 4 */}
      {mistakes >= 4 && (
        <line x1="140" y1="90" x2="170" y2="120" stroke="#333" strokeWidth="4" />
      )}

      {/* Left leg – shows when mistakes >= 5 */}
      {mistakes >= 5 && (
        <line x1="140" y1="150" x2="115" y2="190" stroke="#333" strokeWidth="4" />
      )}

      {/* Right leg – shows when mistakes >= 6 */}
      {mistakes >= 6 && (
        <line x1="140" y1="150" x2="165" y2="190" stroke="#333" strokeWidth="4" />
      )}
    </svg>
  );
};

export default HangmanCanvas;

import React from 'react';

function Guesses({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map((guess) => (
        <p key={guess.id} className="guess">
          {guess.word}
        </p>
      ))}
    </div>
  );
}

export default Guesses;

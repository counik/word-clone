import React from 'react';

function Guess({ guess = '' }) {
  let chars;

  if (guess === '') {
    chars = ['', '', '', '', ''];
  } else {
    chars = guess.split('');
  }

  return (
    <p className="guess">
      {chars.map((char, index) => (
        <span key={index} className="cell">
          {char}
        </span>
      ))}
    </p>
  );
}

export default Guess;

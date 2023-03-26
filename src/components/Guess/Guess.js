import React from 'react';
import { range } from '../../utils';

function Guess({ guess }) {
  return (
    <p className="guess">
      {range(5).map((number) => (
        <span key={number} className="cell">
          {guess ? guess[number] : null}
        </span>
      ))}
    </p>
  );
}

export default Guess;

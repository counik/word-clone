import React from 'react';
import { range } from '../../utils';

function Guess({ guess }) {
  return (
    <p className="guess">
      {range(5).map((number) => (
        <span
          key={number}
          className={`cell ${guess ? guess[number].status : ''}`}
        >
          {guess ? guess[number].letter : null}
        </span>
      ))}
    </p>
  );
}

export default Guess;

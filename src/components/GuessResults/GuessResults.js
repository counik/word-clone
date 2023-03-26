import React from 'react';
import Guess from '../Guess';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessResults({ guesses }) {
  const emptyGuesses = range(guesses.length, NUM_OF_GUESSES_ALLOWED).map(
    (number) => {
      return <Guess key={number} />;
    }
  );

  return (
    <div className="guess-results">
      {guesses.map((guess, index) => (
        <Guess key={index} guess={guess} />
      ))}
      {emptyGuesses}
    </div>
  );
}

export default GuessResults;

import React from 'react';
import GuessInput from '../GuessInput';
import Guesses from '../Guesses';

import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function saveGuess(guess) {
    const nextGuess = { id: Math.random(), word: guess };
    const nextGuesses = [...guesses, nextGuess];
    setGuesses(nextGuesses);
  }

  return (
    <>
      <Guesses guesses={guesses} />
      <GuessInput saveGuess={saveGuess} />
    </>
  );
}

export default Game;

import React from 'react';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import GameResultBanner from '../GameResultBanner';

import { checkGuess } from '../../game-helpers';
import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { GAME_STATUSES } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState(GAME_STATUSES.pending);

  function saveGuess(guess) {
    const nextGuess = checkGuess(guess, answer);
    setGuesses([...guesses, nextGuess]);
    updateGameStatusWithGuess(nextGuess);
  }

  function updateGameStatusWithGuess(nextGuess) {
    const isGameWon = nextGuess.every((letter) => letter.status === 'correct');
    const isGameLost =
      !isGameWon && guesses.length + 1 >= NUM_OF_GUESSES_ALLOWED;

    if (isGameWon) {
      setGameStatus(GAME_STATUSES.won);
      return;
    }

    if (isGameLost) {
      setGameStatus(GAME_STATUSES.lost);
      return;
    }
  }
  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput saveGuess={saveGuess} gameStatus={gameStatus} />
      {gameStatus !== GAME_STATUSES.pending && (
        <GameResultBanner
          gameStatus={gameStatus}
          guessesCount={guesses.length}
          answer={answer}
        />
      )}
    </>
  );
}

export default Game;

import React from 'react';
import { GAME_STATUSES } from '../../constants';

function GuessInput({ saveGuess, gameStatus }) {
  const [guess, setGuess] = React.useState('');

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        saveGuess(guess);
        setGuess('');
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      {gameStatus === GAME_STATUSES.pending && (
        <input
          id="guess-input"
          type="text"
          value={guess}
          maxLength={5}
          pattern={'^[A-Z]{5}$'}
          autoComplete="off"
          onChange={(event) => {
            const newGuess = event.target.value;
            const nonStrings = /[^a-zA-z]/;
            setGuess(newGuess.replace(nonStrings, '').toUpperCase());
          }}
        />
      )}
    </form>
  );
}

export default GuessInput;

import React from 'react';

function GuessInput() {
  const [guess, setGuess] = React.useState('');

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        console.log({ guess });
        setGuess('');
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        maxLength={5}
        pattern={'^[A-Z]{5}$'}
        onChange={(event) => {
          const newGuess = event.target.value;
          const nonStrings = /[^a-zA-z]/;
          setGuess(newGuess.replace(nonStrings, '').toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessInput;

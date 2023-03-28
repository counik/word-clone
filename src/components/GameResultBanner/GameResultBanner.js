import React from 'react';
import { GAME_STATUSES } from '../../constants';

function GameResultBanner({ gameStatus, guessesCount, answer }) {
  const isGameWon = gameStatus === GAME_STATUSES.won;
  const classes = isGameWon ? 'happy banner' : 'sad banner';

  let content;

  if (isGameWon) {
    const guessesCountMessage =
      guessesCount === 1 ? '1 guess' : `${guessesCount} guesses`;

    content = (
      <>
        <strong>Congratulations!</strong> Got it in
        <strong> {guessesCountMessage}</strong>.
      </>
    );
  } else {
    content = (
      <>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </>
    );
  }

  return (
    <div className={classes}>
      <p>{content}</p>
    </div>
  );
}

export default GameResultBanner;

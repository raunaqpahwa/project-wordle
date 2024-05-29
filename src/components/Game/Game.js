import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import WonBanner from "../WonBanner/WonBanner";
import LostBanner from "../LostBanner/LostBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("in-progress");

  function handleSubmitGuess(tentativeGuess) {
    if (tentativeGuess.toUpperCase() === answer) {
      setGameStatus("won");
    } else if (guesses.length === NUM_OF_GUESSES_ALLOWED - 1) {
      setGameStatus("lost");
    }
    if (tentativeGuess) setGuesses([...guesses, tentativeGuess]);
  }

  return (
    <>
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        gameStatus={gameStatus}
      />
      <GuessResults guesses={guesses} answer={answer} />
      {gameStatus === "won" && <WonBanner tries={guesses.length} />}
      {gameStatus === "lost" && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;

import React from "react";
import Guess from "../Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessResults({ guesses, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((val) => (
        <Guess key={val} value={guesses[val]} answer={answer} />
      ))}
    </div>
  );
}

export default GuessResults;

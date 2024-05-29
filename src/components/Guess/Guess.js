import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ value, answer }) {
  const guessStyle = checkGuess(value, answer);

  return (
    <p className="guess">
      {range(5).map((val) => (
        <span
          key={val}
          className={`cell ${value ? guessStyle[val].status : ""}`}
        >
          {value ? value[val] : ""}
        </span>
      ))}
    </p>
  );
}

export default Guess;

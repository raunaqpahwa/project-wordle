import React from "react";

function GuessInput({ handleSubmitGuess, gameStatus }) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
    handleSubmitGuess(tentativeGuess);
    setTentativeGuess("");
  }

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={tentativeGuess}
        minLength={5}
        maxLength={5}
        required={true}
        onChange={(e) => setTentativeGuess(e.target.value.toUpperCase())}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        disabled={gameStatus !== "in-progress"}
      />
    </form>
  );
}

export default GuessInput;

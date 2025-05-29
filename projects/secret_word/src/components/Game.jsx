import "./Game.css";
import { useState, useRef } from "react";

const Game = ({
  checkLetter,
  pickedWord,
  pickedCategory,
  letters,
  guessedLetters,
  wrongLetters,
  guesses,
  score,
}) => {
  const [inputLetter, setInputLetter] = useState("");

  const letterInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    checkLetter(inputLetter);

    setInputLetter("");
    letterInputRef.current.focus();
  };

  return (
    <div className="game">
      <p className="points">
        <span>Score: {score}</span>
      </p>
      <h1>Guess the word</h1>
      <h3 className="tip">
        Hint about the word: <span>{pickedCategory}</span>
      </h3>
      <p>You have {guesses} attempts left</p>
      <div className="wordContainer">
        {letters.map((letter, i) => {
          return guessedLetters.includes(letter) ? (
            <span key={i} className="letter">
              {letter}
            </span>
          ) : (
            <span key={i} className="blankSquare"></span>
          );
        })}
      </div>
      <div className="letterContainer">
        <p>Start guessing a letter:</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="letter"
            maxLength="1"
            required
            pattern="[a-zA-Z]"
            onChange={(e) => {
              const value = e.target.value;
              // Only allow letters
              if (/^[a-zA-Z]?$/.test(value)) {
                setInputLetter(value);
              }
            }}
            value={inputLetter}
            ref={letterInputRef}
            autoComplete="off"
          />
          <button>Play!</button>
        </form>
      </div>
      <div className="wrongLetterContainer">
        <p>Wrong letters:</p>
        {wrongLetters.length > 0 ? (
          wrongLetters.map((letter, i) => <span key={i}>{letter}, </span>)
        ) : (
          <span>No wrong letters so far!</span>
        )}
      </div>
    </div>
  );
};

export default Game;

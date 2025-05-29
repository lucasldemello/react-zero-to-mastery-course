import "./Game.css";

const Game = ({ checkLetter }) => {
  return (
    <div className="game">
      <p className="points">
        <span>Score: 000</span>
      </p>
      <h1>Guess the word</h1>
      <h3 className="tip">
        Hint about the word: <span>Hint</span>
      </h3>
      <div className="wordContainer">
        <span className="letter">A</span>
        <span className="blankSquare"></span>
      </div>
      <div className="letterContainer">
        <p>Start guessing a letter:</p>
        <form>
          <input type="text" name="letter" maxLength="1" />
          <button>Play</button>
        </form>
      </div>
      <div className="wrongLetterContainer">
        <p>Wrong letters:</p>
        <span className="wrongLetter">B, </span>
        <span className="wrongLetter">C</span>
      </div>
    </div>
  );
};

export default Game;

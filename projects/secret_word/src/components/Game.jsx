import "./Game.css";

const Game = ({ checkLetter }) => {
  return (
    <div>
      <h1>Game</h1>
      <button onClick={checkLetter}>End game</button>
    </div>
  );
};

export default Game;

import "./Game.css";

const GameOver = ({ resetGame }) => {
  return (
    <div>
      <h1>Game Over</h1>
      <button onClick={resetGame}>Retry?</button>
    </div>
  );
};

export default GameOver;

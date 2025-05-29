import "./GameOver.css";

const GameOver = ({ resetGame, score }) => {
  return (
    <div className="gameOver">
      <h1>Game Over</h1>
      <h2>
        Your score was: <span>{score}</span>
      </h2>
      <button onClick={resetGame}>Retry?</button>
    </div>
  );
};

export default GameOver;

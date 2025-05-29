import "./StartScreen.css";

const StartScreen = ({ startGame }) => {
  return (
    <div className="start">
      <h1>Secret Word</h1>
      <p>Click the button below to start the game.</p>
      <button onClick={startGame}>Start game</button>
    </div>
  );
};

export default StartScreen;

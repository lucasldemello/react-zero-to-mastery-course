// CSS
import "./App.css";

// React
import { useCallback, useEffect, useState } from "react";

// data
import { wordsList } from "./data/words";

// Components
import StartScreen from "./components/StartScreen";
import Game from "./components/Game";
import GameOver from "./components/GameOver";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  // starts the game
  const startGame = () => {
    setGameStage(stages[1].name);
  };

  // process the input letter
  const checkLetter = () => {
    setGameStage(stages[2].name);
  };

  // reset the game
  const resetGame = () => {
    setGameStage(stages[0].name);
  };

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && <Game checkLetter={checkLetter} />}
      {gameStage === "end" && <GameOver resetGame={resetGame} />}
    </div>
  );
}

export default App;

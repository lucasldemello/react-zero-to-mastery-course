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

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(3);
  const [score, setScore] = useState(0);

  const pickWordAndCategory = () => {
    const categories = Object.keys(words);
    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)];
    const word =
      words[category][
        Math.floor(Math.random() * words[category].length)
      ].toLowerCase();
    return { word, category };
  };

  // starts the game
  const startGame = () => {
    // pick a random word from the words list and set the word and category
    const { word, category } = pickWordAndCategory();

    // create an array of letters from the picked word
    let wordLetters = word.split("").map((l) => l.toLowerCase());

    // fill the states
    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);

    // change the game stage to "game"
    setGameStage(stages[1].name);
  };

  // process the input letter
  const checkLetter = (letter) => {
    console.log(`Letter guessed: ${letter}`);
  };

  // reset the game
  const resetGame = () => {
    setGameStage(stages[0].name);
  };

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && (
        <Game
          checkLetter={checkLetter}
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
        />
      )}
      {gameStage === "end" && <GameOver resetGame={resetGame} />}
    </div>
  );
}

export default App;

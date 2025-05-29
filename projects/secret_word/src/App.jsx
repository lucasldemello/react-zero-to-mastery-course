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
  const guessesQuantity = 5;

  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(guessesQuantity);
  const [score, setScore] = useState(0);

  const pickWordAndCategory = useCallback(() => {
    const categories = Object.keys(words);
    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)];
    const word =
      words[category][
        Math.floor(Math.random() * words[category].length)
      ].toLowerCase();
    return { word, category };
  }, [words]);

  // starts the game
  const startGame = useCallback(() => {
    // reset all letters states
    clearLetterStates();

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
  }, [pickWordAndCategory]);

  // process the input letter
  const checkLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase();

    // check if the letter has already been guessed
    if (
      guessedLetters.includes(normalizedLetter) ||
      wrongLetters.includes(normalizedLetter)
    ) {
      return;
    }

    // push guessed letter or remove a guess
    if (letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizedLetter,
      ]);
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter,
      ]);
      setGuesses((actualGuesses) => actualGuesses - 1);
    }
  };

  const clearLetterStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  };

  // reset the game
  const resetGame = () => {
    setScore(0);
    setGuesses(guessesQuantity);

    setGameStage(stages[1].name);
  };

  // lose condition
  useEffect(() => {
    if (guesses <= 0) {
      // reset all states
      clearLetterStates();

      // change the game stage to "end"
      setGameStage(stages[2].name);
    }
  }, [guesses]);

  // check win condition
  useEffect(() => {
    const uniqueLetters = [...new Set(letters)];

    // check if the user has guessed all letters
    if (
      guessedLetters.length === uniqueLetters.length &&
      guessedLetters.length > 0
    ) {
      // increase the score
      setScore((actualScore) => (actualScore += 100));

      // pick a new word and category
      startGame();
    }
  }, [guessedLetters, letters, startGame]);

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
      {gameStage === "end" && <GameOver resetGame={resetGame} score={score} />}
    </div>
  );
}

export default App;

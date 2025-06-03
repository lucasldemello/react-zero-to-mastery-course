import "./App.css";

import { useState, useEffect } from "react";

function App() {
  const [cards, setCards] = useState([]);
  const url = "http://localhost:3000/cards";

  // 1 - Fetch cards data from the API
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setCards(data);
      } catch (error) {
        console.error("Erro ao buscar os cards:", error);
      }
    }

    fetchData();
  }, []); // execute only once when the component mounts

  return (
    <>
      <div className="App">
        <h1 className="cardsList">Cards list</h1>
        <ul>
          {cards.map((card) => (
            <li key={card.id} className="card">
              <h2>
                {card.name} - US$: {card.price}
              </h2>
              <p>{card.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;

import "./App.css";

import { useState, useEffect } from "react";

// 4 - custom hook
import { useFetch } from "./hooks/useFetch";

function App() {
  const [cards, setCards] = useState([]);
  const url = "http://localhost:3000/cards";
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  // 1 - Fetch cards data from the API
  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const res = await fetch(url);
  //       const data = await res.json();
  //       setCards(data);
  //     } catch (error) {
  //       console.error("Erro ao buscar os cards:", error);
  //     }
  //   }

  //   fetchData();
  // }, []); // execute only once when the component mounts

  // 4 - custom hook
  const { data: items, httpConfig, loading, error } = useFetch(url);

  // 2 - Add a card to the list
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const newCard = {
      name,
      price,
      description,
    };

    // const res = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(newCard),
    // });

    // // 3 - Dinamically update the cards list
    // const createdCard = await res.json();
    // setCards((prevCards) => [...prevCards, createdCard]);

    // 5 - POST refactor
    httpConfig(newCard, "POST");

    // Clear the form fields after submission
    setName("");
    setPrice("");
    setDescription("");
  };

  // 9 - delete a item
  const handleRemove = (id) => {
    httpConfig(id, "DELETE");
  };

  return (
    <>
      <div className="App">
        <h1 className="cardsList">Cards list</h1>
        {/* 6 - Loading state */}
        {loading && <p>Loading data...</p>}
        {/* 8 - error handling */}
        {error && <p className="error">{error}</p>}
        {!loading && (
          <ul>
            {items &&
              items.map((card) => (
                <li key={card.id} className="card">
                  <h2>
                    {card.name} - US$: {card.price}
                  </h2>
                  <p>{card.description}</p>
                  <button onClick={() => handleRemove(card.id)}>Remove</button>
                </li>
              ))}
          </ul>
        )}
        <div className="add-card">
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>
            <label>
              Price:
              <input
                type="number"
                name="price"
                value={price}
                step="0.01"
                min="0"
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </label>
            <label>
              Description:
              <textarea
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </label>
            {/* 7 - Loading state for form submission */}
            <button type="submit" disabled={loading}>
              {loading ? "Waiting" : "Add Card"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;

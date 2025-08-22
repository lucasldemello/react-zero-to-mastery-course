import { useState } from "react";

import "./HookUseState.css";

const HookUseState = () => {
  // 1 - useState
  let userName = "Lucas";

  const [name, setName] = useState("Luan");

  const changeNames = () => {
    userName = "Lucas de Melo";
    setName("J. R. R. Tolkien");

    console.log("userName:", userName);
  };

  console.log("name:", name);

  // 2 - useState and input
  const [height, setHeight] = useState(170);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Height submitted:", height);
  };

  return (
    <div>
      {/* useState */}
      <h2>useState</h2>
      <p> variable: {userName}</p>
      <p> useState: {name}</p>
      <button onClick={changeNames}>Change Names</button>
      {/* 2 - useState and input  */}
      <form onSubmit={handleSubmit}>
        <p>Type your height (cm)</p>
        <input
          type="text"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
      <p>Your height is {height} cm.</p>
      <hr />
    </div>
  );
};

export default HookUseState;

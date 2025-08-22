import { useState } from "react";
const HookUseState = () => {
  // 1 - useState
  let userName = "Lucas";

  const [name, setName] = useState("Luan");

  const changeNames = () => {
    userName = "Lucas de Melo";
    setName("J. R. R. Tolkien");
  };

  return (
    <div>
      {/* useState */}
      <h2>useState</h2>
      <p> variable: {userName}</p>
      <p> useState: {name}</p>
      <button onClick={changeNames}>Change Names</button>
      <hr />
    </div>
  );
};

export default HookUseState;

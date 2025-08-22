import { useReducer } from "react";

const HookUseReducer = () => {
  // 1 - Starting with useReducer

  const [number, dispatch] = useReducer((state, action) => {
    return Math.random(state);
  });

  return (
    <div>
      <h2>useReducer</h2>
      <p>Number: {number}</p>
      <button onClick={dispatch}>Randomize the number</button>
      <hr />
    </div>
  );
};

export default HookUseReducer;

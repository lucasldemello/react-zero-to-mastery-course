import { useReducer, useState } from "react";

const HookUseReducer = () => {
  // 1 - Starting with useReducer

  const [number, dispatch] = useReducer((state, action) => {
    return Math.random(state);
  });

  // 2 - Advancing in useReducer
  const initialTasks = [
    {
      id: 1,
      text: "Learn React",
    },
    {
      id: 2,
      text: "Learn GraphQL",
    },
  ];

  const taskReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TASK":
        const newTask = {
          id: Math.random(),
          text: taskText,
        };

        setTaskText("");
        return [...state, newTask]; // study spread operator.
      case "REMOVE_TASK":
        return state.filter((task) => task.id !== action.id);
      default:
        return state;
    }
  };

  const [taskText, setTaskText] = useState("");
  const [tasks, dispatchTasks] = useReducer(taskReducer, initialTasks);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatchTasks({ type: "ADD_TASK", payload: taskText });
  };

  return (
    <div>
      <h2>useReducer</h2>
      <p>Number: {number}</p>
      <button onClick={dispatch}>Randomize the number</button>
      <hr />
      <h3>Tasks</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
        <input type="submit" value="Add Task" />
      </form>
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            onDoubleClick={() =>
              dispatchTasks({ type: "REMOVE_TASK", id: task.id })
            }
          >
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HookUseReducer;

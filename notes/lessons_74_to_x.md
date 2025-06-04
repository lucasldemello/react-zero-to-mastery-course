# React Zero to Mastery Course

## UseRef

- React hook to focus on an element
- Syntax:

```js
const inputRef = useRef(null);

<input ref={inputRef} />;
```

- Usage:

```js
// some random event
inputRef.current.focus();
```

## UseEffect

- React hook for running side effects in function components
- Common uses: data fetching, subscriptions, manual DOM changes
- Runs after every render by default
- Can specify dependencies to control when it runs

```js
useEffect(() => {
  // code to run after render
}, [dependencies]);
```

## UseCallback

- Memoizes a callback function to prevent unnecessary re-creations between renders.
- Useful when passing callbacks to optimized child components.

```js
const memoizedCallback = useCallback(() => {
  // function body
}, [dependencies]);
```

## JSON Server

- An npm package that simulates a RESTful API using a simple JSON file as a database.
- Useful for prototyping, testing, and front-end development without needing a real backend.
- Supports standard HTTP methods (GET, POST, PUT, PATCH, DELETE).
- Easy to set up and configure.
- Example usage:

```bash
npm install -g json-server
json-server --watch db.json
```

## useEffect 2

- A certain action will be executed only once
- Since components are always re-rendering, this is useful when we need one-time actions
- Has a dependency array, which should contain the data that triggers the function to run automatically
- Always present in asynchronous executions

## Retrieving data with react

- We'll need a set of resources to bring up data.
- First, a local state to store the data (useState)
- Make the API call only once (useEffect)
- A way to make an asynchronous request (Fetch API)

## Adding Data

- To add an item, we'll need to retrieve the form data using `useState`.
- After submitting the form, assemble the data in a function and send a POST request to our API.
- This process is similar to retrieving data, but instead of fetching, we are sending new data.

## Dinamic data loading

- If the request was successful, we can add the item to the list after the request, making our app more efficient.

## Fetch custom hook

- It's normal to split functions that can be reused into hooks.
- That's called a `custom hook`.
- Usually, they are stored in a `hooks` folder.
- We must use the pattern `setName`.

## Loading state

- It's normal to have a loading interval between the request and response.
- We can apply that on the hook also.
- Identify when it starts and ends.

## React router

- One of the most popular packages for creating routing structures in React apps.
- Allows our SPA (Single Page Application) to have multiple pages.
- Needs to be installed.
- Easy to configure and use.
- Also provides features like Redirects, Nested Routes, and Not Found (404) Routes.

## Configuring React Router

- To set up routing in React, import `BrowserRouter`, `Routes`, and `Route` from `react-router-dom`:

- **BrowserRouter**: wraps the app to enable routing.
- **Routes**: groups route definitions.
- **Route**: maps a path to a component.

## SearchParams

- A feature that allows you to access query parameters from the URL.
- The `useSearchParams` hook from `react-router-dom` is used to read and update these parameters.
- Useful for filtering, searching, or passing data via the URL.

**Example:**

```js
import { useSearchParams } from "react-router-dom";

const [searchParams, setSearchParams] = useSearchParams();
const query = searchParams.get("query"); // retrieves the value of 'query' from the URL
```

## Context API

- The Context API is a React feature for sharing state and functions globally across components, avoiding prop drilling.
- It enables you to provide data or methods to any component in the component tree, regardless of nesting level.
- To use it, create a context and wrap the relevant part of your app with a Context Provider.
- Context files are typically organized in a `context` folder.
- Common use cases include themes, authentication, and user settings.
- Ensure that any components requiring access to the shared context are wrapped inside the Provider.
- Use CamelCase naming conventions for context and provider components.
- Import the context file wherever you need to consume or provide the context.

## Provider

- The Provider component defines the scope where the context is available.
- It must wrap all components that need to access or update the context value.
- Typically, the Provider is placed in `App.jsx` or `index.js` to cover the entire application or a specific subtree.
- You can nest multiple Providers if you have more than one context.

**Example usage:**

```js
import { MyContextProvider } from "./context/MyContext";

function App() {
  return (
    <MyContextProvider>
      <YourComponent />
    </MyContextProvider>
  );
}
```

**Example of a context provider file (`context/MyContext.js`):**

```js
import { createContext, useState } from "react";

export const MyContext = createContext();

export function MyContextProvider({ children }) {
  const [value, setValue] = useState("default");

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
}
```

## Updating the context value

- To update the context value, use the setter function provided by the context (e.g., `setValue`).
- Access the context in a component using the `useContext` hook.
- Call the setter function with the new value to update the context.
- All components consuming the context will re-render with the updated value.
- Example:

```js
import { useContext } from "react";
import { MyContext } from "./context/MyContext";

function MyComponent() {
  const { value, setValue } = useContext(MyContext);

  const handleChange = () => {
    setValue("new value");
  };

  return (
    <div>
      <p>{value}</p>
      <button onClick={handleChange}>Change Value</button>
    </div>
  );
}
```

## Refactor Context with Hook

- It's a good practice to create a custom hook for consuming context. This simplifies usage and centralizes context logic.
- With a custom hook, you no longer need to import the context directly—just use the hook wherever needed.
- The custom hook is a great place to add validation, such as throwing an error if the context is used outside its Provider.

**Example:**

```js
// context/MyContext.js
import { createContext, useContext, useState } from "react";

export const MyContext = createContext();

export function MyContextProvider({ children }) {
  const [value, setValue] = useState("default");

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
}

// Custom hook for consuming the context
export function useMyContext() {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }
  return context;
}
```

**Usage:**

```js
import { useMyContext } from "./context/MyContext";

function MyComponent() {
  const { value, setValue } = useMyContext();
  // ...
}
```

## useReducer

- `useReducer` is a React hook for managing more complex state logic than `useState` can handle.
- It is ideal when state transitions depend on the previous state or involve multiple sub-values.
- State updates are managed by dispatching actions to a reducer function, which determines how the state changes based on the action type.
- Commonly uses a `switch` statement inside the reducer to handle different action types.

**Example:**

```js
import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  );
}
```

# React Zero to Mastery Course

## useState

- One of the most useds hooks in React.
- Main purpose: 'manage values'
- We can read and update a value using `useState`.
- Changing state causes the component to re-render, unlike just changing a regular variable.

## useState and Inputs

- By linking `useState` with an input, we can control its value and respond to user actions.
- State changes are typically handled through the `onChange` event.
- Inputs managed by state are called "controlled inputs" and can be easily cleared by updating the state.
- After completing a form, you can combine the state values and send the data to the back-end.

## useReducer

- `useReducer` is similar to `useState`: both manage state (values) in a component.
- The key difference: `useReducer` lets you run a function every time the state changes.
- With `useReducer`, you provide:
  - The current state value.
  - A reducer function that decides how to update the state based on an action.
- Think of `useReducer` as a way to handle more complex state logic, especially when state updates depend on the previous state or involve multiple actions.
- Easy way to remember:
  - `useState` = simple value changes.
  - `useReducer` = complex updates using a function.

## Advancing with useReducer

- If you use `useReducer` just to update a simple value, it's basically the same as `useState`.
- `useReducer` shines when you need to handle more complex state changes, like when you have multiple actions. In these cases, you'll often see a `switch` statement inside the reducer function to decide how to update the state based on the action type.
- Easy tip:
  - Use `useState` for simple state.
  - Use `useReducer` when you have several ways to update the state or more complicated logic.

## useEffect

- `useEffect` is one of the most commonly used hooks in React, often used alongside `useState`.
- It allows you to perform side effects in your components, such as updating the DOM, fetching data (HTTP requests), setting up subscriptions, and more.
- The main advantage of `useEffect` is that you can control when the effect runs by specifying dependencies.
- The syntax consists of a function (the effect) and an array of dependencies. The effect runs after every render by default, but you can limit it to run only when certain values change.
- Example use cases: fetching data when a component mounts, updating the document title, or cleaning up resources when a component unmounts.

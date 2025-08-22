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

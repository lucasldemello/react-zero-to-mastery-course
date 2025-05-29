# React Zero to Mastery Course

## Introduction to React

- React is a JavaScript library for building user interfaces.
- It follows the SPA (Single Page Application) model, enabling navigation without reloading the page.
- Uses a reusable component-based architecture.
- Can be integrated into other apps or used standalone.

## Node.js and NPM

- Node.js is a JavaScript runtime built on Google Chrome's V8 engine.
- It allows you to write server-side applications using JavaScript.
- JS code is interpreted and executed with high performance (under the hood often uses C++).
- NPM (Node Package Manager) is Node.js's standard package manager.
- It allows you to install third-party libraries and run project scripts.

## Creating a React Project

- With Create React App:
  `npx create-react-app project-name`
- To start the project:
  `npm start`
- A modern, faster alternative:
  `npm create vite@latest`

## Project Structure

- `node_modules`: stores project dependencies.
- `public`: contains static files and base HTML.
- `src`: contains the application components.
- `src/index.js`: entry point of the React app.
- `src/App.js`: main component of the app.

## React Fundamentals

- Components are functions that return JSX.
- Usually placed in a `components` folder inside `src`.
- Component functions use CamelCase and must be exported.
- Import example: `import ComponentName from './components/ComponentName';`
- JSX is a syntax extension that allows writing HTML in JS.
- JSX must return a single parent element (you can use React Fragments: `<> </>`).
- Comments: use `//` in JS, and `{ /* in JSX */ }` within the return.

## Templates and Expressions

- You can interpolate values inside JSX using `{}`.
- Example: `<p>{message}</p>` renders the value of `message`.

## Events and Functions

- Use events like `onClick` directly in JSX.
- Recommended naming pattern: `handleSomething`, e.g., `handleClick`.

## Conditional Rendering and Lists

- Conditional rendering: `{condition && <Component />}`
- Or using ternary: `condition ? <Yes /> : <No />`
- List rendering with `map()`. Each item should have a unique `key` prop.

## Props and Reusability

- Props allow passing data from a parent to a child component.
- They can be destructured in the function: `({ name, age })`
- Props enable reusing a component with different data.

## React Fragments and Children

- Use React Fragments: `<> </>` to avoid adding extra elements to the DOM.
- `children` allows inserting nested elements inside a custom component.

## State and Hooks

- Hooks add functionality to components (e.g., `useState`, `useEffect`).
- `useState` stores and updates values via `setValue`.
- You can access the previous state: `setValue(prev => newValue)`.

## State Lift

- Lifting state means moving the state logic from a child to a parent component.
- Useful to centralize logic that affects multiple components.

## React and CSS

- Global CSS: usually in `src/index.css`.
- Component CSS: imported in each component (not scoped by default).
- CSS Modules: scoped CSS using `Component.module.css` naming.
- Inline style: `style={{ property: 'value' }}`; not recommended for maintenance.
- Conditional styles: use ternary operators to apply dynamic classes.

## React and Forms

- Use `useState` to store input values.
- `onChange` updates state as you type.
- `onSubmit` triggers a function when the form is submitted. Use `preventDefault()` to stop reload.
- Controlled inputs: the input value is tied to the component's state.
- To clear a form: reset the states to empty strings.
- `textarea` and `select` follow the same logic using `value` and `onChange`.

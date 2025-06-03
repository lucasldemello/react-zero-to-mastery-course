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

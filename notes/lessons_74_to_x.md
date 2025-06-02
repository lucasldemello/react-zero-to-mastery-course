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

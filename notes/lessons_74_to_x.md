# React Zero to Mastery Course

## UseRef

- React hook to focus on a element
- syntax:

```js
const inputRef = useRef(null);

<input ref={inputRef} />;
```

- usage:

```js
// some randon event
InputRef.current.focus();
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

# Secret Word Game

This is a simple word guessing game (similar to Hangman) built with React. The project is part of the [React: The Complete Guide (incl Hooks, React Router, Redux)](https://www.udemy.com/course/react-the-complete-guide-incl-redux/) course from Zero To Mastery Academy.

## Features

- Random word and category selection
- Tracks correct and incorrect guesses
- Score system
- Game over and restart functionality
- Clean and modern UI

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. Clone this repository or download the source code.
2. Open a terminal and navigate to the project folder:
   ```sh
   cd projects/secret_word
   ```
3. Install dependencies:
   ```sh
   npm install
   ```

### Running the App

To start the development server, run:

```sh
npm run dev
```

This will launch the app in your default browser at [http://localhost:5173](http://localhost:5173) (or another port if 5173 is in use).

### Building for Production

To build the app for production:

```sh
npm run build
```

The output will be in the `dist/` folder.

## Project Structure

```
projects/secret_word/
├── public/           # Static assets
├── src/              # Source code
│   ├── components/   # React components
│   ├── data/         # Words data
│   ├── App.jsx       # Main app logic
│   └── ...
├── package.json      # Project metadata and scripts
└── ...
```

## Acknowledgements

- [Matheus Battisti](https://www.udemy.com/user/matheus-battisti/)
- [React](https://react.dev/)

## License

This project is for educational purposes only.

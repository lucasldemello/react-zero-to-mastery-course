# MiniBlog

A simple blog application built with React, allowing users to create, read, update, and delete blog posts. This project uses Firebase for authentication and data storage.

## Features

- User authentication (sign up, login, logout)
- Create, edit, and delete blog posts
- Responsive design

## Technologies

- React
- Firebase (Authentication & Firestore)
- React Router

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/) and create a new project.
2. In the project dashboard, click **Firestore Database** and create a new database in test mode.
3. Go to **Project Settings** > **General** and add a new web app.
4. Copy the Firebase config object.

### Environment Variables

Create a `.env` file in the root directory and add your Firebase config:

```env
VITE_FIREBASE_API_KEY=your_firebase_api_key
```

> **Note:** Never commit your `.env` file to version control.

### Install Dependencies

```bash
npm install
# or
yarn install
```

### Run the App

```bash
npm start
# or
yarn start
```

The app will be available at [http://localhost:3000](http://localhost:3000).

## License

MIT

# MiniBlog

<img src="public/miniblog.png" alt="MiniBlog Preview" width="900" />

[View this file on GitHub](https://github.com/your-username/your-repo/blob/main/projects/miniblog/README.md)

A simple and modern blog application built with React and Firebase. MiniBlog allows users to create, read, update, and delete blog posts with secure authentication and real-time data updates.

## Features

- User authentication (sign up, login, logout) with Firebase Auth
- Create, edit, and delete blog posts
- Real-time updates with Firestore
- Responsive design for all devices
- Route protection for authenticated pages
- User-friendly interface

## Technologies Used

- [React](https://react.dev/)
- [Firebase Authentication](https://firebase.google.com/products/auth)
- [Cloud Firestore](https://firebase.google.com/products/firestore)
- [React Router](https://reactrouter.com/)
- [Vite](https://vitejs.dev/) (for fast development)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Firebase Setup

1. Go to the [Firebase Console](https://console.firebase.google.com/) and create a new project.
2. In your project dashboard, select **Firestore Database** and create a new database (start in test mode for development).
3. Go to **Project Settings** > **General** and register a new web app.
4. Copy your Firebase config object.

### Environment Variables

You can copy the provided `.env.sample` file to `.env` and replace the placeholder values with your Firebase config:

Create a `.env` file in the root directory and add your Firebase config values:

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
npm run dev
# or
yarn dev
```

The app will be available at [http://localhost:5173](http://localhost:5173) by default.

## Folder Structure

```
miniblog/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── services/
│   └── App.jsx
├── .env
├── package.json
└── README.md
```

## License

This project is licensed under the MIT License.

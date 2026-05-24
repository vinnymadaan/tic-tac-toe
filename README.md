# Tic Tac Toe Cartoon

A colorful two-player Tic Tac Toe game built with React, Vite, and Tailwind CSS. The app uses a playful cartoon-style interface with bold colors, chunky buttons, drop shadows, and a simple turn-based game loop.

## Features

- 3x3 Tic Tac Toe board
- Alternating turns for players X and O
- Winner detection across rows, columns, and diagonals
- Draw detection when the board is full
- Reset button to start a fresh game
- Cartoon-inspired styling with Tailwind utility classes
- Fast local development with Vite

## Tech Stack

- React
- Vite
- Tailwind CSS
- ESLint

## Project Structure

```text
tic-tac-toe-cartoon/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── eslint.config.js
├── index.html
├── package.json
└── vite.config.js
```

## How It Works

The main game logic lives in `src/App.jsx`.

- The board is stored as an array of nine cells using React state.
- `isXTurn` tracks which player should move next.
- `handleClick` fills an empty square and switches turns.
- `calculateWinner` checks all winning combinations after each move.
- The game displays a win message, draw message, or current turn status.
- `resetGame` clears the board and starts again with player X.

Global styling is defined in `src/index.css`, including the Tailwind import, Comic Sans font stack, and warm gradient page background.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Run linting:

```bash
npm run lint
```

## Summary

This project is a small React game focused on practicing component state, event handling, conditional rendering, and basic game logic. It keeps the implementation compact while adding a fun visual style through Tailwind CSS.

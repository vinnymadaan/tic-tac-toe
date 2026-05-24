import { useState } from "react";

export default function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6],
  ];

  const calculateWinner = () => {
    for (let combo of winningCombinations) {
      const [a, b, c] = combo;

      if (
        board[a] &&
        board[a] === board[b] &&
        board[a] === board[c]
      ) {
        return board[a];
      }
    }

    return null;
  };

  const winner = calculateWinner();

  const isDraw = board.every((cell) => cell !== null) && !winner;

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = isXTurn ? "X" : "O";

    setBoard(newBoard);
    setIsXTurn(!isXTurn);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXTurn(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-white/40 backdrop-blur-lg border-4 border-white shadow-2xl rounded-[40px] p-8 w-full max-w-md text-center">

        <h1 className="text-5xl font-black text-pink-600 drop-shadow mb-3">
          Tic Tac Toe
        </h1>

        <p className="text-xl font-bold text-purple-700 mb-6">
          {winner
            ? `🎉 Player ${winner} Wins!`
            : isDraw
            ? "😵 It's a Draw!"
            : `✨ Turn: ${isXTurn ? "X" : "O"}`}
        </p>

        <div className="grid grid-cols-3 gap-4">
          {board.map((cell, index) => (
            <button
              key={index}
              onClick={() => handleClick(index)}
              className="
                h-28 w-28
                bg-yellow-200
                hover:bg-yellow-300
                rounded-3xl
                border-4 border-black
                shadow-[6px_6px_0px_black]
                active:translate-y-1
                active:shadow-[3px_3px_0px_black]
                text-5xl
                font-black
                transition-all
                duration-150
                flex items-center justify-center
              "
            >
              <span
                className={
                  cell === "X"
                    ? "text-pink-600"
                    : "text-blue-600"
                }
              >
                {cell}
              </span>
            </button>
          ))}
        </div>

        <button
          onClick={resetGame}
          className="
            mt-8
            bg-pink-500
            hover:bg-pink-600
            text-white
            px-8 py-3
            rounded-full
            border-4 border-black
            shadow-[5px_5px_0px_black]
            active:translate-y-1
            active:shadow-[2px_2px_0px_black]
            text-xl
            font-bold
            transition-all
          "
        >
          🔄 Reset Game
        </button>
      </div>
    </div>
  );
}
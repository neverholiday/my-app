"use client";

import { useState } from "react";

export default function FormPage() {
  const [name, setName] = useState("");

  // Reset handler
  const resetName = () => setName("");

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-black">Welcome! What’s your name?</h1>

      <input
        type="text"
        placeholder="Type your full name here..."
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="text-black placeholder-red-800 border border-blue-400 rounded p-3 mb-4 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div className="flex gap-4 mb-6">
        <button
          onClick={resetName}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          disabled={!name}
        >
          Reset
        </button>
        <button
          onClick={() => alert(`Hello, ${name}!`)}
          disabled={!name}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
        >
          Greet Me
        </button>
      </div>

      {name && (
        <p className="text-lg text-gray-700">
          Hello, <span className="font-semibold">{name}</span>!
        </p>
      )}
    </div>
  );
}

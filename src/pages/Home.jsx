import React from 'react'

export default function Home({ onStart }) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-3">Welcome to Adventurer Isekai</h2>
      <p className="mb-4">A simple web-based adventure prototype.</p>
      <button onClick={onStart} className="px-4 py-2 bg-green-600 rounded">Start Game</button>
    </div>
  )
}

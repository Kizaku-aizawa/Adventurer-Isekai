import React from 'react'

export default function MainLayout({ children, onNavigate = () => {} }) {
  return (
    <div className="min-h-screen p-6">
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Adventurer Isekai</h1>
        <nav className="space-x-3">
          <button onClick={() => onNavigate('home')} className="px-3 py-1 bg-purple-600 rounded">Home</button>
          <button onClick={() => onNavigate('game')} className="px-3 py-1 bg-green-600 rounded">Game</button>
          <button onClick={() => onNavigate('settings')} className="px-3 py-1 bg-gray-600 rounded">Settings</button>
        </nav>
      </header>

      <main>{children}</main>

      <footer className="mt-8 text-sm text-gray-300">© {new Date().getFullYear()} Adventurer Isekai</footer>
    </div>
  )
}

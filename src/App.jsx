import React from 'react'
import MainLayout from './components/Layout/MainLayout'
import Home from './pages/Home'
import Game from './pages/Game'
import Settings from './pages/Settings'

export default function App() {
  // sementara simple routing manual via state
  const [page, setPage] = React.useState('home')
  const renderPage = () => {
    if (page === 'game') return <Game />
    if (page === 'settings') return <Settings />
    return <Home onStart={() => setPage('game')} onSettings={() => setPage('settings')} />
  }

  return (
    <MainLayout onNavigate={(p) => setPage(p)}>
      {renderPage()}
    </MainLayout>
  )
}

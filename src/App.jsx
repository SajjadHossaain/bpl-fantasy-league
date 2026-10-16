import { Suspense, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/sections/hero/Hero'
import Players from './components/sections/players/Players'

const playerFetch = async () => {
  const res = await fetch('data.json')
  return res.json()
}

function App() {
  const playersPromise = playerFetch()
  const [coin,setCoin] = useState(50000)
  return (
    <>
      <header>
        <Navbar coin={coin}></Navbar>
      </header>
      <main>
        <Hero></Hero>
        <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
          <Players playersPromise={playersPromise} setCoin={setCoin}></Players>
        </Suspense>
      </main>
    </>
  );
}

export default App

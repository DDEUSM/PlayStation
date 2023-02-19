import { useState } from 'react'
import Header from './components/Header'
import UserBox from './components/UserBox'
import Slider from  './components/Slider'
import GameStatus from './components/GameStatus'
import BarControl from './components/BarControl'
import backgroundImg from './assets/background/space.png'

function App() {  

  return (
    <div className=''>
      <Header/>
      <UserBox/>
      <Slider/>
      <GameStatus/>
      <BarControl/>
      <img className="backgroundTheme h-full" src={backgroundImg} alt="" />
    </div>
  )
}

export default App

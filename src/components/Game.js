import React from 'react'
import girl from '../Images/fun1.png'
import '../css/Game.css'
import abc from '../Images/2048.png'
function Game() {
  return (
    <div class="game" >
     <hr/>
    <div class="game-main"  data-aos="flip-right">
     
      <img src={girl} alt="girl" />
      <div class="playbtn">
        <h1>2048 GAME</h1>
      <a href="https://2048game-dun.vercel.app" target="_blank"><button>Play!</button></a>
      </div>
     
      
      
      </div>
      <hr/>
    </div>
  )
}

export default Game

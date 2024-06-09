import React from 'react'
import girl from '../Images/fun1.png'
import '../css/Game.css'
import abc from '../Images/2048.png'
function Game() {
  return (
    <div class="soc-main">
       
    <div class="contact-social" data-aos="fade-up-right">
      <h1>Follow Me😎</h1>
    <a href="https://instagram.com/anany_a16?igshid=YTQwZjQ0NmI0OA==" target='_blank' rel="noreferrer">
    <i class="fa-brands fa-instagram font" ></i></a>
    <a href='https://www.linkedin.com/in/ananya-k-7607b4228?utm_source=share&utm_campaign=share_via&utm_c
    ontent=profile&utm_medium=android_app' target='_blank' rel="noreferrer"><i class="fa-brands fa-linkedin-in font"></i></a>
    <a href='https://github.com/ananyashenoy16' target='_blank' rel="noreferrer"><i class="fa-brands fa-github font"></i></a>
    </div>
    

    <div class="game" >
      
    

    <div class="game-main"  data-aos="flip-right">
     
      <img src={girl} alt="girl" />
      <div class="playbtn">
        <h1>Tile Tactics 2048 !</h1>
      <a href="https://2048game-dun.vercel.app" target="_blank"><button>Play!</button></a>
      </div>
     
      
      
      </div>
      <hr/>
    </div></div>
  )
}

export default Game

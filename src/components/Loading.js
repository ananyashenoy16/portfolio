import React from 'react';
import gif from '../Images/ashenoy.gif'
import '../css/Game.css'
function Loading() {
  return (
    <div className="loading">
      <center>
      <img src={gif} alt="" class="load"></img></center>
    </div>
  );
}

export default Loading;

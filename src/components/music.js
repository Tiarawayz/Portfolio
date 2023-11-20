import React from 'react'
import './music.css';

const Music = () => {
  return (
    <div className='note'>
      <h1>About Me </h1>
      <div div className='youtube'>
      <img src='./images/youtube.png' alt='Music' className='music'/>
      <h2>Music runs everything around me</h2>
      <p className='word'>This is my Youtube Channel where I make lyric videos where I have over 200k subscriptions.<br></br> It take me 4 years to hit this goal but I didn't stop because music is my life.<br></br> I am now learning to make beats and learning to play guitar.<br></br> I also find a love for editing and making the videos come to life through the music.</p>

      <div className='me'>
      <img src='./images/last.jpg' alt='last' className='last'/>
      <h2>Video Games</h2>  
      <p className='word'>I always love playing the game.<br></br> I did stop for 6 years and this game right here brought me back to my first love.<br></br> I love this game and the story line is amazing part 1 and part 2, one day I wish to work on a game.</p>
      </div>
      </div>
    </div>
  )
}

export default Music;
import React from 'react';
import './end.css';

const Endpage = () => {
  return (
    <div className='main'>
      <h1 className='end'>Projects</h1>
      <div className='card-container'>
        <img src='./images/trade.png' alt='Trade Lace' className='card-img'/>
        <h1 className='card-title'>Trade Lace</h1>
        <p className='card-description'>Its an app where you can trade shoes with each other instead on buying them and have a slide show with upcoming shoes coming out.</p>
        <button className='card-btn'>React.Js</button>
        <button className='card-btn'>Bootstrap</button>
        <button className='card-btn'>MongoBD</button>
        <button className='card-btn'>Postman</button>
        <button className='card-btn'>JavaScript</button>
        </div>

        
        <div className='card-container'>
        <img src='./images/profile.png' alt='Portfolio' className='card-img'/>
        <h1 className='card-title'>Portfolio</h1>
        <p className='card-description1'>I made this app to showcase my work and my talent</p>
        <div className='card'>
        <button className='card-btn1'>React.Js</button>
        <button className='card-btn1'>JavaScript</button>
        </div>
      </div>
        

        
        <div className='card-container'>
        <img src='./images/broke.png' alt='broke' className='card-img'/>
        <h1 className='card-title'>Broke Buster</h1>
        <p className='card-description'>This was a group project where we create an app where you can post your favorite movie.</p>
        <button className='card-btn'>Python</button>
        <button className='card-btn'>Flask</button>
        <button className='card-btn'>MySQL</button>
        <button className='card-btn'>API</button>
        <button className='card-btn'>Bcrypt</button>
        

      </div>
      </div>
    

  )
}

export default Endpage;
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <div className='logo'> 
      <Link className='logo' to='/'> Tiara Portfolio </Link>
      </div>
      
        <div className='display-menu'>
          <Link className='menu' to='/about'>About Me</Link>
          <Link className='menu' to='/contact'>Contact</Link>
        </div>
      

    </header>
    
    )
}

export default Navbar;
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Mainpage from './show/Mainpage';
import About from './components/about';
import Contact from './components/contact';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Music from './components/music';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      
      <Navbar/>
      <Routes>
        <Route path='/' element={<Mainpage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/aboutme' element={<Music/>}/>
      </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
    
  );
}

export default App;

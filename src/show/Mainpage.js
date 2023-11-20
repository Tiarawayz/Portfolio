import React from 'react'
import Frontpage from '../components/frontend'
import Middlepage from '../components/middlepage'
import Endpage from '../components/endpage'
import Music from '../components/music'
import Contact from '../components/contact'

const Mainpage = () => {
  return (
    <div>
      <Frontpage></Frontpage>
      <Middlepage></Middlepage>
      <Endpage></Endpage>
      <Music></Music>
      <Contact></Contact>
    </div>
  )
}

export default Mainpage

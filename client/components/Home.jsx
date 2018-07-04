import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div className='home'>
      <Link to="/ingredients"><button className='coolButton'>MULCH ME!</button></Link>

    </div>
  )
}

export default Home
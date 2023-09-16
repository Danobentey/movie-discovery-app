import React from 'react'
import { Container } from 'reactstrap';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';



const Home = () => {
  return (
    <div>
      <div className='poster'>
        <Container>
          <Navbar />
        </Container>
      </div>

      <main className="main mt-6">
        <Outlet />
      </main>

    </div>
  )
}

export default Home

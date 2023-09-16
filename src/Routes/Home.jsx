import React from 'react'
import { Container, InputGroup, Input, Button } from 'reactstrap'
import Logo from '../assets/Logo.png';
import SearchButton from '../assets/Search.png';
import Menu from '../assets/Menuicon.png';
import { Outlet } from 'react-router-dom';


const Home = () => {
  return (
    <Container>
      <div className="navbar mt-6 d-flex justify-space-between">
        <div>
        <img src={Logo} alt="tv" />
        </div>
               
        <InputGroup className='w-25'>
          <Input placeholder="What do you want to watch?" />
          <Button color='primary' className="b-none">
            <img src={SearchButton} alt="search"  />
          </Button>
        </InputGroup>

        <div className='d-flex'>
          <img src={Menu} alt="menu" height={"50px"} />
        </div>
      </div>

      <Outlet />
      
    </Container>
  )
}

export default Home

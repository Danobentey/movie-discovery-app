import React from 'react';
import { InputGroup, Button, Input } from 'reactstrap';
import Logo from '../assets/Logo.png';
import SearchButton from '../assets/Search.png';
import Menu from '../assets/Menuicon.png';

const Navbar = () => {
  return (
    <div>
      <div className="navbar mt-6 d-flex justify-space-between">
        <div>
        <img src={Logo} alt="tv" />
        </div>
               
        <InputGroup className='w-50'>
          <Input className='search_input' placeholder="What do you want to watch?" />
          <Button outline color='secondary' className="bg-none">
            <img src={SearchButton} alt="search"  />
          </Button>
        </InputGroup>

        <div className='d-flex'>
          <img src={Menu} alt="menu" height={"50px"} />
        </div>
      </div>
    </div>
  )
}

export default Navbar

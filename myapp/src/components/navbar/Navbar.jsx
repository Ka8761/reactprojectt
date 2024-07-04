import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { TiThMenu } from "react-icons/ti";

const Navbar = () => {
  const [show, setShow] = useState(false)
  const toggleMenu = () =>{
    setShow(!show)
  }
  return (
    <>
    <div className='nav'>
    
      <TiThMenu className='homeicon' onClick={toggleMenu}/>
      <div className= {`navitems ${show? '': 'hide'}`}  >
      <div className='item'>
      <div>HOME PAGE</div>
      <span className='shadow'></span>
      </div>
     
       <div className='item'>
      <div>ABOUT</div>
      <span className='shadow'></span>
      </div>

      <div className='item'>
      <div>FAQ</div>
      <span className='shadow'></span>
      </div>

      <div className='item'>
      <div>CONTACT US</div>
      <span className='shadow'></span>
      </div>

      </div>

      <div className='navbuttons'>
        <button>REGISTER</button>
        <button>LOGIN</button>
      </div>
    </div>
    <div className='navline'></div>
    </>
  )
}

export default Navbar
import React, { useState } from 'react'
import './Nav.css'
import Navlogo from '../Assests/Navlogo.png'
const Nav = () => {
    const [ham,setham]=useState(false);
    function hamburg(){
        setham(!ham);
        console.log(ham)
    }
  return (
    <>
    <div className='Navbar'>
    <img src={Navlogo} alt='Logo'/>
    <div className={`${ham?'Navlinks':'Navlink'}`}>
        <h1>About us</h1>
        <h1>Services</h1>
        <h1>Use Cases</h1>
        <h1>Pricing</h1>
        <h1>Blog</h1>
        <button>Request a quote</button>
    </div>
    <div className= {`${ham?'Hamupd':'Ham'}`} onClick={hamburg} >
        <div className='Line1'></div>
        <div className='Line2'></div>
        <div className='Line3'></div>
        
    </div>
    </div>
    </>
  )
}

export default Nav

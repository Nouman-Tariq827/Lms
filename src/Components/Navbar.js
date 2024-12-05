import React from 'react'
import './Navbar.css';
// import logo from '../Asset/logo-New.png'; 

const Navbar = (props) => {
  return (
   <> 
   <div className='Navbar'>
       <div className='logo-title'> 
      <div className='hamburger'><img src="/Asset/hamburger.png" alt="Logo" width={30}/></div>
      <div className='logo'><img src="/Asset/logo-New.png" alt="Logo" width={69}/></div>
      <div className='title'>Learning Management System</div>
      </div>
      <div className='detail-pic'>
      <div className='bell'><img src="/Asset/bell.png" alt="Logo" width={20}/></div>
      <div className='detail'>{props.name} <br/> ({props.id})</div>
      <div className='Student-pic'></div>
      </div>

    </div>
    </>
  )
}

export default Navbar

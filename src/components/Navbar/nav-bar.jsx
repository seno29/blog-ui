import React from 'react'
import "./nav-bar.css"

function Navbar() {
  return (
     <div className='nav-bar'>
         <div className='nav-title'>Article Direct.</div>
         <div className='d-flex align-items-center justify-content-center'>
            <div className='name-label'>Hello Mradul!</div>
            <button className='p-btn'>Logout</button>
         </div>
     </div>
  )
}

export default Navbar
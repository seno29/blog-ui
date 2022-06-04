import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getLoggedInUserDetails, isLoggedIn } from '../../utility'
import "./nav-bar.css"

function Navbar() {
   const navigate = useNavigate()
   const [userDetails, setuserDetails] = useState({})

   useEffect(() => {
      setuserDetails(getLoggedInUserDetails())
   }, [])
   const logout = () => {
      localStorage.clear()
      navigate("/login")
   }
   return (
      <div className='nav-bar'>
         <div className='nav-title'>Article Direct.</div>
         <div className='d-flex align-items-center justify-content-center'>
            {
               isLoggedIn() &&
               (<><div className='name-label'>Hello {userDetails && userDetails.name && userDetails.name.split(" ")[0]}!</div>
                  <button className='p-btn' onClick={logout}>Logout</button></>)
            }
         </div>
      </div>
   )
}

export default Navbar
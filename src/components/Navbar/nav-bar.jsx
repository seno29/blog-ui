import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getLoggedInUserDetails, isLoggedIn, getCurrentUserRole } from '../../utility'
import "./nav-bar.css"

function Navbar() {
   const navigate = useNavigate()
   const [userDetails, setuserDetails] = useState({})
   const [role, setrole] = useState("")

   useEffect(() => {
      setuserDetails(getLoggedInUserDetails())
      setrole(getCurrentUserRole())
   }, [])
   const logout = () => {
      localStorage.clear()
      navigate("/login")
   }
   const myBlogs = () => {
      navigate("/admin")
   }
   const writeArticle = () => {
      navigate("/write-article")
   }
   const goToHome = () => {
      navigate("/user-dashboard")
   }
   const reviewArticle = () => {
      
   }
   return (
      <div className='nav-bar'>
         <div className='nav-title'>Article Direct.</div>
         <div className='d-flex align-items-center justify-content-center'>
            {
               isLoggedIn() &&
               (<><div className='name-label'>Hello {userDetails && userDetails.name && userDetails.name.split(" ")[0]}!</div>
                  </>)
            }
            {
               isLoggedIn() && ( role === 3) &&
               (
                  <>
                     <div className='nav-op' onClick={reviewArticle}>Review Blogs</div>
                  </>
               )
            }
            {
               isLoggedIn() && (role === 2 || role === 3) &&
               (
                  <>
                  <div className='nav-op' onClick={goToHome}>Home</div>
                  <div className='nav-op' onClick={writeArticle}>Write Blog</div>
                  <div className='nav-op' onClick={myBlogs}>My Blogs</div>
                  </>
               )
            }
            {
               isLoggedIn() &&
               (
                  <>
                     <div className='nav-op' onClick={logout}>Logout</div>
                  </>
               )
            }
            
         </div>
      </div>
   )
}

export default Navbar
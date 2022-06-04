import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import { getBaseUrl, getLoggedInUserDetails } from '../../utility'
import axios from 'axios'
import jwt from 'jwt-decode'

function SecurityCheck() {
  const location = useLocation()
  const navigate = useNavigate()
  const [userData, setuserData] = useState({})
  const [checking, setChecking] = useState(false)
  const [answer, setanswer] = useState("")
  useEffect(() => {
    setuserData(location.state)
  }, [location.state])

  const onSubmit = (e) => {
    e.preventDefault()
    if (answer !== "") {
      setChecking(true)
      const url = getBaseUrl() + "securityCheck"
      axios.post(url, {
        ...userData,
        "secAns": answer
      }).then((res) => {
        setChecking(false)
        const result = res.data;
        
        if(result.status === 200){
          localStorage.setItem("token", result.token)
          const userDetails = getLoggedInUserDetails()
          if(userDetails && userDetails.role ){
            if(userDetails.role === 1 || userDetails.role === 2){
              navigate('/user-dashboard')
            }
            // else if(){
            //   navigate('/admin')
            // }
            else if(userDetails.role === 3){
              navigate('/sup-admin')
            }
          }
        }else{
          alert(result.message)
        }
      }).catch((err) => {
        setChecking(false)
        console.log(err);
        alert("Something went wrong")
      })
    }
  }
  return (
    <div>
      <Container>
        <Row>
          <Col className='col-sm-6 col-sm-6 d-flex height-100vh justify-content-center align-items-center'>
            <div className='main-title'>
              <div>Article</div>
              <div>Direct.</div>
            </div>
          </Col>
          <Col className='col-sm-6 d-flex align-items-center'>

            <form className='d-inline w-100' onSubmit={onSubmit}>
              <div className='f-24 color-light'>Hi {userData.name ? userData.name.split(" ")[0] : ""}, Almost here!</div>
              <div>
                <label className='color-light m-8 mt-10'>Please tell us - <i><b>{userData ? userData.secQues : "Oops! cant load security question"}</b></i></label>
              </div>
              <div><input className='mt-8 w-70' name="answer" type="text" onChange={(e) => setanswer(e.target.value)} value={answer} required placeholder={"Enter Answer here .."} /></div>
              <input className="p-btn mt-28 w-70" type="submit" value={checking ? "Checking you in..." : "Check"} disabled={checking} />
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default SecurityCheck
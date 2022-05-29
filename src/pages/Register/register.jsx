import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

function Register() {
  const navigate = useNavigate();

  const onEmail = (event) => {
    console.log("Value=", event.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    navigate("/user-dashboard")
  }
  
  return (
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

            <label className='color-light m-8'>Name:</label>
            <div><input className='mt-8 w-70' name="name" type="text" onChange={onEmail} /></div>

            <label className='color-light m-8 mt-16'>Email:</label>
            <div><input className='mt-8 w-70' name="email" type="text" onChange={onEmail} /></div>

            <label className='color-light mt-16'>Password:</label>
            <div><input className='mt-8 w-70' name="pass" type="password" onChange={onEmail} /></div>

            <label className='color-light mt-16'>Confirm Password:</label>
            <div><input className='mt-8 w-70' name="con-pass" type="password" onChange={onEmail} /></div>

            <label className='color-light m-8 mt-16'>Select Role:</label>
            <div className='d-flex justify-content-space-between w-70 mt-8'>
              <div className='radio'>
                <input type="radio" name="role" value="USER" />
                <label className='radio-label color-light'>User</label>
              </div>
              <div className='radio'>
                <input type="radio" name="role" value="ADMIN" />
                <label className='radio-label color-light'>Admin</label>
              </div>
              <div className='radio'>
                <input type="radio" name="role" value="SUPER_ADMIN" />
                <label className='radio-label color-light'>Super Admin</label>
              </div>
            </div>
            <input className="p-btn mt-28 w-70" type="submit" value="Register" />
            <div className="color-sec-text mt-8 w-70 text-center">Already have an account?<span> </span>
              <Link className='color-light' to="/login">Login</Link>
            </div>
          </form>
        </Col>
      </Row>
    </Container>
  )
}

export default Register
import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { secQues } from '../../resources/security-questions';
import Navbar from '../../components/Navbar/nav-bar'
import axios from 'axios';
import { getBaseUrl } from '../../utility'

function Register() {
  const navigate = useNavigate();

  const [secQ, setsecQ] = useState([])
  const [selectedQues, setselectedQues] = useState("")
  const [secAns, setsecAns] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [conPassword, setconPassword] = useState("")
  const [name, setName] = useState("")
  const [role, setRole] = useState("1")
  const [isRegistering, setRegistering] = useState(false)

  useEffect(() => {
    console.log("use effect called")
    setsecQ(secQues)
    setselectedQues(secQues[0])
  }, [secQ])

  const onEmail = (event) => {
    console.log("Value=", event.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    if (!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      alert("Enter valid email address")
    }
    else {
      if (password.length > 6) {
        const url = getBaseUrl() + "register"
        setRegistering(true)
        if (conPassword === password) {
          const payload = {
            "email": email,
            "password": password,
            "role": role,
            "name": name,
            "secQues": selectedQues,
            "secAns": secAns
          }
          console.log(payload)
          axios.post(url, payload)
          .then((res) => {
            setRegistering(false)
            const result = res.data;
            if(result.status === 200){
              alert("Registered Successfully... Log In Now")
              navigate("/login")
            }
            else if(result.status === 401){
              alert(result.message)
            }
          })
          .catch((err) => {
            setRegistering(false)
            console.log(err)
            alert("Something went wrong")
          })
        }
        else {
          alert("Passwords do not match!!")
        }
      }
      else {
        alert("Password should be more than 6 characters")
      }
    }
  }

  return (
    <div>
      <Navbar />
      <Container className="mt-100">
        <Row>
          <form className='w-100' onSubmit={onSubmit}>
            <Row>
              <Col className='col-sm-6 align-items-center'>
                <div className='f-24 color-light'>Register Here...</div>
                <div className="mt-28"></div>
                <label className='color-light m-8'>Name:</label>
                <div><input className='mt-8 w-70' name="name" type="text" onChange={(e) => setName(e.target.value)} value={name} required /></div>

                <label className='color-light m-8 mt-16'>Email:</label>
                <div><input className='mt-8 w-70' name="email" type="email" onChange={(e) => setEmail(e.target.value)} value={email} required /></div>

                <label className='color-light mt-16'>Password:</label>
                <div><input className='mt-8 w-70' name="pass" type="password" onChange={(e) => setPassword(e.target.value)} value={password} /></div>

                <label className='color-light mt-16'>Confirm Password:</label>
                <div><input className='mt-8 w-70' name="con-pass" type="password" onChange={(e) => setconPassword(e.target.value)} value={conPassword} /></div>
              </Col>
              <Col className='col-sm-6 align-items-center'>
                <div className="mt-28"></div>
                <label className='color-light mt-28'>Choose Security Question:</label>
                {
                  secQues.map((sq, i) =>
                  (<div className='radio' key={i}>
                    <input type="radio" name="security-question" checked={selectedQues === sq} value={sq} onChange={(e) => setselectedQues(e.target.value)} />
                    <label className='radio-label color-light'>{sq}</label>
                  </div>)
                  )
                }
                <div><input className='mt-8 w-70' name="sec-ans" type="text" value={secAns} onChange={(e) => setsecAns(e.target.value)} placeholder="Answer here" /></div>

                <label className='color-light m-8 mt-28'>Select Role:</label>
                <div className='d-flex justify-content-space-between w-70 mt-8'>
                  <div className='radio'>
                    <input type="radio" name="role" value="1" checked={role === "1"} onChange={(e) => setRole(e.target.value)} />
                    <label className='radio-label color-light'>User</label>
                  </div>
                  <div className='radio'>
                    <input type="radio" name="role" value="2" checked={role === "2"} onChange={(e) => setRole(e.target.value)} />
                    <label className='radio-label color-light'>Admin</label>
                  </div>
                  <div className='radio'>
                    <input type="radio" name="role" checked={role === "3"} onChange={(e) => setRole(e.target.value)} />
                    <label className='radio-label color-light'>Super Admin</label>
                  </div>
                </div>
                <input className="p-btn mt-28 w-70" type="submit" value={isRegistering ? "Registering..." : "Register"} disabled={isRegistering} />
                <div className="color-sec-text mt-8 w-70 text-center">Already have an account?<span> </span>
                  <Link className='color-light' to="/login">Login</Link>
                </div>
                <div className="mt-28"></div>
              </Col>
            </Row>
          </form>

        </Row>
      </Container>
    </div>
  )
}

export default Register
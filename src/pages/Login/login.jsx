import axios from 'axios'
import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { getBaseUrl } from '../../utility'

function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [role, setRole] = useState("1")
    const [isLoggingIn, setIsLoggingIn] = useState(false)


    const onEmail = (event) => {
        setEmail(event.target.value)
    }
    const onPass = (event) => {
        setPassword(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        if (!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
            alert("Enter valid email address")
        }
        else {
            const url = getBaseUrl() + "login"
            setIsLoggingIn(true)
            axios.post(url, {
                "email": email,
                "password": password,
                "role": role
            }).then((res) => {
                setIsLoggingIn(false)
                if (res.status === 200) {
                    const result = res.data;
                    if (result.status === 200) {
                        console.log(result.message)
                        navigate("/security-check", { state: result.data })
                    }
                    else {
                        alert(result.message)
                    }
                }
            }).catch((err) => {
                setIsLoggingIn(false)
                console.log(err);
                alert("Something went wrong")
            })
        }
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

                        <label className='color-light m-8'>Login as:</label>
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
                                <input type="radio" name="role" value="3" checked={role === "3"} onChange={(e) => setRole(e.target.value)} />
                                <label className='radio-label color-light'>Super Admin</label>
                            </div>
                        </div>

                        <label className='color-light m-8 mt-8'>Email:</label>
                        <div><input className='mt-8 w-70' name="email" type="email" onChange={onEmail} value={email} required /></div>

                        <label className='color-light mt-16'>Password:</label>
                        <div><input className='mt-8 w-70' name="pass" type="password" onChange={onPass} value={password} required /></div>

                        <input className="p-btn mt-28 w-70" type="submit" value={isLoggingIn ? "Logging you in..." : "Login"} disabled={isLoggingIn} />
                        <div className="color-sec-text mt-8 w-70 text-center">Dont have an account?<span> </span>
                            <Link className='color-light' to="/register">Register</Link>
                        </div>
                    </form>
                </Col>
            </Row>
        </Container>
    )
}

export default Login
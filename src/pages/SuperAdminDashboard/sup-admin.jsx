import React from 'react'
import Navbar from '../../components/Navbar/nav-bar'
import { Container, Row, Col } from 'react-bootstrap';
import "./sup-admin.css"
import { useNavigate } from 'react-router-dom';

function SupAdmin() {
    const navigate = useNavigate();

    const openRequest = (e) => {
        console.log("Called");
        navigate("/article-req-view") //send article data
    }
    
    return (
        <div>
            <Navbar />
            <Container className="mt-100">
                <Row><Col className="f-24 color-light fw-bold">Pending Requests</Col></Row>
                <Row>
                    <Col>
                        <div className='d-flex a-outer align-items-center' onClick={openRequest}>
                            <div className="a-title f-20">Title</div>
                            <div>
                                <div className="d-flex justify-content-end">Author : Diksha</div>
                                <div className='a-date'>Submitted on : 20 May, 2021</div>
                            </div>
                        </div>
                        <div className='d-flex a-outer align-items-center'>
                            <div className="a-title f-20">Title</div>
                            <div>
                                <div className="d-flex justify-content-end">Author : Diksha</div>
                                <div className='a-date'>Submitted on : 20 May, 2021</div>
                            </div>
                        </div>
                        <div className='d-flex a-outer align-items-center'>
                            <div className="a-title f-20">Title</div>
                            <div>
                                <div className="d-flex justify-content-end">Author : Diksha</div>
                                <div className='a-date'>Submitted on : 20 May, 2021</div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SupAdmin
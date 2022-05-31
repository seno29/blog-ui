import React from 'react'
import Navbar from '../../components/Navbar/nav-bar'
import { Container, Row, Col } from 'react-bootstrap'
import "../ArticleView/article-view.css"

function ArticleRequestView() {
    return (
        <div>
            <Navbar />
            <Container className='outer-container mt-100'>
                <Row>
                    <Col className='col-sm-8 article-title'>Title</Col>
                    <Col className='col-sm-4'>
                        <div className="d-flex justify-content-end">Diksha</div>
                        <div className="a-date">20 May, 2021</div>
                    </Col>
                </Row>
                <Row className="mt-10">
                    <Col>
                        nsdjh sdgu sjdgu sgdu
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col className="d-flex justify-content-end">
                        <button className='p-btn m-10'>Reject</button>
                        <button className='filled-btn m-10'>Approve</button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ArticleRequestView
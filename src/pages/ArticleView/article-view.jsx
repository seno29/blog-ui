import React from 'react'
import "./article-view.css"
import { Container, Row, Col } from 'react-bootstrap';
import { useLocation } from "react-router-dom";
import Navbar from '../../components/Navbar/nav-bar';

function ArticleView(props) {
    const location = useLocation();
    const article = location.state;
    return (
        <div>
            <Navbar />
            <Container className='outer-container mt-100'>
                <Row>
                    <Col className='col-sm-8 article-title'>{ article.title }</Col>
                    <Col className='col-sm-4'>
                        <div className="d-flex justify-content-end">{article.author}</div>
                        <div className="a-date">{article.dateModified}</div>
                    </Col>
                </Row>
                <Row className="mt-10">
                    <Col>
                        {article.content}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ArticleView
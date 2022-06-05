import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/nav-bar'
import { Container, Row, Col } from 'react-bootstrap'
import { useLocation } from "react-router-dom";
import axios from 'axios';
import { getBaseUrl } from '../../utility';
import './article-history.css';

function ArticleHistory() {
    const location = useLocation();
    const article = location.state;
    const [history, sethistory] = useState([])

    useEffect(() => {
        const url = getBaseUrl() + `getArticleHistory/${article.id}`
        axios.get(url, {
            headers: {
                Authorization: "Bearer " + sessionStorage.getItem("token")
            }
        }).then((res) => {
            const result = res.data
            if (result.status === 200) {
                sethistory(result.data)
            }
        })
    }, [])
    return (
        <div>
            <Navbar />
            <div className='h-100px'></div>
            

            <Container className='outer-container mt-10'>
                <div className='f-18 fw-600'><u>Current Version</u></div>
                <Row>
                    <Col className='col-sm-8 article-title'>{article.title}</Col>
                    <Col className='col-sm-4'>
                        <div className="a-date">{article.dateModified}</div>
                    </Col>
                </Row>
                <Row className="mt-10">
                    <Col>
                        {article.content}
                    </Col>
                </Row>


            </Container>
            <Container>
                <div className='f-24 color-light fw-700'>Blog History
                </div>

            </Container>
            {
                history.length !== 0 && history.map((article, i) => (
                    <Container className='outer-container mt-10'>
                        <div className='f-18 fw-600'><u>Version { history.length - i}</u></div>
                        <Row>
                            <Col className='col-sm-8 article-title'>{article.title}</Col>
                            <Col className='col-sm-4'>
                                <div className="a-date">{article.dateModified}</div>
                            </Col>
                        </Row>
                        <Row className="mt-10">
                            <Col>
                                {article.content}
                            </Col>
                        </Row>
                    </Container>
                ))
            }
            {history.length === 0 &&
                <Container>
                    <div className='text-center'>No History</div>
                </Container>}
        </div>

    )
}

export default ArticleHistory
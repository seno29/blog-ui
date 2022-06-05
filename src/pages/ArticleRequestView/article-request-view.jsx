import React from 'react'
import Navbar from '../../components/Navbar/nav-bar'
import { Container, Row, Col } from 'react-bootstrap'
import "../ArticleView/article-view.css"
import { useLocation } from 'react-router-dom'
import { getBaseUrl } from '../../utility'
import axios from 'axios'

function ArticleRequestView() {
    const location = useLocation()
    const article = location.state

    const onReject = () => {
        // const url = getBaseUrl() + "appro"
    }

    const onApprove = () => {
        const url = getBaseUrl() + "approveArticle"
        axios.post(url, article, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        }).then((res) => {
            const result = res.data;
            alert(result.message)
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <div>
            <Navbar />
            <Container className='outer-container mt-100'>
                <Row>
                    <Col className='col-sm-8 article-title'>{article.title}</Col>
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
            <Container>
                <Row>
                    <Col className="d-flex justify-content-end">
                        <button className='p-btn m-10' onClick={onReject}>Reject</button>
                        <button className='filled-btn m-10' onClick={onApprove}>Approve</button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ArticleRequestView
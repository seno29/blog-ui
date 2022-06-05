import React, { useEffect, useState } from 'react'
import { getBaseUrl } from '../../utility'
import Navbar from '../../components/Navbar/nav-bar'
import { Container, Row, Col } from 'react-bootstrap'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ReviewArticle() {
    const [articles, setarticles] = useState({})
    const navigate = useNavigate()

    const onApprove = (article) => {
        navigate("/article-req-view", {state: article})
    }
    useEffect(() => {
        const url = getBaseUrl() + "getArticlesByStatus" //published articles
        axios.post(url, {
            "status": "IN_REVIEW"
        }, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        }).then((res) => {
            const result = res.data;
            if (result.status === 200) {
                console.log(result.data.length)
                setarticles(result.data)
            }
        }).catch((err) => {
            console.log(err)
        })
    }, [])
    return (
        <div>
            <Navbar />
            <div className='h-100px'></div>
            <Container>
                <Row>
                    <Col className="col-sm-2"></Col>
                    <Col className="col-sm-8">
                    <div className='f-24 color-light fw-600'>Review Blogs</div>
                        {
                            articles.length > 0  &&
                            articles.map((article) => (
                                <div className='a-outer' key={article.id + "" + article.articleId}>
                                    <div className="d-flex title-div">
                                        <div className="a-title">{article.title}</div>
                                        <div className="a-author">{article.author}</div>
                                        <button className="p-btn p-12" onClick={(e) => onApprove(article)}><i className="fa fa-edit" /> Approve</button>
                                    </div>
                                    <div className="a-content">{article.content.length > 300 ? article.content.substring(0, 300) + "..." : article.content}</div>
                                    <div className='a-date'>Posted on : {article.dateModified}</div>
                                </div>
                            ))
                        }
                    </Col>
                    <Col className="col-sm-2"></Col>
                </Row>
            </Container>
        </div>
    )
}

export default ReviewArticle
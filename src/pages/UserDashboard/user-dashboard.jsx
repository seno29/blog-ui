import React from 'react'
import Navbar from '../../components/Navbar/nav-bar'
import { Container, Row, Col } from 'react-bootstrap'
import ArticleCard from '../../components/ArticleCard/article-card'
import 'font-awesome/css/font-awesome.min.css';
import { useNavigate } from 'react-router-dom';

function UserDashboard() {
    const navigate = useNavigate();

    const articleClickHandler = (e) => {
        console.log("Called");
        navigate("/article-view", {state: {title: "Article", content: "here is the content", author: "Diksha", dateModified: "05 May, 2021"}})
    }
    return (
        <div>
            <Navbar />
            <Container >
                <div className='h-100px'></div>
                <Row>
                    <Col>
                        <div className='text-center'>
                            <input className='w-25' type="text" name="search" placeholder="Search article by name" />
                            <button className='p-btn w-30'><i className="fa fa-search" /> Search</button>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className="col-md-2">
                        <div className="color-light"><h4>Filter by:</h4></div>
                        <input type="checkbox"  name="dateFilter" value="Date" />
                        <label className='ml-5'>Date</label><br/>
                        <input type="checkbox"  name="authorFilter" value="Author" />
                        <label className='ml-5'>Author</label><br/>
                    </Col>
                    <Col>
                        <ArticleCard title="Article-1" content="here is the content" author="Diksha" dateModified="05 May, 2021" customClick={articleClickHandler}/>
                        <ArticleCard title="Article-2" content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)." author="Diksha" dateModified="05 May, 2021" />
                        <ArticleCard title="Article-1" content="here is the content" author="Diksha" dateModified="05 May, 2021" customClick={articleClickHandler} />
                        <ArticleCard title="Article-2" content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)." author="Diksha" dateModified="05 May, 2021" />
                        <ArticleCard title="Article-1" content="here is the content" author="Diksha" dateModified="05 May, 2021" customClick={articleClickHandler} />
                        <ArticleCard title="Article-2" content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)." author="Diksha" dateModified="05 May, 2021" />
                    </Col>
                    <Col className="col-md-2"></Col>
                </Row>
            </Container>
        </div>
    )
}

export default UserDashboard
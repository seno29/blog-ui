import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar/nav-bar'
import { Container, Row, Col } from 'react-bootstrap'
import ArticleCard from '../../components/ArticleCard/article-card'
import 'font-awesome/css/font-awesome.min.css'
import { useNavigate } from 'react-router-dom'
import { getBaseUrl } from '../../utility'
import axios from 'axios';

function UserDashboard() {
    const navigate = useNavigate();
    const [searchText, setsearchText] = useState("")
    const [loadingArticles, setloadingArticles] = useState(false)
    const [articles, setarticles] = useState([])

    useEffect(() => {
        setloadingArticles(true)
        const url = getBaseUrl() + "getAllArticles"
        // const url = getBaseUrl() + "getAllArticlesByUserId"
        // const url = "https://localhost:8070/getAllArticles"

        axios.get(url, {
            headers: {
               Authorization: "Bearer " + localStorage.getItem("token")
            }
         }).then((res) => {
            setloadingArticles(false)
            const result = res.data;
            if(result.status === 200){
                console.log(result.data.length)
                setarticles(result.data)
            }
        }).catch((err) => {
            console.log(err)
            setloadingArticles(false)
        })
    }, [])

    const onSearch = (e) => {
        console.log(searchText)
        const url = getBaseUrl() + "searchArticleByName"
        axios.get(url, {
            params: {
                "searchText": searchText
            }
        }).then((res) => {

        }).catch((err) => {
            console.log(err)
        })
    }

    const articleClickHandler = (e) => {
        console.log("Called");
        navigate("/article-view", { state: { title: e.title, content: e.content, author: e.author, dateModified: e.dateModified } })
    }
    return (
        <div>
            <Navbar />
            <Container >
                <div className='h-100px'></div>
                <Row>
                    <Col>
                        <div className='text-center'>
                            <input className='w-25' type="text" name="search" placeholder="Search article by name" onChange={(e) => setsearchText(e.target.value)} value={searchText} />
                            <button className='p-btn w-30' onClick={onSearch}><i className="fa fa-search" /> Search</button>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className="col-md-2">
                        <div className="color-light"><h4>Filter by:</h4></div>
                        <input type="checkbox" name="dateFilter" value="Date" />
                        <label className='ml-5'>Date</label><br />
                        <input type="checkbox" name="authorFilter" value="Author" />
                        <label className='ml-5'>Author</label><br />
                    </Col>
                    <Col>
                        {loadingArticles && "Loading articles..."}
                        {
                            !loadingArticles && articles.map((article, i) => (
                                <ArticleCard
                                key={i} 
                                title={article.title} 
                                content={article.content} 
                                author={article.author} 
                                dateModified={article.dateModified} 
                                customClick={articleClickHandler}
                                />
                            ))
                        }
                    </Col>
                    <Col className="col-md-2"></Col>
                </Row>
            </Container>
        </div>
    )
}

export default UserDashboard
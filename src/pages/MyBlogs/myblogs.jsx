import React, { useEffect, useState } from 'react'
import { getBaseUrl, getCurrentUserRole } from '../../utility'
import Navbar from '../../components/Navbar/nav-bar'
import { Container, Row, Col } from 'react-bootstrap'
import axios from 'axios';
import "./myblogs.css"
import { useNavigate } from 'react-router-dom';

function MyBlogs() {
  const [pubArticles, setpubArticles] = useState([])
  const [stArticles, setstArticles] = useState([])
  const [tabIndex, setTabIndex] = useState(1)

  const navigate = useNavigate()
  useEffect(() => {
    const url = getBaseUrl() + "getAllArticlesByUserId" //published articles
    axios.get(url, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    }).then((res) => {
      const result = res.data;
      if (result.status === 200) {
        console.log(result.data.length)
        setpubArticles(result.data)
      }
    }).catch((err) => {
      console.log(err)
    })
  }, [])
  useEffect(() => {
    const url = getBaseUrl() + "getAllStagedArticlesByUserId" //published articles
    axios.get(url, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    }).then((res) => {
      const result = res.data;
      if (result.status === 200) {
        console.log(result.data.length)
        setstArticles(result.data)
      }
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  const onEdit = (article) => {
    console.log("Edit called")
    navigate("/edit-article", { state: article })
  }

  const onHistory = (article) => {
    console.log("History called")
    navigate("/article-history", { state: article })
  }

  return (
    <div>
      <Navbar />
      <div className='h-100px'></div>
      <Container>
        <Row>
          <Col className="col-sm-2"></Col>
          <Col className="col-sm-8">
            <div className='f-24 color-light fw-600 m-10'>My Blogs</div>
            <div className="d-flex tab m-10">
              <div className={tabIndex === 1 ? "tab-item tab-active" : "tab-item"} onClick={(e) => setTabIndex(1)}>DRAFT</div>
              { getCurrentUserRole() === 2 &&
                <div className={tabIndex === 2 ? "tab-item tab-active" : "tab-item"} onClick={(e) => setTabIndex(2)}>IN REVIEW</div>
              }
              <div className={tabIndex === 3 ? "tab-item tab-active" : "tab-item"} onClick={(e) => setTabIndex(3)}>PUBLISHED</div>
            </div>
            {
              tabIndex === 1 &&
              stArticles.filter(article => article.status === 'DRAFT').map((article) => (
                <div className='a-outer' key={article.id + "" + article.articleId}>
                  <div className="d-flex title-div">
                    <div className="a-title">{article.title}</div>
                    <button className="p-btn p-12" onClick={(e) => onEdit(article)}><i className="fa fa-edit" /> Edit</button>
                  </div>
                  <div className="a-content">{article.content.length > 300 ? article.content.substring(0, 300) + "..." : article.content}</div>
                  <div className='a-date'>Posted on : {article.dateModified}</div>
                </div>
              ))
            }
            {
              tabIndex === 2 &&
              stArticles.filter(article => article.status === 'IN_REVIEW').map((article) => (
                <div className='a-outer' key={article.id + "" + article.articleId}>
                  <div className="d-flex title-div">
                    <div className="a-title">{article.title}</div>
                    <div className="color-light">IN REVIEW</div>
                  </div>
                  <div className="a-content">{article.content.length > 300 ? article.content.substring(0, 300) + "..." : article.content}</div>
                  <div className='a-date'>Posted on : {article.dateModified}</div>
                </div>
              ))
            }
            {
              tabIndex === 3 && pubArticles.length > 0 &&
              pubArticles.map((article) => (
                <div className='a-outer' key={article.id}>
                  <div className="d-flex title-div">
                    <div className="a-title">{article.title}</div>
                    <button className="p-btn p-12" onClick={(e) => onHistory(article)}> View History</button>
                    <button className="p-btn p-12" onClick={(e) => onEdit(article)}><i className="fa fa-edit" /> Edit</button>
                  </div>
                  <div className="a-content">{article.content.length > 300 ? article.content.substring(0, 300) + "..." : article.content}</div>
                  <div className='a-date'>Posted on : {article.dateModified}</div>
                </div>
              ))
            }
            {
              tabIndex === 3 && pubArticles.length === 0 &&
              <div className='text-center'>Go ahead and publish a blog</div>
            }
          </Col>
          <Col className="col-sm-2"></Col>
        </Row>
      </Container>
    </div>
  )
}

export default MyBlogs
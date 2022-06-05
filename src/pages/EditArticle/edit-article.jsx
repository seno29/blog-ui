import { useLocation } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar/nav-bar'
import { Container, Row, Col } from 'react-bootstrap'
import { getBaseUrl } from '../../utility'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function EditArticle() {
    const location = useLocation()
    const article = location.state

    const [title, settitle] = useState("")
    const [content, setcontent] = useState("")
    const navigate = useNavigate()
    
    useEffect(() => {
        settitle(article.title)
        setcontent(article.content)
    }, [article])

    const onDraft = () => {
        if(title !== "" && content!==""){
            const url = getBaseUrl() + "addArticle"
            axios.post(url, {
                "title": title,
                "content": content,
                "status": "DRAFT"
            }, {
                headers: {
                  'Authorization': `Bearer ${localStorage.getItem("token")}` 
                }}).then((res) => {
                const result = res.data
                if(result.status === 200){
                    alert(result.message)
                    navigate("/user-dashboard")
                }
                else{
                    alert(result.message)
                }
            }).catch((err)=>{
                console.log(err)
            })
        }
        else{
            alert("Please enter title or content can't be empty")
        }
    }
    const onPublish = () => {
        if(title !== "" && content!==""){
            const url = getBaseUrl() + "addArticle"
            axios.post(url, {
                "title": title,
                "content": content,
                "status": "IN_REVIEW"
            }, {
                headers: {
                  'Authorization': `Bearer ${localStorage.getItem("token")}` 
                }}).then((res) => {
                const result = res.data
                if(result.status === 200){
                    alert(result.message)
                    navigate("/user-dashboard")
                }
                else{
                    alert(result.message)
                }
            }).catch((err)=>{
                console.log(err)
            })
        }
        else{
            alert("Please enter title or content can't be empty")
        }
    }
    return (
        <div><Navbar />
            <Container >
                <div className='h-100px'></div>
                <Row>
                    <Col className="col-sm-2"></Col>
                    <Col className="col-sm-8">
                        <div className='f-24 color-light fw-600'>Edit your Blog...</div>
                        <form className='w-100 mt-10'>
                            <label className='color-light m-8'>Title:</label>
                            <div><input className='mt-8 w-100' name="title" type="text" onChange={(e) => settitle(e.target.value)} value={title} required /></div>

                            <label className='color-light m-8 mt-16'>Content:</label>
                            <div>
                                <textarea className='mt-8 w-100' rows="15" name="Content" type="text" onChange={(e) => setcontent(e.target.value)} value={content} required ></textarea>
                            </div>
                        </form>
                        <div className='d-flex justify-content-end'>
                            <button type="submit" className='p-btn m-2' onClick={onDraft}>Save Draft</button>
                            <button type="submit" className='filled-btn m-2' onClick={onPublish}>Publish</button>
                        </div>
                    </Col>
                    <Col className="col-sm-2"></Col>
                </Row>

            </Container>
        </div>
    )
}

export default EditArticle
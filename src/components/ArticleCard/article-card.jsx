import React from 'react'
import "./article-card.css"

function ArticleCard(props) {
    const {
        title,
        content,
        author,
        dateModified,
        customClick
    } = props;
    const onArticleClick = (e) => {
        customClick({
            "title":title,
            "content": content,
            "author": author,
            "dateModified": dateModified
        })
    }
    return (
        <div className='a-outer' onClick={onArticleClick}>
            <div className="d-flex title-div">
                <div className="a-title">{title}</div>
                <div className="a-author">Author : {author}</div>
            </div>
            <div className="a-content">{content.length > 300 ? content.substring(0,300) + "..." : content}</div>
            <div className='a-date'>Posted on : {dateModified}</div>
        </div>

    )
}

export default ArticleCard
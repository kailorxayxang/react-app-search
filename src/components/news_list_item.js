import React from 'react';
const NewsItem = (props) => {
    return (
        <div className="news_items">
            <h2>{props.item.title}</h2>
            <div>
                <p>{props.item.feed}</p>
            </div>
        </div>
    )
}

export default NewsItem;
import React from 'react';
import NewsItems from './news_list_item';
const newList = (props) => {
    //loop data from array
    const items = props.news.map((item) => {
        return (
            <NewsItems key={item.id} item={item}/>
        )
    })
    return (
        <div>
            {items}
        </div>
    )
}

export default newList;
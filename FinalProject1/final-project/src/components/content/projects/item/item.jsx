import React from "react";
import './items.css'
const Item = ({title}) => {
    console.log(title)
    let flot = 1
    return(
        <div className="item__wrapper">
            <a href={title.link} className="titleProject">
            {title.name}
            </a>
        </div>
    )
}

export default Item

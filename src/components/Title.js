import React from 'react'
import './Title.css'
const Title = (props) => {
    return(
        <div>
            <h1 className="title">This is the title Component</h1>
            <br/>
            <div>{props.title}</div>
            <h2 className="subtitle">ALL THE EVENTS FROM TITLE HERE</h2>
        </div>
    )

}

export default Title 

import React from "react";
import './CommentSection.css'

const CommentSection = props => {
    console.log(props)
    return (
        <div>
            <p className="ptag"><strong>{props.comment.username}</strong> {props.comment.text}</p>
        </div>
    )
}

export default CommentSection; 
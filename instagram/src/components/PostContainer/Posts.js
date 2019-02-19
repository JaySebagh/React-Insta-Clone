import React from "react";
import CommentSection from '../CommentSection/CommentSection'
import './PostContainer.css'

const Posts = props => {
    return (
        <div>
            <h1>{props.statusPost.username}</h1>
            <div>
                {
                    props.statusPost.comments.map((comment, i) => (<CommentSection comment={comment} key={i}/>))
                }
            </div>
            <input className="input" placeholder="Add a comment..."></input>
        </div>
    )
}

export default Posts; 
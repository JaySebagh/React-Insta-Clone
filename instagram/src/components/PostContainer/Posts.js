import React from "react";

const Posts = props => {
    return (
        <div>
            <h1>{props.statusPost.username}</h1>
            <div>
                {
                    props.statusPost.comments.map((comment, i) => (<p key={i}>{comment.username} {comment.text}</p>))
                }
            </div>
            <input></input>
        </div>
    )
}

export default Posts;
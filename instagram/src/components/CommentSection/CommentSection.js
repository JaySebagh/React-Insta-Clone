import React from "react";

const CommentSection = props => {
    return (
        <div>
                {
                    props.statusPost.comments.map((comment, i) => (<p key={i}>{comment.username} {comment.text}</p>))
                }
            <input></input>
        </div>
    )
}

export default CommentSection;
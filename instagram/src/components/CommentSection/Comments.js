import React from 'react';
import './CommentSection.css';

const Comments = props => {
    return (
        <div>
            <p className="ptag"><strong>{props.returnComment.username}</strong> {props.returnComment.text}</p>
        </div>
    )
}

export default Comments; 
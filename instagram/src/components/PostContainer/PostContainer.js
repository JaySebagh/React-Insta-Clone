import React from "react";
import Posts from "./Posts"
import './PostContainer.css'

const PostContainer = props => {
    return (
        <div className="post">
            {props.statusPost.map((obj, i) => (<Posts key={i} statusPost={obj}/>))}
        </div>
    );
}

export default PostContainer; 
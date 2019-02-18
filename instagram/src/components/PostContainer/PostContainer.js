import React from "react";
import Posts from "./Posts"

const PostContainer = props => {
    return (
        <div>
            {props.statusPost.map(obj => (<Posts statusPost={obj}/>))}
        </div>
    );
}

export default PostContainer;
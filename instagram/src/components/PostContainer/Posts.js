import React from "react";
import CommentSection from '../CommentSection/CommentSection'
import './PostContainer.css'

// class Posts extends Component {

// }

const Posts = props => {
    return (
        <div className="wrap">
            <div className="user">
                <img className="thumb" src={props.statusPost.thumbnailUrl} alt=""/>
                <h1 className="h1">{props.statusPost.username}</h1>
            </div>
            <div><img className="cover" src={props.statusPost.imageUrl} alt=""/></div>
            <CommentSection eachComment={props.statusPost.comments}/>

        </div>
    )
}

export default Posts; 
import React from "react";
import CommentSection from '../CommentSection/CommentSection'
import './PostContainer.css'

const Posts = props => {
    return (
        <div className="wrap">
            <div className="user">
                <img className="thumb" src={props.statusPost.thumbnailUrl} alt=""/>
                <h1 className="h1">{props.statusPost.username}</h1>
            </div>
            {/* <h1><img className="thumb" src={props.statusPost.thumbnailUrl} alt=""/> {props.statusPost.username}</h1> */}
            <div><img className="cover" src={props.statusPost.imageUrl} alt=""/></div>
            <i id="icon" class="far fa-heart"></i><i id="icon2" class="far fa-comment"></i>
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